'use strict';

(function(){

    let flowerIdField;
    let nameField;
    let siteField;
    let farmerField;
    let stockField;
    let resultarea;


    document.addEventListener('DOMContentLoaded', init);

    function init(){
        resultarea=document.getElementById('resultarea');
        flowerIdField=document.getElementById('flowerId');
        nameField=document.getElementById('name');
        siteField=document.getElementById('site');
        farmerField=document.getElementById('farmer');
        stockField=document.getElementById('stock');

        document.getElementById('submit').addEventListener('click',send);

        flowerIdField.addEventListener('focus', clear);
    }

    function clear(){
        flowerIdField.value='';
        nameField.value='';
        siteField.value='';
        farmerField.value='';
        stockField.value='';
        resultarea.textContent='';
        resultarea.removeAttribute('class');
    }

    async function send(){
        const flower={
            flowerId: +flowerIdField.value,
            name: nameField.value,
            site: siteField.value,
            farmer: farmerField.value,
            stock: +stockField.value
        };

        try{
            const options={
                method:'POST',
                body:JSON.stringify(flower),
                headers:{'Content-Type':'application/json'}
            };
            const data=await fetch('/addFlower',options);
            const result=await data.json();

            updateStatus(result)
        }
        catch(err){
            updateStatus({message:err.message, type:'error'});
        }
    } //end of send

    function updateStatus(status){
        resultarea.textContent=status.message;
        resultarea.setAttribute('class', status.type);
    }

})();