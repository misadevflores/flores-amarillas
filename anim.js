// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Él la estaba esperando con una flor amarilla", time: 14 },
  { text: "Ella lo estaba soñando con la luz en su pupila", time: 20 },
  { text: "Y el amarillo del sol iluminaba la esquina (la esquina)", time: 28 },
  { text: "Lo sentía tan cercano, lo sentía desde niña", time: 35 },
  { text: "Ella sabía que él sabía, que algún día pasaría", time: 42 },

  { text: "Que vendría a buscarla, con sus flores amarillas", time: 57 },
  { text: "No te apures no detengas, el instante del encuentro", time: 64 },
  { text: "Está dicho que es un hecho, no la pierdas no hay derecho", time: 72 },
  { text: "No te olvides, que la vida", time: 80 },

  { text: "Casi nunca está dormida", time: 96 },
  { text: "En ese bar tan desierto los esperaba el encuentro (el encuentro)", time: 102 },
  { text: "Ella llegó en limosina amarilla por supuesto", time: 110 },
  { text: "Él se acercó de repente y la miró tan de frente (de frente)", time: 118 },

  { text: "Toda una vida soñada y no pudo decir nada", time: 134 },
  { text: "Ella sabía que él sabía, que algún día pasaría", time: 141 },
  { text: "Que vendría a buscarla, con sus flores amarillas", time: 149 },
  { text: "No te apures no detengas, el instante del encuentro", time: 157 },

  { text: "Está dicho que es un hecho, no la pierdas no hay derecho", time: 174 },
  { text: "No te olvides, que la vida", time: 182 },
  { text: "Casi nunca está dormida", time: 190 },

  { text: "Ella sabía que él sabía, que algún día pasaría", time: 202 },
  { text: "Que vendría a buscarla, con sus flores amarillas", time: 210 },
  { text: "No te apures no detengas, el instante del encuentro", time: 218 },
  { text: "Está dicho que es un hecho, no la pierdas no hay derecho", time: 226 },
];



// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);
