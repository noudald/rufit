import React, { useState } from 'react';
import { Alert, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
//import Fireworks from 'react-native-fireworks';
import ConfettiCannon from 'react-native-confetti-cannon';

import exerciseIcon from './assets/fitness.png';
import barbell_front from './static/barbell-male-deadlift-front_fFMvXc0.gif';
import barbell_side from './static/barbell-male-deadlift-side_dnPUuTI.gif';

// TODO: Turn this into a workout database
function getWorkout(workoutKey) {
  let workout = [];
  switch (workoutKey) {
    case 1:
      workout = [
        {
          title: 'Benchpress',
          sets: 3,
          sets_todo: 3,
          reps: 6,
          item: '45 kg',
          key: '1',
        },
        {
          title: 'Bent-Over Row',
          sets: 3,
          sets_todo: 3,
          reps: 6,
          item: '45 kg',
          key: '2',
        },
        {
          title: 'Pull-Up',
          sets: 3,
          sets_todo: 3,
          reps: 6,
          item: '',
          key: '3',
        },
        {
          title: 'Dumbbell Push Press',
          sets: 3,
          sets_todo: 3,
          reps: 6,
          item: '14 kg',
          key: '4',
        },
        {
          title: 'Deadlift',
          sets: 3,
          sets_todo: 3,
          reps: 6,
          item: '70 kg',
          key: '5',
        },
        {
          title: 'Sideway Planking',
          sets: 3,
          sets_todo: 3,
          reps: 2,
          item: '30 sec',
          key: '6',
        },
        {
          title: 'Squat',
          sets: 3,
          sets_todo: 3,
          reps: 6,
          item: '70 kg',
          key: '7',
        },
        {
          title: 'One-Leg Standing',
          sets: 3,
          sets_todo: 3,
          reps: 2,
          item: '60 sec',
          key: '8',
        },
      ];
      break;
    case 2:
      workout = [
        {
          title: 'Benchpress',
          sets: 3,
          sets_todo: 3,
          reps: 8,
          item: '45 kg',
          key: '1',
        },
        {
          title: 'Bent-Over Row',
          sets: 3,
          sets_todo: 3,
          reps: 8,
          item: '45 kg',
          key: '2',
        },
        {
          title: 'Pull-Up',
          sets: 3,
          sets_todo: 3,
          reps: 8,
          item: '',
          key: '3',
        },
        {
          title: 'Dumbbell Push Press',
          sets: 3,
          sets_todo: 3,
          reps: 8,
          item: '14 kg',
          key: '4',
        },
        {
          title: 'Deadlift',
          sets: 3,
          sets_todo: 3,
          reps: 6,
          item: '70 kg',
          key: '5',
        },
        {
          title: 'Sideway Planking',
          sets: 3,
          sets_todo: 3,
          reps: 2,
          item: '30 sec',
          key: '6',
        },
        {
          title: 'Squat',
          sets: 3,
          sets_todo: 3,
          reps: 6,
          item: '70 kg',
          key: '7',
        },
        {
          title: 'One-Leg Standing',
          sets: 3,
          sets_todo: 3,
          reps: 2,
          item: '60 sec',
          key: '8',
        },
      ];
      break;
    case 3:
      workout = [
        {
          title: 'Benchpress',
          sets: 3,
          sets_todo: 3,
          reps: 4,
          item: '50 kg',
          key: '1',
        },
        {
          title: 'Bent-Over Row',
          sets: 3,
          sets_todo: 3,
          reps: 4,
          item: '50 kg',
          key: '2',
        },
        {
          title: 'Pull-Up',
          sets: 3,
          sets_todo: 3,
          reps: 4,
          item: '+2 kg',
          key: '3',
        },
        {
          title: 'Dumbbell Push Press',
          sets: 3,
          sets_todo: 3,
          reps: 4,
          item: '16 kg',
          key: '4',
        },
        {
          title: 'Deadlift',
          sets: 3,
          sets_todo: 3,
          reps: 4,
          item: '75 kg',
          key: '5',
        },
        {
          title: 'Sideway Planking',
          sets: 3,
          sets_todo: 3,
          reps: 2,
          item: '30 sec',
          key: '6',
        },
        {
          title: 'Squat',
          sets: 3,
          sets_todo: 3,
          reps: 4,
          item: '75 kg',
          key: '7',
        },
        {
          title: 'One-Leg Standing',
          sets: 3,
          sets_todo: 3,
          reps: 2,
          item: '60 sec',
          key: '8',
        },
      ];
      break;
    case 4:
      workout = [
        {
          title: 'Benchpress',
          sets: 3,
          sets_todo: 3,
          reps: 6,
          item: '50 kg',
          key: '1',
        },
        {
          title: 'Bent-Over Row',
          sets: 3,
          sets_todo: 3,
          reps: 6,
          item: '50 kg',
          key: '2',
        },
        {
          title: 'Pull-Up',
          sets: 3,
          sets_todo: 3,
          reps: 6,
          item: '+2 kg',
          key: '3',
        },
        {
          title: 'Dumbbell Push Press',
          sets: 3,
          sets_todo: 3,
          reps: 6,
          item: '16 kg',
          key: '4',
        },
        {
          title: 'Deadlift',
          sets: 3,
          sets_todo: 3,
          reps: 6,
          item: '75 kg',
          key: '5',
        },
        {
          title: 'Sideway Planking',
          sets: 3,
          sets_todo: 3,
          reps: 2,
          item: '30 sec',
          key: '6',
        },
        {
          title: 'Squat',
          sets: 3,
          sets_todo: 3,
          reps: 6,
          item: '75 kg',
          key: '7',
        },
        {
          title: 'One-Leg Standing',
          sets: 3,
          sets_todo: 3,
          reps: 2,
          item: '60 sec',
          key: '8',
        },
      ];
      break;
    case 5:
      workout = [
        {
          title: 'Benchpress',
          sets: 3,
          sets_todo: 3,
          reps: 3,
          item: '55 kg',
          key: '1',
        },
        {
          title: 'Bent-Over Row',
          sets: 3,
          sets_todo: 3,
          reps: 3,
          item: '55 kg',
          key: '2',
        },
        {
          title: 'Pull-Up',
          sets: 3,
          sets_todo: 3,
          reps: 3,
          item: '+4 kg',
          key: '3',
        },
        {
          title: 'Dumbbell Push Press',
          sets: 3,
          sets_todo: 3,
          reps: 3,
          item: '18 kg',
          key: '4',
        },
        {
          title: 'Deadlift',
          sets: 3,
          sets_todo: 3,
          reps: 3,
          item: '80 kg',
          key: '5',
        },
        {
          title: 'Sideway Planking',
          sets: 3,
          sets_todo: 3,
          reps: 2,
          item: '30 sec',
          key: '6',
        },
        {
          title: 'Squat',
          sets: 3,
          sets_todo: 3,
          reps: 3,
          item: '80 kg',
          key: '7',
        },
        {
          title: 'One-Leg Standing',
          sets: 3,
          sets_todo: 3,
          reps: 2,
          item: '60 sec',
          key: '8',
        },
      ];
      break
  }

  return workout;
}

function Exercises({route,  navigation}) {
  // TODO: Perhaps use history to restore workout when stopped half way?
  const exerciseParams = route.params.exerciseOverview.filter(
    (elem) => elem.key == route.params.key
  )[0];

  let workout = getWorkout(exerciseParams.exerciseKey);
  if (exerciseParams.finished) {
    workout = workout.map((exercise) => {
      exercise.sets_todo = 0;
      return exercise;
    });
  }

  const [exercises, setExercises] = useState(workout);
  const [showFireworks, setShowFireworks] = useState(false);

  const onExercisePress = (key) => {
    setExercises(exercises.map((exercise) => {
      if (exercise.key == key) {
        if (exercise.sets_todo > 0) {
          exercise.sets_todo -= 1;
        }
        return exercise;
      } else {
        return exercise;
      }
    }));

    let reps_left = exercises
      .map((exercises) => exercises.sets_todo)
      .reduce((a, b) => a + b, 0);
    if (reps_left == 0) {
      setShowFireworks(true);
    }
  };

  const onResetExercisePress = (key) => {
    setExercises(exercises.map((exercise) => {
      if (exercise.key == key) {
        exercise.sets_todo = exercise.sets;
        return exercise;
      } else {
        return exercise;
      }
    }));
    setShowFireworks(false);
  }

  const renderItem = ({item}) => {
    return (
      <View style={card_styles.item}>
        <TouchableOpacity
          style={card_styles.infoText}
          onPress={() => onExercisePress(item.key)}
        >
          <View style={card_styles.counterView}>
            <View style={item.sets_todo == 0
                ? card_styles.counterDone
                : card_styles.counterDoing}>
              <Text>{item.sets_todo}</Text>
            </View>
          </View>

          <View style={card_styles.exerciseInfo}>
            <Text style={card_styles.exerciseName}>{item.title}</Text>
            <Text>{item.reps} x {item.item}</Text>
          </View>

          <View style={card_styles.exerciseIconView}>
            <Image
              source={exerciseIcon}
              style={card_styles.exerciseIcon}
            />
          </View>
        </TouchableOpacity>

        <View style={styles.buttons}>
          <TouchableOpacity
            style={card_styles.infoButtonView}
            onPress={() => navigation.navigate('Exercise Info', { key: item.key })}
          >
            <FontAwesome5
              name='info'
              size={20}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={card_styles.resetButtonView}
            onPress={() => onResetExercisePress(item.key)}
          >
            <FontAwesome5
              name='redo-alt'
              size={20}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={card_styles.container}>
      <FlatList
        data={exercises}
        renderItem={renderItem}
        keyExtractor={item => item.key}
      />
      {showFireworks && <ConfettiCannon count={100} origin={{x: -10, y: 0}} />}
    </View>
  );
}

const card_styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
  },
  item: {
    padding: 10,
    borderRadius: 10,
    height: 100,
    backgroundColor: '#ffeddb',
    flexDirection: 'row',
    marginTop: 6,
    marginBottom: 6,
    marginLeft: 6,
    marginRight: 6,
    borderColor: '#333',
    shadowOpacity: 1,
    shadowRadius: 4,
  },
  infoText: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  counterView: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 84,
  },
  counterDoing: {
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#777',
    backgroundColor: '#65c18c',
  },
  counterDone: {
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#777',
    backgroundColor: '#ff7ba9',
  },
  buttons: {
    flex: 1,
    flexDirection: 'column',
  },
  exerciseInfo: {
    flex: 1,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  exerciseIconView: {
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  exerciseIcon: {
    height: 50,
    width: 50,
  },
  exerciseGif: {
    height: 200,
    width: 300,
  },
  infoButtonView: {
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
  },
  resetButtonView: {
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
  },
  exerciseName: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

function DeadLift() {
  return (
    <View>
      <Text>Deadlift</Text>
      <Text>Images from musclewiki.com</Text>
      <Text>Difficulty: Advanced</Text>
      <Image
        source={barbell_front}
        style={card_styles.exerciseGif}
      />
      <Image
        source={barbell_side}
        style={card_styles.exerciseGif}
      />
    </View>
  );
}

function ExerciseInfo({ route, navigation }) {
  if (route.params.key == 5) {
    // Deadlift
    return (
      <View style={stylesExerciseInfo.container}>
        <DeadLift />
      </View>
    );
  } else {
    return (
      <View style={stylesExerciseInfo.container}>
        <Text>Exercise not found</Text>
      </View>
    )
  }
}

const stylesExerciseInfo = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function ExerciseOverview ({ navigation }) {
  const [exerciseOverview, setExerciseOverview] = useState([
    {
      key: 1,
      name: 'Week 1 (80%)',
      finished: true,
      exerciseKey: 1,
    },
    {
      key: 2,
      name: 'Week 2 (80%)',
      finished: true,
      exerciseKey: 2,
    },
    {
      key: 3,
      name: 'Week 3 (85%)',
      finished: true,
      exerciseKey: 3,
    },
    {
      key: 4,
      name: 'Week 4 (85%)',
      finished: false,
      exerciseKey: 4,
    },
    {
      key: 5,
      name: 'Week 5 (90%)',
      finished: false,
      exerciseKey: 5,
    },
  ]);

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate(
          'Exercises',
          {
            key: item.key,
            exerciseOverview,
          }
        )}
      >
        <View style={item.finished
            ? exercise_overview_styles.itemFinished
            : exercise_overview_styles.itemToDo}>
          <Text>{item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={exercise_overview_styles.container}>
      <FlatList
        data={exerciseOverview}
        renderItem={renderItem}
        keyExtractor={item => item.key}
      />
    </View>
  );
}

const exercise_overview_styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
  },
  itemToDo: {
    padding: 10,
    borderRadius: 10,
    height: 100,
    backgroundColor: 'green',
    flexDirection: 'row',
    marginTop: 6,
    marginBottom: 6,
    marginLeft: 6,
    marginRight: 6,
    borderColor: '#333',
    shadowOpacity: 1,
    shadowRadius: 4,
  },
  itemFinished: {
    padding: 10,
    borderRadius: 10,
    height: 100,
    backgroundColor: 'red',
    flexDirection: 'row',
    marginTop: 6,
    marginBottom: 6,
    marginLeft: 6,
    marginRight: 6,
    borderColor: '#333',
    shadowOpacity: 1,
    shadowRadius: 4,
  },
});


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Exercise Overview List" component={ExerciseOverview} />
        <Stack.Screen name="Exercises" component={Exercises} />
        <Stack.Screen name="Exercise Info" component={ExerciseInfo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
