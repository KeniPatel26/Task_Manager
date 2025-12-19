import { useState } from 'react'
import { Plus } from 'lucide-react' // Optional: Install lucide-react for icons

const AddTaskForm = ({ onAdd }) => {
  const [title, setTitle] = useState('')
  const [isFocused, setIsFocused] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    if (!title.trim()) return
    onAdd(title)
    setTitle('')
  }

  return (
    <form 
      onSubmit={submit} 
      className={`
        flex gap-3 p-2 rounded-2xl transition-all duration-300
        ${isFocused ? 'bg-white shadow-lg ring-1 ring-indigo-100' : 'bg-gray-50 shadow-sm'}
      `}
    >
      <div className="relative flex-1 flex items-center">
        {/* Decorative Icon */}
        <Plus className={`ml-3 absolute w-5 h-5 transition-colors ${isFocused ? 'text-indigo-500' : 'text-gray-400'}`} />
        
        <input
          className="w-full pl-11 pr-4 py-3 bg-transparent border-none focus:ring-0 text-gray-700 placeholder-gray-400 text-lg"
          placeholder="What needs to be done?"
          value={title}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChange={e => setTitle(e.target.value)}
        />
      </div>

      <button 
        type="submit"
        className="
          bg-indigo-600 hover:bg-indigo-500 active:scale-95 
          text-white px-6 py-2 rounded-xl font-bold
          transition-all duration-200 shadow-md hover:shadow-indigo-200
          flex items-center gap-2
        "
      >
        <span>Add Task</span>
      </button>
    </form>
  )
}

export default AddTaskForm