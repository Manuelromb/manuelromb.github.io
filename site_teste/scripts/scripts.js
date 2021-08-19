let minhaImagem = document.querySelector('img');

minhaImagem.onclick = function() {
    let meuSrc = minhaImagem.getAttribute('src');
    if(meuSrc === 'images/açafrão_curry.jfif') {
      minhaImagem.setAttribute ('src','images/açafrão_1.jfif');
    } else {
      minhaImagem.setAttribute ('src','images/açafrão_curry.jfif');
    }
}

let meuBotao = document.querySelector("button");
let meuCabecalho = document.querySelector("h1");

function defineUsuario() {
  let meuNome = window.prompt("Qual é o seu Nome?");
  if (!meuNome || meuNome === null) {
   
    defineUsuario()
  } else {
    
    localStorage.setItem("nome", meuNome);
  meuCabecalho.textContent = "A Natureza é cool, " + meuNome;
  }
  
  
}
if (!localStorage.getItem("nome")) {
  defineUsuario()
  
} else { 
  let nomeGuardado = localStorage.getItem("nome");
  meuCabecalho.textContent =  "A Natureza é cool, " + nomeGuardado;
  
}
meuBotao.onclick = function () {
  defineUsuario()
}