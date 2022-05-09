// navbarnya
window.onscroll=function(){
    const awal=document.querySelector('.navig');
    const yakin= awal.offsetTop
    if (window.pageYOffset>yakin){
      awal.classList.add('beku');
    }else
    {
      awal.classList.remove('beku');
    }
  }

// kedua
const wadah=document.querySelector('html');
const pen=document.querySelector('#tam');
const bu=document.querySelector('#mata');
const men=document.querySelector('#Mood')
pen.addEventListener('click', function(){
men.classList.toggle('hidden')
bu.classList.toggle('hidden')
wadah.classList.toggle('dark')
})

// pilihan
const navnya=document.querySelector('#Menuku');
const a=document.querySelector("#pilihan");
a.addEventListener('click',function(){
a.classList.toggle('nyala')
navnya.classList.toggle('hidden')
})

// desain tampilan
const destam=document.querySelector('#desain_tampilan');
const tamdes=document.querySelector('#destam');
destam.addEventListener('click',function(){
tamdes.classList.toggle('hidden')
})

// Event 1
const event1=document.querySelector('#event1');
const ev1=document.querySelector('#ev1');
event1.addEventListener('click',function(){
ev1.classList.toggle('hidden')
})

// proposal
const pro=document.querySelector('#pro');
const pro1=document.querySelector('#pro1');
pro.addEventListener('click',function(){
pro1.classList.toggle('hidden')
})

// doc
const doc=document.querySelector('#doc');
const doc1=document.querySelector('#doc1');
doc.addEventListener('click',function(){
doc1.classList.toggle('hidden')
})

// fitur
const ftr=document.querySelector('#ftr');
const ftr1=document.querySelector('#ftr1');
ftr.addEventListener('click',function(){
ftr1.classList.toggle('hidden')
})

// web
const web=document.querySelector('#web');
const web1=document.querySelector('#web1');
web.addEventListener('click',function(){
web1.classList.toggle('hidden')
})


// nanti
var tes=window.location.href;
if (tes=="http://127.0.0.1:3000/Kontri.html#aldwin"){
  const aldwin=document.querySelector('#aldwin');
  aldwin.classList.toggle('hidden')
}if (tes=="http://127.0.0.1:3000/Kontri.html#alex"){
  const alex=document.querySelector('#alex');
  alex.classList.toggle('hidden')
}if (tes=="http://127.0.0.1:3000/Kontri.html#ethelind"){
  const ethelind=document.querySelector('#ethelind');
  ethelind.classList.toggle('hidden')
}if (tes=="http://127.0.0.1:3000/Kontri.html#rdavid"){
  const rdavid=document.querySelector('#rdavid');
  rdavid.classList.toggle('hidden')
}if (tes=="http://127.0.0.1:3000/Kontri.html#robin"){
  const robin=document.querySelector('#robin');
  robin.classList.toggle('hidden')
}if(tes=="http://127.0.0.1:3000/Kontri.html#serafina"){
  const serafina=document.querySelector('#serafina');
  serafina.classList.toggle('hidden')
}
