import { StyleSheet, Text, View } from 'react-native';
import { Activity } from './Activity';
import Swipeable from 'react-native-gesture-handler/ReanimatedSwipeable';
import { useActivitiesContext } from './ActivitiesProvider';
import { Colors } from '@/constants/Colors';

export function SwipeableActivity({ activity }: { activity: any }) {
  const { deleteActivity } = useActivitiesContext();
  return (
    <View key={activity.id}>
      <Swipeable
        renderLeftActions={() => <SwipeAction text='Delete'></SwipeAction>}
        renderRightActions={() => <SwipeAction text='Delete'></SwipeAction>}
        onSwipeableOpen={() => {
          deleteActivity(activity.id);
        }}
        containerStyle={styles.swipeableContainer}
      >
        <Activity activity={activity}/>
      </Swipeable>
    </View>
  );
}

export const SwipeAction = ({ text }: { text: string }) => {
  return (
    <View style={styles.swipeAction}>
      <Text style={styles.actionText}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  swipeableContainer: {
    backgroundColor: Colors.notice,
    marginBottom: 16,
  },
  swipeAction: {
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.notice,
  },
  actionText: {
    color: Colors.primaryLight,
    fontWeight: 'bold',
    fontSize: 18,
  },
})
