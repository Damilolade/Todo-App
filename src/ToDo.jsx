import React, { useState } from 'react';
const ToDo = () => {
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleAddOrEdit = () => {
    if (todo.trim() === '') return;

    if (editIndex !== null) {
      const updatedList = [...todoList];
      updatedList[editIndex] = todo;
      setTodoList(updatedList);
      setEditIndex(null);
    } else {
      setTodoList([...todoList, todo]);
    }

    setTodo('');
  };

  const handleDelete = (index) => {
    const updatedList = todoList.filter((_, i) => i !== index);
    setTodoList(updatedList);
  };

  const handleEdit = (index) => {
    setTodo(todoList[index]);
    setEditIndex(index);
  };

  return (
          <div className="min-h-screen flex items-center justify-center bg-[url('/images/list.webp')] bg-cover bg-center">
      <div className="w-full max-w-md p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold text-center mb-4">SuperDami📝Todo List App</h2>

        <div className="flex gap-2 mb-4">
          <input
            value={todo}
            type="text"
            onChange={(e) => setTodo(e.target.value)}
            placeholder="Write Your Todo"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleAddOrEdit}
            className={`px-4 py-2 rounded-md text-white ${
              editIndex !== null ? 'bg-green-500' : 'bg-blue-500'
            } hover:opacity-90 transition`}
          >
            {editIndex !== null ? 'Update' : 'Add'}
          </button>
        </div>

        <ul className="space-y-2">
          {todoList.map((item, index) => (
            <li
              key={index}
              className="flex justify-between items-center bg-gray-100 px-4 py-2 rounded-md"
            >
              <span>{item}</span>
              <div className="space-x-2">
                <button
                  onClick={() => handleEdit(index)}
                  className="px-2 py-1 bg-yellow-400 text-white rounded hover:bg-yellow-500"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(index)}
                  className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ToDo
