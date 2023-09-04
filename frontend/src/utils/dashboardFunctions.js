// ****** Funções útils genéricas que podem ser utilizadas para gerar os dados dos gráficos *******


// Função resposável por gerar uma lista por itens(pode ser produtos, categorias etc) onde cada item terá o seu valor total de quanto dele foi vendido até o momento, levando em consideração o mês e ano;
// A função recebe como parâmetros a lista de itens que terão seus valores totalizados, o dataFrame e o período selecionado;
// Irá retornar um map com o nome do item(produto, categoria) e o seu valor total vendido até o momento;
export const getListaValoresVendaPorItem = (listaItens, dataFrame, infosDasboard, mesSelecionado, anoSelecionado) => {

    let datas = dataFrame[infosDasboard.data].values;
    let valoresVendidos = dataFrame[infosDasboard.valor].values;
    // let produtos = dataFrame[dashboardStore.produto].values;

    const mapItens = new Map();

    listaItens.forEach((item, index) => {

        if(new Date(datas[index]).getMonth() === (mesSelecionado - 1) && new Date(datas[index]).getFullYear() === anoSelecionado) {
            
            if(mapItens.has(item)) {
                
                mapItens.set(item, mapItens.get(item) + valoresVendidos[index]);
            } else {
                mapItens.set(item, 0);
                mapItens.set(item, mapItens.get(item) + valoresVendidos[index]);
            }
        }
    })
    return mapItens;
}


// Gera(calcula) o valor total no mês atingido até o momento
export const geraValorTotalMesByMesAno = (dataFrame, infosDasboard, mesSelecionado, anoSelecionado) => {

    // Esse valor vai mudar dependendo do que for selecionado no listItens 
    let somaTotalMes = 0;

    console.log("mesSelecionado " + mesSelecionado);

    let datas = dataFrame[infosDasboard.data].values;
    let valoresVendidos = dataFrame[infosDasboard.valor].values;

    // const valuesPerMonth = new Array(12).fill(0);

    if(mesSelecionado !== null) {

        console.log("que porr é essa? " + mesSelecionado);

        datas.forEach((data, index) => {
            
            const date = new Date(data);

            if(date.getMonth() === mesSelecionado && date.getFullYear() === anoSelecionado) {

                // console.log(date.getMonth() + " / " + date.getFullYear() + " index: " + index);

                somaTotalMes = somaTotalMes + valoresVendidos[index];
            }
        });
        return somaTotalMes;

    } else {
        const dataCorrente = new Date();

        console.log("dataCorrente " + dataCorrente);

        datas.forEach((data, index) => {

            const date = new Date(data);

            if(date.getMonth() === dataCorrente.getMonth()) {
                // console.log(date.getMonth() + " / " + date.getFullYear());
                somaTotalMes = somaTotalMes + valoresVendidos[index];
            }
        });
        return somaTotalMes;   
    }
}


// Função que retorna uma lista ordenada do mais vendido para o menos vendido;
export const getListaMaisVendidos = (listaItens) => {
    const itensValoresDesc = listaItens.sort((a, b) => b - a);

    console.log("itensValoresDesc");
    console.log(itensValoresDesc);

    return itensValoresDesc;
}

// Função que retorna uma lista ordenada do menos vendido para o mais vendido;
export const getListaMenosVendidos = (listaItens) => {
    const itensValoresAsc = listaItens.sort((a, b) => a - b);

    console.log("itensValoresAsc");
    console.log(itensValoresAsc);

    return itensValoresAsc;
} 


// Função utilizada para descobrir o valor de uma porcentagem em relação ao total, basta utilizar a seguinte fórmula: % = (parte ÷ todo) x 100. 
// Por exemplo, para descobrir o equivalente em porcentagem de 40 em relação a 50.
// Pode ser usado para calcular o valor em porcentagem do valor atingido até o momento em relação a meta. 
export const calculaValorPorcentagemByTotal = (valor, total) => {
    return Math.floor(valor/total * 100);
}

//Gerar valor dos itens mais vendidos em porcentagem