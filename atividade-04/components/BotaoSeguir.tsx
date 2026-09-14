import React, { useState } from 'react';
import { TouchableOpacity, Text } from 'react-native';

interface BotaoSeguirProps {
  onToggleState?: (isFollowing: boolean) => void;
  fullWidth?: boolean;
}

export default function BotaoSeguir({ onToggleState, fullWidth = false }: BotaoSeguirProps) {
  const [seguindo, setSeguindo] = useState(false);

  const handlePress = () => {
    const nextState = !seguindo;
    setSeguindo(nextState);
    if (onToggleState) {
      onToggleState(nextState);
    }
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={`py-2.5 px-6 rounded-xl border items-center justify-center ${
        fullWidth ? "w-full" : ""
      } ${
        seguindo
          ? "bg-transparent border-blue-600"
          : "bg-blue-600 border-blue-600 shadow-sm"
      }`}
    >
      <Text
        className={`font-semibold text-base ${
          seguindo ? "text-blue-600" : "text-white"
        }`}
      >
        {seguindo ? "Seguindo" : "Seguir"}
      </Text>
    </TouchableOpacity>
  );
}
