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

        let rowLimit = 10;
        

        let reqString = 'https://script.google.com/macros/s/AKfycbz4bqgr0lOgvfhraAjEN6_KVVd68D-Jfb1Qnj4pk3V2VSp802I/exec'+'?'+"filterOne=";


        let filterOne = {"Hello":"Iam",
                        "filter":"one",};

        let bodyData = {"Hello":"Iam",
                        "Body":"Data",}

        

/*perm variable*/

let localVar = {"one":"one"};

/*main function*/

function mainFunc() {

    //testfunc();
  // fetchInfoWithFilter (filterOne);
   
 // filterOne = JSON.stringify(filterOne);
  // postData(reqString+filterOne,bodyData);

   
  buttonAssigner (title);

  fillJobs(title);
  //fetchandUpdateJobs();


  tempFunc();
  

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
   return cloudObject;
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


function fillJobs (title) {

  if(title==="Bloom Consultancy & Human Development - Jobs"){

    var jobsSecondContainer = createRows ();
    var jobsFirstContainer = document.getElementById("big-bio");
     
     var navigationPanelTop = document.createElement("div");

     for(let i=1; i<=rowLimit; i++){

      let clone = jobsSecondContainer.cloneNode(true);
      clone.id = "One"+i;
     jobsFirstContainer.appendChild(clone);

     }


/*Navigation Panel*/      
     navigationPanelTop.className = "navigationPanel";
     navigationPanelTop.id = "topnav";

     
    

     
     let firstRow = document.getElementById("One0");

     let navigationPanelStyle = document.createElement("style");
     navigationPanelStyle.innerHTML = ".navigationPanel {display:block; position: relative; width: 96%; min-height: 75px; height: fit-content; padding: 5px 12px; background-color: lightgray; box-shadow: 0.5px 0.5px 2px 0.2px grey; box-sizing:border-box; display:flex; flex-flow:row; flex-wrap: wrap; justify-content:center;align-items:center;} #topnav{bottom: 16px;}";
     jobsFirstContainer.insertBefore(navigationPanelTop,firstRow);
     jobsFirstContainer.appendChild(navigationPanelStyle);


     let navColumnOne = document.createElement("div");
     navColumnOne.id = "navcolumnOne";
     navColumnOne.innerHTML ="Total in list : <span id='totjobs'>10</span>";

     let navColumnTwo = document.createElement("div");
     navColumnTwo.id = "navcolumnTwo";
     
     let navTwoTopRow = document.createElement("div");
     navTwoTopRow.className = "navTwoRows";
     navTwoTopRow.id = "pagesDiv";
     navTwoTopRow.innerHTML = "<div style='padding-top:5px'>Page <span class='pageno' id='paginonum'>1</span> of <span class='pageno' id='totpages'>10</span> </div>"
     let navTwoBotRow = document.createElement("div");
     navTwoBotRow.innerHTML = "<button class='jobnavbutt' id='left'></button><button class='jobnavbutt' id='right'></button>"
     navTwoBotRow.className = "navTwoRows";

     let navTwoRowsStyle = document.createElement("style");
     navTwoRowsStyle.innerHTML = ".navTwoRows{min-width: 175px; text-align: center; height: 36px; background-color:white; margin-top: 6px; box-sizing:border-box;}"

     
     let navcolumnOneStyle = document.createElement("style");
     navcolumnOneStyle.innerHTML = "#navcolumnOne{width: 30%; margin: 3px 50px; height 50px; font-size:normal;box-sizing:border-box;}";

     navcolumnTwoStyle = document.createElement("style");
     navcolumnTwoStyle.innerHTML = "#navcolumnTwo{width: 40%; display: flex; flex-flow:column; flex-wrap: nowrap; justify-content: center; align-items:flex-end; margin: 3px 50px; box-sizing:border-box;}";


     let buttStyle = document.createElement("style");
     buttStyle.innerHTML = ".jobnavbutt{  margin: 0px 12px;width: 36px; color: transparent; border:none; height: 36px;  box-sizing: border-box; z-index: 10; transform: rotate(0deg); background-color: transparent; color:transparent;} .jobnavbutt:last-child{background-image: url('https://am3pap006files.storage.live.com/y4m6nuigXvp2aoCgVlBbVLlQGKfoHE0wy29uNB68rLoAPST8OFWGKUl4I4a9gHF1HbBNUfMhhLGY4yW9jKSwgHBG53_ji20OtiIV6PpNbHghFcYAHDeMkyhZjcu7Rpm6RtQijMjOeY4bbRjtKJmtDCnnblsEtECRegtBmFYnnFOiRR8N-ucfnrfeDy279CfecJB?width=500&height=353&cropmode=none'); background-position:center; background-size:contain; background-repeat:no-repeat;}  .jobnavbutt:first-child{ background-repeat:no-repeat; background-image: url('https://am3pap006files.storage.live.com/y4mXf-7bi409hnOBocT3bLZ9mQdbliF_KkV0pZJkcAIl5yCoymC5yPifDGzQkIjTai6oepxJGcUmDRbv5A4Ve87w7k0SPG8PDY-8A24WoU-hxG4kYkzQRlwqMyD6MeksaJKOwf8KGbanKkvFwpki-smuAU4QdU8d4kjrT4einBQXyLoAm0jirybn1GqKwi0h9G8?width=500&height=353&cropmode=none'); background-position:center; background-size:contain;}"
   
     navColumnTwo.appendChild(navTwoTopRow);
     navColumnTwo.appendChild(navTwoBotRow);
     navColumnTwo.appendChild(navTwoRowsStyle);
     navColumnTwo.appendChild(buttStyle);


     navigationPanelTop.appendChild(navColumnOne);
     navigationPanelTop.appendChild(navcolumnOneStyle);
     navigationPanelTop.appendChild(navColumnTwo);
     navigationPanelTop.appendChild(navcolumnTwoStyle);




     

     /*Navigation Panel*/


  }


  

}

async function fetchJobs() {
  let formObject = {"name": "tempNameValue",
  "email": "tempEmailValue"};

// tempDiv2.innerHTML = tempNameValue+"<br>"+tempEmailValue;

filterOne["action"] = "fetchjobs";

bodyData["fetch"] = {"jobs1":[{"fetchname":"jobstestfetch"}]};
bodyData["fetch"]["jobs1"].push(formObject);


let tempvar = await postData(reqString,filterOne,bodyData);
return tempvar;
}

function updateJobs (someArray) {

       /*

              let tempDiv = document.getElementById("big-bio");


              let tempvar2 = Object.entries(tempvar)[3];

              //tempDiv.innerHTML = tempvar2[1][0][1];


              var matches = tempDiv.querySelectorAll(".columnOneRows:first-child");
              var matches2 = tempDiv.querySelectorAll(".columnOneRows:nth-child(2)");
              var matches3 = tempDiv.querySelectorAll(".columnOneRows:last-child");

              var matches4 = tempDiv.querySelectorAll(".columnTwoRows:first-child");
              var matches5 = tempDiv.querySelectorAll(".columnTwoRows:last-child");

              let counter = 1;

              matches.forEach(function (element){
              element.innerHTML = tempvar2[1][counter][1];
              counter++;
              })

              counter = 1;
              matches2.forEach(function (element){
              element.innerHTML = tempvar2[1][counter][2];
              counter++;
              })

              counter = 1;
              matches3.forEach(function (element){
              element.innerHTML = tempvar2[1][counter][6];
              counter++;
              })

              counter = 1;
              matches4.forEach(function (element){
              element.innerHTML = tempvar2[1][counter][7];
              counter++;
              })

              counter = 1;
              matches5.forEach(function (element){
              let regex =/(\d{1,4}([.\-/])\d{1,2}([.\-/])\d{1,4})/g;

              let regex2 =/\u002d\d+\u002d/g;

              let newDate = tempvar2[1][counter][0].match(regex);
              newDate = new String(newDate);
              let newDate2 = newDate.replace(regex2, function(match){

                if (match === "-12-"){
                  match = " December ";
                }else if (match === "-11-"){
                  match = " November ";
                }else if (match === "-10-"){
                  match = " October ";
                }else if (match === "-9-"){
                  match = " September ";
                }else if (match === "-8-"){
                  match = " August ";
                }else if (match === "-7-"){
                  match = " July ";
                }else if (match === "-6-"){
                  match = " June ";
                }else if (match === "-5-"){
                  match = " May ";
                }else if (match === "-4-"){
                  match = " April ";
                }else if (match === "-3-"){
                  match = " March ";
                }else if (match === "-2-"){
                  match = " February ";
                }else if (match === "-1-"){
                  match = " January ";
                }

                return match;

              });

              let newDateold = newDate2;

              let yearnew = newDateold.match(/\d+\s+/);

              let newDate3 = newDate2.replace(/\d+\s+/,function(match){

                return "";

              });

              //  let truncatedDate = newDateold.replace(match,"");

                newDate3 = newDate3+","+" "+yearnew;
              element.innerHTML = newDate3;
              counter++;
              })
              /*
              */

             let tempDiv = document.getElementById("big-bio");

             var jobTitleField = tempDiv.querySelectorAll(".columnOneRows:first-child");
             var companyNameField = tempDiv.querySelectorAll(".columnOneRows:nth-child(2)");
             var locationField = tempDiv.querySelectorAll(".columnOneRows:last-child");

             var industryField = tempDiv.querySelectorAll(".columnTwoRows:first-child");
             var dateField = tempDiv.querySelectorAll(".columnTwoRows:last-child");


         

             let newArray = Object.entries(someArray)[3];

             let numofColumns = newArray[0].length;
             let numofRows = newArray[1].length;

             let numOfPages = numofRows/(rowLimit+1);

             

             let reminderSize = numofRows%(rowLimit+1);

             if(reminderSize>=1){
               numOfPages = numOfPages + 1;
             }

             numOfPages = Math.round(numOfPages);

             let totPages = document.getElementById("totpages");
             let totJobs = document.getElementById("totjobs");

             totPages.innerHTML = numOfPages;
             totJobs.innerHTML = reminderSize;

                      let pageObj = { "pages":[
                                                      
                                                     { "page":[
                                                       
                                                        {"jobTitle":"Loading...",
                                                            "companyName":"Loading...",
                                                            "location":"Loading...",
                                                            "industry":"Loading...",
                                                            "date":"Loading...",}
                                                          ]
                                                        
                                                      }
                                                          
                                                          
                                              ]        
                                    };

            let pageContainer = [pageObj.page];





            for (let pagesCounter = 0; pagesCounter < numOfPages-1; pagesCounter++) {


              let pageTemp = 
                                                      
                { "page":[

                  {"jobTitle":"Loading...",
                  "companyName":"Loading...",
                  "location":"Loading...",
                  "industry":"Loading...",
                  "date":"Loading...",}
                ]
                  
                
                    
                   
                 };

        

              pageObj.pages.push(pageTemp);

              

            }

            let thisCounter3000 = 0;


            for (let pagiCounter = 0; pagiCounter < numOfPages ; pagiCounter++){

              let tempCounter3000 = 0;



            for(let rowsCounter = 0; rowsCounter < (rowLimit+1); rowsCounter++) {

              tempCounter3000 = rowsCounter + thisCounter3000;

              if (tempCounter3000 >= numofRows){

                localVar["lastPageRows"] = rowsCounter;
                localVar["lastPageIndex"] = pagiCounter;

                break;
              }

              

              let rowTemp = 
                                                     
                {"jobTitle":"Loading...",
                    "companyName":"Loading...",
                    "location":"Loading...",
                    "industry":"Loading...",
                    "date":"Loading...",}
                  ;

                           pageObj.pages[pagiCounter].page[rowsCounter].jobTitle =    newArray[1][(rowsCounter+thisCounter3000)][1];
                           pageObj.pages[pagiCounter].page[rowsCounter].companyName = newArray[1][(rowsCounter+thisCounter3000)][2];
                           pageObj.pages[pagiCounter].page[rowsCounter].location =    newArray[1][(rowsCounter+thisCounter3000)][6];
                           pageObj.pages[pagiCounter].page[rowsCounter].industry =    newArray[1][(rowsCounter+thisCounter3000)][7];

                          /*Date Cleanup ops */
                          /*Date Cleanup ops */
                          /*Date Cleanup ops */
                          /*Date Cleanup ops */
                          let regex =/(\d{1,4}([.\-/])\d{1,2}([.\-/])\d{1,4})/g;
                          let regex2 =/\u002d\d+\u002d/g;
                          let newDate = newArray[1][(rowsCounter+thisCounter3000)][0].match(regex);
                          
                          newDate = new String(newDate);
                                  let newDate2 = newDate.replace(regex2, function(match){

                                  if (match === "-12-"){
                                    match = " December ";
                                  }else if (match === "-11-"){
                                    match = " November ";
                                  }else if (match === "-10-"){
                                    match = " October ";
                                  }else if (match === "-9-"){
                                    match = " September ";
                                  }else if (match === "-8-"){
                                    match = " August ";
                                  }else if (match === "-7-"){
                                    match = " July ";
                                  }else if (match === "-6-"){
                                    match = " June ";
                                  }else if (match === "-5-"){
                                    match = " May ";
                                  }else if (match === "-4-"){
                                    match = " April ";
                                  }else if (match === "-3-"){
                                    match = " March ";
                                  }else if (match === "-2-"){
                                    match = " February ";
                                  }else if (match === "-1-"){
                                    match = " January ";
                                  }

                                  return match;

                                });

                        let newDateold = newDate2;
                        let yearnew = newDateold.match(/\d+\s+/);
                              let newDate3 = newDate2.replace(/\d+\s+/,function(match){

                                return "";

                              });

                        //  let truncatedDate = newDateold.replace(match,"");

                          newDate3 = newDate3+","+" "+yearnew;
                          pageObj.pages[pagiCounter].page[rowsCounter].date = newDate3;
                          /*Date Cleanup ops */
                          /*Date Cleanup ops */
                          /*Date Cleanup ops */
                          /*Date Cleanup ops */

                          
                          pageObj.pages[pagiCounter].page.push(rowTemp);

                                

            }

            
  thisCounter3000 = thisCounter3000+rowLimit+1;

          }



                                  

            // let tempvar2 = Object.entries(tempvar)[3];

           /* for(let i30 = 0; i30 <= rowLimit; i30++){

              // tempDiv.innerHTML = newArray[1].length;
            jobTitleField[i30].innerHTML = pageObj.pages[0].page[i30].jobTitle;
            companyNameField [i30].innerHTML = pageObj.pages[0].page[i30].companyName;
            locationField[i30].innerHTML = pageObj.pages[0].page[i30].location;
            industryField[i30].innerHTML = pageObj.pages[0].page[i30].industry;
            dateField[i30].innerHTML = pageObj.pages[0].page[i30].date;

            }*/

            //tempDiv.innerHTML = newArray[1].length;
            //jobTitleField[0].innerHTML = pageObj.pages[4].page[10].jobTitle;
            //companyNameField [0].innerHTML = pageObj.pages[8].page[10].companyName;
            //locationField[0].innerHTML = pageObj.pages[8].page[10].location;
            //industryField[0].innerHTML = pageObj.pages[8].page[10].industry;
            //dateField[0].innerHTML = pageObj.pages[8].page[10].date;


            localVar["currPageValue"] = 1;
            localVar["numOfPages"] = numOfPages;

          

            return pageObj;
  
}





async function  tempFunc () {
  localVar["pageObj"] = await fetchJobs();
  localVar.pageObj = updateJobs(localVar.pageObj);


  displayPage(1);
  initiateNavi();


  
};

function initiateNavi() {

  let leftButton = document.querySelectorAll(".jobnavbutt:first-child");
  let rightButton = document.querySelectorAll(".jobnavbutt:last-child");


  leftButton[0].addEventListener("click", function(){moveMeBaby(this.id);});
  rightButton[0].addEventListener("click", function(){moveMeBaby(this.id);});



  
}


function moveMeBaby(idieded) {

  let buttId = idieded;




  

  if (buttId == "left" && localVar.currPageValue > 1){

    let tempval = localVar.currPageValue - 1;

    document.getElementById("navcolumnOne").innerHTML = "leftylefty";
    document.getElementById("paginonum").innerHTML = tempval;

    localVar.currPageValue = tempval;
    displayPage(tempval);

  }else if(buttId == "right" && localVar.currPageValue < localVar.numOfPages){

    let tempval = localVar.currPageValue + 1;

    document.getElementById("navcolumnOne").innerHTML = "rightyrighty";
    document.getElementById("paginonum").innerHTML = tempval;

    localVar.currPageValue = tempval;
    displayPage(tempval);

  }else if (buttId == "left"&& localVar.currPageValue <= 1){

    let tempval = localVar.numOfPages;

    document.getElementById("navcolumnOne").innerHTML = "leftyyy";
    document.getElementById("paginonum").innerHTML = tempval;

    localVar.currPageValue = tempval;
    displayPage(tempval);

  }else if(buttId == "right" && localVar.currPageValue >= localVar.numOfPages){

    let tempval = 1;

    document.getElementById("navcolumnOne").innerHTML = "leftyyy";
    document.getElementById("paginonum").innerHTML = tempval;

    localVar.currPageValue = tempval;
    displayPage(tempval);

  }else{

    document.getElementById("navcolumnOne").innerHTML = "buttId";


  }



}


function displayPage(pageIndex) {



    doACoolExit();

    var jobsSecondContainer = createRows ();
    var jobsFirstContainer = document.getElementById("big-bio");

    for(let i=1; i<=rowLimit; i++){

      if (i >= localVar.lastPageRows && pageIndex == localVar.lastPageIndex+1){
        break;

      }

      let clone = jobsSecondContainer.cloneNode(true);
      clone.id = "One"+i;
     jobsFirstContainer.appendChild(clone);
  
     }








  for(let i30 = 0; i30 <= rowLimit; i30++){


    if (i30 >= localVar.lastPageRows && pageIndex == localVar.lastPageIndex+1) {
      break;

    }

    var tempDiv = document.getElementById("One"+i30);

    var jobTitleField = tempDiv.querySelectorAll(".columnOneRows:first-child");
    var companyNameField = tempDiv.querySelectorAll(".columnOneRows:nth-child(2)");
    var locationField = tempDiv.querySelectorAll(".columnOneRows:last-child");

    var industryField = tempDiv.querySelectorAll(".columnTwoRows:first-child");
    var dateField = tempDiv.querySelectorAll(".columnTwoRows:last-child");

    // tempDiv.innerHTML = newArray[1].length;
 jobTitleField[0].innerHTML = localVar.pageObj.pages[pageIndex-1].page[i30].jobTitle;
 //jobTitleField[0].innerHTML = pageIndex;
 //jobTitleField[0].innerHTML = localVar.lastPageIndex;
// companyNameField [i30].innerHTML = localVar.pageObj.pages[pageIndex-1].page[i30].companyName;
 // locationField[i30].innerHTML = localVar.pageObj.pages[pageIndex-1].page[i30].location;
 // industryField[i30].innerHTML = localVar.pageObj.pages[pageIndex-1].page[i30].industry;
 // dateField[i30].innerHTML = localVar.pageObj.pages[pageIndex-1].page[i30].date;

  }


}



function doACoolExit () {

  var myCanvas = document.querySelectorAll(".jobsContainer")


  for(let i= 0; i < myCanvas.length; i++){

    myCanvas[i].remove();


  }

  



}



function createRows () {


  var motherContainer = document.getElementById("generic-content-block");
  var jobsFirstContainer = document.getElementById("big-bio");
  var jobsSecondContainer = document.createElement("div");
  var columnOne = document.createElement("div");
  columnOne.id="columnOne";
  var columnTwo = document.createElement("div");
  columnTwo.id = "columnTwo";

  var jobTitle = document.createElement("div");
  var companyName = document.createElement("div");
  var location = document.createElement("div");

  var industry = document.createElement("div");
  var expiryDate = document.createElement("div");

  
  


  jobTitle.innerHTML = "Job Title";
  companyName.innerHTML = "company Name";
  location.innerHTML = "Location";

  industry.innerHTML = "Industry";
  expiryDate.innerHTML = "00/00/0000";

  

 // jobsFirstContainer.innerHTML= "";
  
  var firstContainerStyle = document.createElement("style");
  firstContainerStyle.innerHTML = "#big-bio { background-color: white; min-height: 600px; height: fit-content; box-sizing: border-box; display: flex; flex-flow: column; justify-content: center; align-items:center; padding: 50px 25px;}";
  motherContainer.appendChild(firstContainerStyle);

  secondContainerStyle = document.createElement("style");
  secondContainerStyle.innerHTML = ".jobsContainer{background-color: #DCDCDC; width:96%; min-height: 100px; margin-top: 3px; box-sizing: border-box; box-shadow: 0.5px 0.5px 2px 0.2px grey; display: flex; flex-flow: row; flex-wrap:wrap; justify-content: center; align-items: center;}"
  motherContainer.appendChild(secondContainerStyle);
  jobsFirstContainer.appendChild(jobsSecondContainer);
  jobsSecondContainer.className = "jobsContainer";

  var secondContainerColumns = document.createElement("style");
  secondContainerColumns.innerHTML = ".jobsContainerColumns {width: 48%; min-height: 100px; min-width:300px; background-color: blue; box-sizing: border-box;}";
  columnOne.className = "jobsContainerColumns";
  columnTwo.className = "jobsContainerColumns";
  columnTwo.style.backgroundColor = "lightgray";
  jobsSecondContainer.appendChild(secondContainerColumns);
  jobsSecondContainer.appendChild(columnOne);
  jobsSecondContainer.appendChild(columnTwo);


  columnOneStyle = document.createElement("style");
  columnOneStyle.innerHTML = "#columnOne{display: flex; flex-flow:column; flex-wrap: nowrap; justify-content: center; align-items:center;}";

  columnTwoStyle = document.createElement("style");
  columnTwoStyle.innerHTML = "#columnTwo{display: flex; flex-flow:column; flex-wrap: nowrap; justify-content: center; align-items:center;}";

  columnOneRowStyle = document.createElement("style");
  columnOneRowStyle.innerHTML = ".columnOneRows {width:100%; background-color: white; min-height: 33px; box-sizing: border-box;}";

  columnTwoRowStyle = document.createElement("style");
  columnTwoRowStyle.innerHTML = ".columnTwoRows {width:100%; background-color: white; min-height: 33px; text-align:right;box-sizing: border-box;}";

  jobTitle.className = "columnOneRows";
  companyName.className = "columnOneRows";
  location.className = "columnOneRows";

  industry.className = "columnTwoRows";
  expiryDate.className = "columnTwoRows";

  jobsSecondContainer.appendChild(columnOneStyle);
  jobsSecondContainer.appendChild(columnOneRowStyle);
  jobsSecondContainer.appendChild(columnTwoStyle);
  jobsSecondContainer.appendChild(columnTwoRowStyle);

  columnOne.appendChild(jobTitle);
  columnOne.appendChild(companyName);
  columnOne.appendChild(location);

  columnTwo.appendChild(industry);
  columnTwo.appendChild(expiryDate);



jobsSecondContainer.id = "One0";

return jobsSecondContainer;
}