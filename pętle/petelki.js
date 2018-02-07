/*

//wyświetl liczby od 50 do 5, oddzielone przecinkiem i spacją.

/*for(var i = 50; a=> 5; i--){
    if(a==5)
        document.write(a);
    else
    document.write(a + " , ")

}

document.write("<br>");*/

// wypisz liczby od 10 do 100, zwiększ każdą z nich o 5 w wyświetleniu pomiń wartości 30, 55 oraz 75

/*for(var i = 10; i<= 100; b = b+5){
    if(i !=30 && k !=55 && k !=75)
    document.write(i + " ");

}
document.write("<br>");*/

//zad.3 użytkownik z klawiatury w formularzu podaje jakie liczby mają być wyświetlone, to znaczy wartość początkową i końcową. Wartości mają być rosnące i zwiększone o 1.

/*var elPoczatek = document.getElementById("poczatek");
var elKoniec = document.getElementById("koniec");
var elP = document.getElementById("p");
var elK = document.getElementById("k");
var m;
function wyswietl(){
    for (m = elPoczatek.value; m <= elKoniec.value; m++){
        document.write(m + " ");
        elK.innerHTML = m + " ";
    }

}
elP.addEventListener("click", wyswietl);


//*********************




for (var n = 10; n >= 5; n--){
    document.write(n + " ");
        if(n==7)
                break;
}
document.write("<br>");
//continue
for(var o = 14; o < 20; o++){
    if(o == 15 || o == 18)
        continue
    document.write( o  + " ");
}*/
//**********************
/*wyświetl na ekranie:
*
**
***
****
******/

        for (var p = 1; p <=5 p++){
            for (var r = 1; r <= p; r++){
                document.write("*");
            }
            document.write("<br>");

        }
