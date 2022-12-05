document.addEventListener('DOMContentLoaded',()=>{

let squares=document.querySelectorAll(".square")

squares.forEach((square)=>{
    square.addEventListener('click', (event) => handleclick(event));  
  })
})


function handleclick(event) {
  
  let square=event.target
  let position=square.id

  if(handlemove(position)){
    updatesquares() 
    setTimeout(() => {
      alert("O JOGO ACABOU - O vencedeor foi o jogador  " + playertime)
    }, 10);
     
  }
  updatesquares() 
}


function updatesquares(){
  let squares=document.querySelectorAll(".square")

  squares.forEach((square)=>{
    let position=square.id
   let symbol=board[position]

   if(symbol!=''){
    square.innerHTML=`<div class='${symbol}'></div>`
   }
  })
}