import '../component-styles/input-field.css'

const InputField = (props) => {
  const { label, onChange, id, ...inputProps } = props;
  return (
    <div className = "input-field">
      <input className='log-in-fields' {...inputProps} onChange={onChange} />
    </div>
  )
}

export default InputField