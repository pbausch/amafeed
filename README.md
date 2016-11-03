# Amafeed

Generate Amazon (US) search RSS feeds. Usage:

	/amafeed

This will show a form where you can enter a keyword and select an Amazon department. Click 'get feed' to go to a URL like this:

	/amafeed?keyword=[keyword]&store=[store]
	
This will be an RSS feed of the top 10 items matching that search.

You can also get an HTML preview of the feed contents by adding the preview variable:

	/amafeed?keyword=[keyword]&store=[store]&preview=1

You'll need an Amazon API Key and Secret that you can set as environment variables, like so:

	AWS_ID=[Key] AWS_SECRET=[Secret] node server.js
