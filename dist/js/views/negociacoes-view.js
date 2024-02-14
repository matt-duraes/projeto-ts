import { View } from "./view.js";
export class NegociacoesView extends View {
    template(model) {
        return `
            <table class="table table-hhhover table-bordered":
                <thead>
                    <tr> 
                        <th> Data </th>
                        <th> Quantidade </th>
                        <th> Valor </th>
                    </tr>
                </thead>
                <tbody>
                    ${model.lista().map(negociacao => {
            return `
                            <tr>
                                <td>${new Intl.DateTimeFormat().format(negociacao.BuscarData)}</td>
                                <td>${negociacao.BuscarQuantidade}</td>
                                <td>${negociacao.BuscarValor}</td>
                            </tr>
                        `;
        }).join('')}
                </tbody>
            </table>
        `;
    }
}
