import useForm from './hooks/useForm'
import Input from './components/Input'

function App () {
  const[form, handleChange] = useForm({ name: '', lastname: ''})

  console.log(form)
  return (
    <form>
      <Input label="Name" name="name" value={form.name} onChange={handleChange}/>
      <Input label="Lastname" name="lastname" value={form.lastname} onChange={handleChange}/>
    </form>
  )
}

export default App;
