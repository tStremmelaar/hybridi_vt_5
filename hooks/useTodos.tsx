import { useReducer } from "react";
import { list } from "../types";
import todosReducer from "../reducers/todosReducer";

export default function useTodos(initialList: list) {
  const [list, dispatch] = useReducer(todosReducer, initialList)

  function handleAddItem(itemText: string) {
    dispatch({
      type: 'itemAdded',
      itemText
    })
  }

  function handleDeleteItem(id: number) {
    dispatch({
      type: 'itemDeleted',
      id
    })
  }

  function handleToggleDone(id: number) {
    dispatch({
      type: 'doneToggled',
      id
    })
  }

  const todosProps = {
    value: list,
    addItem: handleAddItem,
    deleteItem: handleDeleteItem,
    toggleDone: handleToggleDone
  }

  return todosProps
}