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
          className="bg-blue-50 border border-blue-200 px-3.5 py-1.5 rounded-full shadow-sm"
        >
          <Text className="text-blue-900 text-sm font-medium">
            {chip}
          </Text>
        </View>
      ))}
    </View>
  );
}
