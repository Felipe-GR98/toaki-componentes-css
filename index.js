let estilosSalvos = {}

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
}