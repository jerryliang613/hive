const fileinput = document.getElementById("file");
const searchbtn = document.getElementById("searchbtn");
const searchtxt = document.getElementById("searchtxt");
const filecontent = document.getElementById("filecontent");
const result = document.querySelector(".result-content");

let text = "";

window.onload = () => {
  fileinput.value = null;
};

const handleSearch = () => {
  if (fileinput.files.length > 0 && text) {
    //search
    const regname = /Charlie\s+Winston/i;
    const regmob = /0\s*4\s*[\d|\s*]{8,}/;
    let name = text.match(regname);
    let mob = text.match(regmob);
    if (!name) name = "没有匹配！";
    if (!mob) mob = "没有匹配！";

    result.innerHTML = "name: " + name + "</br>" + "phone: " + mob;
  } else {
    if (!fileinput.files.length) alert("请选择文件！");
  }
};

fileinput.onchange = () => {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    text = reader.result;
    filecontent.innerHTML = "";
    let node = document.createElement("h3");
    node.innerHTML = fileinput.files[0].name;
    filecontent.appendChild(node);
    const textnode = document.createTextNode(text);
    filecontent.appendChild(textnode);
  });
  reader.addEventListener("error", () => {
    alert("读取文件错误！");
  });
  reader.readAsText(fileinput.files[0]);
};

searchbtn.addEventListener("click", handleSearch);
