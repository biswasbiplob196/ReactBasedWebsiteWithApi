import React from "react";
import Navbar from "./navbar";
import Header from "./header";
import AboutUs from "./aboutUs.js";
import Howitworks from "./Howitworks";
import Services from "./services";
import Contact from "./Contact";
import Footer from "./footer";



// import EVENT_BINDING from "./EVENT_BINDING/index";
// import HOOK_USESTATE1 from "./HOOK_USESTATE/index";
// import HOOK_USESTATE2 from "./HOOK_USESTATE/index2";


const App = () =>{
  return (
    <>
    <Navbar />
    <Header />
    <Howitworks />
    <AboutUs />
    <Services />
    <Contact />
    <Footer />

    {/* <EVENT_BINDING />
    <HOOK_USESTATE1 />
    <HOOK_USESTATE2 /> */}
    </>
  )
}


export default App;