let boton = document.getElementById("form--button");
boton.addEventListener('click', () => {

    let minMax = (num) => {
        if(num < minNum){
            minNum = num;
        }
    
        else if(num > maxNum)
        {
            maxNum = num; 
        }
    }

    let A,B,C,D;
    let maxNum,minNum;
    A = document.getElementById("form--valor1").value;
    maxNum = A;
    minNum = A;

    B = document.getElementById("form--valor2").value;
    minMax(B)
    
    

    C = document.getElementById("form--valor3").value;
    minMax(C)
   
    D = document.getElementById("form--valor4").value;
    minMax(D)

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
    
    

    alert(`El número mayor es ${maxNum} y el número menor es ${minNum}`)
})