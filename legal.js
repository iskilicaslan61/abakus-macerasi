// Impressum / Datenschutz: Sprachwahl DE / EN / TR / FR (?lang=xx)
(() => {
  const LANGS = ["de", "en", "tr", "fr"];
  const UI = {
    back:    {de:"← Zurück zum Spiel", en:"← Back to the game", tr:"← Oyuna dön", fr:"← Retour au jeu"},
    game:    {de:"Spiel", en:"Game", tr:"Oyun", fr:"Jeu"},
    imprint: {de:"Impressum", en:"Legal notice", tr:"Künye", fr:"Mentions légales"},
    privacy: {de:"Datenschutz", en:"Privacy", tr:"Gizlilik", fr:"Confidentialité"},
    rights:  {de:"© 2026 Ismail Kilicaslan · Alle Rechte vorbehalten.", en:"© 2026 Ismail Kilicaslan · All rights reserved.",
              tr:"© 2026 Ismail Kilicaslan · Tüm hakları saklıdır.", fr:"© 2026 Ismail Kilicaslan · Tous droits réservés."},
  };
  const q = new URLSearchParams(location.search).get("lang");

  function setLang(l){
    document.documentElement.lang = l;
    document.querySelectorAll("[data-l]").forEach(el => el.hidden = el.dataset.l !== l);
    document.querySelectorAll("[data-t]").forEach(el => el.textContent = UI[el.dataset.t][l]);
    document.querySelectorAll("a[data-nav]").forEach(a => a.href = a.dataset.nav + "?lang=" + l);
    document.querySelectorAll(".legal-langs button").forEach(b => b.classList.toggle("active", b.dataset.set === l));
    const h1 = document.querySelector(`[data-l="${l}"] h1`);
    if(h1) document.title = h1.textContent + " – myabacus.de";
    history.replaceState(null, "", "?lang=" + l);
  }

  document.querySelectorAll(".legal-langs button").forEach(b => b.onclick = () => setLang(b.dataset.set));
  setLang(LANGS.includes(q) ? q : "de");
})();
