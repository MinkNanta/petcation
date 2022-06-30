import { useEffect } from "react"
import jwtDecode from "jwt-decode"
import axios from '../../../config/axios';
import { setAccessToken } from "../../../services/localStorage"
import { useAuth } from "../../../contexts/AuthContext";

function Logingoogle() {
    const {setFetch} = useAuth()
    const handleCallbackResponse = async res => {
        try {
          const obj = { googleData: res.credential }
        //   const token=jwtDecode(res.credential)
        //   console.log(token)
          const login = await axios.post('/auth/googleLogin', obj)
          console.log(login.data)
          const token = login.data.token
          setAccessToken(token)
          document.getElementById('signInDiv').hidden = true;
          setFetch(p=>!p)
        } catch (err) {
          console.log(err)
        }
      }
    
      const handleSignout = event => {
        document.getElementById('signInDiv').hidden = false
      }
    
      useEffect(() => {
        /* global google */
        google.accounts.id.initialize({
          client_id:
            '145807496786-3lpl6ph4r0evd81kmrmjou4por4kq4ak.apps.googleusercontent.com',
          callback: handleCallbackResponse,
          prompt_parent_id: 'g_id_onload',
        })
        google.accounts.id.renderButton(document.getElementById('signInDiv'), {
          size: 'large',
          
          text: 'continue_with',
          border: 'none',
        })
        google.accounts.id.prompt()
      }, [])
   
  return (
             <button className="btn btn-outline" id="signInDiv">

             </button>
    
  )
}

export default Logingoogle