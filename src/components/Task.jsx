import React, {useState} from "react";
import '../stylesheet/Task.css';
import { BiRadioCircle, IcoBiRadioCirclenName } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import { Tooltip } from 'react-tooltip'

function Task({isActive, text, id, del, isClickedCallback}){

  const [tasks, setTasks] = useState([]);

  const handleClick = () =>{
    isClickedCallback('3', id);
    // setDone(!isActive);
  }

  const handleDueClick = () =>{
    isClickedCallback('2', id);
  }


  return(
    <div className="task-container">
      <Tooltip id="tooltip"/>
      <div className="btn-div" onClick={handleDueClick}
      data-tooltip-content="Doing"
      data-tooltip-id="tooltip"
      data-tooltip-place="left"
      >
      <BiRadioCircle className="to-doing-btn"/>
      </div>
      <div  onClick={handleClick}>
        <h2 className={`task-text ${isActive ? "" : "stroke"}`}>{text}</h2>
      </div>
      <div className="btn-div2" 
      data-tooltip-content="Delete"
      data-tooltip-id="tooltip"
      data-tooltip-place="right"
      onClick={() => del(id)}  >
          <RxCross2 className="del-btn"/>
      </div>
    </div>
  );
}
export default Task;