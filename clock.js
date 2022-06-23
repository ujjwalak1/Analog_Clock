setInterval(()=>{
   d = new Date();
   htime = d.getHours();
   mtime = d.getMinutes();
   stime = d.getSeconds();
   hrotation = 30*htime + mtime/2;
   mrotation = 6*mtime;
   srotation = 6*stime;


   hour.style.transform = `rotate(${hrotation}deg)`;
   minute.style.transform = `rotate(${mrotation}deg)`;
   second.style.transform = `rotate(${srotation}deg)`;
},1000);

function displayDate() {
    document.getElementById("demo").innerHTML = Date();
  }

  function mOver(obj) {
    obj.innerHTML = "Thank You"
  }
  
  function mOut(obj) {
    obj.innerHTML = "Visit Again.."
  }
