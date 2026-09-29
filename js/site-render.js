/* ============================================================
   SENHONG ATELIER — 全站渲染脚本（数据来自 data/site-data.js）
   品牌名 / 地址 / 电话 / 页脚 / 产品网格 / 首页类目卡 / 产品详情
   ============================================================ */
(function () {
  'use strict';
  var D = window.SITE_DATA;
  if (!D) return;

  var $ = function (sel, root) { return (root || document).querySelector(sel); };
  var $$ = function (sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); };
  var esc = function (s) {
    return String(s === undefined || s === null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  };
  var brandHTML = esc(D.brand.first) + '<span> ' + esc(D.brand.accent.trim()) + '</span>';

  /* ---------- 1. 品牌 / 页脚 / 联系方式 ---------- */
  function applyBrand() {
    $$('.logo').forEach(function (el) { el.innerHTML = brandHTML; });
    $$('.ft-brand h3').forEach(function (el) { el.innerHTML = brandHTML; });

    /* 页脚：兼容 .ft-brand/.ft-col 结构和 contact 页的内联样式结构 */
    $$('footer').forEach(function (ft) {
      var h3 = ft.querySelector('h3');
      if (h3) {
        h3.innerHTML = brandHTML;
        var holder = h3.parentElement;
        var p = holder ? holder.querySelector('p') : null;
        if (p) p.innerHTML = esc(D.footer.about);
      }

      $$('h4', ft).forEach(function (h4) {
        if (!/products/i.test(h4.textContent)) return;
        var col = h4.parentElement;
        var proto = col.querySelector('a');
        var html = h4.outerHTML;
        D.footer.productLinks.forEach(function (t) {
          if (proto) {
            var a = proto.cloneNode(false);
            a.setAttribute('href', 'products.html');
            a.textContent = t;
            html += a.outerHTML;
          } else {
            html += '<a href="products.html">' + esc(t) + '</a>';
          }
        });
        col.innerHTML = html;
      });

      $$('span,div,p,small', ft).forEach(function (el) {
        if (el.children.length !== 0) return;
        var t = el.textContent || '';
        if (/all rights reserved/i.test(t)) el.innerHTML = esc(D.footer.copyright);
        else if (t.length < 90 && /ISO 9001|OEKO-TEX/i.test(t)) el.innerHTML = esc(D.footer.certs);
      });
    });

    /* 联系方式区：只保留电话 + 地址 + 响应时间 */
    var icons = {
      phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.62 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>',
      pin: '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',
      clock: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>'
    };
    var block = $('.contact-block');
    if (block) {
      var rows = [
        ['phone', 'Phone', D.contact.phone, D.contact.phoneNote],
        ['pin', 'Showroom & Factory', D.address.full, 'Factory visits welcome — by appointment only'],
        ['clock', D.contact.responseLabel, D.contact.responseValue, D.contact.responseNote]
      ];
      block.innerHTML = rows.map(function (r) {
        return '<div class="contact-item"><div class="ci-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">' + icons[r[0]] + '</svg></div>' +
          '<div><span class="ci-label">' + esc(r[1]) + '</span><span class="ci-val">' + esc(r[2]) + '</span><span class="ci-note">' + esc(r[3]) + '</span></div></div>';
      }).join('');
    }

    /* 动态写入标题 */
    var file = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
    var t = D.titles[file];
    if (t) document.title = t;
  }

  /* ---------- 2. 产品卡 ---------- */
  function card(p, id) {
    var badge = p.badge ? '<span class="prod-badge">' + esc(p.badge) + '</span>' : '';
    return '<a href="product.html?id=' + encodeURIComponent(id) + '" class="prod-card">' +
      '<div class="prod-img-wrap"><img class="prod-img" src="' + esc(p.image) + '" alt="' + esc(p.name) + '" loading="lazy">' + badge + '</div>' +
      '<div class="prod-info"><h4>' + esc(p.name) + '</h4><span class="prod-cat">' + esc(p.category) + '</span>' +
      '<div class="prod-detail">' + esc(p.detail) + '</div><span class="prod-moq">MOQ ' + esc(p.moq) + ' pcs</span></div></a>';
  }

  function applyHome() {
    var cats = $('.cat-grid2');
    if (cats) {
      cats.innerHTML = D.categories.map(function (c) {
        return '<a href="' + esc(c.href) + '" class="cat-card">' +
          '<img src="' + esc(c.image) + '" alt="' + esc(c.label) + '" loading="lazy">' +
          '<div class="cat-overlay"></div>' +
          '<div class="cat-label"><h3>' + esc(c.label) + '</h3><span>View Products</span></div>' +
          '</a>';
      }).join('');
    }
    var featured = document.querySelector('[data-featured]');
    if (featured) {
      featured.innerHTML = D.featured.map(function (id) {
        return D.products[id] ? card(D.products[id], id) : '';
      }).join('');
    }
    $$('a[href="products.html"]').forEach(function (a) { a.setAttribute('href', 'products.html'); });
  }

  function applyProducts() {
    var sections = $$('.prod-section');
    if (!sections.length) return;
    sections.forEach(function (sec, i) {
      var g = D.groups[i];
      if (!g) return;
      sec.id = 'group-' + g.id;
      var title = sec.querySelector('.prod-section-title');
      if (title) title.textContent = g.title;
      var grid = sec.querySelector('.prod-grid');
      if (grid) {
        grid.innerHTML = g.items.map(function (id) {
          return D.products[id] ? card(D.products[id], id) : '';
        }).join('');
        grid.setAttribute('data-group', g.id);
      }
    });
  }

  /* ---------- 3. 产品详情页 ---------- */
  function applyProduct() {
    var root = document.getElementById('pdp');
    if (!root) return;
    var id = new URLSearchParams(location.search).get('id');
    var p = id && D.products[id];
    if (!p) {
      root.innerHTML = '<div class="pdp-missing"><h2>Product not found</h2><p>Please pick a style from our collection.</p>' +
        '<a class="btn-gold" href="products.html">Back to Products</a></div>';
      return;
    }
    document.title = p.name + ' — SENHONG ATELIER';

    var gallery = p.gallery || [p.image];
    var alts = p.imageAlts || [];
    root.innerHTML =
      '<div class="pdp-wrap">' +
        '<div class="pdp-gallery">' +
          '<div class="pdp-main"><img id="pdpMain" src="' + esc(gallery[0]) + '" alt="' + esc(p.name) + '"></div>' +
          '<div class="pdp-thumbs">' + gallery.map(function (src, i) {
            return '<button type="button" class="pdp-thumb" data-src="' + esc(src) + '">' +
              '<img src="' + esc(src) + '" alt="' + esc(p.name + ' — ' + (alts[i] || ('view ' + (i + 1)))) + '" loading="lazy"></button>';
          }).join('') + '</div>' +
        '</div>' +
        '<div class="pdp-info">' +
          '<span class="eyebrow">' + esc(p.category) + '</span>' +
          '<h1>' + esc(p.name) + '</h1>' +
          '<p class="pdp-lede">' + esc(p.detail) + '</p>' +
          '<ul class="pdp-specs">' +
            '<li><span>MOQ</span><strong>' + esc(p.moq) + ' pcs per colour</strong></li>' +
            (p.weight ? '<li><span>Fabric weight</span><strong>' + esc(p.weight) + '</strong></li>' : '') +
            '<li><span>Size range</span><strong>See size chart in gallery</strong></li>' +
            '<li><span>Customisation</span><strong>Print, embroidery, wash &amp; trims</strong></li>' +
            '<li><span>Sampling</span><strong>Lead time on request</strong></li>' +
          '</ul>' +
          '<h3 class="pdp-h3">Fabric &amp; build</h3>' +
          '<ul class="pdp-features">' + D.features.map(function (f) { return '<li>' + esc(f) + '</li>'; }).join('') + '</ul>' +
          '<div class="pdp-cta">' +
            '<a class="btn-gold" href="contact.html">Request a Quote</a>' +
            '<a class="btn-dark" href="products.html">Back to Products</a>' +
          '</div>' +
          '<p class="pdp-note">All images are from our own sample programme. Colour, weight and trims are confirmed on your tech pack.</p>' +
        '</div>' +
      '</div>';

    var main = document.getElementById('pdpMain');
    $$('.pdp-thumb').forEach(function (btn) {
      btn.addEventListener('click', function () {
        main.src = btn.getAttribute('data-src');
        $$('.pdp-thumb').forEach(function (b) { b.classList.remove('is-active'); });
        btn.classList.add('is-active');
      });
    });
    if ($$('.pdp-thumb')[0]) $$('.pdp-thumb')[0].classList.add('is-active');
  }

  /* ---------- 4. 询盘表单的产品类目下拉（数据驱动） ---------- */
  function applyForm() {
    $$('select').forEach(function (sel) {
      var fg = sel.closest ? sel.closest('.fg') : null;
      var label = fg ? fg.querySelector('label') : null;
      if (label && /product category/i.test(label.textContent || '')) {
        sel.innerHTML = '<option value="">Select a category</option>' +
          D.groups.map(function (g) { return '<option>' + esc(g.title) + '</option>'; }).join('') +
          '<option>Multiple Categories</option>';
      }
    });
  }

  function boot() {
    applyBrand();
    applyHome();
    applyProducts();
    applyProduct();
    applyForm();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
