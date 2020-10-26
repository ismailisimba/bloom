/*temp variables*/
        let title = window.document.title;
        //let title = document.readyState;
        let tempDiv = document.createElement("div");
        let tempStyle = document.createElement("style");
        let tempDiv2 = document.createElement("p");
        tempDiv2.innerHTML = title;


        let filterOne = {"Hello":"There!",
                        "General":"Palpatine?",};
        filterOne = JSON.stringify(filterOne);

/*perm variable*/

let localVar = {"one":"one"};

/*main function*/

window.onload = (event) => {

    testfunc();
    fetchInfoWithFilter (filterOne);

  };


  function testfunc () {

  
     
     tempDiv.id = "testdiv3000";
     tempDiv.appendChild(tempDiv2);
     tempStyle.innerHTML = "#testdiv3000 { display: block; position: absolute; top: 150px; left: 25%; width: 50%; height: 350px; color: white; background-color: red; z-index: 20;}"
 
     window.document.body.appendChild(tempStyle);
     window.document.body.appendChild(tempDiv);
     
  }


   async function fetchInfoWithFilter (filterOne) {
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

    var myRequest = new Request('https://script.google.com/macros/s/AKfycbz4bqgr0lOgvfhraAjEN6_KVVd68D-Jfb1Qnj4pk3V2VSp802I/exec'+'?'+"filterOne="+filterOne);
    

         
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
