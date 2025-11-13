import React from 'react';
import notFoundPage from '../../assets/notFoundPage.png'

const NotFoundPage = () => {
    return (
        
      <div className="flex flex-col justify-center items-center max-w-[750px] text-center mt-20 w-11/12 mx-auto inter-font">
        <img className="w-[500px] mb-6" src={notFoundPage} alt="" />
        <h1 className="mt-4 text-5xl font-semibold">Oops, page not found!</h1>
        <p className="text-xl text-[#627382] my-4">
          The page you are looking for is not available.
        </p>
        <button
        //   onClick={handleShowApp}
          className="px-10 py-[14px] rounded-sm bg-linear-to-r from-[#632EE3] to-[#9F62F2] font-semibold mb-20 text-white"
        >
          Go Back!
        </button>
      </div>
      
    
    );
};

export default NotFoundPage;





// import React from "react";
// import errorPage from "../../assets/error-404.png";
// import Navbar from "../../components/Header/Navbar";
// import Footer from "../../components/Footer/Footer";
// import { useNavigate } from "react-router";

// const ErrorPage = () => {
//   const navigate = useNavigate();
//   const handleShowApp = () => {
//     navigate(`/apps`);
//   };

//   return (
//     <div>
//       <Navbar></Navbar>
//       <div className="flex flex-col justify-center items-center max-w-[750px] text-center mt-20 w-11/12 mx-auto inter-font">
//         <img className="w-[500px] mb-6" src={errorPage} alt="" />
//         <h1 className="mt-4 text-5xl font-semibold">Oops, page not found!</h1>
//         <p className="text-xl text-[#627382] my-4">
//           The page you are looking for is not available.
//         </p>
//         <button
//           onClick={handleShowApp}
//           className="px-10 py-[14px] rounded-sm bg-linear-to-r from-[#632EE3] to-[#9F62F2] font-semibold mb-20 text-white"
//         >
//           Go Back!
//         </button>
//       </div>
//       <div className="text-black bg-linear-to-r from-[#632EE3] to-[#9F62F2]">
//         <Footer></Footer>
//       </div>
//     </div>
//   );
// };

// export default ErrorPage;
