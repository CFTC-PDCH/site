/* Décompte jusqu'au 20 novembre 2026, minuit (heure de Paris).
   La date cible est dans l'attribut data-target du bloc .countdown (HTML). */
(function () {
  var box = document.querySelector(".countdown");
  if (!box) return;
  var target = new Date(box.getAttribute("data-target")).getTime();
  var units = ["days", "hours", "minutes", "seconds"];
  var labels = { days: ["jour", "jours"], hours: ["heure", "heures"], minutes: ["minute", "minutes"], seconds: ["seconde", "secondes"] };
  var timer;

  function tick() {
    var left = Math.floor((target - Date.now()) / 1000);
    if (left <= 0) {
      clearInterval(timer);
      box.innerHTML = "<p class=\"countdown__done\">C’est le jour J : actualisez la page pour découvrir le contenu.</p>";
      return;
    }
    var values = {
      days: Math.floor(left / 86400),
      hours: Math.floor(left / 3600) % 24,
      minutes: Math.floor(left / 60) % 60,
      seconds: left % 60
    };
    units.forEach(function (u) {
      box.querySelector('[data-unit="' + u + '"]').textContent = String(values[u]).padStart(2, "0");
      box.querySelector('[data-label="' + u + '"]').textContent = labels[u][values[u] > 1 ? 1 : 0];
    });
  }

  tick();
  timer = setInterval(tick, 1000);
})();
