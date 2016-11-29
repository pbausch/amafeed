# Amafeed

Generate Amazon (US) search RSS feeds. 

## Usage

	/amafeed

This will show a form where you can enter a keyword and select an Amazon department. Click 'get feed' to go to a URL like this:

	/amafeed?keyword=[keyword]&store=[store]&sort=[sort type]
	
This will be an RSS feed of the top 10 items matching that search with the selected sort. You can find a list of stores (search indexes) and sort types here: [Locale Information for the US Marketplace](http://docs.aws.amazon.com/AWSECommerceService/latest/DG/LocaleUS.html)

If you know the BrowseNodeId of a particular category within a store, you can include it with the `cat` variable:

	/amafeed?keyword=[keyword]&store=[store]&sort=[sort type]&cat=[Browse Node ID]

You can also get an HTML preview of the feed contents by adding the preview variable:

	/amafeed?keyword=[keyword]&store=[store]&sort=[sort type]&preview=1

## Setup

You'll need an Amazon API Key and Secret that you can set as environment variables, like so:

	AWS_ID=[Key] AWS_SECRET=[Secret] node server.js

Responses are cached to disk so you'll need to clear the cache periodically to get the most recent feed. You can set up a cron task along the lines of:

	find [app directory]/cache/ -type f -mmin +60 -delete

This will delete all cache files every hour. Adjust `-mmin` to change the frequency.
