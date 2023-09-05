const buttonElement =document.getElementById('btn');
const h2Element = document.getElementById('text');

buttonElement.addEventListener('click',  () => {

   setTimeout(()=> {
      h2Element.textContent = 'ボタンをクリックしました';
   },2000);
   
});
