// Injects shared nav + footer into every page; handles mobile menu + active link.
(function(){
  var nav = `
  <header class="nav">
    <div class="nav-inner">
      <a class="brand" href="index.html">蔡启玲<small>KELLIN · PORTFOLIO</small></a>
      <button class="burger" id="burger" aria-label="菜单"><span></span><span></span><span></span></button>
      <nav class="menu" id="menu">
        <a href="about.html">关于我</a>
        <a href="experience.html">工作经历</a>
        <a href="cases.html">项目案例</a>
        <a href="works.html">作品精选</a>
        <a href="index.html#contact">联系</a>
      </nav>
    </div>
  </header>`;
  var foot = `
  <footer class="footer">
    <div class="wrap">
      <div>
        <div class="f-brand">蔡启玲 · Kellin</div>
        <div style="margin-top:10px;font-size:14px;color:#a89e92">新媒体运营 · 营销策划 · 文案 · 设计</div>
      </div>
      <div class="f-contact">
        <div><b>电话</b>178 7651 0823</div>
        <div><b>微信</b>alaymym16</div>
        <div><b>邮箱</b>caiqiling08@163.com</div>
        <div><b>现居</b>广东 · 广州</div>
      </div>
      <div class="copy">© 2026 蔡启玲 个人作品集 · 仅供求职展示使用</div>
    </div>
  </footer>`;
  var navRoot = document.getElementById('nav-root');
  var footRoot = document.getElementById('foot-root');
  if(navRoot) navRoot.outerHTML = nav;
  if(footRoot) footRoot.outerHTML = foot;

  // mobile menu
  var burger = document.getElementById('burger');
  var menu = document.getElementById('menu');
  if(burger && menu){
    burger.addEventListener('click', function(){ menu.classList.toggle('open'); });
    menu.addEventListener('click', function(e){ if(e.target.tagName==='A') menu.classList.remove('open'); });
  }
  // active link
  var here = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.menu a').forEach(function(a){
    var h = a.getAttribute('href').split('#')[0];
    if(h === here) a.classList.add('active');
  });
})();
