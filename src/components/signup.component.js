import { useState } from "react";

function Signup() {

    const [formSubmitted, setFormSubmitted] = useState(false);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleForm = (e) => {
        e.preventDefault();
        setFormSubmitted(true);

    }

    return (
        <div>
            <div className={formSubmitted ? '' : 'hidden'}>
                Entered Values:
                <ul>
                    <li>Name : {username}</li>
                    <li>Email : {email}</li>
                    <li>Password : {password}</li>
                </ul>
            </div>
        <form onSubmit={handleForm}>
        <label>
                Username:
                <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} />
            </label>
            <br />
            <label>
                Email:
                <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
            </label>
            <br />
            <label>
                Password:
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
            </label>
            <br />
            <input type="submit" />
        </form>
        </div>
    )
}
export default Signup;