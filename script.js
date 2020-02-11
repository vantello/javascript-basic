function exercici1(){
    //Exercici 1. Mostrar "Hola món per linia de comandes."
    document.getElementById("enunciat").innerHTML = "Exercici 1. Mostrar 'Hola món per linia de comandes.' ";
    console.log("Hola Mundo!");
}

function exercici2(){
    //Exercici 2. Crear un alert que mostri el teu nom.
    document.getElementById("enunciat").innerHTML = "Exercici 2. Crear un alert que mostri el teu nom. <br>";
    document.getElementById("resultat").innerHTML = "¡Em dic Aleix!";
}

function exercici3(){
    //Exercici 3. Crear una variable que contingui el teu nom i una altre que contingui el 
    //cognom
    var nom = "Aleix ";
    var cognom = "Tello";
    document.getElementById("enunciat").innerHTML = "Exercici 3. Crear una variable que contingui el teu nom i una altre que contingui el teu cognom. <br>";
    document.getElementById("resultat").innerHTML = nom + cognom;
}

function exercici4(){
    //Exercici 4. Crea dues variables amb dos números i fes una suma entre ells.
    var num1 = 5;
    var num2 = 6;
    var suma = num1+num2;
    document.getElementById("enunciat").innerHTML = "Exercici 4. Crea dues variables amb dos números i fes una suma entre ells. <br>";
    document.getElementById("resultat").innerHTML = "La suma entre " + num1 + " i " + num2 + " és " + suma;
}

function exercici5(){
    //Exercici 5. Crea una variable notaExamen juntament amb un alert que ens digui si l'examen
    //ha estat aprovat o no juntament amb la nota.
    document.getElementById("enunciat").innerHTML = "Exercici 5. Crea una variable notaExamen juntament amb un alert que ens digui si l'examen ha estat aprovat o no juntament amb la nota. <br>";
    var notaExamen = 5;
    if (notaExamen < 5){
        //alert("Has tret un " + notaExamen + ". L'examen ha estat suspès");
        document.getElementById("resultat").innerHTML = "Has tret un " + notaExamen + ". L'examen ha estat suspès";
    }else{
        // alert("Has aprovat.");
        document.getElementById("resultat").innerHTML = "Has tret un " + notaExamen + ". Has aprovat!";
    }
}

function exercici6(){
    //Exercici 6. Reemplaça la paraula blau per la paraula verd a la següent cadena de text
    //Tinc un cotxe de color blau. Desprès intenta fer-ho remplaçant les o per les u.
    var sentence = "Tinc un cotxe de color blau";
    var substitute = sentence.replace("blau", "verd");
    var subLetter = sentence.replace(/o/gi, "u");
    document.getElementById("enunciat").innerHTML = "Exercici 6.  Reemplaça la paraula blau per la paraula verd a la següent cadena de text: Tinc un cotxe de color blau. <br> Desprès intenta fer-ho remplaçant les o per les u. <br>";
    document.getElementById("resultat").innerHTML = sentence + "<br>";
    document.getElementById("resultat").innerHTML += "Blau per verd: " + substitute + "<br>";
    document.getElementById("resultat").innerHTML += " o per u : " + subLetter + "<br>";
}

function exercici7(){
    //Exercici 7. Donat el següent llistat d'objectes "taula", "cadira", "ordinador", "llibreta",
    //per un bucle que mostri per pantalla cada objecte i la seva posició al llistat.
    document.getElementById("enunciat").innerHTML = "Exercici 7. Donat el següent llistat d'objectes : Taula, cadira, ordinador, llibreta, fes un bucle que mostri per pantalla cada objecte i la seva posició a la llista. <br>";
    var objectes = new Array("taula", "cadira", "ordinador", "llibreta");
    var i = 0;
    document.getElementById("resultat").innerHTML = "";
    //document.getElementById("resultat").innerHTML = "Llistat d'objectes <br>";
    for (i=0;i<objectes.length;i++){
        document.getElementById("resultat").innerHTML += "L'objecte " + objectes[i] + " està a la posició " + (i+1) + ". <br>";
    }
}

function exercici8(){
            //Exercici 8.Crea una funció anomenada calculadora que tingui com a entrada els següents paràmetres:
            //operador, valor1 i valor2. Ha de sumar, restar i multiplicar. El resultat haurà de ser mostrar
            //per pantalla
                
            function calculadora(operador,num1,num2){
                document.getElementById("enunciat").innerHTML = "Exercici 8.Crea una funció anomenada calculadora que tingui com a entrada els següents paràmetres: operador, valor1 i valor2. Ha de sumar, restar i multiplicar. El resultat haurà de ser mostrar per pantalla. <br>"
                document.getElementById("resultat").innerHTML = ""; //Borrar el camp per a que pugui apareixer el resultat nou. 
                var resultat;
                switch(operador){
                    case "x":
                        resultat = num1*num2;
                        document.getElementById("resultat").innerHTML += "El resultat de " + num1 + " x " + num2 + " és " + resultat + "<br>";
                        break;
                    case "+":
                        resultat = num1+num2;
                        document.getElementById("resultat").innerHTML += "El resultat de " + num1 + " + " + num2 + " és " + resultat  + "<br>";
                        break;
                    case "-":
                        resultat = num1-num2;
                        document.getElementById("resultat").innerHTML += "El resultat de " + num1 + " - " + num2 + " és " + resultat;
                        break;
                    default:
                        alert("No has introduït un operador vàlid.");
                }
            }
            calculadora("-",15,5);
}