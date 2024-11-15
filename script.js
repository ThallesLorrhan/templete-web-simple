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
/////////////

document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const accordionItem = header.parentElement;

        // Fecha outros itens, se necessário
        document.querySelectorAll('.accordion-item').forEach(item => {
            if (item !== accordionItem) {
                item.classList.remove('active');
            }
        });

        // Alterna o item atual
        accordionItem.classList.toggle('active');
    });
});

//////////////

document.addEventListener("DOMContentLoaded", () => {
    const submitBtn = document.getElementById("submit-btn");
    const selectBox = document.getElementById("select-box");
    const optionsList = document.getElementById("options-list");
    const inputHidden = document.getElementById("dropdown-value");
  
    // Função para abrir e fechar o dropdown
    selectBox.addEventListener("click", () => {
      optionsList.style.display = optionsList.style.display === "block" ? "none" : "block";
      selectBox.classList.toggle("open");
    });
  
    // Função para selecionar uma opção do dropdown
    optionsList.addEventListener("click", (e) => {
      if (e.target.tagName.toLowerCase() === "li") {
        const selectedValue = e.target.getAttribute("data-value");
        const selectedText = e.target.textContent;
        
        // Atualiza o valor do input oculto
        inputHidden.value = selectedValue;
  
        // Atualiza a seleção no dropdown
        selectBox.querySelector("span").textContent = selectedText;
        optionsList.style.display = "none";
        selectBox.classList.remove("open");
        
        // Marca a opção como selecionada
        Array.from(optionsList.children).forEach(option => option.classList.remove("selected"));
        e.target.classList.add("selected");
      }
    });
  
    // Evento de envio do formulário
    submitBtn.addEventListener("click", () => {
      const selectedValue = inputHidden.value;
  
      if (selectedValue) {
        alert(`Você selecionou: ${selectedValue}`);
      } else {
        alert("Por favor, selecione uma opção.");
      }
    });
  
    // Fecha o dropdown se clicar fora dele
    document.addEventListener("click", (e) => {
      if (!selectBox.contains(e.target)) {
        optionsList.style.display = "none";
        selectBox.classList.remove("open");
      }
    });
  });

/////////////

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("login-form");
    const emailField = form.querySelector("#email");
    const passwordField = form.querySelector("#password");
    const sexOptions = form.querySelectorAll('input[name="option"]');
    const rememberMeCheckbox = form.querySelector("#remember-me");
    const dropdownValueField = form.querySelector("#dropdown-value");
  
    // Função de validação
    function validateForm(event) {
      let isValid = true;
  
      // Validar email (deve ter um "@" e "." após o "@")
      const email = emailField.value.trim();
      const emailPattern = /^[^@]+@[^@]+\.[^@]+$/;
      if (!emailPattern.test(email)) {
        alert("Por favor, insira um email válido.");
        isValid = false;
      }
  
      // Validar senha (não pode ser vazia)
      const password = passwordField.value.trim();
      if (password.length === 0) {
        alert("A senha é obrigatória.");
        isValid = false;
      }
  
      // Validar seleção de sexo
      const sexSelected = Array.from(sexOptions).some(option => option.checked);
      if (!sexSelected) {
        alert("Por favor, selecione seu sexo.");
        isValid = false;
      }
  
      // Validar o campo "Receber mensagens por"
      const dropdownValue = dropdownValueField.value.trim();
      if (!dropdownValue) {
        alert("Por favor, selecione uma forma de receber mensagens.");
        isValid = false;
      }
  
      // Se o formulário for inválido, prevenir o envio
      if (!isValid) {
        event.preventDefault();
      } else {
        // Se for válido, redireciona para a home
        window.location.href = "/index.html"; // Redireciona para a página home (ajuste a URL conforme necessário)
      }
    }
  
    // Evento de envio do formulário
    form.addEventListener("submit", validateForm);
  });
  
  
  
