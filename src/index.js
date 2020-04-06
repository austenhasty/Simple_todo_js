document.addEventListener('DOMContentLoaded', () => {

  const form = document.getElementById('create-task-form')
  getDate()
  form.addEventListener('submit', addTask)


});

function getDate() {
  const title = document.getElementById('title')

  let h5 = document.createElement('h5')
  let date = new Date().toLocaleDateString()
  console.log(date)
  h5.textContent = date
  title.appendChild(h5)
}

function addTask(ev) {
  ev.preventDefault()
  const newTaskDescription = document.getElementById('new-task-description')
  const newTask = document.createElement('li')
  newTask.textContent = newTaskDescription.value + ' '

  // console.log(newTaskDescription.value.length)
  if (newTaskDescription.value.length === 0) {
    window.alert('Please enter a task!')
    return false
  }

  appendTask(newTask)
}

function appendTask(newTask) {
  const list = document.getElementById('list')
  const deleteBtn = document.createElement('button')
  const newTaskDescription = document.getElementById('new-task-description')


  deleteBtn.textContent = 'Delete'

  list.appendChild(newTask)
  newTask.appendChild(deleteBtn)
  newTaskDescription.value = ''

  deleteBtn.addEventListener('click', () => {
    list.removeChild(newTask)
  })
}
