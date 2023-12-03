"use client"

import { useState, useEffect } from 'react'
// import { getAllTask } from './services/taskApi'
import { handleCreate, handleEdit, handleRemove } from './functions'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import TaskCard from './components/TaskCard'
import CreateTable from '@/global-components/table/CreateTable'
import Button from '@/global-components/Button'

const initialTask = [
  {
    id: 111,
    name: 'comprar leche',
    status: true
  },
  {
    id: 112,
    name: 'comprar sal',
    status: false
  },
  {
    id: 113,
    name: 'comprar manteca',
    status: true
  }
]

export default function ToDoListApp() {
  const viewOptions = ['list', 'table', 'card'];

  const [listTasks, setListTasks] = useState(initialTask)
  const [viewOption, setViewOption] = useState(viewOptions[0])
  const [showForm, setShowForm] = useState(false)

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const data = await getAllTask();
  //       setListTasks(data);
  //     } catch (error) {
  //       console.error('Error loading data:', error);
  //     }
  //   };

  //   // fetchData();
  // }, []);

  const handleViewOptions = (data) => {
    setViewOption(data)
  }

  // const tableData = {
  //   headers: ['tarea', 'completada', 'modificar', 'borrar'],
  //   columns: listTasks
  // }

  const prepareRow = listTasks.map((value) => ([
    value.name,
    value.status ? 'completada ✔' : 'incompleta ❌',
    <div className="flex justify-center items-center">
      <Button
        icon='🖊'
        text='editar'
        title='modificar'
      />
    </div>,
    <div className="flex justify-center items-center">
      <Button
        icon='🗑'
        text='borrar'
        title='eliminar'
      />
    </div>,
  ]))

  return (
    <section>
      <header>
        <h2 className="text-center text-uppercase">to do list</h2>
      </header>

      <section className="flex justify-between items-center px-1 py-2">
        {
          showForm ?
            <TaskForm
              onHandleCancel={() => setShowForm(!showForm)}
              onHandleSubmit={handleCreate}
            /> :
            <Button text='crear tarea ➕' title='nueva tarea' onClick={() => setShowForm(!showForm)} />
        }

        <div className="flex items-center gap-1">
          <span>vista como</span>
          <Button disabled={viewOption === viewOptions[0]} onClick={() => handleViewOptions(viewOptions[0])} text='lista' title='vista lista' />
          <Button disabled={viewOption === viewOptions[1]} onClick={() => handleViewOptions(viewOptions[1])} text='tabla' title='vista tabla' />
          <Button disabled={viewOption === viewOptions[2]} onClick={() => handleViewOptions(viewOptions[2])} text='tarjeta' title='vista tarjeta' />
        </div>
      </section>

      <section>
        {
          viewOption === viewOptions[0] &&
          <TaskList
            listData={listTasks}
            onEdit={handleEdit}
            onRemove={handleRemove}
          />
        }

        {
          viewOption === viewOptions[1] &&
          <CreateTable
            bodyData={prepareRow}
            headerData={['tarea', 'estado', 'modificar', 'borrar']}
            title='tabla de tareas'
          />
        }

        {
          viewOption === viewOptions[2] &&
          <div className="flex flex-wrap gap-2">
            {
              listTasks.map((task, index) =>
                <TaskCard
                  key={index}
                  taskData={task}
                  onEdit={handleEdit}
                  onRemove={handleRemove}
                />
              )
            }
          </div>
        }
      </section>
    </section>
  )
}
