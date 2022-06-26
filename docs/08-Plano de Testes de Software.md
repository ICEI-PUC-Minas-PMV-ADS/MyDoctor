# Plano de Testes de Software

Os requisitos para realização dos testes de software são:

•	Site publicado na Internet;

•	Navegador da Internet - Chrome, Firefox ou Edge;

•	Conectividade de Internet para acesso às plataformas (APIS).

Os testes funcionais a serem realizados no aplicativo são descritos a seguir:

|    Caso de Teste      |   CT-01 - Validação do e-mail para recuperar senha |
| :--------------------:| :------------------------------------------------: |
| Requisitos Associados |  RF-15    |
| Objetivo do Teste     |  Verificar se o e-mail cadastrado é um e-mail válido |
|    Passos             | 1) Acessar o Navegador <br> 2) Informar o endereço do site. <br> 3) Clicar em esqueci minha senha <br> 4) Inserir e-mail cadastrado <br> 5) Confirmar e-mail e enviar instruções para e-mail cadastrado. |
| Critérios de Êxito    |  1. Possui cadastro no site <br> 2. E-mail conter formato padrão (xxxx@xxxx.com.br) <br> • Qualquer tipo de sting <br> • Seguido por caractere @ (obrigatório em e-mails) <br> • Seguido por domínio/provedor (hotmail/gmail) <br> • Seguido por um ponto obrigatório (.) <br> • Texto validando e-mail (com/com.br) |

|    Caso de Teste      |   CT-02 - Validação de gravação de mensagem de contato |
| :--------------------:| :------------------------------------------------: |
| Requisitos Associados |  RF-09    |
| Objetivo do Teste     |  Verificar se os dados preenchidos pelo usuário são gravados no localStorage. |
|    Passos             | 1) Acessar o Navegador; <br> 2) Informar o nome, e-mail e mensagem de texto; <br> 3) Clicar em "Enviar" ; <br> 4) Confirmar se as informações foram gravadas no localStorage. |
| Critérios de Êxito    |  3. Preencher informações solicitadas <br> 4. E-mail conter formato padrão (xxxx@xxxx.com.br) <br> • Qualquer tipo de sting <br> • Seguido por caractere @ (obrigatório em e-mails) <br> • Seguido por domínio/provedor (hotmail/gmail) <br> • Seguido por um ponto obrigatório (.) <br> • Texto validando e-mail (com/com.br) |

|    Caso de Teste      |  CT-03 - Testar a responsividade no smartphone e navegabilidade |
| :--------------------:| :------------------------------------------------: |
| Requisitos Associados |  RNF-02  |
| Objetivo do Teste     |  Testar se a HomePage é uma página responsiva, sendo possível navegar pelo menu e visualizar claramente todos os itens da página |
|    Passos             | 1) Acessar o Navegador; <br> 2) Acessar a HomePage (index.html); <br> 3) Acessar o DevTools através do comando F12 no teclado; <br> 4) No DevTools, acessar a opção “Toggle device toolbar”, ou através do comand CTRL + Shift + M, para visualizar a tela responsiva.|
| Critérios de Êxito    | Verificar se todos os itens da página estão legíveis, inclusive o menu.|

|    Caso de Teste      |   CT-04 - Testar a seção “Quem somos” |
| :--------------------:| :------------------------------------------------: |
| Requisitos Associados |  RF-01 <br> RNF-02  |
| Objetivo do Teste     |  Verificar se o usuário consegue visualizar a seção “Quem somos”, com a missão, visão e valores da página |
|    Passos             | 1) Acessar o Navegador; <br> 2) Acessar a HomePage (index.html). |
| Critérios de Êxito    | Seção “Quem somos” está legível para o usuário, com os itens missão, visão e valores, tanto na versão mobile quanto desktop |

|    Caso de Teste      |   CT-05 - Verificar se HomePage possui imagens que auxiliam no entendimento do conteúdo |
| :--------------------:| :------------------------------------------------: |
| Requisitos Associados |  RF-02  <br> RNF-02 |
| Objetivo do Teste     | Verificar se HomePage possui testar as imagens que auxiliam no entendimento do conteúdo  |
|    Passos             | 1) Acessar o Navegador <br> 2) Acessar a HomePage (index.html); <br> 3) Acessar o DevTools através do comando F12 no teclado; <br> 4) No DevTools, inspecionar as imagens e verificar na aba “Elementos” se o atributo “alt” está presente na(s) imagem(ns).|
| Critérios de Êxito    | Na HomePage, o usuário consegue visualizar algumas imagens, entendendo melhor a cerca do site, tanto na versão desktop quanto mobile. Todas as imagens possui a tag “alt”, que auxilia na acessibilidade e leitura de tela. |

|    Caso de Teste      |   CT-06 - Testar o cabeçalho da HomePage |
| :--------------------:| :------------------------------------------------: |
| Requisitos Associados | RF-01 <br> RF-03 <br> RF-04 <br> RF-06 <br> RF-09 <br> RF-10 |
| Objetivo do Teste     | Verificar se o cabeçalho da HomePage possui todos os itens esperados  |
|    Passos             | 1) Acessar o Navegador; <br> 2) Acessar a HomePage (index.html). |
| Critérios de Êxito    | Na HomePage, testar se o usuário consegue visualizar o cabeçalho, no qual possui os itens que direcionam para as respectivas páginas do site:  • Quem somos <br> • Contatos <br> • Seja um médico parceiro <br> • Procure o seu médico <br> • Login |

|    Caso de Teste      |   CT-07 - Testar o rodapé da HomePage |
| :--------------------:| :------------------------------------------------: |
| Requisitos Associados |  RF-09 |
| Objetivo do Teste     |  Testar se o usuário consegue visualizar o rodapé, com os contatos dos desenvolvedores |
|    Passos             | 1) Acessar o Navegador; <br> 2) Acessar a HomePage (index.html). |
| Critérios de Êxito    | Na HomePage, verificar se o usuário consegue visualizar o rodapé, que possui o contato dos desenvolvedores do site |

|    Caso de Teste      |   CT-08 - Testar se HomePage possui tags semânticas |
| :--------------------:| :------------------------------------------------: |
| Requisitos Associados |  RNF-05 | 
| Objetivo do Teste     |  Verificar se o arquivo index.html da HomePage possui tags semânticas.|
|    Passos             | 1) Acessar o Navegador; <br> 2) Acessar a HomePage (index.html); <br> 3) Acessar o DevTools através do comando F12 no teclado; <br> 4) No DevTools, inspecionar os elementos da HomePage e verificar se existem tags semânticas através da aba “Elementos”.|
| Critérios de Êxito    | Testar se o arquivo index.html da HomePage possui tags semânticas, como section, footer, header, dentre outras. |

|    Caso de Teste      |   CT-09 - Testar a hospedagem do GitHub Pages |
| :--------------------:| :------------------------------------------------: |
| Requisitos Associados |  RNF-01   |
| Objetivo do Teste     | Verificar se o arquivo index.html da HomePage é acessível através da hospedagem do GitHub Pages.|
|    Passos             | 1) Acessar o Navegador; <br> 2) Acessar o link da GitHubPages: https://icei-puc-minas-pmv-ads.github.io/MyDoctor/ |
| Critérios de Êxito    | Verificar se a primeira página a ser aberta é a HomePage. |

|    Caso de Teste      |   CT-10 - Testar o cadastro de novo médico |
| :--------------------:| :------------------------------------------------: |
| Requisitos Associados | RF-04 <br> RF-05 <br> RF-09 <br> RF-14 <br> RNF-01 <br> RNF-02 <br> RNF-04 <br> RNF-05 <br> RNF-06 <br> RNF-07|
| Objetivo do Teste     | 1. Verificar se os campos de cadastro do formulário estão condizentes a receberem apenas informações válidas; <br> 2. Nos campos Nome, Cidade, Estado e Especialidade será realizado o teste de campo através da verificação em código, nesses casos o código funciona bloqueando as teclas de número do teclado que estão no intervalo de 47 a 58 do teclado; <br> 3. Nos campos E-mail, Celular, Endereço, CRM e Senha será feito testes de campo através da escolha de casos de teste; <br> 4. Todos os 9 textbox precisam apresentar mensagem de erro alertando o usuário sobre a existência de algum campo preenchido de forma errada, além de mencionarem a quantidade mínima de caracteres a serem inseridos; essas mensagens de erro impossibilitam o usuário em fazer o envio dos dados em forma de JSON para o LocalStorage da página; <br> 5. Verificar se para o campo de senha, o usuário consegue “esconder” as informações digitadas, deixando assim uma página mais segura; <br> 6. Testar se quando o usuário clicar no botão salvar e todos os 9 textbox estiverem devidamente preenchidos, os dados desses campos serão registrados em forma de JSON no LocalStorage da página; <br> 7. Verificar se quando o usuário finalizar o cadastro, o site levará o médico direto para a página de login; <br> 8. Verificar em diferentes dispositivos (celular/notebook) se o site está responsivo juntamente com o menu hamburguer; <br> 9. Verificar se o código da página está dentro das boas práticas.|
|    Passos             | *Acessar o Navegador; <br> *Informar o endereço do site; <br> *Preencher os campos Nome, E-mail, Endereço, Cidade, Estado, Senha, Celular, CRM e Especialidade; <br> *Clicar em Salvar; <br> **Clicar com o botão direito no corpo da página; <br> **Clicar em Inspeciona > Application > LocalStorage; <br> ****Acessar o Visual Code; <br> ***Acessar o HTML/CSS/JavaScript da página Cadastro; <br> ***Verificar se todas estão no padrão de boas práticas; <br> ****Informar o endereço do site em dispositivos móveis e notebook;   |
| Critérios de Êxito    | *Preencher todas as informações solicitadas no formulário; <br> *Não deixar campo vazio; <br> *Checar se todas as informações preenchidas nos campos estão corretas (em verde); <br> *Clicar no botão Salvar.|

|    Caso de Teste      |   CT-11 - Testar o funcionamento do Login |
| :--------------------:| :------------------------------------------------: |
| Requisitos Associados | RF-01 <br> RF-02 <br> RF-10 <br> RF-11 <br> RNF-01 <br> RNF-02 <br> RNF-03 <br> RNF-04 <br> RNF-05 <br> RNF-06 <br> RNF-07 |
| Objetivo do Teste     | Verificar se, ao serem digitados os dados cadastrados previamente na página de “Seja um médico parceiro”, a página de Login realiza o acesso do usuário. |
|    Passos             | 1- Acessar o Navegador; <br> 2- Acessar a página “Seja um médico parceiro” (cadastro.html); <br> 3- Preencher as informações que a página solicita para a realização do cadastro; <br> 4- Gravar tais informações pelo botão “Salvar”; <br> 5- Acessar a página de Login (login.html); <br> 6- Retomar as informações utilizadas no cadastro, especificamente, e-mail e senha, e utilizá-las para completar os campos do Login; <br> 7- Realizar o Login pelo botão “Entrar”. |
| Critérios de Êxito    | A página foi programada para que, caso o login se realize, o usuário seja encaminhado para a página “Quem somos”. Assim, ao apertar “entrar” depois de preencher as informações, o usuário deverá ser encaminhado para outra página. |

|    Caso de Teste      |   CT-12 - Testar a redefinição de senha |
| :--------------------:| :------------------------------------------------: |
| Requisitos Associados |  RF-12 <br> RF-13  |
| Objetivo do Teste     | Na página de “Esqueci a senha”, após o usuário preencher o email cadastrado, caso esse email for válido, verificar se usuário consegue redefinir a senha. |
|    Passos             | 1 - Acessar o Navegador; <br> 2 - Acessar a página “Login” (login.html); <br> 3 - Acessar a página “Esqueci minha senha” (esqueci.html); <br> 4 - Digitar o email cadastrado; <br> 5 - Caso for válido, criar uma nova senha; <br> 6 - Acessar a página de “Login.html” e realizar o login com a nova senha.|
| Critérios de Êxito    | Caso o usuário consiga fazer o login com a nova senha criada, o teste teve êxito. |

|    Caso de Teste      |   CT-13 - Validação do botão de busca |
| :--------------------:| :------------------------------------------------: |
| Requisitos Associados |  RF-07  |
| Objetivo do Teste     |  Verificar se após o usuário clicar no botão de buscar, o sistema irá exibir a lista de médicos desejados. |
|    Passos             | 1)Acessar o navegador; <br> 2)Escrever no primeiro campo, o nome da cidade X; <br> 3)Escrever no outro campo, a especialidade Y do médico; <br> 4)Clicar no botão ‘buscar”. |
| Critérios de Êxito    | • Exibir lista de médicos cadastrados da especialidade Y para cidade X de acordo com a solicitação do usuário. |

|    Caso de Teste      |   CT-14 - Validação para o caso de não existirem médicos cadastrados |
| :--------------------:| :------------------------------------------------: |
| Requisitos Associados |  RF-16  |
| Objetivo do Teste     | Verificar se existem médicos cadastrados da especialidade Y para cidade X  |
|    Passos             | 1)Acessar o navegador; <br> 2)Digitar no campo de especialidade, a especialidade Y; <br> 3)Digitar no campo de cidade, a cidade X; <br> 4)Clicar no botão “buscar”; <br> 5)Aparecerá uma mensagem se não existem médico da especialidade Y cadastrados para a cidade X.|
| Critérios de Êxito    | • Verificar se não existirem médicos cadastrados, o sistema irá emitir uma mensagem.|

|    Caso de Teste      |   CT-15 - Verificar a exibição do mapa de localização na página de contato |
| :--------------------:| :------------------------------------------------: |
| Requisitos Associados |  RF-17  |
| Objetivo do Teste     |  Verificar se o mapa de localização está presente na página de Contato e se o mesmo é navegável |
|    Passos             | 1)Acessar o navegador; <br> 2)No menu, acessar a página de Contato; <br> 3) Verificar se o mapa de localização está visível e navegável. |
| Critérios de Êxito    | • Verificar se o mapa de localização está visível e navegável, ou seja, se o usuário consegue visualizar o marcador, as ruas ao redor e ampliar/reduzir o mapa através do zoom. |


