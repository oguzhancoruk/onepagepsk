import React from "react";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import { test, test1 } from "../Data/data";
import Footer from "./Footer";
import { useState } from "react";
function TestInside(){
    const {text}=useParams();

    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleOptionChange = (index, value) => {
        console.log(index)
        // Create a copy of the current selectedOptions array
        const updatedOptions = [...selectedOptions];
      
        // Find the index of the option in the array
        const existingOptionIndex = updatedOptions.findIndex((option) => option.index === index);
      
        // If the option exists, update its value; otherwise, add a new option
        if (existingOptionIndex !== -1) {
          // Update existing option's value
          updatedOptions[existingOptionIndex] = { index, value };
        } else {
          // Add new option to the array
          updatedOptions.push({ index, value });
        }
      
        // Update state with the new array
        setSelectedOptions(updatedOptions);
      };
      
     console.log(selectedOptions)

    return(
        <div className="">
           <Navbar/>
           <div style={{marginTop:"80px"}} className=" container  mt-15">
           <div className="px-6 py-10 shadow shadow-gray-200 hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-700 transition duration-500 rounded-2xl bg-white dark:bg-slate-900" >
              <p style={{textAlign:"center" ,fontSize:35}}> {text==="Öfke Kontrol Testi"?"Öfke Kontrol Testi":"Depresyon Testi"}</p>
              <p style={{textAlign:"left" ,fontSize:18}}> 
{text==="Öfke Kontrol Testi"?"Öfke kontrolü testi, öfke seviyeleri, kontrol becerileri ve ifade tarzıyla ilişkilendirilen bulgular sunmaktadır. Testin sorularına geçmeden önce, öfkenin güçlü ve sık sık şiddete dönüşebilen bir duygu olduğunu hatırlamak önemlidir; bu özellikleriyle birlikte, bireyin özellikle yakın ilişkileri olmak üzere yaşamının çeşitli alanlarında önemli sorunlara neden olabilir.":"Depresyon testi, depresif belirtilerin şiddetini değerlendirmek amacıyla oluşturulmuş bir ölçektir. Depresyon, bireyin yaşam kalitesini ciddi şekilde etkileyebilen bir klinik durumdur, bu nedenle test sonucunuz orta seviye ve üzerinde çıkarsa, lütfen bir ruh sağlığı uzmanından destek almayı düşünün. Depresyon, tedavi edilebilen bir durumdur!"}
</p>
              <p style={{textAlign:"left" ,fontSize:18}}> 
            {text==="Öfke Kontrol Testi"?"  Aşağıda, bireylerin kendi duygularını ifade ederken kullandıkları bazı ifadeler bulunmaktadır. Her bir ifadeyi okuyun, kendi öfke yaratan durumlarınızı ve öfkelendiğiniz anları düşünerek hissetiklerinizi değerlendirin. Ardından, size en iyi uyanı seçerek işaretleyin. Toplamda 34 madde bulunan bu testte doğru ya da yanlış bir cevap bulunmamaktadır.":"Bu form, son bir (1) hafta içinde hissettiğiniz duyguları araştırmak amacıyla hazırlanmış 21 maddeden oluşmaktadır. Her madde altında bulunan dört cevabı dikkatlice inceledikten sonra, sizin durumunuzu en iyi ifade eden cevabı işaretlemeniz gerekmektedir. Her soruya yalnızca bir cevap vermelisiniz. Tüm soruları eksiksiz yanıtladıktan sonra, 'test sonuçlarını al' butonuna tıklayarak sonuçları görüntüleyebilirsiniz. Sonuçları görebilmek için eksik bir cevap vermediğinizden emin olunuz."}</p>
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
           {res?.data?.map(rs=>{
            return(<>
             <div class="inline-flex items-center">
   
   <input name={`color-${index}`} type="radio"
     class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
     id={`radio-${index}`}
     value={rs}
     onChange={() => handleOptionChange(index,rs)}
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
           <button style={{  margin: 10, display: "block", marginLeft: "auto", marginRight: "auto" }} className="btn bg-amber-500/10 hover:bg-amber-500 border-amber-500/10 hover:border-amber-500 text-amber-500 hover:text-white rounded-md  mt-2">
  Testi Tamamla
</button>


        </div>
    )
}

export default TestInside