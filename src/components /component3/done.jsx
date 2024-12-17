import React, { useState } from "react";

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  // Handle input change
  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  // Add a new task
  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
      setTask("");
    }
  };

  // Toggle task completion
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className=" bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold text-center mb-4 text-gray-800">Done</h1>
        <div className="flex items-center mb-4">
          <input type="text" value={task} onChange={handleInputChange} placeholder="Add a new task" className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"/>
          <button
            onClick={addTask}
            className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
          >
            Add
          </button>
        </div>
        <ul className="space-y-3">
          {tasks.map((task) => (
            <li
              key={task.id}
              className={`flex justify-between items-center p-3 rounded-lg ${
                task.completed ? "bg-green-100" : "bg-red-100"
              }`}
            >
              <span
                onClick={() => toggleTask(task.id)}
                className={`flex-1 text-gray-800 cursor-pointer ${
                  task.completed ? "line-through" : ""
                }`}
              >
                {task.text}
              </span>
              <button
                onClick={() => deleteTask(task.id)}
                className="px-3 py-1 text-sm bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none"
              >
                Completed
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoApp;
