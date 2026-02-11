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
  toggleDone: (id: number) => void
  deleteItem: (id: number) => void
  parentWidth: number
}

export type todosAction =
  | { type: 'itemAdded'; itemText: string }
  | { type: 'itemDeleted'; id: number }
  | { type: 'doneToggled'; id: number }
