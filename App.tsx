import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { item } from './types';
import Item from './components/Item';
import List from './components/List';

export default function App() {
  const [list, setList] = useState<item[]>([{id: 0, text: 'Hello, World!'}, {id: 1, text: 'Hello, you!'}])

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <List list={list}/>
        <StatusBar style="auto" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  
});
