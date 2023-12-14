import React from "react";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import { blogData } from "../Data/data";
import Footer from "./Footer";
function BlogInside(){
    const {text}=useParams();
    console.log(text)

    return(
        <div className="">
           <Navbar/>
           <div style={{marginTop:"80px"}} className=" container  mt-15">
           <div className="px-6 py-10 shadow shadow-gray-200 hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-700 transition duration-500 rounded-2xl bg-white dark:bg-slate-900" >
              
{blogData.map(res=>{

    if(text===res.title){
        return(

            <div className="content mt-7" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <img style={{ maxWidth: "400px" }} src={res.image} alt="Resim" />
            <p className="title h5 text-[20px] font-medium hover:text-amber-500 text-center">{res.title}</p>
            <p className="text-slate-400 mt-3 text-[15px] ">{res.desc}</p>
          </div>
          
        )
    }
})}
          </div> 
           </div>
         
        </div>
    )
}

export default BlogInside