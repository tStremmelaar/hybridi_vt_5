import { TextInput, View } from "react-native";
import { itemAdderProps } from "../types";
import { useState } from "react";

export default function ItemAdder({props}: {props: itemAdderProps}) {
  const [text, setText] = useState<string>('')

  function submit() {
    props.add(text)
    setText('')
  }

  return(
    <View>
      <TextInput
        enterKeyHint="done"
        maxLength={300}
        onChangeText={setText}
        onSubmitEditing={submit}
        placeholder="Enter task"
        value={text}
      />
    </View>
  )
}