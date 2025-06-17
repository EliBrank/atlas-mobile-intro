import { router } from 'expo-router';
import { View, StyleSheet, Pressable, Text } from 'react-native';

// import { Container } from './styles';

export default function Index() {
  return (
    <View style={styles.wrapper}>
      <Pressable onPress={() => router.push('/add-activity-screen')}>
        <Text>Add Activity</Text>
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
