# Funcionalidades do Sistema

Nesse tópico serão apresentadas as telas desenvolvidas para atender às funcionalidades do sistema. Também será fornecido o endereço (URL) e algumas orientações de acesso ao site.

## Acesso ao cadastro de médicos (RF-01 e RF-02)

Na tela principal (home page) será apresentado uma aba no cabeçalho com diversos botões que farão o direcionamento do usuário para cada funcionalidade do site, conforme demonstrado abaixo:

### Seja um médico parceiro

A tela de cadastro de novo médico é constituída de logomarca, cabeçalho, formulário para o médico inserir os dados profissionais e por último existe o rodapé da página com informação dos criadores do site.

A página também não permite que seja salvo os dados do médico nos TextBoxs ou ComboBoxs em branco, ou seja, todos devem ser preenchidos; por último e não menos importante após o usuário salvar os seus dados os campos são automaticamente limpos, essas funcionalidades foram desenvolvidas na linguagem de programação JavaScript.

![image](https://user-images.githubusercontent.com/103527877/174413252-11a2c6b5-1f2c-481d-a2e3-0bfceae11666.png)

#### Requisitos atendidos

●	RF-01 - O site deve apresentar uma aba no cabeçalho com informações de “Quem somos?”. Contendo parágrafos de missão, valores e visão.

●	RF-04 - O site deve conter uma aba no cabeçalho com a funcionalidade de, ao clicar nela, abrir uma nova página com um formulário para o cadastro de novos médicos.

●	RF-06 - O formulário de cadastro de novos médicos deve conter: nome, e-mail, celular, estado, cidade, CRM, endereço, especialidade e senha.

●	RF-11 - O site deve permitir visualizar as informações de contatos da(s) pessoa(s) que criaram o site e o mantém e permitir envio de mensagens para contato com os mesmos, informando nome, e-mail e texto da mensagem.

●	RNF-01 - O site deve ser publicado em um ambiente acessível publicamente na Internet (GitHub Pages).

●	RNF-02 - O site deve ser responsivo, permitindo a visualização em um celular, desktop, tablet de forma adequada.

●	RNF-04 - O site deve ser compatível com os principais navegadores do mercado (Google Chrome, Firefox, Microsoft Edge).

●	RNF-05 - O arquivo de HTML deve apresentar tags semânticas, como: <nav>/<header>/<section>/<main>/<section>... Tornando assim o código mais claro para os leitores de tela localizar um conteúdo.
  
●	RNF-06 - O arquivo HTML deve apresentar a tag <img alt>, que mostra a descrição da imagem, possível a leitura da mesma quanto utilizado leitor de tela.
  
●	RNF-07 - O desenvolvimento deve ser em HTML, CSS, Javascript, podendo utilizar frameworks.

#### Artefatos da funcionalidade

●	cadastro.html
  
●	cadastro.css
  
●	script.js
  
●	Capturar.PNG
  
●	Capturar2.PNG

#### Instruções de acesso

1.	Abra um navegador de Internet e informe a seguinte URL: https://icei-puc-minas-pmv-ads.github.io/MyDoctor/ 
2.	A tela de “Seja um médico parceiro” fica localizada no menu do cabeçalho e aparece após o usuário clicar nela.
  
### Esqueci minha senha

![image](https://user-images.githubusercontent.com/103527877/174413469-a40631fe-7c59-4982-b85d-e21c52590709.png)
  
#### Requisitos atendidos

●	RF-01 - O site deve apresentar uma aba no cabeçalho com informações de “Quem somos?”. Contendo parágrafos de missão, valores e visão.
  
●	RF-03 - O site deve apresentar uma aba no cabeçalho com os contatos do site contendo telefone, Whatsapp, Instagram, e-mail.
  
●	RF-04 - O site deve conter uma aba no cabeçalho com a funcionalidade de, ao clicar nela, abrir uma nova página com um formulário para o cadastro de novos médicos.
  
●	RF-08 - O site deve apresentar uma aba no cabeçalho com a funcionalidade de, ao clicar nela, abrir uma nova janela com 2 filtros de pesquisa. O primeiro filtro é para todas as cidades cadastradas no site e o segundo é para todas as especialidades também cadastradas no site.
 
●	RF-11 - O site deve permitir visualizar as informações de contatos da(s) pessoa(s) que criaram o site e o mantém e permitir envio de mensagens para contato com os mesmos, informando nome, e-mail e texto da mensagem.
  
●	RF-13 - O site deve apresentar uma aba no cabeçalho com a funcionalidade que, ao ser clicada, abra uma nova janela com um formulário de avaliação da consulta do médico Z.

#### Artefatos da funcionalidade

●	esqueci.html
  
●	esqueci-senha.css
  
### Home Page

A home page foi construída utilizando as tecnologias HTML, CSS e também JavaScript. Para alinhar os elementos na página, utilizou-se o flexbox. Priorizou-se a responsividade, sendo criada uma função específica no JS, chamada mostrarMenuMobile, para adaptar o menu responsivo.
  
Além disso, na estrutura da página no HTML, buscou-se utilizar as tags semânticas, como header, footer, section, dentre outras. Visando tornar a página mais acessível, também foi utilizado o atributo “alt” nas imagens, facilitando a leitura da tela.
  
A home page é dividida em 5 partes. A primeira é o cabeçalho, contendo a imagem e os itens do menu. Em seguida, a segunda parte possui um texto e uma imagem, os quais ressaltam a importância do acompanhamento médico. A próxima seção trata-se da missão, visão e valores do MyDoctor. Já a quarta parte possui os contatos da empresa, com as informações do email e whatsapp. Por último, a quinta parte é formada pelo rodapé.

![image](https://user-images.githubusercontent.com/103527877/174413613-223a4421-29fe-42ab-adc4-535614ed5ca3.png)
  
![image](https://user-images.githubusercontent.com/103527877/174413634-b44ed106-0965-474e-903d-913ca4d5397f.png)

![image](https://user-images.githubusercontent.com/103527877/174413684-4a427117-6693-4cdc-b158-c4c62c895e08.png)
![image](https://user-images.githubusercontent.com/103527877/174413689-ca05d4c8-26be-4d4a-ae65-16c86d5fa62d.png)
![image](https://user-images.githubusercontent.com/103527877/174413703-cb26e78e-4d88-49b8-8af2-05e58b63262f.png)
![image](https://user-images.githubusercontent.com/103527877/174413711-991c8230-1d32-4453-a9cf-5dbd25b3ee79.png)

#### Requisitos atendidos

●	RF-01 - O site deve apresentar uma aba no cabeçalho com informações de “Quem somos?”. Contendo parágrafos de missão, valores e visão.
  
●	RF-02: O site deve apresentar imagens que auxiliem o entendimento do leitor para cada assunto exposto no corpo da página.
  
●	RF-03 - O site deve apresentar uma aba no cabeçalho com os contatos do site contendo telefone, Whatsapp, e-mail.
  
●	RF-04 - O site deve conter uma aba no cabeçalho com a funcionalidade de, ao clicar nela, abrir uma nova página com um formulário para o cadastro de novos médicos.
  
●	RF-08 - O site deve apresentar uma aba no cabeçalho com a funcionalidade de, ao clicar nela, abrir uma nova janela com 2 filtros de pesquisa. O primeiro filtro é para todas as cidades cadastradas no site e o segundo é para todas as especialidades também cadastradas no site.
  
●	RF-11 - O site deve permitir visualizar as informações de contatos da(s) pessoa(s) que criaram o site e o mantém e permitir envio de mensagens para contato com os mesmos, informando nome, e-mail e texto da mensagem.
  
●	RF-13 - O site deve apresentar uma aba no cabeçalho com a funcionalidade que, ao ser clicada, abra uma nova janela com um formulário de avaliação da consulta do médico Z.

#### Artefatos da funcionalidade

●	index.html
  
●	home-page.css
  
●	script.js
  
### Procure o Seu Médico

A tela “Procure o Seu Médico” será utilizada principalmente por pacientes que desejam buscar pelos médicos cadastrados no site. Na tela de Seja um Médico Parceiro, os médicos que desejam se cadastrar, irão inserir seus devidos dados profissionais nos campos adequados  e assim que apertar o botão de  salvar, esses dados serão armazenados em JSON. 

A tela “Procure o Seu Médico” contém uma logomarca, um cabeçalho, dois campos de pesquisas diferentes, que possibilitam o paciente  de pesquisar o médico desejado pela cidade ou pela especialidade. A tela ainda tem dois botões de buscas para que assim que o paciente digitar a cidade ou a especialidade, ele clique no botão ou aperte “enter” para o sistema fazer a busca desses médicos cadastrados.
  
O sistema buscará na lista JSON, os médicos que o paciente solicitou e exibirá uma pequena tela com as devidas informações do médico: foto, nome, nível de satisfação, especialidade, CRM, valor de cada consulta e os dias e horários de atendimento. 

Nessa tela foram utilizadas apenas duas linguagens web, sendo elas, o HTML e o CSS.

![image](https://user-images.githubusercontent.com/103527877/174413815-abca1992-aac8-4ace-a53c-83ebb572c549.png)

#### Requisitos atendidos

●	RF-08 - O site deve apresentar uma aba no cabeçalho com a funcionalidade de, ao clicar nela, abrir uma nova janela com 2 filtros de pesquisa. O primeiro filtro é para todas as cidades cadastradas no site e o segundo é para todas as especialidades também cadastradas no site.
  
●	RF-09 - O site deve apresentar na janela dos filtros de pesquisa a funcionalidade de selecionar a cidade e a especialidade do médico e, ao clicar em “Buscar”, aparecer todos os profissionais do ramo X que estão cadastrados para a cidade Y em forma de lista.
  
●	RF-10 - Após o usuário selecionar o médico “Z” da lista, o site deve apresentar a funcionalidade de mostrar as informações: nome, especialidade, CRM, valor da consulta, endereço, dias e horários de atendimento e nível de satisfação.
  
●	RF-12 - Quando não existirem médicos da especialidade X cadastrados para a cidade Y, o site deve apresentar uma janela com essa informação. Nessa janela também deve estar presente um botão “ok”. Após o usuário clicar em “ok”, o site deve limpar os filtros de pesquisa.
  
●	RNF-01 - O site deve ser publicado em um ambiente acessível publicamente na Internet (GitHub Pages).
  
●	RNF-02 - O site deve ser responsivo, permitindo a visualização em um celular, desktop, tablet de forma adequada.
  
●	RNF-03 - O site deve ter bom nível de contraste entre os elementos da tela em conformidade.
  
●	RNF-04 - O site deve ser compatível com os principais navegadores do mercado (Google Chrome, Firefox, Microsoft Edge).
  
●	RNF-05 - O arquivo de HTML deve apresentar tags semânticas, como: <nav>/<header>/<section>/<main>/<section>... Tornando assim o código mais claro para os leitores de tela localizar um conteúdo.
  
●	RNF-06 - O arquivo HTML deve apresentar a tag <img alt>, que mostra a descrição da imagem, possível a leitura da mesma quanto utilizado leitor de tela.
  
●	RNF-07 - O desenvolvimento deve ser em HTML, CSS, Javascript, podendo utilizar frameworks.

#### Artefatos da funcionalidade

●	procure-medico.html
  
●	procure-medico.css
  
●	imagem-header.PNG
  
●	Usuário.png
  
### Contatos - Fale Conosco
  
Essa tela consiste em fornecer informações para contato com os mantenedores do site acerca de suas funcionalidades, além de esclarecerem dúvidas por meio de seu FAQ - (Frequently Asked Questions). Há também a possibilidade de deixar uma mensagem através da opção “Envie uma mensagem”.

![image](https://user-images.githubusercontent.com/103527877/174413904-715657db-53ab-42c5-97e7-7ce04d9f2a3d.png)

#### Requisitos atendidos

●	RF-01 - O site deve apresentar uma aba no cabeçalho com informações de “Quem somos?”. Contendo parágrafos de missão, valores e visão.
  
●	RF-02: O site deve apresentar imagens que auxiliem o entendimento do leitor para cada assunto exposto no corpo da página.
  
●	RF-03 - O site deve apresentar uma aba no cabeçalho com os contatos do site contendo telefone, Whatsapp, e-mail.
  
●	RF-11 - O site deve permitir visualizar as informações de contatos da(s) pessoa(s) que criaram o site e o mantém e permitir envio de mensagens para contato com os mesmos, informando nome, e-mail e texto da mensagem.

#### Artefatos da funcionalidade

●	fale conosco.html
  
●	faleconosco.css
  
●	dbfaq.js

#### Estrutura de Dados

var db = {
    faq: [
        {
            Pergunta: 'O que é o "My Doctor"?',
            Resposta: 'Trata-se de uma plataforma cujo objetivo é que facilitar a busca por médicos, fornecendo informações sobre suas especialidades, locais de atendimento, dentre outras.'
        }, {
            Pergunta: 'Qual a vantagem de ser um médico parceiro?',
            Resposta: 'Ter acesso a um canal unificado para disponibilização de suas informações profissionais, favorecendo o conhecimento de sua especialidade e uma maior captação de clientes em seus consultórios.'
        }, {
            Pergunta: 'Há algum custo ou cobrança para realizar o cadastro ou buscar informações?',
            Resposta: 'Não. Todas as ferramentas do site são oferecidas de forma totalmente gratuita e acessível a todos.'
        }
    ]
}
 
### Login
 
A tela de Login permite ao usuário acessar o site através de um cadastro previamente realizado. Isso é feito por meio de um pequeno painel com dois campos de preenchimento para o usuário. Cada um deles contém alguns dizeres que explicam a função daquele campo, a saber, o campo de inserir o e-mail e, logo abaixo, o campo para a senha daquele cadastro.
  
Além disso, também contém uma caixa assinalável (checkbox) ─ “lembrar-me” ─ cuja função é a de manter o preenchimento automático dos dois campos de preenchimento, tornando mais ágil o processo de login nas próximas vezes.
  
Para a construção dessa tela foi utilizada, sobretudo, a tecnologia HTML. Por meio dela foi feita a checkbox, ademais, foram utilizadas tags semânticas como header, section e label a fim de se construir as divisões da página. A formatação da HTML foi feita por meio da ligação da página com um arquivo CSS.

#### Requisitos atendidos
 
●	RF-01 - O site deve apresentar uma aba no cabeçalho com informações de “Quem somos?”. Contendo parágrafos de missão, valores e visão.
  
●	RF-03 - O site deve apresentar uma aba no cabeçalho com os contatos do site contendo telefone, Whatsapp, e-mail.
  
●	RF-04 - O site deve conter uma aba no cabeçalho com a funcionalidade de, ao clicar nela, abrir uma nova página com um formulário para o cadastro de novos médicos.
  
●	RF-08 - O site deve apresentar uma aba no cabeçalho com a funcionalidade de, ao clicar nela, abrir uma nova janela com 2 filtros de pesquisa. O primeiro filtro é para todas as cidades cadastradas no site e o segundo é para todas as especialidades também cadastradas no site.
  
●	RF-11 - O site deve permitir visualizar as informações de contatos da(s) pessoa(s) que criaram o site e o mantém e permitir envio de mensagens para contato com os mesmos, informando nome, e-mail e texto da mensagem.
  
●	RF-13 - O site deve apresentar uma aba no cabeçalho com a funcionalidade que, ao ser clicada, abra uma nova janela com um formulário de avaliação da consulta do médico Z.
 
#### Artefatos da funcionalidade
 
●	login.html
  
●	login.css
  
●	imagem-header.png

![image](https://user-images.githubusercontent.com/103527877/174414085-518d4135-da3d-4325-98aa-eddf0f95daed.png)









