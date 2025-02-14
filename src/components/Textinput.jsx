

function Textinput({name, label, placeholder}) {
  return (
    <div>
        <label htmlFor={name}>{label}</label>
        <input type="text" name={name} id={name} placeholder={placeholder}/>
    </div>
  )
}

export default Textinput