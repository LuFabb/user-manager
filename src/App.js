import useForm from './hooks/useForm'

function App () {
  const[form, handleChange] = useForm({ name: ''})

  console.log(form)
  return (
    <form>
      <input 
        name="name" 
        placeholder="Name" 
        value={form.name} 
        onChange={handleChange}
        />
    </form>
  )
}

export default App;
