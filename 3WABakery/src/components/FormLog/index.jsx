import { useState } from "react";
import { useNavigate } from "react-router";
import './style.css'


const FormLog = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const nav = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        nav('/')
    }

    return(
        <form onSubmit={handleSubmit} className="form">
            <input type="text" placeholder="User" Value={username} onChange={(e)=> setUsername(e.target.value)}/>
            <input type="password" placeholder="Password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
            <button type='submit'>Connection</button>
        </form>
    )
}

export default FormLog;