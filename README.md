# Avaliação Técnica Seven

API desenvolvida em Node.js que possibilita a verificação de Preço atual, Preço histórico, Preço atual com comparação a outras ações e projeção de ganhos com comparação em data específica.

## O Cenário

Um desenvolvedor Backend está desenvolvendo um sistema que precisa de um APP simples, mas ele não tem conhecimento para desenvolver tal APP. 
A Seven quer resolver o problema desse desenvolvedor. A ideia é que através de uma tela simples o desenvolvedor consiga criar um novo “Modelo” e inserir dados (instâncias do “Modelo”) para serem utilizados pelo backend.
Um caso de uso de exemplo seria:
• Desenvolvedor backend cria um novo “Modelo” com o nome “Employees"
• Desenvolvedor backend configura os atributos do modelo: id:number, name:string, bornDate:date, salary:decimal, position:string

A partir desse cadastro, um recurso REST para gerenciamento desse modelo com os seguintes métodos estará disponível:
• GET /employees - Lista todos os empregados
• GET / employees /{id} - Busca um empregado por id
• POST / employees - Cria um novo empregado
• PUT / employees /{id} - Edita um empregado
• DELETE / employees /{id} - Deleta um empregado

## Solução do Problema abordada

A Seven solicita a criação de um App que possibilite a criação novos funcionários para atender a necessidade do desenvolvedor Backend, para tal será utilizada a rota disponibilizada POST / employees.

## Tecnologias

- [Node.js](https://nodejs.org/en/)
- Typescript
- [React-Native](https://reactnative.dev/)

## Requerimentos

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/) or [npm](https://www.npmjs.com/)

## Execução do Projeto

Clone o projeto `git clone`
Executar o comando `yarn` ou `npm install` para instalação das dependências.

Executar o comando `yarn android` para iniciar a aplicação.

## Testes

Não foram implementadas rotinas de testes.