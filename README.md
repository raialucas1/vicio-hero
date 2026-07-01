# Vicio Hero

Vicio Hero e um projeto de extensao desenvolvido como web app. A ideia do projeto e ajudar pessoas que querem controlar ou reduzir algum habito prejudicial usando elementos de gamificacao.

Na aplicacao, o usuario escolhe um vicio que deseja enfrentar e depois seleciona um boss relacionado a esse tema. Conforme registra dias sem recaida, ganha XP, sobe de nivel, desbloqueia conquistas e diminui a vida do boss.

## Links do projeto

Pagina de apresentacao:

https://raialucas1.github.io/vicio-hero/

Aplicacao online:

https://raialucas1.github.io/vicio-hero/app/

Repositorio:

https://github.com/raialucas1/vicio-hero

## Funcionalidades

- Login simples com nome e e-mail.
- Selecao do vicio que o usuario deseja combater.
- Selecao de boss tematico.
- Contador de dias sem recaida.
- Sistema de XP, nivel e patente.
- Barra de vida do boss.
- Dano no boss ao marcar um dia limpo.
- Bonus semanal de progresso.
- Registro de recaida.
- Conquistas por marcos importantes.
- Diario para motivacoes e reflexoes.
- Dados salvos no proprio navegador.

## Tecnologias usadas

- HTML
- CSS
- JavaScript
- Node.js com Express para executar localmente
- GitHub Pages para hospedagem

## Como executar localmente

Tambem e possivel abrir direto o arquivo:

```text
backend/public/index.html
```

Ou rodar com o servidor local:

```bash
cd backend
npm install
npm start
```

Depois basta acessar:

```text
http://localhost:3000
```

## Publicacao

O projeto foi preparado para ser publicado pelo GitHub Pages usando a pasta `docs`.

Configuracao usada:

```text
Branch: main
Folder: /docs
```

A pasta `docs` contem a pagina de apresentacao e uma copia estatica da aplicacao em `docs/app`.

## Estrutura do projeto

```text
backend/
  public/
    index.html
    style.css
    app.js
  server.js

docs/
  index.html
  style.css
  app/
    index.html
    style.css
    app.js
```

## Observacoes

A versao publicada no GitHub Pages nao depende de servidor. Os dados do usuario ficam guardados no navegador, o que e suficiente para a proposta da entrega e facilita a hospedagem publica.


