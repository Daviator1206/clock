let s = new Date()
let f = s.getSeconds()+5
setInterval(()=>{
  let d = new Date()
  document.getElementById("main").innerHTML = d.getHours()+" : "+d.getMinutes()+" : "+d.getSeconds();
  if(d.getSeconds()==f && d.getMinutes()==s.getMinutes()){
    var audio = new Audio('/METAMORPHOSIS.mp3');
    document.getElementById("num2").innerHTML = "";
    audio.play();
  }
}, 1000)

