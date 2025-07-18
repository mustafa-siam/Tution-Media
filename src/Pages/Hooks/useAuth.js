import { useContext } from "react"
import { authcontext } from "../../Provider/Authprovider"

const useAuth=()=>{
    const constext=useContext(authcontext)
    return constext;
}
export default useAuth;