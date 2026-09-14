import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import ListaDeChips from './ListaDeChips';
import GradeDePublicacoes from './GradeDePublicacoes';
import BotaoSeguir from './BotaoSeguir';

export default function TelaPerfil() {
  // Dados fictícios da Açaíteria
  const nome = "Açaí do Porto 🍇";
  const usuario = "O melhor açaí da região";
  const avatarUrl = "https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&q=80&w=200&h=200";

  const estatisticas = [
    { label: "Combos", valor: "24" },
    { label: "Clientes", valor: "1.2k" },
    { label: "Nota", valor: "4.9 ⭐" }
  ];

  const acompanhamentos = [
    "Leite Ninho",
    "Nutella",
    "Morango",
    "Banana",
    "Granola",
    "Ovomaltine",
    "Paçoca",
    "Leite Condensado"
  ];

  // Cores que lembram açaí e frutas
  const coresCombos = [
    "#4B0082", "#800080", "#8B008B",
    "#FF00FF", "#BA55D3", "#9932CC",
    "#9400D3", "#8A2BE2", "#483D8B",
    "#6A5ACD", "#7B68EE", "#D8BFD8"
  ];

  return (
    <ScrollView 
      className="flex-1 bg-white" 
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 40 }}
    >
      {/* 1. Header: Avatar circular à esquerda, nome e @ empilhados à direita. Alinhamento no centro. */}
      <View className="flex-row items-center px-6 py-6 border-b border-purple-50">
        <Image 
          source={{ uri: avatarUrl }}
          className="w-24 h-24 rounded-3xl border-2 border-purple-600 shadow-lg"
        />
        <View className="ml-5 flex-1 justify-center">
          <Text className="text-2xl font-black text-purple-950 leading-tight">
            {nome}
          </Text>
          <Text className="text-sm font-semibold text-purple-500 mt-1 italic">
            {usuario}
          </Text>
        </View>
      </View>

      {/* 2. Estatísticas: Três blocos com espaço igual */}
      <View className="flex-row justify-between px-8 py-5 border-b border-purple-50 bg-purple-50/30">
        {estatisticas.map((estat, index) => (
          <View key={index} className="items-center flex-1">
            <Text className="text-lg font-black text-purple-900">{estat.valor}</Text>
            <Text className="text-xs text-purple-400 font-bold mt-0.5 uppercase tracking-tighter">{estat.label}</Text>
          </View>
        ))}
      </View>

      {/* 3. Interesses (Acompanhamentos): Seção com chips */}
      <View className="px-6 py-6 border-b border-purple-50">
        <Text className="text-xs font-black text-purple-300 uppercase tracking-widest mb-4">
          Acompanhamentos Favoritos
        </Text>
        <ListaDeChips chips={acompanhamentos} />
      </View>

      {/* 4. Publicações (Galeria de Combos): Grade de publicações */}
      <View className="py-6">
        <Text className="text-xs font-black text-purple-300 uppercase tracking-widest mb-4 px-6">
          Galeria de Combos
        </Text>
        
        <View className="px-1">
          <GradeDePublicacoes publicacoes={coresCombos} />
        </View>
      </View>

      {/* 5. Rodapé: Botão de favoritar ocupando a largura total */}
      <View className="px-6 pt-2">
        <BotaoSeguir fullWidth={true} />
      </View>
    </ScrollView>
  );
}
