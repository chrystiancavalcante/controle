import React from 'react'

const HomeCard2 = (props) => {

    return (

        <div className="col-12 col-sm-12 " style={{ paddingTop: '30px' }}>
            <div className="card">
                <div className="card-header">
                    <h2>Relátório</h2>
                </div>
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Data</th>
                            <th scope="col">Vendas</th>
                            <th scope="col">Estoque</th>
                            <th scope="col">Pedidos</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">01/02/2018</th>
                            <td>R$ 2.000,30</td>
                            <td>189</td>
                            <td>26</td>
                        </tr>
                        <tr>
                            <th scope="row">01/01/2018</th>
                            <td>R$ 1.235,90</td>
                            <td>195</td>
                            <td>28</td>
                        </tr>
                        <tr>
                            <th scope="row">01/12/2017</th>
                            <td>R$ 3.990,00</td>
                            <td>400</td>
                            <td>45</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default HomeCard2