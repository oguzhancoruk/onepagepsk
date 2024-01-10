import React from "react";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import { test, test1 } from "../Data/data";
import Footer from "./Footer";
import { useState } from "react";

function TestInside(){
    const {text}=useParams();

    const [selectedOptions, setSelectedOptions] = useState([]);
    const [toplamPuan, setToplamPuan] = useState();
   
    const handleOptionChange = (index, value,i) => {
        
        // Create a copy of the current selectedOptions array
        const updatedOptions = [...selectedOptions];
      
        // Find the index of the option in the array
        const existingOptionIndex = updatedOptions.findIndex((option) => option.index === index);
      
        // If the option exists, update its value; otherwise, add a new option
        if (existingOptionIndex !== -1) {
          // Update existing option's value
          updatedOptions[existingOptionIndex] = { index, value,i };
        } else {
          // Add new option to the array
          updatedOptions.push({ index, value,i });
        }
      
        // Update state with the new array
        setSelectedOptions(updatedOptions);
      };


      const sendResult1 =()=>{
        let yeniGrupPuanlari = {
          grup1: 0
       
        };
        selectedOptions.forEach((eleman) => {
          // Her bir elemanın value değerine göre puanlama yap
     
      
           
            
                if (eleman.i ==0  ) {
                  yeniGrupPuanlari.grup1 += 0;
                } else if (eleman.i ==1) {
                  yeniGrupPuanlari.grup1 += 1;
                } else if (eleman.i ==2) {
                  yeniGrupPuanlari.grup1 += 2;
                } else if (eleman.i ==3) {
                  yeniGrupPuanlari.grup1 += 3;
                }
        
            
           
          
        
        })
        setToplamPuan(yeniGrupPuanlari);
     
       
      ;
        handleResultsButtonClick()
      }
      const sendResult =()=>{
        let yeniGrupPuanlari = {
          grup1: 0,
          grup2: 0,
          grup3: 0,
          grup4: 0,
        };
        selectedOptions.forEach((eleman) => {
          // Her bir elemanın value değerine göre puanlama yap
       
          switch (eleman.value) {
            
              case 'Hiç':
                if (eleman.index >= 0 && eleman.index <= 9) {
                  yeniGrupPuanlari.grup1 += 1;
                } else if (eleman.index >= 10 && eleman.index <= 17) {
                  yeniGrupPuanlari.grup2 += 1;
                } else if (eleman.index >= 18 && eleman.index <= 25) {
                  yeniGrupPuanlari.grup3 += 1;
                } else if (eleman.index >= 26 && eleman.index <= 33) {
                  yeniGrupPuanlari.grup4 += 1;
                }
              break;
            case 'Biraz':
              if (eleman.index >= 0 && eleman.index <= 9) {
                yeniGrupPuanlari.grup1 += 2;
              } else if (eleman.index >= 10 && eleman.index <= 17) {
                yeniGrupPuanlari.grup2 += 2;
              } else if (eleman.index >= 18 && eleman.index <= 25) {
                yeniGrupPuanlari.grup3 += 2;
              } else if (eleman.index >= 26 && eleman.index <= 33) {
                yeniGrupPuanlari.grup4 += 2;
              }
              break;
            case 'Oldukça':
              if (eleman.index >= 0 && eleman.index <= 9) {
                yeniGrupPuanlari.grup1 += 3;
              } else if (eleman.index >= 10 && eleman.index <= 17) {
                yeniGrupPuanlari.grup2 += 3;
              } else if (eleman.index >= 18 && eleman.index <= 25) {
                yeniGrupPuanlari.grup3 += 3;
              } else if (eleman.index >= 26 && eleman.index <= 33) {
                yeniGrupPuanlari.grup4 += 3;
              }
              break;
            case 'Tümüyle':
              if (eleman.index >= 0 && eleman.index <= 9) {
                yeniGrupPuanlari.grup1 += 4;
              } else if (eleman.index >= 10 && eleman.index <= 17) {
                yeniGrupPuanlari.grup2 += 4;
              } else if (eleman.index >= 18 && eleman.index <= 25) {
                yeniGrupPuanlari.grup3 += 4;
              } else if (eleman.index >= 26 && eleman.index <= 33) {
                yeniGrupPuanlari.grup4 += 4;
              }
              break;
            default:
              // Bilinmeyen değerler için varsayılan bir durum belirle
              break;
          }
        
        });
        setToplamPuan(yeniGrupPuanlari);
      ;
        handleResultsButtonClick()
      }
      localStorage.setItem("öfke",JSON.stringify(toplamPuan))
      localStorage.setItem("depresyon",JSON.stringify(toplamPuan))

      const handleResultsButtonClick = () => {
        // results patikasına puanları gönder
        localStorage.setItem("pathname",text)
        window.location.assign('/results');
      };
     

    
    return(
        <div className="">
           <Navbar/>
           <div style={{marginTop:"80px"}} className=" container  mt-15">
           <div className="px-6 py-10 shadow shadow-gray-200 hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-700 transition duration-500 rounded-2xl bg-white dark:bg-slate-900" >
              <p style={{textAlign:"center" ,fontSize:35}}> {text==="Öfke Kontrolü Testi"?"Öfke Kontrolü Testi":"Depresyon Testi"}</p>
              <p style={{textAlign:"left" ,fontSize:18}}> 
{text==="Öfke Kontrolü Testi"?"Öfke kontrolü testi, öfke seviyeleri, kontrol becerileri ve ifade tarzıyla ilişkilendirilen bulgular sunmaktadır. Testin sorularına geçmeden önce, öfkenin güçlü ve sık sık şiddete dönüşebilen bir duygu olduğunu hatırlamak önemlidir; bu özellikleriyle birlikte, bireyin özellikle yakın ilişkileri olmak üzere yaşamının çeşitli alanlarında önemli sorunlara neden olabilir.":"Depresyon testi, depresif belirtilerin şiddetini değerlendirmek amacıyla oluşturulmuş bir ölçektir. Depresyon, bireyin yaşam kalitesini ciddi şekilde etkileyebilen bir klinik durumdur, bu nedenle test sonucunuz orta seviye ve üzerinde çıkarsa, lütfen bir ruh sağlığı uzmanından destek almayı düşünün. Depresyon, tedavi edilebilen bir durumdur!"}
</p>
              <p style={{textAlign:"left" ,fontSize:18}}> 
            {text==="Öfke Kontrolü Testi"?"  Aşağıda, bireylerin kendi duygularını ifade ederken kullandıkları bazı ifadeler bulunmaktadır. Her bir ifadeyi okuyun, kendi öfke yaratan durumlarınızı ve öfkelendiğiniz anları düşünerek hissetiklerinizi değerlendirin. Ardından, size en iyi uyanı seçerek işaretleyin. Toplamda 34 madde bulunan bu testte doğru ya da yanlış bir cevap bulunmamaktadır.":"Bu form, son bir (1) hafta içinde hissettiğiniz duyguları araştırmak amacıyla hazırlanmış 21 maddeden oluşmaktadır. Her madde altında bulunan dört cevabı dikkatlice inceledikten sonra, sizin durumunuzu en iyi ifade eden cevabı işaretlemeniz gerekmektedir. Her soruya yalnızca bir cevap vermelisiniz. Tüm soruları eksiksiz yanıtladıktan sonra, 'test sonuçlarını al' butonuna tıklayarak sonuçları görüntüleyebilirsiniz. Sonuçları görebilmek için eksik bir cevap vermediğinizden emin olunuz."}</p>
{text==="Öfke Kontrolü Testi"?test.map((res,index)=>{

    if(text===res.title){
        return(

            <div className="content mt-7" style={{ display: "flex", flexDirection: "column",}}>
          
            <p className="title h5 text-[20px] font-medium hover:text-amber-500 ">{res.question}</p>
            <div className="content mt-1" style={{ display: "flex", flexDirection:"column", }}>
            <div class="inline-flex items-center">
   
      <input name={`color-${index}`} type="radio"
        class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
        id={`radio-${index}`}
        value="Hiç"
        onChange={() => handleOptionChange(index,"Hiç")}
        />
         <label class="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="black"> Hiç 
         </label>
      <span
        class="absolute text-gray-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 16 16" fill="currentColor">
          <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
        </svg>
      </span>
   
  </div>
            <div class="inline-flex items-center">
   
      <input name={`color-${index}`} type="radio"
        class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
        id={`radio-${index}`}
        value="Biraz"
        onChange={() => handleOptionChange(index,"Biraz")}
        />
         <label class="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="black"> Biraz 
         </label>
      <span
        class="absolute text-gray-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 16 16" fill="currentColor">
          <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
        </svg>
      </span>
   
  </div>
            <div class="inline-flex items-center">
 
      <input name={`color-${index}`} type="radio"
        class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
        id={`radio-${index}`}
        value="Oldukça"
        onChange={() => handleOptionChange(index,"Oldukça")}
        />
           <label class="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="black"> Oldukça 
          </label>
      <span
        class="absolute text-gray-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 16 16" fill="currentColor">
          <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
        </svg>
      </span>
  
  </div>
  <div class="inline-flex items-center">
  
      <input name={`color-${index}`} type="radio"
        class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
        id={`radio-${index}`}
        value="Tümüyle"
        onChange={() => handleOptionChange(index,"Tümüyle")}
        />
          <label class="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="black"> Tümüyle 
          </label>
      <span
        class="absolute text-gray-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 16 16" fill="currentColor">
          <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
        </svg>
      </span>
  
  </div>
            </div>
          </div>
          
        )
    }
}):test1.map((res,index)=>{

    if(text===res.title){
        return(

            <div className="content mt-7" style={{ display: "flex", flexDirection: "column",}}>
          
            <p className="title h5 text-[20px] font-medium hover:text-amber-500 ">{res.question}</p>
            <div className="content mt-1" style={{ display: "flex", flexDirection:"column", }}>
           {res?.data?.map((rs,i)=>{
           
            return(<>
             <div class="inline-flex items-center">
   
   <input name={`color-${index}`} type="radio"
     class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
     id={`radio-${index}`}
     value={rs}
     onChange={() => handleOptionChange(index,rs,i)}
     />
      <label class="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="black"> {rs}
      </label>
   <span
     class="absolute text-gray-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
     <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 16 16" fill="currentColor">
       <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
     </svg>
   </span>

</div>
</>)
           })}
            </div>
          </div>
          
        )
    }
})}
          </div> 
           </div>
           <button /* disabled={selectedOptions?.length===35?false:true} */ style={{  margin: 10, display: "block", marginLeft: "auto", marginRight: "auto",marginBottom:80 }} className="btn bg-amber-500/10 hover:bg-amber-500 border-amber-500/10 hover:border-amber-500 text-amber-500 hover:text-white rounded-md  mt-2" onClick={text==="Öfke Kontrolü Testi"? sendResult:sendResult1} >
  Testi Tamamla
</button>


        </div>
    )
}

export default TestInside