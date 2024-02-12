import  {useState} from 'react'
import axios from "axios"


const Signup  = () => {
  let URL ="http://localhost:300/register";

  const [allUser, setAllUsers] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const user = (element) => {
    setFirstName(element.target.value)
  }
  const user1 = (element) => {
    setLastName(element.target.value)
  }
  const user2 = (element) => {
    setEmail(element.target.value)
  }
  const user3 = (element) => {
    setPassword(element.target.value)
  }
  const changeName = () =>{

    const newUser ={
    firstName,
    lastName,
    email,
    password,
    
  }
  setAllUsers((prevUsers) => [...prevUsers, newUser]);
  axios.post(URL, newUser)
  .then((res)=>{
    console.log(res.data);

  })
  setFirstName('');
  setLastName('');
  setEmail('');
  setPassword('');
console.log(allUser);

}
  
  return (
    <>
    <div>
    <input type="text" onChange={user} placeholder="first name" value={firstName} />
    <input type="text" onChange={user1} placeholder="last name" value={lastName} />
    <input type="text" onChange={user2} placeholder="Email" value={email} />
    <input type="text" onChange={user3} placeholder="password" value={password} />
    <button onClick={changeName} >Display input</button>
    </div>
    </>
  )
}

export default Signup