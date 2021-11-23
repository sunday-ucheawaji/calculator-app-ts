import React, {createContext} from "react";
import IReg from './Interfaces/ContextAPI'

export  const ContextAPI = createContext<IReg[]>([]);
// export  const ContextAPI = createContext([]);