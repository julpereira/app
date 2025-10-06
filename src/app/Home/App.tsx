import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';

interface Item {
  id: string;
  nome: string;
  kcal: number;
}

export default function App() {
  const [alimento, setAlimento] = useState<string>('');
  const [calorias, setCalorias] = useState<string>('');
  const [lista, setLista] = useState<Item[]>([]);

  const adicionarItem = () => {
    if (alimento && calorias) {
      const novoItem: Item = {
        id: Date.now().toString(),
        nome: alimento,
        kcal: parseInt(calorias, 10),
      };
      setLista((prevLista) => [...prevLista, novoItem]);
      setAlimento('');
      setCalorias('');
    }
  };

  const removerItem = (id: string) => {
    setLista(lista.filter((item) => item.id !== id));
  };

  const limparLista = () => {
    setLista([]);
  };

  const total = lista.reduce((acc, item) => acc + item.kcal, 0);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titulo}>Calorias</Text>
      </View>

      <View style={styles.form}>
        <TextInput
          placeholder="Digite o alimento"
          style={styles.input}
          value={alimento}
          onChangeText={setAlimento}
        />
        <TextInput
          placeholder="Digite as calorias"
          style={styles.input}
          keyboardType="numeric"
          value={calorias}
          onChangeText={setCalorias}
        />
        <TouchableOpacity style={styles.botao} onPress={adicionarItem}>
          <Text style={styles.botaoTexto}>Adicionar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.listaContainer}>
        <View style={styles.listaHeader}>
          <Text style={styles.listaTitulo}>Item</Text>
          <Text style={styles.listaTitulo}>Calorias</Text>
          <TouchableOpacity onPress={limparLista}>
            <Text style={styles.limparTexto}>Limpar</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={lista}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.itemNome}>{item.nome}</Text>
              <Text style={styles.itemKcal}>{item.kcal} kcal</Text>
              <TouchableOpacity onPress={() => removerItem(item.id)}>
                <Ionicons name="trash-outline" size={20} color="black" />
              </TouchableOpacity>
            </View>
          )}
        />
      </View>

      <View style={styles.footer}>
        <Text style={styles.total}>{total} kcal</Text>
      </View>
    </View>
  );
}