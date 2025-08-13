export default ({ value, onchange }) => {
  return <div>
    <button onClick={onchange}>
      binding count is {value}
    </button>
  </div>
}