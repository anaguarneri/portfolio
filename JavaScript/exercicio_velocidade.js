/*Crie um algoritmo que calcule a velocidade média de um veículo e retorne o resultado no console.

Dica do sucesso: A velocidade média é calculada dividindo a distancia percorrida pelo tempo gasto.

    obs: suba esse exercício no seu Github e disponibilize o link como resposta da atividade.*/


    const distancia= prompt( "Digite aqui a distância a ser percorrida em quilômetros: ");
    console.log(distancia);

    const tempo= prompt("Digite aqui o tempo em horas gastos para chegar ao destino: ");
    console.log(tempo);

    const velocidade= distancia/tempo;
    console.log( `A velocidade média gasta para chegar neste destino é de ${velocidade} km/h`);




