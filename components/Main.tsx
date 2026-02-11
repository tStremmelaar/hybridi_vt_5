import { itemAdderProps, listProps } from "../types"
import { StyleSheet, Text, View } from "react-native"
import ItemAdder from "./ItemAdder"
import List from "./List"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import useTodos from "../hooks/useTodos"
import { useRef, useState } from "react"

export default function Main() {
  const [width, setWidth] = useState<number>(0)
  const todos = useTodos([])
  
  const insets = useSafeAreaInsets()

  const itemAdderProps: itemAdderProps = {add: todos.addItem}
  const listProps: listProps = {
    list: todos.value,
    toggleDone: todos.toggleDone,
    deleteItem: todos.deleteItem,
    parentWidth: width
  }

  return (
    <View style={styles.container}>
      <View
        style={[{paddingTop: insets.top}, styles.top]}
        onLayout={(event) => setWidth(event.nativeEvent.layout.width)}
      >
        <Text style={styles.title}>Todo list</Text>
        <ItemAdder props={{...itemAdderProps}} />
      </View>
      <List props={listProps} />
      <View style={[{height: insets.bottom}, styles.bottom]} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    overflow: 'hidden',
  },
  top: {
    backgroundColor: '#fff',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  title: {
    alignSelf: 'center',
    fontSize: 30,
  },
  bottom: {
    backgroundColor: '#fff',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
