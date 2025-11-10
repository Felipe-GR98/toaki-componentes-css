# 🗺️ Guia para Consumo dos Componentes CSS

Este repositório possui um arquivo `index.html` que renderiza uma página com os componentes necessários para a construção das telas do Figma.

Cada componente possui a funcionalidade de, ao ser clicado, exibir uma janela contendo todo o seu código HTML, incluindo as classes CSS.

---

## Instruções Essenciais

Para um bom funcionamento do repositório, normalmente é necessário:

* Importar todos os arquivos `.css` no arquivo `.html` que irá desenvolver.
* A pasta `image` deve estar presente no mesmo nível que o `.html` que irá desenvolver.
* Não alterar nenhuma classe CSS base que já vem no componente.
* Não alterar nenhuma estrutura HTML base que já vem no componente.
* Instruções específicas para cada componente serão detalhadas abaixo

---

## Customizando a partir dos Componentes

### Botões e Inputs

Para customizar botões e inputs, já existem algumas classes que modificam o tamanho e outras que fazem a troca da cor de fundo.

Caso você precise de alguma variação de cor ou tamanho:

1.  Vá até a classe CSS no arquivo `botoes.css` ou `inputs.css`.
2.  Perceba o padrão existente.
3.  Crie uma classe **NOVA** no seu arquivo CSS **PRÓPRIO**.
4.  Altere a classe do botão ou input no HTML para a nova classe que você criou.

### Imagens

As imagens dos mapas estão com `position: absolute`, para que assim possam ficar no fundo do HTML a ser desenvolvido.

Para garantir que todos os outros elementos ficarão sobrepostos à imagem, deixe-os dentro da `div` que contém a classe `resolucao-web` (desktop) ou `resolucao-mobile` (mobile).

Também existe uma pasta chamada `image` com imagens das logos. Caso precise usar, basta criar sua tag `<img />` e destinar sua propriedade `src` para a imagem de sua escolha.

### Ícones

O componente de Ícone possui 3 entradas de opções (tamanho, cor, tipo) dispostas nas caixas de seleção logo abaixo dele. Você perceberá que ele se modifica conforme você alterar as seleções.

Determine as opções desejadas para então clicar no ícone e exibir seu código HTML/SVG.

Além das caixas de seleção, existem opções de preenchimento e fundo que podem ser adicionadas manualmente:

* `icone-preenchimento-preto`
* `icone-preenchimento-ciano`
* `icone-preenchimento-amarelo`
* `icone-com-fundo`

Caso queira, adicione uma opção de preenchimento e/ou o fundo **AO FINAL** de todas as classes que a tag `<svg>` já possui.

### Barras de Navegação

As barras de navegação são simples, você apenas seleciona a barra que quiser.

* **Ícones:** Caso você queira utilizar ícones diferentes, você terá que gerar cada ícone no componente "Ícone" e substituir as tags `<svg>` que estão **DENTRO** da tag `<nav>`.
* **Logo (Desktop):** Para alterar a imagem no caso da barra de navegação desktop, basta mudar o `src` da tag `<img>`.
* **Tamanho:** As barras de navegação possuem uma `div` com uma classe que poderá ter sua classe substituída (por padrão vem como `controle-o-tamanho-da-navbar-por-essa-div`) caso deseje mudar o tamanho da barra. Atribua uma classe que você mesmo criou e então defina suas propriedades num arquivo CSS próprio.

### Switchs, Barra de Progresso e Cards

Como são componentes estáticos e sem variantes, basta clicar e copiar o código :)

---

## Resolução de Problemas

Caso você identifique algum comportamento indevido, tenha sugestões, feedbacks ou apenas queira nos pagar um salgado na frente do SENAC, não perca tempo e envie sua mensagem. Ficarei imensamente agradecido <3
