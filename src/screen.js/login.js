import { useState } from "react";
import { fbLogin } from "../fbconfig/fbmethod";

export default function Login() {
    let LoginUser = () => {
        console.log(model);
        fbLogin(model)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    const [model, setModel] = useState ({});

    const fillModel = (key, val) => {
        model[key] = val;
        setModel({ ...model });
    };
    
    return (
        <>
            <h1>Login</h1>
            <div><h5> Email</h5>
                <input type="email" placeholder="Enter Your Email" onChange={(e) => fillModel("email", e.target.value)} /></div>
            <div>
                <h5>Password</h5>
                <input type="password" onChange={(e) => fillModel("password", e.target.value)} />
            </div>
            <button onClick={LoginUser}>Login</button>
        </>
    )
}
// import { useState } from "react";
// import BAButton from "../component/BAButton";
// import BAInput from "../component/BAInput";
// import { fbLogin } from "../config/firebasemethods";

// export default function Login() {
//     

//     return (
//         <>
//             <div >
//                 <div >
//                     <div >
//                         <h1 >Login</h1>
//                     </div>

//                     <div className="py-5">
//                         <BAInput
//                             value={model.email}
//                             onChange={(e) => fillModel("email", e.target.value)}
//                             label="Email"
//                         />
//                     </div>
//                     <div className="py-5">
//                         <BAInput
//                             value={model.password}
//                             onChange={(e) => fillModel("password", e.target.value)}
//                             label="Password"
//                         />
//                     </div>
//                     <div className="py-5">
//                         <BAButton onClick={LoginUser} label="Sign Up" />
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }
