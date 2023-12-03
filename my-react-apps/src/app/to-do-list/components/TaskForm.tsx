import { useState } from 'react'
import { TaskDTO } from '../types'
import Button from '@/global-components/Button'

interface TaskForm {
  dataForm: TaskDTO
  onHandleCancel: () => void
  onHandleSubmit: () => void
}

export default function TaskForm({ dataForm, onHandleCancel, onHandleSubmit }: TaskForm) {
  const [name, setName] = useState(dataForm.name)
  const [status, setStatus] = useState(dataForm.status)

  const handleChangeName = (event) => {
    setName(event.target.value)
  }

  const handleChangeStatus = (event) => {
    setStatus(!status)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    onHandleSubmit({ name, status })
    setName('')
    setStatus(false)
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="Name">Tarea</label>
        <input
          id="Name"
          type="text"
          name="name"
          value={name}
          onChange={handleChangeName}
        />
      </div>

      <div>
        <label htmlFor="Status">Estado</label>
        <input
          id="Status"
          type="checkbox"
          name="status"
          defaultChecked={status}
          readOnly={true}
          onChange={handleChangeStatus}
        />
      </div>

      <div>
        <Button text='guardar' title='guardar cambios' />
        <Button type="reset" text='cancelar' title='cancelar' onClick={onHandleCancel} />
      </div>
    </form>
  )
}
