# PoundFlats Mobile Application 📱

PoundFlats é uma aplicação mobile criada para facilitar a gestão e configuração de imóveis de forma intuitiva e elegante. Nosso foco é proporcionar uma experiência moderna e eficiente, utilizando tecnologias de ponta para garantir alto desempenho e reutilização de componentes.

---

## ✨ **Pontos Fortes do Projeto**

### 🏗️ **Arquitetura de Referência**

A aplicação utiliza a **Nova Arquitetura do React Native** desenvolvida pela Meta, incluindo:

- **Fabric**: Um novo sistema de renderização que melhora o desempenho e a interatividade.
- **TurboModules**: Sistema que otimiza a comunicação entre JavaScript e módulos nativos, tornando a aplicação mais rápida e modular.

### 🎨 **Componentes SVG Reutilizáveis**

- Todos os ícones e imagens SVG foram transformados em componentes React Native utilizando o site [SVG Viewer](https://www.svgviewer.dev/svg-to-react-native-jsx).
- Essa abordagem permite maior reutilização de ícones em diferentes partes do app, mantendo consistência visual e organização do código.

### 🚀 **Criação com Expo**

- O projeto foi iniciado com o comando `expo init --template blank`, utilizando o **template blank** para uma configuração inicial limpa e flexível.
- O **Expo** fornece ferramentas otimizadas para desenvolvimento, como live reload e suporte multiplataforma (iOS, Android).

### 🧭 **Navegação Configurada com React Navigation**

- A navegação foi implementada com **React Navigation**, que permite transições suaves entre telas e garante uma experiência intuitiva ao usuário.
- Configurações incluem navegação empilhada e modular para escalabilidade futura.

### 🔄 **Reutilização de Componentes**

- Todos os componentes principais, como botões, textos estilizados e ícones SVG, foram desenvolvidos pensando na **reutilização**.
- Isso reduz redundâncias no código, facilita manutenções e torna o projeto mais escalável.

---

## 🛠️ **Estrutura do Projeto**

```plaintext

├── assets/          # Ícones, imagens e fontes (SVGs otimizados como componentes React)
src/
├── components/      # Componentes reutilizáveis (botões, inputs, etc.)
├── navigation/      # Configuração de rotas e navegação
├── screens/         # Telas do app
├── styles/          # Estilos e Fontes globais e variáveis de tema
├── App.js           # Arquivo principal do projeto

```
