import React, {useState, useContext, useEffect} from 'react'
import {Link} from "react-router-dom"
import { useNavigate } from 'react-router-dom';
import {ContextAPI} from '../ContextAPI'
import ICred from '../Interfaces/Login'
import NavBar from './NavBar'


function Login() {


    const regUsers = useContext(ContextAPI)
    const [credentials, setCredentials] = useState<ICred>({username: '', password: ''});
    const [isValid, setIsValid] = useState<boolean>(false)
    const[inputCheck, setInputCheck] = useState<boolean>(true)

    const handleLogin = (e:React.ChangeEvent<HTMLInputElement>)=>{
        const name = e.target.name;
        const value = e.target.value;
        setCredentials((prev)=>({...prev, [name]: value}))
    }
    let navigate = useNavigate();

    useEffect(()=>{
        if (isValid){
            navigate('/home')
        }
        
    }, [isValid])

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        for (let i=0; i< regUsers.length; i++){
            if (regUsers[i].username === credentials.username && regUsers[i].password === credentials.password){
                setIsValid(true);
                setInputCheck(true)
                break
            }else{
                setIsValid(false);
                setInputCheck(false)
            }
        }
        setCredentials({username:'', password: ''})
    }


    return (
            <div>
                {credentials.username}
                <div className='container-fluid'>
                    <NavBar/>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
                            <input type="text" className="form-control" 
                                    id="exampleInputEmail1" aria-describedby="emailHelp"
                                    name="username"
                                    value={credentials.username || ''}
                                    onChange={handleLogin}
                            />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" 
                                    id="exampleInputPassword1" 
                                    name="password"
                                    value={credentials.password || ""}
                                    onChange={handleLogin}
                            />
                        </div>
                        {inputCheck? null: <h3>Invalid Username or Password</h3>}
        
                        <button type="submit" className="btn btn-primary">Submit</button>
                        <p>Don't have an account? <Link to="/register">Register</Link></p>
                        <p></p>
                    </form>
                </div>
            </div>
    )
}

export default Login
