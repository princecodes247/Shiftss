// import logo from './logo.svg';
import React, {Profiler, useState, useEffect, useRef} from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

// import logo from './lloyd.svg';
// import './style.css';


const App = () => {
let groupsList = ["A", "B", "C"]
let leadingShift = ["B", "C", "A"]
let aleadingShiftDays = 2
let ashiftLength = 3
let duration = 31
let exceptions = [2,6]
   const [heading, setHeading] = useState("");
  const [subheading, setSubheading] = useState("");
  const [groupsNum, setGroupsNum] = useState(0);
  const [workTable, setWorkTable] = useState([]);
  const [groups, setGroups] = useState(["A", "B", "C"]);
  const [roaster, setRoaster] = useState([]);
  const [groupName, setGroupName] = useState("");
  const [isLeadingShift, setIsLeadingShift] = useState(false);
  const [leadingShiftDays, setLeadingShiftDays] = useState(0);
  const [monthsList, setMonthsList] = useState([]);
  const [yearsList, setYearsList] = useState([]);
  const [shiftLength, setShiftLength] = useState([]);

const Row = (props) => {
	return <tr>
		{props.list.map(item => {
			return <Cell value={item} />
		})}
	</tr>
}
const Cell = (props) => {
	return <td>{props.value}</td>
}
const createRoaster = (groups, shiftLength, days) => {
  for (var i = 1; i <= days; i++) {
    let list = [] 
    if (i % shiftLength == 0 ) {
	     let moved = groups.shift()
       groups.push(moved)
    }
    let list = 
	setRoaster(list)
  }
  console.log(roaster)
}
useEffect(() => {
	createRoaster(["1", "2", "3"], 2, 14)
	// return dd

}, [])

  const GroupNameInput = () => {
  	return <input type="text" className="groupName" value="A"/>
  }
  return (
    <main>
    	 <section>
    <h1>Shifts!</h1>
      <form action="">
        <label for="">
          <p>Heading</p>
          <input id="heading" type="text" onChange={e=>setHeading(e.target.value)}/>
        </label>
        <label for="">
          <p>Subheading</p>
          <input id="subheading" onChange={e=>setSubheading(e.target.value)} type="text"/>
        </label>

       

        <label for="">
          <p>Number of Groups</p>
          <input id="groupsNum" type="number" max="26" onChange={e=>setGroupsNum(e.target.value)} min="2"/>
        </label>
        <label for="">
          <p>Group Names</p> 
         	<GroupNameInput/>
          <input type="text" className="groupName" value="B"/>
          <input type="text" className="groupName" value="C"/>
        </label>
        <div class="">
          <label for="">
           <p>Any Leading Shift?</p>
           <input type="checkbox" name="" id="isLeadingShift" onChange={e=>setIsLeadingShift(e.target.value)}/>
         </label>
         <label for="">
           <p>Number of days for leading shift</p>
           <input type="number" name="leadingShiftDays" id="leadingShiftDays" onChange={e=>setLeadingShiftDays(e.target.value)} min="0" max="4"/>
         </label>
         </div>
      
        <label for="">
          <p>Month</p>
          <input type="date" name="" id=""/>
          <select name="" onChange={e=>setMonthsList(e.target.value)} id="monthsList">
            <option value="day">A Day</option>
          </select>
        </label>
        <label for="">
          <p>Year</p>
          <select name="" onChange={e=>setYearsList(e.target.value)} id="yearsList">
            <option value="day">A Day</option>
          </select>
        </label>

        <label for="">
          <p>How long is a shift (in days)</p>
          <input onChange={e=>setShiftLength(e.target.value)} id="shiftLength" type="number"/>
        </label>
        <label for="">
          <input type="checkbox" name="" id=""/>
          <p>Days to skip (like Public holidays)</p>
          <input type="text"/>
        </label>
    
      
         <label for="">
          <p>Save Configuration</p>
          <input type="checkbox" name="" id=""/>
         
        </label>
    
      </form>
      <button>Create</button>
    </section>
    <section>
      <h2>Result</h2>
      <div class="result">
        <h1 id="headingTarget">{heading}</h1>
        <h3 id="subheadingTarget">{subheading}</h3>
        <table>
          <thead>
            <tr>
              <th>Date</th>
            <th>Shifts</th>
            <th>Notes</th>
            </tr>
            <tr>
              <th>__</th>
            <th>Shifts</th>
            <th>__</th>
            </tr>
          </thead>
          <tbody>
           {roaster.map(day => {
            return (<Row list={day}/>)
           })}
          </tbody>
        </table>
      </div>
    </section>
    </main>
  );
};

export default App;

    // <Router>
    //   <React.Fragment>
    //     <Route token={token} path="/" exact component={Home}></Route>
    //     <Route token={token} path="/login" exact component={Login}></Route>
       
      
    //   </React.Fragment>
    // </Router>