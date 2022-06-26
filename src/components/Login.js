import { login, logout } from '../features/user';
import { useDispatch } from "react-redux";
// useDispatch hook is used to modify values of states
// useSelector hook is used to grab values of states

function Login() {
    const dispatch = useDispatch();

    return (
        <>
      <button onClick={()=>{ 
        dispatch(login({name: "Debarati Ghatak", age: 21, email: "debaratighatak@gmail.com"}))}
      }>LOGIN</button>
      <button onClick={()=>{ 
        dispatch(logout())}
      }>LOGOUT</button>
      </>
    );
  }
  
  export default Login;
  