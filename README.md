# M2U2DavidBarón
Este repositorio contiene los dos ejercicios propuestos en la Actividad número 2 del módulo 2 en el diplomado de ReactJS.

**_La carpeta Actividad 2 ejercicio 1 consta de 3 archivos_** 
  - index.html
    - Consta de la estructura básica, contiene los formularios
  - index.js
    - Consta de la lógica del programa, trae los valores de los formularios y los procesa
  - styles.css
    - Consta de los estilos de la página, una presentación de tarjeta con sombra simple y sencilla

**_La carpeta Actividad 2 ejercicio 2 consta de 3 archivos_** 
  - index.html
    - Consta de la estructura básica, contiene los formularios
  - index.js
    - Consta de la lógica del programa, trae los valores de los formularios y usa arrays para procesar las condicionales
  - styles.css
    - Consta de los estilos de la página, una presentación de tarjeta con sombra simple y sencilla
  - **Pregunta para el profesor**
    - En las siguientes líneas: <br>
    ![image](https://user-images.githubusercontent.com/103337874/175799603-86d2ff93-d358-49d6-a841-50072a608f3f.png)<br>
     Si quitamos el parseInt en las líneas _**34**_, _**36**_, _**38**_ y _**41**_, y usamos los valores indicados en la línea _**32**_ (A,B,C,D respectivamente), la  lógica de los condicionales en la función de la línea 43 se rompe.
     Si depuramos con las DevTools veremos que cuando se encuentra _parseInt_ en el push al array el valor del mismo array es el siguiente <br> 
     ![image](https://user-images.githubusercontent.com/103337874/175799700-9861f27b-f810-420d-9fc5-5996d15a79c5.png)
     <br>
     Pero si al contrario, quitamos el parseInt de los push, el valor será este <br>
     ![image](https://user-images.githubusercontent.com/103337874/175799765-4b9097d7-b590-4bfd-b917-be579fdb4ca3.png)
     <br>
     <br>
     Así que mi pregunta es, ¿Por qué si no se usa el parseInt la lógica de ">" falla?

