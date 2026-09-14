# Atividade 04 - Estilização e Flexbox em React Native

Atividade desenvolvida para a disciplina de **Programação para Dispositivos Móveis** (Universidade de Pernambuco - Campus Surubim).  
**Professor:** Augusto César Oliveira  
**Aluno(a):** [Seu Nome]

---

## 📱 Conteúdo Abordado
- `StyleSheet.create()` vs. Classes utilitárias do NativeWind (`className`).
- Flexbox no React Native (`flex-col` como padrão).
- `flexDirection` (`flex-row` / `flex-col`).
- `justifyContent` (`justify-start`, `justify-center`, `justify-between`, `justify-around`, `justify-evenly`).
- `alignItems` (`items-start`, `items-center`, `items-end`, `items-stretch`).
- `flexWrap` (`flex-wrap`) e espaçamento com `gap-*`.
- `flex-1` para ocupação de espaço disponível.
- Simulação de grid com `flex-wrap` + porcentagem de largura (ex: `w-[32%]`).
- Estilização condicional baseada em `useState`.

---

## 📝 Questões Resolvidas

1. **Componente `<IconeComTexto>`** (`components/IconeComTexto.tsx`):
   - Simula um ícone (`<View>` de 24x24) ao lado de um texto verticalmente centralizado utilizando `flex-row items-center`.

2. **Componente `<LinhaDeAcoes>`** (`components/LinhaDeAcoes.tsx`):
   - Posiciona um ícone à esquerda e o botão "Ver mais" à direita com espaçamento máximo entre eles usando `justify-between` em uma linha única.

3. **Componente `<ListaDeChips>`** (`components/ListaDeChips.tsx`):
   - Recebe um array de strings e renderiza chips arredondados com quebra de linha automática (`flex-wrap`) e espaçamento uniforme (`gap-2`). Testado com 9 linguagens.

4. **Componente `<GradeDePublicacoes>`** (`components/GradeDePublicacoes.tsx`):
   - Exibe publicações em proporção 1:1 (`aspect-square`) em uma grade de exatamente 3 colunas utilizando larguras em porcentagem (`w-[32%]`) e elementos fantasmas (ghost views) para garantir que a última linha incompleta mantenha o alinhamento esquerdo perfeito.

5. **Botão de Estado (`<BotaoSeguir>`)** (`components/BotaoSeguir.tsx`):
   - Botão reutilizável com `useState` que alterna dinamicamente o texto ("Seguir" vs "Seguindo") e classes do NativeWind (fundo azul preenchido vs fundo transparente com borda).

6. **Refatoração de Estilos** (`components/RefatoracaoEstilos.tsx`):
   - Converteu estilos baseados em `StyleSheet.create` (`flexDirection: 'row'`, `justifyContent: 'space-between'`, `flex: 1`, `alignItems: 'center'`) para classes utilitárias equivalentes do NativeWind (`flex-row justify-between`, `flex-1 items-center`), mantendo o resultado visual 100% idêntico.

---

## 🏆 Desafio Final — Tela de Perfil (`components/TelaPerfil.tsx`)
Uma tela de perfil completa simulando uma aplicação moderna:
- **Header:** Avatar circular à esquerda, nome e usuário empilhados verticalmente e centralizados.
- **Estatísticas:** Blocos de Posts, Seguidores e Seguindo distribuídos com espaço igual (`justify-around`).
- **Interesses:** Lista com 8+ chips de interesse utilizando o componente `<ListaDeChips>`.
- **Publicações:** Grade de 12 publicações em 3 colunas reaproveitando o `<GradeDePublicacoes>`, preenchendo toda a largura da tela.
- **Rodapé:** Botão de seguir ocupando a largura total da tela (`w-full`) reaproveitando o `<BotaoSeguir>`.

---

## 🚀 Como Executar o Projeto

### Pré-requisitos
Certifique-se de ter instalado em sua máquina:
- [Node.js](https://nodejs.org/) (versão 18 ou superior recomendada)
- npm ou yarn
- Aplicativo **Expo Go** instalado no seu smartphone (Android ou iOS) ou um emulador configurado.

### Passos para Instalação e Execução

1. Clone o repositório ou navegue até a pasta da atividade:
   ```bash
   cd programacao-mobile/atividade-04
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o projeto com o Expo:
   ```bash
   npx expo start
   ```

4. Escaneie o QR Code exibido no terminal utilizando o aplicativo **Expo Go** (no Android) ou a câmera (no iOS), ou pressione `a` para abrir no emulador Android / `i` para abrir no simulador iOS.

---

## 📸 Capturas de Tela
*(Insira aqui as capturas de tela dos componentes e da tela de perfil conforme solicitado na entrega do Google Classroom)*
- Aba **Desafio Perfil**: Visualização completa do perfil com header, estatísticas, interesses, grid de publicações e botão de seguir.
- Aba **Questões 1-6**: Demonstração interativa e individual de cada um dos exercícios solicitados.
