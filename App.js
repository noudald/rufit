import React, { useState } from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

function Exercises({ navigation }) {
  const [exercises, setExercises] = useState([
      { title: 'Benchpress', sets: 3, sets_todo: 3, reps: 6, item: '80 kg', key: '1', cardStyle: card_styles.card },
      { title: 'Deadlift', sets: 3, sets_todo: 3, reps: 8, item: '120 kg', key: '2', cardStyle: card_styles.card },
      { title: 'Bendover Row', sets: 5, sets_todo: 5, reps: 4, item: '60 kg', key: '3', cardStyle: card_styles.card },
  ]);

  const onExercisePress = (key) => {
    setExercises(exercises.map((exercise) => {
      if (exercise.key == key) {
        if (exercise.sets_todo > 0) {
          exercise.sets_todo -= 1;
        }
        if (exercise.sets_todo == 0) {
          exercise.cardStyle = card_styles.finishedCard;
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
        exercise.cardStyle = card_styles.card;
        return exercise;
      } else {
        return exercise;
      }
    }));
  }

  return (
    <View style={ styles.container }>
      <FlatList data={ exercises } renderItem={({ item }) => (
        <View style={card_styles.listItem}>

          <View style={card_styles.buttons}>
            <TouchableOpacity onPress={() => onResetExercisePress(item.key)}>
              <View style={card_styles.resetButton}>
                <Text>Reset</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('ExerciseInfo', { key: item.key })}>
              <View style={card_styles.infoButton}>
                <Text>Info</Text>
              </View>
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={() => onExercisePress(item.key)}>
            <View style={item.cardStyle}>
              <View style={card_styles.cardContent}>
                <Text>{item.title}</Text>
                <View style={card_styles.exerciseInfo}>
                  <View style={card_styles.item}>
                    <Text>Sets</Text>
                    <Text>Remaining: {item.sets_todo}</Text>
                    <Text>Done: {item.sets - item.sets_todo}</Text>
                  </View>
                  <View style={card_styles.item}>
                    <Text>Reps: {item.reps}</Text>
                  </View>
                  <View style={card_styles.item}>
                    <Text>Weight: {item.item}</Text>
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>

        </View>
      )} />
    </View>
  );
}

const card_styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
  },
  card: {
    borderRadius: 6,
    elevation: 3,
    backgroundColor: '#eee',
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
  },
  finishedCard: {
    borderRadius: 6,
    elevation: 3,
    backgroundColor: '#98fb98',
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
  },
  cardContent: {
    marginHorizontal: 18,
    marginVertical: 20,
    alignItems: 'center',
  },
  exerciseInfo: {
    flexDirection: 'row',
  },
  item: {
    borderRadius: 6,
    marginHorizontal: 6,
    marginVertical: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttons: {
    flexDirection: 'column',
    padding: 2,
  },
  resetButton: {
    backgroundColor: '#ff6347',
    minHeight: 50,
    flex: 1,
    marginHorizontal: 4,
    marginVertical: 4,
    textAlign: 'center',
    justifyContent: 'center',
    borderRadius: 6,
  },
  infoButton: {
    backgroundColor: '#1e90ff',
    flex: 1,
    minHeight: 50,
    marginHorizontal: 4,
    marginVertical: 4,
    textAlign: 'center',
    justifyContent: 'center',
    borderRadius: 6,
  },
  //resetButton: {
  //  borderWidth: 1,
  //  borderColor: 'rgba(0,0,0,0.2)',
  //  backgroundColor: '#ff6347',
  //  alignItems: 'center',
  //  justifyContent: 'center',
  //  textAlign: 'center',
  //  marginHorizontal: 4,
  //  marginVertical: 6,
  //  width: 100,
  //  height: 100,
  //  borderRadius: 50,
  //},
  //infoButton: {
  //  borderWidth: 1,
  //  borderColor: 'rgba(0,0,0,0.2)',
  //  backgroundColor: '#1e90ff',
  //  alignItems: 'center',
  //  justifyContent: 'center',
  //  textAlign: 'center',
  //  marginHorizontal: 4,
  //  marginVertical: 6,
  //  width: 100,
  //  height: 100,
  //  borderRadius: 50,
  //},
});

import barbell_front from './static/barbell-male-deadlift-front_fFMvXc0.gif';
import barbell_side from './static/barbell-male-deadlift-side_dnPUuTI.gif';

function DeadLift() {
  return (
    <View>
      <Text>Deadlift</Text>
      <Text>Images from musclewiki.com</Text>
      <Text>Difficulty: Advanced</Text>
      <Image source={barbell_front} style={{ flex: 1, width: 300, height: null, resizeMode: 'contain' }}/>
      <Image source={barbell_side} style={{ flex: 1, width: 300, height: null, resizeMode: 'contain' }}/>
    </View>
  );
}

function ExerciseInfo({ route, navigation }) {
  if (route.params.key == 2) {
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
