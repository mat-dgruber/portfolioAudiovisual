# 🖥️ Frontend — Portfolio Audiovisual

Este diretório contém a aplicação cliente desenvolvida em **Angular 21**, projetada para oferecer uma experiência visual imersiva e de alta performance.

## 🚀 Tecnologias Utilizadas

- **Angular 21:** Uso intensivo de _Standalone Components_ e _Signals_ para gerenciamento de estado reativo e eficiente.
- **Tailwind CSS:** Framework utilitário para construção de uma interface customizada com o tema "Cinematic Teal".
- **Anime.js:** Motor de animações utilizado para criar transições cinematográficas, revelações de elementos e interações de scroll.
- **PrimeNG:** Utilizado para componentes complexos como Diálogos (Modais) e Ícones (PrimeIcons).
- **Vitest:** Framework de testes unitários para garantir a estabilidade das lógicas de negócio.

## 📁 Estrutura de Pastas

A arquitetura segue os princípios de modularidade e separação de preocupações:

```text
src/app/
├── core/             # Singleton services, models e guards globais
│   ├── services/     # ProjectService, ContactService
│   └── models/       # Interfaces TypeScript (Project, Category)
├── features/         # Módulos baseados em funcionalidades do usuário
│   ├── home/         # Página principal e seus sub-componentes (Hero, Gallery)
│   └── project-modal/# Lógica e template do player de vídeo em tela cheia
├── shared/           # Componentes e pipes reutilizáveis
│   ├── components/   # GlassCard, FloatingCTA, Buttons
│   └── animations/   # Helpers para Anime.js
├── layout/           # Componentes de estrutura fixa
│   ├── header/       # Navegação glassmorphic
│   └── footer/       # Rodapé minimalista
└── assets/           # Vídeos locais (loops), imagens e ícones
```

## 🛠️ Comandos de Desenvolvimento

No diretório `frontend/`, você pode executar:

| Comando         | Descrição                                                       |
| :-------------- | :-------------------------------------------------------------- |
| `npm start`     | Inicia o servidor de desenvolvimento em `http://localhost:4200` |
| `npm run build` | Compila o projeto para produção na pasta `dist/`                |
| `npm run watch` | Inicia o build em modo watch para desenvolvimento               |
| `npm test`      | Executa os testes unitários via Vitest                          |
| `ng lint`       | (Se configurado) Executa a análise estática do código           |

## 🎨 Design System & Estilização

### Cinematic Teal Theme

O projeto utiliza um conjunto de tokens de cores definidos no `tailwind.config.js` para manter a consistência visual:

- **Primary:** Cinematic Teal (Acento vibrante)
- **Background:** Dark Deep Gray / Black (Cinematográfico)
- **Glassmorphism:** Efeitos de desfoque de fundo em cabeçalhos e cards.

### Animações

As animações são tratadas como cidadãs de primeira classe. Helpers em `shared/animations/` garantem que as transições de entrada e saída mantenham o mesmo "feeling" de uma edição de vídeo profissional.

## 🌐 Deploy

A aplicação é configurada para build contínuo. O comando `npm run build` gera os arquivos estáticos otimizados para serem servidos pelo **Firebase Hosting**.

---

**Dica:** Certifique-se de atualizar o `formspreeUrl` no arquivo `environment.prod.ts` antes de realizar o deploy para produção.
