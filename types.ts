export type item = {
  id: number
  text: string
}

export type itemAdderProps = {
  add: (text: string) => void
}