import './App.css';
import { useIdentityContext } from 'react-netlify-identity';
import {useState} from "react"

const UserForm = ({onSubmit, onInputChange, formValues, submitText}) => {
  return <form onSubmit={onSubmit}>
    <label>Email</label><input value={formValues.email} type="email" name="email" onChange={onInputChange} />
    <label>Password</label><input value={formValues.password} type="password" name="password" onChange={onInputChange} />
    <input type="submit" value={submitText} />
  </form>
}

const InitialFormValues = {email: "",password:""};

const useUserFormValues = (submitHandler,initialValues = InitialFormValues) => {
  const [formValues, setFormValues] = useState(initialValues)
  return {
    formValues,
    setFormValues,
    onSubmit: async(e) => {
      e.preventDefault()
      if (!e.target.checkValidity()) return;
      try{
        await submitHandler(formValues)
      } catch(e){
        console.log(e)
      }
    },
    onInputChange: (e) => {
      setFormValues(values => ({...values, [e.target.name]: e.target.value}))
    }
  }
}

const LoginForm = () => {
  const { loginUser } = useIdentityContext();
  const submitHandler = async({email, password}) => {
    await loginUser(email, password, true);
  }
  const {formValues, onInputChange, onSubmit} = useUserFormValues(submitHandler);
  return <>
    <h2>Login</h2>
    <UserForm formValues={formValues} onInputChange={onInputChange} onSubmit={onSubmit} />
    </>
}

const SignUpForm = () => {
  const { signupUser, loginUser } = useIdentityContext();
  const submitHandler = async({email, password}) => {
    await signupUser(email, password)
    await loginUser(email, password, true);
  }
  const {formValues, onInputChange, onSubmit} = useUserFormValues(submitHandler);
  return <>
    <h2>Sign up</h2>
    <UserForm formValues={formValues} onInputChange={onInputChange} onSubmit={onSubmit} />
    </>
}

function App() {
  const { isLoggedIn, user,logoutUser } = useIdentityContext();
  return (
    <div className="App">
      {
        isLoggedIn ? <div>{JSON.stringify(user.id)}<button onClick={logoutUser}>Logout</button></div> : <><LoginForm/><SignUpForm /></>
      }
    </div>
  );
}

export default App;
