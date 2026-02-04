import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { item, itemAdderProps, listProps } from './types';
import List from './components/List';
import ItemAdder from './components/ItemAdder';

export default function App() {
  const [list, setList] = useState<item[]>([{id: 0, text: 'Hello, World!', done: false}, {id: 1, text: 'Hello, you!', done: true}])

  const ids = list.map(i => i.id)

  function addItem(text: string): void {
    const id = Math.max(...ids) + 1
    const item: item = {id: id, text: text, done: false}
    setList([...list, item])
  }
  const itemAdderProps: itemAdderProps = {add: addItem}

  function toggleDone(id: number): void {
    const newList = list.map((item) => {
      if (item.id === id) {
        return {id, text: item.text, done: !(item.done)}
      } else {
        return item
      }
    })
    setList(newList)
  }
  const listProps: listProps = {list, toggleDone}

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <ItemAdder props={{...itemAdderProps}} />
        <List props={listProps}/>
        <StatusBar style="auto" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  
});
