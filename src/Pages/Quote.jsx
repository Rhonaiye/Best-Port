import  {useState, useEffect} from "react"


const Quote = ()=>{
const [news, setNews] = useState("")



 useEffect(()=>{
  ()=>Getnews()
 },[])

 async function Getnews(){
  try{
  
  const response = await  fetch('https://dummyjson.com/quotes/random')
 

   if(response.ok){
    const data = await response.json()
    

    
    
    
    document.getElementById(`title`).textContent = data.quote
    document.getElementById(`content`).textContent = data.author
   
   }
   else{
    throw new Error(`could not fetch`)
   }
  }
  
  catch(error){
    console.error(error)
  }



 }

  return(
    <div className="news-api-container flex justify-center mt-[30%] lg:mt-[10vh]">

         <div className="news-api bg-softWhite  w-3/4 flex flex-col items-center p-10 border-black border-[1px] rounded-xl">
             <p style={{color:'#568cdde9'}} className="border-b-[1px] border-b-slateGray mb-4">Random Quote</p>
            
             <h1 id="title"></h1>
              <p id="content"></p>
             <p style={{fontWeight:"bolder", }} id="author" ></p>
             
            
             
             <button className="get-news border-[1px] px-5 rounded-md py-2 mt-4 border-b-pastelBlue " onClick={()=>Getnews()}>Get Quote</button>

         </div>
    </div>
  )
}

export default Quote