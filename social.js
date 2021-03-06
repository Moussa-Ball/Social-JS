(function() {
    var b = function(a, b, c, d){
        c = c || socialParams.width;
        d = d || socialParams.height;
        window.open(a, b, "scrollbars=yes, width=" + c + ", height=" + d +", top="+
            ((window.screenTop || window.screenY) +
            (window.innerWidth||document.documentElement.clientHeight) / 2 - d) +", " +
            "left=" +((window.screenLeft||window.screenX) +
            (window.innerWidth || document.documentElement.clientWidth) / 2 - c / 2) + "").focus();
        return!0
    };

    /**
     * Share on Twitter
     */
    document.querySelector(".share_twitter").addEventListener("click",function(a){
        a.preventDefault();
        a = this.getAttribute("data-url");a="https://twitter.com/intent/tweet?text="+
            encodeURIComponent(document.title)+
            "&via=Moussa__Ball&url=" + encodeURIComponent(a);
        b(a, socialParams.twitter)});

    /**
     * Share on Facebook
     */
    document.querySelector(".share_facebook").addEventListener("click",function(a){
        a.preventDefault();
        a = this.getAttribute("data-url");a='https://www.facebook.com/sharer/sharer.php?u=' +
            encodeURIComponent(a);
        b(a, socialParams.facebook)});

    /**
     * Share on Google+
     */
    document.querySelector(".share_google-plus").addEventListener("click",function(a){
        a.preventDefault();
        a = this.getAttribute("data-url");a="https://www.plus.google.com/share?url="+
            encodeURIComponent(a);
        b(a, socialParams.google_plus)});

    /**
     * Share on Linkedin
     */
    document.querySelector(".share_linkedin").addEventListener("click",function(a){
        a.preventDefault();
        a =this.getAttribute("data-url");
        a ="https://www.linkedin.com/shareArticle?url="+encodeURIComponent(a);
        b(a, socialParams.linkedin)});
})();