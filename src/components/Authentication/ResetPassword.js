import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from 'react';
const ResetPassword = () => {
     const [sendPasswordResetEmail, sending, error] =
       useSendPasswordResetEmail(auth);

     
   
     
         
   
    
    const handleReset =  e => {
         e.preventDefault()
        const email = e.target.email.value;
        sendPasswordResetEmail(email);
        
        if (!error) {
            toast.success("password reset success");
        }

        e.target.reset();
       
        
        
    }
    return (
      <div className=" md:mt-40">
        <div className=" bg-orange-500 mx-auto rounded p-6 max-w-lg">
          <h1 className="text-2xl font-bold  text-center m-2">
            Reset Password
          </h1>
                <form onSubmit={handleReset}>
                <input
            className=" m-2 py-4 px-2  rounded w-full"
            placeholder="Enter your user email"
        
            type="email"
            name="email"
            id="1"
          />
          <br />
                <input  className=" m-2 btn w-full" type="submit" value="RESET" />
                </form>
            </div> <ToastContainer></ToastContainer>
      </div>
    );
};

export default ResetPassword;