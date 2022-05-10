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
if (tes=="https://bean791.github.io/AsPi/Kontri.html#aldwin"){
  const aldwin=document.querySelector('#aldwin');
  aldwin.classList.toggle('hidden')
}if (tes=="https://bean791.github.io/AsPi/Kontri.html#alex"){
  const alex=document.querySelector('#alex');
  alex.classList.toggle('hidden')
}if (tes=="https://bean791.github.io/AsPi/Kontri.html#ethelind"){
  const ethelind=document.querySelector('#ethelind');
  ethelind.classList.toggle('hidden')
}if (tes=="https://bean791.github.io/AsPi/Kontri.html#rdavid"){
  const rdavid=document.querySelector('#rdavid');
  rdavid.classList.toggle('hidden')
}if (tes=="https://bean791.github.io/AsPi/Kontri.html#robin"){
  const robin=document.querySelector('#robin');
  robin.classList.toggle('hidden')
}if(tes=="https://bean791.github.io/AsPi/Kontri.html#serafina"){
  const serafina=document.querySelector('#serafina');
  serafina.classList.toggle('hidden')
}



// navigasi aldwin
const nav=document.querySelector('#a1');
const nama1=document.querySelector('#aldwin');
nav.addEventListener('click',function(){
nama1.classList.toggle('hidden');
})
// navigasi alex
const nav1=document.querySelector('#a2');
const nama2=document.querySelector('#alex');
nav1.addEventListener('click',function(){
nama2.classList.toggle('hidden');
})
// navigasi ethelind
const nav2=document.querySelector('#e1');
const nama3=document.querySelector('#ethelind');
nav2.addEventListener('click',function(){
nama3.classList.toggle('hidden');
})
// navigasi rdavid
const nav3=document.querySelector('#r1');
const nama4=document.querySelector('#rdavid');
nav3.addEventListener('click',function(){
nama4.classList.toggle('hidden');
})
// navigasi robin
const nav4=document.querySelector('#r2');
const nama5=document.querySelector('#robin');
nav4.addEventListener('click',function(){
nama5.classList.toggle('hidden');
})
// navigasi serafina
const nav5=document.querySelector('#s1');
const nama6=document.querySelector('#serafina');
nav5.addEventListener('click',function(){
nama6.classList.toggle('hidden');
})
