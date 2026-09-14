import "../global.css";
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, ScrollView, StatusBar } from 'react-native';

// Importação de todos os componentes criados (ajustado o caminho para ../components/)
import IconeComTexto from '../components/IconeComTexto';
import LinhaDeAcoes from '../components/LinhaDeAcoes';
import ListaDeChips from '../components/ListaDeChips';
import GradeDePublicacoes from '../components/GradeDePublicacoes';
import BotaoSeguir from '../components/BotaoSeguir';
import RefatoracaoEstilos from '../components/RefatoracaoEstilos';
import TelaPerfil from '../components/TelaPerfil';

export default function App() {
  const [tabAtiva, setTabAtiva] = useState<'perfil' | 'questoes'>('perfil');

  // Massa de teste para a Questão 3 (Acompanhamentos)
  const acompanhamentosTeste = [
    "Granola Crocante", "Banana Nanica", "Morango Fresco", "Leite em Pó", 
    "Calda de Chocolate", "Mel de Abelha", "Manga em Cubos", "Kiwi", "Coco Ralado"
  ];

  // Massa de teste para a Questão 4 (Galeria de Combos)
  const coresAcaiTeste = [
    "#4B0082", "#800080", "#8B008B",
    "#FF00FF", "#BA55D3", "#9932CC",
    "#9400D3", "#8A2BE2", "#483D8B",
    "#6A5ACD" 
  ];

  return (
    <SafeAreaView className="flex-1 bg-purple-50/20">
      <StatusBar barStyle="dark-content" backgroundColor="#fdfaff" />
      
      {/* Header Personalizado: Açaíteria */}
      <View className="bg-white border-b border-purple-100 px-4 py-3 flex-row items-center justify-between shadow-sm">
        <View>
          <Text className="text-[10px] font-black text-purple-300 uppercase tracking-[2px]">Purple Delivery</Text>
          <Text className="text-xl font-black text-purple-900">Açaí do Porto 🍇</Text>
        </View>

        {/* Menu de Navegação */}
        <View className="flex-row bg-purple-50 p-1 rounded-2xl border border-purple-100">
          <TouchableOpacity 
            onPress={() => setTabAtiva('perfil')}
            className={`px-4 py-2 rounded-xl ${tabAtiva === 'perfil' ? 'bg-purple-700 shadow-md' : ''}`}
          >
            <Text className={`text-xs font-bold ${tabAtiva === 'perfil' ? 'text-white' : 'text-purple-400'}`}>
              Cardápio
            </Text>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={() => setTabAtiva('questoes')}
            className={`px-4 py-2 rounded-xl ${tabAtiva === 'questoes' ? 'bg-purple-700 shadow-md' : ''}`}
          >
            <Text className={`text-xs font-bold ${tabAtiva === 'questoes' ? 'text-white' : 'text-purple-400'}`}>
              Componentes
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
          {/* Questão 1 */}
          <View className="bg-white rounded-3xl p-5 border border-purple-100 shadow-sm mb-6">
            <Text className="text-xs font-black text-purple-400 uppercase tracking-widest mb-3">
              Q1: Adicionais de Fruta
            </Text>
            <IconeComTexto texto="Banana com Aveia e Mel" corIcone="bg-yellow-400" />
          </View>

          {/* Questão 2 */}
          <View className="bg-white rounded-3xl p-5 border border-purple-100 shadow-sm mb-6">
            <Text className="text-xs font-black text-purple-400 uppercase tracking-widest mb-3">
              Q2: Atalhos de Compra
            </Text>
            <LinhaDeAcoes />
          </View>

          {/* Questão 3 */}
          <View className="bg-white rounded-3xl p-5 border border-purple-100 shadow-sm mb-6">
            <Text className="text-xs font-black text-purple-400 uppercase tracking-widest mb-3">
              Q3: Seletor de Acompanhamentos
            </Text>
            <ListaDeChips chips={acompanhamentosTeste} />
          </View>

          {/* Questão 4 */}
          <View className="bg-white rounded-3xl p-5 border border-purple-100 shadow-sm mb-6">
            <Text className="text-xs font-black text-purple-400 uppercase tracking-widest mb-3">
              Q4: Tamanhos Disponíveis
            </Text>
            <View className="mt-2">
              <GradeDePublicacoes publicacoes={coresAcaiTeste} />
            </View>
          </View>

          {/* Questão 5 */}
          <View className="bg-white rounded-3xl p-5 border border-purple-100 shadow-sm mb-6">
            <Text className="text-xs font-black text-purple-400 uppercase tracking-widest mb-4">
              Q5: Favoritar Combo
            </Text>
            <View className="items-start">
              <BotaoSeguir />
            </View>
          </View>

          {/* Questão 6 */}
          <View className="mb-6">
            <Text className="text-xs font-black text-purple-400 uppercase tracking-widest mb-3 px-1">
              Q6: Comparativo de Performance
            </Text>
            <RefatoracaoEstilos />
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
}
