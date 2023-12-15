'use strict';

(function(){

    document.addEventListener('DOMContentLoaded', init);

    async function init(){
        try{
            const data=await fetch('/all');
            const result = await data.json();

            const resultset=document.getElementById('resultset');

            for(const flower of result){
                const tr=document.createElement('tr');
                tr.appendChild(createCell(flower.flowerId));
                tr.appendChild(createCell(flower.name));
                tr.appendChild(createCell(flower.site));
                tr.appendChild(createCell(flower.farmer));
                tr.appendChild(createCell(flower.stock));
                resultset.appendChild(tr);
            }
        }
        catch(err){
            console.log(err)
        }
    } //end of init

    function createCell(data){
        const td=document.createElement('td');
        td.textContent=data;
        return td;
    }

})();
//client side 