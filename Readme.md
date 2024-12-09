# PoundFlats Mobile Application 📱

PoundFlats é uma aplicação mobile criada para facilitar a gestão e configuração de imóveis de forma intuitiva e elegante. Nosso foco é proporcionar uma experiência moderna e eficiente, utilizando tecnologias de ponta para garantir alto desempenho e reutilização de componentes.

---

Implementação do Deploy e Teste do Aplicativo PoundFlats com Expo Go
🚀 Passo a Passo para Deploy e Teste no Expo Go
Passo 1: Baixar o aplicativo Expo Go
Android: Acesse a Google Play Store e baixe o Expo Go.
iOS: Acesse a App Store e baixe o Expo Go.
Passo 2: Acesse o Link de Prévia
Após instalar o Expo Go, abra o aplicativo no seu dispositivo.
Use o link abaixo para acessar o projeto PoundFlats:
Link: Teste o PoundFlats.
Opções para abrir o projeto no Expo Go
Colando o Link Manualmente:
Copie o link.
No Expo Go, cole-o na barra de pesquisa e pressione Enter.
Escaneando o QR Code:
Caso esteja acessando este link no computador, abra o Expo Go no celular.
Escaneie o QR Code disponível no site.
Passo 3: Teste o Aplicativo
Assim que o link for carregado, o aplicativo será exibido no Expo Go. Navegue pelas telas e explore as funcionalidades do app.

Passo 4: Feedback
Teste as funcionalidades do app, interaja com os componentes e explore a interface.
Compartilhe seu feedback sobre melhorias ou possíveis ajustes.
Adicionando ao README.md
Atualize o README.md com as informações para que outros desenvolvedores ou testers possam acessar o projeto de forma intuitiva. Um exemplo de como pode ser incluído no seu arquivo:

markdown
Copiar código

## 📱 Teste o PoundFlats com Expo Go

### 🛠 Passos para Testar o Aplicativo:

#### Passo 1: Baixar o Expo Go

- **Android:** Baixe o [Expo Go na Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent).
- **iOS:** Baixe o [Expo Go na App Store](https://apps.apple.com/app/expo-go/id982107779).

#### Passo 2: Acesse o Link do Aplicativo

- Abra o Expo Go no seu dispositivo e cole o link abaixo:
  - **[Teste o PoundFlats](https://expo.dev/preview/update?message=Criando%20projeto&updateRuntimeVersion=1.0.0&createdAt=2024-12-09T01%3A39%3A31.582Z&slug=exp&projectId=2e9ce15f-49e6-4c57-b10d-9eaf51bb2955&group=06c7c5d0-969d-40eb-ab75-067a692d48dc)**.

#### Passo 3: Teste e Explore

- Navegue pelas telas e interaja com o aplicativo.

#### Passo 4: Envie seu Feedback

- Compartilhe sugestões ou melhorias para o app.

## ✨ **Caracteristicas do Projeto**

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
