// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
//  getInstruction("mashedPotatoes", 0, (step1) => {
//    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
// }, (error) => console.log(error));
  
 // getInstruction("mashedPotatoes", 1, (step2) => {
 //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
 // }, (error) => console.log(error));
  
  //getInstruction("mashedPotatoes", 2, (step3) => {
    //document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  //}, (error) => console.log(error));
  
 // getInstruction("mashedPotatoes", 3, (step4) => {
   // document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  //}, (error) => console.log(error));
  
  //getInstruction("mashedPotatoes", 4, (step5) => {
    //document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
    //document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  //}, (error) => console.log(error));



// Iteration 1 - using callbacks

function getImg(){
  const img = document.getElementById('mashedPotatoesImg');
  img.removeAttribute('hidden')

}
getInstruction('mashedPotatoes', 0, (step1) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  getInstruction('mashedPotatoes', 1, (step2)=>{
   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
    getInstruction('mashedPotatoes',2,(step3)=>{
    document.querySelector("#mashedPotatoes").
      innerHTML += `<li>${step3}</li>`;
      getInstruction('mashedPotatoes',3,(step4)=>{
        document.querySelector("#mashedPotatoes").
        innerHTML += `<li>${step4}</li>`;
        getInstruction('mashedPotatoes',4,(step5)=>{
          document.querySelector("#mashedPotatoes").
          innerHTML += `<li>${step5}</li>`;
          document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed potatoes are ready!</li>`
          getImg()
          

            
   }, (error) => console.log(error));
  }, (error) => console.log(error));
}, (error) => console.log(error));
},(error) => console.log(error));

},(error) => console.log(error)


);




// Iteration 2 - using promises


obtainInstruction('steak', 0)
  .then( (step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
    return obtainInstruction('steak', 1)
    
  })
  .then((step1)=>{
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`
    return obtainInstruction('steak', 2)
  })
  .then((step2)=>{
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`
    return obtainInstruction('steak', 3)
  })
  .then((step3)=>{
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`
    return obtainInstruction('steak', 4)
  })
  .then((step4)=>{
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`
    return obtainInstruction('steak', 5)
  })
  .then((step5)=>{
    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`
    return obtainInstruction('steak', 6)
  })
  .then((step6)=>{
    document.querySelector("#steak").innerHTML += `<li>${step6}</li>`
    return obtainInstruction('steak', 7)
  })
  .then((step7)=>{
    document.querySelector("#steak").innerHTML += `<li>${step7}</li>
     <li>Steak is ready!</li>`
    })
    .then(()=>{
      const img= document.querySelector('#steakImg');
      img.removeAttribute('hidden')
    })
  .catch((err)=>{
    document.querySelector("#steak").innerHTML += `<li>${err}</li>`
  })

 
  


// Iteration 3 using async/await


async function displayImg(){
   await makeBroccoli();
   const broccoliImg = document.querySelector('#broccoliImg');
   broccoliImg.removeAttribute('hidden');

}
async function makeBroccoli() {
  
  try{
    const step0 =  await obtainInstruction('broccoli', 0);
    document.querySelector("#broccoli").innerHTML += `<li>${step0}</li>`
    const step1 =  await obtainInstruction("broccoli", 1);
    document.querySelector("#broccoli").innerHTML += `<li>${step1}</li>`
    const step2 =  await obtainInstruction("broccoli", 2);
    document.querySelector("#broccoli").innerHTML += `<li>${step2}</li>`
    const step3 =  await obtainInstruction("broccoli", 3);
    document.querySelector("#broccoli").innerHTML += `<li>${step3}</li>`
    const step4 =  await obtainInstruction("broccoli", 4);
    document.querySelector("#broccoli").innerHTML += `<li>${step4}</li>`
    const step5 =  await obtainInstruction("broccoli", 5);
    document.querySelector("#broccoli").innerHTML += `<li>${step5}</li>`
    const step6 =  await obtainInstruction("broccoli", 6);
    document.querySelector("#broccoli").innerHTML += `<li>${step6}</li><li>Broccoli is ready</li>!`
    
  }

  catch(error){
      console.log('error');
  }}

displayImg();


// Bonus 2 - Promise all


const pr = obtainInstruction('brusselsSprouts', 0);
const pr1 = obtainInstruction('brusselsSprouts', 1);
const pr2 = obtainInstruction('brusselsSprouts', 2);
const pr3 = obtainInstruction('brusselsSprouts', 3);
const pr4 = obtainInstruction('brusselsSprouts', 4);
const pr5 = obtainInstruction('brusselsSprouts', 5);
const pr6 = obtainInstruction('brusselsSprouts', 6);
const pr7 = obtainInstruction('brusselsSprouts', 7);



Promise.all([pr, pr1, pr2, pr3, pr4, pr5, pr6, pr7]).then((values) => {

for(value of values){
  document.querySelector('#brusselsSprouts').innerHTML +=`<li>${value}</li>`
}



document.querySelector('#brusselsSproutsImg').removeAttribute('hidden')
})


