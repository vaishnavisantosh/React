import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Day2 from './Day2/hook_basic'
import * as serviceWorker from './serviceWorker';
import person from './person/Person';
import Day3 from './Day3/methodRef';
import Day3_1 from './Day3/addingTwoWayBinding';
import App1 from './Assignments/AssignmentNo1/App1';
import OutputList from './Day4/OutputtingList';


//ReactDOM.render(<App1/>,document.getElementById('root'));
//ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<Day2 />, document.getElementById('root'));
//ReactDOM.render(<Day3 />,document.getElementById('root'));
//ReactDOM.render(<Day3_1 />,document.getElementById('root'));
ReactDOM.render(<OutputList/>,document.getElementById('root'));

serviceWorker.unregister();
