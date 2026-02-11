import { item, list, todosAction } from "../types";

export default function todosReducer(todos: list, action: todosAction) {
  switch(action.type) {
    case 'itemAdded': {
      let id = 0
      if (todos.length !== 0) {
        const ids = todos.map(i => i.id)
        id = Math.max(...ids) + 1
      }
      const item: item = {id: id, text: action.itemText, done: false}

      return [...todos, item]
    }
    case 'doneToggled': {
      const newList = todos.map((item) => {
        if (item.id === action.id) {
          return {id: item.id, text: item.text, done: !(item.done)}
        } else {
          return item
        }
      })

      return newList
    }
  }
}
