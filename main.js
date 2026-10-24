(function(){
  var d=document,h=d.documentElement;
  h.classList.add('js');
  var t=d.getElementById('mob-toggle'),ov=d.getElementById('mob-overlay'),dr=d.getElementById('mob-drawer'),cl=d.getElementById('mob-close');
  function set(o){h.classList.toggle('nav-open',o);if(t)t.setAttribute('aria-expanded',o?'true':'false');if(dr)dr.setAttribute('aria-hidden',o?'false':'true');}
  if(t){t.addEventListener('click',function(){set(!h.classList.contains('nav-open'));});}
  if(ov){ov.addEventListener('click',function(){set(false);});}
  if(cl){cl.addEventListener('click',function(){set(false);});}
  d.addEventListener('keydown',function(e){if(e.key==='Escape')set(false);});
  window.addEventListener('resize',function(){if(window.innerWidth>768)set(false);});
  var qs=d.querySelectorAll('.faq-q');
  for(var i=0;i<qs.length;i++){(function(b){
    b.addEventListener('click',function(){
      var a=d.getElementById(b.getAttribute('aria-controls'));
      var o=b.getAttribute('aria-expanded')==='true';
      b.setAttribute('aria-expanded',o?'false':'true');
      a.style.maxHeight=o?'0px':a.scrollHeight+'px';
    });
  })(qs[i]);}
})();
