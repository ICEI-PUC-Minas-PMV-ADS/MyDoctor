# Arquitetura da Solução

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>

## Diagrama de componentes

Os componentes que fazem parte da solução são apresentados na Figura que se segue.

![arquitetura](https://user-images.githubusercontent.com/63374421/164981403-d67371ff-a616-40ba-9637-9351a8b559d3.jpg)
<center>Figura XX - Arquitetura da Solução</center>

A solução implementada conta com os seguintes módulos:
- **Navegador** - Interface básica do sistema  
  - **Páginas Web** - Conjunto de arquivos HTML, CSS, JavaScript e imagens que implementam as funcionalidades do sistema.
   - **Local Storage** - armazenamento mantido no Navegador. Serão salvos os seguintes dados:
      - **Médicos** - esse dado será armazenado como uma lista com os JSON’s. Cada item da lista possui os dados do médico preenchidos no cadastro “Seja um médico parceiro”: nome, endereço, CRM, cidade, dentre outros dados. Esses dados são as respectivas “chaves” e “valores” do JSON.
      - **Avaliações** - assim como os médicos, as avaliações serão armazenadas como uma lista de JSON’s, sendo que cada JSON possui os dados preenchidos no formulário de avaliação do médico, tais como: nome do médico, nome do paciente, nota da avaliação e outros.
  - **Hospedagem** - local na Internet onde as páginas são mantidas e acessadas pelo navegador. 

Foi feito o protótipo de cada tela para o ambiente mobile:

![home page](https://user-images.githubusercontent.com/63374421/164981438-b2039a26-2499-4db4-b66f-6ff56b7de8e9.PNG)
<center>Figura XX - Home Page</center>


![seja medico parceiro](https://user-images.githubusercontent.com/63374421/164981452-d4ad5b68-5f8e-495c-b63a-a34feb934a38.PNG)
<center>Figura XX - Seja um médico parceiro</center>


![procure seu medico](https://user-images.githubusercontent.com/63374421/164981467-f8c3f9ec-987d-4260-934c-f1a081289acf.PNG)
<center>Figura XX - Procure seu médico</center>


![esqueci senha](https://user-images.githubusercontent.com/63374421/164981480-b20685d1-128a-4157-bf4f-698c32a2042a.PNG)
<center>Figura XX - Esqueci minha senha</center>


![menu](https://user-images.githubusercontent.com/63374421/164981535-dfd760df-4f53-4eb1-9b23-adb1f147d44b.PNG)
<center>Figura XX - Menu inferior</center>



A imagem a seguir ilustra o fluxo do usuário em nossa solução. Assim que o usuário entra na plataforma, ele é apresentado à tela inicial (Tela 1). No menu inferior temos as seguintes opções de navegação: "Quem somos", "Contato", "Seja um médico parceiro" e "Procure seu médico". Esse menu está disponível em todas as telas da aplicação. 

Nesse menu, caso o usuário clique na opção "Quem somos", será direcionado para a área específica da página inicial, que contém a "Missão, Visão e Valores" do MyDoctor.

O mesmo acontece para a próxima opção do menu "Contato", sendo direcionado para a última parte da página inicial, a qual possui as informações de contato.

Ao escolher a opção "Seja um médico parceiro" no menu inferior, será direcionado a para tela de cadastro do médico (Tela 4), com os diversos campos para preenchimento. Nessa mesma tela, o médico também poderá fazer a edição do seu cadastro, caso já possua.

A última opção do menu inferior é "Procure o seu médico". Se o usuário clicar nessa opção, será direcionado para a Tela 6, onde poderá filtrar por região ou especialidade e obter os dados do(s) médico(s) que deseja.


![Fluxo de usuário](https://user-images.githubusercontent.com/63374421/164981563-317f5ca4-7d77-4636-8458-6ae52214e6bd.jpg)
<center>Figura XX - Fluxo do usuário</center>

## Tecnologias Utilizadas

As tecnologias que serão utilizadas são:
- **HTML**
- **CSS**
- **JavaScript**

A IDE usado para o desenvolvimento será o **Visual Studio Code**.

## Hospedagem

O site utiliza a plataforma do Heroku como ambiente de hospedagem do site do projeto. O site é mantido no ambiente da URL:
 
> - [HerokuApp MyDoctor](https://project-my-doctor.herokuapp.com/)

A publicação do site no Heroku é feita por meio de uma submissão do projeto (push) via git para o repositório remoto que se encontra no endereço:

> - [HerokuApp Git MyDoctor](https://git.heroku.com/project-my-doctor.git)

> **Links Úteis**:
>
> - [Website com GitHub Pages](https://pages.github.com/)
> - [Programação colaborativa com Repl.it](https://repl.it/)
> - [Getting Started with Heroku](https://devcenter.heroku.com/start)
> - [Publicando Seu Site No Heroku](http://pythonclub.com.br/publicando-seu-hello-world-no-heroku.html)
