import { useSelector } from "react-redux"

export default function StudentPage() {
    const userData = useSelector((a) => a.user);
    console.log (userData)
    return <>
    <h1>hi</h1>
    </>
}