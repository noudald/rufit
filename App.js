import React, { useState } from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

import exerciseIcon from './assets/fitness.png';
import barbell_front from './static/barbell-male-deadlift-front_fFMvXc0.gif';
import barbell_side from './static/barbell-male-deadlift-side_dnPUuTI.gif';

function Exercises({ navigation }) {
  const [exercises, setExercises] = useState([
    {
      title: 'Benchpress',
      sets: 3,
      sets_todo: 3,
      reps: 4, item: '50 kg',
      key: '1',
      cardStyle: card_styles.counterDoing
    },
    {
      title: 'Bent-Over Row',
      sets: 3,
      sets_todo: 3,
      reps: 4, item: '50 kg',
      key: '2',
      cardStyle: card_styles.counterDoing
    },
    {
      title: 'Pull-Up',
      sets: 3,
      sets_todo: 3,
      reps: 4, item: '+2 kg',
      key: '3',
      cardStyle: card_styles.counterDoing
    },
    {
      title: 'Dumbbell Push Press',
      sets: 3,
      sets_todo: 3,
      reps: 4, item: '16 kg',
      key: '4',
      cardStyle: card_styles.counterDoing
    },
    {
      title: 'Deadlift',
      sets: 3,
      sets_todo: 3,
      reps: 4, item: '75 kg',
      key: '5',
      cardStyle: card_styles.counterDoing
    },
    {
      title: 'Sideway Planking',
      sets: 3,
      sets_todo: 3,
      reps: 2, item: '30 sec',
      key: '6',
      cardStyle: card_styles.counterDoing
    },
    {
      title: 'Squat',
      sets: 3,
      sets_todo: 3,
      reps: 4, item: '75 kg',
      key: '7',
      cardStyle: card_styles.counterDoing
    },
    {
      title: 'One-Leg Standing',
      sets: 3,
      sets_todo: 3,
      reps: 2, item: '60 sec',
      key: '8',
      cardStyle: card_styles.counterDoing
    },
  ]);

  const onExercisePress = (key) => {
    setExercises(exercises.map((exercise) => {
      if (exercise.key == key) {
        if (exercise.sets_todo > 0) {
          exercise.sets_todo -= 1;
        }
        if (exercise.sets_todo == 0) {
          exercise.cardStyle = card_styles.counterDone;
        }
        return exercise;
      } else {
        return exercise;
      }
    }));
  };

  const onResetExercisePress = (key) => {
    setExercises(exercises.map((exercise) => {
      if (exercise.key == key) {
        exercise.sets_todo = exercise.sets;
        exercise.cardStyle = card_styles.counterDoing;
        return exercise;
      } else {
        return exercise;
      }
    }));
  }

  const renderItem = ({item}) => {
    return (
      <View style={card_styles.item}>
        <TouchableOpacity
          style={card_styles.infoText}
          onPress={() => onExercisePress(item.key)}
        >
          <View style={card_styles.counterView}>
            <View style={item.cardStyle}>
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
            onPress={() => navigation.navigate('ExerciseInfo', { key: item.key })}
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


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Exercises" component={Exercises} />
        <Stack.Screen name="ExerciseInfo" component={ExerciseInfo} />
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
