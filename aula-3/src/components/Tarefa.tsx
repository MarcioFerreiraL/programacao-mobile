import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export interface TarefaProps {
  id: string;
  texto: string;
  concluida: boolean;
  onToggle: (id: string) => void;
  onRemover: (id: string) => void;
}

export function Tarefa({ id, texto, concluida, onToggle, onRemover }: TarefaProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.contentContainer}
        onPress={() => onToggle(id)}
        activeOpacity={0.7}
      >
        <View style={[styles.checkbox, concluida && styles.checkboxConcluida]}>
          {concluida && <Text style={styles.checkmark}>✓</Text>}
        </View>

        <Text style={[styles.texto, concluida && styles.textoConcluido]} numberOfLines={2}>
          {texto}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botaoRemover}
        onPress={() => onRemover(id)}
        activeOpacity={0.7}
        accessibilityLabel="Remover tarefa"
      >
        <Text style={styles.textoRemover}>✕</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#1E293B',
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#334155',
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginRight: 12,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#64748B',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
    backgroundColor: 'transparent',
  },
  checkboxConcluida: {
    backgroundColor: '#10B981',
    borderColor: '#10B981',
  },
  checkmark: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  texto: {
    fontSize: 16,
    color: '#F8FAFC',
    flex: 1,
  },
  textoConcluido: {
    textDecorationLine: 'line-through',
    color: '#94A3B8',
  },
  botaoRemover: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#334155',
  },
  textoRemover: {
    color: '#EF4444',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
