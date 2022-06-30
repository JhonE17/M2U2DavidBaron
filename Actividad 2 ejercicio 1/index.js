let valorMaterias = []
let contadorMaterias = 0;
let tablaMaterias = document.querySelector("#table--materias");
let tablaMateriasInnerHtml = tablaMaterias.innerHTML;
let tablaValorTotal = document.querySelector("#table--valor");
const boton = document.querySelector("#form--button");
const botonCalcular = document.querySelector("#button--calcular");

boton.addEventListener('click', () => {
    function nombreDisabler(){
        let nombreEnableDisable = document.getElementById("form--nombre");
        if(nombre != ""){
            nombreEnableDisable.disabled = true;
        }
    }
    
    function añadirMateria(){
        let materiaOut = `$COP ${valorMateria}`
        let template = `
        <tr>
        <td class="table--item">${Materia}</td>
        <td class="table--item">${materiaOut}</td>
        </tr>
        `;
        tablaMaterias.innerHTML += template;
    }

    function MostrarPrecioMaterias(valorTotal, estudiante){        
        let template = `
        <tr>
        <td class="output"> El costo total de las materias del estudiante ${estudiante} es de: ${valorTotal}</td>
        </tr>
        `;
        return tablaValorTotal.innerHTML += template;
    }
    
    function materiasMaximas(){
        if(contadorMaterias < 6){      
            añadirMateria();
        }
        
        else{
            alert("No puedes tener más de 5 materias")
        }
    }
    
    function mostrarValorTotal(){
        const valorPapeleria = 28000;
        let totalMaterias = valorMaterias.reduce((acumulador, numero) => {
            return acumulador + numero;
        }) + valorPapeleria;
        MostrarPrecioMaterias(totalMaterias, nombre) 
        tablaMaterias.innerHTML = tablaMateriasInnerHtml; 
        valorMaterias = [];
        contadorMaterias = 0;
    }
    
    let nombre = document.getElementById("form--nombre").value;
    let Materia = document.getElementById("form--materia").value;
    let valorMateria = document.getElementById("form--valor-materia").value;
    contadorMaterias += 1;
    valorMaterias.push(parseInt(valorMateria));
    
    materiasMaximas();
    nombreDisabler();

    if(contadorMaterias < 2 && contadorMaterias > 0){
        botonCalcular.addEventListener('click', mostrarValorTotal) 
    }
}); 

    
    

