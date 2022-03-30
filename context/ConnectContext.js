import React, { useState } from 'react';

import { useMoralis } from "react-moralis";

import Swal from 'sweetalert2'


const ConnectContext = React.createContext();
  

const ConnectProvider = ({ children }) => {
  
  // const { authenticate } = useMoralis();
  const { authenticate, isAuthenticated, logout, user } = useMoralis();

  const [wallet, setWallet] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);



/*********************************************************************************************
  .) sweetalert2
  **********************************************************************************************/  
  
  const  connectWallet = async () => {

    const Toast = Swal.mixin({
      toast: true,
      position: "top-right",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: toast => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      }
    });
    

    // swal('Oops...', 'Something went wrong!', 'error')
    // swal.fire('Any fool can use a computer')
        // Toast.fire('code', '2 fool can use a computer', "error");


    console.log('connect');
    if (!isAuthenticated) {

      try {
        // swal('Hello world!')

       await  authenticate({ signingMessage: "Hello from cryptomurals!" });
       setWallet(user.get("ethAddress"));
       
      } catch (error) {
        // const code = error.code.toString();
        // const message = error.message;
        // alert(error, "error");
        Toast.fire('error', error, "error");

        // alert(code, message, "error");
        // Toast.fire(code, message, "error");
      }


  } else{
    console.log(user.get("ethAddress"));

  setWallet(user.get("ethAddress"));
  
  }
   

    setLoading(false);
  };

  const disconnectWallet = () => {
    console.log('disconnect');
    logout()
    setWallet('');
  };

  const data = {
    error,
    loading,
    wallet,
    connectWallet,
    disconnectWallet,
  };

  return (
    <ConnectContext.Provider value={data}>{children}</ConnectContext.Provider>
  );
};

export { ConnectProvider };
export default ConnectContext;
