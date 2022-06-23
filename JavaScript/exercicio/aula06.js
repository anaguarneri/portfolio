const idade = 25;

switch (idade) {
    case 5:
    case 6:
    case 7:
        console.log("Infantil A");
        break;
    case 8:
    case 9:
    case 10:
    case 11:
        console.log("Infantil B");
        break;
    case 12:
    case 13:
        console.log("Juvenil A");
        break;
    case 14:
    case 15:
    case 16:
    case 17:
        console.log("Juvenil B");
        break;
    case 18:
        console.log(" Adulto");
        break;
    default:
        console.log(" Você ainda não tem idade para competir!");
        break;
}