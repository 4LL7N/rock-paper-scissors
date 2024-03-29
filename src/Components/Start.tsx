import { useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"

function Start() {
    const navigate = useNavigate()
    useEffect(() => {navigate("/home")},[])
    return(
        <>
        <div  style={{ background: 'radial-gradient(134.34% 134.34% at 50% 0%, #1F3757 0%, #131537 100%)' }} className="w-[100vw] h-[100vh] " >
            <Outlet/>
        </div>
        </>
    )
}

export default Start