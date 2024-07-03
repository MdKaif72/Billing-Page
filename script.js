
function getDisplay(){
    var name=document.getElementById('name').value;
    var total=getTotalAmount();
    // var total=0;
    if(total==0){
        document.getElementById('result').innerHTML=`${name} , Please select atleast one item `;
    }
    else{
    document.getElementById('result').innerHTML=`${name} , Please pay Rs.${total}`;
    }
    return false;
}
function getTotalAmount(){
    var sum=0;
    if(document.getElementById('flour').value){
        
        sum+=(document.getElementById('flour').value)*40;
    }
    if(document.getElementById('pulses').value){
        sum+=(document.getElementById('pulses').value)*36;
    }
    if(document.getElementById('maida').value){
        sum+=(document.getElementById('maida').value)*34;
    }
    if(document.getElementById('mOil').value){
        sum+=(document.getElementById('mOil').value)*136;
    }
    if(document.getElementById('rOil').value){
        sum+=(document.getElementById('rOil').value)*120;
    }
    if(document.getElementById('turmeric').value){
        sum+=(document.getElementById('turmeric').value)*30/100;
    }
    if(document.getElementById('cumin').value){
        sum+=(document.getElementById('cumin').value)*80/100;
    }
    if(document.getElementById('coriander').value){
        sum+=(document.getElementById('coriander').value)*36/100;
    }
    if(document.getElementById('peper').value){
        sum+=(document.getElementById('peper').value)*120/100;
    }
    if(document.getElementById('sugar').value){
        sum+=(document.getElementById('sugar').value)*48;
    }
    if(document.getElementById('tea').value){
        sum+=(document.getElementById('tea').value)*32/100;
    }
    return sum;

}