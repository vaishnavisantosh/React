import React ,{Component} from 'react';
import Person from '../person/Person'
import App from '../App.css'


class OutputtingLists extends Component
{
    state={
        persons:[
        {name:"vaishnavi", age:21},
        {name:"madhvi", age:23},
        {name:"sonu", age:21},
        {name:"bhagya", age:22}
        ],
        showPersons:false
    }

    buttonClickHandler=()=> {
        
       this.setState({
         persons:[
         {name:"vaishu", age:21},
         {name:"madhvi", age:23},
         {name:"sonu", age:21},
         {name:"bhagya", age:22}
       ]
   
       });
     }

     toggleNameHandler=()=>{
         let doesShow = this.state.showPersons;
         
         this.setState({showPersons:!doesShow});

     }



    render()
    {
        const style={
            border:'1px solid blue',
            padding:'20px',
            cursor:'pointer',
            backgroundcolor:'white'
          };

        let persons=null;  

        return(
            <div className="App">
                <button 
                style={style}
                onClick={this.buttonClickHandler}>click Me </button>

                <Person name={this.state.persons[0].name}/>
                <Person name={this.state.persons[1].name}/>
                <Person name={this.state.persons[2].name}/>
                <Person name={this.state.persons[3].name}/>

            </div>
        );
    }
} 

export default OutputtingLists;