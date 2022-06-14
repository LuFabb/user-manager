import { useState } from "react"

const useForm = (inicial) => {
  const [form, setForm] = useState(inicial)
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }
  const reset = () => {
    setForm(inicial)
  }

  return [form, handleChange, reset]
}

export default useForm