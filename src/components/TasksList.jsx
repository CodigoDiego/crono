import React, { useState, useEffect } from "react";
import Task from "./Task";
import ToDoForm from "./ToDoForm";
import {v4 as uuidv4} from 'uuid';

function TasksList(){

  
  const initialtask = {
    id:uuidv4(),
    text: "This is a sample task. You can complete it by clicking on it, delete it by clicking on the 'X' icon on the right or send it to 'doing' by clicking the icon on the left side",
    isActive: true
  };
  const [tasks, setTasks] = useState([initialtask]);
  const [tasksOD, setOnDoing] = useState([]);
  const [tasksDone, setDone] = useState([]);
  
  // useEffect(()=>{
  //   setTasks(initialtask);
  // },[tasks]);

    const getActualTask = (n, selectedId) => {
      let task = tasks.find((task) => task.id === selectedId);
      if(n ==='2'){
        const updatedTasks = tasks.filter((task) => task.id !== selectedId);
        setTasks(updatedTasks);
        addOnDoing(task); //Agrega la tarea al arreglo de onDoing

      }else if(n ==='3'){
        let taskToDone = tasksOD.find((taskToDone) => taskToDone.id === selectedId);
        if(!taskToDone){
          taskToDone = tasks.find((taskToDone) => taskToDone.id === selectedId);
        }
        setTasks(tasks.filter((task) => task.id !== selectedId));
        setOnDoing(tasksOD.filter((task) => task.id !== selectedId));
        try {
          addToDone(taskToDone);
        } catch (error) {
          console.log("Task already done");
        }
      }
    }

    const addTask = task =>{
      if(task.text.trim()){
        task.text = task.text.trim();
        const updatedTasks = [task, ...tasks];
        setTasks(updatedTasks);
      }
    }

    const addOnDoing = taskOD =>{
      if(taskOD.text.trim()){
        taskOD.text = taskOD.text.trim();
        const onDoing = [taskOD, ...tasksOD];
        setOnDoing(onDoing);
      }
    }

    const addToDone = taskDone => {
      if(taskDone.text.trim()){
        taskDone.text = taskDone.text.trim();
        const onDone = [taskDone, ...tasksDone];
        setDone(onDone);
      }
    }

    const delTask = id => {
      const updatedTasks = tasks.filter(task => task.id !== id);
      const updatedOnDoing = tasksOD.filter(taskOD => taskOD.id !==id);
      const updatedDone = tasksDone.filter(taskDone => taskDone.id !==id);
      setTasks(updatedTasks);
      setOnDoing(updatedOnDoing);
      setDone(updatedDone);
    }

    const [ubicacion, setUbicacion] = useState('2');
    const handleMove = (prevUbicacion, newId) => {
      getActualTask(prevUbicacion, newId);
      prevUbicacion === '2' ? setUbicacion('2') : setUbicacion('3');
    }

    return(
        <div className='container'>
        <ToDoForm onSubmit={addTask}/>
        <div className='cards 1'>
          <h2>To do</h2>
          {
            tasks.map((task) =>
            <Task
            key={task.id}
            isActive={true}
            id={task.id}
            text={task.text}
            isClickedCallback={handleMove}
            pos={handleMove}
            del={delTask} />
            )
          }
        </div>

        <div className="cards 2">
          <h2>Doing</h2>
          {
            tasksOD.map((taskOD) =>
            <Task
            key={uuidv4()}
            isActive={true}
            id={taskOD.id}
            text={taskOD.text}
            isClickedCallback={handleMove}
            del={delTask} />
            )}
        </div>

        <div className="cards 3">
            <h2>Done</h2>
            {tasksDone.map((taskDone) => 
            <Task
            key={uuidv4()}
            isActive={false}
            id={taskDone.id}
            text={taskDone.text}
            isClickedCallback={handleMove}
            del={delTask}  />
        )}
        </div>
        </div>
    );
}
export default TasksList;