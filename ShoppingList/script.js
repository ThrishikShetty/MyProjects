const form = document.getElementById('shipping-form');
const itemname = document.getElementById('item-name');
const itemweight = document.getElementById('item-weight');
const boxcolor = document.getElementById('box-color');
const shippingcountry = document.getElementById('shipping-country');

form.addEventListener('submit',function(e){
    e.preventDefault();
    

   const iname= itemname.value;
   const iw= itemweight.value;
   const bc= boxcolor.value;
   const sc= shippingcountry.value;
      

   localStorage.setItem('item-name',iname);
   localStorage.setItem('item-weight',iw);
   localStorage.setItem('box-color',bc);
   localStorage.setItem('shippingcountry',sc);

   

})



    




