import { useState } from 'react'
import Card from './components/Card'
import Container from './components/Container'
import UserForm from './components/UserForm'

function App () {
  const [users, setUsers] = useState([])

  const submit = user => {
    setUsers([
      ...users,
      user,
    ])
  }

  console.log(users)
  return (
  <div style={{ marginTop: '15%' }}>
  <Container>
    <Card>
      <div style={{ padding: 20}}>
        <UserForm submit={submit}/>
      </div>
    </Card>
    <Card>
      <ul>
        {users.map(x => 
         <li key={x.email}>{`${x.name} ${x.lastname}: ${x.email}`}</li> )}
      </ul>
    </Card>
  </Container>
  </div>
  )
}

export default App;
