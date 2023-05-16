# Talker Manager Project

Neste projeto foi desenvolvido uma API. Utilizado a metodologia CRUD (Create, Read, Update e Delete), para cadastro de talkers (palestrantes). É possivel cadastrar, visualizar, pesquisar, editar e excluir informações.

### 💻 Tecnologias utilizadas:

- JavaScript
- NodeJS
- Express
- MySQL
- Jest
- Docker

---

A aplicação foi desenvolvida com TDD `Test Driven Development`. Por conta disso, utilizei `Chai`, `Mocha` e `Sinon`, juntamente com o `Jest`, para realizar os testes unitários.

# 🐋 Rodando no Docker

Em um terminal, inicie os containers
- `docker-compose up -d --build`

Acesse o terminal do container
- `docker exec -it talker_manager bash`

Inicie a aplicação
- `npm start` ou `npm run dev` para iniciar com live-reload

# Endpoints

- GET `/talker`
- GET `/talker/:id`
- GET `/talker/search`

---

- POST `/login`
  ``` JavaScript
    {
      "email": "guesser.vicente@gmail.com",
      "password": "123456"
    }
  ```
- POST `/talker`
  ``` JavaScript
    {
      "name": "Vicente Vendramin",
      "age": 21,
      "talk": {
        "watchedAt": "23/04/2023",
        "rate": 5
      }
    }
  ```

---

- PUT `/talker/:id`
  ``` JavaScript
    {
      "name": "Vicente Vendramin",
      "age": 21,
      "talk": {
        "watchedAt": "23/04/2023",
        "rate": 5
      }
    }
  ```

---

- DELETE `/talker/:id`
