let numeroSecreto;
let tentativas;

// Inicializa o jogo ao carregar
reiniciarJogo();

function reiniciarJogo() {
    // Gera um número aleatório entre 0 e 100
    numeroSecreto = Math.floor(Math.random() * 101);
    tentativas = 0;
    
    // Limpa a interface
    document.getElementById('mensagem').innerText = "Boa sorte!";
    document.getElementById('tentativas').innerText = "Tentativas: 0";
    document.getElementById('palpite').value = "";
    document.getElementById('btn-reiniciar').classList.add('hidden');
    document.querySelector('button[onclick="verificarPalpite()"]').disabled = false;
}

function verificarPalpite() {
    const palpiteInput = document.getElementById('palpite');
    const msg = document.getElementById('mensagem');
    const chute = Number(palpiteInput.value);

    // Validação básica
    if (palpiteInput.value === "" || chute < 0 || chute > 100) {
        msg.innerText = "⚠️ Digite um número válido entre 0 e 100!";
        msg.style.color = "#ffcc00";
        return;
    }

    tentativas++;
    document.getElementById('tentativas').innerText = `Tentativas: ${tentativas}`;

    if (chute === numeroSecreto) {
        msg.innerText = `🎉 Parabéns! Você acertou em ${tentativas} tentativas!`;
        msg.style.color = "#28a745";
        finalizarJogo();
    } else if (chute < numeroSecreto) {
        msg.innerText = "📈 O número secreto é MAIOR!";
        msg.style.color = "#e94560";
    } else {
        msg.innerText = "📉 O número secreto é MENOR!";
        msg.style.color = "#e94560";
    }

    palpiteInput.value = ""; // Limpa o campo para o próximo chute
    palpiteInput.focus(); // Coloca o cursor de volta no campo
}

function finalizarJogo() {
    document.getElementById('btn-reiniciar').classList.remove('hidden');
    document.querySelector('button[onclick="verificarPalpite()"]').disabled = true;
}