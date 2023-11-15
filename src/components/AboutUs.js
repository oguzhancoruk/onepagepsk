import React from "react";
import {expertiseData} from "../Data/data"
import CountUp from 'react-countup';
import { Link } from "react-router-dom";
import salih2 from "../assets/images/hero/salih2.png"

export default function AboutUs(){
    
    return(
        <section className="relative md:py-24 py-16" id="about">
            <div className="container">
                <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
                    <div className="lg:col-span-5 lg:px-8">
                        <div className="relative">
                            <div className="absolute inset-0 border dark:border-gray-800 rounded-full -mt-[10px] -ms-3 h-[100%] w-[100%] -z-1"></div>
                            <img src={salih2} className="rounded-full shadow-md shadow-gray-200 dark:shadow-gray-800" alt=""/>

                            {/* <div className="absolute lg:bottom-20 md:bottom-10 bottom-6 ltr:lg:-right-16 rtl:lg:-left-16 ltr:md:-right-8 rtl:md:-left-8 ltr:right-0 rtl:left-0 p-4 rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 m-3 w-44 text-center">
                                <h6 className="font-semibold">Web Desinger</h6>
                                <span className="text-2xl font-medium text-amber-500 mb-0"><span className="counter-value font-bold" data-target="7"><CountUp
                                            start={7}
                                            className="counter-value"
                                            end={180}
                                            duration={2.75} /></span>+</span>
                                <span className="text-sm text-slate-400">Years <br/> Experience</span>
                            </div> */}
                        </div>
                    </div>

                    <div className="lg:col-span-7">
                        <div className="lg:ms-5">
                            <h3 className="mb-6 md:text-2xl text-xl md:leading-normal leading-normal font-semibold">Uzman Klinik Psikolog Salih Demir</h3>

                            <p className="text-slate-400 max-w-xl text-[15px]">Salih Fatih Demir, başarıyla Psikoloji bölümünü burslu olarak tamamladı ve ardından Klinik Psikoloji Yüksek Lisans eğitimini ONUR ÖĞRENCİSİ olarak başarıyla tamamladı. 

Kariyeri boyunca İstanbul Üniversitesi Çapa Tıp Fakültesi, İstanbul Büyükşehir Belediyesi, Psikoterapi Enstitüsü, Kim Psikoloji ve Safa Hastanelerinde psikolog olarak gözlem uygulamalarını tamamladı.

</p>
                            <p className="text-slate-400 max-w-xl text-[15px] mt-6">Bu süre zarfında Psikoloji Kulübü'nde Yönetim Kurulu Başkan Yardımcılığı ve Uzman Klinik Psikolog Asistanlığı gibi sorumlulukları üstlendi. Ayrıca, Beykoz Belediye Başkanlığında ve Moodist Hastanesinde profesyonel bir psikolog olarak hizmet verdi.

Şu an, Gebze'de ve Bostancı'da PSİKOLOJİ DANIŞMANLIK Merkezi'nde hizmet vermektedir</p>
                        
                            <div className="mt-6">
                                <Link to="#project" className="btn bg-amber-500/10 hover:bg-amber-500 border-amber-500/10 hover:border-amber-500 text-amber-500 hover:text-white rounded-md me-2 mt-2">Beni Tanıyın</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container md:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-6 md:text-2xl text-xl md:leading-normal leading-normal font-semibold">Referenslar</h3>

                    <p className="text-slate-400 max-w-xl mx-auto text-[15px]">Salih Fatih Demir, klinik deneyimi, başarıyla tamamladığı eğitimleri ve çeşitli sağlık kuruluşlarında edindiği uzmanlığıyla öne çıkan bir psikolog olarak övgü ve güvenilir referanslara sahiptir.</p>
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                    {expertiseData.map((item,index)=>{
                        const Icon = item.Icon
                        return(
                            <div className="flex group shadow shadow-gray-200 dark:shadow-gray-800 dark:hover:shadow-gray-700 items-center p-3 rounded-lg bg-white dark:bg-slate-900" key={index}>
                            <div style={{width:"115px",height:"115px",borderRadius:"50%"}} className="flex items-center justify-center bg-amber-500/10 group-hover:bg-amber-500 text-amber-500 group-hover:text-white text-center  me-5 transition-all duration-500">
                                <div className="">
                                   <img src={Icon} style={{width:"95px",height:"95px",borderRadius:"50%"}}/>
                                </div>
                            </div>
                            <div className="flex-1">
                                <h4 className="mb-0 text-[17px] font-medium">{item.title}</h4>
                            </div>
                        </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}