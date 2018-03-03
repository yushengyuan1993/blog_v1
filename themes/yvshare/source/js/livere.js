// livere.com 评论系统
(function(d, s) {
    var j, e = d.getElementsByTagName(s)[0];

    if (typeof LivereTower === 'function') { return; }

    j = d.createElement(s);
    j.src = 'https://cdn-city.livere.com/js/embed.dist.js';
    j.async = true;

    e.parentNode.insertBefore(j, e);
})(document, 'script');

// swiftype 搜索系统
(function(w,d,t,u,n,s,e){w['SwiftypeObject']=n;w[n]=w[n]||function(){
(w[n].q=w[n].q||[]).push(arguments);};s=d.createElement(t);
e=d.getElementsByTagName(t)[0];s.async=1;s.src=u;e.parentNode.insertBefore(s,e);
})(window,document,'script','//s.swiftypecdn.com/install/v2/st.js','_st');

_st('install','1-sBczVpQ3oDGvU8L5aH','2.0.0');