# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto

## Personas

As personas levantadas para o entendimento do problema são apresentadas na tabela a seguir:

|Foto                | Nome                               |Descrição                       | Motivações          | Frustações | Hobbies, Histórias |
|--------------------|------------------------------------|--------------------------------| ------------------- | ---------- | ------------------ |
|![bruno](https://user-images.githubusercontent.com/101216578/158676080-0fc2210c-dbf1-44b7-9dab-7948eb461467.jpg)             | Bruno                              | • Têm 55 anos.<br>• É casado com sua esposa Luiza e é padrasto de um adulto de 28 anos de idade.<br>• Utiliza o Whatsapp, Facebook e Instagram.<br>• É dono de um restaurante.           | Ele quer comprar uma moto, mas quer saber se vale a pena comprá-la ou não, dependendo da revisão e o estado geral do veículo.                | Ele confia apenas nas indicações dos seus amigos, mas no momento eles não conhecem alguém que esteja vendendo motocicletas       |  • Ama fazer churrasco com os amigos nos finais de semana e participar de encontros para motoqueiros gosta de rock e sertanejo.<br>• Sua cerveja favorita é a Brahma.                 | 
|![natalia](https://user-images.githubusercontent.com/101216578/158676154-c2688be3-c1e9-455a-9628-7717c26bc6a5.jpg)              | Natália                            | • Têm 35 anos de idade.<br>• É secretária e utiliza a sua moto todos os dias para ir para o trabalho.<br>• Utiliza o Instagram, Whatsapp, Waze, Uber, iFood.<br>• Não possui muitos conhecimentos em mecânica.| Natalia sonha com sua independência financeira e ela está trabalhando duro e estudando muito para alcançar esse objetivo.               |    Um dia sua moto parou de funcionar quando ela estava indo trabalhar. Ela acabou chegando atrasada no trabalho e teve que acordar mais cedo por alguns dias para pegar o transporte público e ir trabalhar.<br>O episódio gerou muito estresse, desgaste físico e mental para ela, porque ela chegava em casa tarde e tinha que acordar cedo. Isso fez com que ela não dormisse o suficiente o que acabou afetando no seu humor e produtividade também.        |  • Gosta de festas.<br>• Ama sair com os amigos.<br>• Gosta de estudar finanças e planejamento financeiro.                   |
|![leoncio](https://user-images.githubusercontent.com/100882909/158489429-c12db4a9-f0d7-4eae-809a-e13e7b70beb9.jpg)            | Leôncio                            | • 23 anos de idade.<br> • Estudante do SENAI de mecânica que entende bem de motocicletas.| Trabalha de entregador de aplicativos (iFood, UberEats, Rappi, Loggy).                | Desorganizado e sente falta de ter um controle melhor da manutenção da sua moto.<br> Apesar de entender do assunto, ele é desorganizado com o gerenciamento de veículos.       |     • Gosta de sair com os amigos com a namorada<br> • Jogar futebol.               |







## Histórias de Usuários

Com base na análise das personas foram identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Usuário do sistema  | Registrar minhas tarefas           | Não esquecer de fazê-las               |
|Administrador       | Alterar permissões                 | Permitir que possam administrar contas |

Apresente aqui as histórias de usuário que são relevantes para o projeto de sua solução. As Histórias de Usuário consistem em uma ferramenta poderosa para a compreensão e elicitação dos requisitos funcionais e não funcionais da sua aplicação. Se possível, agrupe as histórias de usuário por contexto, para facilitar consultas recorrentes à essa parte do documento.

> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)
> - [User Stories: requisitos que humanos entendem](https://www.luiztools.com.br/post/user-stories-descricao-de-requisitos-que-humanos-entendem/)
> - [Histórias de Usuários: mais exemplos](https://www.reqview.com/doc/user-stories-example.html)
> - [9 Common User Story Mistakes](https://airfocus.com/blog/user-story-mistakes/)

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Permitir que o usuário cadastre tarefas | ALTA | 
|RF-002| Emitir um relatório de tarefas no mês   | MÉDIA |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |


Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)

