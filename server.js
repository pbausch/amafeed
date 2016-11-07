var express = require('express');
var fs = require('fs');
var amazon = require('amazon-product-api');
var RSS = require('rss');
var url = require('url');
var parseResults = require('./parseresults.js');
var app = express();
var path = require('path');
var xml;

function mydump(arr,level) {
    var dumped_text = "";
    if(!level) level = 0;

    var level_padding = "";
    for(var j=0;j<level+1;j++) level_padding += "    ";

    if(typeof(arr) == 'object') {  
        for(var item in arr) {
            var value = arr[item];

            if(typeof(value) == 'object') { 
                dumped_text += level_padding + "'" + item + "' ...\n";
                dumped_text += mydump(value,level+1);
            } else {
                dumped_text += level_padding + "'" + item + "' => \"" + value + "\"\n";
            }
        }
    } else { 
        dumped_text = "===>"+arr+"<===("+typeof(arr)+")";
    }
    return dumped_text;
}

String.prototype.capitalizeFirstLetter = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

app.get('/amafeed/js/amafeed.js', function(req, res) {
	var js = fs.readFileSync(path.join(__dirname, '/js') + '/amafeed.js');
    res.writeHead(200, {
        'Content-Type': 'text/javascript'
    });
    res.write(js);
    res.end();
});

app.get('/amafeed/js/analytics.js', function(req, res) {
	var js = fs.readFileSync(path.join(__dirname, '/js') + '/analytics.js');
    res.writeHead(200, {
        'Content-Type': 'text/javascript'
    });
    res.write(js);
    res.end();
});

app.get('/amafeed', function(req, res) {

	var queryData = url.parse(req.url, true).query;
	
	if (queryData.keyword) {
		var amznStore = "Books";
		var amznSort = "relevancerank";
		var amznSortBy = "Relevance";
		if (queryData.store) {
			amznStore = queryData.store;
		}
		if (queryData.sort) {
			amznSort = queryData.sort;
		}
		if (queryData.sortBy) {
			amznSortBy = queryData.sortBy;
		}
		var searchParams;
		if (amznStore == "All") {
			searchParams = {
			  keywords: queryData.keyword,
			  searchIndex: amznStore,
			  responseGroup: 'ItemAttributes,Offers,Images'
			};
		}
		else {
			searchParams = {
			  keywords: queryData.keyword,
			  searchIndex: amznStore,
			  sort: amznSort,
			  responseGroup: 'ItemAttributes,Offers,Images'
			};			
		}
		var feedTitle = queryData.keyword;
		if (amznStore !== 'All') {
			feedTitle += ' ' + amznStore;
		}
		feedTitle += ' on Amazon';
		var feedDescription = 'Search results for the keyword ' + queryData.keyword + ' across ';
		if (amznStore == 'All') {
			feedDescription += 'all departments';
		}
		else {
			feedDescription += amznStore.toLowerCase(); 
		}
		feedDescription += ' on Amazon.';
		var feed = new RSS({
			title: feedTitle,
			description: feedDescription,
			site_url: "https://www.onfocus.com/amafeed/",
			language: 'en',
			ttl: '1440'
		});
		var feedUrl = 'http://amafeed.onfocus.com/?keyword=' + queryData.keyword;
		feedUrl += '&store=' + escape(amznStore);
		feedUrl += '&sort=' + escape(amznSort);
		feedUrl += '&sortBy=' + escape(amznSortBy);
		var htmlHead = fs.readFileSync(path.join(__dirname, '/templates') + '/onfocus-header.html');
		htmlHead += '<h2>Feed Preview</h2><div class="post" style="margin-top:18px;"><p>Here\'s a preview of your feed. You can subscribe with this <a href="'+ feedUrl +'">feed URL</a>.<br /><br /><div class="formRow"><label for="sort"><span class="number">5</span> Copy the feed URL and paste into your newsreader</label><div class="formElement"><textarea class="txtFeed" onclick="this.focus();this.select()" readonly="readonly">'+ feedUrl +'</textarea></div></div>Not what you were after? You can <a href="/amafeed">go back and try again</a>.</p></div><h2 class="archive-title">' + feedTitle +'</h2><div class="post">';
		htmlHead += '<p>'+ feedDescription + '</p><br /><br />';
		var htmlFoot = "</div></div>" + fs.readFileSync(path.join(__dirname, '/templates') + '/onfocus-footer.html');
		var client = amazon.createClient({
		  awsTag: "onfocus",
		  awsId: process.env.AWS_ID,
		  awsSecret: process.env.AWS_SECRET
		});
		client.itemSearch(searchParams).then(function(results){
			var items = parseResults(results);
			if (queryData.preview == 1) {
				res.writeHead(200, {
		            'Content-Type': 'text/html'
		        });
				res.write(htmlHead);
				for (var i = 0; i < items.length; i++) {
					res.write("<div class=\"amazonItem\"><h3><a href='"+ items[i].link +"'>" + items[i].title + "</a></h3>");
					res.write(items[i].description);
					res.write("</div>");
				}
				res.write(htmlFoot);
		        res.end();
			}
			else {
				for (var i = 0; i < items.length; i++) {
					feed.item({
						title: items[i].title,
						description: items[i].description,
						url: items[i].link
					});
				}
				xml = feed.xml({indent: true});
				res.end(xml);			
			}
		}).catch(function(err) {
			for (var i = 0; i < err.length; i++) {
				console.log(mydump(err[i]));
			}
			res.writeHead(200, {
	            'Content-Type': 'text/html'
	        });
	        res.write("Sorry, hit an error.");
	        res.end();
		});

  	} else {
		var htmlHead = fs.readFileSync(path.join(__dirname, '/templates') + '/onfocus-header.html');
		var html = fs.readFileSync(path.join(__dirname, '/') + 'index.html');
		var htmlFoot = fs.readFileSync(path.join(__dirname, '/templates') + '/onfocus-footer.html');
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        res.write(htmlHead + html + htmlFoot);
        res.end();
  	}
});

app.listen('3000');
console.log('server started on 3000');