import React from 'react';
import { View, Text } from 'react-native';

interface GradeDePublicacoesProps {
  publicacoes: (string | number)[];
}

export default function GradeDePublicacoes({ publicacoes }: GradeDePublicacoesProps) {
  return (
    <View className="flex-row flex-wrap gap-2 w-full">
      {publicacoes.map((item, index) => {
        const isColor = typeof item === 'string' && (item.startsWith('#') || item.startsWith('rgb'));
        
        return (
          <View
            key={index}
            style={isColor ? { backgroundColor: item } : undefined}
            className={`w-[31%] aspect-square items-center justify-center rounded-lg shadow-sm mb-2 ${
              !isColor ? 'bg-blue-100 border border-blue-200' : ''
            }`}
          >
            <Text 
              className={`font-bold text-xs ${
                isColor ? 'text-white' : 'text-blue-900'
              }`}
            >
              {typeof item === 'number' ? `${item}` : isColor ? `#${index + 1}` : item}
            </Text>
          </View>
        );
      })}
    </View>
  );
}
