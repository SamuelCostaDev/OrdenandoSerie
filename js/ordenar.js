const objetos = [
    {
      id: 1,
      ancoraInicio: true,
      ancoraFim: false,
      conectados: [3, 5, 7, 9],
    },
    {
      id: 2,
      ancoraInicio: false,
      ancoraFim: true,
    },
    {
      id: 3,
      ancoraInicio: false,
      ancoraFim: false,
      conectados: [5, 7, 9],
    },
    {
        id: 4,
        ancoraInicio: false,
        ancoraFim: false,
        conectados: [2, 6, 10],
    },
    {
        id: 5,
        ancoraInicio: false,
        ancoraFim: false,
    },
    {
        id: 6,
        ancoraInicio: false,
        ancoraFim: false,
    },
    {
        id: 7,
        ancoraInicio: false,
        ancoraFim: false,
        conectados: [5, 2, 10, 3],
    },
    {
        id: 8,
        ancoraInicio: false,
        ancoraFim: false,
    },
    {
        id: 9,
        ancoraInicio: false,
        ancoraFim: false,
        conectados: [10, 1],
    },
    {
        id: 10,
        ancoraInicio: false,
        ancoraFim: false,
        conectados: [2, 5, 6, 8],
    },
  ];
  
function ordenarSeries(objetos) {

    // Utilizei do metodo 'map' para criar um novo array [serie] apartir do array [objetos]
    const serie = objetos.map((objetos) => {
        return{
            id: objetos.id,
            ancoraInicio: objetos.ancoraInicio,
            ancoraFim: objetos.ancoraFim,
            conectados: objetos.conectados || []
        };
    });

    // Aqui utilizei dois loops [for] para percorrer no array [serie] e verificar se os objetos estão conectados entre si
    for (let i = 0; i < serie.length; i++) {
       for (let j = 0; j < serie.length; j++) {
        if (serie[i].id === serie[j].conectados) {
            serie[i].conectados.push(serie[j].id);
            serie[j].conectados.push(serie[i].id);
        }
       }
    }

    // Foi utilizado o 'sort' para ordenar o array [serie]
    const ordenar = serie.sort((a, b) => {
        if (a.ancoraInicio) {
          return -1;
        } else if (b.ancoraInicio) {
          return 1;
        } else {
            return a.conectados[0] !== undefined ? a.conectados[0] - b.conectados[0] : 0;
        }
    });

    // Retornar o resultado
    return ordenar
}

// Chamei a função "ordenarSeries" com o parametro `objetos` e armazenando o resultado na variável
const ordenados = ordenarSeries(objetos);

// Imprimir o resultado no console
console.log(ordenados);