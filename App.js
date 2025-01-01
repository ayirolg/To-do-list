import React, { useState, useEffect } from 'react';
import List from './components/List';
import axios from 'axios';
import './App.css'; 

function App() {
  let [lists, setList] = useState([]); 
  let [taskIds, setTaskIds] = useState([]); 
  let [inputValue, setInputValue] = useState('');

  const options = {
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
  };

  useEffect(() => {
    axios.get('//Add your url to firebase db//', options)//Add your url to firebase db//
      .then(response => {
        const data = response.data;
        const tasksArray = Object.values(data);
        const idsArray = Object.keys(data);
        setList(tasksArray);
        setTaskIds(idsArray);
        console.log(tasksArray, idsArray);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  function onSubmitData(e) {
    e.preventDefault();
    if (inputValue) {
      const priority = e.target.priority.value;
      const newTask = { task: inputValue, priority };
      setList([...lists, newTask]); 
      setInputValue('');
      axios.post('//Add your url to firebase db//', newTask, options) //Add your url to firebase db//
        .then(response => {
          console.log(response.data);
          setTaskIds([...taskIds, response.data.name]);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }

  function handleInputChange(e) {
    const { name, value } = e.target; 
    if (name === 'task_name') { 
      setInputValue(value); 
    }
  }

  function handleDelete(index) {
    const taskId = taskIds[index]; 
    axios.delete(`//Add your url to firebase db//${taskId}.json`, options)//Add your url to firebase db//
      .then(response => {
        console.log(response.data);
        const updatedLists = lists.filter((_, i) => i !== index);
        const updatedTaskIds = taskIds.filter((_, i) => i !== index);
        setList(updatedLists);
        setTaskIds(updatedTaskIds);
      })
      .catch(error => {
        console.log(error);
      });
  }

  function handleUpdate(index, updatedTask) {
    const taskId = taskIds[index];
    const updatedTaskObj = { task: updatedTask, priority: lists[index].priority };
  
    axios.put(`//Add your url to firebase db//${taskId}.json`, updatedTaskObj, options)//Add your url to firebase db//
      .then(response => {
        console.log("Update successful:", response.data);
        const updatedLists = [...lists];
        updatedLists[index] = updatedTaskObj;
        setList(updatedLists);
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <div className="container mt-5">
      <div className="card shadow-lg p-4 rounded">
        <h1 className="text-center mb-4 text-primary">To Do List</h1>
        <form onSubmit={onSubmitData} className="mb-4">
          <div className="input-group">
            <input 
              type="text" 
              name="task_name" 
              value={inputValue} 
              id="task_name" 
              onChange={handleInputChange} 
              className="form-control" 
              placeholder="Enter a new task" 
            />
            <select 
              name="priority" 
              id="priority" 
              className="form-control"
              onChange={handleInputChange}
            >
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
            <button type='submit' className="btn btn-primary">Add Task</button>
          </div>
        </form>
        <ul className="list-group">
          {lists.map((taskObj, index) => (
            <List 
              key={taskIds[index]} 
              task={taskObj.task} 
              priority={taskObj.priority} 
              onDelete={() => handleDelete(index)} 
              onUpdate={(updatedTask) => handleUpdate(index, updatedTask)} 
              index={index} 
            />
          ))}
        </ul>
    </div>
    </div>
  );
}
export default App;
