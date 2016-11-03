var express = require('express');
var fs = require('fs');
var amazon = require('amazon-product-api');
var RSS = require('rss');
var url = require('url');
var app = express();
var xml;
app.get('/amafeed', function(req, res) {

	var queryData = url.parse(req.url, true).query;
	
	if (queryData.keyword) {
		
		var amznStore = "Books";
		if (queryData.store) {
			amznStore = queryData.store;
		}
		
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
			var feed = new RSS({
				title: queryData.keyword + ' ' + amznStore.toLowerCase() + ' on Amazon',
				description: 'Search results for the keyword ' + queryData.keyword + ' across ' + amznStore.toLowerCase() + ' on Amazon.',
				site_url: "http://www.onfocus.com/amafeed/",
				language: 'en',
				ttl: '60'
			});
			var keys = Object.keys( results );
			for( var i = 0,length = keys.length; i < length; i++ ) {
				var img_html = ''; 
				var item_details = '';
			    var item = results[ keys[ i ] ];
			 	var asin = item['ASIN'][0];
			 	var url = item['DetailPageURL'][0];

			 	var itemattr = item['ItemAttributes'][0];
			 	var title = itemattr['Title'][0];

				// Book only
				if (amznStore == 'Books') {
			 		var author = itemattr['Author'][0];
			 		var binding = itemattr['Binding'][0];
					item_details = 'by ' + author + ' (' + binding + ')<br />'
				}

			 	var price = 'price unknown';
			 	if (item.hasOwnProperty('OfferSummary')) {
			 		var offer = item['OfferSummary'][0];
					if (offer.hasOwnProperty('LowestNewPrice')) {
			 			price = offer['LowestNewPrice'][0]['FormattedPrice'][0];
					}
			 	}

			 	if (item.hasOwnProperty('LargeImage')) {
				 	var image = item['LargeImage'][0];
				 	var image_url = image['URL'][0];
				 	var image_width = image['Width'][0]['_'];
				 	var image_height = image['Height'][0]['_'];
					img_html = '<img src="'+ image_url +'" width="'+ image_width +'" height="'+ image_height +'" alt="amazon book image" /><br /><br />';
	 			}
	
				feed.item({
					title: title,
					description: img_html + item_details + price,
					url: url
				});
			}
			xml = feed.xml({indent: true});
			res.end(xml);
		}).catch(function(err){
		  console.log(err);
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