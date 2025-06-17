import { View, StyleSheet, Pressable, Text } from 'react-native';

// import { Container } from './styles';

export default function AddActivityScreen() {
  return (
    <View style={styles.wrapper}>
      <Pressable onPress={() => }>
        <Text>Go back</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
  }
});
