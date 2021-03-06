# Especificação do Projeto

Tendo apresentado o embasamento e os objetivos desse projeto, passaremos a explicitar o modo pelo qual pretendemos realizar esses objetivos. 

Primeiramente serão descritas as personas, que consistem em representações das histórias, características e motivações do público-alvo do projeto, ou seja, uma espécie de simulação do público ao qual o projeto se destina. As informações das personas são baseadas em dados reais acerca de clientes em potencial para a solução a ser desenvolvida.

Com base nas histórias desses usuários, os integrantes do grupo ─ por meio de discussões e análises ─ desenvolveram o backlog do produto: um artefato de metodologia ágil em que são listados os requisitos que devem ser executados durante o desenvolvimento do projeto.

Além disso, também serão especificados os meios pelos quais o projeto pretende garantir a acessibilidade de pessoas com deficiências diversas, por meio da utilização de certos dispositivos tecnológicos do html. 

## Personas

Abaixo são apresentadas as personas identificadas do projeto.

1- Maria das Dores Miranda tem 75 anos, é dona de casa, do gênero feminino e o seu estado civil é casada. Tem acesso a internet através do celular e utiliza com mais frequência os aplicativos Facebook e WhatsApp. Suas motivações são: Conseguir acompanhamento médico para ter uma melhor qualidade de vida e viver mais tempo com a família. Suas frustrações são: Dificuldade para realizar pesquisas e ausência de ajuda para encontrar médicos. História: Encontra dificuldades em achar indicações de bons médicos, para realizar acompanhamento regular de suas patologias.

2- Jussara de Souza tem 32 anos, é advogada, do gênero feminino e o seu estado civil é solteira. Tem acesso a internet através do celular e computador e utiliza com mais frequência os aplicativos Facebook, WhatsApp , Instagram e LinkedIn. Suas motivações são: Ter uma vida mais saudável. Suas frustrações são: Não consegue dar continuidade ao tratamento por não se adaptar ao médico. História: Sente-se insegura de escolher um médico aleatoriamente para se consultar, inclusive para realizar exames de rotina, além de ter dificuldade em realizar buscas online por ser deficiente visual.

3- Paulo Roberto da Cunha tem 40 anos, é médico, do gênero masculino e o seu estado civil é divorciado. Tem acesso a internet através do celular e computador e utiliza com mais frequência os aplicativos WhatsApp e LinkedIn. Suas motivações são: Tornar sua vida e a das outras pessoas mais fácil e saudável. Suas frustrações são: Ausência de feedback dos pacientes após a consulta, não retorno de alguns pacientes e, em alguns casos, abandono do tratamento. História: Durante suas consultas percebe que alguns pacientes não retornam e não possui meios para saber o porquê.

4- Fábio Araújo Miranda tem 48 anos, é metalúrgico, do gênero masculino e o seu estado civil é casado. Tem acesso a internet através do celular e computador e utiliza com mais frequência os aplicativos WhatsApp, Instagram e Facebook. Suas motivações são: Ter uma melhor qualidade de vida através da melhora da dor. Suas frustrações são: Adiar um procedimento cirúrgico que lhe proporcionaria mais qualidade de vida, devido à falta de confiabilidade em uma equipe médica. História: Precisa realizar uma cirurgia de hérnia, mas tem medo de escolher um médico sem indicação, devido aos riscos envolvidos num procedimento cirúrgico.

5- Gabrieli Lopes Leonel tem 31 anos, é fisioterapeuta, do gênero feminino e o seu estado civil é casada. Tem acesso a internet através do celular e computador e utiliza com mais frequência os aplicativos WhatsApp e Instagram. Suas motivações são: Engravidar no próximo ano. Suas frustrações são: Tem medo de não encontrar um médico confiável. História: Possui planos de engravidar, mas devido às diversas histórias de violência obstétrica, tem receio de escolher médico sem indicação.

6- José Lopes da Silva tem 47 anos, é taxista, do gênero masculino e o seu estado civil é casado. Tem acesso a internet através do celular e utiliza com mais frequência o aplicativo WhatsApp. Suas motivações são: Dar qualidade de vida ao filho mais novo. Suas frustrações são: Está em uma cidade nova, em busca de profissional para dar continuidade a um tratamento já iniciado. História: Mudou-se de cidade recentemente e precisa de tratamento específico para o filho com doença crônica.

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

Por fim, outro tópico bastante relevante seria a responsividade. Num mundo cada vez mais conectado, é fundamental que o site tenha um layout adequado para os dispositivos de todos os tamanhos: celulares, tablets, notebooks, desktops. A adequação do layout envolve ter bons tamanhos de imagens, textos e demais elementos, de acordo com os diversos tamanhos de tela. Para isso, será utilizado no CSS as “media queries”, especificando os tamanhos das telas.

### Requisitos Funcionais

A tabela a seguir apresenta os requisitos funcionais do projeto, identificando suas respectivas prioridades de entrega.

| ID    | Descrição do Requisito  | Prioridade |
| ------|-----------------------------------------|----|
| RF-01 | O site deve apresentar uma aba no cabeçalho com informações de “Quem somos?”. Contendo parágrafos de missão, valores e visão.| Alta | 
| RF-02 | O site deve apresentar imagens que auxiliem o entendimento do leitor para cada assunto exposto no corpo da página.| Média |
| RF-03 | O site deve apresentar uma aba no cabeçalho com os contatos do site contendo telefone, Whatsapp, Instagram, e-mail.| Média |
| RF-04 | O site deve conter uma aba no cabeçalho com a funcionalidade de, ao clicar nela, abrir uma nova página com um formulário para o cadastro de novos médicos.| Alta |
| RF-05 | O formulário de cadastro de novos médicos deve conter: nome, e-mail, celular, estado, cidade, CRM, endereço, especialidade e senha.| Alta |
| RF-06 | O site deve apresentar uma aba no cabeçalho com a funcionalidade de, ao clicar nela, abrir uma nova janela com 2 filtros de pesquisa. O primeiro filtro é para todas as cidades cadastradas no site e o segundo é para todas as especialidades também cadastradas no site. | Alta |
| RF-07 | O site deve apresentar na janela dos filtros de pesquisa a funcionalidade de selecionar a cidade e a especialidade do médico e, ao clicar em “Buscar”, aparecer todos os profissionais do ramo X que estão cadastrados para a cidade Y em forma de lista. | Alta |
| RF-08 | Após o usuário selecionar o médico “Z” da lista, o site deve apresentar a funcionalidade de mostrar as informações: nome, especialidade e CRM. | Alta |
| RF-09 | O site deve permitir visualizar as informações de contatos da(s) pessoa(s) que criaram o site e o mantém e permitir envio de mensagens para contato com os mesmos, informando nome, e-mail e texto da mensagem. | Baixa |
| RF-10 | O site deve conter um item no menu que irá direcionar para a tela de Login, onde o usuário irá preencher os dados de “E-mail” e “Senha” cadastrados. | Alta |
| RF-11 | Na página de Login, deve possuir um link com a opção de “Esqueci a senha”, caso o usuário precise criar uma nova senha. | Alta |
| RF-12 | Na página de “Esqueci minha senha”, o usuário irá preencher o e-mail cadastrado. Caso esse e-mail não esteja na lista de cadastros, armazenada em localStorage, deverá ser exibida uma mensagem informando que o e-mail não está no cadastro. | Alta |
| RF-13 | Na página de “Esqueci minha senha”, caso o e-mail esteja cadastrado, haverá a opção do usuário criar uma nova senha. Se a senha for válida, ou seja, se tiver no mínimo 4 caracteres, será alterada na lista de usuários cadastrados em localStorage.| Alta |
| RF-14 | Na página de cadastro (Seja um médico parceiro), para que o cadastro seja efetuado com sucesso, os campos deverão obedecer alguns requisitos: <br> • Nome: mínimo 3 caracteres; <br> • E-mail, Endereço, Cidade, Estado, Especialidade, CRM, Senha: mínimo 4 caracteres em cada campo; <br> • Celular: campo deve ter 11 caracteres.| Alta |
| RF-15 | Na página de “Esqueci minha senha”, o usuário irá preencher o e-mail cadastrado. Esse campo de e-mail deve obedecer á alguns requisitos para que seja válido: <br> • Qualquer tipo de sting <br> • Seguido por caractere @ (obrigatório em e-mails) <br> • Seguido por domínio/provedor (hotmail/gmail) <br> • Seguido por um ponto obrigatório (.)| Alta |
| RF-16 | Na página de “Procure o seu médico”,quando não existirem médicos da especialidade X cadastrados para a cidade Y, o site deve apresentar uma mensagem com essa informação.| Alta |
| RF-17 | Na página de Contatos, o site deve apresentar um mapa com a localização da empresa MyDoctor. Para que a localização seja exibida corretamente, deve-se informar a latitude e longitude, utilizando a API pública OpenStreetMap e a biblioteca Leaflet.| Alta |

### Requisitos não funcionais

A tabela a seguir apresenta os requisitos não funcionais que o projeto deverá atender, identificando suas prioridades de entrega.

| ID     | Descrição do Requisito  |Prioridade |
| -------|-------------------------|----|
| RNF-01 | O site deve ser publicado em um ambiente acessível publicamente na Internet (GitHub Pages).| Alta |
| RNF-02 | O site deve ser responsivo, permitindo a visualização em um celular, desktop, tablet de forma adequada.| Alta |
| RNF-03 | O site deve ter bom nível de contraste entre os elementos da tela em conformidade.| Média |
| RNF-04 | O site deve ser compatível com os principais navegadores do mercado (Google Chrome, Firefox, Microsoft Edge).| Alta |
| RNF-05 | O arquivo de HTML deve apresentar tags semânticas, como: <nav>/<header>/<section>/<main>. Tornando assim o código mais claro para os leitores de tela localizar um conteúdo.| Média |
| RNF-06 | O arquivo HTML deve apresentar a tag <img alt> , que mostra a descrição da imagem, possível a leitura da mesma quanto utilizado leitor de tela.| Média |
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
