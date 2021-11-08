import './Dropdown.css';

function Dropdown({className, options, ...props}) {
  return (
    <select className="dropdown" {...props}>
      {
        options.map((option, index) => <option key={index} value={option.toLowerCase()}>{option}</option>)
      }
    </select>
  )
}

export default Dropdown;