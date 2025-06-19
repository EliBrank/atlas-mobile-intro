import { router, Link } from 'expo-router';
import { View, StyleSheet, Pressable, Text, TextInput } from 'react-native';
import { Colors } from '@/constants/Colors';
import { useState } from 'react';
import { useActivitiesContext } from '@/components/ActivitiesProvider';

export default function AddActivityScreen() {
  const [steps, setSteps] = useState<number>(0);
  const { insertActivity } = useActivitiesContext();
  return (
    <View style={styles.wrapper}>
      <Text style={styles.heading}>Add Activity</Text>
      <TextInput
        placeholder='Enter Steps'
        keyboardType='number-pad'
        onChangeText={(value) => setSteps(parseInt(value))}
        style={styles.activityInput}
      />
      <Pressable
        onPress={() => {
          insertActivity(steps, new Date());
          router.replace('/');
        }}
        style={[styles.button, styles.addActivityButton]}
      >
        <Text style={styles.buttonText}>Add Activity</Text>
      </Pressable>
      <Pressable
        onPress={() => router.replace('/')}
        style={[styles.button, styles.backButton]}
      >
        <Text style={styles.buttonText}>Go Back</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.secondary,
  },
  heading: {
    fontSize: 32,
    fontWeight: 'bold'
  },
  activityInput: {
    width: '100%',
    marginBlock: 16,
    backgroundColor: Colors.primaryLight,
    borderWidth: 3,
    borderColor: Colors.primaryDark,
  },
  button: {
    width: '100%',
    alignItems: 'center',
    paddingBlock: 16,
  },
  buttonText: {
    color: Colors.primaryLight,
  },
  addActivityButton: {
    backgroundColor: Colors.accent,
  },
  backButton: {
    backgroundColor: Colors.notice,
  }
});
