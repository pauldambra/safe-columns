import { h } from 'hyperapp'

const Columns = (props) => (
  props.columns.map(column =>
      <div class='column'>
        <h1>{column}</h1>
      </div>
  )
)

const Onwards = props => {
  if (props.safeAchiever) {
    return <h1 class="you-did-it"> 🎉 🎉 You did it! You're SAFe accredited! 🎉 🎉 </h1>
  } else {
    return <button onclick={() => props.onClick(props.state)}>
      Ring the bell
    </button>
  }
}

const fontStyle = fontSize => 
  `font-size: ${fontSize}%;`


export default (state, actions) => (
  <div id="outlet" style={fontStyle(state.fontSize)}>
    <div class='columns'>
      <Columns columns={state.columns} />
    </div>
    <Onwards 
      state={state}
      safeAchiever={state.safeAchiever}
      onClick={actions.safeify} />
  </div>
)