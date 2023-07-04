/**
 * 
 * Recebe string '1.200,50' retorna number 1200.50
 */

export default function moedaParaNumero(moeda: string): number | null {
    const numero = Number(moeda.replaceAll('.', '').replaceAll(',', '.'))
    return isNaN(numero) ? null : numero

}