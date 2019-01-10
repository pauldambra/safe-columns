import { app } from 'hyperapp'
import view from './main.jsx'
import { generate } from './column.js'

import './styles/app.css'

const arrayEquals = (l, r) => l.length === r.length &&
    l.every((value, index) => value === r[index])

const ideal = ['ToDo', 'Doing', 'Measuring']

const shrinkFont = fontSize => {
  console.log(fontSize, 'shrinking')
  const candidate = fontSize - 2
  console.log(candidate, 'aiming for')
  return candidate >= 40 ? candidate : 40
}

const state = {
  columns: ideal,
  fontSize: 100
}

const actions = {
  safeify: state => {
    let c = arrayEquals(state.columns, ideal) ? [] : state.columns

    try {
      c.push(generate())
      return {
        columns: c,
        fontSize: shrinkFont(state.fontSize)
      }
    } catch (error) {
      console.log(error)
      return { safeAchiever: true }
    }
  }
}

app(
  state,
  actions,
  view,
  document.body)
