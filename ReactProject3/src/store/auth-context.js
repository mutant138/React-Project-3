import React , {useEffect , useState } from "react";


const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: ()=>{},
    onLogin: (email,password)=>{}
})

export const AuthContextProvider = (props)=>{
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(()=>{
        const loginStatusInfo = localStorage.getItem("isLoggedIn")
        if(loginStatusInfo){
          setIsLoggedIn(true)
        }
    }, [])

    const loginHandler = () => {
        localStorage.setItem("isLoggedIn" , true)
        setIsLoggedIn(true);
      };

      const logoutHandler = () => {
        localStorage.removeItem("isLoggedIn")
        setIsLoggedIn(false);
      };
    return <AuthContext.Provider value={{isLoggedIn: isLoggedIn , onLogout:logoutHandler, onLogin:loginHandler}} >{props.children}</AuthContext.Provider>
}


export default AuthContext;