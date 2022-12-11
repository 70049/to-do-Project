import React, { useState } from 'react'

function One() {

  const [activity, setActivity] = useState("");
  const [listData, setlistData] = useState([]);
  function addActivity(){
      

      setlistData((listData)=>{
          const updatelist =[...listData, activity];
          setActivity('');
          return updatelist;
      })
  }
  function removeActivity(i){
      const updatelistData = listData.filter((elem, id) =>{
          return i!==id;
      })
      setlistData(updatelistData);
  }
  function removeAll(){
      setlistData([]);
  }

  const d = new Date()
    const weekDay = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

    const day = weekDay[d.getDay()];
    const month = months[d.getMonth()];
    const date = d.getDate();
    const year = d.getFullYear();
    

  return (

    <>
   
      <div  class=" bg-slate-100 relative h-screen  w-72 rounded">

      <div class="relative " >
        <img class="rounded-full w-14 h-14  ml-3" src="data:image/jpeg;base64,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" alt="google.com" />
        <strong class="absolute top-3 text-red-500 ml-20">RAJEEV KUMAR</strong>
        <p class="absolute top-7 text-blue-700 ml-20">abcmicrosoft@outlook.com</p>
      </div>
       
     {/*Search bar  */}
      <div class=" ml-3 mt-4">
 
    <div class="input-group relative flex flex-wrap items-stretch w-64">
      <input type="search" class=" h-8 form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-red-300 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon2" />
  </div>
</div>

<div class="">
       <div class="ml-3  hover:bg-slate-200 rounded mt-3 h-8 w-60 border">
        <button class=" font-mono font-bold">🔆 MyDay</button>
        </div>

        <div class=" ml-3 hover:bg-slate-200 rounded h-8 w-60 border">
            <button class="font-bold font-mono">⭐ Important</button>
        </div>

        <div class=" ml-3 rounded h-8 w-60 hover:bg-slate-200 border">
            <button class="font-bold font-mono">📆 Planned</button>
        </div>

        <div class=" ml-3  rounded h-8 w-60 border hover:bg-slate-200">
            <button class="font-bold font-mono">📃 Assigned to me</button>
        </div>

        <div class=" ml-3  rounded h-8 w-60 border hover:bg-slate-200">
            <button class="font-bold font-mono">📧 Flagged email</button>
        </div>

        <div class=" ml-3  rounded h-8 w-60 border hover:bg-slate-200">
            <button class="font-bold font-mono">🪙 Task</button>
        </div>
       
      </div>

       <div id="one" className="bg-rose-500 rounded">
          <h2 id="one1">MyDay</h2>
        <div class="absolute" className="main">
            <div className="date">
                <h1 id="day" class=""> {day} {date} {month} {year} </h1>                
            </div>
            
          <div class="relative">
          <input class=" ml-96 mt-5 block w-96 p-4 pl-10 text-m text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-50" type="text" placeholder="Add Activity" required value={activity} onChange={(e) =>setActivity(e.target.value)} />
            <button id="b1" onClick={addActivity}>Add</button>
            </div>
            { listData.length>=1 &&   
            <button id="r1" class="" onClick={removeAll}>Remove All♻️</button> }
            <div  className="output">
         {listData!==[] && listData.map(( data, i) =>{
            return(
                <>
                <b id="output"  key={i}><br></br>
                    <input type="radio"/>  {data}</b>
                    <button id="remove"  onClick={ ()=> removeActivity(i)} >Remove🚮</button>
                    </>
            )  
                  })} </div> 
        </div>

      </div> 
      
</div>
    
    </>

  );
}



export default One;