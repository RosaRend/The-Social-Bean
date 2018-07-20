
// import Uppy from '@uppy/core';
// import Dashboard from '@uppydashboard';
// import Tus from '@uppy/tus';
// // import Uppy, { XHRUpload, DragDrop } from 'uppy';

// Uppy({ autoProceed: false })
//   .use(Dashboard, { trigger: '#select-files' })
//   .use(Tus, { endpoint: 'https://master.tus.io/files/' })
//   .on('complete', (result) => {
//     console.log('Upload result:', result);
//   });


// document.getElementById('sendChat').onclick = function(){
//   var theMessage = document.getElementById('message').value;
//   var newRow = document.createElement('div');

//   newRow.className = 'sending';
//   newRow.innerHTML = `
//   <div class="col-xs-5"> 
//     <div class="aMess">${theMessage}</div>
//   </div>
//   `;
//   document.getElementById('chatArea').appendChild(newRow);
// };

// //push users into group
// document.getElementById('').onclick = function(){
  
// };

// var modal = document.getElementById('modal1');

// var btn = document.getElementById("signing");

// var span = document.getElementsByClassName("close")[0];
 
// btn.onclick = function() {
//     modal.style.display = "block";
//     console.log(btn)
// }

// span.onclick = function() {
//     modal.style.display = "none";
// }

// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }

function dropdown() {
    document.getElementById("myDrops").classList.toggle("show")
}

window.onclick = function(event){
    if(!event.target.matches('.btn')){
        var theDrops = document.getElementsByClassName('');
        var i;
        for(i = 0; i < theDrops.length; i++){
            var openDropdown = theDrops[i];
            if(openDropdown.classList.contains('show')){
                openDropdown.classList.remove('show');
            }

        }
    }
}

// $('#openChat').click(function(){

//   axios.get('https://api.twitter.com/1.1/users/show.json')
//   // axios.get('https://ih-crud-api.herokuapp.com/characters')

//   .then((response)=>{

//     $('#chatbox').empty();

//     response.forEach((oneMessage) => {
//       const newMes = `
//       <div>
//       <img src="${oneMessage.image}" alt="Cafe image">
//       <span>${oneMessage.name}</span>
//       <p>${oneMessage.message}</p>
//       `;
//       $('#chatbox').append(newMes);
//     });
//   });

// });

// $('#sendChat').click(function(){
//   const theBio = $('#chatmessage')
//   const theQuote = $()
//   const theFavPlace = $()
// })