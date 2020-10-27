/*temp variables*/
        let title = window.document.title;
        //let title = document.readyState;
        let tempDiv = document.createElement("div");
        let tempStyle = document.createElement("style");
        let tempDiv2 = document.createElement("p");
        tempDiv2.innerHTML = title;

        let homeButt1 = document.createElement("div");
        let psychoButt = document.createElement("div");
        let talentButt = document.createElement("div");
        let coachButt = document.createElement("div");
        let contactButt = document.createElement("div");
        

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

   
  buttonAssigner (title);

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
    filterOne = JSON.stringify(filterOne);
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




async function postData(url,filterOne, data = {}) {
    filterOne = JSON.stringify(filterOne);

    url = url+filterOne;
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

     filterOne["action"] = "fillform";

     bodyData["forms"] = {"form1":[{"formname":"homepageform"}]};
     bodyData["forms"]["form1"].push(formObject);

   
  postData(reqString,filterOne,bodyData);


      
  }


  
  function psychoButton () {

    let tempNameValue = document.getElementById("psychoname").value;
    let tempEmailValue = document.getElementById("psychoemail").value;
    let tempNumValue = document.getElementById("psychonum").value;
    let tempBigTextValue = document.getElementById("psychobigtext").value;
    let radioVal = "Null";

    let yesButStat = document.getElementById("psychoyesbut").checked;
    let noButStat = document.getElementById("psychonobut").checked;

    if(yesButStat){
        radioVal = "Yes";
    }else if(noButStat) {
        radioVal = "No";
    }


    let formObject = {"name": tempNameValue,
                       "email": tempEmailValue,
                       "phonenum": tempNumValue,
                       "bigdescrip": tempBigTextValue,
                       "yesno": radioVal};

   // tempDiv2.innerHTML = tempNameValue+"<br>"+tempEmailValue;

   filterOne["action"] = "fillform";

   bodyData["forms"] = {"form2":[{"formname":"psychoform"}]};
   bodyData["forms"]["form2"].push(formObject);

 
postData(reqString,filterOne,bodyData);


    
}



function talentButton () {

    let tempNameValue = document.getElementById("talentedname").value;
    let tempEmailValue = document.getElementById("talentedemail").value;
    let tempNumValue = document.getElementById("talentednum").value;

    let talentCheck1 = "Null";
    let talentCheck2 = "Null";
    let talentCheck3 = "Null";
    let talentCheck4 = "Null";
    let talentCheck5 = "Null";

    talentCheck1 = document.getElementById("check1").checked;
    talentCheck2 = document.getElementById("check2").checked;
    talentCheck3 = document.getElementById("check3").checked;
    talentCheck4 = document.getElementById("check4").checked;
    talentCheck5 = document.getElementById("check5").checked;

    let talentCheckObj = {one:"no",
                        two:"no",
                        three:"no",
                        four:"no",
                        five:"no"};

    let radioVal = "no";

    let yesButStat = document.getElementById("talentyesbut").checked;
    let noButStat = document.getElementById("talentnobut").checked;

    if(yesButStat){
        radioVal = "Yes";
    }else if(noButStat) {
        radioVal = "No";
    }

            if(talentCheck1){
            talentCheckObj.one = "Yes";
            }

            if(talentCheck2){
            talentCheckObj.two = "Yes";
            }

            if(talentCheck3){
            talentCheckObj.three = "Yes";
            }

            if(talentCheck4){
            talentCheckObj.four = "Yes";
            }

            if(talentCheck5){
            talentCheckObj.five = "Yes";
            }


    let formObject = {"name": tempNameValue,
                       "email": tempEmailValue,
                       "phonenum": tempNumValue,
                       "checklist": talentCheckObj,
                       "yesno": radioVal};

   // tempDiv2.innerHTML = tempNameValue+"<br>"+tempEmailValue;

   filterOne["action"] = "fillform";

   bodyData["forms"] = {"form3":[{"formname":"talentform"}]};
   bodyData["forms"]["form3"].push(formObject);

 
postData(reqString,filterOne,bodyData);


    
}




function coachButton () {

  let tempNameValue = document.getElementById("coachname").value;
  let tempEmailValue = document.getElementById("coachemail").value;
  let tempNumValue = document.getElementById("coachnum").value;
  let coachDate = document.getElementById("coachdate").value;

  let coachCheck1 = false;
  let coachCheck2 = false;
  let coachCheck3 = false;
  let coachCheck4 = false;
  let coachCheck5 = false;
  let coachCheck6 = false;

  coachCheck1 = document.getElementById("check1").checked;
  coachCheck2 = document.getElementById("check2").checked;
  coachCheck3 = document.getElementById("check3").checked;
  coachCheck4 = document.getElementById("check4").checked;
  coachCheck5 = document.getElementById("check5").checked;
  coachCheck6 = document.getElementById("check6").checked;

  let coachCheckObj = {one:"no",
                      two:"no",
                      three:"no",
                      four:"no",
                      five:"no",
                      six:"no"};

  let radioVal = "no";

  let yesButStat = document.getElementById("coachyesbut").checked;
  let noButStat = document.getElementById("coachnobut").checked;

  if(yesButStat){
      radioVal = "Yes";
  }else if(noButStat) {
      radioVal = "No";
  }

          if(coachCheck1){
            coachCheckObj.one = "Yes";
          }

          if(coachCheck2){
            coachCheckObj.two = "Yes";
          }

          if(coachCheck3){
            coachCheckObj.three = "Yes";
          }

          if(coachCheck4){
            coachCheckObj.four = "Yes";
          }

          if(coachCheck5){
            coachCheckObj.five = "Yes";
          }

          if(coachCheck6){
            coachCheckObj.six = "Yes";
            }


  let formObject = {"name": tempNameValue,
                     "email": tempEmailValue,
                     "phonenum": tempNumValue,
                     "coachdate": coachDate,
                     "checklist": coachCheckObj,
                     "yesno": radioVal};

 // tempDiv2.innerHTML = tempNameValue+"<br>"+tempEmailValue;

 filterOne["action"] = "fillform";

 bodyData["forms"] = {"form4":[{"formname":"coachform"}]};
 bodyData["forms"]["form4"].push(formObject);


postData(reqString,filterOne,bodyData);

 
}



function contactButton () {

  let tempNameValue = document.getElementById("contactname").value;
  let tempEmailValue = document.getElementById("contactemail").value;
  let tempSubjValue = document.getElementById("contactsubj").value;
  let messageVal = document.getElementById("contactbigtext").value;


  let formObject = {"name": tempNameValue,
                     "email": tempEmailValue,
                     "subject": tempSubjValue,
                     "message": messageVal,
                     };

 // tempDiv2.innerHTML = tempNameValue+"<br>"+tempEmailValue;

 filterOne["action"] = "fillform";

 bodyData["forms"] = {"form5":[{"formname":"contactform"}]};
 bodyData["forms"]["form5"].push(formObject);


postData(reqString,filterOne,bodyData);

 
}




function buttonAssigner (title) {

    if(title==="Bloom Consultancy & Human Development - Health, Happiness & Confidence"){

       homeButt1 = document.getElementById("homepageformbutton");
       homeButt1.addEventListener("click", function(){homepageFormButton();})


    }else if(title==="Bloom Consultancy & Human Development - Psychology"){

        psychoButt = document.getElementById("psychotherapist");
        psychoButt.addEventListener("click", function(){psychoButton ();})

    }else if(title==="Bloom Consultancy & Human Development - Talent Acquisition"){

        talentButt = document.getElementById("talentedbutton");
        talentButt.addEventListener("click", function(){talentButton ();})

    }else if(title==="Bloom Consultancy & Human Development - Coaching"){

      coachButt = document.getElementById("coachbutton");
      coachButt.addEventListener("click", function(){coachButton ();})

  }else if(title==="Bloom Consultancy & Human Development - Contact Us"){

    contactButt = document.getElementById("contactbutton");
    contactButt.addEventListener("click", function(){contactButton ();})

}

}