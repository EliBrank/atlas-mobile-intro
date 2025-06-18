import { router, Link } from 'expo-router';
import { View, StyleSheet, Pressable, Text } from 'react-native';
import { Colors } from '@/constants/Colors';
import { useState } from 'react';
import { useActivities } from '@/hooks/useActivities';

const [colorScheme, setColorScheme] = useState('light');

export default function Index() {
  const { activities } = useActivities();

  return (
    <View style={styles.wrapper}>
      <Text>
        {JSON.stringify(activities)}
      </Text>
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
