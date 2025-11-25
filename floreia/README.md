# 🌸 FloreIA

**FloreIA** é um aplicativo mobile de apoio para pessoas que lidam com compulsões e seus familiares. O app oferece suporte diário através de mensagens motivacionais, técnicas de respiração e concentração, bot de apoio, gamificação e contatos de emergência.

## ✨ Funcionalidades

### Para Pessoas em Recuperação
- 🎯 **Onboarding personalizado** - Configure suas compulsões e objetivos
- 😊 **Check-in de humor** - Registre como está se sentindo diariamente
- 🧘 **Técnicas de apoio** - Respiração, concentração, mindfulness e ancoragem
- 💬 **Bot de apoio** - Conversas com respostas programadas e sugestões personalizadas
- 🏆 **Gamificação** - Acompanhe seu progresso com selos e conquistas
- 🆘 **SOS** - Acesso rápido a contatos de emergência e técnicas de crise
- 📊 **Histórico** - Visualize seu progresso ao longo do tempo
- 💚 **Mensagens motivacionais** - Receba incentivo diário

### Para Familiares
- 🤝 **Modo familiar** - Interface adaptada para quem apoia
- 📚 **Recursos educacionais** - Aprenda como ajudar
- 👥 **Grupos de apoio** - Encontre comunidades de suporte

### Características Técnicas
- 🌍 **Multi-idioma** - Português (BR), Español, English
- 📱 **Cross-platform** - Android e iOS
- 💾 **Offline-first** - Funciona sem internet
- 🔒 **Privacidade** - Dados armazenados apenas no dispositivo
- 🎨 **Interface tranquila** - Design que transmite paz

## 🚀 Começando

### Pré-requisitos

- Node.js 18+ ([Download](https://nodejs.org/))
- npm ou yarn
- Expo CLI (`npm install -g expo-cli`)
- Para testar:
  - **Android**: Expo Go app ([Google Play](https://play.google.com/store/apps/details?id=host.exp.exponent))
  - **iOS**: Expo Go app ([App Store](https://apps.apple.com/app/expo-go/id982107779))

### Instalação

1. **Clone o repositório**
   ```bash
   cd floreia
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento**
   ```bash
   npm start
   ```

4. **Execute no seu dispositivo**
   - Escaneie o QR code com o app Expo Go (Android)
   - Escaneie o QR code com a câmera (iOS)

   Ou execute em um emulador:
   ```bash
   npm run android  # Android
   npm run ios      # iOS (somente macOS)
   ```

## 📁 Estrutura do Projeto

```
floreia/
├── src/
│   ├── components/      # Componentes reutilizáveis
│   ├── screens/         # Telas do app
│   │   ├── OnboardingScreen.tsx
│   │   ├── HomeScreen.tsx
│   │   ├── MoodCheckScreen.tsx
│   │   ├── TechniquesScreen.tsx
│   │   ├── TechniqueDetailScreen.tsx
│   │   ├── SOSScreen.tsx
│   │   ├── AchievementsScreen.tsx
│   │   ├── ProfileScreen.tsx
│   │   └── BotScreen.tsx
│   ├── navigation/      # Configuração de navegação
│   ├── services/        # Serviços (storage, API, etc)
│   ├── locales/         # Traduções (PT-BR, ES, EN)
│   ├── types/           # Tipos TypeScript
│   ├── utils/           # Funções utilitárias
│   ├── constants/       # Constantes do app
│   ├── data/            # Dados estáticos (mensagens, técnicas)
│   └── theme/           # Cores e estilos
├── assets/              # Imagens, fontes, etc
├── App.tsx              # Componente raiz
└── package.json
```

## 🎨 Tipos de Compulsões Suportadas

- 🍽️ Comida
- 💊 Remédios
- 🚬 Drogas
- 🛍️ Compras
- 🎰 Jogos/Apostas
- 🍺 Bebida/Álcool
- 📌 Outras

## 🧘 Técnicas Disponíveis

### Respiração
- **4-7-8** - Técnica clássica para ansiedade
- **Respiração Quadrada** - Foco e calma

### Ancoragem
- **5-4-3-2-1** - Trazer você de volta ao presente

### Concentração
- **Foco no Momento** - Exercício de atenção plena

### Mindfulness
- **Atenção Plena Rápida** - Para momentos difíceis

## 🌍 Idiomas

O FloreIA está disponível em:
- 🇧🇷 Português (Brasil)
- 🇪🇸 Español
- 🇺🇸 English

Altere o idioma nas configurações do perfil.

## 💾 Armazenamento de Dados

Todos os dados são armazenados localmente no dispositivo usando AsyncStorage:
- ✅ Total privacidade
- ✅ Funciona offline
- ✅ Dados persistem entre sessões
- ❌ Não há backup na nuvem (por segurança)

**Dados armazenados:**
- Perfil do usuário
- Compulsões configuradas
- Registros de humor
- Conquistas e progresso
- Contatos de emergência

## 🔐 Privacidade e Segurança

- 🔒 **Dados locais**: Tudo fica no seu dispositivo
- 🚫 **Sem rastreamento**: Não coletamos dados pessoais
- 🔐 **Sem login**: Não é necessário criar conta
- 💚 **Open source**: Código aberto e transparente

## 🆘 Recursos de Emergência

O app detecta sinais de crise e sugere:
- 📞 CVV - 188 (24h, gratuito)
- 🚨 Ligar para contatos de emergência
- 🌬️ Técnicas de respiração imediatas
- 💬 Conversa com o bot de apoio

**IMPORTANTE**: FloreIA é uma ferramenta de apoio, não substitui tratamento profissional.

## 🛠️ Tecnologias Utilizadas

- **React Native** - Framework mobile
- **Expo** - Plataforma de desenvolvimento
- **TypeScript** - Tipagem estática
- **React Navigation** - Navegação entre telas
- **i18next** - Internacionalização
- **AsyncStorage** - Armazenamento local
- **React Native Paper** - Componentes UI

## 📱 Testando o App

### No Expo Go

1. Instale o Expo Go no seu celular
2. Execute `npm start`
3. Escaneie o QR code
4. O app será carregado

### No Emulador Android

```bash
npm run android
```

### No Simulador iOS (macOS apenas)

```bash
npm run ios
```

## 🚧 Próximos Passos / Roadmap

Funcionalidades planejadas:

- [ ] **IA integrada** - Usar API de IA para respostas mais inteligentes
- [ ] **Notificações** - Lembretes e mensagens motivacionais
- [ ] **Modo familiar conectado** - Compartilhar dados com familiar (com permissão)
- [ ] **Gráficos de progresso** - Visualizar evolução
- [ ] **Biblioteca de recursos** - Livros, vídeos, artigos
- [ ] **Grupos de apoio** - Encontrar grupos por localização
- [ ] **Diário** - Escrever pensamentos e sentimentos
- [ ] **Timer de meditação** - Guia passo a passo das técnicas
- [ ] **Backup na nuvem** - Opcional, criptografado
- [ ] **Modo escuro** - Interface dark mode

## 🤝 Contribuindo

Contribuições são muito bem-vindas! Este é um projeto de impacto social.

1. Fork o projeto
2. Crie sua branch (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto é open source e está disponível sob a licença MIT.

## 💚 Sobre o FloreIA

FloreIA foi criado com amor e empatia para ajudar pessoas que lutam contra compulsões e seus familiares. A recuperação é uma jornada, e você não está sozinho.

**FloreIA** vem de "Florescer com IA" - porque acreditamos que todos podem florescer, um dia de cada vez. 🌸

---

**Importante**: Se você ou alguém que você conhece está em crise, procure ajuda profissional imediatamente:
- 🇧🇷 CVV: 188 (24h, gratuito)
- 🇧🇷 CAPS: Centros de Atenção Psicossocial
- 🇧🇷 SAMU: 192
- 🇺🇸 Crisis Hotline: 988
- 🌍 [Lista de linhas de ajuda internacionais](https://findahelpline.com/)

---

Feito com 💚 para fazer a diferença
