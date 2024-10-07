/*objetivo 1 - quando o usuario clicar no botao de mostrar mais deve abrir os projetos que estao escondidos no html

        Passo 1 - pegar o botao mostrar mais no JS para poder verificar quando o usuario clicar em cima dele
        
        Passo 2 - identificar o clique no botao
        
        Passo 3 - adicionar  a classe ativo nos projetos escondidos 
objetivo 2 - esconder o botao  de mostrar mais 
        Passo 1 - pegar o botao e esconder ele*/

        //objetivo 1 - quando o usuario clicar no botao de mostrar mais deve abrir os projetos que estao escondidos no html
//        Passo 1 - pegar o botao mostrar mais no JS para poder verificar quando o usuario clicar em cima dele
// Pega o botão "Mostrar mais" e os projetos inativos
const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
let projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');

// Adiciona o evento de clique no botão
botaoMostrarProjetos.addEventListener('click', () => {
    if (botaoMostrarProjetos.classList.contains('mostrar-menos')) {
        // Se o botão estiver em estado de "mostrar menos", esconda os projetos
        esconderProjetos();
    } else {
        // Caso contrário, mostre os projetos inativos
        mostrarMaisProjetos();
    }

    // Alterna o texto do botão entre "Mostrar mais" e "Mostrar menos"
    alternarTextoBotao();
});

function mostrarMaisProjetos() {
    projetosInativos.forEach(projeto => {
        projeto.classList.add('ativo');
    });
    // Atualiza a lista de projetos inativos, já que todos estão visíveis agora
    projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');
}

function esconderProjetos() {
    const todosProjetosAtivos = document.querySelectorAll('.projeto.ativo');
    todosProjetosAtivos.forEach((projeto, index) => {
        if (index >= 4) { // Supondo que os primeiros 4 projetos estão sempre visíveis
            projeto.classList.remove('ativo');
        }
    });
    // Atualiza a lista de projetos inativos novamente
    projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');
}

function alternarTextoBotao() {
    if (botaoMostrarProjetos.classList.contains('mostrar-menos')) {
        botaoMostrarProjetos.textContent = 'Mostrar mais';
        botaoMostrarProjetos.classList.remove('mostrar-menos');
    } else {
        botaoMostrarProjetos.textContent = 'Mostrar menos';
        botaoMostrarProjetos.classList.add('mostrar-menos');
    }
}

