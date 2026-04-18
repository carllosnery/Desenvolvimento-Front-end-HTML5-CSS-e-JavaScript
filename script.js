// Seleciona os elementos do HTML
const form = document.getElementById("formLogin");
const email = document.getElementById("email");
const senha = document.getElementById("senha");

const erroEmail = document.getElementById("erroEmail");
const erroSenha = document.getElementById("erroSenha");

const mensagemSucesso = document.getElementById("mensagemSucesso");
const btnEntrar = document.getElementById("btnEntrar");

// Executa o evento de envio do formulário
form.addEventListener("submit", function (event) {

    // Impede o recarregamento da página
    event.preventDefault();

    // Limpa mensagens anteriores
    erroEmail.textContent = "";
    erroSenha.textContent = "";
    mensagemSucesso.textContent = "";

    // Controle de validação
    let valido = true;

    // Validação do e-mail
    if (!email.value.includes("@")) {
        erroEmail.textContent = "E-mail inválido. Deve conter '@'.";
        valido = false;
    }

    // Validação da senha
    if (senha.value.length < 6) {
        erroSenha.textContent = "A senha deve ter no mínimo 6 caracteres.";
        valido = false;
    }

    // Se estiver tudo correto
    if (valido) {

        // Ativa a animação de carregamento
        btnEntrar.classList.add("loading");
        btnEntrar.textContent = "Entrando...";

        // Simula o tempo de processamento
        setTimeout(() => {

            // Exibe sucesso
            mensagemSucesso.textContent = "Login validado com sucesso!";

            // Volta o botão ao normal
            btnEntrar.classList.remove("loading");
            btnEntrar.textContent = "Entrar";

        }, 1000);
    }
});