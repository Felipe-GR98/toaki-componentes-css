/* let estilosSalvos = {}

function formatarCss(string) {
  return string.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();
}

document.addEventListener("click",pegarEstilos)

function pegarEstilos(e){
  const listaDesejada = [
    "backgroundColor", 
    "padding", 
    "margin", 
    "fontSize", 
    "color"
  ]
  const todosestilos = window.getComputedStyle(e.target)
  const estilosFiltrados = {}

  listaDesejada.forEach(nomeDoEstilo =>{
    estilosFiltrados[nomeDoEstilo] = todosestilos[nomeDoEstilo]
  })

  estilosSalvos = estilosFiltrados;

  let cssFormat = ""

  for(const chave in estilosSalvos){
    const valor = estilosSalvos[chave]
    const nomePropiedadesCss = formatarCss(chave)

    cssFormat += `${nomePropiedadesCss} : ${valor}; \n`
  }

  navigator.clipboard.writeText(cssFormat) //Copiando para area de tranferencia

  console.log("estilos filtrados: " , cssFormat)
  // console.log("meu estilo: " , todosestilos)
} */

document.addEventListener('DOMContentLoaded', () => {
  const componentes = document.getElementsByClassName('componente');
  const popup = document.getElementById('popup');
  const fecharPopup = document.getElementById('popup-fechar');
  const copiarPopup = document.getElementById('popup-copiar');
  const inputHTML = document.getElementById('codigo-html');

  Array.from(componentes).forEach((componente) => {
    componente.addEventListener('click', () => {
      inputHTML.innerText = `${componente.innerHTML}`
      popup.classList.remove('oculto');
    });
  });

  fecharPopup.addEventListener('click', () => {
    inputHTML.innerText = '';
    popup.classList.add('oculto');
  });

  copiarPopup.addEventListener('click', () => {
    const textoOriginal = copiarPopup.innerText;
    navigator.clipboard.writeText(inputHTML.innerText);
    copiarPopup.innerText = 'Copiado!';
    setTimeout(() => {
      copiarPopup.innerText = textoOriginal;
    }, 2000);
  });

  const listaIcones = [
    { nome: "Retorno", classe: "icone-retorno" },
    { nome: "Chat", classe: "icone-chat" },
    { nome: "Estrela", classe: "icone-estrela" },
    { nome: "Fechar", classe: "icone-fechar" },
    { nome: "Lupa", classe: "icone-lupa" },
    { nome: "Mapa", classe: "icone-mapa" },
    { nome: "Tag", classe: "icone-tag" },
    { nome: "Notas", classe: "icone-notas" },
    { nome: "Telefone", classe: "icone-telefone" },
    { nome: "Usuario", classe: "icone-usuario" },
    { nome: "Home", classe: "icone-home" },
    { nome: "Email", classe: "icone-email" },
    { nome: "Calendário", classe: "icone-calendario" },
    { nome: "Editar", classe: "icone-editar" },
    { nome: "Documento", classe: "icone-documento" },
    { nome: "Amendoim", classe: "icone-amendoim" },
    { nome: "Roupa", classe: "icone-roupa" },
    { nome: "Picolé", classe: "icone-picole" },
    { nome: "Óculos", classe: "icone-oculos" },
    { nome: "Camarão", classe: "icone-camarao" },
    { nome: "Bolsa de compras", classe: "icone-bolsa-de-compras" },
    { nome: "Relógio", classe: "icone-relogio" },
    { nome: "Sino", classe: "icone-sino" },
    { nome: "Enviar", classe: "icone-enviar" },
    { nome: "Centralizar", classe: "icone-centralizar" },
    { nome: "Mais", classe: "icone-mais" },
    { nome: "Menu", classe: "icone-menu" },
    { nome: "Coração", classe: "icone-coracao" },
    { nome: "BOLA", classe: "icone-bola" }
  ];

  const selectTamanhoIcone = document.getElementById('icone-tamanho');
  const selectTipoIcone = document.getElementById('icone-tipo');
  const selectCorBordaIcone = document.getElementById('icone-cor-borda');

  listaIcones.forEach((icone) => {
    const option = document.createElement('option');
    option.value = icone.classe;
    option.innerText = icone.nome;
    selectTipoIcone.appendChild(option);
  })

  const icone = document.getElementById('customizacao-icone').getElementsByTagName('svg')[0];

  selectTamanhoIcone.addEventListener('change', () => {
    icone.classList.replace(icone.classList[0], selectTamanhoIcone.value)
  });

  selectTipoIcone.addEventListener('change', () => {
    icone.classList.replace(icone.classList[1], selectTipoIcone.value)
  });

  selectCorBordaIcone.addEventListener('change', () => {
    icone.classList.replace(icone.classList[2], selectCorBordaIcone.value)
  });

});
