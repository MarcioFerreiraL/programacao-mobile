import React, { useState } from 'react';
import {
  FlatList,
  Keyboard,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { Tarefa } from '@/components/Tarefa';

export interface ItemTarefa {
  id: string;
  texto: string;
  concluida: boolean;
}

export default function HomeScreen() {
  const [tarefas, setTarefas] = useState<ItemTarefa[]>([
    { id: '1', texto: 'Aprender TSX e Props no React Native', concluida: true },
    { id: '2', texto: 'Compreender o estado (useState)', concluida: false },
    { id: '3', texto: 'Finalizar a atividade da Aula 03', concluida: false },
  ]);

  const [novoTexto, setNovoTexto] = useState('');

  const adicionarTarefa = () => {
    if (novoTexto.trim() === '') return;

    const novaTarefa: ItemTarefa = {
      id: Date.now().toString(),
      texto: novoTexto.trim(),
      concluida: false,
    };

    setTarefas((prev) => [novaTarefa, ...prev]);
    setNovoTexto('');
    Keyboard.dismiss();
  };

  const alternarStatusTarefa = (id: string) => {
    setTarefas((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, concluida: !item.concluida } : item
      )
    );
  };

  const removerTarefa = (id: string) => {
    setTarefas((prev) => prev.filter((item) => item.id !== id));
  };

  const concluidasCount = tarefas.filter((t) => t.concluida).length;

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#0F172A" />
      <View style={styles.container}>
        {/* Cabeçalho */}
        <View style={styles.header}>
          <Text style={styles.titulo}>Minhas Tarefas</Text>
          <Text style={styles.subtitulo}>Aula 03 — TSX, Props e State</Text>
        </View>

        {/* Formulário de adição */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Adicionar uma nova tarefa..."
            placeholderTextColor="#94A3B8"
            value={novoTexto}
            onChangeText={setNovoTexto}
            onSubmitEditing={adicionarTarefa}
            returnKeyType="done"
          />
          <TouchableOpacity
            style={styles.botaoAdicionar}
            onPress={adicionarTarefa}
            activeOpacity={0.8}
          >
            <Text style={styles.textoBotaoAdicionar}>+</Text>
          </TouchableOpacity>
        </View>

        {/* Estatísticas */}
        <View style={styles.statsContainer}>
          <View style={styles.statBox}>
            <Text style={styles.statLabel}>Criadas</Text>
            <Text style={styles.statValor}>{tarefas.length}</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statLabel}>Concluídas</Text>
            <Text style={[styles.statValor, styles.statValorConcluidas]}>
              {concluidasCount}
            </Text>
          </View>
        </View>

        {/* Lista de tarefas */}
        <FlatList
          data={tarefas}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Tarefa
              id={item.id}
              texto={item.texto}
              concluida={item.concluida}
              onToggle={alternarStatusTarefa}
              onRemover={removerTarefa}
            />
          )}
          contentContainerStyle={styles.listContent}
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyIcon}>📝</Text>
              <Text style={styles.emptyTextTitle}>Você não tem tarefas registradas</Text>
              <Text style={styles.emptyTextSubtitle}>
                Crie tarefas e organize seus itens a fazer
              </Text>
            </View>
          }
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#0F172A',
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 16,
  },
  header: {
    marginBottom: 20,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#F8FAFC',
  },
  subtitulo: {
    fontSize: 14,
    color: '#94A3B8',
    marginTop: 4,
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 52,
    backgroundColor: '#1E293B',
    borderRadius: 12,
    paddingHorizontal: 16,
    color: '#F8FAFC',
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#334155',
    marginRight: 10,
  },
  botaoAdicionar: {
    width: 52,
    height: 52,
    backgroundColor: '#2563EB',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoBotaoAdicionar: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: 'bold',
    lineHeight: 32,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#1E293B',
    marginBottom: 16,
  },
  statBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  statLabel: {
    color: '#94A3B8',
    fontSize: 14,
    fontWeight: '600',
  },
  statValor: {
    backgroundColor: '#334155',
    color: '#F8FAFC',
    fontSize: 12,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
  },
  statValorConcluidas: {
    backgroundColor: '#065F46',
    color: '#34D399',
  },
  listContent: {
    paddingBottom: 40,
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 48,
  },
  emptyIcon: {
    fontSize: 48,
    marginBottom: 12,
  },
  emptyTextTitle: {
    color: '#94A3B8',
    fontSize: 16,
    fontWeight: 'bold',
  },
  emptyTextSubtitle: {
    color: '#64748B',
    fontSize: 14,
    marginTop: 4,
  },
});
