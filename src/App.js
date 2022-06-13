import useForm from './hooks/useForm'
import Input from './components/Input'
import Card from './components/Card'

function App () {
  const[form, handleChange] = useForm({ name: '', lastname: ''})

  console.log(form)
  return (
    <Card>
      <form>
        <Input 
          label="Name" 
          name="name" 
          value={form.name} 
          onChange={handleChange}
        />
        <Input 
          label="Lastname" 
          name="lastname" 
          value={form.lastname} 
          onChange={handleChange}
        />
      </form>
    </Card>
  )
}

export default App;
