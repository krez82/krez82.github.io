var posts=["posts/224d.html","posts/fd28.html","posts/3290.html","posts/2700.html","posts/df2a.html","posts/d153.html","posts/94a6.html","posts/ab5b.html","posts/fb4c.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };