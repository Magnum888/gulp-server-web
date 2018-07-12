console.log("hi");
fetch("./static/data.json")
  .then(response => response.json())
  .then(json => console.log(json));