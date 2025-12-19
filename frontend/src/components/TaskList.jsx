import TaskItem from './TaskItem'
import { ClipboardList, CheckCircle } from 'lucide-react'

const TaskList = ({ tasks, onToggle, onDelete }) => {
  const completedCount = tasks.filter(t => t.completed).length;
  const totalCount = tasks.length;

  if (totalCount === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 px-4 border-2 border-dashed border-gray-200 rounded-3xl bg-gray-50/50">
        <div className="bg-white p-4 rounded-full shadow-sm mb-4">
          <ClipboardList className="w-10 h-10 text-gray-300" />
        </div>
        <h3 className="text-gray-600 font-semibold text-lg">No tasks yet</h3>
        <p className="text-gray-400 text-center max-w-[200px]">
          Add your first task above to get started!
        </p>
      </div>
    )
  }

  return (
    <div className="mt-6">
      {/* Task Header / Stats */}
      <div className="flex items-center justify-between mb-4 px-2">
        <h2 className="text-gray-700 font-bold text-sm uppercase tracking-wider flex items-center gap-2">
          Your Tasks 
          <span className="bg-indigo-100 text-indigo-600 px-2 py-0.5 rounded-full text-xs">
            {totalCount}
          </span>
        </h2>
        
        {totalCount > 0 && (
          <div className="flex items-center gap-1 text-xs font-medium text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
            <CheckCircle className="w-3 h-3" />
            {completedCount} / {totalCount} Done
          </div>
        )}
      </div>

      {/* The List */}
      <ul className="space-y-4">
        {tasks.map(task => (
          <TaskItem
            key={task._id}
            task={task}
            onToggle={onToggle}
            onDelete={onDelete}
          />
        ))}
      </ul>
    </div>
  )
}

export default TaskList