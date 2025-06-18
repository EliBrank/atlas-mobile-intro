import { router, Link } from 'expo-router';
import { View, StyleSheet, Pressable, Text } from 'react-native';

// import { Container } from './styles';

export default function AddActivityScreen() {
  return (
    <View style={styles.wrapper}>
      <Link href={'/'} replace>
        <Text>Go Back</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
