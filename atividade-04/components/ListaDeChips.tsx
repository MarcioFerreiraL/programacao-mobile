import React from 'react';
import { View, Text } from 'react-native';

interface ListaDeChipsProps {
  chips: string[];
}

export default function ListaDeChips({ chips }: ListaDeChipsProps) {
  return (
    <View className="flex-row flex-wrap gap-2 w-full">
      {chips.map((chip, index) => (
        <View 
          key={index} 
          className="bg-purple-50 border border-purple-200 px-3.5 py-2 rounded-full shadow-sm"
        >
          <Text className="text-purple-900 text-sm font-semibold">
            ✨ {chip}
          </Text>
        </View>
      ))}
    </View>
  );
}
