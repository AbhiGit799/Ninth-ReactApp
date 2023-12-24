import PT from "prop-types";
import { Component } from "react";

// export class App extends Component
// {

//   constructor()
//   {
//     super();
//     this.state={
//       count:0
//     }
//   }

//   //Here, we did not used return thats why used () after (state,props)=>
//   // handleIncrement = ()=>{
//   //   this.setState(
//   //     (state,props)=>
//   //      (
//   //       {count:state.count+1}
//   //       )
//   //     )
//   // }

//   //Here, we used return so {} after (state,props)=> and {} after return
//   // handleDecrement = ()=>{
//   //   this.setState(
//   //     (state,props)=>
//   //     {
//   //       return {count:this.state.count-1}
//   //     }
//   //   )
//   // }

//   custhandleIncrement = (val)=>{
//     this.setState(
//       (state,props)=>
//        {
//           if(val === 1)
//           {
//             return {count:this.state.count+1}
//           }

//           if(val===-1)
//           {
//             return {count:this.state.count-1}
//           }

//        }
        
        
//       )


//   }

//   render()
//   {
//     return(
//     <>
//         Counter : {this.state.count}
//         {/* <br/>
//         <button type="button" onClick={this.handleIncrement}>Increment By One</button>
//         &nbsp; &nbsp;
//         <button type="button" onClick={this.handleDecrement}>Decrement By One</button> */}

//         <br/>
//         <button type="button" onClick={()=>this.custhandleIncrement(1)}>Increment By One</button>
//         &nbsp; &nbsp;
//         <button type="button" onClick={()=>this.custhandleIncrement(-1)}>Decrement By One</button>

//     </>
//     )
//   }
// }




// export class Bpp extends Component
// {

//   constructor()
//   {
//     super();
//     this.state={
//       isToggleOn:true
//     }
//   }

//   handleToggle = ()=>{
//     this.setState((state,props)=>{
//       return {isToggleOn:!state.isToggleOn}
//     })
//   }

//   render()
//   {
//     return(
//     <>
      
//         <button type="button" onClick={this.handleToggle}>{this.state.isToggleOn?'ON':'OFF'}</button>
        
//     </>
//     )
//   }
// }





//How to access parent's state in child component in React

export class ShowCounter extends Component
{
  constructor()
  {
    super();

  }

  render()
  {
    return(
    <>
      <h2>Show Counter Component (Child Component)</h2>
      Counter : {this.props.counter}
    </>
    )
  }
}




export class Cpp extends Component
{
  constructor()
  {
    super();
    this.state={
      count:0
    }
  }

    //Here, we did not used return thats why used () after (state,props)=>
  handleIncrement = ()=>{
    this.setState(
      (state,props)=>
       (
        {count:state.count+1}
        )
      )
  }

  //Here, we used return so {} after (state,props)=> and {} after return
  handleDecrement = ()=>{
    this.setState(
      (state,props)=>
      {
        return {count:this.state.count-1}
      }
    )
  }

  render()
  {
    return(
    <>
       <h2>Cpp Component (Parent Component)</h2>

      Counter : {this.state.count}
      <br/>
      
      <button type="button" onClick={this.handleIncrement}>Increment By One</button>
      
      &nbsp; &nbsp;
      
      <button type="button" onClick={this.handleDecrement}>Decrement By One</button> 

      
      <br/> <br/>

      <ShowCounter counter={this.state.count}/>

    </>
    )
  }
}



//How to access child's state from parent component in React


export class Dpp extends Component
{
  constructor()
  {
    super();
    this.state={
      username:''
    }
  }

  handleInput = (e) =>{

    // this.setState({
    //   username:e.target.value
    // })

   // console.log(this.props.nameHandler); //here we get function
  
  //  this.props.nameHandler(this.state.username); //Asynchronous calling

  //callback

    this.setState({
      username:e.target.value
    },()=>{
      this.props.nameHandler(this.state.username);
    })
  
  }

  render()
  {
    return(<>
    <h2>Child Component</h2>
    <label htmlFor="">UserName</label> &nbsp;
    <input type="text" name="" id="" onChange={this.handleInput}/>
    
    <h3>Entered Username = {this.state.username}</h3>

    </>)
  }

}


export class Epp extends Component
{
  getUserName=(name)=>{
    console.log("In Parent name = "+name);
  }

  render()
  {
    return(<>
     
     <h2>Epp Component (Parent Component)</h2>
     <br/>

     <Dpp nameHandler={this.getUserName}/>

    </>)
  }
}


//How to update parent state from child component in React


// export class Fpp extends Component
// {
//   constructor()
//   {
//     super();
//     this.state = {
//       messageShown:true
//     }

//   }

//   handleMessage = () =>{
//     this.setState((state,props)=>({
//       messageShown:!state.messageShown
//     }));
//   }


//   render()
//   {
//     return(<>
    
//     <h2>Parent Component</h2>

//     <h3>Message : {this.state.messageShown?'Show':'Not Show'}</h3>

//     {/* <button type="button" onClick={this.handleMessage} >Update</button>
//    */}

//     <Gpp handleAction={this.handleMessage}/>
    
//     </>)
//   }
// }

// class Gpp extends Component
// {
//   render()
//   {
    
//     return(<>
//     <h2>Child Component</h2>

//     <button type="button" onClick={this.props.handleAction} >Update</button>
    
//     </>)
//   }
// }



//Passing data from child components to parent components

export class Hpp extends Component
{
  constructor()
  {
    super();
    this.state={
      course:"N/A"
    }
  }

  handleCourse = (name)=>{
    this.setState((state,props)=>{
      return {course:name} 
    })
  }

  render()
  {
    return(<>
      <h2>Hpp Component (Parent Component)</h2>

      <h3>Course Name : {this.state.course}</h3>
      <br />

      <Angular updateAngCourse={this.handleCourse}/>

      <br /><br />

      <React updateReactCourse={this.handleCourse}/>

    </>)
  }
}

function Angular(props)
{
  return(<>
    <h2>Angular (Child Component) </h2>

    <button type="button" onClick={()=>{props.updateAngCourse('Angular')}}>Angular</button>

  </>)
}

function React(props)
{
  return(<>
    <h2>React (Child Component) </h2>

    <button type="button" onClick={()=>{props.updateReactCourse('React')}}>React</button>

  </>)
}



export class Ipp extends Component
{
  constructor()
  {
    super();
    this.state={
      username:'',
      password:''
    }
  }

  // nhandleInput = (e) =>{

  //   this.setState({username:e.target.value},
  //     ()=>{
  //       this.props.userHandler(this.state);
  //     })
   
  // }

  // phandleInput = (e) =>{

  //   this.setState({password:e.target.value},
  //     ()=>{
  //       this.props.userHandler(this.state);
  //     })
   
  // }

   handleInput = (e) =>{
    
    //alert(e.target.name);

    this.setState({[e.target.name]:e.target.value},
      ()=>{
        this.props.userHandler(this.state);
      })
   
  }

  render()
  {
    return(<>
     <h2>Child Component</h2>

     {/* <label>UserName: </label> &nbsp;
     <input type="text" name="" id="" onChange={this.nhandleInput}/>
     <br/>
     <br/>
     <label>Password</label> &nbsp;
     <input type="text" name="" id="" onChange={this.phandleInput}/>
     <br/> */}

     {/* In below input type=text name = state name that we define inside constructor */}

     <label>UserName: </label> &nbsp;
     <input type="text" name="username"onChange={this.handleInput}/>
     <br/>
     <br/>


     <label>Password</label> &nbsp;
     <input type="text" name="password" onChange={this.handleInput}/>
     <br/>

     <h3>Entered Username: {this.state.username}</h3>
    
     <h3>Entered Password: {this.state.password}</h3>


    </>)
  }

}


export class Jpp extends Component
{
  getUserData=(data)=>{
    console.log(`In Parent : UserName is ${data.username} and Password = ${data.password}`);
  }

  render()
  {
    return(<>
     
         <h2>Jpp Component (Parent Component)</h2>
         <Ipp userHandler={this.getUserData}/>

    </>)
  }
}
