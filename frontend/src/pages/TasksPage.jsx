import { useState } from 'react'
import { useTasks } from '../hooks/useTasks'
import AddTaskForm from '../components/AddTaskForm'
import TaskList from '../components/TaskList'
import { LayoutGrid, Activity, CheckCircle2, Loader2 } from 'lucide-react'

const TasksPage = () => {
  const [filter, setFilter] = useState('all')

  const {
    data: tasks = [],
    isLoading,
    error,
    addTask,
    toggleTask,
    deleteTask
  } = useTasks()

  const completed = tasks.filter(t => t.completed).length
  const running = tasks.length - completed
  const progressPercentage = tasks.length > 0 ? Math.round((completed / tasks.length) * 100) : 0

  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.completed
    if (filter === 'running') return !task.completed
    return true
  })

  if (isLoading) return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center">
      <Loader2 className="w-10 h-10 text-indigo-600 animate-spin mb-4" />
      <p className="text-slate-500 font-medium animate-pulse">Organizing your day...</p>
    </div>
  )

  if (error) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-red-50 text-red-600 p-6 rounded-2xl border border-red-100 shadow-xl text-center">
        <p className="font-bold text-lg">Something went wrong</p>
        <button onClick={() => window.location.reload()} className="mt-2 underline text-sm">Try refreshing</button>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-100 via-slate-50 to-purple-100 flex items-center justify-center p-4">
      <div className="w-full max-w-xl bg-white/80 backdrop-blur-xl rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-white p-6 sm:p-10">
        
        {/* Header Section */}
        <header className="mb-8">
          <div className="flex justify-between items-end mb-6">
            <div>
              <p className="text-indigo-600 font-bold text-sm uppercase tracking-widest mb-1">My Dashboard</p>
              <h1 className="text-4xl font-black text-slate-800 tracking-tight">Tasks</h1>
            </div>
            <div className="text-right">
              <span className="text-3xl font-black text-indigo-600">{progressPercentage}%</span>
              <p className="text-xs text-slate-400 font-bold uppercase">Done</p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden mb-8 shadow-inner">
            <div 
              className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-700 ease-out"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>

          <AddTaskForm onAdd={addTask} />
        </header>

        {/* Filters */}
        <nav className="flex p-1 bg-slate-100/50 rounded-2xl mb-8">
          {[
            { key: 'all', label: 'All', icon: <LayoutGrid className="w-4 h-4" />, count: tasks.length },
            { key: 'running', label: 'Active', icon: <Activity className="w-4 h-4" />, count: running },
            { key: 'completed', label: 'Done', icon: <CheckCircle2 className="w-4 h-4" />, count: completed }
          ].map((item) => (
            <button
              key={item.key}
              onClick={() => setFilter(item.key)}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-bold transition-all duration-200
                ${filter === item.key
                  ? 'bg-white text-indigo-600 shadow-sm ring-1 ring-black/5'
                  : 'text-slate-500 hover:text-slate-700 hover:bg-white/50'}
              `}
            >
              {item.icon}
              {item.label}
              <span className={`ml-1 text-[10px] px-1.5 py-0.5 rounded-md ${filter === item.key ? 'bg-indigo-100' : 'bg-slate-200'}`}>
                {item.count}
              </span>
            </button>
          ))}
        </nav>

        {/* Task List Container */}
        <div className="max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
          <TaskList
            tasks={filteredTasks}
            onToggle={toggleTask}
            onDelete={deleteTask}
          />
        </div>

      </div>
    </div>
  )
}

export default TasksPage