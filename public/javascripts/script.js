// document.addEventListener('DOMContentLoaded', () => {

//   console.log('IronGenerator JS imported successfully!');

// }, false);

// $('#sendChat').click(function(){
  
//   .then((response)=>{
//     $('#chatbox').empty();

//     response.data.forEach((newMessage)=>{
//       const newMess = `
//       <div>
//         <span>${newMessage.Say}</span>      
//       </div>
//       `;
//       $('#chatbox').append(newMess);
//     });
//     console.log(response);
//   });
// });


$('#sendChat').click(function(){
  const message = $('#chatMessage').val();

  const data = {
     mess: message
  }
})