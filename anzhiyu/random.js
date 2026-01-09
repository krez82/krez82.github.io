var posts=["posts/fd28.html","posts/2700.html","posts/224d.html","posts/3290.html","posts/df2a.html","posts/ab5b.html","posts/d153.html","posts/fb4c.html","posts/94a6.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };