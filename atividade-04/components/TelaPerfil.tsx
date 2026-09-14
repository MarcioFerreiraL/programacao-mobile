import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import ListaDeChips from './ListaDeChips';
import GradeDePublicacoes from './GradeDePublicacoes';
import BotaoSeguir from './BotaoSeguir';

export default function TelaPerfil() {
  // Dados do Perfil
  const nome = "Mariana Silva";
  const usuario = "@mariana.dev";
  const bio = "Desenvolvedora Mobile & Frontend 🚀 Apaixonada por React Native, interfaces limpas e experiências fluidas.";
  const avatarUrl = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200";

  // Estatísticas: Três blocos com Posts, Seguidores e Seguindo
  const estatisticas = [
    { label: "Posts", valor: "142" },
    { label: "Seguidores", valor: "3.5k" },
    { label: "Seguindo", valor: "480" }
  ];

  // Interesses: Lista de 6+ chips de texto
  const interesses = [
    "React Native",
    "TypeScript",
    "Tailwind CSS",
    "Mobile Dev",
    "UI/UX Design",
    "Flexbox",
    "Expo",
    "Open Source"
  ];

  // Publicações: Grade de pelo menos 9 publicações (aqui com 12 publicações)
  const publicacoes = [
    "#2563eb", "#3b82f6", "#60a5fa",
    "#0284c7", "#0ea5e9", "#38bdf8",
    "#0d9488", "#14b8a6", "#2dd4bf",
    "#059669", "#10b981", "#34d399"
  ];

  return (
    <ScrollView 
      className="flex-1 bg-white" 
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 40 }}
    >
      {/* 
        1. Header:
        - Avatar circular à esquerda
        - Nome + nome de usuário empilhados verticalmente ao lado
        - Tudo alinhado no centro do eixo cruzado (items-center)
      */}
      <View className="flex-row items-center px-5 py-6 border-b border-slate-100">
        <Image 
          source={{ uri: avatarUrl }}
          className="w-20 h-20 rounded-full border-2 border-blue-500 bg-slate-200"
        />
        <View className="ml-4 flex-1 justify-center">
          <Text className="text-xl font-bold text-slate-900 leading-tight">
            {nome}
          </Text>
          <Text className="text-sm font-medium text-slate-500 mt-0.5">
            {usuario}
          </Text>
          <Text className="text-xs text-slate-600 mt-2 leading-4">
            {bio}
          </Text>
        </View>
      </View>

      {/* 
        2. Estatísticas:
        - Três blocos (Posts, Seguidores, Seguindo) lado a lado
        - Distribuídos com espaço igual entre eles (justify-around)
      */}
      <View className="flex-row justify-around items-center py-4 border-b border-slate-100 bg-slate-50/50">
        {estatisticas.map((item, index) => (
          <View key={index} className="items-center flex-1">
            <Text className="text-lg font-bold text-slate-900">{item.valor}</Text>
            <Text className="text-xs text-slate-500 font-medium mt-0.5">{item.label}</Text>
          </View>
        ))}
      </View>

      {/* 
        3. Interesses:
        - Lista de 6+ chips de texto que quebra linha automaticamente
        - Espaçamento uniforme entre os chips
      */}
      <View className="px-5 py-5 border-b border-slate-100">
        <Text className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
          Interesses
        </Text>
        <ListaDeChips chips={interesses} />
      </View>

      {/* 
        4. Publicações:
        - Reaproveitamento de <GradeDePublicacoes> da Questão 4
        - Pelo menos 9 publicações em 3 colunas
        - Sem espaço sobrando nas laterais da tela (px-2 / w-full)
      */}
      <View className="py-5">
        <Text className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 px-5">
          Publicações
        </Text>
        <View className="px-2 w-full">
          <GradeDePublicacoes publicacoes={publicacoes} />
        </View>
      </View>

      {/* 
        5. Rodapé:
        - Reaproveitamento de <BotaoSeguir> da Questão 5
        - Ocupando a largura inteira da tela (fullWidth)
      */}
      <View className="px-5 pt-2">
        <BotaoSeguir fullWidth={true} />
      </View>
    </ScrollView>
  );
}
