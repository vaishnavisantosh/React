import React , {Component} from 'react';
import '../../App.css';
import UserInput from './UserInput';
import UserOutput from './UserOutput';

class App1 extends Component
{
    state={
        userName:'vaishuuuuuuuuu'
    }

    render()
    {
        return(
            <div className="App">
                <UserInput/>
                <UserOutput userName="vaishnavi"/>
            
            </div>

        );
    }
}

export default App1; 