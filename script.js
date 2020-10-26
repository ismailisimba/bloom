/*temp variables*/
        let title = window.document.title;
        //let title = document.readyState;
        let tempDiv = document.createElement("div");
        let tempStyle = document.createElement("style");
        let tempDiv2 = document.createElement("p");
        tempDiv2.innerHTML = title;

        let homeButt1 = document.getElementById("homepageformbutton");

        let reqString = 'https://script.google.com/macros/s/AKfycbz4bqgr0lOgvfhraAjEN6_KVVd68D-Jfb1Qnj4pk3V2VSp802I/exec'+'?'+"filterOne=";


        let filterOne = {"Hello":"Iam",
                        "filter":"one",};

        let bodyData = {"Hello":"Iam",
                        "Body":"Data",}

        

/*perm variable*/

let localVar = {"one":"one"};

/*main function*/

function mainFunc() {

    testfunc();
  // fetchInfoWithFilter (filterOne);
   
 // filterOne = JSON.stringify(filterOne);
  // postData(reqString+filterOne,bodyData);

   homeButt1.addEventListener("click", function(){homepageFormButton();})

  };

  mainFunc();


function testfunc () {     
     tempDiv.id = "testdiv3000";
     tempDiv.appendChild(tempDiv2);
     tempStyle.innerHTML = "#testdiv3000 { display: block; position: absolute; top: 150px; left: 25%; width: 50%; height: 350px; color: white; background-color: red; z-index: 20;}"
 
     window.document.body.appendChild(tempStyle);
     window.document.body.appendChild(tempDiv);    
  }


async function fetchInfoWithFilter (filterOne) {
   // filterOne = JSON.stringify(filterOne);
    const myInit = {
        method: "GET",
        mode: "cors",
       // credentials: "omit",
        headers: {
         // 'Content-Type': 'text/txt',
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow'
      };

    var myRequest = new Request(reqString+filterOne);
    

         
    var returnVal = await fetch(myRequest, myInit)
          .then(function(response) {
            if (!response.ok) {
              
              throw new Error("HTTP error, status = " + response.status);
              
            }
            
            return response.text();
          })
          .then(function(myBlob) {
            
            var cloudObject = JSON.parse(myBlob);
            
          
            return cloudObject;
            
          })
          .catch(function(error) {
            var p = document.createElement('p');
            p.appendChild(
              document.createTextNode('Error: ' + error.message)
            );
            tempDiv.insertBefore(p, tempDiv2);
          });

        

          localVar = returnVal; 

          tempDiv2.innerHTML = Object.keys(localVar);   
};




async function postData(url = '', data = {}) {
   
    // Default options are marked with *
    const cloudObject = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'default', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'omit', // include, *same-origin, omit
      headers: {
        //'Content-Type': 'text/txt'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    }).then(function(response){
        
        let cloudy =  response.text();
        
        
        
        

        return cloudy;
    }).then(function(myBlob) {

        var cloudObjecty = JSON.parse(myBlob);
            
          
            return cloudObjecty;

    });
     
    
    

   // tempDiv2.innerHTML = Object.keys(cloudObject)[2];
  }



  function homepageFormButton () {

      let tempNameValue = document.getElementById("hometextname").value;
      let tempEmailValue = document.getElementById("homeemailname").value;

      let formObject = {"name": tempNameValue,
                         "email": tempEmailValue};

     // tempDiv2.innerHTML = tempNameValue+"<br>"+tempEmailValue;

     bodyData["forms"] = {"form1":[{"form-name":"homepageform"}]};
     bodyData["forms"]["form1"].push(formObject);

 //  filterOne = JSON.stringify(filterOne);
  postData(reqString+filterOne,bodyData);


      
  }