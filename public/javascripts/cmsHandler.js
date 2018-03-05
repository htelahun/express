
 (() => {
console.log('cms handler works');

let submitBtn = document.querySelector('.add-data'),
    targetForm = document.querySelector('form');

function addRecord(e) {
  e.preventDefault();

  var formData = new FormData(targetForm);
      strData  = {};

      for (var[key, value] of formData.entries()){
        console.log(key,value);

        strData[key]= value;
      }

      //run a fetch and do a post
      let url = "api/";

      fetch (url, {
        method: 'post',
        headers : {
          'accept' : 'application/json, text-plain, */*',
        'content-type' : 'application/json'
      },

    body : JSON.stringify(strData)
  })
      .then((resp)=> resp.json())
      .then((data)=> {
        console.log(data);
      })
      .catch(err =>{
        console.log(err);
      });

}



submitBtn.addEventListener('click', addRecord);

 })();
