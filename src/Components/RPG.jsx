import { useState } from "react"




const RockPaperGame = ()=>{
  const [score, setScore] = useState(0)

   
  
   const handleChoice = (playerChoice)=>{
    const choices = [`rock`, `paper`, `scissors`]
    const computerChoices = choices[Math.floor(Math.random() * 3)]
    let result = "" ;
    
    console.log(computerChoices)
    

    switch(playerChoice){
      case `rock` :
      result = (computerChoices === `paper`) ? `YOU LOSE` : `YOU WIN`
      break;

      case `paper` :
      result = (computerChoices === `scissors`) ? `YOU LOSE` : `YOU WIN`
      break;

      case `scissors` :
        result = (computerChoices === `rock`) ? `YOU LOSE` : `YOU WIN`
        break;
    }
    if(playerChoice === computerChoices){
      result = `ITS A TIE`
    }

    if(result === `YOU WIN`){
      setScore( s=> s + 1)
     }
     else if(result === `YOU LOSE`){
      setScore(s => s - 1)
     }
    document.getElementById(`playersChoice`).textContent = `You played ${playerChoice}, Computer played ${computerChoices}, you ${result}`
   }
   


  return(
   <div className="Rpg-container flex justify-center  text-center px-10">
          

       <div className="Rpg-body flex flex-col items-center justify-center bg-slateGray mt-10 text-pastelBlue py-10 border-2 w-full rounded-xl border-pastelBlue px-5">
        <p id="playersChoice" className="mb-5"></p>
           <p className="text-white mb-3">Score:{score}</p>
           
          

            <div className="Rpg btn flex gap-x-5">
             <button onClick={()=>handleChoice(`rock`)} className="border-[1px] px-4 rounded-md">Rock</button> 
             <button onClick={()=>handleChoice(`paper`)} className="border-[1px] px-4 rounded-md">Paper</button>
             <button onClick={()=>handleChoice(`scissors`)} className="border-[1px] px-4 rounded-md">Scissors</button>
            </div>
       </div>
   </div>
  )
}

export default RockPaperGame