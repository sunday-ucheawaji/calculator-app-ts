import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import useLocalStorage from '../LocalStorage'
import '../Styles/Registration.css'



function Registration() {

    const [allUsers, setAllUsers]= useLocalStorage<{}[]>('registered users', []);
    const [user, setUsers]= useState({
        firstname: '', lastname: '', email:'',
         username: '', password:'', confirmPassword:''
    });

     const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        const name = e.target.name;
        const value = e.target.value;
        setUsers((prev)=>({...prev, [name]: value}))
    }

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        setAllUsers((prev)=>[...prev, user])
        setUsers({
        firstname: '', lastname: '', email:'',
         username: '', password:'', confirmPassword:''
    })
    alert("Your account has been created successfully")
        
    }


    return (
        <div className="container">
            <div className="welcome"><h3>Please register your account</h3></div>
            
            <form className="form" onSubmit = {handleSubmit}>
                <div className="input-container">
                    
                    <input type="text" 
                            name="firstname"
                            placeholder="First Name"
                            onChange={handleChange}
                            required
                            value={ '' || user.firstname}
                            className='form-control'
                    />
                    
                </div>
                <br/>
                <div>
                    
                    <input type="text" 
                            name="lastname"
                            placeholder="Last Name"
                            onChange={handleChange}
                            required
                            value={user.lastname || ''}
                            className='form-control'
                    />
                   
                </div>
                <br/>
                <div>
                    
                    <input type="text" 
                            name="username"
                            placeholder="Username"
                            onChange={handleChange}
                            required
                            value={user.username || ''}
                            className='form-control'
                    />
                    
                </div>
                <br/>
                <div>
                    
                    <input type="email" 
                            name="email"
                            placeholder="email"
                            onChange={handleChange}
                            required
                            value={user.email || ''}
                            className='form-control'
                    />
                    
                </div>
                <br/>
                <div>
                    
                    <input type="password" 
                            name="password"
                            placeholder="password"
                            onChange={handleChange}
                            required
                            value={user.password || ''}
                            className='form-control'
                    />
                    
                </div>
                <br/>
                <div>
                    
                    <input type="password" 
                            name="confirmPassword"
                            placeholder="confirm password"
                            onChange={handleChange}
                            required
                            value={user.confirmPassword || ''}
                            className='form-control'
                    />
                   
                </div>
                <br/>
                <input className="submit btn btn-primary" type="submit" />
                <p>Already have an account? <Link to="/">Login</Link> </p>
            </form>
            
        </div>
    )
}

export default Registration
