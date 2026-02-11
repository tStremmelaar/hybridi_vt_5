import { RefObject } from "react"
import { FlatList } from "react-native"

export type item = {
  id: number
  text: string
  done: boolean
}

export type list = item[]

export type itemAdderProps = {
  add: (itemText: string) => void
}

export type listProps = {
  list: list
  listRef: RefObject<FlatList<any> | null>
  toggleDone: (id: number) => void
}

export type todosAction =
  | { type: 'itemAdded'; itemText: string }
  | { type: 'doneToggled'; id: number }
