module.exports = function (results) {
	var keys = Object.keys( results );
	var items = new Array();
	for( var i = 0,length = keys.length; i < length; i++ ) {
		var img_html = ''; 
		var item_details = '';
	    var item = results[ keys[ i ] ];
	 	var asin = item['ASIN'][0];
	 	var url = item['DetailPageURL'][0];

	 	var itemattr = item['ItemAttributes'][0];
	 	var title = itemattr['Title'][0];

		var author = '';
		if (itemattr.hasOwnProperty('Author')) {
	 		author = itemattr['Author'][0];
			item_details = item_details + 'by ' + author;
		}
		var binding = ''
		if (itemattr.hasOwnProperty('Binding')) {
			binding = itemattr['Binding'][0];
			item_details = item_details + ' (' + binding + ')<br />';
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
			img_html = '<a href="'+ url +'"><img src="'+ image_url +'" width="'+ image_width +'" height="'+ image_height +'" alt="amazon book image" border="0" /></a><br /><br />';
		}
		
		var feedItem = {
			title: title,
			link: url,
			description: img_html + item_details + price
		}
		items.push(feedItem);
	}
	return items;
}