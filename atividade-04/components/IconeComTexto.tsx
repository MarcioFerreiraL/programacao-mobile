import React from 'react';
import { View, Text } from 'react-native';

interface IconeComTextoProps {
  texto?: string;
  corIcone?: string;
}

export default function IconeComTexto({ 
  texto = "Adicional de Fruta Fresca", 
  corIcone = "bg-purple-600" 
}: IconeComTextoProps) {
  return (
    <View className="flex-row items-center gap-3 bg-white p-3 rounded-xl border border-purple-100 shadow-sm">
      {/* Ícone Simulado (Açaí Icon): View de 24x24 */}
      <View className={`w-6 h-6 rounded-lg ${corIcone} items-center justify-center shadow-sm`}>
        <View className="w-2.5 h-2.5 bg-purple-200 rounded-full" />
      </View>
      
      {/* Texto alinhado verticalmente */}
      <Text className="text-gray-800 text-base font-medium">
        {texto}
      </Text>
    </View>
  );
}
