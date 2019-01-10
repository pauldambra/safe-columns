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
    return <button onclick={() => props.onClick(props.columns)}>
      Ring the bell
    </button>
  }
}

export default (state, actions) => (
  <div id="outlet">
    <div class='columns'>
      <Columns columns={state.columns} />
    </div>
    <Onwards 
      columns={state.columns}
      safeAchiever={state.safeAchiever}
      onClick={actions.safeify} />
  </div>
)