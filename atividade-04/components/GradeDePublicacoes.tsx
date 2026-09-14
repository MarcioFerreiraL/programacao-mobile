import React from 'react';
import { View, Text } from 'react-native';

interface GradeDePublicacoesProps {
  publicacoes: string[]; // Cores ou imagens dos tamanhos/combinações de açaí
}

export default function GradeDePublicacoes({ publicacoes }: GradeDePublicacoesProps) {
  const itensFantasmas = (3 - (publicacoes.length % 3)) % 3;
  const itemsComFantasmas = [...publicacoes, ...Array(itensFantasmas).fill(null)];

  return (
    <View className="flex-row flex-wrap justify-between w-full">
      {itemsComFantasmas.map((item, index) => {
        if (item === null) {
          return (
            <View 
              key={`dummy-${index}`} 
              className="w-[32%] aspect-square mb-2 bg-transparent" 
            />
          );
        }

        return (
          <View
            key={index}
            style={{ backgroundColor: item }}
            className="w-[32%] aspect-square rounded-2xl mb-2 items-center justify-center border border-black/5 shadow-sm overflow-hidden"
          >
            {/* Overlay escuro com o nome do combo/copo */}
            <View className="bg-black/30 w-full h-full items-center justify-center p-1">
              <Text className="text-white font-extrabold text-xs text-center shadow-sm">
                Copo #{index + 1}
              </Text>
              <Text className="text-purple-200 text-[10px] font-medium">
                Monte o seu
              </Text>
            </View>
          </View>
        );
      })}
    </View>
  );
}
