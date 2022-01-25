/**
 * @description Retorna true caso a chuva de meteoros esteja ocorrendo na
 * data recebida por parâmetro. Caso contrário retorna false.
 *
 * @param {Object} chuva
 * @param {Date} data
 */
 export const verificaChuvaOcorrendo= (chuva, data) => {
    const anoAtual = data.getFullYear();

    const dataInicio = new Date(chuva.inicio + '/' + anoAtual);
    const dataFim = new Date(chuva.fim + '/' + anoAtual);

    if ( dataInicio.getMonth() + 1 > dataFim.getMonth() + 1 ) {
        const anoFinal = dataFim.getFullYear();
        dataFim.setFullYear(anoFinal +1);
    }

    return ( data >= dataInicio && data <= dataFim );
}

/**
 * @description Retorna true caso a chuva de meteoros ocorra em até dois meses após a data
 * recebida por parâmetro. Caso contrário retorna false.
 *
 * @param {object} chuva
 * @param {Date} data
 */
export const verificaProximaChuva = (chuva, data) => {
   const anoAtual = data.getFullYear();
   const dataInicio = new Date(chuva.inicio + '/' + anoAtual);
   const dataInicioLimite = new Date(data);

    if ( data.getMonth() > dataInicio.getMonth() ) {
        const anoFinal = dataInicio.getFullYear();
        dataInicio.setFullYear(anoFinal +1);
    }

    dataInicioLimite.setMonth( dataInicioLimite.getMonth() + 2 );

  return ( data < dataInicio && dataInicio < dataInicioLimite );
}

/**
 * @description Inverte o mes e o dia de uma data que não possui ano definido
 *
 * @param {String} mesDia
 */
export const inverteMesAno = (mesDia) => {
    const dataInvertida = mesDia.split('/');

    return dataInvertida[1] + '/' + dataInvertida[0];
}

/**
 * @description Retorna um texto com a intensidade da chuva
 *
 * @param {String} intensidade
 */
export const retornaIntensidade = (intensidade) => {
    let novaIntensidade = '1 (Fraca)';

    if ( intensidade.indexOf('Forte') >= 0 ) {
        novaIntensidade = '3 (Forte)';
    } else if ( intensidade.indexOf('Média') >= 0 ) {
        novaIntensidade = '2 (Média)';
    } else if (  intensidade.indexOf('Irregular') >= 0 ) {
        novaIntensidade = '(Irregular)';
    }

    return novaIntensidade;
}

/**
 * @description Retorna o hemisfério baseado no valor da declinação
 *
 * @param {Number} declinacao
 */
export const retornaHemisferio = (declinacao) => declinacao >= 0 ? 'Norte' : 'Sul';