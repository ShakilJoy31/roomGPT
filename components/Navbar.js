import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
// import NavbarCss from '../CSSfile/Navbar.module.css';
import { UserStore } from "../userStore";

const Navbar = ({ setTheme, theme }) => {
  const { user, setUser } = UserStore.useContainer();
  const router = useRouter();
  const handleDarkMood = () =>{
    if(theme === 'white'){
      setTheme('black');
      setUser('black');
      localStorage.setItem("color", JSON.stringify('black'));
    }else{
      setTheme('white');
      setUser('white');
      localStorage.setItem("color", JSON.stringify('white'));
    }
  }
  console.log(user);
  return (
    <div className="">
      {/* For Desktop user */}
      <div className="items-center justify-between px-2 lg:px-[135px] md:px-24 lg:flex navbar">
        <div>
          {
            (user == 'white') ? <img
            className=""
            src="https://i.ibb.co/2szGqxm/Group-2.png"
            alt=""
          /> : <img
          className=""
          src="https://i.ibb.co/9pZcwPJ/Grohgjhgjup-2.png"
          alt=""
        />
          }
          
        </div>

        <div>
          <button
            onClick={()=>router.push('/pricing')}
            style={{ background: "#0F7FEF", borderRadius: "7px" }}
            className={`cursor-pointer btn color-white normal-case border-0 rounded-lg`}
          >
            <span
              style={{
                color: "white",
                fontFamily: "Gilroy",
                fontStyle: "normal",
                fontWeight: "700",
                fontSize: "16px",
                lineHeight: "142%",
              }}
            >
              Pricing
            </span>
          </button>

          <button
            onClick={handleDarkMood}
            style={{ background: "#0F7FEF", borderRadius: "7px" }}
            className={`cursor-pointer btn color-white normal-case border-0 rounded-lg ml-2`}
          >
            <span
              style={{
                color: "white",
                fontFamily: "Gilroy",
                fontStyle: "normal",
                fontWeight: "700",
                fontSize: "16px",
                lineHeight: "142%",
              }}
            >
              Dark
            </span>
          </button>
        </div>
      </div>

      {/* For Mobile Device */}
    </div>
  );
};

export default Navbar;

// import React, { useState } from 'react';
// import NavbarCss from '../CSSfile/Navbar.module.css';
// // import { FcDownload } from 'react-icons/fc';

// const Navbar = () => {
//     const [freeFire, setFreeFire] = useState(true);
//     const [screenShot, setScreenShot] = useState(false);
//     const [download, setDownload] = useState(false);
//     const [aboutUs, setAboutUs] = useState(false);
//     const [contactUs, setContact] = useState(false);
//     const [downloadApp, setDownloadApp] = useState(false);
//     return (
//         <div>
//             <div style={{
//                 backgroundColor: '#247f9e',
//             }} className="navbar">
//                 <div className="navbar-start">
//                     <div className="dropdown">
//                         <label tabIndex={0} className="lg:hidden">
//                             <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 hover:text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
//                         </label>
//                         <ul style={{
//                             backgroundColor: '#247f9e',
//                         }} tabIndex={0} className="mt-6 rounded-sm menu menu-compact dropdown-content w-72">

//                             <li onClick={() => {
//                                 setDownloadApp(false);
//                                 setContact(false);
//                                 setAboutUs(false);
//                                 setDownload(false);
//                                 setScreenShot(true);
//                                 setFreeFire(false);
//                             }}><a className={`cursor-pointer btn-sm text-white normal-case text-xl border-0 hover:text-black hover:bg-white rounded-sm flex justify-center ${screenShot ? NavbarCss.navbarItem : ''}`}>Screenshots</a></li>

//                             <li onClick={() => {
//                                 setDownloadApp(false);
//                                 setContact(false);
//                                 setAboutUs(false);
//                                 setDownload(true);
//                                 setScreenShot(false);
//                                 setFreeFire(false);
//                             }} tabIndex={0}>
//                                 <a className={`cursor-pointer btn-sm text-white normal-case text-xl border-0 hover:text-black hover:bg-white rounded-sm flex justify-center my-2 ${download ? NavbarCss.navbarItem : ''}`}>Download</a>
//                             </li>

//                             <li onClick={() => {
//                                 setDownloadApp(false);
//                                 setContact(false);
//                                 setAboutUs(true);
//                                 setDownload(false);
//                                 setScreenShot(false);
//                                 setFreeFire(false);
//                             }}><a className={`cursor-pointer btn-sm text-white normal-case text-xl border-0 hover:text-black hover:bg-white rounded-sm flex justify-center ${aboutUs ? NavbarCss.navbarItem : ''}`}>About Us</a></li>

//                             <li onClick={() => {
//                                 setDownloadApp(false);
//                                 setContact(true);
//                                 setAboutUs(false);
//                                 setDownload(false);
//                                 setScreenShot(false);
//                                 setFreeFire(false);
//                             }}><a className={`cursor-pointer btn-sm text-white normal-case text-xl border-0 hover:text-black hover:bg-white rounded-sm flex justify-center mt-2 ${contactUs ? NavbarCss.navbarItem : ''}`}>Contact Us</a></li>

//                         </ul>
//                     </div>

//                     <a onClick={() => {
//                         setDownloadApp(false);
//                         setContact(false);
//                         setAboutUs(false);
//                         setDownload(false);
//                         setScreenShot(false);
//                         setFreeFire(true);
//                     }} className={`cursor-pointer btn-sm text-white normal-case text-xl border-0 ml-2 hover:text-black hover:bg-white rounded-sm ${freeFire ? NavbarCss.navbarItem : ''}`}>Home</a>
//                 </div>

//                 <div className="hidden navbar-center lg:flex">
//                     <ul className="px-1 menu menu-horizontal">
//                         <li onClick={() => {
//                             setDownloadApp(false);
//                             setContact(false);
//                             setAboutUs(false);
//                             setDownload(false);
//                             setScreenShot(true);
//                             setFreeFire(false);
//                         }}><a style={{
//                             borderRadius: '3px'
//                         }} className={`cursor-pointer btn-sm text-white normal-case text-xl border-0 hover:text-black hover:bg-white ${screenShot ? NavbarCss.navbarItem : ''}`}>Screenshots</a></li>

//                         <li onClick={() => {
//                             setDownloadApp(false);
//                             setContact(false);
//                             setAboutUs(false);
//                             setDownload(true);
//                             setScreenShot(false);
//                             setFreeFire(false);
//                         }} tabIndex={0}>
//                             <a style={{
//                                 borderRadius: '3px'
//                             }} className={` cursor-pointer btn-sm text-white normal-case text-xl border-0 hover:text-black hover:bg-white mx-2 ${download ? NavbarCss.navbarItem : ''}`}> <span className='flex justify-center'>Download</span></a>
//                         </li>

//                         <li onClick={() => {
//                             setDownloadApp(false);
//                             setContact(false);
//                             setAboutUs(true);
//                             setDownload(false);
//                             setScreenShot(false);
//                             setFreeFire(false);
//                         }}><a style={{
//                             borderRadius: '3px'
//                         }} className={`cursor-pointer btn-sm text-white normal-case text-xl border-0 hover:text-black hover:bg-white ${aboutUs ? NavbarCss.navbarItem : ''}`}>About us</a></li>

//                         <li onClick={() => {
//                             setDownloadApp(false);
//                             setContact(true);
//                             setAboutUs(false);
//                             setDownload(false);
//                             setScreenShot(false);
//                             setFreeFire(false);
//                         }}><a style={{
//                             borderRadius: '3px'
//                         }} className={`cursor-pointer btn-sm text-white normal-case text-xl border-0 hover:text-black hover:bg-white ml-2 ${contactUs ? NavbarCss.navbarItem : ''}`}>Contact Us</a></li>
//                     </ul>
//                 </div>
//                 <div className="navbar-end">
//                     <a onClick={() => {
//                         setDownloadApp(true);
//                         setContact(false);
//                         setAboutUs(false);
//                         setDownload(false);
//                         setScreenShot(false);
//                         setFreeFire(false);
//                     }} className={`cursor-pointer btn-sm text-white normal-case text-xl border-0 hover:text-black hover:bg-white rounded-sm ${downloadApp ? NavbarCss.navbarItem : ''}`}><span className='flex justify-center'>Sign Up</span></a>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Navbar;
