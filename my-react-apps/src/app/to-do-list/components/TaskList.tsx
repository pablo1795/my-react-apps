import { useState } from "react"
import TaskForm from "./TaskForm"
import Button from "@/global-components/Button"
import Text from "@/global-components/Text"

function TaskItem({
  dataItem = {
    id: 0,
    name: '',
    status: true,
  },
  onEdit,
  onRemove
}) {
  const [showForm, setShowForm] = useState(false)

  const handleSubmit = (data) => {
    onEdit(dataItem.id, data)
    setShowForm(!showForm)
  }

  const handleShowForm = () => {
    setShowForm(!showForm)
  }

  return (
    <li className="items-center bg-sky-100 rounded-lg flex justify-between p-3">
      {
        showForm ?
          <TaskForm
            dataForm={dataItem}
            onHandleCancel={handleShowForm}
            onHandleSubmit={handleSubmit}
          /> :
          <>
            <Text
              color="text-stone-900"
              tag="p"
              text={dataItem.name}
            />
            <Text
              color="text-stone-900"
              tag="p"
              text={dataItem.status ? 'tarea completada ✔' : 'tarea incompleta ❌'}
            />
            <div className="flex gap-4">
              <Button text="editar 🖋" onClick={() => setShowForm(!showForm)} />
              <Button text="eliminar 🗑" onClick={() => onRemove(dataItem.id)} />
            </div>
          </>
      }
    </li>
  )
}

export default function TaskList({
  listData = [{
    id: 0,
    name: '',
    status: false
  }],
  onEdit,
  onRemove
}) {
  return (
    <ul className="flex flex-col gap-2">
      {
        listData.map((data, index) =>
          <TaskItem
            key={index}
            dataItem={data}
            onEdit={onEdit}
            onRemove={onRemove}
          />
        )
      }
    </ul>
  )
}
