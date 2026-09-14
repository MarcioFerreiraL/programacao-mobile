import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// 1. Estilos Originais solicitados na Questão 6 (usando StyleSheet.create)
const styles = StyleSheet.create({
  row: { flexDirection: 'row', justifyContent: 'space-between', padding: 16 },
  card: { flex: 1, alignItems: 'center' },
});

export default function RefatoracaoEstilos() {
  return (
    <View className="w-full gap-4">
      {/* 1. Componente Original (com StyleSheet.create) */}
      <View className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">
        <View className="flex-row items-center justify-between mb-2">
          <Text className="text-slate-500 font-bold text-xs uppercase tracking-wider">
            Original (StyleSheet.create)
          </Text>
          <Text className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-mono">
            style={"{styles.row}"}
          </Text>
        </View>
        
        {/* Layout Original */}
        <View style={styles.row}>
          <View style={styles.card} className="bg-slate-100 p-4 rounded-xl border border-slate-200 mr-2">
            <Text className="text-slate-800 font-bold">Item A</Text>
            <Text className="text-slate-500 text-xs mt-1">flex: 1, items-center</Text>
          </View>
          <View style={styles.card} className="bg-slate-100 p-4 rounded-xl border border-slate-200 ml-2">
            <Text className="text-slate-800 font-bold">Item B</Text>
            <Text className="text-slate-500 text-xs mt-1">flex: 1, items-center</Text>
          </View>
        </View>
      </View>

      {/* 2. Componente Refatorado (com NativeWind / className) */}
      <View className="bg-white border border-blue-200 rounded-2xl p-4 shadow-sm">
        <View className="flex-row items-center justify-between mb-2">
          <Text className="text-blue-600 font-bold text-xs uppercase tracking-wider">
            Refatorado (NativeWind className)
          </Text>
          <Text className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded font-mono">
            className="flex-row justify-between p-4"
          </Text>
        </View>

        {/* 
          Correspondências exatas de classes:
          - styles.row -> className="flex-row justify-between p-4" (p-4 equivale a padding: 16)
          - styles.card -> className="flex-1 items-center"
        */}
        <View className="flex-row justify-between p-4">
          <View className="flex-1 items-center bg-blue-50 p-4 rounded-xl border border-blue-200 mr-2">
            <Text className="text-blue-900 font-bold">Item A</Text>
            <Text className="text-blue-600 text-xs mt-1">flex-1 items-center</Text>
          </View>
          <View className="flex-1 items-center bg-blue-50 p-4 rounded-xl border border-blue-200 ml-2">
            <Text className="text-blue-900 font-bold">Item B</Text>
            <Text className="text-blue-600 text-xs mt-1">flex-1 items-center</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
