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

#Capturas de Tela
<img src='https://user-images.githubusercontent.com/30155829/134657886-f9b09cec-3c12-4896-bf15-27498f25fd27.jpeg' width="300" height="600">

<img src='https://user-images.githubusercontent.com/30155829/134657909-6c8df927-04d0-4806-aef0-866fc3ff4385.jpeg' width="300" height="600">

<img src='https://user-images.githubusercontent.com/30155829/134657931-24c67dad-633c-49b4-9d09-740a28db0913.jpeg' width="300" height="600">

<img src='https://user-images.githubusercontent.com/30155829/134657948-f193c9db-e40c-424f-952a-fe92ef05651d.jpeg' width="300" height="600">

<img src='https://user-images.githubusercontent.com/30155829/134657962-7f6a0c14-d38e-48c0-9be5-3ac0d7b333a1.jpeg' width="300" height="600">

<img src='https://user-images.githubusercontent.com/30155829/134657972-fc375ddc-9237-45a1-958f-2ce7df678568.jpeg' width="300" height="600">


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