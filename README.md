# 📚 Educa Livre

[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.5.0-646CFF?logo=vite)](https://vitejs.dev/)
[![Firebase](https://img.shields.io/badge/Firebase-10.12.0-FFCA28?logo=firebase)](https://firebase.google.com/)
[![Material-UI](https://img.shields.io/badge/MUI-5.15.0-007FFF?logo=mui)](https://mui.com/)
[![Rive](https://img.shields.io/badge/Rive-Animations-FF4C4C?logo=rive)](https://rive.app/)
[![Anime.js](https://img.shields.io/badge/Anime.js-Animations-FF6B6B)](https://animejs.com/)
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

**Educa Livre** é uma plataforma web desenvolvida como parte do Projeto Integrador (PI), alinhada aos Objetivos de Desenvolvimento Sustentável da ONU: **Educação de Qualidade (ODS 4)** e **Igualdade de Gênero (ODS 5)**.

O sistema permite que pais, alunos, ex-alunos e professores consultem um ranking transparente de escolas brasileiras, baseado em dados públicos (IBGE) e avaliações verificadas da comunidade. O diferencial está na validação de vínculo dos avaliadores, garantindo a autenticidade das opiniões e combatendo a desinformação.

---

## ✨ Funcionalidades Principais

- 🔍 **Busca de Escolas:** Encontre instituições por nome ou localidade.
- 📊 **Ranking e Avaliações:** Visualize notas gerais e comentários segmentados por tipo de vínculo (Ex-Aluno, Professor, Pai/Mãe, Funcionário).
- 🌗 **Modo Claro/Escuro:** Design responsivo que se adapta automaticamente à preferência do sistema operacional.
- 🔐 **Autenticação Segura:** Login e cadastro utilizando Firebase Authentication (senhas hasheadas com scrypt).
- 👥 **Múltiplos Perfis de Usuário:** Diferentes papéis (roles) que no futuro determinarão permissões específicas para avaliação.
- 🛡️ **Segurança em Camadas:** Regras de segurança no Firestore que impedem acesso não autorizado aos dados.
- 📱 **Totalmente Responsivo:** Interface construída com Material-UI, adaptada para mobile, tablet e desktop.
- 🎭 **Mascote Interativo:** O Codexino acompanha o usuário com animações contextuais e expressivas em toda a plataforma.

---

## 🎭 Codexino — O Mascote Animado

O **Codexino** é o mascote oficial do Educa Livre, um personagem interativo construído com **Rive** e **Anime.js** que reage em tempo real às ações do usuário, tornando a experiência mais humana, acessível e memorável.

### 🎨 Design Conceitual

O Codexino é formado por **dois livros unidos pela lombada**, cada um em uma cor da identidade visual da plataforma:

| Lado | Cor | Função |
|------|-----|--------|
| 📘 Lado Azul | `#161EAD` | Tela de **Login** |
| 📗 Lado Roxo | `#8B2FC9` | Tela de **Cadastro** |

Ao alternar entre Login e Cadastro, o Codexino **gira suavemente** revelando o lado correspondente — o rosto do personagem está na lombada central, compartilhado entre os dois estados.

### 🤩 Interações e Animações

#### 🔐 Tela de Login / Cadastro

| Evento do Usuário | Reação do Codexino |
|-------------------|--------------------|
| Digitar a **senha** | Cobre os olhos com as duas mãos |
| Tentar espiar (animação cômica) | Uma mão desce levemente para "espiar" com expressão divertida |
| **Senha incorreta** | Expressão de desaprovação — sobrancelhas franzidas, boca torta |
| **Login bem-sucedido** | Expressão de alegria, braços abertos |
| Alternar entre Login ↔ Cadastro | Gira revelando o lado oposto do livro |

#### 🚀 Botão "Voltar ao Topo"

O Codexino também funciona como **botão de retorno ao topo da página**, com comportamentos únicos:

- 👀 **Olhos seguem o cursor do mouse** em tempo real (cálculo de ângulo via trigonometria)
- 🦸 Ao clicar, o personagem **voa em direção ao topo** da página com a capa esvoaçando
- 🌀 A capa balança com física suave via **Anime.js** durante o voo

### 🛠️ Stack de Animação

```
Rive (.riv)         → State Machine do personagem (estados, transições, expressões)
Anime.js            → Animações de voo, física da capa, transições de página
React Hooks         → useEffect + useRef para captura de eventos e controle de estado
SVG nativo          → Pupilas seguindo o mouse (cx/cy calculados via mousemove)
```

### 📦 Instalação das Dependências de Animação

```bash
# Rive para React
npm install @rive-app/react-canvas

# Anime.js para animações complementares
npm install animejs
```

### 🗂️ Estrutura de Arquivos de Animação

```
src/
├── assets/
│   ├── codexino.riv          # Arquivo de animação principal (Rive)
│   └── Codexino.svg          # SVG original para referência e botão de topo
├── components/
│   ├── Codexino/
│   │   ├── CodexinoLogin.jsx      # Mascote na tela de autenticação
│   │   ├── CodexinoScrollTop.jsx  # Mascote como botão de voltar ao topo
│   │   └── codexino.css           # Estilos e keyframes do personagem
```

---

## 🚀 Tecnologias Utilizadas

| Tecnologia | Aplicação |
|------------|-----------|
| **React 18** | Biblioteca para construção da interface de usuário. |
| **Vite** | Build tool ultrarrápida para desenvolvimento e produção. |
| **Firebase** | Backend as a Service: Authentication (autenticação) e Firestore (banco de dados NoSQL). |
| **Material-UI (MUI)** | Biblioteca de componentes React para um design profissional e acessível. |
| **React Router DOM** | Gerenciamento de rotas da aplicação (SPA). |
| **Context API** | Gerenciamento de estado global da autenticação. |
| **Rive** | Motor de animação interativa para o mascote Codexino (State Machine). |
| **Anime.js** | Biblioteca JavaScript para animações de UI, física e transições de página. |

---

## 📦 Como Executar Localmente

### Pré-requisitos
- Node.js **20+** (recomendado) ou Node.js **18** (compatível com Vite 5.5.0)
- Gerenciador de pacotes **npm** ou **yarn**

### Passo a Passo

1. **Clone o repositório:**
```bash
git clone https://github.com/seu-usuario/educa-livre.git
cd educa-livre
```

2. **Instale as dependências principais:**
```bash
npm install
npm install firebase react-router-dom
npm install @mui/material @emotion/react @emotion/styled @mui/icons-material
```

3. **Instale as dependências de animação:**
```bash
npm install @rive-app/react-canvas animejs
```

4. **Configure o Firebase:**
   - Crie um projeto no [Firebase Console](https://console.firebase.google.com/).
   - Ative os serviços **Authentication** (com Email/Senha) e **Firestore Database**.
   - Copie as credenciais do seu app web e cole no arquivo `src/firebase.js`.

5. **Execute o projeto em modo de desenvolvimento:**
```bash
npm run dev
```

---

## 🗺️ Roadmap de Animações

- [x] SVG original do Codexino criado no Inkscape
- [x] Olhos seguindo o mouse (JavaScript puro — versão ASP.NET)
- [ ] Migração do Codexino para Rive com State Machine completa
- [ ] Animação de alternância Login ↔ Cadastro (rotação do livro)
- [ ] Reações à digitação de senha (cobrir olhos + espiar)
- [ ] Expressão de erro de autenticação
- [ ] Botão de voltar ao topo com animação de voo
- [ ] Integração final com o projeto React/Firebase

---

## 📝 Licença

Este projeto está licenciado sob a **GNU General Public License v3.0 (GPL-3.0)**.
Você pode usar, estudar, modificar e distribuir este software livremente, desde que mantenha os créditos e compartilhe as melhorias sob a mesma licença.

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

---

## 👨‍🎓 Sobre o Projeto Acadêmico

Desenvolvido como **Projeto Integrador**, alinhado aos seguintes Objetivos de Desenvolvimento Sustentável da ONU:

| ODS | Objetivo | Aplicação no Projeto |
|-----|----------|----------------------|
| 🎓 **ODS 4** | Educação de Qualidade | Ranking transparente de escolas com dados verificados do IBGE |
| ⚖️ **ODS 5** | Igualdade de Gênero | Avaliações que refletem um ambiente escolar equitativo para todos |

---

<div align="center">

**Feito com 💙 e 📚 por Marcio Henrique de Tulio**

*"A educação é a arma mais poderosa que você pode usar para mudar o mundo."* — Nelson Mandela

</div>
