# 📚 Educa Livre

[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.5.0-646CFF?logo=vite)](https://vitejs.dev/)
[![Firebase](https://img.shields.io/badge/Firebase-10.12.0-FFCA28?logo=firebase)](https://firebase.google.com/)
[![Material-UI](https://img.shields.io/badge/MUI-5.15.0-007FFF?logo=mui)](https://mui.com/)
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

---

## 📦 Como Executar Localmente

### Pré-requisitos
- Node.js **20+** (recomendado) ou Node.js **18** (compatível com Vite 5.5.0)
- Gerenciador de pacotes **npm** ou **yarn**

### Passo a Passo

1. **Clone o repositório:**
     git clone https://github.com/seu-usuario/educa-livre.git

2. **Instale as Dependências:**
     npm install

3. **Configure o Firebase:**
    Crie um projeto no Firebase Console.
    Ative os serviços Authentication (com Email/Senha) e Firestore Database.
    Copie as credenciais do seu app web e cole no arquivo src/firebase.js.

4. **Execute o projeto em modo de desenvolvimento**
    npm run dev

📝 Licença

Este projeto está licenciado sob a GNU General Public License v3.0 (GPL-3.0).
Você pode usar, estudar, modificar e distribuir este software livremente, desde que mantenha os créditos e compartilhe as melhorias sob a mesma licença.

👨‍🎓 Sobre o Projeto Acadêmico

Desenvolvido como Projeto Integrador, alinhado aos seguintes Objetivos de Desenvolvimento Sustentável da ONU:

    ODS 4 – Educação de Qualidade: Promover oportunidades de aprendizagem inclusivas e transparentes.

    ODS 5 – Igualdade de Gênero: Garantir que as avaliações reflitam um ambiente escolar equitativo para meninas e meninos.
