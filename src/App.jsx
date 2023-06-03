import { useState } from 'react'
import Layout from './Layout'
import css from './App.module.css'
import Form from './components/Form/Form'
import Card from './components/Card/Card'

function App() {
    const [suscription, setSuscription] = useState(undefined)
  
    const [errorForm, setErrorForm] = useState(false)

    const submitInscription = (e) => {
      
      let error = ""
      const name = e.target.name.value
      const lastname = e.target.lastname.value
      const email = e.target.email.value
      
      if(name.trim().length < 3) error = "El nombre debe tener al menos 3 caracteres. "
      if(lastname.trim().length < 3) error = "El apellido debe tener al menos 3 caracteres."
      if(email.trim().length < 6) error = "El email debe tener al menos 6 caracteres."

    const suscription = {name, lastname, email}

    if(error === "") {
      setErrorForm(undefined)
      setSuscription(suscription)
    }

    else {
      setErrorForm(error)
      setSuscription(undefined)
    }
  }

  return (
    <Layout title={"Examen Parcial de Frontend 3"}>

      <section>
        <Form onSubmit={submitInscription}>
          <label htmlFor="name">Nombre</label>
          <input type="text" id="name" placeholder='Ingresa tu nombre' />

          <label htmlFor="lastname">Apellido</label>
          <input type="text" id="lastname" placeholder='Ingresa tu apellido' />
          
          <label htmlFor="email">Correo electronico</label>
          <input type="email" id="email" placeholder='Ingresa su email' />
        </Form>
      </section>

      <section>

        {suscription && 
        <Card style={{borderColor: "var(--color-success)", color: "green"}}>
          <h3>Gracias por suscribirte</h3>
          <h3>{suscription.name} {suscription.lastname} {suscription.email}!</h3>
        </Card>}
        {errorForm &&
        <Card style={{borderColor: "var(--color-error)", color: "red"}} >
          <h3 >{errorForm}</h3>
        </Card>}
        
      </section>
    </Layout>
  )
}

export default App
