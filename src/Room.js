import './App.css';
import React from "react";
import {useState} from "react";
import './Room.css';

function Room() {
    // const l=useState(true);
    // console.log("State is: ",l);

    let [isLit,setLit]=useState(true);
    let [getTemp,setTemp]=useState(72);
    function  OnLight()
    {
        console.log("Lights On!");
        setLit(true);
    }
    function OffLight()
    {
        console.log("Lights Off!");
        setLit(false);
    }

    return (
        <div className={`main ${isLit? "Light":"Dark"}`}>
            <p>Room is:&nbsp;&nbsp;&nbsp;
                <strong>
                    {isLit? "Light":"Dark"}
                </strong>
            </p>
            <button onClick={OnLight}>Toogle On</button>&nbsp;&nbsp;&nbsp;
            <button onClick={OffLight}>Toogle Off</button>
            <br/><br/>
            <p>Current Temperature is:&nbsp;&nbsp;&nbsp;<strong>{getTemp}</strong></p>
            <button onClick={()=>{
                setTemp(++getTemp);
            }}>+</button>
            &nbsp;&nbsp;&nbsp;
            <button onClick={()=>{
                setTemp(--getTemp);
            }}>-</button>
        </div>
    );
}

export default Room;
