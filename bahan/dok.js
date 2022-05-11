// dok
as=document.getElementById('Cari');
const data=document.forms['masukan'];
  //run when kon is clicked
data.addEventListener('submit',function(e){
  e.preventDefault();
  if(as.value==''){
    alert('Masukan Nama Fitur Yang Ingin Di Cari');
  }else{
    window.location.href="#"+as.value.toLowerCase();
    window.location.reload();
  }
});
// nanti
var asem=window.location.href;
const semua=document.querySelector('#Semua');
const awal=document.querySelector('#awal');
const a1=document.querySelector('#a1');
const a2=document.querySelector('#a2');

if (asem=="http://127.0.0.1:3000/dok.html#semua"){
semua.classList.toggle('hidden')
}else if (asem=="http://127.0.0.1:3000/dok.html#awal"){
semua.classList.toggle('hidden')
}else if (asem=="http://127.0.0.1:3000/dok.html#login"){
semua.classList.toggle('hidden')
a2.classList.toggle('hidden')
}else if (asem=="http://127.0.0.1:3000/dok.html#daftar"){
semua.classList.toggle('hidden')
a1.classList.toggle('hidden')
}