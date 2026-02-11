import AsyncStorage from "@react-native-async-storage/async-storage"
import { useEffect, useRef, useState } from "react"
import { item, itemAdderProps, listProps } from "../types"
import { FlatList, StyleSheet, Text, View } from "react-native"
import ItemAdder from "./ItemAdder"
import List from "./List"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import useTodos from "../hooks/useTodos"

export default function Main() {
  const todos = useTodos([])
  const itemAdderProps: itemAdderProps = {add: todos.addItem}


  const insets = useSafeAreaInsets()
  const key = 'list-key'
  const listRef = useRef<FlatList>(null)

  const listProps: listProps = { list: todos.value, listRef, toggleDone: todos.toggleDone }
  return (
    <View style={styles.container}>
      <View style={[{paddingTop: insets.top}, styles.top]}>
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
