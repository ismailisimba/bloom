/*main function*/

window.onload = (event) => {
    let title = window.document.title;
    let tempDiv = document.createElement("div");
    let tempStyle = document.createElement("style")
    
    tempDiv.id = "testdiv3000";
    tempDiv.innerHTML = title;
    tempStyle.innerHTML = "#testdiv3000 { display: block; position: absolute; top: 150px; left: 25%; width: 50%; height: 350px; color: white; background-color: red; z-index: 20;}"

    window.document.body.appendChild(tempStyle);
    window.document.body.appendChild(tempDiv);
  };
