import './Dropdown.css';

function Dropdown({className, options, ...props}) {
  return (
    <select className={"dropdown " + (className || '')} {...props}>
      {
        options.map(option => <option value={option.toLowerCase()}>{option}</option>)
      }
    </select>
  )
}

export default Dropdown;