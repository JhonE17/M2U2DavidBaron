const boton = document.querySelector("#form--button");

boton.addEventListener('click', () => {
    let nombre = document.getElementById("form--nombre").value;
    let cantidadMaterias = document.getElementById("form--materias").value;
    const valorMaterias = 300000;
    const valorPapeleria = 28000;
    let valorTotal;
    if(cantidadMaterias != 0){
        valorTotal = (cantidadMaterias * valorMaterias)*0.80;
        valorTotal += valorPapeleria;
        alert(`El estudiante ${nombre} registró la cantidad de materias de ${cantidadMaterias}, y el valor de estas materias es de ${valorTotal}`)
    }
    
    else{
        alert("No ingresó ninguna materia!s")
    }
    
});




