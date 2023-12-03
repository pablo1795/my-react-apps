const handleCreate = (data = { name: '', status: false }) => {
    const copyTask = [...listTasks]
    const newTask = {
        id: new Date().getTime(),
        name: data.name,
        status: data.status
    }
    copyTask.unshift(newTask)
    setListTasks(copyTask)
    setShowForm(!showForm)
}

const handleEdit = (
    dataId = 0,
    data = { name: '', status: false }
) => {
    const copyTask = [...listTasks]
    const resultTasks = copyTask.find((task) => task.id === dataId)
    resultTasks.name = data.name
    resultTasks.status = data.status
    setListTasks(copyTask)
}

const handleRemove = (dataId) => {
    const resultTasks = listTasks.filter((task) => task.id !== dataId)
    setListTasks(resultTasks)
}

export { handleCreate, handleEdit, handleRemove }