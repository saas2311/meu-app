import { View, Text, StyleSheet } from 'react-native';

 export default function CartaoPerfil({ nome, descricao }) {
 return (
 <View style={styles.cartao}>
 <Text style={styles.nome}>{nome} </Text>
 <Text>{descricao} </Text>
 </View>
  );
    }

const styles = StyleSheet.create({
  cartao: { backgroundColor: '#dbeafe', padding: 16 },
 nome: { fontSize: 22, fontWeight: 'bold' },
 });

