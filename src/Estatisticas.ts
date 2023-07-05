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
    constructor(transacoes: Transacao[]) {
        this.transacoes = transacoes;
        this.total = this.setTotal();
        this.pagamento = this.setPagamentos()
        this.status = this.setStatus()
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

}