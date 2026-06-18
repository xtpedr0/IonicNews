# IonicNews 📰

App de Notícias Personalizadas desenvolvido com **Ionic Framework** e **Angular**. O projeto consome a [NewsAPI](https://newsapi.org/) para exibir notícias em tempo real, permitindo filtragem por categorias, salvamento de favoritos e suporte offline via cache.

## 🚀 Funcionalidades

- **Autenticação**: Sistema de login e cadastro (Simulado via LocalStorage/AuthService).
- **Integração NewsAPI**: Busca de notícias globais e nacionais em tempo real.
- **Categorias**: Filtros para Tecnologia, Esportes, Negócios, Entretenimento e Geral.
- **Favoritos**: Salve notícias para ler depois, mesmo offline.
- **Cache Local**: Armazenamento de notícias visualizadas para economia de dados e performance.
- **Push Notifications**: Suporte estruturado via Capacitor Push Notifications.
- **Interface Responsiva**: Design adaptável para Mobile e Web usando componentes Ionic.

## 📸 Screenshots

Aqui estão algumas telas do aplicativo:

| Tela Inicial | Detalhes da Notícia | Favoritos |
| :---: | :---: | :---: |
| ![Home](./screenshots/home.png) | ![Detalhes](./screenshots/details.png) | ![Favoritos](./screenshots/favorites.png) |

*(Nota: Imagens ilustrativas para demonstração da interface)*

## 🛠️ Tecnologias Utilizadas

- **Ionic 7** + **Angular 17**
- **TypeScript**
- **Capacitor** (para funcionalidades nativas)
- **NewsAPI** (Consumo de REST API)
- **LocalStorage** (Persistência de dados e Cache)

## 🔧 Como Executar

1. Clone o repositório:
   ```bash
   git clone https://github.com/usuario/IonicNews.git
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Configure sua chave da NewsAPI em `src/environments/environment.ts`:
   ```typescript
   newsApiKey: 'SUA_CHAVE_AQUI'
   ```
4. Inicie o servidor de desenvolvimento:
   ```bash
   ionic serve
   ```

## 📄 Licença

Este projeto está sob a licença **MIT**. Veja o arquivo [LICENSE](./LICENSE) para mais detalhes.

---
Projeto desenvolvido como Atividade Final Complementar.
