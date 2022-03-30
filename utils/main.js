function shortAddr(addr){

    var shortAddr = addr.substring(0, 6) + "..."+addr.substring(38, 42);

    return shortAddr
}

export {shortAddr}


/*********************************************************************************************
  .) sweetalert2
  **********************************************************************************************/  
//   const Toast = Swal.mixin({
//     toast: true,
//     position: "top-right",
//     showConfirmButton: false,
//     timer: 3000,
//     timerProgressBar: true,
//     didOpen: toast => {
//       toast.addEventListener("mouseenter", Swal.stopTimer);
//       toast.addEventListener("mouseleave", Swal.resumeTimer);
//     }
//   });

        // Toast.fire(code, message, "error");
