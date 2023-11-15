import React,{useState} from "react";
import { Link  } from "react-router-dom";
import * as Unicons from '@iconscout/react-unicons'
import Lightbox from 'react-18-image-lightbox';
import '../../node_modules/react-18-image-lightbox/style.css';
import {servicesData} from "../Data/data"
const images = [
    "/images/works/1.jpg",
    "/images/works/2.jpg",
    "/images/works/3.jpg",
    "/images/works/4.jpg",
    "/images/works/5.jpg",
    "/images/works/6.jpg",
    "/images/works/7.jpg",
    "/images/works/8.jpg",
];

export default function Projects(){
    const [photoIndex, setActiveIndex] = useState(0);
    const [isOpen, setOpen] = useState(false);


    const handleCLick = (index) => {
        setActiveIndex(index)
        setOpen(!isOpen);
    }

    return(
        <>
           <section className="relative md:py-24 py-16" id="project">
        <div className="container">
            <div className="grid grid-cols-1 pb-8 text-center">
                <h3 className="mb-6 md:text-2xl text-xl md:leading-normal leading-normal font-semibold">Testler</h3>

                <p className="text-slate-400 max-w-xl mx-auto text-[15px]">Web sitemizdeki çeşitli online psikolojik testler, depresyon, anksiyete, sosyal fobi gibi farklı klinik durumlarla ilgili olarak kullanılan ölçekleri içermektedir. Ayrıca, mükemmeliyetçilik, özgüven, öfke kontrolü gibi kişilik ve davranış örüntülerini değerlendirmek için tasarlanmış testlere de ulaşabilirsiniz. Test maddelerini yanıtlamadan önce lütfen yönergeleri dikkatlice okuyup anladığınızdan emin olunuz.</p>
            </div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
               {servicesData.map((item,index)=>{
                const Icon = item.Icon
                return(
                    <div className="px-6 py-10 shadow shadow-gray-200 hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-700 transition duration-500 rounded-2xl bg-white dark:bg-slate-900" key={index}>
              

                    <div className="content mt-7">
                        <Link to="" className="title h5 text-[17px] font-medium hover:text-amber-500">{item.title}</Link>
                        <p className="text-slate-400 mt-3 text-[15px]">{item.desc}</p>
                        
                        <div className="mt-5">
                            <Link href="" className="hover:text-amber-500 dark:hover:text-amber-500 after:bg-amber-500 dark:text-white transition duration-500 inline-flex items-center gap-1">Teste Başla <Unicons.UilArrowRight width={16}/></Link>
                        </div>
                    </div>
                </div> 
                )
               })}
                 
            </div>
        </div>
    </section>
      

        </>
     
    )
}