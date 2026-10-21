# Harmonização — Élan Aesthetics

Site institucional da clínica de estética avançada **Élan Aesthetics**, com design premium editorial, traduzido para português brasileiro (pt-BR).

## Estrutura do projeto

```
site harmonização/
├── index.html            # Página inicial (entry point)
├── code.html             # Código-fonte principal (mesmo conteúdo do index)
├── assets/
│   ├── css/
│   │   └── style.css     # Estilos customizados (material symbols, slider)
│   ├── js/
│   │   └── main.js       # Script do comparador antes/depois
│   └── images/
│       └── hero.png      # Imagem principal da seção Hero
├── DESIGN.md             # Especificação de design system
├── screen.png            # Preview visual do site
├── README.md
└── .gitignore
```

## Tecnologias

- HTML5 semântico
- Tailwind CSS v3 (via CDN)
- Google Fonts: Playfair Display e Plus Jakarta Sans
- Material Symbols Outlined
- JavaScript vanilla (slider de comparação antes/depois)

## Como rodar localmente

```bash
python -m http.server 5173
```

Acesse: `http://localhost:5173/`

## Deploy

O site está configurado para deploy automático na Vercel via push no branch `main` do repositório GitHub.

## Idioma

Interface pública 100% em português brasileiro (pt-BR).
