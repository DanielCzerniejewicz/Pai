function sprawdzian()
{
    let imie = prompt("Podaj imie","");
    let wiek = +prompt("Podaj wiek","");
    if(!isNaN(wiek))
    {
        switch(prompt("Podaj a,b albo c"))
        {
            case("a"):
                let x = +prompt("Podaj X");
                let y = +prompt("Podaj y");
                let zmienna = Math.pow(x,y);
                alert(zmienna);
                break;
            case("b"):
                let liczba = +prompt("Podaj liczbę : ");
                if(liczba % 2 == 0)
                {
                    alert("Parzysta");
                }
                else{
                    alert("Nie parzysta")
                }
                break;
            case("c"):
                let zmienna2 = 18 - wiek;
                alert("Witaj "+imie+ " do pełnoletności brakuje Ci " + zmienna2 + "lata");
                break;
            default:
                alert("Wprowadziłeś coś innego musisz wybrac miedzy a,b,c")
        }
    }
    else{
        alert("W wieku raczej nie ma liter")
    }
}