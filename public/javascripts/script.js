

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