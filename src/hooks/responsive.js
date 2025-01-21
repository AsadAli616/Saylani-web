import { useEffect ,useState } from "react"

export default function useResponsive_layout(){
const [winDowWidth ,setwinDowWidth] = useState(0)
useEffect(()=>{
const handler=()=>{
    setwinDowWidth(window.innerWidth)
    // window.location.reload()} 
}
    
    setwinDowWidth(window.innerWidth)
    window.addEventListener("resize",handler)
return () =>{
window.removeEventListener("resize",handler)
} 

},[])

return {
    winDowWidth

}

}