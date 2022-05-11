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
