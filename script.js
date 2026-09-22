// ---------- dil / language / Sprache ----------
// sayfa her açılışta Almanca başlar
let lang = "de";

// Türkçe metin anahtardır → [English, Deutsch, Français]. ${...} değerleri {0}, {1} ... olarak yazılır.
const I18N = {
  // --- sayfa / menüler ---
  "Abaküs Macerası": ["Abacus Adventure", "Abakus-Abenteuer", "L'aventure du boulier"],
  "Abaküs": ["Abacus", "Abakus", "L'aventure"],
  "Macerası": ["Adventure", "Abenteuer", "du boulier"],
  "🧮 Abaküs": ["🧮 Abacus", "🧮 Abakus", "🧮 Boulier"],
  "⚡ Hızlı Sayılar": ["⚡ Flash Numbers", "⚡ Blitzzahlen", "⚡ Nombres éclair"],
  "➕ Toplama": ["➕ Addition", "➕ Addition", "➕ Addition"],
  "➖ Çıkarma": ["➖ Subtraction", "➖ Subtraktion", "➖ Soustraction"],
  "➗ Bölme": ["➗ Division", "➗ Division", "➗ Division"],
  "✖️ Çarpım Tablosu": ["✖️ Times Tables", "✖️ Einmaleins", "✖️ Tables de multiplication"],
  "Kaç sayı?": ["How many numbers?", "Wie viele Zahlen?", "Combien de nombres ?"],
  "Hız": ["Speed", "Tempo", "Vitesse"],
  "🐢 Yavaş": ["🐢 Slow", "🐢 Langsam", "🐢 Lent"],
  "🐇 Orta": ["🐇 Medium", "🐇 Mittel", "🐇 Moyen"],
  "🚀 Hızlı": ["🚀 Fast", "🚀 Schnell", "🚀 Rapide"],
  "Sayılar": ["Numbers", "Zahlen", "Nombres"],
  "En az": ["Min", "Min", "Min"],
  "En çok": ["Max", "Max", "Max"],
  "İşlem": ["Operation", "Rechenart", "Opération"],
  "➕ Sadece toplama": ["➕ Addition only", "➕ Nur Addition", "➕ Addition seulement"],
  "➕➖ Toplama ve çıkarma": ["➕➖ Addition and subtraction", "➕➖ Addition und Subtraktion", "➕➖ Addition et soustraction"],
  "Hazır mısın?": ["Ready?", "Bereit?", "Prêt ?"],
  "Sonuç kaç? 🤔": ["What's the answer? 🤔", "Was ist das Ergebnis? 🤔", "Quel est le résultat ? 🤔"],
  "🔁 Tekrar İzle": ["🔁 Watch Again", "🔁 Nochmal ansehen", "🔁 Revoir"],
  "✅ Kontrol Et": ["✅ Check", "✅ Prüfen", "✅ Vérifier"],
  "▶️ Başla": ["▶️ Start", "▶️ Start", "▶️ Commencer"],
  "Hangi tablolar?": ["Which tables?", "Welche Reihen?", "Quelles tables ?"],
  "Hepsi": ["All", "Alle", "Toutes"],
  "Temizle": ["Clear", "Leeren", "Effacer"],
  "Oyun": ["Game", "Spiel", "Jeu"],
  "🎈 Balon Patlat": ["🎈 Balloon Pop", "🎈 Ballonplatzen", "🎈 Éclate les ballons"],
  "⏱️ 60 Saniye Yarışı": ["⏱️ 60-Second Race", "⏱️ 60-Sekunden-Rennen", "⏱️ Course de 60 secondes"],
  "🃏 Hafıza Kartları": ["🃏 Memory Cards", "🃏 Memory-Karten", "🃏 Jeu de mémoire"],
  "🍎 Grupları Say": ["🍎 Count the Groups", "🍎 Gruppen zählen", "🍎 Compte les groupes"],
  "🐸 Kurbağa Zıplat": ["🐸 Frog Jump", "🐸 Froschsprung", "🐸 Saute, grenouille !"],
  "🤔 Doğru mu Yanlış mı?": ["🤔 True or False?", "🤔 Richtig oder falsch?", "🤔 Vrai ou faux ?"],
  "🔍 Kayıp Sayı": ["🔍 Missing Number", "🔍 Fehlende Zahl", "🔍 Nombre manquant"],
  "⚖️ Hangisi Büyük?": ["⚖️ Which Is Bigger?", "⚖️ Was ist größer?", "⚖️ Lequel est plus grand ?"],
  "🎯 Hedef Sayı": ["🎯 Target Number", "🎯 Zielzahl", "🎯 Nombre cible"],
  "🌧️ Katları Yakala": ["🌧️ Catch the Multiples", "🌧️ Vielfache fangen", "🌧️ Attrape les multiples"],
  "🌧️ Sonucu Yakala": ["🌧️ Catch the Answer", "🌧️ Ergebnis fangen", "🌧️ Attrape le résultat"],
  "🍎 Resimle Say": ["🍎 Picture Count", "🍎 Bilder zählen", "🍎 Compte les images"],
  "Yağmur hızı": ["Rain speed", "Regentempo", "Vitesse de la pluie"],
  "Öğren": ["Learn", "Lernen", "Apprendre"],
  "📖 Tabloyu Gör": ["📖 Show Table", "📖 Tabelle zeigen", "📖 Voir la table"],
  "🙈 Tabloyu Gizle": ["🙈 Hide Table", "🙈 Tabelle ausblenden", "🙈 Cacher la table"],
  "📖 Çarpım Tablosu": ["📖 Times Table", "📖 Einmaleins", "📖 Table de multiplication"],
  "👆 Hamle:": ["👆 Moves:", "👆 Züge:", "👆 Coups :"],
  "✅ Bulunan:": ["✅ Found:", "✅ Gefunden:", "✅ Trouvées :"],
  "⏭️ Başka Soru": ["⏭️ Another Question", "⏭️ Andere Aufgabe", "⏭️ Autre question"],
  "🔄 Baştan": ["🔄 Restart", "🔄 Neu starten", "🔄 Recommencer"],
  "Hangi sayılara bölelim?": ["Divide by which numbers?", "Durch welche Zahlen teilen?", "Diviser par quels nombres ?"],
  "2, 5 ve 10'a": ["By 2, 5 and 10", "Durch 2, 5 und 10", "Par 2, 5 et 10"],
  "1'den 5'e kadar": ["1 to 5", "1 bis 5", "De 1 à 5"],
  "1'den 10'a kadar": ["1 to 10", "1 bis 10", "De 1 à 10"],
  "10'a kadar": ["Up to 10", "Bis 10", "Jusqu'à 10"],
  "20'ye kadar": ["Up to 20", "Bis 20", "Jusqu'à 20"],
  "50'ye kadar": ["Up to 50", "Bis 50", "Jusqu'à 50"],
  "100'e kadar": ["Up to 100", "Bis 100", "Jusqu'à 100"],
  "Kendin yaz (en çok)": ["Your own (max)", "Eigene Zahl (max)", "À toi de choisir (max)"],
  "🎲 Karışık": ["🎲 Mixed", "🎲 Gemischt", "🎲 Mélangé"],
  "Abaküsteki sayı:": ["Number on the abacus:", "Zahl am Abakus:", "Nombre sur le boulier :"],
  "💡 İpucu": ["💡 Hint", "💡 Tipp", "💡 Indice"],
  "🔄 Sıfırla": ["🔄 Reset", "🔄 Zurücksetzen", "🔄 Remettre à zéro"],
  "⏭️ Yeni Soru": ["⏭️ New Question", "⏭️ Neue Aufgabe", "⏭️ Nouvelle question"],

  "⚙️ Ayarlar": ["⚙️ Settings", "⚙️ Einstellungen", "⚙️ Réglages"],

  // --- abaküs ---
  "Yüzler": ["Hundreds", "Hunderter", "Centaines"],
  "Onlar": ["Tens", "Zehner", "Dizaines"],
  "Birler": ["Ones", "Einer", "Unités"],
  "Boncukları kaydırarak cevabı abaküste göster!": ["Move the beads to show the answer on the abacus!", "Schiebe die Perlen und zeige die Antwort am Abakus!", "Déplace les perles pour montrer la réponse sur le boulier !"],
  "Harikasın! 🎉": ["You're amazing! 🎉", "Du bist spitze! 🎉", "Tu es génial ! 🎉"],
  "Süpersin! 🌟": ["Super! 🌟", "Super! 🌟", "Super ! 🌟"],
  "Aferin! 👏": ["Well done! 👏", "Gut gemacht! 👏", "Bravo ! 👏"],
  "Muhteşem! 🚀": ["Awesome! 🚀", "Großartig! 🚀", "Fantastique ! 🚀"],
  "Bravo! 🧡": ["Bravo! 🧡", "Bravo! 🧡", "Bravo ! 🧡"],
  "Biraz daha fazla olmalı ⬆️": ["It should be a bit more ⬆️", "Es muss etwas mehr sein ⬆️", "Il en faut un peu plus ⬆️"],
  "Biraz daha az olmalı ⬇️": ["It should be a bit less ⬇️", "Es muss etwas weniger sein ⬇️", "Il en faut un peu moins ⬇️"],
  "Abaküste {0} var. {1}": ["The abacus shows {0}. {1}", "Am Abakus steht {0}. {1}", "Le boulier montre {0}. {1}"],
  "1 onluk": ["1 ten", "1 Zehner", "1 dizaine"],
  "{0} onluk": ["{0} tens", "{0} Zehner", "{0} dizaines"],
  "1 birlik": ["1 one", "1 Einer", "1 unité"],
  "{0} birlik": ["{0} ones", "{0} Einer", "{0} unités"],
  " ve ": [" and ", " und ", " et "],
  "Önce {0} sayısını koydum. Şimdi {1} ekle: {2}.": ["I set {0} first. Now add {1}: {2}.", "Ich habe zuerst {0} eingestellt. Jetzt addiere {1}: {2}.", "J'ai d'abord mis {0}. Maintenant ajoute {1} : {2}."],
  "Önce {0} sayısını koydum. Şimdi {1} çıkar: {2}.": ["I set {0} first. Now take away {1}: {2}.", "Ich habe zuerst {0} eingestellt. Jetzt ziehe {1} ab: {2}.", "J'ai d'abord mis {0}. Maintenant enlève {1} : {2}."],
  "İpucu: {0} {1} {2} … onlukları ve birlikleri ayrı ayrı say!": ["Hint: {0} {1} {2} … count the tens and ones separately!", "Tipp: {0} {1} {2} … zähle Zehner und Einer getrennt!", "Indice : {0} {1} {2} … compte les dizaines et les unités séparément !"],
  "Abaküs sıfırlandı.": ["The abacus was reset.", "Der Abakus wurde zurückgesetzt.", "Le boulier a été remis à zéro."],

  // --- hızlı sayılar ---
  "Hazırlan!": ["Get ready!", "Mach dich bereit!", "Prépare-toi !"],
  "Aklındaki sonucu yaz!": ["Type the answer you worked out!", "Schreib dein Ergebnis!", "Écris le résultat que tu as calculé !"],
  "Kafadan hesap ustası! 🧠": ["Mental math master! 🧠", "Kopfrechen-Profi! 🧠", "Champion du calcul mental ! 🧠"],
  "Süper hafıza! 🌟": ["Super memory! 🌟", "Super Gedächtnis! 🌟", "Super mémoire ! 🌟"],
  "Doğru! ✔": ["Correct! ✔", "Richtig! ✔", "Correct ! ✔"],
  "Senin cevabın {0}, doğrusu {1}. Tekrar izleyebilirsin!": ["Your answer: {0}. The right answer is {1}. You can watch again!", "Deine Antwort: {0}. Richtig ist {1}. Du kannst es nochmal ansehen!", "Ta réponse : {0}. La bonne réponse est {1}. Tu peux revoir !"],
  "En az, en çoktan küçük olmalı": ["Min must be smaller than max", "Min muss kleiner als Max sein", "Le min doit être plus petit que le max"],

  // --- ortak oyun mesajları ---
  "🏅 60 saniye rekoru: {0} doğru": ["🏅 60-second record: {0} correct", "🏅 60-Sekunden-Rekord: {0} richtig", "🏅 Record en 60 secondes : {0} bonnes réponses"],
  "🃏 Hafıza rekoru: {0} hamle": ["🃏 Memory record: {0} moves", "🃏 Memory-Rekord: {0} Züge", "🃏 Record de mémoire : {0} coups"],
  "Soldan en az bir tablo seç! 👈": ["Pick at least one table on the left! 👈", "Wähle links mindestens eine Reihe! 👈", "Choisis au moins une table à gauche ! 👈"],
  "Doğru cevabın olduğu balonu patlat! 🎈": ["Pop the balloon with the right answer! 🎈", "Lass den Ballon mit der richtigen Antwort platzen! 🎈", "Éclate le ballon avec la bonne réponse ! 🎈"],
  "🚀 Aya ulaştın! Süpersin! 🌙": ["🚀 You reached the moon! Super! 🌙", "🚀 Du hast den Mond erreicht! Super! 🌙", "🚀 Tu as atteint la lune ! Super ! 🌙"],
  "Olmadı, başka bir balon dene! 💪": ["Not quite, try another balloon! 💪", "Nicht ganz, probier einen anderen Ballon! 💪", "Pas tout à fait, essaie un autre ballon ! 💪"],
  "⏱️ Süre bitti! {0} doğru cevap verdin.": ["⏱️ Time's up! You got {0} right.", "⏱️ Die Zeit ist um! Du hattest {0} richtig.", "⏱️ Temps écoulé ! Tu as {0} bonnes réponses."],
  "🏅 Yeni rekor!": ["🏅 New record!", "🏅 Neuer Rekord!", "🏅 Nouveau record !"],
  "Tekrar için ▶️ Başla.": ["Press ▶️ Start to play again.", "Drücke ▶️ Start für eine neue Runde.", "Appuie sur ▶️ Commencer pour rejouer."],
  "Soruyu ve cevabını eşleştir! Kartları çevir 🃏": ["Match each question with its answer! Flip the cards 🃏", "Finde Aufgabe und Ergebnis! Dreh die Karten um 🃏", "Associe chaque question à sa réponse ! Retourne les cartes 🃏"],
  "İşlemi ve sonucunu eşleştir! Kartları çevir 🃏": ["Match each problem with its answer! Flip the cards 🃏", "Finde Aufgabe und Ergebnis! Dreh die Karten um 🃏", "Associe chaque calcul à son résultat ! Retourne les cartes 🃏"],
  "🎉 Hepsini buldun! {0} hamlede bitirdin.": ["🎉 You found them all! Done in {0} moves.", "🎉 Alle gefunden! Geschafft in {0} Zügen.", "🎉 Tu les as toutes trouvées ! En {0} coups."],
  "Yeni oyun için ▶️ Başla.": ["Press ▶️ Start for a new game.", "Drücke ▶️ Start für ein neues Spiel.", "Appuie sur ▶️ Commencer pour une nouvelle partie."],
  "Eşleşmedi, yerlerini aklında tut! 🧠": ["No match, remember where they are! 🧠", "Passt nicht, merk dir die Plätze! 🧠", "Ça ne va pas ensemble, retiens leur place ! 🧠"],
  "Bu işlem doğru mu?": ["Is this correct?", "Stimmt diese Aufgabe?", "Ce calcul est-il juste ?"],
  "Hızlı düşün! ⚡": ["Think fast! ⚡", "Schnell überlegen! ⚡", "Réfléchis vite ! ⚡"],
  "✔ Doğru": ["✔ True", "✔ Richtig", "✔ Vrai"],
  "✘ Yanlış": ["✘ False", "✘ Falsch", "✘ Faux"],
  "Tam ekran": ["Full screen", "Vollbild", "Plein écran"],
  "🐸 Kurbağa ayarları": ["🐸 Frog settings", "🐸 Frosch-Einstellungen", "🐸 Réglages de la grenouille"],
  "Başlangıç sayısı": ["Start number", "Startzahl", "Nombre de départ"],
  "Kaçar zıplasın?": ["Jump size", "Sprunggröße", "Taille du saut"],
  "Kaç kere zıplasın?": ["Number of jumps", "Anzahl Sprünge", "Nombre de sauts"],
  "Boş bırakırsan rastgele seçilir.": ["Leave empty for a random number.", "Leer lassen = Zufallszahl.", "Laisse vide pour un nombre au hasard."],
  "🎲 Rastgele": ["🎲 Random", "🎲 Zufällig", "🎲 Au hasard"],
  "✅ {0} doğru": ["✅ {0} correct", "✅ {0} richtig", "✅ {0} bonnes"],
  "❌ {0} yanlış": ["❌ {0} wrong", "❌ {0} falsch", "❌ {0} fausses"],
  "Kutuya hangi sayı gelmeli?": ["Which number goes in the box?", "Welche Zahl gehört ins Kästchen?", "Quel nombre va dans la case ?"],
  "Olmadı, tekrar dene! 💪": ["Not quite, try again! 💪", "Nicht ganz, versuch es nochmal! 💪", "Pas tout à fait, réessaie ! 💪"],
  "Hangi işaret gelmeli?": ["Which sign goes here?", "Welches Zeichen gehört hierher?", "Quel signe faut-il mettre ?"],
  "Önce ikisini de hesapla, sonra karşılaştır ⚖️": ["Work out both first, then compare ⚖️", "Rechne erst beide aus, dann vergleiche ⚖️", "Calcule d'abord les deux, puis compare ⚖️"],
  "Sonucu <b>{0}</b> olan bütün işlemleri bul! 🎯": ["Find every problem that makes <b>{0}</b>! 🎯", "Finde alle Aufgaben mit dem Ergebnis <b>{0}</b>! 🎯", "Trouve tous les calculs qui font <b>{0}</b> ! 🎯"],
  "Bulunacak: {0} işlem": ["To find: {0} problems", "Noch zu finden: {0} Aufgaben", "À trouver : {0} calculs"],
  "Süper! Bulunacak: {0} işlem daha": ["Super! {0} more to find", "Super! Noch {0} zu finden", "Super ! Encore {0} à trouver"],
  "🚀 Aya ulaştın! Harika yakaladın! 🌙": ["🚀 You reached the moon! Great catching! 🌙", "🚀 Du hast den Mond erreicht! Toll gefangen! 🌙", "🚀 Tu as atteint la lune ! Belles prises ! 🌙"],
  "İlk balonu patlatınca 60 saniye başlar! ⏱️": ["The 60 seconds start when you pop the first balloon! ⏱️", "Die 60 Sekunden starten beim ersten Ballon! ⏱️", "Les 60 secondes commencent quand tu éclates le premier ballon ! ⏱️"],
  "Kurbağayı izle, boş taşlara gelince yardım et! 🐸": ["Watch the frog and help it at the empty stones! 🐸", "Schau dem Frosch zu und hilf ihm bei den leeren Steinen! 🐸", "Regarde la grenouille et aide-la aux pierres vides ! 🐸"],

  // --- çarpım tablosu oyunları ---
  "Resimdeki {0} sayısını gösteren işlem hangisi?": ["Which problem shows how many {0} there are?", "Welche Aufgabe zeigt, wie viele {0} es sind?", "Quel calcul montre combien il y a de {0} ?"],
  "İpucu: Kaç sıra var? Her sırada kaç tane var? 👀": ["Hint: How many rows? How many in each row? 👀", "Tipp: Wie viele Reihen? Wie viele in jeder Reihe? 👀", "Indice : Combien de rangées ? Combien dans chaque rangée ? 👀"],
  "Evet! {0} sıra, her sırada {1} tane: {2} × {3} = {4} ✔": ["Yes! {0} rows with {1} in each: {2} × {3} = {4} ✔", "Ja! {0} Reihen mit je {1}: {2} × {3} = {4} ✔", "Oui ! {0} rangées de {1} : {2} × {3} = {4} ✔"],
  "Tekrar say! Sıraları ve her sıradakileri say 🔍": ["Count again! Count the rows and what's in each row 🔍", "Zähl nochmal! Zähle die Reihen und jede Reihe 🔍", "Recompte ! Compte les rangées et ce qu'il y a dans chacune 🔍"],
  "Kurbağa {0} zıplıyor! Boş taşları doldur 🐸": ["The frog jumps {0}! Fill in the empty stones 🐸", "Der Frosch springt {0}! Fülle die leeren Steine 🐸", "La grenouille saute {0} ! Remplis les pierres vides 🐸"],
  "🐸 <b>{0}</b> say!": ["🐸 Count <b>{0}</b>!", "🐸 Zähle <b>{0}</b>!", "🐸 Compte <b>{0}</b> !"],
  "🎉 Kurbağa karşıya geçti! {0}, {1}, {2} … {3}": ["🎉 The frog made it across! {0}, {1}, {2} … {3}", "🎉 Der Frosch ist drüben! {0}, {1}, {2} … {3}", "🎉 La grenouille a traversé ! {0}, {1}, {2} … {3}"],
  "{0} sayısından sonra hangi sayıya zıplamalı? 🤔": ["Where should the frog jump after {0}? 🤔", "Wohin springt der Frosch nach {0}? 🤔", "Où la grenouille doit-elle sauter après {0} ? 🤔"],
  "Hatırla: her seferinde {0} ekliyoruz! ➕{1}": ["Remember: we add {0} every time! ➕{1}", "Denk dran: Wir addieren jedes Mal {0}! ➕{1}", "Rappelle-toi : on ajoute {0} à chaque fois ! ➕{1}"],
  "Evet, {0} × {1} = {2} ✔": ["Yes, {0} × {1} = {2} ✔", "Ja, {0} × {1} = {2} ✔", "Oui, {0} × {1} = {2} ✔"],
  "Aferin! Doğrusu {0} × {1} = {2} ✔": ["Well done! It's really {0} × {1} = {2} ✔", "Gut! Richtig ist {0} × {1} = {2} ✔", "Bravo ! C'est bien {0} × {1} = {2} ✔"],
  "Aslında doğruydu: {0} × {1} = {2}": ["It was actually correct: {0} × {1} = {2}", "Es stimmte doch: {0} × {1} = {2}", "C'était juste en fait : {0} × {1} = {2}"],
  "Dikkat! {0} × {1} = {2}, {3} değil": ["Careful! {0} × {1} = {2}, not {3}", "Achtung! {0} × {1} = {2}, nicht {3}", "Attention ! {0} × {1} = {2}, pas {3}"],
  "İpucu: Çarpım tablosunu tersten düşün 🔄": ["Hint: Think of the times table backwards 🔄", "Tipp: Denk das Einmaleins rückwärts 🔄", "Indice : Pense à la table de multiplication à l'envers 🔄"],
  "Harika! {0} × {1} = {2} ✔": ["Great! {0} × {1} = {2} ✔", "Prima! {0} × {1} = {2} ✔", "Génial ! {0} × {1} = {2} ✔"],
  "Tekrar bak: {0}×{1} ve {2}×{3} kaç ediyor?": ["Look again: what are {0}×{1} and {2}×{3}?", "Schau nochmal: Was ergeben {0}×{1} und {2}×{3}?", "Regarde encore : combien font {0}×{1} et {2}×{3} ?"],
  "Hepsini buldun! 🎯 {0} = {1}": ["You found them all! 🎯 {0} = {1}", "Alle gefunden! 🎯 {0} = {1}", "Tu les as tous trouvés ! 🎯 {0} = {1}"],
  "{0} × {1} = {2}, {3} değil!": ["{0} × {1} = {2}, not {3}!", "{0} × {1} = {2}, nicht {3}!", "{0} × {1} = {2}, pas {3} !"],
  "Sadece <b>{0}</b> tablosundaki sayıları yakala!": ["Catch only numbers from the <b>{0}</b> times table!", "Fange nur Zahlen aus der <b>{0}</b>er-Reihe!", "Attrape seulement les nombres de la table de <b>{0}</b> !"],
  "{0} … gibi sayılara dokun! 🌧️": ["Tap numbers like {0} …! 🌧️", "Tippe auf Zahlen wie {0} …! 🌧️", "Touche les nombres comme {0} … ! 🌧️"],
  "Canların bitti! {0}, {1} tablosunda yok. ▶️ Başla ile tekrar dene": ["Out of lives! {0} is not in the {1} times table. Press ▶️ Start to try again", "Keine Leben mehr! {0} ist nicht in der {1}er-Reihe. Mit ▶️ Start nochmal versuchen", "Plus de vies ! {0} n'est pas dans la table de {1}. Appuie sur ▶️ Commencer pour réessayer"],
  "{0}, {1} tablosunda yok! Dikkat 👀": ["{0} is not in the {1} times table! Careful 👀", "{0} ist nicht in der {1}er-Reihe! Achtung 👀", "{0} n'est pas dans la table de {1} ! Attention 👀"],
  "{0} tablosu": ["{0} times table", "{0}er-Reihe", "Table de {0}"],

  // --- toplama / çıkarma / bölme oyunları ---
  "{0} {1}, {2} sepete eşit paylaştırılıyor. Her sepete kaç tane düşer?": ["{0} {1} are shared equally into {2} baskets. How many go in each basket?", "{0} {1} werden gleichmäßig auf {2} Körbe verteilt. Wie viele kommen in jeden Korb?", "On partage {0} {1} équitablement dans {2} paniers. Combien dans chaque panier ?"],
  "İpucu: Sepetlere birer birer dağıtmayı düşün 🧺": ["Hint: Imagine handing them out one at a time 🧺", "Tipp: Stell dir vor, du verteilst sie einzeln 🧺", "Indice : Imagine que tu les distribues un par un 🧺"],
  "Evet! {0} = {1} ✔ Her sepette {2} tane": ["Yes! {0} = {1} ✔ {2} in each basket", "Ja! {0} = {1} ✔ {2} in jedem Korb", "Oui ! {0} = {1} ✔ {2} dans chaque panier"],
  "Tekrar düşün! Her sepette aynı sayıda olmalı 🔍": ["Think again! Every basket must have the same number 🔍", "Überleg nochmal! In jedem Korb muss gleich viel sein 🔍", "Réfléchis encore ! Chaque panier doit en avoir autant 🔍"],
  "Toplam kaç {0} var?": ["How many {0} are there in total?", "Wie viele {0} sind es insgesamt?", "Combien de {0} y a-t-il en tout ?"],
  "{0} {1} vardı, {2} tanesi gitti. Kaç tane kaldı?": ["There were {0} {1}. {2} went away. How many are left?", "Es waren {0} {1}. {2} sind weg. Wie viele sind übrig?", "Il y avait {0} {1}. {2} sont partis. Combien en reste-t-il ?"],
  "Tek tek sayabilirsin 👆": ["You can count them one by one 👆", "Du kannst einzeln zählen 👆", "Tu peux les compter un par un 👆"],
  "Evet! {0} = {1} ✔": ["Yes! {0} = {1} ✔", "Ja! {0} = {1} ✔", "Oui ! {0} = {1} ✔"],
  "Tekrar say! 🔍": ["Count again! 🔍", "Zähl nochmal! 🔍", "Recompte ! 🔍"],
  "Evet, {0} = {1} ✔": ["Yes, {0} = {1} ✔", "Ja, {0} = {1} ✔", "Oui, {0} = {1} ✔"],
  "Aferin! Doğrusu {0} = {1} ✔": ["Well done! It's really {0} = {1} ✔", "Gut! Richtig ist {0} = {1} ✔", "Bravo ! C'est bien {0} = {1} ✔"],
  "Aslında doğruydu: {0} = {1}": ["It was actually correct: {0} = {1}", "Es stimmte doch: {0} = {1}", "C'était juste en fait : {0} = {1}"],
  "Dikkat! {0} = {1}, {2} değil": ["Careful! {0} = {1}, not {2}", "Achtung! {0} = {1}, nicht {2}", "Attention ! {0} = {1}, pas {2}"],
  "İpucu: Ters işlemle düşün 🔄": ["Hint: Use the opposite operation 🔄", "Tipp: Denk an die Umkehraufgabe 🔄", "Indice : Utilise l'opération inverse 🔄"],
  "Harika! {0} = {1} ✔": ["Great! {0} = {1} ✔", "Prima! {0} = {1} ✔", "Génial ! {0} = {1} ✔"],
  "Tekrar bak: {0} ve {1} kaç ediyor?": ["Look again: what are {0} and {1}?", "Schau nochmal: Was ergeben {0} und {1}?", "Regarde encore : combien font {0} et {1} ?"],
  "Hepsini buldun! 🎯 Hepsi {0} ediyor": ["You found them all! 🎯 They all make {0}", "Alle gefunden! 🎯 Alle ergeben {0}", "Tu les as tous trouvés ! 🎯 Ils font tous {0}"],
  "{0} = {1}, {2} değil!": ["{0} = {1}, not {2}!", "{0} = {1}, nicht {2}!", "{0} = {1}, pas {2} !"],
  "Sonucu <b>{0}</b> olanları yakala!": ["Catch the ones that make <b>{0}</b>!", "Fange alle mit dem Ergebnis <b>{0}</b>!", "Attrape ceux qui font <b>{0}</b> !"],
  "Sonucu {0} olan işlemlere dokun! 🌧️": ["Tap the problems that make {0}! 🌧️", "Tippe auf Aufgaben mit dem Ergebnis {0}! 🌧️", "Touche les calculs qui font {0} ! 🌧️"],
  "Canların bitti! {0} = {1}, {2} değil. ▶️ Başla ile tekrar dene": ["Out of lives! {0} = {1}, not {2}. Press ▶️ Start to try again", "Keine Leben mehr! {0} = {1}, nicht {2}. Mit ▶️ Start nochmal versuchen", "Plus de vies ! {0} = {1}, pas {2}. Appuie sur ▶️ Commencer pour réessayer"],
  "{0} = {1}, {2} değil! Dikkat 👀": ["{0} = {1}, not {2}! Careful 👀", "{0} = {1}, nicht {2}! Achtung 👀", "{0} = {1}, pas {2} ! Attention 👀"],
  "🐸 Kurbağa <b>{0}</b> sayısından <b>0</b>'a {1} geri zıplıyor!": ["🐸 The frog jumps back {1} from <b>{0}</b> to <b>0</b>!", "🐸 Der Frosch springt {1} von <b>{0}</b> zurück bis <b>0</b>!", "🐸 La grenouille recule {1} de <b>{0}</b> jusqu'à <b>0</b> !"],
  "ileri": ["forward", "vorwärts", "en avant"],
  "geri": ["back", "rückwärts", "en arrière"],
  "🐸 Kurbağa {0} <b>{1}</b> zıplıyor!": ["🐸 The frog jumps <b>{1}</b> {0}!", "🐸 Der Frosch springt {0} <b>{1}</b>!", "🐸 La grenouille saute <b>{1}</b> {0} !"],
  "🎉 Kurbağa karşıya geçti! {0}": ["🎉 The frog made it across! {0}", "🎉 Der Frosch ist drüben! {0}", "🎉 La grenouille a traversé ! {0}"],
  "Kurbağa kaç kere zıpladı? 🤔 ({0} ÷ {1} = ?)": ["How many times did the frog jump? 🤔 ({0} ÷ {1} = ?)", "Wie oft ist der Frosch gesprungen? 🤔 ({0} ÷ {1} = ?)", "Combien de fois la grenouille a-t-elle sauté ? 🤔 ({0} ÷ {1} = ?)"],
  "Evet! {0} kere zıpladı: {1} ÷ {2} = {3} ✔": ["Yes! It jumped {0} times: {1} ÷ {2} = {3} ✔", "Ja! Er ist {0}-mal gesprungen: {1} ÷ {2} = {3} ✔", "Oui ! Elle a sauté {0} fois : {1} ÷ {2} = {3} ✔"],
  "Zıplamaları tek tek say! 🐸": ["Count the jumps one by one! 🐸", "Zähle die Sprünge einzeln! 🐸", "Compte les sauts un par un ! 🐸"],
  "{0} {1} {2} = ? Kurbağa nereye zıplamalı? 🤔": ["{0} {1} {2} = ? Where should the frog jump? 🤔", "{0} {1} {2} = ? Wohin soll der Frosch springen? 🤔", "{0} {1} {2} = ? Où la grenouille doit-elle sauter ? 🤔"],
  "Hatırla: her zıplamada {0} ekliyoruz ➕": ["Remember: every jump adds {0} ➕", "Denk dran: Jeder Sprung addiert {0} ➕", "Rappelle-toi : chaque saut ajoute {0} ➕"],
  "Hatırla: her zıplamada {0} çıkarıyoruz ➖": ["Remember: every jump takes away {0} ➖", "Denk dran: Jeder Sprung zieht {0} ab ➖", "Rappelle-toi : chaque saut enlève {0} ➖"],
};

// Çeviri: $t`Merhaba ${ad}` → anahtar "Merhaba {0}"
const LANG_IDX = {en:0, de:1, fr:2};
function tKey(key){ const tr = lang === "tr" ? null : I18N[key]; return tr ? tr[LANG_IDX[lang]] : key; }
function $t(strs, ...vals){
  const key = strs.reduce((acc, s, i) => acc + (i ? `{${i-1}}` : "") + s, "");
  return tKey(key).replace(/\{(\d+)\}/g, (_, i) => vals[i]);
}

// Sayfadaki sabit metinler: ilk Türkçe hâllerini sakla, dil değişince çevir
const staticTexts = [];
(() => {
  const w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  for(let n; (n = w.nextNode()); ){
    if(n.parentElement.closest("script,style")) continue;
    if(/[A-Za-zÇĞİÖŞÜçğıöşü]/.test(n.nodeValue)) staticTexts.push({n, orig:n.nodeValue});
  }
})();
function applyStatic(){
  staticTexts.forEach(({n, orig}) => { const k = orig.trim(); n.nodeValue = orig.replace(k, tKey(k)); });
  document.title = tKey("Abaküs Macerası");
  document.documentElement.lang = lang;
}

const ROD_NAMES = () => [$t`Yüzler`, $t`Onlar`, $t`Birler`];
const BEADS = 10, BEAD_H = 28, GAP = 2;
let vals = [0,0,0];
let mode = "+", max = 20, A = 0, B = 0, OP = "+", ANSWER = 0;
let score = 0, streak = 0, hintStep = 0, locked = false;

const $ = id => document.getElementById(id);
const frame = $("frame"), labels = $("labels");

// ---------- sound ----------
let ctx;
function beep(freq, dur=0.08, type="sine", vol=0.15){
  try{
    ctx = ctx || new (window.AudioContext||window.webkitAudioContext)();
    if(ctx.state === "suspended") ctx.resume();
    const o = ctx.createOscillator(), g = ctx.createGain();
    o.type = type; o.frequency.value = freq;
    g.gain.setValueAtTime(vol, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + dur);
    o.connect(g).connect(ctx.destination); o.start(); o.stop(ctx.currentTime + dur);
  }catch(e){}
}
const happy = () => [523,659,784,1046].forEach((f,i)=>setTimeout(()=>beep(f,.15,"triangle"),i*110));
const sad = () => [330,262].forEach((f,i)=>setTimeout(()=>beep(f,.2,"sawtooth",.08),i*160));

// ---------- abacus ----------
function buildAbacus(){
  frame.innerHTML = ""; labels.innerHTML = "";
  ROD_NAMES().forEach((name, r) => {
    const rod = document.createElement("div");
    rod.className = "rod";
    for(let i=0;i<BEADS;i++){
      const b = document.createElement("div");
      b.className = "bead " + (i<5 ? "o" : "w");
      b.addEventListener("click", () => clickBead(r, i));
      rod.appendChild(b);
    }
    frame.appendChild(rod);
    labels.insertAdjacentHTML("beforeend", `<div><div class="v" id="v${r}">0</div><div class="n">${name}</div></div>`);
  });
  render();
}

function clickBead(r, i){
  if(locked) return;
  vals[r] = i < vals[r] ? i : i + 1;
  // Yüzler çubuğu en fazla 1 (100) olabilir
  if(r === 0 && vals[0] > 1) vals[0] = 1;
  beep(700 + r*120 + vals[r]*25, .06, "triangle");
  render();
}

function render(){
  [...frame.children].forEach((rod, r) => {
    const H = rod.clientHeight;
    [...rod.children].forEach((b, i) => {
      const top = i < vals[r]
        ? i * (BEAD_H + GAP)
        : H - (BEADS - i) * (BEAD_H + GAP);
      b.style.top = top + "px";
    });
    $("v"+r).textContent = vals[r];
  });
  $("total").textContent = value();
}
const value = () => vals[0]*100 + vals[1]*10 + vals[2];
function setValue(n){ vals = [Math.floor(n/100), Math.floor(n/10)%10, n%10]; render(); }

// ---------- problems ----------
const rnd = (lo, hi) => lo + Math.floor(Math.random()*(hi-lo+1));
function newProblem(){
  locked = false; hintStep = 0;
  OP = mode === "mix" ? (Math.random()<.5 ? "+" : "-") : mode;
  if(OP === "+"){
    A = rnd(1, max-1); B = rnd(1, max-A); ANSWER = A + B;
  } else {
    A = rnd(2, max); B = rnd(1, A-1); ANSWER = A - B;
  }
  $("a").textContent = A; $("b").textContent = B; $("op").textContent = OP;
  $("q").textContent = "?";
  msg($t`Boncukları kaydırarak cevabı abaküste göster!`);
  setValue(0);
}

function msg(text, cls=""){ const m=$("msg"); m.textContent=text; m.className="msg "+cls; }

function check(){
  if(locked) return;
  const card = $("card");
  if(value() === ANSWER){
    locked = true;
    score++; streak++;
    $("q").textContent = ANSWER;
    const praise = [$t`Harikasın! 🎉`, $t`Süpersin! 🌟`, $t`Aferin! 👏`, $t`Muhteşem! 🚀`, $t`Bravo! 🧡`];
    msg(praise[rnd(0,praise.length-1)], "ok");
    card.classList.remove("pop"); void card.offsetWidth; card.classList.add("pop");
    happy(); confetti();
    updateStats();
    setTimeout(newProblem, 1800);
  } else {
    streak = 0; updateStats();
    const tip = value() < ANSWER ? $t`Biraz daha fazla olmalı ⬆️` : $t`Biraz daha az olmalı ⬇️`;
    msg($t`Abaküste ${value()} var. ${tip}`, "bad");
    card.classList.remove("shake"); void card.offsetWidth; card.classList.add("shake");
    sad();
  }
}

function hint(){
  if(locked) return;
  const t = Math.floor(B/10), o = B%10;
  const parts = [t ? (t === 1 ? $t`1 onluk` : $t`${t} onluk`) : "", o ? (o === 1 ? $t`1 birlik` : $t`${o} birlik`) : ""]
    .filter(Boolean).join($t` ve `);
  if(hintStep === 0){
    setValue(A);
    msg(OP === "+" ? $t`Önce ${A} sayısını koydum. Şimdi ${B} ekle: ${parts}.` : $t`Önce ${A} sayısını koydum. Şimdi ${B} çıkar: ${parts}.`);
    hintStep = 1;
  } else {
    msg($t`İpucu: ${A} ${OP} ${B} … onlukları ve birlikleri ayrı ayrı say!`);
  }
  beep(880,.1,"triangle");
}

function updateStats(){
  $("score").textContent = score; $("streak").textContent = streak;
  $("stars").textContent = "⭐".repeat(Math.min(streak,10)) + (streak>=10 ? " 🏆" : "");
}

function confetti(){
  const colors = ["#ff7a1a","#ffb067","#ffffff","#ffd2ad","#e2600a"];
  for(let i=0;i<60;i++){
    const c = document.createElement("div");
    c.className = "confetti";
    c.style.left = Math.random()*100 + "vw";
    c.style.background = colors[i%colors.length];
    c.style.border = "1px solid #ffd2ad";
    c.style.animationDuration = (1.4 + Math.random()*1.4) + "s";
    c.style.animationDelay = Math.random()*.3 + "s";
    (document.fullscreenElement || document.webkitFullscreenElement || document.body).appendChild(c);
    setTimeout(()=>c.remove(), 3200);
  }
}

// ---------- controls ----------
document.querySelectorAll("[data-mode]").forEach(b => b.onclick = () => {
  document.querySelectorAll("[data-mode]").forEach(x=>x.classList.remove("active"));
  b.classList.add("active"); mode = b.dataset.mode; newProblem();
});
document.querySelectorAll("[data-max]").forEach(b => b.onclick = () => {
  document.querySelectorAll("[data-max]").forEach(x=>x.classList.remove("active"));
  b.classList.add("active"); max = +b.dataset.max; newProblem();
});
$("check").onclick = check;
$("reset").onclick = () => { if(!locked){ setValue(0); msg($t`Abaküs sıfırlandı.`); } };
$("skip").onclick = () => { streak = 0; updateStats(); newProblem(); };
$("hint").onclick = hint;
window.addEventListener("resize", render);

// ---------- tabs ----------
let tab = "abacusView";
document.querySelectorAll("[data-tab]").forEach(b => b.onclick = () => {
  document.querySelectorAll("[data-tab]").forEach(x=>x.classList.remove("active"));
  b.classList.add("active"); tab = b.dataset.tab;
  document.querySelectorAll(".view").forEach(v => v.hidden = v.id !== tab);
  if(tab === "abacusView") render();
  if(tab !== "flashView"){ stopFlash(); setFs(false); }
  if(typeof fsMain !== "undefined" && fsMain) setGameFs(false);
  if(tab !== "mulView"){ stopTimer(); stopG(); }
  else { moveRocket(); if(G_GAMES.includes(mGame)) mNew(); }
});

// ---------- hızlı sayılar (zihinden hesap) ----------
const fs = {count:3, speed:1500, min:1, max:9, ops:"+"};
const fm = document.querySelector(".flash-main");

// tam ekran: destekleyen tarayıcıda gerçek tam ekran, iPhone'da ekranı kaplayan görünüm
function setFs(on){
  fm.classList.toggle("fs", on);
  document.body.classList.toggle("noscroll", on);
  $("fsBtn").textContent = on ? "✕" : "⛶";
  const fsEl = document.fullscreenElement || document.webkitFullscreenElement;
  if(on && !fsEl){
    const req = fm.requestFullscreen || fm.webkitRequestFullscreen;
    if(req) try{ const r = req.call(fm); if(r && r.catch) r.catch(() => {}); }catch(e){}
  } else if(!on && fsEl){
    const ex = document.exitFullscreen || document.webkitExitFullscreen;
    if(ex) try{ const r = ex.call(document); if(r && r.catch) r.catch(() => {}); }catch(e){}
  }
}
$("fsBtn").onclick = () => setFs(!fm.classList.contains("fs"));
["fullscreenchange", "webkitfullscreenchange"].forEach(ev => document.addEventListener(ev, () => {
  // Esc ile çıkılınca görünümü de kapat
  if(!(document.fullscreenElement || document.webkitFullscreenElement) && fm.classList.contains("fs")) setFs(false);
}));

// Kaç sayı? ve Sayılar: kullanıcı kendisi yazabilir
const countIn = $("countIn"), minIn = $("minIn"), maxIn = $("maxIn");
const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));
function readInputs(){
  fs.count = clamp(parseInt(countIn.value) || 3, 2, 30);
  let mn = clamp(parseInt(minIn.value) || 0, 0, 999);
  let mx = clamp(parseInt(maxIn.value) || 1, 1, 999);
  const bad = mn >= mx;
  minIn.classList.toggle("bad", bad); maxIn.classList.toggle("bad", bad);
  if(bad) return false;
  fs.min = mn; fs.max = mx;
  try{ localStorage.setItem("flashSettings", JSON.stringify({c:fs.count, mn, mx})); }catch(e){}
  return true;
}
function fixInputs(){ if(readInputs()){ countIn.value = fs.count; minIn.value = fs.min; maxIn.value = fs.max; } }
try{
  const s = JSON.parse(localStorage.getItem("flashSettings"));
  if(s){ countIn.value = s.c; minIn.value = s.mn; maxIn.value = s.mx; }
}catch(e){}
readInputs();
[countIn, minIn, maxIn].forEach(i => { i.addEventListener("input", readInputs); i.addEventListener("change", fixInputs); });
document.querySelectorAll("[data-step]").forEach(b => b.onclick = () => {
  countIn.value = clamp((parseInt(countIn.value) || 3) + +b.dataset.step, 2, 30); readInputs();
});
document.querySelectorAll("[data-r]").forEach(b => b.onclick = () => {
  [minIn.value, maxIn.value] = b.dataset.r.split("-"); readInputs();
});
document.querySelectorAll("[data-set]").forEach(g => g.querySelectorAll("button").forEach(b => b.onclick = () => {
  g.querySelectorAll("button").forEach(x=>x.classList.remove("active"));
  b.classList.add("active");
  fs[g.dataset.set] = g.dataset.set === "ops" ? b.dataset.v : +b.dataset.v;
}));

let seq = [], fTotal = 0, typed = "", playing = false, answered = false, scored = false, timers = [];
const later = (ms, fn) => timers.push(setTimeout(fn, ms));
function stopFlash(){ timers.forEach(clearTimeout); timers = []; playing = false; }

function makeSeq(){
  const lo = fs.min, hi = fs.max;
  seq = []; let t = 0;
  for(let i=0;i<fs.count;i++){
    let sign = "+", n;
    // çıkarma yaparken sonuç hiçbir zaman eksiye düşmesin
    if(i > 0 && fs.ops === "+-" && t > lo && Math.random() < .45){ sign = "-"; n = rnd(lo, Math.min(hi, t)); }
    else n = rnd(lo, hi);
    t += sign === "+" ? n : -n;
    seq.push({sign, n});
  }
  fTotal = t; scored = false;
}

function show(text, step="", small=false){
  const f = $("flash");
  f.textContent = text; f.className = "flash" + (small ? " small" : "");
  // uzun sayılar ekrana sığsın
  const len = String(text).length;
  const big = fm.classList.contains("fs") && !fm.classList.contains("answering");
  f.style.fontSize = !small && len > 3 ? `clamp(60px, min(${Math.floor(110/len)}cqw, ${big ? 62 : 45}vh), ${big ? 600 : 380}px)` : "";
  void f.offsetWidth; f.classList.add("show");
  $("step").textContent = step;
}

function play(){
  stopFlash();
  playing = true; answered = false; typed = ""; updDisplay();
  $("answerBox").hidden = true; $("fmsg").textContent = ""; $("reveal").innerHTML = "";
  fm.classList.remove("answering");
  let t = 0;
  ["3","2","1"].forEach(s => { later(t, () => { show(s, $t`Hazırlan!`); beep(440,.08); }); t += 650; });
  seq.forEach((x, i) => {
    const txt = (i === 0 ? "" : (x.sign === "+" ? "+" : "−")) + x.n;
    later(t, () => { show(txt, `${i+1} / ${seq.length}`); beep(620 + i*70, .12, "triangle"); });
    t += fs.speed;
    // kısa bir boşluk: aynı sayı arka arkaya gelse bile fark edilsin
    later(t - Math.min(280, fs.speed*.25), () => { $("flash").textContent = ""; });
  });
  later(t, () => {
    // sayılar bitti: cevap yazma bölümünü aç
    playing = false; $("answerBox").hidden = false; fm.classList.add("answering");
    show("?", $t`Aklındaki sonucu yaz!`);
    $("answerBox").scrollIntoView({behavior:"smooth", block:fm.classList.contains("fs") ? "end" : "center"});
  });
}

function updDisplay(){ $("display").innerHTML = typed || "&nbsp;"; }
function press(k){
  if(playing || answered) return;
  if(k === "⌫") typed = typed.slice(0,-1);
  else if(k === "C") typed = "";
  else if(typed.length < 5) typed = (typed + k).replace(/^0+(?=\d)/, "");
  beep(900,.04,"triangle"); updDisplay();
}
["1","2","3","4","5","6","7","8","9","C","0","⌫"].forEach(k => {
  const b = document.createElement("button"); b.textContent = k; b.onclick = () => press(k); $("pad").appendChild(b);
});

function fcheck(){
  if(playing || answered || typed === "") return;
  answered = true;
  const eq = seq.map((x,i) => (i ? ` ${x.sign === "+" ? "+" : "−"} ` : "") + x.n).join("") + ` = <b>${fTotal}</b>`;
  $("reveal").innerHTML = eq;
  const m = $("fmsg");
  if(+typed === fTotal){
    if(!scored){ score++; streak++; scored = true; }
    const praise = [$t`Kafadan hesap ustası! 🧠`, $t`Harikasın! 🎉`, $t`Süper hafıza! 🌟`, $t`Bravo! 🧡`];
    m.textContent = praise[rnd(0,praise.length-1)]; m.className = "msg ok";
    show(fTotal, $t`Doğru! ✔`); happy(); confetti();
  } else {
    streak = 0;
    m.textContent = $t`Senin cevabın ${typed}, doğrusu ${fTotal}. Tekrar izleyebilirsin!`; m.className = "msg bad";
    $("answerBox").classList.remove("shake"); void $("answerBox").offsetWidth; $("answerBox").classList.add("shake");
    sad();
  }
  updateStats();
}

function startNew(){ fixInputs(); if(!readInputs()){ show($t`En az, en çoktan küçük olmalı`, "", true); return; } makeSeq(); play(); }
$("start").onclick = startNew;
$("replay").onclick = () => { if(seq.length) play(); };
$("fcheck").onclick = fcheck;

document.addEventListener("keydown", e => {
  if(tab === "abacusView"){ if(e.key === "Enter") check(); return; }
  if(tab === "mulView" || tab === "asView") return;
  if(e.target.tagName === "INPUT") return;
  if(/^[0-9]$/.test(e.key)) press(e.key);
  else if(e.key === "Backspace") press("⌫");
  else if(e.key === "Enter") fcheck();
  else if(e.key === " "){ e.preventDefault(); if(!playing) startNew(); }
});

// ---------- çarpım tablosu oyunu ----------
const GOAL = 10;
let picked = new Set([2,5,10]), mGame = "free", mA = 0, mB = 0, mAns = 0, mCorrect = 0, mLocked = false;
let timeLeft = 60, tick = null, raceOn = false, lastQ = "", mWrong = 0;
// yarış sayacı: doğru / yanlış
function updCount(){ $("count").innerHTML = `<span class="ok">${$t`✅ ${mCorrect} doğru`}</span><span class="no">${$t`❌ ${mWrong} yanlış`}</span>`; }
try{ const t = JSON.parse(localStorage.getItem("mulTables")); if(t && t.length) picked = new Set(t); }catch(e){}

function buildTables(){
  const box = $("tables"); box.innerHTML = "";
  for(let n=1;n<=10;n++){
    const b = document.createElement("button");
    b.textContent = n; b.classList.toggle("on", picked.has(n));
    b.onclick = () => { picked.has(n) ? picked.delete(n) : picked.add(n); saveTables(); buildTables(); mNew(); };
    box.appendChild(b);
  }
  buildTableView();
}
function saveTables(){ try{ localStorage.setItem("mulTables", JSON.stringify([...picked])); }catch(e){} }
function setTables(arr){ picked = new Set(arr); saveTables(); buildTables(); mNew(); }
$("tAll").onclick = () => setTables([1,2,3,4,5,6,7,8,9,10]);
$("tEasy").onclick = () => setTables([2,5,10]);
$("tNone").onclick = () => setTables([]);

document.querySelectorAll("[data-g]").forEach(b => b.onclick = () => {
  document.querySelectorAll("[data-g]").forEach(x=>x.classList.remove("active"));
  b.classList.add("active"); mGame = b.dataset.g; mReset();
});

function showBest(){
  let v = 0; try{ v = +localStorage.getItem("mulBest") || 0; }catch(e){}
  let mb = 0; try{ mb = +localStorage.getItem("matchBest") || 0; }catch(e){}
  $("best").innerHTML = (v ? $t`🏅 60 saniye rekoru: ${v} doğru` + "<br>" : "") + (mb ? $t`🃏 Hafıza rekoru: ${mb} hamle` : "");
  return v;
}

function moveRocket(){
  const w = $("track").clientWidth - 12 - 56;
  if(w <= 0) return;
  const x = w * Math.min(mCorrect, GOAL) / GOAL;
  $("fill").style.width = x + "px";
  $("rocket").style.left = (12 + x) + "px";
}

function mNew(){
  if(mGame === "match") return matchNew();
  if(mGame === "arr") return arrNew();
  if(mGame === "frog") return frogNew();
  if(mGame === "tf") return tfNew();
  if(mGame === "miss") return missNew();
  if(mGame === "cmp") return cmpNew();
  if(mGame === "target") return targetNew();
  if(mGame === "catch") return catchNew();
  mLocked = false;
  const list = [...picked], box = $("balloons"), m = $("mmsg");
  if(!list.length){ m.textContent = $t`Soldan en az bir tablo seç! 👈`; m.className = "msg bad"; box.innerHTML = ""; return; }
  let q;
  do{
    mA = list[rnd(0, list.length-1)]; mB = rnd(1, 10);
    if(Math.random() < .5) [mA, mB] = [mB, mA];
    q = mA + "x" + mB;
  } while(q === lastQ);
  lastQ = q; mAns = mA * mB;
  $("ma").textContent = mA; $("mb").textContent = mB;
  m.textContent = $t`Doğru cevabın olduğu balonu patlat! 🎈`; m.className = "msg";

  // yanlış seçenekler: kolayca karıştırılan yakın sayılar
  const opts = new Set([mAns]);
  const near = [mA*(mB+1), mA*(mB-1), (mA+1)*mB, (mA-1)*mB, mAns+1, mAns-1, mAns+2, mAns+10, mAns-10, mA+mB]
    .sort(() => Math.random() - .5);
  for(const n of near){ if(opts.size >= 4) break; if(n > 0) opts.add(n); }
  while(opts.size < 4) opts.add(rnd(1, 100));

  box.innerHTML = "";
  [...opts].sort(() => Math.random() - .5).forEach((n, i) => {
    const b = document.createElement("button");
    b.className = "balloon" + (i % 2 ? " w" : "");
    b.style.animationDelay = (i * .35) + "s";
    b.textContent = n;
    b.onclick = () => pick(b, n);
    box.appendChild(b);
  });
}

function pick(b, n){
  if(mLocked) return;
  if(mGame === "time" && !raceOn) startRace();
  const m = $("mmsg");
  if(n === mAns){
    mLocked = true; b.classList.add("pop");
    mCorrect++; score++; streak++; updateStats(); updCount();
    beep(1200, .05, "square", .08); setTimeout(happy, 80);
    m.textContent = `${mA} × ${mB} = ${mAns} ✔`; m.className = "msg ok";
    moveRocket();
    if(mGame === "free" && mCorrect >= GOAL){
      confetti(); setTimeout(confetti, 600);
      m.textContent = $t`🚀 Aya ulaştın! Süpersin! 🌙`;
      setTimeout(() => { mCorrect = 0; moveRocket(); mNew(); }, 2600);
    } else setTimeout(() => { if(mGame === "free" || raceOn) mNew(); }, 700);
  } else {
    b.classList.add("no"); streak = 0; updateStats(); sad();
    if(mGame === "time"){ mWrong++; updCount(); }
    m.textContent = $t`Olmadı, başka bir balon dene! 💪`; m.className = "msg bad";
  }
}

function startRace(){
  stopTimer();
  raceOn = true; timeLeft = 60; $("timer").hidden = false; $("timer").textContent = timeLeft;
  tick = setInterval(() => {
    timeLeft--; $("timer").textContent = timeLeft;
    $("timer").classList.toggle("low", timeLeft <= 10);
    if(timeLeft <= 10 && timeLeft > 0) beep(timeLeft <= 3 ? 880 : 500, .1);  // son 10 saniye uyarısı, son 3 saniye daha tiz
    if(timeLeft <= 0) endRace();
  }, 1000);
}
function stopTimer(){ clearInterval(tick); tick = null; raceOn = false; $("timer").classList.remove("low"); }
function endRace(){
  stopTimer(); mLocked = true; $("balloons").innerHTML = "";
  const best = showBest();
  let t = $t`⏱️ Süre bitti! ${mCorrect} doğru cevap verdin.`;
  if(mCorrect > best){
    try{ localStorage.setItem("mulBest", mCorrect); }catch(e){}
    t += (" " + $t`🏅 Yeni rekor!`); confetti(); happy(); showBest();
  }
  $("mmsg").textContent = t + " " + $t`Tekrar için ▶️ Başla.`; $("mmsg").className = "msg ok";
}

// ---------- hafıza kartları ----------
const PAIRS = 6;
let mcards = [], mOpen = [], moves = 0, found = 0, mBusy = false;

function matchNew(){
  const list = [...picked], grid = $("mgrid"), m = $("matchMsg");
  moves = 0; found = 0; mOpen = []; mBusy = false;
  $("moves").textContent = 0; $("found").textContent = 0;
  grid.innerHTML = "";
  if(!list.length){ m.textContent = $t`Soldan en az bir tablo seç! 👈`; m.className = "msg bad"; return; }
  m.textContent = $t`Soruyu ve cevabını eşleştir! Kartları çevir 🃏`; m.className = "msg";

  // her cevap sadece bir soruya uysun diye sonuçları farklı olan çarpımlar seç
  const facts = [];
  for(const a of list) for(let b=1;b<=10;b++) facts.push([a,b]);
  facts.sort(() => Math.random() - .5);
  const used = new Set(), chosen = [];
  for(const [a,b] of facts){
    if(chosen.length >= PAIRS) break;
    if(used.has(a*b)) continue;
    used.add(a*b); chosen.push(Math.random() < .5 ? [a,b] : [b,a]);
  }
  $("pairs").textContent = chosen.length;

  mcards = [];
  chosen.forEach(([a,b], id) => {
    mcards.push({id, text:`${a}×${b}`, ans:false});
    mcards.push({id, text:String(a*b), ans:true});
  });
  mcards.sort(() => Math.random() - .5);
  mcards.forEach(c => {
    const el = document.createElement("button");
    el.className = "mc";
    el.innerHTML = `<div class="in"><div class="b">?</div><div class="f${c.ans ? " ans" : ""}">${c.text}</div></div>`;
    el.onclick = () => flip(el, c);
    c.el = el; grid.appendChild(el);
  });
}

function flip(el, c){
  if(mBusy || el.classList.contains("open") || el.classList.contains("done")) return;
  el.classList.add("open"); beep(760, .05, "triangle");
  mOpen.push(c);
  if(mOpen.length < 2) return;
  moves++; $("moves").textContent = moves;
  const [x, y] = mOpen; mOpen = [];
  const m = $("matchMsg");
  if(x.id === y.id && x.ans !== y.ans){
    [x, y].forEach(k => { k.el.classList.remove("open"); k.el.classList.add("done"); });
    found++; $("found").textContent = found;
    score++; streak++; updateStats(); happy();
    const q = x.ans ? y.text : x.text, a = x.ans ? x.text : y.text;
    m.textContent = `${q.replace("×"," × ")} = ${a} ✔`; m.className = "msg ok";
    if(found === mcards.length / 2){
      confetti(); setTimeout(confetti, 600);
      let best = 0; try{ best = +localStorage.getItem("matchBest") || 0; }catch(e){}
      let t = $t`🎉 Hepsini buldun! ${moves} hamlede bitirdin.`;
      if(mcards.length / 2 === PAIRS && (!best || moves < best)){
        try{ localStorage.setItem("matchBest", moves); }catch(e){}
        if(best) t += (" " + $t`🏅 Yeni rekor!`);
      }
      m.textContent = t + " " + $t`Yeni oyun için ▶️ Başla.`; showBest();
    }
  } else {
    mBusy = true; streak = 0; updateStats();
    [x, y].forEach(k => k.el.classList.add("wrong"));
    m.textContent = $t`Eşleşmedi, yerlerini aklında tut! 🧠`; m.className = "msg bad";
    setTimeout(() => {
      [x, y].forEach(k => k.el.classList.remove("open", "wrong"));
      mBusy = false;
    }, 1000);
  }
}

// ---------- yeni oyunlar için ortak yardımcılar ----------
const G_GAMES = ["arr", "frog", "tf", "miss", "cmp", "target", "catch"];
const shuffle = a => a.sort(() => Math.random() - .5);
const pickTable = () => { const l = [...picked]; return l[rnd(0, l.length-1)]; };
function gMsg(t, cls=""){ const m = $("gmsg"); m.textContent = t; m.className = "msg " + cls; }
function noTables(){
  if(picked.size) return false;
  $("gq").innerHTML = ""; $("gopts").innerHTML = ""; gMsg($t`Soldan en az bir tablo seç! 👈`, "bad");
  return true;
}
// doğru cevap: puan + roket; 10 doğruda aya ulaşır
function gRight(text, next, delay=1200){
  mCorrect++; score++; streak++; updateStats(); happy();
  gMsg(text, "ok"); moveRocket();
  if(mCorrect >= GOAL){
    confetti(); setTimeout(confetti, 600);
    gMsg($t`🚀 Aya ulaştın! Süpersin! 🌙`, "ok");
    later2(() => { mCorrect = 0; moveRocket(); next(); }, 2600);
  } else later2(next, delay);
}
function gWrong(btn, text){
  if(btn) btn.classList.add("no");
  streak = 0; updateStats(); sad(); gMsg(text, "bad");
}
function options(list, correct, onPick, cls=""){
  const box = $("gopts"); box.innerHTML = ""; box.className = "gopts " + cls;
  list.forEach(o => {
    const b = document.createElement("button");
    b.innerHTML = o.label;
    b.onclick = () => { if(mLocked) return; onPick(b, o.value === correct); };
    box.appendChild(b);
  });
}
let gTimers = [];
const later2 = (fn, ms) => gTimers.push(setTimeout(fn, ms));
function stopG(){ gTimers.forEach(clearTimeout); gTimers = []; clearInterval(catchInt); catchInt = null; }
let catchInt = null;

// ---------- 🍎 Grupları Say ----------
const FRUITS = ["🍎","🍓","🐥","⭐","🍩","🐟","🌸","⚽","🧁","🐞"];
function arrNew(){
  stopG(); mLocked = false; if(noTables()) return;
  const n = pickTable(), r = rnd(2, 5), e = FRUITS[rnd(0, FRUITS.length-1)];
  $("gq").innerHTML = `<div class="gtitle">${$t`Resimdeki ${e} sayısını gösteren işlem hangisi?`}</div>
    <div class="arr-rows">${Array.from({length:r}, (_, i) =>
      `<div class="arr-row" style="animation-delay:${i*.12}s">${e.repeat(n)}</div>`).join("")}</div>`;
  gMsg($t`İpucu: Kaç sıra var? Her sırada kaç tane var? 👀`);
  const ok = `${r} × ${n} = ${r*n}`;
  const set = new Map([[ok, ok]]);
  const wrongs = shuffle([
    `${r+1} × ${n} = ${(r+1)*n}`, `${r} × ${n+1} = ${r*(n+1)}`,
    `${r} + ${n} = ${r+n}`, n > 1 ? `${r} × ${n-1} = ${r*(n-1)}` : `${r-1} × ${n} = ${(r-1)*n}`
  ]);
  for(const w of wrongs){ if(set.size >= 4) break; set.set(w, w); }
  options(shuffle([...set.keys()].map(k => ({label:k, value:k}))), ok, (b, right) => {
    if(right){ mLocked = true; b.classList.add("yes"); gRight($t`Evet! ${r} sıra, her sırada ${n} tane: ${r} × ${n} = ${r*n} ✔`, arrNew, 1600); }
    else gWrong(b, $t`Tekrar say! Sıraları ve her sıradakileri say 🔍`);
  });
}

// ---------- 🐸 Kurbağa Zıplat (ritmik sayma) ----------
let frog = null;
// Türkçe üleştirme eki: 2'şer, 3'er, 6'şar, 9'ar ...
// sayının okunuşundaki son kelimeye göre: ünlüyle bitiyorsa -şer/-şar, ünsüzle bitiyorsa -er/-ar
function trEr(n){
  const ones = ["","bir","iki","üç","dört","beş","altı","yedi","sekiz","dokuz"];
  const tens = ["","on","yirmi","otuz","kırk","elli","altmış","yetmiş","seksen","doksan"];
  const w = n % 10 ? ones[n % 10] : n % 100 ? tens[(n / 10 | 0) % 10] : n % 1000 ? "yüz" : "bin";
  const lastV = [...w].reverse().find(c => "aeıioöuü".includes(c));
  const back = "aıou".includes(lastV);
  return ("aeıioöuü".includes(w.at(-1)) ? "ş" : "") + (back ? "ar" : "er");
}
const erer = n => lang === "en" ? `by ${n}s` : lang === "de" ? `in ${n}er-Schritten` : lang === "fr" ? `de ${n} en ${n}` : `${n}'${trEr(n)} ${n}'${trEr(n)}`;
function frogNew(){
  mLocked = false; stopG(); if(noTables()) return;
  const n = pickTable();
  const miss = new Set(shuffle([2,3,4,5,6,7,8,9,10]).slice(0, 4));
  frog = {n, miss, pos:0, ask:-1};
  $("gopts").innerHTML = "";
  gMsg($t`Kurbağa ${erer(n)} zıplıyor! Boş taşları doldur 🐸`);
  frogDraw(); later2(frogWalk, 800);
}
function frogDraw(){
  const {n, miss, pos, ask} = frog;
  $("gq").innerHTML = `<div class="gtitle">${$t`🐸 <b>${erer(n)}</b> say!`}</div><div class="pads">${
    Array.from({length:11}, (_, i) => {
      const cls = "lp" + (miss.has(i) ? " miss" : "") + (i === ask ? " ask" : "") + (i < pos ? " past" : "");
      return `<div class="${cls}">${miss.has(i) ? "?" : i*n}${i === pos ? '<span class="frog">🐸</span>' : ""}</div>`;
    }).join("")}</div>`;
}
function frogWalk(){
  if(frog.pos >= 10){
    confetti(); gMsg($t`🎉 Kurbağa karşıya geçti! ${frog.n}, ${frog.n*2}, ${frog.n*3} … ${frog.n*10}`, "ok");
    later2(frogNew, 2400); return;
  }
  const next = frog.pos + 1;
  if(frog.miss.has(next)){ frog.ask = next; frogDraw(); frogAsk(); return; }
  frog.pos = next; frogDraw(); beep(500 + next*40, .08, "triangle");
  later2(frogWalk, 550);
}
function frogAsk(){
  const {n, ask} = frog, v = ask * n;
  const set = new Set([v]);
  for(const w of shuffle([v+n, v-n, v+1, v-1, v+2])){ if(set.size >= 4) break; if(w > 0) set.add(w); }
  gMsg($t`${(ask-1)*n} sayısından sonra hangi sayıya zıplamalı? 🤔`);
  options(shuffle([...set]).map(x => ({label:x, value:x})), v, (b, right) => {
    if(right){
      mLocked = true; b.classList.add("yes");
      frog.miss.delete(ask); frog.ask = -1;
      gRight(`${(ask-1)*n} + ${n} = ${v} ✔`, () => {
        mLocked = false; $("gopts").innerHTML = ""; frog.pos = ask; frogDraw(); later2(frogWalk, 550);
      }, 900);
    } else gWrong(b, $t`Hatırla: her seferinde ${n} ekliyoruz! ➕${n}`);
  });
}

// ---------- 🤔 Doğru mu Yanlış mı? ----------
function tfNew(){
  stopG(); mLocked = false; if(noTables()) return;
  let a = pickTable(), b = rnd(1, 10);
  if(Math.random() < .5) [a, b] = [b, a];
  const ans = a * b, truth = Math.random() < .5;
  let shown = ans;
  if(!truth){
    const w = shuffle([a*(b+1), a*(b-1), ans+1, ans-1, ans+2, ans-2, a+b].filter(x => x > 0 && x !== ans));
    shown = w[0];
  }
  $("gq").innerHTML = `<div class="gtitle">${$t`Bu işlem doğru mu?`}</div>
    <div class="tfq">${a} <span class="op">×</span> ${b} <span class="op">=</span> ${shown}</div>`;
  gMsg($t`Hızlı düşün! ⚡`);
  options([{label:$t`✔ Doğru`, value:true}, {label:$t`✘ Yanlış`, value:false}], truth, (btn, right) => {
    if(right){
      mLocked = true; btn.classList.add("yes");
      gRight(truth ? $t`Evet, ${a} × ${b} = ${ans} ✔` : $t`Aferin! Doğrusu ${a} × ${b} = ${ans} ✔`, tfNew, 1300);
    } else {
      mLocked = true;
      gWrong(btn, truth ? $t`Aslında doğruydu: ${a} × ${b} = ${ans}` : $t`Dikkat! ${a} × ${b} = ${ans}, ${shown} değil`);
      later2(tfNew, 2200);
    }
  }, "tf");
}

// ---------- 🔍 Kayıp Sayı ----------
function missNew(){
  stopG(); mLocked = false; if(noTables()) return;
  let a = pickTable(), b = rnd(1, 10);
  if(Math.random() < .5) [a, b] = [b, a];
  const p = a * b, hideLeft = Math.random() < .5, hidden = hideLeft ? a : b;
  const box = `<span class="qbox">?</span>`;
  $("gq").innerHTML = `<div class="gtitle">${$t`Kutuya hangi sayı gelmeli?`}</div>
    <div class="tfq">${hideLeft ? box : a} <span class="op">×</span> ${hideLeft ? b : box} <span class="op">=</span> ${p}</div>`;
  gMsg($t`İpucu: Çarpım tablosunu tersten düşün 🔄`);
  const set = new Set([hidden]);
  for(const w of shuffle([hidden+1, hidden-1, hidden+2, hidden-2, p - (hideLeft ? b : a)])){ if(set.size >= 4) break; if(w > 0 && w <= 12) set.add(w); }
  while(set.size < 4) set.add(rnd(1, 10));
  options(shuffle([...set]).map(x => ({label:x, value:x})), hidden, (btn, right) => {
    if(right){
      mLocked = true; btn.classList.add("yes");
      $("gq").querySelector(".qbox").textContent = hidden;
      gRight($t`Harika! ${a} × ${b} = ${p} ✔`, missNew, 1400);
    } else gWrong(btn, $t`Olmadı, tekrar dene! 💪`);
  });
}

// ---------- ⚖️ Hangisi Büyük? ----------
function cmpNew(){
  stopG(); mLocked = false; if(noTables()) return;
  const mk = () => { let a = pickTable(), b = rnd(1, 10); return Math.random() < .5 ? [a, b] : [b, a]; };
  let L = mk(), R = mk();
  // arada bir eşit olanlar da gelsin (ör. 2×6 ve 3×4)
  if(Math.random() < .2){
    const p = L[0]*L[1];
    const alts = [];
    for(let x=1;x<=10;x++) if(p % x === 0 && p/x <= 10 && x !== L[0]) alts.push([x, p/x]);
    if(alts.length) R = alts[rnd(0, alts.length-1)];
  }
  while(L[0] === R[0] && L[1] === R[1]) R = mk();
  const l = L[0]*L[1], r = R[0]*R[1];
  const ans = l > r ? ">" : l < r ? "<" : "=";
  $("gq").innerHTML = `<div class="gtitle">${$t`Hangi işaret gelmeli?`}</div>
    <div class="tfq cmp"><span>${L[0]}<span class="op">×</span>${L[1]}</span><span class="qbox" id="cmpBox">?</span><span>${R[0]}<span class="op">×</span>${R[1]}</span></div>`;
  gMsg($t`Önce ikisini de hesapla, sonra karşılaştır ⚖️`);
  options([{label:"&lt;", value:"<"}, {label:"=", value:"="}, {label:"&gt;", value:">"}], ans, (btn, right) => {
    if(right){
      mLocked = true; btn.classList.add("yes"); $("cmpBox").textContent = ans;
      gRight(`${l} ${ans} ${r} ✔`, cmpNew, 1500);
    } else gWrong(btn, $t`Tekrar bak: ${L[0]}×${L[1]} ve ${R[0]}×${R[1]} kaç ediyor?`);
  }, "three");
}

// ---------- 🎯 Hedef Sayı ----------
function targetNew(){
  stopG(); mLocked = false; if(noTables()) return;
  // birden fazla yolu olan hedefleri tercih et
  const pairsOf = t => { const r = []; for(let a=1;a<=10;a++) if(t % a === 0 && t/a <= 10) r.push([a, t/a]); return r; };
  let T, good, tries = 0;
  do{ T = pickTable() * rnd(1, 10); good = pairsOf(T); tries++; } while(good.length < 3 && tries < 30);
  good = shuffle(good).slice(0, 4);
  const cards = good.map(p => ({p, ok:true}));
  const seen = new Set(good.map(p => p.join("x")));
  let guard = 0;
  while(cards.length < 8 && guard++ < 200){
    const a = rnd(1, 10), b = rnd(1, 10), key = a + "x" + b;
    if(a*b === T || seen.has(key) || Math.abs(a*b - T) > 15) continue;
    seen.add(key); cards.push({p:[a, b], ok:false});
  }
  shuffle(cards);
  let left = good.length;
  $("gq").innerHTML = `<div class="gtitle">${$t`Sonucu <b>${T}</b> olan bütün işlemleri bul! 🎯`}</div>
    <div class="target">${T}</div><div class="tgrid2" id="tg"></div>`;
  $("gopts").innerHTML = "";
  gMsg($t`Bulunacak: ${left} işlem`);
  cards.forEach(c => {
    const b = document.createElement("button");
    b.textContent = `${c.p[0]} × ${c.p[1]}`;
    b.onclick = () => {
      if(mLocked || b.classList.contains("yes")) return;
      if(c.ok){
        b.classList.add("yes"); beep(900, .08, "triangle"); left--;
        if(left === 0){ mLocked = true; gRight($t`Hepsini buldun! 🎯 ${good.map(p => p.join(" × ")).join(", ")} = ${T}`, targetNew, 2000); }
        else gMsg($t`Süper! Bulunacak: ${left} işlem daha`, "ok");
      } else gWrong(b, $t`${c.p[0]} × ${c.p[1]} = ${c.p[0]*c.p[1]}, ${T} değil!`);
    };
    $("tg").appendChild(b);
  });
}

// ---------- 🌧️ Katları Yakala ----------
function catchNew(){
  stopG(); mLocked = false; if(noTables()) return;
  // 1 tablosunda her sayı kat olur, oyun anlamsızlaşır
  const others = [...picked].filter(x => x > 1);
  const n = others.length ? others[rnd(0, others.length-1)] : 2;
  let hearts = 3, over = false;
  $("gq").innerHTML = `<div class="gtitle">${$t`Sadece <b>${n}</b> tablosundaki sayıları yakala!`} <span id="hearts">❤️❤️❤️</span></div>
    <div class="rain" id="rain"></div>`;
  $("gopts").innerHTML = "";
  gMsg($t`${Array.from({length:5}, (_, i) => n*(i+1)).join(", ")} … gibi sayılara dokun! 🌧️`);
  const rain = $("rain");
  const end = (t, cls) => {
    over = true; clearInterval(catchInt); catchInt = null;
    rain.querySelectorAll(".drop").forEach(d => d.remove());
    gMsg(t, cls);
  };
  const spawn = () => {
    if(over) return;
    const isMul = Math.random() < .5;
    let v;
    if(isMul) v = n * rnd(1, 10);
    else do{ v = rnd(2, n*10); } while(v % n === 0);
    const d = document.createElement("button");
    d.className = "drop" + (Math.random() < .5 ? " w" : "");
    d.textContent = v;
    d.style.left = rnd(2, 84) + "%";
    const sp = CATCH_SPEEDS[catchSpeed];
    d.style.animationDuration = (sp.fall + Math.random()*sp.spread) + "s";
    d.onclick = () => {
      if(over) return;
      if(v % n === 0){
        d.classList.add("got"); setTimeout(() => d.remove(), 300);
        mCorrect++; score++; streak++; updateStats(); moveRocket(); beep(1000 + mCorrect*30, .08, "triangle");
        gMsg(`${v} = ${n} × ${v/n} ✔`, "ok");
        if(mCorrect >= GOAL){
          end($t`🚀 Aya ulaştın! Harika yakaladın! 🌙`, "ok"); confetti(); happy();
          later2(() => { mCorrect = 0; moveRocket(); catchNew(); }, 3000);
        }
      } else {
        d.classList.add("bad"); setTimeout(() => d.remove(), 400);
        hearts--; streak = 0; updateStats(); sad();
        $("hearts").textContent = "❤️".repeat(hearts) + "🤍".repeat(3 - hearts);
        if(hearts <= 0) end($t`Canların bitti! ${v}, ${n} tablosunda yok. ▶️ Başla ile tekrar dene`, "bad");
        else gMsg($t`${v}, ${n} tablosunda yok! Dikkat 👀`, "bad");
      }
    };
    d.addEventListener("animationend", () => d.remove());
    rain.appendChild(d);
  };
  spawn(); catchInt = setInterval(spawn, CATCH_SPEEDS[catchSpeed].every);
}

// yağmur hızı: fall = düşme süresi (sn), every = yeni sayı aralığı (ms)
const CATCH_SPEEDS = {
  slow: {fall:12,  spread:3,   every:2600},
  mid:  {fall:8.5, spread:2.5, every:1900},
  fast: {fall:5,   spread:1.5, every:1200},
};
let catchSpeed = "mid";
try{ const v = localStorage.getItem("catchSpeed"); if(CATCH_SPEEDS[v]) catchSpeed = v; }catch(e){}
function markCatchSpeed(){ document.querySelectorAll("[data-cs]").forEach(b => b.classList.toggle("active", b.dataset.cs === catchSpeed)); }
document.querySelectorAll("[data-cs]").forEach(b => b.onclick = () => {
  catchSpeed = b.dataset.cs; markCatchSpeed();
  try{ localStorage.setItem("catchSpeed", catchSpeed); }catch(e){}
  if(tab === "mulView" && mGame === "catch"){ mCorrect = 0; moveRocket(); catchNew(); }
});
markCatchSpeed();

function mReset(){
  const g = mGame, isMatch = g === "match", isG = G_GAMES.includes(g);
  stopG();
  $("catchSpeedSet").hidden = g !== "catch";
  $("matchCard").hidden = !isMatch;
  $("gCard").hidden = !isG;
  $("qCard").hidden = isMatch || isG; $("track").hidden = isMatch; $("mSkip").hidden = isMatch;
  $("track").classList.remove("racing"); $("count").hidden = true;
  $("mSkip").parentElement.classList.toggle("two", isMatch);
  if(isMatch){ stopTimer(); matchNew(); return; }
  if(isG){ stopTimer(); mCorrect = 0; $("timer").hidden = true; moveRocket(); mNew(); return; }
  stopTimer(); mCorrect = 0; moveRocket();
  $("timer").hidden = mGame !== "time"; $("timer").textContent = 60;
  mWrong = 0; $("count").hidden = mGame !== "time"; $("track").classList.toggle("racing", mGame === "time"); updCount();
  mNew();
  if(mGame === "time" && picked.size) $("mmsg").textContent = $t`İlk balonu patlatınca 60 saniye başlar! ⏱️`;
}
$("mStart").onclick = () => { mReset(); if(mGame === "time" && picked.size) startRace(); };
$("mRestart").onclick = mReset;
$("mSkip").onclick = () => { if(!mLocked){ streak = 0; updateStats(); mNew(); } };

// tabloyu gör
let viewTable = 2;
function buildTableView(){
  const list = picked.size ? [...picked].sort((a,b) => a-b) : [1,2,3,4,5,6,7,8,9,10];
  if(!list.includes(viewTable)) viewTable = list[0];
  const tabs = $("tableTabs"); tabs.innerHTML = "";
  list.forEach(n => {
    const b = document.createElement("button");
    b.textContent = $t`${n} tablosu`; b.classList.toggle("on", n === viewTable);
    b.onclick = () => { viewTable = n; buildTableView(); };
    tabs.appendChild(b);
  });
  $("tgrid").innerHTML = Array.from({length:10}, (_, i) =>
    `<div>${viewTable} × ${i+1} = <b>${viewTable*(i+1)}</b></div>`).join("");
}
$("showTable").onclick = () => {
  const c = $("tableCard"); c.hidden = !c.hidden;
  $("showTable").textContent = c.hidden ? $t`📖 Tabloyu Gör` : $t`🙈 Tabloyu Gizle`;
  if(!c.hidden) c.scrollIntoView({behavior:"smooth", block:"nearest"});
};
window.addEventListener("resize", moveRocket);

buildTables(); showBest(); mNew();

// ================= TOPLAMA & ÇIKARMA OYUNLARI =================
let asOp = "+", asMax = 20, asGame = "free", asCorrect = 0, asLocked = false, asLast = "";
let asTimers = [], asInt = null, asTick = null, asRaceOn = false, asTime = 60, asWrongN = 0;
function asUpdCount(){ $("asCount").innerHTML = `<span class="ok">${$t`✅ ${asCorrect} doğru`}</span><span class="no">${$t`❌ ${asWrongN} yanlış`}</span>`; }
const SYM = o => o === "+" ? "+" : o === "/" ? "÷" : "−";
let asDiv = [2, 5, 10];
try{ const d = JSON.parse(localStorage.getItem("asDiv")); if(d && d.length) asDiv = d; }catch(e){}
const asLater = (fn, ms) => asTimers.push(setTimeout(fn, ms));
function asClearT(){ asTimers.forEach(clearTimeout); asTimers = []; clearInterval(asInt); asInt = null; }
function asStop(){ asClearT(); clearInterval(asTick); asTick = null; asRaceOn = false; $("asTimer").classList.remove("low"); }
try{ const v = +localStorage.getItem("asMax"); if(v >= 5) asMax = v; }catch(e){}

// sonucu ve sayıları asMax'ı geçmeyen rastgele bir işlem
function asFact(){
  let f, g = 0;
  do{
    if(asOp === "+"){ const s = rnd(2, asMax), a = rnd(1, s-1); f = {a, b:s-a, ans:s}; }
    else if(asOp === "/"){ const b = asDiv[rnd(0, asDiv.length-1)], q = rnd(1, 10); f = {a:b*q, b, ans:q}; }
    else { const a = rnd(2, asMax), b = rnd(1, a-1); f = {a, b, ans:a-b}; }
    f.t = `${f.a} ${SYM(asOp)} ${f.b}`;
  } while(f.t === asLast && g++ < 20);
  asLast = f.t; return f;
}
const short = t => t.replace(/ /g, "");
// doğru cevap + kolay karıştırılan 3 yanlış cevap
function near(f, ans = f.ans){
  const set = new Set([ans]);
  const div = asOp === "/";
  const wrongOp = asOp === "+" ? Math.abs(f.a - f.b) : div ? f.a - f.b : f.a + f.b;
  const cand = div ? [ans+1, ans-1, ans+2, ans-2, ans*2, wrongOp] : [ans+1, ans-1, ans+2, ans-2, ans+10, ans-10, wrongOp];
  for(const c of shuffle(cand)){
    if(set.size >= 4) break; if(c >= (div ? 1 : 0)) set.add(c);
  }
  while(set.size < 4) set.add(rnd(0, asMax));
  return shuffle([...set]);
}

function asMsg(t, cls=""){ const m = $("asMsg"); m.textContent = t; m.className = "msg " + cls; }
function asMove(){
  const w = $("asTrack").clientWidth - 68; if(w <= 0) return;
  const x = w * Math.min(asCorrect, GOAL) / GOAL;
  $("asFill").style.width = x + "px"; $("asRocket").style.left = (12 + x) + "px";
}
function asPoint(){ asCorrect++; score++; streak++; updateStats(); asMove(); asUpdCount(); }
function asRight(text, next, delay=1200){
  asPoint(); happy(); asMsg(text, "ok");
  if(asGame !== "time" && asCorrect >= GOAL){
    confetti(); setTimeout(confetti, 600); asMsg($t`🚀 Aya ulaştın! Süpersin! 🌙`, "ok");
    asLater(() => { asCorrect = 0; asMove(); next(); }, 2600);
  } else asLater(next, delay);
}
function asWrong(btn, text){
  if(btn) btn.classList.add("no"); streak = 0; updateStats(); sad(); asMsg(text, "bad");
  if(asGame === "time"){ asWrongN++; asUpdCount(); }
}
function asOptions(list, correct, onPick, cls=""){
  const box = $("asOpts"); box.innerHTML = ""; box.className = "gopts " + cls;
  list.forEach(o => {
    const b = document.createElement("button"); b.innerHTML = o.label;
    b.onclick = () => { if(asLocked) return; onPick(b, o.value === correct); };
    box.appendChild(b);
  });
}
const numOpts = arr => arr.map(x => ({label:x, value:x}));

// 🎈 Balon Patlat + ⏱️ 60 Saniye
function asBalloon(){
  asClearT(); asLocked = false;
  const f = asFact();
  $("asQ").innerHTML = `<div class="mq">${f.a} <span class="op">${SYM(asOp)}</span> ${f.b} <span class="op">=</span> ?</div>`;
  asMsg(asGame === "time" && !asRaceOn ? $t`İlk balonu patlatınca 60 saniye başlar! ⏱️` : $t`Doğru cevabın olduğu balonu patlat! 🎈`);
  const box = $("asOpts"); box.innerHTML = ""; box.className = "balloons";
  near(f).forEach((n, i) => {
    const b = document.createElement("button");
    b.className = "balloon" + (i % 2 ? " w" : ""); b.style.animationDelay = (i * .35) + "s"; b.textContent = n;
    b.onclick = () => {
      if(asLocked) return;
      if(asGame === "time" && !asRaceOn) asStartRace();
      if(n === f.ans){ asLocked = true; b.classList.add("pop"); beep(1200, .05, "square", .08); asRight(`${f.t} = ${f.ans} ✔`, asBalloon, 700); }
      else asWrong(b, $t`Olmadı, başka bir balon dene! 💪`);
    };
    box.appendChild(b);
  });
}
function asStartRace(){
  clearInterval(asTick);
  asRaceOn = true; asTime = 60; $("asTimer").hidden = false; $("asTimer").textContent = 60;
  asTick = setInterval(() => {
    asTime--; $("asTimer").textContent = asTime;
    $("asTimer").classList.toggle("low", asTime <= 10);
    if(asTime <= 10 && asTime > 0) beep(asTime <= 3 ? 880 : 500, .1);  // son 10 saniye uyarısı, son 3 saniye daha tiz
    if(asTime <= 0) asEndRace();
  }, 1000);
}
function asEndRace(){
  clearInterval(asTick); asTick = null; asRaceOn = false; asClearT(); asLocked = true;
  $("asOpts").innerHTML = "";
  const key = "asBest" + asOp; let best = 0; try{ best = +localStorage.getItem(key) || 0; }catch(e){}
  let t = $t`⏱️ Süre bitti! ${asCorrect} doğru cevap verdin.`;
  if(asCorrect > best){ try{ localStorage.setItem(key, asCorrect); }catch(e){} t += (" " + $t`🏅 Yeni rekor!`); confetti(); happy(); }
  asMsg(t + " " + $t`Tekrar için ▶️ Başla.`, "ok"); asShowBest();
}
function asShowBest(){
  let v = 0; try{ v = +localStorage.getItem("asBest" + asOp) || 0; }catch(e){}
  $("asBest").textContent = v ? $t`🏅 60 saniye rekoru: ${v} doğru` : "";
}

// 🃏 Hafıza Kartları
function asMatch(){
  asClearT(); asLocked = false;
  const facts = [], used = new Set(); let g = 0;
  while(facts.length < 6 && g++ < 300){ const f = asFact(); if(used.has(f.ans)) continue; used.add(f.ans); facts.push(f); }
  const cards = [];
  facts.forEach((f, id) => { cards.push({id, text:short(f.t), ans:false}); cards.push({id, text:String(f.ans), ans:true}); });
  shuffle(cards);
  $("asQ").innerHTML = `<div class="mstats"><span>${$t`👆 Hamle:`} <b id="asMoves">0</b></span><span>${$t`✅ Bulunan:`} <b id="asFound">0</b> / ${facts.length}</span></div><div class="mgrid" id="asGrid" style="width:100%"></div>`;
  $("asOpts").innerHTML = ""; $("asOpts").className = "";
  asMsg($t`İşlemi ve sonucunu eşleştir! Kartları çevir 🃏`);
  let open = [], moves = 0, found = 0, busy = false;
  cards.forEach(c => {
    const el = document.createElement("button"); el.className = "mc"; c.el = el;
    el.innerHTML = `<div class="in"><div class="b">?</div><div class="f${c.ans ? " ans" : ""}">${c.text}</div></div>`;
    el.onclick = () => {
      if(busy || el.classList.contains("open") || el.classList.contains("done")) return;
      el.classList.add("open"); beep(760, .05, "triangle"); open.push(c);
      if(open.length < 2) return;
      moves++; $("asMoves").textContent = moves;
      const [x, y] = open; open = [];
      if(x.id === y.id && x.ans !== y.ans){
        [x, y].forEach(k => { k.el.classList.remove("open"); k.el.classList.add("done"); });
        found++; $("asFound").textContent = found; score++; streak++; updateStats(); happy();
        const f = facts[x.id]; asMsg(`${f.t} = ${f.ans} ✔`, "ok");
        if(found === facts.length){ confetti(); setTimeout(confetti, 600); asMsg($t`🎉 Hepsini buldun! ${moves} hamlede bitirdin.` + " " + $t`Yeni oyun için ▶️ Başla.`, "ok"); }
      } else {
        busy = true; streak = 0; updateStats(); sad();
        [x, y].forEach(k => k.el.classList.add("wrong"));
        asMsg($t`Eşleşmedi, yerlerini aklında tut! 🧠`, "bad");
        asLater(() => { [x, y].forEach(k => k.el.classList.remove("open", "wrong")); busy = false; }, 1000);
      }
    };
    $("asGrid").appendChild(el);
  });
}

// 🍎 Resimle Say (resimler kalabalık olmasın diye en fazla 20)
function asPic(){
  asClearT(); asLocked = false;
  const keep = asMax; asMax = Math.min(asMax, 20); let f = asFact(); asMax = keep;
  const e = FRUITS[rnd(0, FRUITS.length-1)];
  const grp = n => `<div class="grp">${Array.from({length:n}, (_, i) => e + ((i+1) % 5 === 0 && i+1 < n ? " " : "")).join("")}</div>`;
  let pic, title;
  if(asOp === "/"){
    // resim kalabalık olmasın: en fazla 5 sepet, sepet başına en fazla 6
    const small = asDiv.filter(x => x > 1 && x <= 5), b = small.length ? small[rnd(0, small.length-1)] : rnd(2, 4), q = rnd(1, 6);
    f = {a:b*q, b, ans:q, t:`${b*q} ÷ ${b}`};
    pic = `${grp(f.a)}<span class="sign">➜</span><div class="grp">${"🧺".repeat(b)}</div>`;
    title = $t`${f.a} ${e}, ${b} sepete eşit paylaştırılıyor. Her sepete kaç tane düşer?`;
    $("asQ").innerHTML = `<div class="gtitle">${title}</div><div class="pic" id="asPicBox">${pic}</div>`;
    asMsg($t`İpucu: Sepetlere birer birer dağıtmayı düşün 🧺`);
    asOptions(numOpts(near(f)), f.ans, (btn, right) => {
      if(right){
        asLocked = true; btn.classList.add("yes");
        $("asPicBox").innerHTML = Array.from({length:b}, () => `<div class="grp">🧺 ${e.repeat(q)}</div>`).join("");
        asRight($t`Evet! ${f.t} = ${f.ans} ✔ Her sepette ${q} tane`, asPic, 2200);
      } else asWrong(btn, $t`Tekrar düşün! Her sepette aynı sayıda olmalı 🔍`);
    });
    return;
  }
  if(asOp === "+"){
    pic = `${grp(f.a)}<span class="sign">+</span>${grp(f.b)}`;
    title = $t`Toplam kaç ${e} var?`;
  } else {
    pic = `<div class="grp">${Array.from({length:f.a}, (_, i) =>
      (i >= f.a - f.b ? `<span class="gone"><i>${e}</i></span>` : e) + ((i+1) % 5 === 0 && i+1 < f.a ? " " : "")).join("")}</div>`;
    title = $t`${f.a} ${e} vardı, ${f.b} tanesi gitti. Kaç tane kaldı?`;
  }
  $("asQ").innerHTML = `<div class="gtitle">${title}</div><div class="pic">${pic}</div>`;
  asMsg($t`Tek tek sayabilirsin 👆`);
  asOptions(numOpts(near(f)), f.ans, (b, right) => {
    if(right){ asLocked = true; b.classList.add("yes"); asRight($t`Evet! ${f.t} = ${f.ans} ✔`, asPic, 1600); }
    else asWrong(b, $t`Tekrar say! 🔍`);
  });
}

// 🤔 Doğru mu Yanlış mı?
function asTF(){
  asClearT(); asLocked = false;
  const f = asFact(), truth = Math.random() < .5;
  const shown = truth ? f.ans : near(f).filter(x => x !== f.ans)[0];
  $("asQ").innerHTML = `<div class="gtitle">${$t`Bu işlem doğru mu?`}</div>
    <div class="tfq">${f.a} <span class="op">${SYM(asOp)}</span> ${f.b} <span class="op">=</span> ${shown}</div>`;
  asMsg($t`Hızlı düşün! ⚡`);
  asOptions([{label:$t`✔ Doğru`, value:true}, {label:$t`✘ Yanlış`, value:false}], truth, (b, right) => {
    asLocked = true;
    if(right){ b.classList.add("yes"); asRight(truth ? $t`Evet, ${f.t} = ${f.ans} ✔` : $t`Aferin! Doğrusu ${f.t} = ${f.ans} ✔`, asTF, 1300); }
    else { asWrong(b, truth ? $t`Aslında doğruydu: ${f.t} = ${f.ans}` : $t`Dikkat! ${f.t} = ${f.ans}, ${shown} değil`); asLater(asTF, 2200); }
  }, "tf");
}

// 🔍 Kayıp Sayı
function asMiss(){
  asClearT(); asLocked = false;
  const f = asFact(), left = Math.random() < .5, hidden = left ? f.a : f.b;
  const box = `<span class="qbox">?</span>`;
  $("asQ").innerHTML = `<div class="gtitle">${$t`Kutuya hangi sayı gelmeli?`}</div>
    <div class="tfq">${left ? box : f.a} <span class="op">${SYM(asOp)}</span> ${left ? f.b : box} <span class="op">=</span> ${f.ans}</div>`;
  asMsg($t`İpucu: Ters işlemle düşün 🔄`);
  asOptions(numOpts(near(f, hidden)), hidden, (b, right) => {
    if(right){
      asLocked = true; b.classList.add("yes"); $("asQ").querySelector(".qbox").textContent = hidden;
      asRight($t`Harika! ${f.t} = ${f.ans} ✔`, asMiss, 1400);
    } else asWrong(b, $t`Olmadı, tekrar dene! 💪`);
  });
}

// ⚖️ Hangisi Büyük?
function asCmp(){
  asClearT(); asLocked = false;
  const L = asFact(); let R = asFact();
  if(Math.random() < .2){ // arada bir sonucu eşit olan işlemler
    for(let g=0; g<60; g++){ const t = asFact(); if(t.ans === L.ans && t.t !== L.t){ R = t; break; } }
  }
  const ans = L.ans > R.ans ? ">" : L.ans < R.ans ? "<" : "=";
  $("asQ").innerHTML = `<div class="gtitle">${$t`Hangi işaret gelmeli?`}</div>
    <div class="tfq cmp"><span>${short(L.t)}</span><span class="qbox" id="asCmpBox">?</span><span>${short(R.t)}</span></div>`;
  asMsg($t`Önce ikisini de hesapla, sonra karşılaştır ⚖️`);
  asOptions([{label:"&lt;", value:"<"}, {label:"=", value:"="}, {label:"&gt;", value:">"}], ans, (b, right) => {
    if(right){ asLocked = true; b.classList.add("yes"); $("asCmpBox").textContent = ans; asRight(`${L.ans} ${ans} ${R.ans} ✔`, asCmp, 1500); }
    else asWrong(b, $t`Tekrar bak: ${L.t} ve ${R.t} kaç ediyor?`);
  }, "three");
}

// 🎯 Hedef Sayı
function asTarget(){
  asClearT(); asLocked = false;
  const M = asMax; let T, good = [];
  for(let g=0; g<30; g++){
    T = asOp === "+" ? rnd(Math.min(4, M), M) : rnd(1, Math.max(1, M-4));
    good = [];
    if(asOp === "/"){ T = rnd(1, 10); for(let b=1; b<=10; b++) good.push([T*b, b]); break; }
    if(asOp === "+") for(let a=1; a<T; a++) good.push([a, T-a]);
    else for(let a=T+1; a<=M; a++) good.push([a, a-T]);
    if(good.length >= 3) break;
  }
  good = shuffle(good).slice(0, 4);
  const cards = good.map(p => ({p, ok:true})), seen = new Set(good.map(p => p.join()));
  let guard = 0;
  while(cards.length < 8 && guard++ < 400){
    const f = asFact(), k = f.a + "," + f.b;
    if(f.ans === T || seen.has(k) || Math.abs(f.ans - T) > 10) continue;
    seen.add(k); cards.push({p:[f.a, f.b], ok:false});
  }
  shuffle(cards);
  let left = good.length;
  $("asQ").innerHTML = `<div class="gtitle">${$t`Sonucu <b>${T}</b> olan bütün işlemleri bul! 🎯`}</div>
    <div class="target">${T}</div><div class="tgrid2" id="asTg"></div>`;
  $("asOpts").innerHTML = ""; $("asOpts").className = "";
  asMsg($t`Bulunacak: ${left} işlem`);
  const calc = ([a, b]) => asOp === "+" ? a + b : asOp === "/" ? a / b : a - b;
  cards.forEach(c => {
    const b = document.createElement("button");
    b.textContent = `${c.p[0]} ${SYM(asOp)} ${c.p[1]}`;
    b.onclick = () => {
      if(asLocked || b.classList.contains("yes")) return;
      if(c.ok){
        b.classList.add("yes"); beep(900, .08, "triangle"); left--;
        if(left === 0){ asLocked = true; asRight($t`Hepsini buldun! 🎯 Hepsi ${T} ediyor`, asTarget, 2000); }
        else asMsg($t`Süper! Bulunacak: ${left} işlem daha`, "ok");
      } else asWrong(b, $t`${b.textContent} = ${calc(c.p)}, ${T} değil!`);
    };
    $("asTg").appendChild(b);
  });
}

// 🌧️ Sonucu Yakala
function asCatch(){
  asClearT(); asLocked = false;
  let T = 3; for(let g=0; g<30; g++){ T = asFact().ans; if(T >= 3) break; }
  let hearts = 3, over = false;
  $("asQ").innerHTML = `<div class="gtitle">${$t`Sonucu <b>${T}</b> olanları yakala!`} <span id="asHearts">❤️❤️❤️</span></div>
    <div class="rain" id="asRain"></div>`;
  $("asOpts").innerHTML = ""; $("asOpts").className = "";
  asMsg($t`Sonucu ${T} olan işlemlere dokun! 🌧️`);
  const rain = $("asRain");
  const goodFact = () => {
    if(asOp === "+"){ const a = rnd(1, T-1); return {t:`${a}+${T-a}`, ans:T}; }
    if(asOp === "/"){ const b = asDiv[rnd(0, asDiv.length-1)]; return {t:`${T*b}÷${b}`, ans:T}; }
    const a = rnd(T+1, Math.max(T+1, asMax)); return {t:`${a}−${a-T}`, ans:T};
  };
  const end = (t, cls) => { over = true; clearInterval(asInt); asInt = null; rain.querySelectorAll(".drop").forEach(d => d.remove()); asMsg(t, cls); };
  const spawn = () => {
    if(over) return;
    let f;
    if(Math.random() < .45) f = goodFact();
    else { let g = 0; do{ f = asFact(); } while(f.ans === T && g++ < 30); f = {t:short(f.t), ans:f.ans}; }
    const d = document.createElement("button");
    d.className = "drop expr" + (Math.random() < .5 ? " w" : "");
    d.textContent = f.t;
    d.style.left = rnd(2, 78) + "%";
    const sp = CATCH_SPEEDS[catchSpeed];
    d.style.animationDuration = (sp.fall + Math.random()*sp.spread) + "s";
    d.onclick = () => {
      if(over) return;
      if(f.ans === T){
        d.classList.add("got"); setTimeout(() => d.remove(), 300);
        asPoint(); beep(1000 + asCorrect*30, .08, "triangle");
        asMsg(`${f.t} = ${T} ✔`, "ok");
        if(asCorrect >= GOAL){
          end($t`🚀 Aya ulaştın! Harika yakaladın! 🌙`, "ok"); confetti(); happy();
          asLater(() => { asCorrect = 0; asMove(); asCatch(); }, 3000);
        }
      } else {
        d.classList.add("bad"); setTimeout(() => d.remove(), 400);
        hearts--; streak = 0; updateStats(); sad();
        $("asHearts").textContent = "❤️".repeat(hearts) + "🤍".repeat(3 - hearts);
        if(hearts <= 0) end($t`Canların bitti! ${f.t} = ${f.ans}, ${T} değil. ▶️ Başla ile tekrar dene`, "bad");
        else asMsg($t`${f.t} = ${f.ans}, ${T} değil! Dikkat 👀`, "bad");
      }
    };
    d.addEventListener("animationend", () => d.remove());
    rain.appendChild(d);
  };
  spawn(); asInt = setInterval(spawn, CATCH_SPEEDS[catchSpeed].every);
}

// 🐸 Kurbağa Zıplat
//  toplama: ileri ritmik sayma · çıkarma: geri ritmik sayma
//  bölme: sayıdan 0'a eşit zıplamalar → "kaç kere zıpladı?" = bölüm
function asFrog(){
  asClearT(); asLocked = false;
  let s, pads, title, div = null;
  const fg = frogCfg();   // boş alanlar null → rastgele
  if(asOp === "/"){
    const b = fg.step || asDiv[rnd(0, asDiv.length-1)], q = fg.jumps || rnd(2, 10);
    s = b; pads = Array.from({length:q+1}, (_, i) => b*q - i*b);
    div = {a:b*q, b, q};
    title = $t`🐸 Kurbağa <b>${b*q}</b> sayısından <b>0</b>'a ${erer(b)} geri zıplıyor!`;
  } else {
    const cands = [1,2,3,4,5,10].filter(x => x*10 <= asMax);
    s = fg.step || (cands.length ? cands[rnd(0, cands.length-1)] : 1);
    let steps = fg.jumps || Math.max(2, Math.min(10, Math.floor(asMax / s)));
    let first;   // kurbağanın ilk taşı
    if(fg.start !== null){
      first = fg.start;
      if(asOp === "-"){
        // geri zıplarken 0'ın altına inmesin
        if(first === 0) first = steps * s;
        if(first < s) s = first;
        steps = Math.max(1, Math.min(steps, Math.floor(first / s)));
      }
    } else {
      const room = Math.max(0, asMax - steps*s);
      first = asOp === "+" ? rnd(0, room) : steps*s + rnd(0, room);
    }
    pads = Array.from({length:steps+1}, (_, i) => asOp === "+" ? first + i*s : first - i*s);
    title = $t`🐸 Kurbağa ${erer(s)} <b>${asOp === "+" ? $t`ileri` : $t`geri`}</b> zıplıyor!`;
  }
  const miss = new Set(shuffle(Array.from({length:pads.length-1}, (_, i) => i+1)).slice(0, Math.min(4, pads.length-1)));
  const st = {pos:0, ask:-1};
  const sign = asOp === "+" ? "+" : "−";

  const draw = () => {
    $("asQ").innerHTML = `<div class="gtitle">${title}</div><div class="pads">${pads.map((v, i) => {
      const cls = "lp" + (miss.has(i) ? " miss" : "") + (i === st.ask ? " ask" : "") + (i < st.pos ? " past" : "");
      return `<div class="${cls}">${miss.has(i) ? "?" : v}${i === st.pos ? '<span class="frog">🐸</span>' : ""}</div>`;
    }).join("")}</div>`;
  };
  const finish = () => {
    if(!div){
      confetti(); asMsg($t`🎉 Kurbağa karşıya geçti! ${pads.join(", ")}`, "ok");
      asLater(asFrog, 2600); return;
    }
    asMsg($t`Kurbağa kaç kere zıpladı? 🤔 (${div.a} ÷ ${div.b} = ?)`);
    asOptions(numOpts(near({a:div.a, b:div.b, ans:div.q})), div.q, (btn, right) => {
      if(right){ asLocked = true; btn.classList.add("yes"); confetti(); asRight($t`Evet! ${div.q} kere zıpladı: ${div.a} ÷ ${div.b} = ${div.q} ✔`, asFrog, 2600); }
      else asWrong(btn, $t`Zıplamaları tek tek say! 🐸`);
    });
  };
  const ask = () => {
    const i = st.ask, v = pads[i], prev = pads[i-1];
    asMsg($t`${prev} ${sign} ${s} = ? Kurbağa nereye zıplamalı? 🤔`);
    const set = new Set([v]);
    for(const w of shuffle([v+s, v-s, v+1, v-1, v+2])){ if(set.size >= 4) break; if(w >= 0 && w !== prev) set.add(w); }
    while(set.size < 4) set.add(v + set.size * 3);
    asOptions(numOpts(shuffle([...set])), v, (btn, right) => {
      if(right){
        asLocked = true; btn.classList.add("yes");
        miss.delete(i); st.ask = -1;
        asRight(`${prev} ${sign} ${s} = ${v} ✔`, () => {
          asLocked = false; $("asOpts").innerHTML = ""; st.pos = i; draw(); asLater(walk, 550);
        }, 900);
      } else asWrong(btn, asOp === "+" ? $t`Hatırla: her zıplamada ${s} ekliyoruz ➕` : $t`Hatırla: her zıplamada ${s} çıkarıyoruz ➖`);
    });
  };
  const walk = () => {
    if(st.pos >= pads.length - 1) return finish();
    const next = st.pos + 1;
    if(miss.has(next)){ st.ask = next; draw(); ask(); return; }
    st.pos = next; draw(); beep(500 + next*40, .08, "triangle");
    asLater(walk, 550);
  };
  $("asOpts").innerHTML = ""; $("asOpts").className = "";
  asMsg($t`Kurbağayı izle, boş taşlara gelince yardım et! 🐸`);
  draw(); asLater(walk, 800);
}

const FG_IDS = {fgStart:[0, 999], fgStep:[1, 100], fgJumps:[1, 20]};
function frogCfg(){
  const v = id => { const x = parseInt($(id).value); return Number.isFinite(x) ? clamp(x, ...FG_IDS[id]) : null; };
  return {start: v("fgStart"), step: v("fgStep"), jumps: v("fgJumps")};
}
function saveFrogCfg(){ try{ localStorage.setItem("frogCfg", JSON.stringify(Object.keys(FG_IDS).map(id => $(id).value))); }catch(e){} }
try{ const c = JSON.parse(localStorage.getItem("frogCfg")); if(c) Object.keys(FG_IDS).forEach((id, i) => $(id).value = c[i] ?? ""); }catch(e){}
Object.keys(FG_IDS).forEach(id => $(id).addEventListener("change", () => {
  const x = parseInt($(id).value);
  $(id).value = Number.isFinite(x) ? clamp(x, ...FG_IDS[id]) : "";
  saveFrogCfg(); if(asGame === "frog") asReset();
}));
$("fgRandom").onclick = () => { Object.keys(FG_IDS).forEach(id => $(id).value = ""); saveFrogCfg(); if(asGame === "frog") asReset(); };

const AS_GAMES = {frog:asFrog, free:asBalloon, time:asBalloon, match:asMatch, pic:asPic, tf:asTF, miss:asMiss, cmp:asCmp, target:asTarget, catch:asCatch};
function asNew(){ AS_GAMES[asGame](); }
function asReset(){
  asStop(); asCorrect = 0; asLocked = false;
  const isMatch = asGame === "match";
  $("asTrack").hidden = isMatch;
  $("asTimer").hidden = asGame !== "time"; $("asTimer").textContent = 60;
  asWrongN = 0; $("asCount").hidden = asGame !== "time"; $("asTrack").classList.toggle("racing", asGame === "time");
  $("asSpeedSet").hidden = asGame !== "catch";
  $("asFrogSet").hidden = asGame !== "frog"; $("fgStartL").hidden = asOp === "/";
  $("asSkip").hidden = isMatch; $("asSkip").parentElement.classList.toggle("two", isMatch);
  asShowBest(); asMove(); asUpdCount(); asNew();
}

document.querySelectorAll("[data-ag]").forEach(b => b.onclick = () => {
  document.querySelectorAll("[data-ag]").forEach(x => x.classList.remove("active"));
  b.classList.add("active"); asGame = b.dataset.ag; asReset();
});
function asSetMax(v){
  asMax = clamp(v, 5, 999); $("asMaxIn").value = asMax;
  document.querySelectorAll("[data-am]").forEach(x => x.classList.toggle("active", +x.dataset.am === asMax));
  try{ localStorage.setItem("asMax", asMax); }catch(e){}
}
document.querySelectorAll("[data-am]").forEach(b => b.onclick = () => { asSetMax(+b.dataset.am); asReset(); });
$("asMaxIn").addEventListener("change", () => { asSetMax(parseInt($("asMaxIn").value) || 20); asReset(); });
$("asStart").onclick = () => { asReset(); if(asGame === "time") asStartRace(); };
$("asRestart").onclick = asReset;
$("asSkip").onclick = () => { if(!asLocked){ streak = 0; updateStats(); asNew(); } };
document.querySelectorAll("[data-cs]").forEach(b => b.addEventListener("click", () => {
  if(tab === "asView" && asGame === "catch"){ asStop(); asCorrect = 0; asMove(); asCatch(); }
}));
document.querySelectorAll("[data-tab]").forEach(b => b.addEventListener("click", () => {
  if(tab !== "asView"){ asStop(); return; }
  asOp = b.dataset.op; asLast = "";
  $("asDivSet").hidden = asOp !== "/"; $("asRangeSet").hidden = asOp === "/";
  asReset();
}));
function markDiv(){ document.querySelectorAll("[data-dv]").forEach(x => x.classList.toggle("active", x.dataset.dv === asDiv.join(","))); }
document.querySelectorAll("[data-dv]").forEach(b => b.onclick = () => {
  asDiv = b.dataset.dv.split(",").map(Number); markDiv();
  try{ localStorage.setItem("asDiv", JSON.stringify(asDiv)); }catch(e){}
  asReset();
});
markDiv();
window.addEventListener("resize", asMove);
asSetMax(asMax);

buildAbacus();
newProblem();

// ---------- tam ekran: bütün oyunlar ----------
function reqFs(el){
  const r = el.requestFullscreen || el.webkitRequestFullscreen;
  if(r) try{ const p = r.call(el); if(p && p.catch) p.catch(() => {}); }catch(e){}
}
function exitRealFs(){
  if(!(document.fullscreenElement || document.webkitFullscreenElement)) return;
  const x = document.exitFullscreen || document.webkitExitFullscreen;
  if(x) try{ const p = x.call(document); if(p && p.catch) p.catch(() => {}); }catch(e){}
}
let fsMain = null;   // tam ekrandaki oyun alanı
function setGameFs(on){
  if(fsMain){ fsMain.classList.remove("fs"); fsMain = null; }
  if(on){ fsMain = document.querySelector(`#${tab} .side-main`); fsMain.classList.add("fs"); reqFs(fsMain); }
  else exitRealFs();
  document.body.classList.toggle("noscroll", on);
  // boyutu değişen parçaları yeniden yerleştir (abaküs boncukları, roket)
  setTimeout(() => { render(); moveRocket(); asMove(); }, 80);
}
// her oyun alanına tam ekrandan çıkış düğmesi
document.querySelectorAll(".view .side-main").forEach(m => {
  const b = document.createElement("button");
  b.type = "button"; b.className = "fs-exit"; b.textContent = "✕"; b.setAttribute("aria-label", "✕");
  b.onclick = () => setGameFs(false);
  m.prepend(b);
});
$("fsOpen").onclick = () => tab === "flashView" ? setFs(true) : setGameFs(true);
["fullscreenchange", "webkitfullscreenchange"].forEach(ev => document.addEventListener(ev, () => {
  if(!(document.fullscreenElement || document.webkitFullscreenElement) && fsMain) setGameFs(false);
  setTimeout(() => { render(); moveRocket(); asMove(); }, 80);
}));

// ---------- dil seçimi ----------
function markLang(){ document.querySelectorAll("[data-lang]").forEach(b => b.classList.toggle("active", b.dataset.lang === lang)); }
function setLang(l){
  lang = l;
  markLang(); applyStatic();
  // ekrandaki dinamik metinleri yeni dilde yeniden oluştur
  buildAbacus(); newProblem(); updateStats();
  showBest(); asShowBest(); buildTableView();
  $("showTable").textContent = $("tableCard").hidden ? $t`📖 Tabloyu Gör` : $t`🙈 Tabloyu Gizle`;
  stopFlash(); $("answerBox").hidden = true; fm.classList.remove("answering"); show($t`Hazır mısın?`, "", true); $("step").textContent = "";
  mReset(); if(tab !== "mulView"){ stopTimer(); stopG(); }
  asReset(); if(tab !== "asView") asStop();
  updToggles();
}
document.querySelectorAll("[data-lang]").forEach(b => b.onclick = () => setLang(b.dataset.lang));
markLang(); applyStatic();

// ---------- telefon: ayarlar açılır / kapanır menü ----------
const isPhone = () => matchMedia("(max-width:760px)").matches;
document.querySelectorAll(".view > .settings").forEach(card => {
  const b = document.createElement("button");
  b.type = "button"; b.className = "set-toggle";
  card.before(b);
  b.onclick = () => { card.classList.toggle("open"); updToggles(); };
});
// düğmede o anki seçimler görünsün: "⚙️ Ayarlar  ➕ Toplama · 20'ye kadar ▾"
function updToggles(){
  document.querySelectorAll(".set-toggle").forEach(b => {
    const card = b.nextElementSibling;
    const sum = [...card.querySelectorAll("button.active")].filter(x => !x.closest("[hidden]"))
      .map(x => x.textContent.trim()).join(" · ");
    b.classList.toggle("open", card.classList.contains("open"));
    b.innerHTML = `<span>${$t`⚙️ Ayarlar`}</span><span class="sum"></span><span class="arr">▾</span>`;
    b.querySelector(".sum").textContent = sum;
  });
}
// telefonda oyun seçilince menü kapanır ve oyuna kaydırılır
document.addEventListener("click", e => {
  const btn = e.target.closest(".settings button");
  if(!btn) return;
  setTimeout(() => {
    if(isPhone() && (btn.dataset.g || btn.dataset.ag)){
      const card = btn.closest(".settings");
      card.classList.remove("open");
      card.previousElementSibling.scrollIntoView({behavior:"smooth", block:"start"});
    }
    updToggles();
  }, 0);
});
updToggles();
