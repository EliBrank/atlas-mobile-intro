import { router, Link } from 'expo-router';
import { View, StyleSheet, Pressable, Text } from 'react-native';

// import { Container } from './styles';

export default function Index() {
  return (
    <View style={styles.wrapper}>
      <Link href={'/add-activity-screen'} replace>
        <Text>Add Activity</Text>
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
