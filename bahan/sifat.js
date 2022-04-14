// navbarnya
window.onscroll=function(){
    const awal=document.querySelector('header');
    const yakin= awal.offsetTop
    if (window.pageYOffset>yakin){
      awal.classList.add('beku');
    }else
    {
      awal.classList.remove('beku');
    }
  }
// pilihan
const navnya=document.querySelector('#Menuku');
const a=document.querySelector("#pilihan");
a.addEventListener('click',function(){
a.classList.toggle('nyala')
navnya.classList.toggle('hidden')
})