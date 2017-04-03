# Social JS Plugin
Share your content on the social networks
### Using :
1 : Import the file social.js or social.min.js in your page
```
<script type='text/javascript' src="social.min.js"></script>
```
2 : You must create a variable object containing information that the script needs
```
var socialParams = {
  twitter: 'Share on twitter',
  google_plus: 'Share on google+'
  facebook: 'Share on facebook'
  linkedin: 'Share on linkedin'
  width: 680
  height: 360
};
```
3 : Create your buttons social each with the class share_ followed the name of the social network then add to the button an attribute data-url then add as a value the url that you want shared on a social network.
```
< button data-url="http://www.devphorm.com" class="share_twitter">< /button>
   < button data-url="http://www.devphorm.com" class="share_google-plus">< /button>
< button data-url="http://www.devphorm.com" class="share_linkedin">< /button>
< button data-url="http://www.devphorm.com" class="share_facebook">< /button>
```
