# Google Sheets lead capture

Esta pasta contém o Apps Script para receber os leads da landing page e gravar na planilha:

- Spreadsheet: `Leads - Dr Rafael Rocha`
- ID: `1BVfLYit0q7MsqJfaZ3ygUoWd3UiH7MQ6JUFF0sKquEQ`

## Como publicar

1. Acesse [script.new](https://script.new/).
2. Substitua o conteúdo padrão por [Code.gs](/Users/oguidomingos/Documents/New%20project%202/google-apps-script/Code.gs).
3. Ajuste o arquivo de manifesto com [appsscript.json](/Users/oguidomingos/Documents/New%20project%202/google-apps-script/appsscript.json).
4. Clique em `Deploy` > `New deployment`.
5. Selecione `Web app`.
6. Em `Execute as`, escolha a sua conta Google.
7. Em `Who has access`, escolha `Anyone`.
8. Publique e copie a URL final `/exec`.
9. Crie um arquivo `.env.local` na raiz do projeto com:

```env
VITE_LEAD_WEBHOOK_URL=https://script.google.com/macros/s/SEU_WEB_APP_ID/exec
```

10. Rode `npm run build` ou `npm run dev` novamente.

## Campos enviados pelo site

- `created_at`
- `name`
- `phone`
- `source`
- `page_url`
- `notes`

## Observação importante

O frontend desta LP envia os dados por `GET` para o Web App do Apps Script, porque essa rota segue melhor o redirect padrão do endpoint `/exec` em um site estático sem backend próprio.
