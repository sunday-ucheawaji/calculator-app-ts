import '../App.css'
import React, { FC } from 'react'
import NumberFormat from "react-number-format";
import IScreen from '../Interfaces/Screen'


const Screen:FC<IScreen>=({input, preState}):JSX.Element=>{
    return (
        <div>
            {input === "0" || input !== "" ? (
            <NumberFormat
              value={input}
              displayType={"text"}
              thousandSeparator={true}
            />
          ) : (
            <NumberFormat
              value={preState}
              displayType={"text"}
              thousandSeparator={true}
            />
          )}
        </div>
    )
}

export default Screen
