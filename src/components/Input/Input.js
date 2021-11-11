import './Input.css';

function Input({ className, ...props }) {
  return (
    <label className={'input ' + (className || '')}>
      <input className="input__field" type="text" {...props} />
      <span className="input__msg">Please input requested format</span>
    </label>
  )
}

export default Input;