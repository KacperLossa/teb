var imie;
imie="Kacper";
var nazwisko= "Lossa";
document.write ("Imię: " +imie + "<br>");
document.write ("Nazwisko:" +nazwisko + "<br>");
//+ konkatenacja połączenie dwóch stringów
var wiek = 18;

if(wiek>=18){
    document.write("Jesteś pełnoletni<br>");
} else if(wiek<10){

    document.write("Jesteś dzieciakiem<br>");

} else if(wiek<18){
    document.write("Nie jesteś pełnoletni<br>");

}

var x, y;
x = 10;
y = 5;

var suma = x + y;
var roznica = x - y;
var dzielenie;
dzielenie = x / y;
var mnozenie = x * y;
var modulo = x % y;
console.log(modulo);
