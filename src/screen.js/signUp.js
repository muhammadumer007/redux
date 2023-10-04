import { useNavigate } from "react-router-dom";
import { fbSignUp } from "../fbconfig/fbmethod";
import { useState } from "react";

export default function SignUp() {
    const [model, setModel] = useState ({});

    const fillModel = (key, val) => {
        model[key] = val;
        setModel({ ...model });
    };

    const navigate = useNavigate();

    let signUpUser = () => {
        console.log(model);
        fbSignUp(model)
            .then((res) => {
                navigate("/login");
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <>
            <h1>SignUp</h1>
            <div>
                <h5>Name</h5>
                <input type="text" value={model.userName} placeholder="enter your name" onChange={(e) => fillModel("userName", e.target.value)} />
            </div>
            
            <div>
                <h5> Email</h5>
                <input type="email" value={model.email} placeholder="Enter Your Email" onChange={(e) => fillModel("Email", e.target.value)}  /></div>
            <div>
                <h5>Password</h5>
                <input type="password" value={model.password} onChange={(e) => fillModel("password", e.target.value)} />
            </div>
            <button onClick={signUpUser}>SignUp</button>
        </>
    )
}