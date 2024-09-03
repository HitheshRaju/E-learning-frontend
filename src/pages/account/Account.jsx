import React from 'react'
import { RxDashboard } from "react-icons/rx";
import './account.css'
import { MdLogout } from "react-icons/md";
import { UserData } from '../../context/UserContext';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


const Account = ({user}) => {
    const {setIsAuth, setUser} = UserData();

    const navigate = useNavigate()

    const logoutHandler = () =>{
        localStorage.clear();
        setUser([]);
        setIsAuth(false);
        toast.success("Logged Out");
        navigate("/login");
    }
  return (
    <div>
       {user && (
         <div className="profile">
         <h2>My Profile</h2>
         <div className="profile-info">
             <p>
                 <strong>Name - {user.name} </strong>
             </p>

             <p>
                 <strong>Email - {user.email}</strong>
             </p>

             <button onClick={()=>navigate(`/${user._id}/dashboard`)} className='common-btn'><RxDashboard /> Dashboard</button>

             <br />

            {
              user.role === "admin" && (
                <button onClick={()=>navigate(`/admin/dashboard`)} className='common-btn'><RxDashboard />Admin Dashboard</button>
              )
            }

             <br />

             <button onClick={logoutHandler} className='common-btn' style={{background: "red"}} ><MdLogout />  Logout</button>
         </div>
     </div>
       )}
    </div>
  )
}

export default Account