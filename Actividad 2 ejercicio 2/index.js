let boton = document.getElementById("form--button");
boton.addEventListener('click', () => {
    let maxNumFunc = () => {
        array1.forEach(numero => {
            for(let element of array1){
                if(numero > element){
                    if(maxNum == undefined){
                        maxNum = numero
                    }

                    else{
                        if(numero < maxNum){
                            maxNum = numero;
                        }
                    }
                }
    
                else if(element > numero){
                    if(maxNum == undefined){
                        maxNum = element
                    }
                }
                
                    else{
                        if(element > maxNum){
                            maxNum = element;
                        }
                    }
            }
        })
    }

    let minNumFunc = () => {
        array1.forEach(numero => {
            for(let element of array1){
                if(element > numero){
                    if(minNum == undefined){
                        minNum = numero
                    }
                    
                    else{
                        if(minNum > numero){
                            minNum = numero;
                        }
                    }
                }
    
                else if(numero > element){
                    if(minNum == undefined){
                        minNum = element
                    }
                    
                    else{
                        if(element < minNum){
                            minNum = element;
                        }
                    }
                
                }
            }
        })

    }


    let A,B,C,D;
    let minNum; 
    let maxNum;
    A = document.getElementById("form--valor1").value;
    B = document.getElementById("form--valor2").value;
    C = document.getElementById("form--valor3").value;
    D = document.getElementById("form--valor4").value;
    let array1 = [A,B,C,D];

    array1.forEach((elem, index) => {
        for(let element of array1){
            index++
            if(element == array1[index]){
                alert("Hay valores iguales");
                break
            }
        }    
    });
    
    minNumFunc();
    maxNumFunc();

    alert(`El número mayor es ${maxNum} y el número menor es ${minNum}`)
})