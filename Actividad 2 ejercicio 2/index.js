let boton = document.getElementById("form--button");
boton.addEventListener('click', () => {
    function equalNumChecker(){
        array1.forEach((elem, index) => {
            for(let element of array1){
                index++
                if(element == array1[index]){
                    alert("Hay valores iguales");
                    break
                }
            }    
        });
    }

    function maxNumChecker(){
        array1.forEach(numberToCheck => {
            if(numberToCheck > max){
                max = numberToCheck;
            }  
        });
    }

    function minNumChecker(){
        array1.forEach(numberToCheck => {
            if(numberToCheck < min){
                min = numberToCheck;
            }     
        });
    }

    let a,b,c,d;
    let array1 = [] // 2,234,3,43
    a = document.querySelector("#form--valor1").value;
    array1.push(parseInt(a)) 
    b = document.querySelector("#form--valor2").value;
    array1.push(parseInt(b))
    c = document.querySelector("#form--valor3").value;
    array1.push(parseInt(c))
    d = document.querySelector("#form--valor4").value;
    // console.log(d)
    array1.push(parseInt(d))
    let max = 0;
    maxNumChecker();
    let min = max;

    equalNumChecker();
    minNumChecker();
    
    
    

    alert(`El número mayor es ${max} y el número menor es ${min}`)
})