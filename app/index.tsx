import { router, Link } from 'expo-router';
import { View, StyleSheet, Pressable, Text } from 'react-native';
import { Colors } from '@/constants/Colors';
import { useState } from 'react';
import { useActivities } from '@/hooks/useActivities';
import { useActivitiesContext } from '@/components/ActivitiesProvider';
import { Activity } from '@/components/Activity';

export default function Index() {
  const [colorScheme, setColorScheme] = useState('light');
  const { activities } = useActivitiesContext();

  return (
    <View style={styles.wrapper}>
      <View style={styles.activityEntries}>
        {activities.map((activity) => (
          <Activity
            activity={activity}
            key={activity.id}
          />
        ))}
      </View>
      <View style={styles.mainButtons}>
        <Pressable
          onPress={() => router.replace('/add-activity-screen')}
          style={[styles.button, styles.addActivityButton]}
        >
          <Text style={styles.buttonText}>Add Activity</Text>
        </Pressable>
        <Pressable
          style={[styles.button, styles.deleteAllActivitiesButton]}
        >
          <Text style={styles.buttonText}>Delete all activities</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.secondary,
  },
  activityEntries: {
    width: '100%',
    paddingInline: 16,
    marginTop: 16,
  },
  button: {
    width: '100%',
    alignItems: 'center',
    paddingBlock: 16,
  },
  buttonText: {
    color: Colors.primaryLight,
  },
  mainButtons: {
    width: '100%',
  },
  addActivityButton: {
    backgroundColor: Colors.accent,
  },
  deleteAllActivitiesButton: {
    backgroundColor: Colors.notice,
  }
});
