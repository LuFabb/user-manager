import useForm from './hooks/useForm'
import Input from './components/Input'
import Card from './components/Card'
import Container from './components/Container'

function App () {
  const[form, handleChange] = useForm({ name: '', lastname: ''})

  console.log(form)
  return (
  <Container>
    <Card>
      <div style={{ padding: 20}}>
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
      </div>
    </Card>
  </Container>
  )
}

export default App;
