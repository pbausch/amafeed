var sort = new Array();
var desc = new Array();
var node = new Array();

desc['-age-min'] = 'Age: high to low';
desc['albumrank'] = 'Album: A to Z';
desc['-albumrank'] = 'Album: Z to A';
desc['amzrank'] = 'Alphabetical: A to Z';
desc['artistalbumrank'] = 'Artist: A to Z';
desc['-artistalbumrank'] = 'Artist: Z to A';
desc['artistrank'] = 'Artist name: A to Z';
desc['availability'] = 'Most to least available';
desc['-date'] = 'Publication date: old to new';
desc['daterank'] = 'Publication date: new to old';
desc['-daterank'] = 'Publication date: old to new';
desc['date-desc-rank'] = 'Publication date: new to old';
desc['-edition-sales-velocity'] = 'Quickest to slowest selling products';
desc['featured'] = 'Featured items';
desc['inverseprice'] = 'Price: high to low';
desc['inverse-price'] = 'Price: high to low';
desc['inverse-pricerank'] = 'Price: high to low';
desc['launchdate'] = 'Launch date: newer to older';
desc['launch-date'] = 'Launch date: newer to older';
desc['-launch-date'] = 'Launch date: older to newer';
desc['mfg-age-min'] = 'Age: low to high';
desc['-mfg-age-min'] = 'Age: high to low';
desc['orig-rel-date'] = 'Original release date: earliest to latest';
desc['-orig-rel-date'] = 'Original release date: latest to earliest';
desc['paidsalesrank'] = '"Bestseller ranking';
desc['pct-off'] = 'Discount: high to low';
desc['-pct-off'] = 'Discount: low to high';
desc['pmrank'] = 'Featured items';
desc['popularityrank'] = 'Items ranked by popularity';
desc['popularity-rank'] = 'Items ranked by popularity';
desc['price'] = 'Price: low to high';
desc['-price'] = 'Price: high to low';
desc['price-asc-rank'] = 'Price: low to high';
desc['price-desc-rank'] = 'Price: high to low';
desc['price-new-bin'] = 'Price: low to high';
desc['-price-new-bin'] = 'Price: high to low';
desc['pricerank'] = 'Price: low to high';
desc['-pricerank'] = 'Price: high to low';
desc['psrank'] = 'Bestseller ranking.'
desc['pubdate'] = 'Publication date: newest to oldest';
desc['-pubdate'] = 'Publication date: oldest to most recent';
desc['publicationdate'] = 'Publication date: newest to oldest';
desc['publication_date'] = 'Publication date: newest to oldest';
desc['-publicationdate'] = 'Publication date: oldest to most recent';
desc['-publication_date'] = 'Publication date: oldest to most recent';
desc['releasedate'] = 'Release date: older to newer';
desc['release-date'] = 'Release date: older to newer';
desc['-releasedate'] = 'Release date: newer to older';
desc['-release-date'] = 'Release date: newer to older';
desc['relevance'] = 'Relevance';
desc['relevance-fs-rank'] = 'Relevance';
desc['relevancerank'] = 'Relevance';
desc['reviewrank'] = 'Highest to lowest ratings in customer reviews';
desc['review-rank'] = 'Highest to lowest ratings in customer reviews';
desc['reviewrank_authority'] = 'Review rank: high to low';
desc['-reviewrank_authority'] = 'Review rank: low to high';
desc['reviewscore'] = 'Review score';
desc['runtime'] = 'Track length: high to low';
desc['-runtime'] = 'Track length: low to high';
desc['sale-flag'] = 'On sale';
desc['salesrank'] = 'Bestselling';
desc['songtitlerank'] = 'Most popular';
desc['subslot-salesrank'] = 'Bestselling';
desc['titlerank'] = 'Alphabetical: A to Z';
desc['-titlerank'] = 'Alphabetical: Z to A';
desc['-unit-sales'] = 'Unit Sales';
desc['uploaddaterank'] = 'Date added';
desc['-video-release-date'] = 'Release date: newer to older';
desc['xsrelevancerank'] = 'Relevance';

sort['UnboxVideo'] = new Array('-launch-date','-price','-video-release-date','price','relevancerank','salesrank','titlerank');
sort['Appliances'] = new Array('-price','pmrank','price','relevancerank','reviewrank','reviewrank_authority','salesrank');
sort['MobileApps'] = new Array('-price','pmrank','price','relevancerank','reviewrank','reviewrank_authority');
sort['ArtsAndCrafts'] = new Array('-price','pmrank','price','relevancerank','reviewrank','reviewrank_authority','salesrank');
sort['Automotive'] = new Array('-price','-titlerank','price','relevancerank','salesrank','titlerank');
sort['Baby'] = new Array('-price','price','psrank','salesrank','titlerank');
sort['Beauty'] = new Array('-launch-date','-price','pmrank','price','sale-flag','salesrank');
sort['Books'] = new Array('-price','-publication_date','-titlerank','-unit-sales','daterank','inverse-pricerank','price','pricerank','relevancerank','reviewrank','salesrank','titlerank');
sort['Music'] = new Array('-orig-rel-date','-price','-releasedate','-titlerank','artistrank','orig-rel-date','price','psrank','release-date','releasedate','relevancerank','salesrank','titlerank');
sort['Wireless'] = new Array('-titlerank','daterank','inverse-pricerank','pricerank','reviewrank','salesrank','titlerank');
sort['Fashion'] = new Array('-price','launch-date','popularity-rank','price','relevancerank','reviewrank');
sort['FashionBaby'] = new Array('-price','launch-date','popularity-rank','price','relevancerank','reviewrank');
sort['FashionBoys'] = new Array('-price','launch-date','popularity-rank','price','relevancerank','reviewrank');
sort['FashionGirls'] = new Array('-price','launch-date','popularity-rank','price','relevancerank','reviewrank');
sort['FashionMen'] = new Array('-price','launch-date','popularity-rank','price','relevancerank','reviewrank');
sort['FashionWomen'] = new Array('-price','launch-date','popularity-rank','price','relevancerank','reviewrank');
sort['Collectibles'] = new Array('-price','price','relevancerank','reviewrank','reviewrank_authority','salesrank');
sort['PCHardware'] = new Array('-price','price','psrank','salesrank','titlerank');
sort['MP3Downloads'] = new Array('-price','-releasedate','price','relevancerank','salesrank');
sort['Electronics'] = new Array('-price','pmrank','price','reviewrank','salesrank','titlerank');
sort['GiftCards'] = new Array('-price','price','relevancerank','reviewrank','reviewrank_authority','salesrank');
sort['Grocery'] = new Array('inverseprice','launch-date','pricerank','relevancerank','sale-flag','salesrank');
sort['HealthPersonalCare'] = new Array('inverseprice','launch-date','pmrank','pricerank','sale-flag','salesrank');
sort['HomeGarden'] = new Array('-price','-titlerank','price','salesrank','titlerank');
sort['Industrial'] = new Array('-price','-titlerank','pmrank','price','salesrank','titlerank');
sort['KindleStore'] = new Array('-edition-sales-velocity','-price','daterank','price','relevancerank','reviewrank','salesrank');
sort['Luggage'] = new Array('-price','launch-date','popularity-rank','price','relevancerank','reviewrank');
sort['Magazines'] = new Array('-price','-publication_date','-titlerank','-unit-sales','daterank','price','reviewrank','subslot-salesrank','titlerank');
sort['Movies'] = new Array('-price','-release-date','featured','price','relevancerank','reviewrank');
sort['MusicalInstruments'] = new Array('-launch-date','-price','pmrank','price','sale-flag','salesrank');
sort['OfficeProducts'] = new Array('-price','pmrank','price','reviewrank','salesrank','titlerank');
sort['LawnAndGarden'] = new Array('-price','price','relevancerank','reviewrank','reviewrank_authority','salesrank');
sort['PetSupplies'] = new Array('-price','-titlerank','price','relevance','relevancerank','reviewrank','reviewrank_authority','salesrank','titlerank');
sort['Pantry'] = new Array('-price','price','relevancerank','reviewrank');
sort['Software'] = new Array('-price','pmrank','price','salesrank','titlerank');
sort['SportingGoods'] = new Array('-price','inverseprice','launch-date','price','pricerank','relevance-fs-rank','relevancerank','reviewrank_authority','sale-flag','salesrank');
sort['Tools'] = new Array('-price','-titlerank','pmrank','price','salesrank','titlerank');
sort['Toys'] = new Array('-age-min','-price','pmrank','price','salesrank','titlerank');
sort['VideoGames'] = new Array('-price','pmrank','price','salesrank','titlerank');
sort['Wine'] = new Array('-price','featured','price','relevancerank','reviewrank','reviewscore');

node['UnboxVideo'] = 2858778011;
node['Appliances'] = 2619526011;
node['MobileApps'] = 2350150011;
node['ArtsAndCrafts'] = 2617942011;
node['Automotive'] = 15690151;
node['Baby'] = 165797011;
node['Beauty'] = 11055981;
node['Books'] = 1000;
node['Music'] = 301668;
node['Wireless'] = 2335753011;
node['Fashion'] = 7141124011;
node['FashionBaby'] = 7147444011;
node['FashionBoys'] = 7147443011;
node['FashionGirls'] = 7147442011;
node['FashionMen'] = 7147441011;
node['FashionWomen'] = 7147440011;
node['Collectibles'] = 4991426011;
node['PCHardware'] = 541966;
node['MP3Downloads'] = 624868011;
node['Electronics'] = 493964;
node['GiftCards'] = 2864120011;
node['Grocery'] = 16310211;
node['HealthPersonalCare'] = 3760931;
node['HomeGarden'] = 1063498;
node['Industrial'] = 16310161;
node['KindleStore'] = 133141011;
node['Luggage'] = 9479199011;
node['Magazines'] = 599872;
node['Movies'] = 2625374011;
node['MusicalInstruments'] = 11965861;
node['OfficeProducts'] = 1084128;
node['LawnAndGarden'] = 3238155011;
node['PetSupplies'] = 2619534011;
node['Pantry'] = 0;
node['Software'] = 409488;
node['SportingGoods'] = 3375301;
node['Tools'] = 468240;
node['Toys'] = 165795011;
node['VideoGames'] = 11846801;
node['Wine'] = 2983386011;

function setsort() {
	var sel = document.forms[0].store;
	var selopts = document.forms[0].sort;
	var selcat = document.forms[0].cat;
	var idx = sel[sel.selectedIndex].value;
	if (!idx) return;
	if (idx == 'All') {
		selopts.options.length = 0;
		selopts.options[0] = new Option('---','---');
		selopts.disabled = true;
		selcat.options.length = 0;
		selcat.options[0] = new Option('Any','0');
		return;
	} else {
		selopts.disabled = false;
	}
	var opts = sort[idx];
	if (!opts) return;
	selopts.options.length = 0;
	for(var i=0;i<opts.length;i++) {
		var description = desc[opts[i]];
		if (description == undefined) {
			description = opts[i];
		}
		selopts.options[i] = new Option(description,opts[i]);
	}
	sortSelect(selopts);
	setSelect(selopts);
	setCat(node[idx]);
}

function setCat(node) {
	var selcat = document.forms[0].cat;
	
	if (node == 0) {
		selcat.options.length = 0;
		selcat.options[0] = new Option('Any','0');
		return;
	}
	
	var xhr = new XMLHttpRequest();
	xhr.open('GET', '/amafeed/nodes?rootId=' + node, true);
	xhr.onload = function(e) {
	  if (this.status == 200) {
	      selcat.disabled = false;
		  selcat.options.length = 0;
		  var results = JSON.parse(xhr.responseText);
		  selcat.options[0] = new Option('Any',0);
		  for(var i=0;i<results.length;i++) {
			var browseNodeId = results[i].BrowseNodeId[0];
			var browseName = results[i].Name[0];
			selcat.options[(i+1)] = new Option(browseName,browseNodeId);
		  }
	  }
	  else {
		selcat.options.length = 0;
		selcat.options[0] = new Option('Any','0');
	  }
	};
	xhr.send();
}

function setlabel() {
	var sel = document.forms[0].sort;
	var hdnsrt = document.forms[0].sortBy;
	var idx = sel[sel.selectedIndex].value;
	if (!idx) return;
	hdnsrt.value = desc[idx].toLowerCase();
}

function setcatlabel() {
	var sel = document.forms[0].cat;
	var hdnsrt = document.forms[0].category;
	var idx = sel[sel.selectedIndex].text;
	if (!idx) return;
	hdnsrt.value = idx;
}

function setpslabel() {
	var sel = document.forms[1].sort;
	var hdnsrt = document.forms[1].sortBy;
	var idx = sel[sel.selectedIndex].value;
	if (!idx) return;
	hdnsrt.value = desc[idx].toLowerCase();
}

function verify() {
	var f = document.forms[0].keyword;
	var k = new String(f.value);
	k.replace(/^\s*|\s*$/g,"");
	if ((k == '') || (k == ' ') || (k.length < 3)) {
		alert("Don't forget to enter a keyword, Step 1.");
		return false;
	} else {
		return true;
	}
}

function sortSelect(selElem) {
    var tmpAry = new Array();
    for (var i=0;i<selElem.options.length;i++) {
        tmpAry[i] = new Array();
        tmpAry[i][0] = selElem.options[i].text;
        tmpAry[i][1] = selElem.options[i].value;
    }
    tmpAry.sort();
    while (selElem.options.length > 0) {
        selElem.options[0] = null;
    }
    for (var i=0;i<tmpAry.length;i++) {
        var op = new Option(tmpAry[i][0], tmpAry[i][1]);
        selElem.options[i] = op;
    }
    return;
}

function setSelect(selElem) {
	var hdnsrt = document.forms[0].sortBy;
	var set = 0;
    for (var i=0;i<selElem.options.length;i++) {
        selText = selElem.options[i].text;
		if (selText == "Relevance") {
			selElem.options[i].selected = 'selected';
			hdnsrt.value = selText;
			set = 1;
		}
    }
	if (set == 0) {
		for (var i=0;i<selElem.options.length;i++) {
	        selText = selElem.options[i].text;
			if (selText == "Bestselling") {
				selElem.options[i].selected = 'selected';
				hdnsrt.value = selText;
				set = 1;
			}
	    }
	}
}
