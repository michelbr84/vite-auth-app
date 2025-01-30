# 🛡️ Vite Auth App

Um projeto simples de **Login e Cadastro** utilizando **React + Vite + TypeScript**. O usuário pode se cadastrar com **nome e senha**, e após o login será redirecionado para uma página de boas-vindas. O sistema impede o cadastro de nomes duplicados e exige senha para login.

## 🚀 Tecnologias Utilizadas

- ⚡ [Vite](https://vitejs.dev/) (Build ultra rápido)
- ⚛️ [React](https://react.dev/)
- 🔷 [TypeScript](https://www.typescriptlang.org/)
- 🔄 [React Router](https://reactrouter.com/) (Navegação entre páginas)
- 🛠️ Context API (Gerenciamento de autenticação)
- 🎨 CSS Responsivo

## 📂 Estrutura do Projeto

vite-auth-app/ ├── public/ # Arquivos estáticos (favicons, imagens, etc.) ├── src/ │ ├── components/ # Componentes reutilizáveis (se necessário) │ ├── context/ # Contexto para autenticação │ │ ├── AuthContext.tsx # Gerenciamento de login e registro │ ├── pages/ # Páginas da aplicação │ │ ├── Home.tsx # Página inicial (Login/Cadastro) │ │ ├── UserPage.tsx # Página de boas-vindas do usuário │ ├── App.tsx # Configuração das rotas │ ├── main.tsx # Ponto de entrada da aplicação │ ├── index.css # Estilos globais ├── .gitignore # Arquivos a serem ignorados pelo Git ├── tsconfig.json # Configuração do TypeScript ├── vite.config.ts # Configuração do Vite ├── package.json # Dependências do projeto ├── README.md # Documentação do projeto


## 📥 Como Instalar e Rodar o Projeto

### 1️⃣ **Clone o Repositório**
```sh
git clone https://github.com/seu-usuario/vite-auth-app.git
cd vite-auth-app

2️⃣ Instale as Dependências
Se estiver usando pnpm:

sh
Copy
Edit
pnpm install
Ou, se estiver usando npm:

sh
Copy
Edit
npm install
3️⃣ Rodando o Servidor
Para iniciar o projeto em modo de desenvolvimento:

sh
Copy
Edit
pnpm dev
Ou:

sh
Copy
Edit
npm run dev
O projeto estará disponível em http://localhost:5173/ 🚀

4️⃣ Gerando a Versão de Produção
sh
Copy
Edit
pnpm build
Ou:

sh
Copy
Edit
npm run build
Os arquivos otimizados ficarão na pasta dist/.

📸 Demonstração
🖥️ Tela de Login	🏠 Página do Usuário
📜 Licença
Este projeto está sob a licença MIT. Sinta-se à vontade para usá-lo e melhorá-lo. 😊