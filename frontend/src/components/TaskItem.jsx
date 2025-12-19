import { Trash2, CheckCircle2, Circle } from 'lucide-react'; // Optional icons

const TaskItem = ({ task, onToggle, onDelete }) => {
  return (
    <li className="group flex items-center justify-between bg-white border border-gray-100 rounded-2xl p-4 mb-3 transition-all duration-300 hover:shadow-md hover:border-indigo-100">
      
      {/* Checkbox + Title */}
      <div className="flex items-center gap-4 flex-1">
        <button
          onClick={() => onToggle(task._id)}
          className={`transition-colors duration-200 ${
            task.completed ? 'text-emerald-500' : 'text-gray-300 hover:text-indigo-400'
          }`}
        >
          {task.completed ? (
            <CheckCircle2 className="w-6 h-6" />
          ) : (
            <Circle className="w-6 h-6" />
          )}
        </button>

        <span
          className={`text-lg font-medium transition-all duration-300 decoration-2 
            ${task.completed 
              ? 'line-through text-gray-400 opacity-60' 
              : 'text-gray-700'
            }
          `}
        >
          {task.title}
        </span>
      </div>

      {/* Action Buttons - Hidden by default, shown on hover */}
      <div className="flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <button
          onClick={() => onDelete(task._id)}
          className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
          title="Delete task"
        >
          <Trash2 className="w-5 h-5" />
        </button>
      </div>
    </li>
  )
}

export default TaskItem