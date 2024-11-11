document.addEventListener("DOMContentLoaded", function() {
    // Função para alternar a exibição do elemento com o id "show01"
    function myFunction() {
        // Obtém o elemento com o id "show01"
        var x = document.getElementById("show01");
        // Verifica se o estilo de exibição atual é "block"
        // usando x.style.display e window.getComputedStyle(x).display
        if (x.style.display === "block") {
            // Se o elemento estiver visível, oculta-o (altera para "none")
            x.style.display = "none";
        } else {
            // Se o elemento estiver oculto, exibe-o (altera para "block")
            x.style.display = "block";
        }
    }

    // Anexa a função myFunction ao evento de clique do elemento de imagem
    // dentro do link com a classe "img01"
    var imgLink = document.querySelector(".img01 a");
    imgLink.addEventListener("click", myFunction);
});

// script.js
function toggleModal() {
    const modal = document.getElementById('acessibilidade-modal');
    modal.style.display = modal.style.display === 'flex' ? 'none' : 'flex';
}

// Funções para aumentar e diminuir o tamanho da fonte
function aumentarFonte() {
    document.body.style.fontSize = '20px';
}

function diminuirFonte() {
    document.body.style.fontSize = '10px';
}

// Função para abrir/fechar o modal de login
function toggleLog() {
    const modal = document.getElementById('log');
    modal.style.display = modal.style.display === 'flex' ? 'none' : 'flex';
}

// Função para abrir/fechar o modal de cadastro
function toggleSing() {
    const modal = document.getElementById('sing');
    modal.style.display = modal.style.display === 'flex' ? 'none' : 'flex';
}
