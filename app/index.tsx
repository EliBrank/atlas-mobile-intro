import { router, Link } from 'expo-router';
import { View, StyleSheet, Pressable, Text } from 'react-native';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';

const theme = useColorScheme() ?? 'light';

export default function Index() {
  return (
    <View style={styles.wrapper}>
      <Link
        href={'/add-activity-screen'}
        replace
        style={styles.addActivityButton}
      >
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
  addActivityButton: {
    backgroundColor: Colors.light.accent
  },
});
