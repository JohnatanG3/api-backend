# API de Gerenciamento de Usuários

Este projeto é uma API RESTful simples para gerenciamento de usuários, construída com Express.js e Prisma. A API permite criar, ler, atualizar e excluir usuários.

## Tecnologias Utilizadas

- Node.js: Ambiente de execução JavaScript
- Express.js: Framework web para Node.js
- Prisma: ORM para acesso e gerenciamento de banco de dados
- Cors: Middleware para habilitar Compartilhamento de Recursos de Origem Cruzada
- PostgreSQL: Banco de dados de exemplo para Prisma (Você pode usar outros bancos de dados suportados pelo Prisma)

## Pontos de Extremidade da API

### Criar um Usuário

- URL: /usuarios
- Método: POST
- Descrição: Cria um novo usuário.
- Parâmetros do Corpo:
  - name: O nome do usuário.
  - email: O e-mail do usuário.
  - age: A idade do usuário.

### Obter Usuários

- URL: /usuarios
- Método: GET
- Descrição: Recupera uma lista de usuários. Suporta filtragem por nome, e-mail e idade.
- Parâmetros da Consulta (opcionais):
  - name: Filtra os usuários pelo nome.
  - email: Filtra os usuários pelo e-mail.
  - age: Filtra os usuários pela idade.
 
### Atualizar um Usuário

- URL: /usuarios/:id
- Método: PUT
- Descrição: Atualiza as informações de um usuário.
- Parâmetros da URL:
  - id: O ID do usuário a ser atualizado.
  - Parâmetros do Corpo:
  - name: O novo nome do usuário.
  - email: O novo e-mail do usuário.
  - age: A nova idade do usuário.

### Excluir um Usuário

- URL: /usuarios/:id
- Método: DELETE
- Descrição: Exclui um usuário pelo ID.
- Parâmetros da URL:
  - id: O ID do usuário a ser excluído.
## Contribuição

Se deseja contribuir com este projeto, faça um fork do repositório e crie uma pull request com suas alterações.

## Contato

Se você tiver alguma dúvida ou sugestão, sinta-se à vontade para entrar em contato comigo:

- **GitHub:** [JohnatanG3](https://github.com/SeuUsuario)
- **LinkedIn:** [Johnatan Vieira](https://www.linkedin.com/in/johnatan-vieira-a602542aa/)
- **E-mail:** johnatan.g3@protonmail.com
