import { app } from 'hyperapp'
import view from './main.jsx'
import { generate } from './column.js'

import './styles/app.css'

const arrayEquals = (l, r) => l.length === r.length &&
    l.every((value, index) => value === r[index])

const ideal = ['ToDo', 'Doing', 'Measuring']

const state = {
  columns: ideal
}

const actions = {
  safeify: columns => {
    let c = arrayEquals(columns, ideal) ? [] : columns

    try {
      c.push(generate())
      return {
        columns: c
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
