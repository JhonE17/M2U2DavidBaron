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
            for(let element of array1){
                if(numberToCheck > element){
                    if(numberToCheck > max){
                        max = numberToCheck;
                    }
                }
            }    
        });
    }

    function minNumChecker(){
        array1.forEach(numberToCheck => {
            for(let element of array1){
                if(numberToCheck < element){
                    if(numberToCheck < min){
                        min = numberToCheck;
                    }
                }
            }    
        });
    }

    let A,B,C,D;
    A = document.getElementById("form--valor1").value;
    B = document.getElementById("form--valor2").value;
    C = document.getElementById("form--valor3").value;
    D = document.getElementById("form--valor4").value;
    let array1 = [A,B,C,D];
    let max = array1[0];
    let min = array1[0];

    equalNumChecker();
    maxNumChecker();
    minNumChecker();
    
    
    

    alert(`El número mayor es ${max} y el número menor es ${min}`)
})