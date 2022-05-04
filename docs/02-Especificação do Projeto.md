# Especificação do Projeto

Tendo apresentado o embasamento e os objetivos desse projeto, passaremos a explicitar o modo pelo qual pretendemos realizar esses objetivos. 

Primeiramente serão descritas as personas, que consistem em representações das histórias, características e motivações do público-alvo do projeto, ou seja, uma espécie de simulação do público ao qual o projeto se destina. As informações das personas são baseadas em dados reais acerca de clientes em potencial para a solução a ser desenvolvida.

Com base nas histórias desses usuários, os integrantes do grupo ─ por meio de discussões e análises ─ desenvolveram o backlog do produto: um artefato de metodologia ágil em que são listados os requisitos que devem ser executados durante o desenvolvimento do projeto.

Além disso, também serão especificados os meios pelos quais o projeto pretende garantir a acessibilidade de pessoas com deficiências diversas, por meio da utilização de certos dispositivos tecnológicos do html. 

## Personas

Abaixo são apresentadas as personas identificadas do projeto.


## Histórias de Usuários

Abaixo, as histórias de usuários formuladas a partir do depoimento das personas apresentadas.

|Eu como ... [PERSONA]|... quero/desejo ... [O QUE] |... para ... [POR QUE] |
|-------------------- |-----------------------------|-----------------------|
| Maria               | Encontrar bons médicos para realizar acompanhamento regular de suas patologias.| Para ter melhor qualidade de vida.|
| Jussara             | Encontrar um site de buscas acessível à sua deficiência visual parcial, que contenha indicação de bons médicos.| Para realizar exames de rotina e acompanhamento médico de seus tratamentos.|
| Paulo               | Ter feedback dos pacientes após a consulta.| Identificar pontos de melhoria para fidelizar os pacientes.|
| Fábio               | Encontrar equipe cirúrgica confiável.| Realizar uma cirurgia de hérnia.|
| Gabrieli            | Indicação de obstetra confiável.| Planeja engravidar no próximo ano.|
| José                | Encontrar profissional qualificado.| Para dar continuidade ao tratamento do filho.|

## Requisitos do projeto

Um requisito é uma característica observável a qual a solução deverá exercer no mundo real. Trata-se de uma condição para resolução do problema que o sistema se propõe a resolver.

Enquanto os requisitos funcionais englobam as atribuições necessárias a serem exercidas após a interação do usuário com a página web, os requisitos não funcionais referem-se ao uso da aplicação (website) no quesito de usabilidade, confiabilidade, disponibilidade, desempenho, entre outros.

### Dispositivos tecnológicos para a inclusão

A fim de tornar o site inclusivo para pessoas com alguma dificuldade física para acessá-lo, alguns dispositivos tecnológicos serão implementados. 

Inicialmente, para que o leitor de tela consiga realizar a leitura correta do conteúdo do site, é necessário especificar na tag “html” a língua que deve ser utilizada, através do atributo “lang”. Esse atributo pode receber como valor diversas línguas: “pt-br” (português), “en” (inglês), “fr” (francês), etc.

Um dos recursos a serem utilizados são as tags semânticas no HTML, as quais “descrevem” mais facilmente aos leitores de tela o que representa aquela parte do código. Alguns exemplos dessas tags são: footer (representando o rodapé), header (faz referência ao cabeçalho), main (parte principal do site), section (alguma seção específica de um blog, por exemplo). Anteriormente à versão 5 do HTML, não existiam essas tags mais descritivas, e eram utilizadas apenas as tags “div’s”, que eram mais genéricas e não facilitam a acessibilidade.

Existem alguns atributos, dentro das tags, que facilitam a navegabilidade no site. Por exemplo, o atributo “alt” da tag “img” (imagem) descreve a imagem em poucas palavras, auxiliando os deficientes visuais e também facilita o entendimento do usuário caso a imagem não seja carregada no site. 

Além de facilitarem a acessibilidade para pessoas com deficiência, essas tags semânticas contribuem para que o site esteja melhor ranqueado no Google, sendo mais facilmente encontrado pelos usuários e futuros clientes.

Para os deficientes visuais, é recomendado que, em um formulário, se utilize tanto o atributo “placeholder” da tag “input”, que descreve o que o usuário deve informar no campo, e também a tag label, uma outra descrição que geralmente aparece logo acima da tag “input”.

Outro atributo bastante útil é o “tabindex”, que facilita que os elementos da página sejam “navegáveis” através do teclado, apenas utilizando a tecla “tab”. Dessa forma, o usuário pode utilizar apenas o teclado ao invés do mouse. Esse atributo pode ser utilizado em tags como: button, div, dentre outras.

Por fim, outro tópico bastante relevante seria a responsividade. Num mundo cada vez mais conectado, é fundamental que o site tenha um layout adequado para os dispositivos de todos os tamanhos: celulares, tablets, notebooks, desktops. A adequação do layout envolve ter bons tamanhos de imagens, textos e demais elementos, de acordo com os diversos tamanhos de tela. Para isso, será utilizado no CSS as “media queries”, especificando os tamanhos das telas.

### Requisitos Funcionais

A tabela a seguir apresenta os requisitos funcionais do projeto, identificando suas respectivas prioridades de entrega.

| ID    | Descrição do Requisito  | Prioridade |
| ------|-----------------------------------------|----|
| RF-01 | O site deve apresentar uma aba no cabeçalho com informações de “Quem somos?”. Contendo parágrafos de missão, valores e visão.| Alta | 
| RF-02 | O site deve apresentar imagens que auxiliem o entendimento do leitor para cada assunto exposto no corpo da página.| Média |
| RF-03 | O site deve apresentar uma aba no cabeçalho com os contatos do site contendo telefone, Whatsapp, Instagram, e-mail.| Média |
| RF-04 | O site deve conter uma aba no cabeçalho com a funcionalidade de, ao clicar nela, abrir uma nova página com um formulário para o cadastro de novos médicos.| Alta |
| RF-05 | O site deve apresentar a funcionalidade que permita ao usuário alterar o tamanho da letra.| Média |
| RF-06 | O formulário de cadastro de novos médicos deve conter: nome, e-mail, celular, estado, cidade, CRM, endereço e especialidade.| Alta |
| RF-07 | O site deve apresentar a funcionalidade de modificar o tamanho da imagem através da tecla ALT.| Média |
| RF-08 | O site deve apresentar uma aba no cabeçalho com a funcionalidade de, ao clicar nela, abrir uma nova janela com 2 filtros de pesquisa. O primeiro filtro é para todas as cidades cadastradas no site e o segundo é para todas as especialidades também cadastradas no site.| Alta |
| RF-09 | O site deve apresentar na janela dos filtros de pesquisa a funcionalidade de selecionar a cidade e a especialidade do médico e, ao clicar em “Buscar”, aparecer todos os profissionais do ramo X que estão cadastrados para a cidade Y em forma de lista.| Alta |
| RF-10 | Após o usuário selecionar o médico “Z” da lista, o site deve apresentar a funcionalidade de mostrar as informações: nome, especialidade, CRM, valor da consulta, endereço, dias e horários de atendimento e nível de satisfação.| Alta |
| RF-11 | O site deve permitir visualizar as informações de contatos da(s) pessoa(s) que criaram o site e o mantém.| Baixa |
| RF-12 | Quando não existirem médicos da especialidade X cadastrados para a cidade Y, o site deve apresentar uma janela com essa informação. Nessa janela também deve estar presente um botão “ok”. Após o usuário clicar em “ok”, o site deve limpar os filtros de pesquisa.| Alta |
| RF-13 | O site deve apresentar uma aba no cabeçalho com a funcionalidade que, ao ser clicada, abra uma nova janela com um formulário de avaliação da consulta do médico Z.| Alta |
| RF-14 | O formulário de avaliação deve conter um campo para preenchimento do nome do paciente, nome e especialidade do médico, espaço para inserção de comentários do paciente e botão para anexar comprovante de consulta (quando houver) e escala nível do atendimento, variando de 1 até 5. (1 – Muito Ruim, 2 - Ruim, 3 - Regular, 4 – Bom, 5 – Muito Bom).| Alta |

### Requisitos não funcionais

A tabela a seguir apresenta os requisitos não funcionais que o projeto deverá atender, identificando suas prioridades de entrega.

| ID     | Descrição do Requisito  |Prioridade |
| -------|-------------------------|----|
| RNF-01 | O site deve ser publicado em um ambiente acessível publicamente na Internet (GitHub Pages).| Alta |
| RNF-02 | O site deve ser responsivo, permitindo a visualização em um celular, desktop, tablet de forma adequada.| Alta |
| RNF-03 | O site deve ter bom nível de contraste entre os elementos da tela em conformidade.| Média |
| RNF-04 | O site deve ser compatível com os principais navegadores do mercado (Google Chrome, Firefox, Microsoft Edge).| Alta |
| RNF-05 | O arquivo de HTML deve apresentar tags semânticas, como: 'nav', 'header', 'section', 'main', 'section'. Tornando assim o código mais claro para os leitores de tela localizar um conteúdo.| Média |
| RNF-06 | O arquivo HTML deve apresentar a tag 'img alt' , que mostra a descrição da imagem, possível a leitura da mesma quanto utilizado leitor de tela.| Média |
| RNF-07 | O desenvolvimento deve ser em HTML, CSS, Javascript, podendo utilizar frameworks.| Média |

## Restrições

As restrições podem ser explicadas como tarefas que limitam e comprometem a execução e o desenvolvimento do projeto, servindo como marco delimitador daquilo que
precisará ser realizado para que o projeto seja considerado pronto.
 
A tabela abaixo, apresenta as seguintes restrições do projeto.

| ID    | Restrição                                             |
|-------|-------------------------------------------------------|
| RE-01 | O projeto deverá ser entregue no final do semestre letivo, não ultrapassando a data de 26/06/2022.|
| RE-02 | O site deve se restringir às tecnologias básicas da Web Front-End.|
| RE-03 | O site deverá ter a homologação das fases de testes (QA) e operação assistida antes do processo de subida para produção.|
| RE-04 | Os desenvolvedores do site terão a necessidade de elaborar a documentação técnica (Solution Design Document) para facilitar a equipe de suporte em futuros ajustes no código.| 
| RE-05 | O site deverá ficar restrito a um único idioma, que será o “pt-br” (português).|
