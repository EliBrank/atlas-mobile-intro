import { StyleSheet, Text, View } from 'react-native';
import { ActivityProps } from '@/hooks/useActivities';
import { Colors } from '@/constants/Colors';

export function Activity({ activity }: { activity: ActivityProps }) {
  // convert epoch time into milliseconds
  const date = new Date(activity.date * 1000);
  const dateFormatted = date.toLocaleString('en-US', {
    month: 'numeric',
    day: '2-digit',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  });

  return (
    <View style={styles.activity}>
      <Text>
        {dateFormatted}
      </Text>
      <Text style={styles.activitySteps}>
        Steps: {activity.steps}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  activity: {
    backgroundColor: Colors.primaryLight,
    borderWidth: 3,
    borderColor: Colors.primaryDark,
    marginBottom: 16,
    paddingTop: 4,
    paddingBottom: 12,
    paddingInline: 8,
  },
  activitySteps: {
    fontSize: 28,
  },
});

