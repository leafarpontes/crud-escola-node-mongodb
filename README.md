# crud-escola-node-mongodb

## Projeto simples de cadastro de alunos de uma escola com CRUD, frontend + backend, no padrão MVC. <br/>
Tecnologias usadas:
- HTML
- CSS
- Bootstrap
- Node.js
- Express
- MongoDB

CRUD 100% funcional com cadastro, listagem, edição/atualização, e deleção de alunos.

## Instruções para rodar o projeto:
- Tenha certeza de que tem o node instalado.
- Digite npm install no terminal, dentro da pasta raíz do projeto para instalar as dependências.
- Como a aplicação usa um cluster do MongoDB Atlas para o banco de dados, na linha 26 do arquivo app.js terá que substituir "${process.env.MONGO_DB_CONNECTION}" por uma string de conexão do MongoDB, com o seu próprio username, password e collection.
- Digite node app.js para rodar a aplicação.
- A aplicação rodará na rota /alunos, em http://localhost:3000/alunos

## Screenshots
### Lista de Alunos
![Lista de Alunos](https://i.imgur.com/2tprwhF.png)

### Cadastro de Alunos
![Cadastro de Alunos](https://i.imgur.com/3Y1n1XO.png)

### Edição de Aluno
![Edição de Aluno](https://i.imgur.com/DkBYFzN.png)

## Sobre o Autor
***Rafael Pontes*** <br/>
[GitHub](https://github.com/leafarpontes) | [Linkedin](https://www.linkedin.com/in/rafael-p/)