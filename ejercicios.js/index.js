class ejercicios{
    sumar_numeros(){
        console.log(`--------------------------------------------------------------------------------------------------------------`)
        console.log("<< Ejercicio 1 >>")
        console.log("// 1) Sumar dos numeros siempre cuando el primero sea mayor al segundo")
        //El sistema ingresa un valor aleatorio y esalmacenada en la variable (num1 y num2)
        let num1=Math.floor(Math.random()*10) 
        let num2=Math.floor(Math.random()*10)
        let suma=0
        //Si el valor de num1 es mayor al valor de num2, entonces la variable (suma) almacena la suma de las dos variables y la presenta.
        //Si el valor de num1 es menor al valor de num2, presenta un mensaje de (num1 es menor a num2)
        if (num1 > num2) {
            suma=num1+num2
            console.log(`La suma de ${num1} y ${num2} es ${suma}`)
        } else {
            console.log(`${num1} es menor a ${num2}`)
        }
    }
    //--------------------------------------------------------------------------------------------------------------
    operaciones(){
        console.log(`--------------------------------------------------------------------------------------------------------------`)
        console.log("<< Ejercicio 2 >>")
        console.log("// 2) Realizar una operacion segun el operador(+,-,*,/,%) realizar la suma, resta, multiplicacion, division y reciduo")
        //Las variables (num1 y num2) almacenan un valor, los cuales se presentarán a corde a un proceso matemático.
        let num1=20
        let num2=2
        let suma=0,resta=0,multiplicacion=0,division=0,residuo=0
        //La variable suma, almacena la suma de la variable num1 y num2
        suma=num1+num2              
        //La variable resta, almacena la resta de la variable num1 y num2
        resta=num1-num2             
        //La variable multiplicación, almacena la multiplicación de la variable num1 y num2
        multiplicacion=num1*num2    
        //La variable división, almacena la division de la variable num1 y num2
        division=num1/num2          
        //La variable residuo, almacena el residuo de la variable num1 y num2
        residuo=num1%num2           
        console.log(`${num1} + ${num2} es ${suma}`)
        console.log(`${num1} - ${num2} es ${resta}`)
        console.log(`${num1} * ${num2} es ${multiplicacion}`)
        console.log(`${num1} / ${num2} es ${division}`)
        console.log(`${num1} % ${num2} es ${residuo}`)
    }
    //--------------------------------------------------------------------------------------------------------------
    mayor_dos_numeros(){
        console.log(`--------------------------------------------------------------------------------------------------------------`)
        console.log("<< Ejercicio 3 >>")
        console.log("// 3) Presentar el mayor de dos numeros")
        //El codigo ingresa valores al azar y las almacena en las variables (num1 y num2)
        let num1=Math.floor(Math.random()*10)
        let num2=Math.floor(Math.random()*10)
        //Se aplica la condicion if para saber que numero es el mayor y lo presenta
        if (num1<num2) {
            console.log(`${num2} es mayor que ${num1}`)
        } else {
            console.log(`${num1} es mayor que ${num2}`)
        }
    }
    //--------------------------------------------------------------------------------------------------------------
    presentar_nombre(){
        console.log(`--------------------------------------------------------------------------------------------------------------`)
        console.log("<< Ejercicio 4 >>")
        console.log("// 4) Dado un nombre presentarlo")
        //la variable (palabra) almacena un nombre, en este caso (Steven)
        let palabra=["Steven"]
        console.log(palabra)
        //Se imprime la palabra almacenada en la variable (palabra)
        console.log(`El nombre dado es: ${palabra}`)
    }
    //--------------------------------------------------------------------------------------------------------------
    compra_IVA(){
        console.log(`--------------------------------------------------------------------------------------------------------------`)
        console.log("<< Ejercicio 5 >>")
        console.log("// 5) Dado un valor de compra presentar el total considerando un 12% de iva)")
        //El sistema ingresa valores randoms y los almacena en las variables (num1 y num2)
        let num1=Math.floor(Math.random()*100)
        let iva=0.12
        let total=0
        let totalfinal=0
        //La variable total almacena la multiplicacion entre la variable (num1*0.12) y la presenta
        total=(num1*0.12)
        totalfinal=total+num1
        console.log(`El valor del producto considerando el IVA es de $${totalfinal}`)
    }
    //--------------------------------------------------------------------------------------------------------------
    repetir_nombre(){
        console.log(`--------------------------------------------------------------------------------------------------------------`)
        console.log("<< Ejercicio 6 >>")
        console.log("// 6) Presentar 5 veces un nombre")
        //La variable text almacena (Steven)
        let text = " Steven ";
        //La variable result, guarda ls clase (text.repeat)=la cual repite diversos valores
        let result = text.repeat(5);
        console.log(result)
    }
    //--------------------------------------------------------------------------------------------------------------
    multiplos_3(){
        console.log(`--------------------------------------------------------------------------------------------------------------`)
        console.log("<< Ejercicio 7 >>")
        console.log("// 7) Presentar los numeros multiplos de 3 del 3 al 21")
        let num=0
        //El condicional for, recorrerá valores del 3 al 21 sumando 3 posiciones hasta el 21 y presenta esos valores
        for(num=3;num<=21;num=num+3){
            console.log(`${num} es multiplo de 3`)
        }
    }
    //--------------------------------------------------------------------------------------------------------------
    multiplos_3_alreves(){
        console.log(`--------------------------------------------------------------------------------------------------------------`)
        console.log("<< Ejercicio 8 >>")
        console.log("// 8) Presentar los numeros multiplos de 3 del 21 al 3")
        let num=0
        //El condicional for, recorrerá valores del 21 al 3 restando 3 posiciones hasta el 21 y presenta esos valores
        for(num=21;num>=3;num=num-3){
            console.log(`${num} es multiplo de 3`)
        }
    }
    //--------------------------------------------------------------------------------------------------------------
    nombres_iguales(){
        console.log(`--------------------------------------------------------------------------------------------------------------`)
        console.log("<< Ejercicio 9 >>")
        console.log("// 9) Dados dos nombres indicar si son iguales o diferentes")
        //Las variables (nombre1 y nombre2) almacenan nombres escritos en mayusculas y ninusculas
        let nombre1="Alex"
        let nombre2="alex"
        //Las variables (ninuscula1 y ninuscula2) almacenan los valores transformados a minusculas de ambas variables
        //La clase toLowerCase() permite pasar palabras de mayusculas a minusculas.
        let ninuscula1 = nombre1.toLowerCase()
        let ninuscula2 = nombre2.toLowerCase()
        //Se comparan si ambos nombres ingresados son iguales o no, y se los imprime
        if (ninuscula1 = ninuscula2) {
            console.log(`El nombre ${nombre1} es igual a el nombre ${nombre2}`)
        } else {
            console.log(`El nombre ${nombre1} y el nombre ${nombre2} no son iguales`)
        }
    }
    //--------------------------------------------------------------------------------------------------------------
    menos_5_caracteres(){
        console.log(`--------------------------------------------------------------------------------------------------------------`)
        console.log("<< Ejercicio 10 >>")
        console.log("// 10) Dado diez numeros en un arreglo presentar los que tengan menos de 5 caracteres")
        let numeros=["1000","120","333333","40002","500000","623433","71000000","5676","12345","99999"]
        let c=0
        let suma=1
        let longitud = numeros.length //Se saca la longitud de cada elemento del arreglo
        console.log(numeros)
        while (c<longitud) {
            //La condicion if recorre cada valor del arreglo y lo compara para ver y tiene menos de 5 caracteres y lo imprime
            if (numeros[c] <= 9999 ) {
                console.log(`${numeros[c]} es un numero con menos de 5 caracteres`)
            } else {
                //Caso contrario seguirá recorriendo los valores del arreglo
                suma = suma+numeros[c]
            }
            c=c+1
        }
    }
    //--------------------------------------------------------------------------------------------------------------
    presentar_elementos_arreglo(){
        console.log(`--------------------------------------------------------------------------------------------------------------`)
        console.log("<< Ejercicio 11 >>")
        console.log("// 11) Dado un arreglo presentar sus elementos")
        console.log("Los digitos del arreglo son:")
        //La variable valor almacena los elementos del arreglo
        let valor=[2,4,6,8,10]
        let c=0
        let longitud=valor.length //Sacamos la longitud de los valores
        console.log(valor)
        while (c<longitud) {
            //Se recorre el arreglo de inicio a fin y se presentan los valores
            console.log(`${valor[c]}`)
            c=c+1
        }
    }
    //--------------------------------------------------------------------------------------------------------------
    numeros_menores_10(){
        console.log(`--------------------------------------------------------------------------------------------------------------`)
        console.log("<< Ejercicio 12 >>")
        console.log("// 12) Dado un arreglo de numeros presentar los menores a 10")
        //La variable numeros almacena los valores del arreglo
        let numeros=[10,12,3,42,5,6,7,68,9,10]
        let c=0
        let suma=1
        let longitud = numeros.length //Se saca la longitud del arreglo
        console.log(numeros)
        while (c<longitud) {
            //Se recorre el arreglo de inicio a fin si se presentan los valores menores a 10
            if (numeros[c] < 10 ) {
                console.log(`${numeros[c]} es menor a 10`)
            } else {
                //Caso contrario  segrirá con el siguiente valor y lo evaluará de la misma forma
                suma = suma+numeros[c]
            }
            c=c+1
        }
    }
    //--------------------------------------------------------------------------------------------------------------
    presentar_impares_suma_pares(){
        console.log(`--------------------------------------------------------------------------------------------------------------`)
        console.log("<< Ejercicio 13 >>")
        console.log("// 13) Dado un arreglo de numeros presentar los impares y al final la suma de los pares")
        //La variable numeros almacena los valores 
        let numeros=[1,2,3,4,5,6,7,8,9,10]
        let c=0
        let suma=0
        let longitud = numeros.length //Se saca la longitud de los valores del arreglo
        console.log(numeros)
        //Se recorre el arreglo y se evalúa si el primer valor del arreglo es distinto de 0, se lo imprime como impar
        while(c < longitud){
            if (numeros[c] % 2 != 0){
                console.log(`${numeros[c]} es impar`)
            }else{
                //Caso contrario segirá con el siguiente valor del arreglo, y lo evalúa igualmente
                suma = suma+numeros[c]
            }
            c=c+1
        }
        console.log(`La suma de los pares = ${suma}`)
    }
    //--------------------------------------------------------------------------------------------------------------
    primero_medio_ultimo_arreglo(){
        console.log(`--------------------------------------------------------------------------------------------------------------`)
        console.log("<< Ejercicio 14 >>")
        console.log("// 14) Presentar el primero el medio y el ultimo valor de un arreglo")
        //La variable arreglo almacena los datos que seevaluarán
        let arreglo=[1,2,3,4,5,6,7,8]
        let longitud = arreglo.length //Se saca la longitud del arreglo
        //Se recorre el arreglo e imprime solo el primer valor
        console.log(arreglo)
        console.log("El primer valor del arreglo es:", arreglo[0])
        //Se recorre el arreglo e imprime solo el valor del arreglo que se encuentra en la mitad
        console.log("El valor del medio del arreglo es:", arreglo[longitud/2])
        //Se recorre el arreglo e imprime solo el último valor
        console.log("El último valor del arreglo es:", arreglo[longitud-1])
    }
    vuelto_compra(){
        console.log(`--------------------------------------------------------------------------------------------------------------`)
        console.log("<< Ejercicio 15 >>")
        console.log("// 15) Calcular el vuelto de una compra dado el costo y el pago")
        let costo=35
        let pago=50
        let vuelto=0
        //La variable vuelto almacena el resultado de la resta de la variable (pago-costo), y lo presenta
        //costo=35 - pago=50 = vuelto=15
        vuelto=(pago-costo)
        console.log(`El vuelto a dar es de $${vuelto}`)
    }
    tablas_multiplicar(){
        console.log(`--------------------------------------------------------------------------------------------------------------`)
        console.log("<< Ejercicio 16 >>")
        console.log("// 16) Presentar la tabla de multiplicar de cualquier numero del 1 al 12")
        //El algoritmo almacena en la variable num1 un valor aleatorio
        let num1 =Math.floor(Math.random()*10)
        let c=0
        let ac=0
        //Se evalúa la condicion while si el contador es menor a 12 e imprime
        while (c<12) {
            ac=ac+num1
            c=c+1
            console.log(`${num1} x ${c} = ${ac}`)
        }
    }
    multiplicacion_a_travez_de_sumas(){
        console.log(`--------------------------------------------------------------------------------------------------------------`)
        console.log("<< Ejercicio 17 >>")
        console.log("// 17) Multiplicación a travez de sumas")
        //Se generan dos valores random y se almacenan en (num1 y num2) respectivamente
        let num1=Math.floor(Math.random()*10)
        let num2=Math.floor(Math.random()*10)
        let c=0
        let ac=0
        //Se evalúa la condicion while si contador(c) en menor a num2 hará lo siguiente...
        //ac=0 + 7 = 7          ac=7 + 7 = 14           ac=14 + 7 = 21          ac=21 + 7 = 28
        // c=0 + 1 = 1           c=1 + 1 = 2              c=2 + 1 = 3             c=3 + 1 = 4
        while (c<num2) {
            ac=ac+num1
            console.log(`${num1} + ${ac-num1} = ${ac}`)
            // 1             7    +     7-7=0   =   7
            // 2             7    +    14-7=7   =   14
            // 3             7    +   21-7=14   =   21
            // 4             7    +   28-7=21   =   28
            c=c+1
        }
        console.log(`La multiplicacion de ${num1} x ${num2} es ${ac}`)
    }
    divicion_a_travez_de_restas(){
        console.log(`--------------------------------------------------------------------------------------------------------------`)
        console.log("<< Ejercicio 18 >>")
        console.log("// 18) División a travez de restas")
        let num1= 10
        let num2= 2
        let c=0
        let rest=num1
        //Se evalúa la condicion de la condision...
        while (rest-num2>=0) {
            //rest=10-2=8           rest=8-2=6
            //    c=0+1=1              c=1+1=2
            rest=rest-num2
            console.log(`${rest+num2} - ${num2} = ${rest}`)
            //              8+2=10    -     2   =   8
            //              6+2=8     -     2   =   6
            c=c+1
        }
        console.log(`La division entre ${num1} / ${num2} es ${c}`)
    }
    calculado_factorial(){
        console.log(`--------------------------------------------------------------------------------------------------------------`)
        console.log("<< Ejercicio 19 >>")
        console.log("// 19)Calcular el factorial de un numero")
        //Se almacena un valor aleatorio generado por el sistema y se lo almacena en la variable (num)
        let num=Math.floor(Math.random()*10)
        let c=1
        let ac=1
        //Se evalúa la condicion de If
        if (num<0) {
            //Si el numero generado es menor a 0, se muestra un mensaje
            console.log(`El número no se puede calcular`)
            //Si el numero generado es igual a 0 o 1, se muestra un mensaje mostrando su factorial
        } if (num==0 || num==1) {
            console.log(`El factorial de ${num} es 1`)
        } else{
            //Si el numero generado es mayor a 0 y 1, entonces...num=4
            //ac = 1 * 1 = 1        ac = 1 * 2 = 2          ac = 2 * 3 = 6          ac = 6 * 4 = (24) -> resultado
            // c = 1 + 1 = 2         c = 2 + 1 = 3           c = 3 + 1 = 4           c = 4 + 1 = 5  -> 5 es menor igual no, fin del proceso.
            while (c<=num) {
                ac=ac*c
                c=c+1
            }
            //El factorial de 4 es 24
            console.log(`El factorial de ${num} es ${ac}`)
        }
    }
    exponente_de_numero(){
        console.log(`--------------------------------------------------------------------------------------------------------------`)
        console.log("<< Ejercicio 20 >>")
        console.log("// 20)Calcular el exponente de un numero")
        //Se almacena un valor aleatorio generado por el sistema y se lo almacena en las variables (nunbase y numexpo)
        let numbase=Math.floor(Math.random()*10) //7
        let numexpo=Math.floor(Math.random()*10) //3
        let c=1
        let ac=1
        //Se evalúa la condición de while...si la condición se cumple entonces...
        // ac= 1 * 7 = 7        ac= 7 * 7 = 21           ac= 21 * 7 = 147     -> 147 es la respuesta
        //  c= 1 + 1 = 2         c= 2 + 1 = 3             c=  3 + 1 = 4       -> 4 es menor igual que 3, no (termina la condicion)
        while (c<=numexpo) {
            ac=ac*numbase
            c=c+1
        }
        // 7 elevado a 3 es igual a 147
        console.log(`El resultado de ${numbase} elevado a ${numexpo} es igual a ${ac}`)
    }
    serie_fibonacci(){
        console.log(`--------------------------------------------------------------------------------------------------------------`)
        console.log("<< Ejercicio 21 >>")
        console.log("// 21)Calcular la serie de fibonacci dado un numero")
        let num=8
        let cont=3
        let a=0,b=1,c=1
        console.log(a)
        console.log(b)
        console.log(c)
        //Se evalúa la condicion del while, mientras el (cont) sea menor a (num), hacemos...
        //a=1               a=1                 a=2                 a=3                 a=5             
        //b=1               b=2                 b=3                 b=5                 b=8       
        //c=1+1=2           c=2+1=3             c=2+3=5             c=3+5=8             c=5+8=13     -> respuesta

        //cont=3+1=4        cont=4+1=5          cont=5+1=6          cont=6+1=7          cont=7+1=8   -> fin del ciclo
        while (cont<num) {
            a=b
            b=c
            c=a+b
            console.log(c)
            cont=cont+1
        }
    }
    numero_invertido(){
        console.log(`--------------------------------------------------------------------------------------------------------------`)
        console.log("<< Ejercicio 22 >>")
        console.log("22) Dado un numero invertirlo")
        let num1=123
        console.log(`El numero a invertir es: ${num1}`)
        let residuo
        //Se evalúa la condicion
        //residuo= 123|10      residuo= 12|10           residuo=    1 |10
        //          23 12               (2) 1                      (1) 0
        //           (3)
        //
         //num1=   123 |10       num1=  12|10              num1=  1 |10
        //          23 (12)              2 (1)                    1  (0)
        //           3
        while(num1>0){
            residuo=num1%10
            console.log(residuo)
            num1=Math.floor(num1/10)
        }
    }
    divisores_numero(){
        console.log(`--------------------------------------------------------------------------------------------------------------`)
        console.log("<< Ejercicio 23 >>")
        console.log("23) Presentar los divisores de un numero")
        //Se genra un valor aleatorio y se lo guarda en la variable (num1)
        let num1=Math.floor(Math.random()*10)
        let c=1
        console.log(`Los divisores del numero ${num1} son:`)
        //Se evalúa la condicion de while, mientras contador(c) sea menor a num1, hacemos...
        //8 % 1 = 0                                 8 % 2 = 0
        //   8 | 1                                      8 | 2
        //  (0)  8                                     (0)  4
        //c=1+1=(2)->respuesta                       c=2+1=(3)->respuesta  .....
        while(c<num1){
            if(num1%c===0){
                console.log(`${c} es divisor de ${num1}`)
            }
            c=c+1
        }
    }
    
    numero_perfecto(){
        console.log(`--------------------------------------------------------------------------------------------------------------`)
        console.log("<< Ejercicio 24 >>")
        console.log("24) Presentar si un numero es perfecto o no (Perfecto:cuando la suma de los divisores incluidos el 1 y excluido el propio numero dada igual al numero)")
        let num1=6,c=1,d=0
        console.log(`El nuemero ${num1} es:`)
        //Se evalúa la condicion de while, mientras contador(c) sea menor a num1(6)
        while(c<num1){
            //6 % 1 = 0
            //   6 | 1                 6 | 2                6 | 3                             6 | 4
            //  (0)  6                (0)  3               (0)  2                            (2)  1
            //d=0+1=1                d=1+2=3              d=3+3=(6)-> resultado             d=3+1=4
            //c=1+1=(2)            c=2+1=(3)            c=3+1=(4)                           c=4+1=(5) -> termina el ciclo
            if(num1%c==0){
                d=d+c
            }
            c=c+1
        }
        if(d==num1){
            console.log(`Perfecto`)
        }else{
            console.log(`No es Perfecto`)
        }
    }
    numero_primo(){
        console.log(`--------------------------------------------------------------------------------------------------------------`)
        console.log("<< Ejercicio 25 >>")
        console.log("25) Verfificar si un numero es primo o no (Primo cuando solo es divsivible para 1 y el propio numero, es decir no tenga divisores)") 
        let num1=2,c=1,d=0
        //Se evalúa la condicion de if, si num1(2) sea menor igual a (1)  , se presenta un mensaje
        if(num1<=1){
            console.log(`El numero ${num1} no tiene numero primo`)
        }else{
            //Caso contrario se evalúa la condicion de while, mientras contador(c) sea menor a num1(2), se hace...
            while(c<num1){
                //2 % 1 = 0         2 % 2 = 0         
                //   2 | 1              2 | 2            
                //  (0)  2             (0)  1            
                // d=0+1=(1)         d=1+1=(2)           
                // c=1+1=2            c=2+1=3           
                if(num1%c==0){
                    d=d+1
                }
                c=c+1
            }
            if(d<=2){
                console.log(`El numero ${num1} es primo `)
            }else{
                console.log(`El numero ${num1} no es primo`)
            }
        }
    }
    
    
}
// instanciar una variable que contiene todos los métodos de la clase
let ejercicio = new ejercicios()
ejercicio.sumar_numeros()
ejercicio.operaciones()
ejercicio.mayor_dos_numeros()
ejercicio.presentar_nombre()
ejercicio.compra_IVA()
ejercicio.repetir_nombre()
ejercicio.multiplos_3()
ejercicio.multiplos_3_alreves()
ejercicio.nombres_iguales()
ejercicio.menos_5_caracteres()
ejercicio.presentar_elementos_arreglo()
ejercicio.numeros_menores_10()
ejercicio.presentar_impares_suma_pares()
ejercicio.primero_medio_ultimo_arreglo()
ejercicio.vuelto_compra()
ejercicio.tablas_multiplicar()
ejercicio.multiplicacion_a_travez_de_sumas()
ejercicio.divicion_a_travez_de_restas()
ejercicio.calculado_factorial()
ejercicio.exponente_de_numero()
ejercicio.serie_fibonacci()
ejercicio.numero_invertido()
ejercicio.divisores_numero()
ejercicio.numero_perfecto()
ejercicio.numero_primo()