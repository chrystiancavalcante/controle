import React, { Component } from 'react'
import HomeCard from '../Ui/HomeCard'

export default class Home extends Component {
    homeCardReleeses ={
        title: 'Vendas',
        text:'Total do Caixa',
        action: () => alert('funcionando!')
    }
    homeCardBacklog ={
        title: 'Estoque',
        text:'Total no Estoque',
        action: () => alert('funcionando!')
    }
    homeCardSpring ={
        title: 'Pedidos',
        text:'Total de pedidos',
        action: () => alert('Funcionando')
    }
   
    render() {

        return (
          <div className= "container">
            <div className="container text-center">
                <div className="row">
                    < HomeCard title= {this.homeCardReleeses.title}
                               text= {this.homeCardReleeses.text}
                               action= {this.homeCardReleeses.action} />
                    < HomeCard {...this.homeCardBacklog} />          
                    < HomeCard {...this.homeCardSpring} />          

                </div>
            </div>
        </div>
        )
    }
} 
