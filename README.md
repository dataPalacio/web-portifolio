# Deploy do Projeto no GitHub Pages

Este documento descreve como fazer o deploy do projeto no GitHub Pages, garantindo que a publicação funcione corretamente.

## Passos para Deploy

1. Certifique-se de que todas as alterações estejam commitadas e pushadas no branch principal (ex: main).

2. Execute o comando para deploy completo:

```bash
npm run deploy:full
```

Este comando irá:
- Deletar a branch local `gh-pages` se existir para evitar conflitos.
- Gerar o build do projeto.
- Publicar a pasta `dist` na branch `gh-pages`.

3. No GitHub, vá para as configurações do repositório:

- Acesse `Settings` > `Pages`.
- Configure a fonte para a branch `gh-pages` e a pasta raiz (`/`).
- Salve as configurações.

4. Aguarde alguns minutos para o GitHub Pages atualizar a publicação.

5. Acesse a URL:

```
https://datapalacio.github.io/web-portifolio/
```

## Diagnóstico de Problemas

- Se a página continuar branca, verifique no console do navegador se há erros de carregamento de arquivos (404) ou erros de JavaScript.
- Verifique se o arquivo `index.html` na branch `gh-pages` contém os caminhos corretos para os recursos, prefixados com `/web-portifolio/`.
- Para testar localmente o build, use:

```bash
npm run preview
```

Isso serve o conteúdo da pasta `dist` localmente para testes.

## Considerações

- O arquivo `vite.config.ts` está configurado com a base correta para o GitHub Pages:

```ts
base: '/web-portifolio/',
```

- O script de deploy no `package.json` está configurado para publicar a pasta `dist` na branch `gh-pages`.

- Não modifique manualmente os arquivos na branch `gh-pages`, sempre use o script de deploy para garantir consistência.

Se precisar de ajuda adicional, estou à disposição.