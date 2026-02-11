import { item, list, todosAction } from "../types";

export default function todosReducer(todos: list, action: todosAction) {
  switch(action.type) {
    case 'itemAdded': {
      let id = 0
      if (todos.at(-1)) {
        id = todos.at(-1)!.id + 1
      }
      const item: item = {id: id, text: action.itemText, done: false}

      return [...todos, item]
    }
    case 'itemDeleted': {
      const newList = todos.filter(item =>
        item.id !== action.id
      )

      return newList
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
