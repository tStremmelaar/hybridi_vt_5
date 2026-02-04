import { FlatList } from "react-native";
import { item } from "../types";
import Item from "./Item";

export default function List({list}: {list: item[]}) {
  return (
    <FlatList
      data={list}
      renderItem={({item}) => <Item text={item.text} />}
    />
  )
}