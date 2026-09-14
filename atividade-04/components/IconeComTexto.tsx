import React from 'react';
import { View, Text } from 'react-native';

interface IconeComTextoProps {
  texto?: string;
  corIcone?: string;
}

export default function IconeComTexto({ 
  texto = "Texto de exemplo ao lado do ícone", 
  corIcone = "bg-blue-600" 
}: IconeComTextoProps) {
  return (
    <View className="flex-row items-center gap-3">
      {/* Ícone simulado: View de 24x24 (w-6 h-6 = 24px no Tailwind) */}
      <View className={`w-6 h-6 rounded-md ${corIcone} items-center justify-center`}>
        <View className="w-2.5 h-2.5 bg-white rounded-sm" />
      </View>
      
      {/* Texto alinhado verticalmente no centro em relação ao ícone */}
      <Text className="text-gray-800 text-base font-medium">
        {texto}
      </Text>
    </View>
  );
}
