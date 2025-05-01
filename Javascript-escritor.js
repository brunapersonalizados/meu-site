// Função para obter o tempo restante
function getTimeRemaining() {
  const startTime = localStorage.getItem('startTime');
  const totalTime = 15 * 60 * 60 * 1000; // 15 horas em milissegundos

  if (!startTime) {
    // Se não houver startTime, inicia agora
    const now = Date.now();
    localStorage.setItem('startTime', now);
    return totalTime;
  } else {
    // Calcula o tempo restante
    const elapsed = Date.now() - startTime;
    return Math.max(totalTime - elapsed, 0); // Garante que não fique negativo
  }
}

// Função para atualizar o relógio
function updateClock() {
  let timeLeft = getTimeRemaining();
  const hours = Math.floor(timeLeft / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  // Exibe no Ascende o relógio na página (substitua pelo seu elemento HTML)
  document.getElementById('clock').innerText = `${hours}:${minutes}:${seconds}`;

  if (timeLeft > 0) {
    setTimeout(updateClock, 1000); // Atualiza a cada segundo
  } else {
    // Opcional: ação quando o tempo acabar
    document.getElementById('clock').innerText = "Tempo esgotado!";
  }
}

// Inicia o relógio ao carregar a página
window.onload = updateClock;