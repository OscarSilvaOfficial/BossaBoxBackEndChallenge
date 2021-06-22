# Challenge BossaBox

### Ferramentas utilizadas

<details><summary><b>Docker</b></summary>

```
Utilizado para montar o ambiente de desenvolvimento com MySQL. 
```
</details>

<details><summary><b>Rest Client</b></summary>

```
Utilizado para montar as requisições e documentalas.
```
</details>

<details><summary><b>Typescript</b></summary>

```
Linguágem utilizada para criar a API Rest, junto com o framework express para atuar como servidor HTTP. 
```
</details>

<details><summary><b>Prisma</b></summary>

```
ORM utilizado para construir modelos de tabela, persistência com o banco de dados e geração de migrações para versionamento de banco de dados.
```
</details>

<details><summary><b>Jest</b></summary>

```
Utilizo essa lib para testar os endpoints disponíveis na aplicação e o axios para fazer as
requisiçõpes HTTP.
```
</details>

<details><summary><b>Node</b></summary>

```
Utilizado para transpilar e rodar do Typescript.
```
</details><br>

### Instalar dependências:

``` zsh 
npm install
```

### Rodar Migrations:

``` zsh 
npm run migrate
```

### Rodar Projeto:

``` zsh 
npm run dev
```

### Autorização:

Para acessar os endpoint que a autorização é necessária,
acesse o endpoint /api/token para pegar o token, e insira 
nos cabecalhos da sua requisição com mesmo com a chave Authorization,
exemplo: 

``` http
GET http://localhost:3000/tools/docs HTTP/1.1
content-type: application/json
Authorization: 123abc123abc123abc123abc123abc
```

### Endpoints:

``` json
{

  "/api/token": {
    "HTTP Methods": ["GET"],
  },

  "/api/docs": {
    "HTTP Methods": ["GET"],
  },

  "/tools": {
    "HTTP Methods": ["GET", "POST"],
    "Authorization Token": true
  },

  "/tools/:id": {
    "HTTP Methods": ["UPDATE", "DELETE"],
    "Authorization Token": true
  },

  "/tools/docs": {
    "HTTP Methods": ["GET"],
    "Authorization Token": true
  },
}
```
