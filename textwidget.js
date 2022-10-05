const getText = () => reearth.widget.property && reearth.widget.property.default ? reearth.widget.property.default || "" : "";


const html = `
<div id="imgwrapper" style="background:rgba(200,200,200,0);text-align: center;">
<span id="title" style="text-align:center; font-size:30px;"> </span>
</div>
<style>
  html, body {
    margin: 0;
    background: transparent;
  }
</style>
<script>
  const cb = text => {
    if(text.hasOwnProperty("title")){
      document.getElementById("title").innerHTML = text.title;
    }else{
      document.getElementById("title").innerHTML = "";
    }
    
    if(text.hasOwnProperty("color")){
      document.getElementById("title").style.color = text.color;
    }else{
      document.getElementById("title").style.color = "red";
    }

    if(text.hasOwnProperty("bgColor")){
      document.getElementById("imgwrapper").style.backgroundColor = text.bgColor;
    }else{
      document.getElementById("imgwrapper").style.backgroundColor = "transparent";
    }
  };
  addEventListener("message", e => {
    if (e.source !== parent) return;
    cb(e.data);
  });
  cb(${JSON.stringify(getText())});
</script>
`;

reearth.ui.show(html);
reearth.on("update", () => {
  reearth.ui.postMessage(getText());
});
