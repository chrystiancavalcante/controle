import React, { Component } from 'react'

export default class pedidos extends Component {

    render(){
        return(
            <div className="container" style={{paddingTop:'30px'}} >
            <div className="container text-white bg-warning mb-3">
              <h2 className="text-center">Pedidos</h2>
              </div>
              <hr></hr>
              <div className="container">
                <form>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label for="inputNome4">Produto</label>
                            <input type="name" className="form-control" id="inputNome4" placeholder="Nome" />
                        </div>
                        <div className="form-group col-md-6">
                            <label for="inputTelefone4">Qtd</label>
                            <input type="Telefone" className="form-control" id="inputTelefone4" placeholder="Telefone" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label for="inputAddress">Descrição</label>
                        <input type="text" className="form-control" id="inputAddress" placeholder="Av. 56" />
                    </div>
                    <div className="form-group">
                        <label for="inputAddress2">Valor</label>
                        <input type="text" className="form-control" id="inputAddress2" placeholder="Apartamento, studio, etc." />
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label for="inputCity">Cod.</label>
                            <input type="text" className="form-control" id="inputCity" />
                        </div>
                        <div className="form-group col-md-4">
                            <label for="inputState">Estado</label>
                            <select id="inputState" className="form-control">
                                <option selected>Un.</option>
                                <option>...</option>
                            </select>
                        </div>
                        <div className="form-group col-md-2">
                            <label for="inputZip">CFOP</label>
                            <input type="text" className="form-control" id="inputZip" />
                        </div>
                    </div>
                    <div className="form-group">
                    </div>
                    <button type="button" data-toggle="modal" data-target="#myModal" className="form-control btn btn-primary">Salvar</button>
                </form>
              </div>
            </div>
        )
    }
}