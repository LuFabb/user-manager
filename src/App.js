import { useState } from 'react'
import useForm from './hooks/useForm'
import Input from './components/Input'
import Card from './components/Card'
import Container from './components/Container'
import Button from './components/Button'

function App () {
  const [user, setUser] = useState([])
  const[form, handleChange, reset] = useForm({
     name: '', 
     email: '',
     lastname: ''
    })

  const submit = e => {
    e.preventDefault()
    setUser([
      ...user,
      form,
    ])
    reset()
  }

  return (
  <div style={{ marginTop: '15%' }}>
  <Container>
    <Card>
      <div style={{ padding: 20}}>
      <form onSubmit={submit}>
        <Input 
          label="Name" 
          name="name" 
          value={form.name} 
          onChange={handleChange}
          placeholder='Name'
        />
        <Input 
          label="Lastname" 
          name="lastname" 
          value={form.lastname} 
          onChange={handleChange}
          placeholder='Lastname'
        />
        <Input 
          label="Email" 
          name="email" 
          value={form.email} 
          onChange={handleChange}
          placeholder='Email'
        />
        <Button>Send</Button>
      </form>
      </div>
    </Card>
    <Card>
      <ul>
        {user.map(x => 
         <li key={x.email}>{`${x.name} ${x.lastname}: ${x.email}`}</li> )}
      </ul>
    </Card>
  </Container>
  </div>
  )
}

export default App;
