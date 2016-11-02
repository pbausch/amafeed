# Amafeed

Generate Amazon search RSS feeds. Usage:

	/amafeed?keyword=[keyword]

Will return an RSS feed for books matching the keyword, sorted by publication date (more or less).

You'll need an Amazon API Key and Secret that you can set as environment variables, like so:

	AWS_ID=[Key] AWS_SECRET=[Secret] node server.js
