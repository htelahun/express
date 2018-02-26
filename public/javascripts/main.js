(() => {

  let getButton = document.querySelectorAll('.getButton'),
      deleteBtn = document.querySelector('.deleteRecord');

  function getData (){
    debugger;

    let url = `api/${this.id}`;

    fetch (url)
    .then((resp)=> resp.json())
    .then((data)=> {
      console.log(data);
    })
    .catch((error)=>{
      console.log(error);
    });
  }

  function deleteaRecord (){
    //debugger;

    let url = `api/${this.id}`;

    fetch (url, {method: 'delete'})
    .then((resp)=> resp.json())
    .then((data)=> {
      console.log(data);
    })
    .catch((error)=>{
      console.log(error);
    });
  }

getButton.forEach(button => button.addEventListener('click',getData));
deleteBtn.addEventListener('click', deleteaRecord);

})();
