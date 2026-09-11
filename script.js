/* ============================================================
   Bakır Atölye — script.js
   Bootstrap'in kendi JS'i (navbar collapse vb.) otomatik çalışır.
   Burada sadece Bootstrap'in karşılamadığı davranışları yazıyoruz:

   01. Çalışma saatlerinde "bugün" satırını otomatik vurgulama
   02. Sayfa başına dön butonu
   03. Mobil menüde bir linke tıklayınca menüyü otomatik kapatma
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

  /* ============================================================
     01. BUGÜNÜ VURGULA
     Çalışma saatleri listesindeki her <li> data-day="1"(Pazartesi)..
     "7"(Pazar) taşıyor. JS, tarayıcının yerel gün bilgisine bakıp
     ilgili satıra "today" sınıfını ekliyor.
     ============================================================ */
  var today = new Date().getDay(); // 0 = Pazar ... 6 = Cumartesi
  var isoDay = today === 0 ? 7 : today; // 1=Pzt ... 7=Paz'a çeviriyoruz
  document.querySelectorAll('.hours-list li[data-day]').forEach(function (li) {
    if (parseInt(li.dataset.day, 10) === isoDay) {
      li.classList.add('today');
    }
  });

  /* ============================================================
     02. SAYFA BAŞINA DÖN
     ============================================================ */
  var scrollTopBtn = document.getElementById('scrollTop');
  if (scrollTopBtn) {
    window.addEventListener('scroll', function () {
      scrollTopBtn.classList.toggle('visible', window.scrollY > 400);
    });
    scrollTopBtn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ============================================================
     03. MOBİL MENÜYÜ LİNKE TIKLAYINCA KAPAT
     ============================================================ */
  var navbarCollapseEl = document.getElementById('navbarContent');
  if (navbarCollapseEl && typeof bootstrap !== 'undefined') {
    var bsCollapse = new bootstrap.Collapse(navbarCollapseEl, { toggle: false });
    navbarCollapseEl.querySelectorAll('.nav-link').forEach(function (link) {
      link.addEventListener('click', function () {
        if (navbarCollapseEl.classList.contains('show')) bsCollapse.hide();
      });
    });
  }
});
