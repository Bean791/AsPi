const satu=document.querySelector('#satu');
const dua=document.querySelector('#dua');
const demo=document.querySelector('#demo');
const rdv1=document.querySelector('#rdv1');
const srf1=document.querySelector('#srf1');
const balik=document.querySelector('#balik');
satu.addEventListener('click',function(){
  rdv1.classList.toggle('hidden')
  demo.classList.toggle('hidden')
  balik.classList.toggle('hidden')
})
dua.addEventListener('click',function(){
  srf1.classList.toggle('hidden')
  demo.classList.toggle('hidden')
  balik.classList.toggle('hidden')
})