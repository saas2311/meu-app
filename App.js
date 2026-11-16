import { useState } from 'react'; 
import { View, Text, Pressable, StyleSheet } from 'react-native';

export default function App() {
 const [visitas, setVisitas] = useState(0);
 return (
  <View style={styles.tela}>
    <Text style={styles.titulo}>Meu Guia de Estudos </Text>
    <Text>React conhecido, interface nativa nova. </Text>
    <Text>Acessos: {visitas} </Text>
  <Pressable style={styles.botao}
    onPress={() => setVisitas(visitas + 1)}>
    <Text style={styles.rotulo}>Registrar acesso </Text>
 </Pressable>
 </View>
  );
 }

const styles = StyleSheet.create({
 tela: { flex: 1, justifyContent: 'center', padding: 24,
 gap: 16, backgroundColor: '#eff6ff' },
 titulo: { fontSize: 26, fontWeight: '700', color: '#1e3a8a' },
 botao: { backgroundColor: '#1e3a8a', padding: 16, borderRadius: 12 },
 rotulo: { color: '#ffffff', fontSize: 18 }
 });

