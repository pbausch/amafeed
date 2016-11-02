var express = require('express');
var amazon = require('amazon-product-api');
var RSS = require('rss');
var url = require('url');
var app = express();
var xml;
app.get('/amafeed', function(req, res) {

	var queryData = url.parse(req.url, true).query;
	
	if (queryData.keyword) {
		
		var client = amazon.createClient({
		  awsTag: "onfocus",
		  awsId: process.env.AWS_ID,
		  awsSecret: process.env.AWS_SECRET
		});

		client.itemSearch({
		  keywords: queryData.keyword,
		  searchIndex: 'Books',
		  responseGroup: 'ItemAttributes,Offers,Images',
		  sort: 'daterank'
		}).then(function(results){
			var feed = new RSS({
				title: queryData.keyword + ' books on Amazon',
				description: 'Search results for the keyword ' + queryData.keyword + ' across books on Amazon.',
				site_url: "http://www.onfocus.com/amafeed/",
				language: 'en',
				ttl: '60'
			});
			var keys = Object.keys( results );
			for( var i = 0,length = keys.length; i < length; i++ ) {
			    var item = results[ keys[ i ] ];
			 	var asin = item['ASIN'][0];
			 	var url = item['DetailPageURL'][0];

			 	var itemattr = item['ItemAttributes'][0];
			 	var title = itemattr['Title'][0];
			 	var author = itemattr['Author'][0];
			 	var binding = itemattr['Binding'][0];

			 	var price = 'price unknown';
			 	if (item.hasOwnProperty('OfferSummary')) {
			 		var offer = item['OfferSummary'][0];
					if (offer.hasOwnProperty('LowestNewPrice')) {
			 			price = offer['LowestNewPrice'][0]['FormattedPrice'][0];
					}
			 	}

				var img_html = '';
			 	if (item.hasOwnProperty('LargeImage')) {
				 	var image = item['LargeImage'][0];
				 	var image_url = image['URL'][0];
				 	var image_width = image['Width'][0]['_'];
				 	var image_height = image['Height'][0]['_'];
					img_html = '<img src="'+ image_url +'" width="'+ image_width +'" height="'+ image_height +'" alt="amazon book image" /><br /><br />';
	 			}
	
				feed.item({
					title: title,
					description: img_html + 'by ' + author + ' (' + binding + ')<br />' + price,
					url: url
				});
			}
			xml = feed.xml({indent: true});
			res.end(xml);
		}).catch(function(err){
		  console.log(err);
		});

  	} else {
		res.end("Need a keyword!");
  	}
});

app.listen('3000');
console.log('server started on 3000');