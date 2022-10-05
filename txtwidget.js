const getText = () => reearth.widget.property && reearth.widget.property.default ? reearth.widget.property.default.text || "" : "";


const html = `
<div id="txtwrapper" style="background:rgba(200,200,200,0);text-align: center;">
<h1 id="txtwidget" style="text-align:center; font-size:30px;"></h1>>
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
      document.getElementById("txtwidget").innerHTML = text.title;
    }else{
      document.getElementById("txtwidget").innerHTML = "";
    if(text.hasOwnProperty("color")){
      document.getElementById("txtwidget").style.color = text.color;
    }else{
      document.getElementById("txtwidget").style.color = "white";
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
