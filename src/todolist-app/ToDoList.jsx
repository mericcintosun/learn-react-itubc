import { useState } from "react";

const ToDoList = () => {
  const [tasks, setTasks] = useState(["Yemek ye", "Kod yaz", "Uyu"]);
  const [newTask, setNewTask] = useState("");

  const inputChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks((tasks) => [...tasks, newTask]);
      setNewTask("");
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const moveTaskUp = (index) => {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  };

  const moveTaskDown = (index) => {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center border">
      <div className="border shadow-lg rounded-lg p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">Todo List App</h1>
        <div className="flex mb-4">
          <input
            type="text"
            placeholder="Enter a task..."
            value={newTask}
            onChange={inputChange}
            className="w-full p-2 border border-gray-300 rounded-l"
          />
          <button
            onClick={addTask}
            className="bg-blue-500 text-white p-2 rounded-r hover:bg-blue-600"
          >
            Add
          </button>
        </div>

        <ol className="list-decimal ml-5">
          {tasks.map((task, index) => (
            <li key={index} className="mb-2 flex items-center">
              <span className="flex-1">{task}</span>
              <div className="space-x-2">
                <button
                  onClick={() => deleteTask(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  Delete
                </button>
                <button
                  onClick={() => moveTaskUp(index)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  UP!
                </button>
                <button
                  onClick={() => moveTaskDown(index)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  DOWN!
                </button>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default ToDoList;
