# Metodologia

A metodologia deste trabalho consiste em apresentar o grupo de ferramentas presentes no projeto e a maneira pela qual tais recursos foram utilizados. Foram utilizados tanto recursos para a manutenção do código fonte, quanto ferramentas de gestão e organização de equipe na execução das etapas do projeto.

## Relação de Ambientes de Trabalho

A tabela abaixo demonstra as plataformas nas quais foram desenvolvidos os respectivos artefatos do projeto, além do link para acessá-los:

|               Ambiente            |   Plataforma   | Link de Acesso |
|-----------------------------------|----------------|----------------|
| Repositório de código fonte       |     GitHub     | https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-1-e1-proj-web-t9-mydoctor|
| Documentos do projeto             |  Google Drive  | https://docs.google.com/document/d/1lsGX9RgZk6gawR2SgzTAa8rWtZ8IF7ut/edit?usp=sharing&ouid=107233453519518417100&rtpof=true&sd=true|
| Documentos do projeto             |    GitHub      | https://github.com/ICEI-PUC-Minas-PMV-ADS/MyDoctor/tree/master/docs|
| Projeto de Interface e Wireframes |   MarvelApp    | https://marvelapp.com/prototype/i44icbe/screen/86277419|
| Gerenciamento do Projeto          |    GitHub      | https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-1-e1-proj-web-t9-mydoctor/projects/1|

## Gestão de código fonte

Conforme já apresentado anteriormente, foi utilizado o GitHub para o desenvolvimento e a gestão do código fonte do site programado pela equipe. Trata-se de uma plataforma de hospedagem de código para controle de versão e colaboração. Nela é possível que várias pessoas trabalhem conjuntamente em projetos de desenvolvimento de software. Isso se faz possível em função do controle de versões oferecer muita flexibilidade no que diz respeito a como os usuários gerenciam mudanças.

Na plataforma do GitHub o fluxo de trabalho a ser seguido pelo grupo é o GitFlow que consiste na criação de ramificações de recursos, adiando o “merge” com a ramificação de tronco principal para o momento em que o recurso esteja completo. Além disso, esse fluxo de trabalho usa duas ramificações para registrar o histórico do projeto: “main” armazena o histórico do lançamento oficial e “develop” serve como uma ramificação de integração para recursos, conforme demonstrado na figura abaixo:

![image](https://user-images.githubusercontent.com/103527877/174411065-bf394efe-8a7c-40a3-9b36-52fc626ea67d.png)

Conforme são criados recursos baseados na ramificação de desenvolvimento mais recente, os mesmos permanecem em ramificações específicas, enviadas para o repositório central para realizar backup ou colaboração entre a equipe. Conforme dito anteriormente, essas ramificações “feature” usam a ramificação “develop” como base. Após sua conclusão, é feito “merge” de volta para a ramificação de desenvolvimento. Portanto, os recursos nunca interagem direto com a ramificação “main”:

![image](https://user-images.githubusercontent.com/103527877/174411149-71eb8e36-6d29-4bd7-bbb4-6bf5583cd753.png)

Após a conclusão dos recursos baseados na “develop”, realiza-se o lançamento, bifurcando-a com uma ramificação release. Nesse momento, nenhum novo recurso pode ser adicionado. Somente atualizações de segurança, geração de documentação e outras tarefas relacionadas ao lançamento devem ocorrer nessa ramificação. Finalmente, após a conclusão da release, é feito o merge para a ramificação “main”, que recebe um número da versão. Também é feito merge novamente para a ramificação develop, caso tenha recebido modificações desde o início do lançamento:

![image](https://user-images.githubusercontent.com/103527877/174411288-aa1967b4-5996-4019-beb5-3ce5062ea1c2.png)

Tal método de ramificação dedicada aos lançamentos possibilita que uma equipe aperfeiçoe o lançamento atual enquanto outra dá continuidade aos recursos para o próximo lançamento.

## Gerenciamento do Projeto

O gerenciamento e organização do projeto se baseia na metodologia ágil Scrum, que prioriza a entrega de valor e o proporcionamento de uma maior adaptabilidade da equipe. Isso ocorre em função da facilidade desse método em lidar com imprevistos e mudanças no planejamento ao longo do percurso.
A partir dessa metodologia, a equipe está organizada da seguinte maneira:

●	Scrum Master: Nayla Nicolli Ferreira

●	Product Owner: Gabriela Barbosa Caetano Abran

●	Equipe de Desenvolvimento:
 	Débora Cristina Pereira Gonçalves
  Franciele Balverde de Souza
 	Bruno Victor de Oliveira Flavio
  
●	Equipe de Design:
 	João Paulo Faria do Nascimento

Como já dito, para o gerenciamento, organização e distribuição das tarefas, utiliza-se a ferramenta do Github. As Sprints estão estruturadas no formato de marcos, conforme demonstrado abaixo:

![image](https://user-images.githubusercontent.com/103527877/174411528-5e3241e6-ca24-49a2-a88d-4871349e8703.png)
![image](https://user-images.githubusercontent.com/103527877/174411544-b370f7a0-823c-4da7-8237-0872546104a1.png)

Além disso, temos o Backlog do Produto elaborado pelo grupo no GitHub, cujo acesso é possível através da URL:
 https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-1-e1-proj-web-t9-mydoctor/projects/1. 

Abaixo, figura demonstrando a disposição dos entregáveis:

![image](https://user-images.githubusercontent.com/103527877/174411584-d434053e-2188-4bf5-925a-f3058a11ac22.png)

Os entregáveis estão dispostos no “Product Backlog” e apresentados em método Kanban conforme andamento da atividade:
●	To do;

●	In progress;

●	Done.

Adicionalmente, a ferramenta conta com um diretório para a criação de “Issues” que são pendências e problemas ainda não resolvidas, devendo ser tratadas e analisadas ao longo do projeto:

![image](https://user-images.githubusercontent.com/103527877/174411646-aed0d471-e8b6-42d1-a175-d8166c9315e6.png)


