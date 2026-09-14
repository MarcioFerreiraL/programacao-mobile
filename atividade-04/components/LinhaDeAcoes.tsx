import React from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';

interface LinhaDeAcoesProps {
  onPressVerMais?: () => void;
}

export default function LinhaDeAcoes({ onPressVerMais }: LinhaDeAcoesProps) {
  const handlePress = () => {
    if (onPressVerMais) {
      onPressVerMais();
    } else {
      Alert.alert("Açaíteria da Hora", "Visualizando todos os acompanhamentos e caldas especiais!");
    }
  };

  return (
    <View className="flex-row justify-between items-center w-full p-4 bg-white rounded-xl border border-purple-100 shadow-sm">
      {/* Ícone à esquerda */}
      <View className="w-8 h-8 bg-purple-700 rounded-full items-center justify-center shadow-sm">
        <Text className="text-white font-bold text-xs">🍇</Text>
      </View>
      
      {/* Botão de texto "Ver mais" à direita */}
      <TouchableOpacity 
        onPress={handlePress}
        className="active:opacity-60 px-3 py-1.5 bg-purple-50 rounded-lg"
      >
        <Text className="text-purple-700 font-semibold text-sm">Ver cardápio completo</Text>
      </TouchableOpacity>
    </View>
  );
}
