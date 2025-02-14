

function Dropdown({name, label, items}) {
  return (
    <div>
        <label htmlFor={name}>{label}</label>
        <select name={name} id={name}>
            {items.map((element, index) => (
                <option key={index}>{element}</option>
            ))}
        </select>
    </div>
  )
}

export default Dropdown