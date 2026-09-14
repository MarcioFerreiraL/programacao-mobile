# Atividade 04 - Estilização e Flexbox em React Native

Projeto desenvolvido para a disciplina de **Programação para Dispositivos Móveis** da **Universidade de Pernambuco (UPE) - Campus Surubim**.

- **Professor:** Augusto César Oliveira
- **Disciplina:** Programação para Dispositivos Móveis
- **Aluno(a):** Og Macin

---

## 📚 Conteúdo Abordado

- `StyleSheet.create()` vs. classes utilitárias do **NativeWind** (propriedade `className`).
- **Flexbox no React Native**: eixo principal padrão em coluna (`flex-col`), diferentemente da web.
- `flexDirection` (`flex-row` / `flex-col`).
- `justifyContent` (`justify-start`, `justify-center`, `justify-between`, `justify-around`, `justify-evenly`).
- `alignItems` (`items-start`, `items-center`, `items-end`, `items-stretch`).
- `flexWrap` (`flex-wrap`) e espaçamento uniforme entre itens com `gap-*`.
- `flex-1` para ocupação de todo o espaço disponível.
- Simulação de grid com `flex-wrap` + largura em porcentagem (`w-[31%]` para 3 colunas com espaço entre elas).
- Estilização condicional baseada em `useState`.

---

## 📝 Questões Desenvolvidas

### 1. Componente `<IconeComTexto>` (`components/IconeComTexto.tsx`)
- **Conceito:** Alinhamento no eixo cruzado com `items-center`.
- **Implementação:** Criação de um ícone simulado por uma `<View>` de 24×24 (`w-6 h-6`) e texto posicionado ao lado, perfeitamente centralizado verticalmente no eixo cruzado.

### 2. Componente `<LinhaDeAcoes>` (`components/LinhaDeAcoes.tsx`)
- **Conceito:** Distribuição com espaço máximo via `justify-between`.
- **Implementação:** Dentro de uma única `<View>` com `flex-row`, posiciona um ícone simulado à esquerda e um botão de texto **"Ver mais"** à direita utilizando a classe utilitária `justify-between`.

### 3. Componente `<ListaDeChips>` (`components/ListaDeChips.tsx`)
- **Conceito:** Quebra automática de linha (`flex-wrap`) e espaçamento uniforme (`gap-*`).
- **Implementação:** Recebe um array de strings via `props` e converte cada string em um chip (uma `<View>` com padding, borda e cantos arredondados). Quebra automaticamente de linha sem necessidade de margens manuais. Testado com 9 strings.

### 4. Componente `<GradeDePublicacoes>` (`components/GradeDePublicacoes.tsx`)
- **Conceito:** Grid com Flexbox puro e proporção 1:1 (`aspect-square`).
- **Implementação:** Exibe publicações recebidas via `props` em formato quadrado com proporção 1:1. Utiliza largura calculada em porcentagem (`w-[31%]`) combinada com `gap-2` para compor exatamente 3 colunas por linha sem margens sobrando nas bordas. Testado com 10 itens para demonstrar que a última linha incompleta preserva o alinhamento das colunas.

### 5. Botão de Estado (`<BotaoSeguir>`) (`components/BotaoSeguir.tsx`)
- **Conceito:** Estilização condicional a partir de estado (`useState`).
- **Implementação:** Componente único que alterna entre os estados **"Seguir"** e **"Seguindo"** ao toque. Quando em "Seguir", exibe fundo azul preenchido (`bg-blue-600`); quando em "Seguindo", exibe fundo transparente com borda azul (`bg-transparent border border-blue-600 text-blue-600`).

### 6. Refatoração de Estilos (`components/RefatoracaoEstilos.tsx`)
- **Conceito:** Migração de `StyleSheet.create` para NativeWind.
- **Implementação:** Reescreve o trecho com `row: { flexDirection: 'row', justifyContent: 'space-between', padding: 16 }` e `card: { flex: 1, alignItems: 'center' }` utilizando as classes equivalentes do NativeWind (`flex-row justify-between p-4` e `flex-1 items-center`), garantindo resultado visual idêntico.

---

## 🏆 Desafio Final — Tela de Perfil (`components/TelaPerfil.tsx`)

Tela de perfil moderna desenvolvida integralmente com NativeWind, reunindo todos os conceitos abordados:

1. **Header:** Avatar circular (`rounded-full`) à esquerda e, ao lado, nome e nome de usuário empilhados verticalmente, todos alinhados no centro do eixo cruzado (`items-center`).
2. **Estatísticas:** Três blocos com Posts, Seguidores e Seguindo dispostos lado a lado, distribuídos com espaço igual entre eles (`justify-around`).
3. **Interesses:** Lista com 8 chips de texto que quebra linha automaticamente com espaçamento uniforme (`<ListaDeChips>`).
4. **Publicações:** Reaproveitamento do componente `<GradeDePublicacoes>` com 12 publicações dispostas em 3 colunas, preenchendo a largura da tela.
5. **Rodapé:** Reaproveitamento do `<BotaoSeguir>` ocupando toda a largura da tela (`fullWidth`).

---

## 🚀 Como Executar o Projeto

### Pré-requisitos
- [Node.js](https://nodejs.org/) instalado (v18 ou superior recomendado)
- Gerenciador de pacotes `npm` ou `yarn`
- Aplicativo **Expo Go** instalado no smartphone (Android/iOS) ou um emulador configurado.

### Passos de Instalação e Execução

1. Acesse o diretório do projeto:
   ```bash
   cd atividade-04
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento do Expo:
   ```bash
   npx expo start
   ```

4. Para rodar:
   - **No celular:** Abra o aplicativo **Expo Go** e escaneie o QR Code exibido no terminal.
   - **No navegador (Web):** Pressione `w` no terminal ou execute `npx expo start --web`.
   - **No emulador Android:** Pressione `a` no terminal.
   - **No simulador iOS:** Pressione `i` no terminal.

---

## 📸 Prints de Tela dos Componentes e Telas

> *Adicione abaixo as capturas de tela solicitadas para a entrega da atividade:*

### Desafio Final - Tela de Perfil
*(Inserir print da tela de perfil completa aqui)*

### Questão 1: `<IconeComTexto>`
*(Inserir print do componente aqui)*

### Questão 2: `<LinhaDeAcoes>`
*(Inserir print do componente aqui)*

### Questão 3: `<ListaDeChips>`
*(Inserir print do componente com quebra de linha aqui)*

### Questão 4: `<GradeDePublicacoes>`
*(Inserir print da grade de 3 colunas com 10 itens aqui)*

### Questão 5: Botão de Estado (`<BotaoSeguir>`)
*(Inserir prints dos estados "Seguir" e "Seguindo" aqui)*

### Questão 6: Refatoração de Estilos
*(Inserir print do comparativo StyleSheet vs NativeWind aqui)*
