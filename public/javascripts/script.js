
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
// $('#sendChat').click(function(){
//   const hi = data;
//   .then((response)=>{

    $('#chatbox').empty();
    response.forEach((oneMessage) => {
      const newMes = `
      <div>
      <img src="${oneMessage.image}" alt="Cafe image">
      <span>${oneMessage.name}</span>
      <p>${oneMessage.description}</p>
      `;
      $('#chatbox').append(newMes);
    });
  });

});

