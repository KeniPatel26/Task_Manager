const BASE_URL = 'http://localhost:5000'

export const fetchTasks = async () => {
  const res = await fetch(`${BASE_URL}/tasks`)
  return res.json()
}

export const addTask = async (title) => {
  const res = await fetch(`${BASE_URL}/tasks`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title })
  })
  return res.json()
}

// export const toggleTask = async (id) => {
//   const res = await fetch(`${BASE_URL}/tasks/${id}`, {
//     method: 'PATCH'
//   })
//   return res.json()
// }

export const deleteTask = async (id) => {
  const res = await fetch(`${BASE_URL}/tasks/${id}`, {
    method: 'DELETE'
  })
  return res.json()
}

export const toggleTask = async (id) => {
  const res = await fetch(`http://localhost:5000/tasks/${id}`, {
    method: 'PATCH'
  })
  return res.json()
}
