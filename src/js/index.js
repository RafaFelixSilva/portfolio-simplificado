/*objetivo 1 - quando o usuario clicar no botao de mostrar mais deve abrir os projetos que estao escondidos no html

        Passo 1 - pegar o botao mostrar mais no JS para poder verificar quando o usuario clicar em cima dele
        
        Passo 2 - identificar o clique no botao
        
        Passo 3 - adicionar  a classe ativo nos projetos escondidos 
objetivo 2 - esconder o botao  de mostrar mais 
        Passo 1 - pegar o botao e esconder ele*/

        //objetivo 1 - quando o usuario clicar no botao de mostrar mais deve abrir os projetos que estao escondidos no html
//        Passo 1 - pegar o botao mostrar mais no JS para poder verificar quando o usuario clicar em cima dele
const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo');

botaoMostrarProjetos.addEventListener('click', () => {
   // Passo 3 - adicionar  a classe ativo nos projetos escondidos 
   mostrarMaisProjetos();

   //objetivo 2 - esconder o botao  de mostrar mais 
   //Passo 1 - pegar o botao e esconder ele
   esconderBotao();
})

function esconderBotao() {
    botaoMostrarProjetos.classList.add('remover');
}

function mostrarMaisProjetos() {
    projetosInativos.forEach(projetosInativo => {
        projetosInativo.classList.add('ativo');
    });
}
