import React from "react";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import { test, test1 } from "../Data/data";
import Footer from "./Footer";
import { useState } from "react";
function TestInside() {
    const { text } = useParams();

    const data1 = localStorage.getItem("öfke");
    const data2 = localStorage.getItem("depresyon");
   const pathname = localStorage.getItem("pathname")





    return (
        <div className="">
            <Navbar />
            <div style={{ marginTop: "80px" }} className=" container  mt-15">
               {pathname==="Öfke Kontrolü Testi"?<div className="px-6 py-10 shadow shadow-gray-200 hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-700 transition duration-500 rounded-2xl bg-white dark:bg-slate-900" >
                    <p style={{ textAlign: "center", fontSize: 35 }}> Öfke Kontrol Testi Sonucu</p>
                    <p style={{ textAlign: "left", fontSize: 20 }}> Sürekli Öfke Puanı</p>

                    <div clasName="w-full "  style={{backgroundColor:"rgb(128, 128, 128,0.2 )",borderRadius:50}}>
                        <div className="bg-amber-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{width:`${(100*(Number(JSON.parse(data1).grup1)))/40}%`}}> {JSON.parse(data1).grup1}</div>
                    </div>
                    <p style={{marginTop:10}}>Bu alt ölçekten elde edilen puanların yüksek olması, bireyin öfke düzeyinin yüksek olduğunu ve günlük hayatta sıkça öfkeye kapılabildiğini göstermektedir. Testten alınabilecek en düşük puan 10, en yüksek puan ise 40'tır. 25 ve üzerindeki puanlar, bireyin ortalamanın üzerinde olduğunu gösterir.</p>
                    <p style={{ textAlign: "left", fontSize: 20,marginTop:10 }}> Öfke Kontrol Puanı</p>

                    <div clasName="w-full "  style={{backgroundColor:"rgb(128, 128, 128,0.2 )",borderRadius:50}}>
                        <div className="bg-amber-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{width:`${(100*(Number(JSON.parse(data1).grup2)))/32}%`}}> {JSON.parse(data1).grup2}</div>
                    </div>
                    <p style={{marginTop:10}}>Bu alt ölçekten elde edilen puanlar, bireyin öfke yaşadığı durumlarda ne derece kontrol sağlayabildiğini gösterir. Bu ölçekten alınabilecek en düşük puan 8, en yüksek puan ise 32'dir. 20 puan ve üzeri, ortalamanın üzerinde öfke kontrol becerilerini ifade etmektedir.</p>
                    <p style={{ textAlign: "left", fontSize: 20,marginTop:10 }}> Öfke Dışta</p>

                    <div clasName="w-full "  style={{backgroundColor:"rgb(128, 128, 128,0.2 )",borderRadius:50}}>
                        <div className="bg-amber-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{width:`${(100*(Number(JSON.parse(data1).grup3)))/32}%`}}> {JSON.parse(data1).grup3}</div>
                    </div>
                    <p style={{marginTop:10}}>Öfke ifade tarzını ölçen bu alt testten elde edilen puanın yüksekliği, bireyin öfkesini dışa vurma eğilimini gösterir. Bu alt testten alınabilecek en düşük puan 8, en yüksek puan ise 32'dir. 20 ve üzeri puanlar, bireyin ortalama üzerinde bir öfke ifade tarzına sahip olduğunu gösterir. Yüksek puanlar, öfke kontrol puanından düşük puanlarla birlikte geldiğinde, kişinin genellikle öfkesini kontrol etmekte zorlandığını ve öfke patlamaları yaşadığını gösterir.</p>
                    <p style={{ textAlign: "left", fontSize: 20,marginTop:10 }}> Öfke İçte</p>

                    <div clasName="w-full "  style={{backgroundColor:"rgb(128, 128, 128,0.2 )",borderRadius:50}}>
                        <div className="bg-amber-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{width:`${(100*(Number(JSON.parse(data1).grup4)))/32}%`}}> {JSON.parse(data1).grup4}</div>
                    </div>
                    <p style={{marginTop:10}}>Öfke ifade tarzını ölçen bu alt testten elde edilen puanın yüksekliği, bireyin öfkesini bastırdığını göstermektedir. Bu alt testten alınabilecek en düşük puan 8, en yüksek puan ise 32'dir. 20 ve üzeri puanlar, ortalama üzerinde bir öfke ifade tarzını işaret eder. Bu alt testten yüksek puanlar, öfke kontrol puanından düşük puanlarla birlikte geldiğinde, kişi öfke patlaması yaşamasa bile öfke yaratan durumlara karşı yoğun huzursuzluk, fiziksel ağrılar ve ruminasyon veya pasif agresif tepkiler gösterme eğiliminde olduğunu gösterir.</p>



                </div>:<div className="px-6 py-10 shadow shadow-gray-200 hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-700 transition duration-500 rounded-2xl bg-white dark:bg-slate-900" >
                    <p style={{ textAlign: "center", fontSize: 35 }}> Depresyon Testi Sonucu</p>
                    <p style={{ textAlign: "left", fontSize: 20 }}> Test Puanı</p>

                    <div clasName="w-full "  style={{backgroundColor:"rgb(128, 128, 128,0.2 )",borderRadius:50}}>
                        <div className="bg-amber-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{width:`${(100*(Number(JSON.parse(data1).grup1)))/63}%`}}> {JSON.parse(data1).grup1}</div>
                    </div>
                    <p style={{marginTop:10,fontSize:25}}>{Number(JSON.parse(data2).grup1)<=9?"Minimal Depresyon":Number(JSON.parse(data2).grup1)<=16 &Number(JSON.parse(data2).grup1)>=10?"Hafif Depresyon":Number(JSON.parse(data2).grup1)<=29 &Number(JSON.parse(data2).grup1)>=17?"Orta Depresyon":Number(JSON.parse(data2).grup1)<=63 &Number(JSON.parse(data2).grup1)>=30?"Şiddetli Depresyon":null}</p>
                    

                    



                </div>} 
            </div>
            <a href="https://api.whatsapp.com/send?phone=905364916063" target="_blank"><button style={{ margin: 10, display: "block", marginLeft: "auto", marginRight: "auto" }} className="btn bg-amber-500/10 hover:bg-amber-500 border-amber-500/10 hover:border-amber-500 text-amber-500 hover:text-white rounded-md  mt-2">
                Bize Ulaşın Sonuçlarınızı Değerlendirelim.
            </button></a>


        </div>
    )
}

export default TestInside