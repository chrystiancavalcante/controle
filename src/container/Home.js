import React, { Component } from 'react'
import HomeCard from '../Ui/HomeCard'
import HomeCard2 from '../Ui/HomeCard2'
import {hashHistory} from 'react-router'

export default class Home extends Component {
    homeCardReleeses = {
        title: 'Vendas',
        text: 'Total do Caixa',
        action: () => hashHistory.push('/vendas')
    }
    homeCardBacklog = {
        title: 'Estoque',
        text: 'Total no Estoque',
        action: () => hashHistory.push('/estoque')
    }
    homeCardSpring = {
        title: 'Pedidos',
        text: 'Total de Pedidos',
        action: () => hashHistory.push('/pedidos')
    }
    homeCard2Faturas = {
        title:'Relatorio'
    }

    render() {

        return (
            <div className="container">
                <div className="container text-center">
                    <div className="row">
                        < HomeCard title={this.homeCardReleeses.title}
                            text={this.homeCardReleeses.text}
                            action={this.homeCardReleeses.action} />
                        < HomeCard {...this.homeCardBacklog} />
                        < HomeCard {...this.homeCardSpring} />
                        < HomeCard2 {...this.homeCard2Faturas}/>
                           
                    </div>
                </div>
            </div>
                  
           
        )
    }
} 
