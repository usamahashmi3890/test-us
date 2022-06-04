const $ = document.querySelector.bind(document);

let Value = 0;
let dec = 0;
let Result = 0;
let quantity = 0;
let QUANTITY = 0;
let plus = () => {
    try {
        let quanty = parseInt(document.querySelector(".prez").dataset.value);
        Value += quanty;
        console.log(Value,quanty);
        let showamount = $(".prez");
        showamount.placeholder = `${Value}`;
        let nmbrinc = parseInt($(".qty").dataset.value);
        quantity += nmbrinc;
        let shownmbr = $(".qty");
        shownmbr.placeholder = `${quantity}`
        console.log(quantity,nmbrinc);
        // Function getQuantity(){
        //     if(quantity === 0){
        //         return
        //     }
        //     quantity--
        // }
        QUANTITY = quantity;
    } catch (error) {
        console.log(error.message);
    }
}
let minus = () =>{
    try {
        if (QUANTITY===0) {
            alert('quantity can not be zero');
            return ;
        }
        let miquanty = parseInt(document.querySelector(".prez").dataset.value);
        console.log(miquanty);
        Value -= miquanty;
        let minamount = $(".prez");
        minamount.placeholder = `${Value}`;
        let nmbrdec = parseInt($(".qty").dataset.value);
        QUANTITY -= nmbrdec;
        let hidenmbr = $(".qty");
        hidenmbr.placeholder = `${QUANTITY}`
        console.log(hidenmbr,nmbrdec)

    } catch (error) {
        
    }
}

let userobject={

}
// submit  
let SUB = () => {
    try {
        let EmptyArray = [];
        let Name1 =$(".firstname").value;
        let Name2 =$(".secondname").value;
        let email =$(".EMAIL").value;
        let mblmr =$(".NUMBER").value;
        let PREZ =$(".prez").value;
        let quan=$(".quan").value;
        let address =$(".address").value;

        userobject.firstname = Name1;
        userobject.secondname = Name2;
        userobject.EMAIL = email;
        userobject.NUMBER = mblmr;
        userobject.prez = PREZ;
        userobject.quan = quan;
        userobject.address = address;


        
        
        let GetData = JSON.parse(localStorage.getItem('user-object'));
        // console.log(GetData);
        if (GetData === null) {
            EmptyArray.push(userobject);
            console.log(userobject);
            localStorage.setItem('user-object',JSON.stringify(EmptyArray));
        } else {
            console.log(GetData);
            EmptyArray.push(userobject);
            let DATA = GetData.forEach((Object) => {
                EmptyArray.push(DATA);
                
            });
            localStorage.setItem('user-object',JSON.stringify(EmptyArray));
        }
        // array.forEach(element => {
            
        // });
       
    } catch (error) { 
        console.log(error.message);
    }
    // alert('Thankyou,our team will contact you')
    
}
let Getitem = JSON.parse(localStorage.getItem('user-object'));
console.log(Getitem);
// let RESULT = $('.RESULT');
// RESULT.innerHTML=`
// Name1:${Getitem.firstname}<br>
// Name2:${Getitem.secondname}<br>
// email:${Getitem.EMAIL}<br>
// mblmr:${Getitem.NUMBER}<br>
// PREZ:${Getitem.PREZ}<br>
// quan:${Getitem.quan}<br>
// address:${Getitem.address}
// `