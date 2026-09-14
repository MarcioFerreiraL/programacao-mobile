import "../global.css";
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, ScrollView, StatusBar } from 'react-native';

// Importação dos componentes da atividade
import IconeComTexto from '../components/IconeComTexto';
import LinhaDeAcoes from '../components/LinhaDeAcoes';
import ListaDeChips from '../components/ListaDeChips';
import GradeDePublicacoes from '../components/GradeDePublicacoes';
import BotaoSeguir from '../components/BotaoSeguir';
import RefatoracaoEstilos from '../components/RefatoracaoEstilos';
import TelaPerfil from '../components/TelaPerfil';

export default function App() {
  const [tabAtiva, setTabAtiva] = useState<'perfil' | 'questoes'>('perfil');

  // Massa de teste para a Questão 3 (pelo menos 8 strings para testar quebra de linha)
  const chipsTesteQ3 = [
    "React Native", "TypeScript", "TailwindCSS", "Flexbox",
    "Mobile", "Android", "iOS", "NativeWind", "Expo"
  ];

  // Massa de teste para a Questão 4 (pelo menos 10 itens para testar linha incompleta)
  const publicacoesTesteQ4 = [
    "#2563eb", "#3b82f6", "#60a5fa",
    "#0284c7", "#0ea5e9", "#38bdf8",
    "#0d9488", "#14b8a6", "#2dd4bf",
    "#059669" // 10º item para validar última linha incompleta alinhada
  ];

  return (
    <SafeAreaView className="flex-1 bg-slate-100">
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      
      {/* Topo do App: Identificação da Atividade e Navegação */}
      <View className="bg-white border-b border-slate-200 px-4 py-3 shadow-sm">
        <View className="flex-row items-center justify-between mb-3">
          <View>
            <Text className="text-[11px] font-bold text-blue-600 uppercase tracking-wider">
              UPE Campus Surubim • Aula 04
            </Text>
            <Text className="text-lg font-extrabold text-slate-900">
              Estilização e Flexbox
            </Text>
          </View>
        </View>

        {/* Seletor de Abas */}
        <View className="flex-row bg-slate-100 p-1 rounded-xl">
          <TouchableOpacity 
            onPress={() => setTabAtiva('perfil')}
            className={`flex-1 py-2 rounded-lg items-center ${
              tabAtiva === 'perfil' ? 'bg-white shadow-sm' : ''
            }`}
          >
            <Text className={`text-xs font-bold ${
              tabAtiva === 'perfil' ? 'text-blue-600' : 'text-slate-600'
            }`}>
              Desafio Final (Perfil)
            </Text>
          </TouchableOpacity>

          <TouchableOpacity 
            onPress={() => setTabAtiva('questoes')}
            className={`flex-1 py-2 rounded-lg items-center ${
              tabAtiva === 'questoes' ? 'bg-white shadow-sm' : ''
            }`}
          >
            <Text className={`text-xs font-bold ${
              tabAtiva === 'questoes' ? 'text-blue-600' : 'text-slate-600'
            }`}>
              Questões 1 a 6
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Conteúdo Principal */}
      {tabAtiva === 'perfil' ? (
        <TelaPerfil />
      ) : (
        <ScrollView 
          className="flex-1 px-4 py-4"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 40 }}
        >
          {/* Questão 1: Componente <IconeComTexto> */}
          <View className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm mb-4">
            <Text className="text-xs font-extrabold text-blue-600 uppercase tracking-wider mb-1">
              Questão 1: Componente &lt;IconeComTexto&gt;
            </Text>
            <Text className="text-xs text-slate-500 mb-3">
              Ícone de 24×24 com texto centralizado verticalmente (items-center).
            </Text>
            <IconeComTexto texto="Texto verticalmente centralizado com o ícone" />
          </View>

          {/* Questão 2: Componente <LinhaDeAcoes> */}
          <View className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm mb-4">
            <Text className="text-xs font-extrabold text-blue-600 uppercase tracking-wider mb-1">
              Questão 2: Componente &lt;LinhaDeAcoes&gt;
            </Text>
            <Text className="text-xs text-slate-500 mb-3">
              Ícone à esquerda e botão de texto "Ver mais" à direita com justify-between.
            </Text>
            <LinhaDeAcoes />
          </View>

          {/* Questão 3: Componente <ListaDeChips> */}
          <View className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm mb-4">
            <Text className="text-xs font-extrabold text-blue-600 uppercase tracking-wider mb-1">
              Questão 3: Componente &lt;ListaDeChips&gt;
            </Text>
            <Text className="text-xs text-slate-500 mb-3">
              Array de strings com quebra automática (flex-wrap) e espaçamento uniforme (gap-2). Testado com 9 itens (mínimo 8).
            </Text>
            <ListaDeChips chips={chipsTesteQ3} />
          </View>

          {/* Questão 4: Componente <GradeDePublicacoes> */}
          <View className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm mb-4">
            <Text className="text-xs font-extrabold text-blue-600 uppercase tracking-wider mb-1">
              Questão 4: Componente &lt;GradeDePublicacoes&gt;
            </Text>
            <Text className="text-xs text-slate-500 mb-3">
              Quadrados (proporção 1:1) em exatamente 3 colunas. Testado com 10 itens para demonstrar alinhamento da linha incompleta.
            </Text>
            <GradeDePublicacoes publicacoes={publicacoesTesteQ4} />
          </View>

          {/* Questão 5: Botão de Estado (<BotaoSeguir>) */}
          <View className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm mb-4">
            <Text className="text-xs font-extrabold text-blue-600 uppercase tracking-wider mb-1">
              Questão 5: Botão de Estado (&lt;BotaoSeguir&gt;)
            </Text>
            <Text className="text-xs text-slate-500 mb-3">
              Alterna entre "Seguir" (azul preenchido) e "Seguindo" (fundo transparente com borda) via useState.
            </Text>
            <View className="items-start">
              <BotaoSeguir />
            </View>
          </View>

          {/* Questão 6: Refatoração de Estilos */}
          <View className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm mb-4">
            <Text className="text-xs font-extrabold text-blue-600 uppercase tracking-wider mb-1">
              Questão 6: Refatoração de Estilos
            </Text>
            <Text className="text-xs text-slate-500 mb-3">
              Reescrita de StyleSheet.create para classes NativeWind com resultado visual idêntico.
            </Text>
            <RefatoracaoEstilos />
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
}
