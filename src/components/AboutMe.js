import React from "react";
import Navbar from "./Navbar";
import me1 from "../assets/images/me.png";

import { me } from "../Data/data";
import Footer from "./Footer";
function AboutMe(){

return(
    <div className="">
       <Navbar/>
       <div style={{ marginTop: "80px" }} className=" container  mt-15  ">
        <img className="shadow shadow-gray-200 hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-700 transition duration-500 rounded-2xl bg-white dark:bg-slate-900" src={me1} />
       
        <div style={{ marginTop: "15px" }} className="mt-15 shadow shadow-gray-200 hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-700 transition duration-500 rounded-2xl bg-white dark:bg-slate-900">
 <p style={{paddingTop:15}} className="px-6  ">Psikoloji bölümünü burslu olarak başarıyla tamamlayıp Gedik Üniversitesi Klinik Psikoloji Yüksek Lisans eğitimini tamamlamıştır. İstanbul Üniversitesi Çapa Tıp Fakültesi, İstanbul Büyükşehir Belediyesi, Psikoterapi Enstitüsü,Kim Psikoloji ve Safa Hastanelerinde Psikolog olarak gözlem uygulamalarını tamamlamıştır. Bu süre zarfında Psikoloji Kulübü Yönetim Kurulu Başkan Yardımcılığı ve Uzman Klinik Psikolog Asistanlığı görevlerini üstlenmiştir. </p>
 <p style={{paddingTop:15}} className="px-6  ">T.C.Beykoz Belediye Başkanlığında Psikolog olarak hizmet vermiştir.  Moodist Psikiyatri Hastanesinde AMATEM servisinde yatan hastalarla çalışmıştır.

Şuan Gebze ve Bostancı Psikolojik Danışmanlık Merkezinde hizmet vermektedir	</p>
        </div>

       
        <div style={{ marginTop: "15px" }} className="mt-15 shadow shadow-gray-200 hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-700 transition duration-500 rounded-2xl bg-white dark:bg-slate-900">
        <h1 style={{paddingTop:10,paddingBottom:10,fontSize:18,fontWeight:"600"}} className="px-6  ">Eğitimler</h1>
        {me.map(res=>{
    return(
        <div className=" grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-[30px] px-6 flex group shadow shadow-gray-200 dark:shadow-gray-800 dark:hover:shadow-gray-700 items-center p-3 rounded-lg bg-white dark:bg-slate-900" >
        {/* <div style={{width:"115px",height:"115px",borderRadius:"50%"}} className="flex items-center justify-center bg-amber-500/10 group-hover:bg-amber-500 text-amber-500 group-hover:text-white text-center  me-5 transition-all duration-500">
            <div className="">
               <img src={Icon} style={{width:"95px",height:"95px",borderRadius:"50%"}}/>
            </div>
        </div> */}
       
            {res.Eğitimler.map(res1=>{
                return(<div className="px-6 flex group shadow shadow-gray-200 dark:shadow-gray-800 dark:hover:shadow-gray-700 items-center p-3 rounded-lg bg-white dark:bg-slate-900"> <h4 className="mb-0 text-[17px] font-medium">{res1}</h4></div>)
            })}
        
    </div>
    )
 })}
  <h1 style={{paddingTop:10,paddingBottom:10,fontSize:18,fontWeight:"600"}} className="px-6  ">Çalıştığı isimler</h1>
 {me.map(res=>{
    return(
        <div className=" grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-[30px] px-6 flex group shadow shadow-gray-200 dark:shadow-gray-800 dark:hover:shadow-gray-700 items-center p-3 rounded-lg bg-white dark:bg-slate-900" >
        {/* <div style={{width:"115px",height:"115px",borderRadius:"50%"}} className="flex items-center justify-center bg-amber-500/10 group-hover:bg-amber-500 text-amber-500 group-hover:text-white text-center  me-5 transition-all duration-500">
            <div className="">
               <img src={Icon} style={{width:"95px",height:"95px",borderRadius:"50%"}}/>
            </div>
        </div> */}
       
            {res.persons.map(res1=>{
                return(<div className="px-6 flex group shadow shadow-gray-200 dark:shadow-gray-800 dark:hover:shadow-gray-700 items-center p-3 rounded-lg bg-white dark:bg-slate-900"> <h4 className="mb-0 text-[17px] font-medium">{res1}</h4></div>)
            })}
        
    </div>
    )
 })}
        </div>
       
       </div>
       <Footer/>
    </div>
)
}

export default AboutMe