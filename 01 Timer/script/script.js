const d = document.querySelector("#days")
const h = document.querySelector("#hours")
const m = document.querySelector("#minutes")
const s = document.querySelector("#seconds")

const updateTime=()=>{
const currentDate = new Date();
const currentYear = new Date().getFullYear();
const newYear = new Date(`${currentYear +1} 00:00:00`)
const diff = newYear-currentDate
const days=Math.floor(diff/1000/60/60/24)
const hours = Math.floor((diff/1000/60/60)%24)
const minutes = Math.floor((diff/1000/60)%60)
const seconds = Math.floor((diff/1000)%60)

d.innerHTML=days<10?"0"+days:days;
h.innerHTML=hours<10?"0"+hours:hours;
m.innerHTML=minutes<10?"0"+minutes:minutes;
s.innerHTML=seconds<10?"0"+seconds:seconds;
}
setInterval(updateTime);