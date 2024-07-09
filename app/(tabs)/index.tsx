import { StyleSheet, View, Text } from 'react-native';

import { ThemedText } from '@/components/ThemedText';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <ThemedText type="title">Bem vindo, Yago!</ThemedText>
      </View>
      <View>
        <Text style={{ color: "white", marginTop: 20, marginBottom: 10 }}>Seu resumo do mês </Text>
        <ThemedText type="title">R$ 3.801,99</ThemedText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 80
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
