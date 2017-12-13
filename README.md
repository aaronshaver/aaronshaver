# portland-air-pressure

This was mostly for learning some Route 53 and JavaScript.

I got tired of working on it:

* CORS issues (source didn't support JSONP, etc.) trying to fetch data clientside
* security issue trying to fetch local file clientside

I was trying to do a very lightweight serverless approach (Lambda, S3 static, etc.) but it was pretty foreign for me.

I'm going to spin out a separate prototype / MVP project where I simply try to write to S3 via Lambda and read in using JavaScript.
