const semaforo = document.getElementById("semaforo");

document.getElementById("vermelho").addEventListener("click", () => {
  semaforo.style.backgroundColor = "red";
  semaforo.textContent = "Pare";
});

document.getElementById("amarelo").addEventListener("click", () => {
  semaforo.style.backgroundColor = "yellow";
  semaforo.style.color = "black"; // melhor legibilidade no fundo amarelo
  semaforo.textContent = "Atenção";
});

document.getElementById("verde").addEventListener("click", () => {
  semaforo.style.backgroundColor = "green";
  semaforo.textContent = "Siga";
});
