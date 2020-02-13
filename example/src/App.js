import React from 'react'
import { Calendar } from 'react-native-big-calendar'
import { View, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f8f8f8',
    height: '100%',
  },
  calendar: {
    borderWidth: 1,
    borderColor: '#eee',
  },
})

const events = [
  {
    title: 'Meeting',
    start: new Date(2020, 1, 11, 10, 0),
    end: new Date(2020, 1, 11, 10, 30),
  },
  {
    title: 'Coffee break',
    start: new Date(2020, 1, 11, 15, 45),
    end: new Date(2020, 1, 11, 16, 30),
  },
]

export default function App() {
  return (
    <View style={styles.container}>
      <Calendar style={styles.calendar} height={1200} events={events} mode="3days" />
    </View>
  )
}
