# Vicio Hero

Vicio Hero e um web app gamificado para ajudar usuarios a acompanhar habitos que desejam reduzir ou abandonar. A proposta transforma o vicio escolhido em um "boss", criando progresso por dias limpos, XP, niveis, conquistas e diario pessoal.

## Acesso online

Quando o GitHub Pages estiver ativado, a pagina publica do projeto ficara em:

https://raialucas1.github.io/vicio-hero/

A aplicacao pode ser acessada pela propria pagina do projeto ou diretamente em:

https://raialucas1.github.io/vicio-hero/app/

## Funcionalidades

- Login simples por nome e e-mail.
- Escolha do vicio que o usuario deseja combater.
- Escolha de boss tematico relacionado ao vicio.
- Contador de dias sem recaida.
- Sistema de XP, nivel e patente.
- Barra de vida do boss com dano por progresso.
- Bonus semanal de dano.
- Registro de recaida com impacto no progresso.
- Conquistas por marcos importantes.
- Diario pessoal com motivacao e reflexoes.
- Salvamento local no navegador com `localStorage`.

## Tecnologias

- HTML5
- CSS3
- JavaScript
- Node.js e Express para execucao local opcional
- GitHub Pages para publicacao estatica

## Como rodar localmente

Opção estatica:

1. Abra `backend/public/index.html` no navegador.

Opção com servidor local:

```bash
cd backend
npm install
npm start
```

Depois acesse:

```text
http://localhost:3000
```

## Como publicar no GitHub Pages

1. Envie as alteracoes para o repositorio no GitHub.
2. No GitHub, abra `Settings`.
3. Entre em `Pages`.
4. Em `Build and deployment`, escolha `Deploy from a branch`.
5. Em `Branch`, selecione `main` e a pasta `/docs`.
6. Salve a configuracao.
7. Aguarde o GitHub gerar o link publico.

## Estrutura principal

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

## Observacao tecnica

Para funcionar no GitHub Pages, a versao publicada usa `localStorage` no navegador. Isso permite que o app seja hospedado sem backend. Os dados ficam salvos no dispositivo do usuario e nao sao enviados para um servidor.

## Roteiro sugerido para video de ate 10 minutos

1. Apresentar o problema e a ideia do Vicio Hero.
2. Mostrar a pagina publica do projeto no GitHub Pages.
3. Acessar a aplicacao online.
4. Demonstrar login, escolha de vicio e escolha de boss.
5. Marcar um dia limpo e explicar XP, nivel, patente e dano no boss.
6. Registrar uma entrada no diario.
7. Mostrar as conquistas.
8. Explicar rapidamente a estrutura do repositorio.
9. Destacar o uso de HTML, CSS, JavaScript, armazenamento local e publicacao no GitHub Pages.
10. Encerrar mostrando como o projeto atende aos requisitos da entrega.
