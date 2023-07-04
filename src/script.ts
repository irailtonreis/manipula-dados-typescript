import fetchData from "./fetchData.js";
type TransacaoPagamento = "Boleto" | "Cartão de Crédito"
type TransacaoStatus =  "Paga" | "Recusada pela operadora de cartão" | "Aguardando pagamento"| "Estornada";
interface TransacaoAPI{
    Nome: string;
    ID: number;
    Data: string;
    Status: TransacaoStatus;
    Email: string;
    ["Valor (R$)"]: string;
    ["Cliente Novo"]: number;
    ["Forma de Pagamento"]: TransacaoPagamento;
}

async function handleData(){
    const data = await fetchData<TransacaoAPI[]>("https://api.origamid.dev/json/transacoess.json")
    console.log(data)

    if(data){
        data.forEach((item)  => {
            console.log(item["Cliente Novo"])
        });
    }
}

handleData()