import { useReducer, useState } from "react";
import { item, list } from "../types";
import todosReducer from "../reducers/todosReducer";

export default function useTodos(initialList: list) {
  const [list, dispatch] = useReducer(todosReducer, initialList)

  function handleAddItem(itemText: string) {
    dispatch({
      type: 'itemAdded',
      itemText
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
    toggleDone: handleToggleDone
  }

  return todosProps
}