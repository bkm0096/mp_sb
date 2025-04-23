

function TodoReadComponent({todo}:{todo:Todo}) {

    return (
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-2xl p-6 mb-4 border">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-xl font-semibold text-gray-800">#{todo.tno} - {todo.title}</h2>
          <span className={`text-sm px-2 py-1 rounded-full ${
            todo.complete ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'
          }`}>
            {todo.complete ? 'Complete' : 'Incomplete'}
          </span>
        </div>
        <div className="text-sm text-gray-600">
          <p><span className="font-medium">Writer:</span> {todo.writer}</p>
          <p><span className="font-medium">Due Date:</span> {todo.dueDate}</p>
        </div>
      </div>
    );

}

export default TodoReadComponent