# Pulso LP — Dr. Rafael Rocha | Medicina da Dor

Landing page do Dr. Rafael Rocha (ortopedista/medicina da dor, Lanner Especialidades, Brasília-DF).

Migrado para **Vite + React** em [DES-419](https://paperclip.icebergcompany.com.br/DES/issues/DES-419) para compatibilidade com Hostinger.

## Produção

- Site: https://drrafaelrochaortopedia.com.br/ (Vercel, time Pulso)
- Repositório em produção: `github.com/pulsodigitalhub/pulso-lp-rafael-dores-cronicas` (mirror do repo original `oguidomingos/pulso-lp-rafael-dores-cronicas`, migrado em 2026-08-06)
- Deploy automático: cada commit na branch de produção dispara build e publicação direto pela Vercel, sem passo manual

## Stack

- **Framework:** React 18 + Vite 5
- **Estilos:** Tailwind CSS (via CDN inline) + CSS custom
- **Build:** `vite build` → `dist/` com `base: "./"` (paths relativos, herdado do processo antigo de upload manual — segue funcionando normalmente na Vercel)

## Desenvolvimento local

```bash
npm install
npm run dev
```

## Deploy

O deploy é automático: cada commit na branch de produção do repo `pulsodigitalhub/pulso-lp-rafael-dores-cronicas` dispara build e publicação na Vercel. Não é preciso rodar build nem subir arquivo manualmente.

> Histórico: o projeto já foi hospedado via upload manual de `dist/` no Hostinger e via GitHub Pages (branch de deploy estático). Nenhum dos dois é mais usado — o domínio aponta pra Vercel desde 2026-08-06.

## Estrutura do projeto

```
src/
  App.jsx      — Componente principal da LP
  App.css      — Estilos globais
  main.jsx     — Entry point React
dist/          — Build de produção (gerado pelo vite build)
  index.html
  assets/
  img/
public/
  img/         — Imagens estáticas
vite.config.js — Config Vite (base: "./")
```

---

**Origem:** [DES-180](/DES/issues/DES-180) | **Migração:** [DES-419](/DES/issues/DES-419) (Pulso — Assessoria de Marketing para Clínicas)
