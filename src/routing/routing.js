import {BrowserRouter as Router ,Routes,Route } from 'react-router-dom'
import Login from '../screen.js/login'
import SignUp from '../screen.js/signUp'
import StudentPage from '../screen.js/Student'
export default function Routing() {
    
    return (<>
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />☻
                <Route path="/student" element={<StudentPage />} />☻
                
            </Routes>
    </Router>
    
    </>)
}