import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { listProps } from "../types";
import Icon from '@react-native-vector-icons/material-design-icons'

export default function List({props}: {props: listProps}) {
  return (
    <FlatList
      data={props.list}
      renderItem={({item}) =>
        <View
          style={styles.item}
          key={'item' + item.id}
        >
          <Pressable onPress={() => props.toggleDone(item.id)}>
            <View style={[styles.textBlock, {width: props.parentWidth - 60}]}>
              <Text style={[styles.text, (item.done) ? styles.done : null]}>
                {item.text}
              </Text>
            </View>
          </Pressable>
          <View style={styles.buttonBlock}>
          <Pressable onPress={() => props.deleteItem(item.id)}>
            <Icon name="delete" color="#f00" style={styles.button}/>
          </Pressable>
          </View>
        </View>
      }
    />
  )
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    padding: 10,
  },
  textBlock: {
    flexGrow: 1,
    minHeight: 30,
    backgroundColor: '#949494',
  },
  text: {
    marginLeft: 5,
    padding: 5,
    fontSize: 18,
  },
  done: {
    textDecorationLine: 'line-through'
  },
  buttonBlock: {
    padding: 10,
  },
  button: {
    padding: 1,
    fontSize: 28,
  },
})
