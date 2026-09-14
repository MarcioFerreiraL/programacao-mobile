import React, { useState } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

interface BotaoSeguirProps {
  onToggleState?: (isFollowing: boolean) => void;
  fullWidth?: boolean;
}

export default function BotaoSeguir({ onToggleState, fullWidth = false }: BotaoSeguirProps) {
  const [favoritado, setFavoritado] = useState(false);

  const handlePress = () => {
    const nextState = !favoritado;
    setFavoritado(nextState);
    if (onToggleState) {
      onToggleState(nextState);
    }
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.8}
      className={`py-3 px-6 rounded-2xl border items-center justify-center transition-all ${
        fullWidth ? "w-full" : ""
      } ${
        favoritado 
          ? "bg-purple-100 border-purple-300" 
          : "bg-purple-700 border-purple-700 shadow-md"
      }`}
    >
      <Text
        className={`font-bold text-base ${
          favoritado ? "text-purple-800" : "text-white"
        }`}
      >
        {favoritado ? "❤️ Favoritado" : "🤍 Favoritar Combo"}
      </Text>
    </TouchableOpacity>
  );
}
