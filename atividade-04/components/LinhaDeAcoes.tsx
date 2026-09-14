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
      Alert.alert("Ação", "Botão 'Ver mais' pressionado!");
    }
  };

  return (
    <View className="flex-row justify-between items-center w-full p-3 bg-slate-50 border border-slate-200 rounded-xl">
      {/* Ícone à esquerda (View de 24x24 simulando ícone) */}
      <View className="w-6 h-6 bg-blue-600 rounded-md items-center justify-center">
        <View className="w-2.5 h-2.5 bg-white rounded-sm" />
      </View>
      
      {/* Botão de texto 'Ver mais' à direita */}
      <TouchableOpacity 
        onPress={handlePress}
        activeOpacity={0.7}
        className="px-3 py-1.5 rounded-lg bg-blue-50"
      >
        <Text className="text-blue-600 font-semibold text-sm">
          Ver mais
        </Text>
      </TouchableOpacity>
    </View>
  );
}
