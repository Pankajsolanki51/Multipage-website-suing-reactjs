/*import React from "react";
import Amazon from "./Amazon";

import { Card } from "./Card";
import Netflix from "./Netflix";
import Sdata from "./Sdata";

const favsr = "youtube";
const FavSeries = () => {
    if (favsr === "netflix") {
        return <Netflix />;
    }
    else {
        return <Amazon />;
    }
};
*/
/*const App = () =>
(
    <>
        <h1 className="heading__style">List of Top 5 Netflix Series</h1>
        {/*<FavSeries/>*/
/*  {/*ternary operator*/
/* {(favsr === "netflix") ? <Netflix /> : <Amazon />}
</>
);
export default App;*/


/* SLOT Machine */
/*import React from 'react';
const SlotM=(props)=>{
 let x = props.x;
 let y = props.y;
 let z =props.z;

 if ( (x===y)&&(y===z)){
    return (
        <>
            <div className='slot_1'>
                <h1>{x} {y} {z}</h1>
                <h1>This is Matching</h1>
                <hr/>
            </div>
        </>
    )
 }
 else{
    return (
        <>
            <div className='slot_1'>
                <h1>{x} {y} {z}</h1>
                <h1>This is not  Matching</h1>
                <hr/>
            </div>
        </>
    )
 }
}
const App = ()=>{
 return (
    <>
        <h1 className='heading__style'> 🎰 Welcome to {" "} <span style={{fontWeight:"bold "}}>Slot Machine Game 🎰</span>  </h1>
        
            <div className='slot_2'>
        <SlotM x='😄' y='😄' z='😄'/>
        <SlotM x= '😊' y= '😄' z='🍎'/>
        <SlotM x='🍇' y='🍌' z='😄'/>
        <SlotM x='🍊' y='🍊' z='🍊'/>
        </div>
    </>
 )
};
export default App;*/

// react hooks (usestaTE)
/*import React, { useState } from 'react';
const App = () => {
    const IncNum = () => {
        setCount(count-1);
        // console.log("clicked " + count++);
    };
    const state = useState();
    const [count, setCount] = useState(50);
    console.log(state);
    return (
        <>
            <h1 className='zero'>{count}</h1>
            <button onClick={IncNum}>Click on me </button>
        </>
    );
};
export default App;*/

// HOOKS IN REACT CHALLENGE;
/*import React, { useState } from "react";

const App = () => {
    let newTime = new Date().toLocaleTimeString()
    const [cttime, settime] = useState(newTime);
    const Updatetime = () => {
        let newTime = new Date().toLocaleTimeString();
        settime(newTime);
    }

    return (
        <>
            <h1>{cttime}</h1>
            <button onClick={Updatetime}>Get Time</button>
        </>
    );
}
export default App;*/

// digital clock using react 
/*import React, { useState } from "react";
const App = () => {

    let time = new Date().toLocaleTimeString();
    const [ctime, settime] = useState(time);
    const Updatetime=()=>{
        time = new Date().toLocaleTimeString();
        settime(time);
    };
    setInterval(Updatetime,1)
    return (
        <>
            <h1>{ctime}</h1>
        </>
    );
};

export default App;*/

// events in React js 
/*import React, { useState } from "react";
const App=()=>{
    const purple = '#8e44ad';
    const  [bg,setbg]=useState(purple);
    const [name,setName]=useState('click me');
    const bgchange=()=>{
        let newbg = '#34495e';
        setbg(newbg);
        setName("ouch!!");
      
    };
    const bgback=()=>{
        let now = "yellow";
        setbg(now);
        setName("haye ram");
    }
    return (
        <>
        <div style={{backgroundColor:bg}}>
            <button onMouseOver={bgchange} onMouseLeave={bgback}> {name} </button>
        </div> 
        </>
    )
};
export default App;*/

// forms in react js
/*import React, { useState } from "react";


const App = () => {
    const [fullName, setfullName] = useState({
        fname: "",
        lname: "",
        email: "",
        phone: " ",


    });

    const onsubmit = (event) => {
        event.preventDefault();
        alert('form submitted');
    };
    const inputEvent = (event) => {
        console.log(event.target.value);
        console.log(event.target.name);


        const { value, name } = event.target;
        setfullName((preValue) => {
            if (name === "fname") {
                return {
                    fname: value,
                    lname: preValue.lname,
                    email: preValue.email,
                    phone: preValue.phone,

                };
            }
            else if (name === 'lname') {
                return {
                    fname: preValue.fname,
                    lname: value,
                    email: preValue.email,
                    phone: preValue.phone,
                };
            }
            else if (name === "email") {
                return {
                    fname: preValue.fname,
                    lname: preValue.lname,
                    email: value,
                    phone: preValue.phone,
                };
            }
            else if (name === "phone") {
                return {
                    fname: preValue.fname,
                    lname: preValue.lname,
                    email: preValue.email,
                    phone: value,
                };
            }
        });
    };

    return (
        <>
            <form onSubmit={onsubmit}>
                <h1>hello {fullName.fname} {fullName.lname}</h1>
                <p>{fullName.email}</p>
                <p>{fullName.phone}</p>
                <input type='text'
                    placeholder="enter your awesome name"
                    name="fName"
                    onChange={inputEvent}
                    value={fullName.fname}
                />
                <br />
                <input type='text' placeholder="enter your password"
                    name="lName"
                    onChange={inputEvent}
                    value={fullName.lname}
                />
                <input type='email' placeholder="enter your email"
                    name="email"
                    onChange={inputEvent}
                    value={fullName.email}
                />
                <input type='number' placeholder="enter yourphone no."
                    name="phone"
                    onChange={inputEvent}
                    value={fullName.phone}
                />
                <button type='submit' >Click me</button>
            </form>
        </>
    )
};
export default App;*/

// todo list using react
/*import React from "react";
import { useState } from "react";
import ToDolist from "./ToDolist";
const App = () => {
    const [inputList, setInputList] = useState("");
    const [Items, setItems] = useState([]);

    const itemEvent = (event) => {
        setInputList(event.target.value);
    };
    const listOfItems = () => {
        setItems((oldItems) => {
            return [...oldItems, inputList];
        });
        setInputList("");
    };

    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <br />
                    <h1>
                        ToDo List
                    </h1>
                    <br /> 
                    <input type="text" placeholder="add a Item" value={inputList} onChange={itemEvent} />
                    <button onClick={listOfItems}>+</button>
                    <ol>
                           {Items.map((itemval) => {
                           return <ToDolist text={itemval}/>;
                             })}
                    </ol>
                </div>
            </div>
        </>

    )
}   
export default App;*/


// increament and decreament project
/*import React from "react";

import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';

import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';

const App = () => {

    const [num, setnum] = useState(0);
    const incNum = () => {
        setnum(num + 1);

    } 

    const decNum = () => {
        if (num > 0) {
            setnum(num - 1);
        }

        else {

            alert('0 limit reached');
            setnum(0);
        }

}
 return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <h1>{num}</h1>
                    <div className="btn_div">
                        <Button onClick={incNum} className="btn_green">
                           <AddIcon/>
                        </Button>
                        <Button onClick={decNum} className="btn_red">
                        <DeleteIcon/>
                        </Button>
                    </div>
                </div>
            </div>
                
        </>
    )};
export default App; */

// webpage using react js 
/*import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


const App = () => {
    return (
        <>
            <h1 className="text-center text-danger  text-capitalize my-5"> {" "} 
            My WebPage using REACT {" "}
            </h1>
            <div className="container">
                <div className="row">
                    <div className="col-sm"><div class="card" >
                        <img src="https://picsum.photos/200/301" class="card-img-top" alt="..." height="200px" width="200px"/>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div></div>
                    <div className="col-sm"><div class="card" >
                        <img src="https://picsum.photos/201/300" class="card-img-top" alt="..."  height="200px" />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div></div>
                    <div className="col-sm"><div class="card" >
                        <img src="https://picsum.photos/200/302" class="card-img-top" alt="..."  height="200px"/>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div> 
                    </div></div>
                </div>
            </div>
        </>
    );


}
export default App;*/


// covid live update
/*import React, { useState, useEffect } from "react";
import "./state.css";
const App = () => {
    const[data,setData] = useState([]);
    const getcoviddata = async () => {
        const res = await fetch('https://api.rootnet.in/covid19-in/unofficial/covid19india.org/statewise.json');
        const actualData = await res.json();
        console.log(actualData.statewise);
        setData(actualData.statewise);
    }
    useEffect(() => {
        getcoviddata();
    }, []);

    return (
        <>
           
            <div className="container-fluid">
                <div className="main-heading">
                <h1 className="mb-5"> <span className="font-weight-bold">INDIA</span> COVID-19 LIVE DATA</h1>
                </div>
                <div className="table-responsive">
                    <table className="table table-hover">
                        <thead className="thead-dark">
                            <tr>
                                <th>state</th>
                                <th>indian confirmed</th>
                                <th>foreign confirmed</th>
                                <th>discharged</th>
                                <th>deaths</th>
                                <th>total</th>
                            </tr>
                        </thead>
                        <tbody>
                         {
                            data.map((currElem,index)=>{
                                   return(
                                    <tr key={index.loc}>
                                <td>{currElem}</td>
                                <td>indian confirmed</td>
                                <td>foreign confirmed</td>
                                <td>discharged</td>
                                <td>deaths</td>
                                <td>total</td>
                            </tr>
                                   )
                            })
                         }
                        
                            
                        </tbody>

                    </table>
                </div>
            </div>
        </>
    )
}
export default App*/
/*import React from "react";
import {BrowserRouter as Routes,Route,Router} from 'react-router-dom';
import axios from "axios"; 
import { useState,useEffect } from "react";
import About from "./About";
import Contact from "./Contact";
import "./state.css";
const App = () =>{
    return (
        <>
        <Router>
         <Routes>
            <Route exact path="/" component={About}/>
            <Route path="/contact" component={Contact}/>
         </Routes>
        </Router>
        </>
    );
}; 
export default App;*/

/*import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
const App=()=>{
    return (
        <>
            <div className="container">
                <h1 className="text-center">
                    welcome to bootstrap
                    <br>
                        
                    </br>
                    <div className="text-center">
                    <button className="btn btn-outline-success">Tap</button>
                    </div>
                </h1>
            </div>
        </>

    )
}
export default App;*/


//fully responsive website using React

import React from "react";
import { Route, Routes, BrowserRouter,Redirect } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import Services from "./Services";
import Contact from "./Contact";
import About from "./About";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/js/bootstrap.esm";
const App = () => {
    return (
        <>
        <BrowserRouter>
        <Navbar/>
            <Routes>
               <Route exact path="/" element={<Home/>}/>
               <Route exact path="/about" element={<About/>}/>
               <Route exact path="/service" element={<Services/>}/>
               <Route exact path="/contact" element={<Contact/>}/>
                
            </Routes>
            </BrowserRouter>

        </>
    )
};

export default App;