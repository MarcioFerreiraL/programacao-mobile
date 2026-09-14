import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Estilos Originais solicitados na Questão 6
const styles = StyleSheet.create({
  row: { flexDirection: 'row', justifyContent: 'space-between', padding: 16 },
  card: { flex: 1, alignItems: 'center' },
});

export default function RefatoracaoEstilos() {
  return (
    <View className="w-full gap-4">
      {/* 1. Implementação Original (com StyleSheet) */}
      <View className="bg-white border border-purple-100 rounded-2xl p-4 shadow-sm">
        <Text className="text-purple-300 font-bold text-xs uppercase mb-2 tracking-wider">
          Layout com StyleSheet (Original)
        </Text>
        
        <View style={styles.row}>
          <View style={styles.card} className="bg-purple-50 p-4 rounded-xl border border-purple-100 mr-2">
            <Text className="text-purple-700 font-bold">Copo 300ml</Text>
            <Text className="text-purple-400 text-xs">R$ 15,00</Text>
          </View>
          <View style={styles.card} className="bg-purple-50 p-4 rounded-xl border border-purple-100 ml-2">
            <Text className="text-purple-700 font-bold">Copo 500ml</Text>
            <Text className="text-purple-400 text-xs">R$ 22,00</Text>
          </View>
        </View>
      </View>

      {/* 2. Implementação Refatorada (com NativeWind / className) */}
      <View className="bg-white border border-purple-100 rounded-2xl p-4 shadow-sm">
        <Text className="text-emerald-500 font-bold text-xs uppercase mb-2 tracking-wider">
          Layout com NativeWind (Refatorado)
        </Text>

        {/* 
          Styles.row -> className="flex-row justify-between p-4"
          Styles.card -> className="flex-1 items-center"
        */}
        <View className="flex-row justify-between p-4">
          <View className="flex-1 items-center bg-emerald-50 p-4 rounded-xl border border-emerald-100 mr-2">
            <Text className="text-emerald-700 font-bold">Copo 300ml</Text>
            <Text className="text-emerald-400 text-xs">R$ 15,00</Text>
          </View>
          <View className="flex-1 items-center bg-emerald-50 p-4 rounded-xl border border-emerald-100 ml-2">
            <Text className="text-emerald-700 font-bold">Copo 500ml</Text>
            <Text className="text-emerald-400 text-xs">R$ 22,00</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
