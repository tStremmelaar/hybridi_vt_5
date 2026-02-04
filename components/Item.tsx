import { Text, View } from "react-native"

export default function Item({text}: {text: string}) {
  return (
    <View>
      <Text>{text}</Text>
    </View>
  )
}