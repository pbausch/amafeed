var express = require('express');
var fs = require('fs');
var amazon = require('amazon-product-api');
var RSS = require('rss');
var url = require('url');
var parseResults = require('./parseresults.js');
var app = express();
var xml;

app.get('/amafeed', function(req, res) {

	var queryData = url.parse(req.url, true).query;
	
	if (queryData.keyword) {
		var amznStore = "Books";
		if (queryData.store) {
			amznStore = queryData.store;
		}
		var htmlPreview;
		var feed = new RSS({
			title: queryData.keyword + ' ' + amznStore.toLowerCase() + ' on Amazon',
			description: 'Search results for the keyword ' + queryData.keyword + ' across ' + amznStore.toLowerCase() + ' on Amazon.',
			site_url: "http://www.onfocus.com/amafeed/",
			language: 'en',
			ttl: '60'
		});
		var client = amazon.createClient({
		  awsTag: "onfocus",
		  awsId: process.env.AWS_ID,
		  awsSecret: process.env.AWS_SECRET
		});
		client.itemSearch({
		  keywords: queryData.keyword,
		  searchIndex: amznStore,
		  responseGroup: 'ItemAttributes,Offers,Images'
		}).then(function(results){
			var items = parseResults(results);
			if (queryData.preview == 1) {
				res.writeHead(200, {
		            'Content-Type': 'text/html'
		        });
				res.write("<html><body>");
				for (var i = 0; i < items.length; i++) {
					res.write("<h2>" + items[i].title + "</h2>");
					res.write("<p>" + items[i].description + "</p>");
					res.write("<br/ >");
				}
				res.write("</body></html>");
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
			console.log(err);
			res.writeHead(200, {
	            'Content-Type': 'text/html',
	            'Content-Length': data.length
	        });
	        res.write("Sorry, hit an error.");
	        res.end();
		});

  	} else {
	    fs.readFile('index.html', function (err, data) {
	        res.writeHead(200, {
	            'Content-Type': 'text/html',
	            'Content-Length': data.length
	        });
	        res.write(data);
	        res.end();
	    });
  	}
});

app.listen('3000');
console.log('server started on 3000');