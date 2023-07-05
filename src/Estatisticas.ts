import CountBy from "./CountBy.js";

type TransacaoValor = Transacao & { valor: number }
function filtrarValor(transacao: Transacao): transacao is TransacaoValor {
    return transacao.valor !== null

}
export default class Estatisticas {
    private transacoes;
    total;
    pagamento;
    status;
    semana;
    melhorDia;
    constructor(transacoes: Transacao[]) {
        this.transacoes = transacoes;
        this.total = this.setTotal();
        this.pagamento = this.setPagamentos()
        this.status = this.setStatus()
        this.semana = this.setSemana()
        this.melhorDia = this.setMelhorDia()
    }
    private setTotal() {
        return this.transacoes.filter(filtrarValor).reduce((acc, item) => {
            return acc + item.valor
        }, 0)
    }
    private setPagamentos() {
        return CountBy(this.transacoes.map(({ pagamento }) => pagamento))

    }
    private setStatus() {
        return CountBy(this.transacoes.map(({ status }) => status))

    }

    private setSemana() {
        const semana = {
            ['Domingo']: 0,
            ['Segunda']: 0,
            ['Terça']: 0,
            ['Quarta']: 0,
            ['Quinta']: 0,
            ['Sexta']: 0,
            ['Sábado']: 0,
        }
        for (let i = 0; i < this.transacoes.length; i++) {
            const day = this.transacoes[i].data.getDay()
            if (day === 0) semana['Domingo'] + 1;
            if (day === 0) semana['Segunda'] + 1;
            if (day === 0) semana['Terça'] + 1;
            if (day === 0) semana['Quarta'] + 1;
            if (day === 0) semana['Quinta'] + 1;
            if (day === 0) semana['Sexta'] + 1;
            if (day === 0) semana['Sábado'] + 1;

        }
        return semana
    }
    private setMelhorDia() {
        return Object.entries(this.semana).sort((a, b) => {
            return b[1] - a[1]
        })[0]
    }

}