import React, { Component } from 'react'

export default class estoque extends Component {

    render(){
        return(
            <div className="container" style={{paddingTop:'30px'}} >
            <div className="container text-white bg-warning mb-3">
              <h2 className="text-center">Estoque</h2>
              </div>
              <hr></hr>
              <div className="container">
                <form>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label for="inputNome4">Nome do Produto</label>
                            <input type="name" className="form-control" id="inputNome4" placeholder="Nome do Produto" />
                        </div>
                        <div className="form-group col-md-6">
                            <label for="inputTelefone4">Categoria</label>
                            <input type="Telefone" className="form-control" id="inputTelefone4" placeholder="Categoria" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label for="inputAddress">Fornecedor</label>
                        <input type="text" className="form-control" id="inputAddress" placeholder="Nome" />
                    </div>
                    <div className="form-group">
                        <label for="inputAddress2">Complemento</label>
                        <input type="text" className="form-control" id="inputAddress2" placeholder="Endereço." />
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label for="inputCity">Quantidade</label>
                            <input type="text" className="form-control" id="inputCity" />
                        </div>
                        <div className="form-group col-md-4">
                            <label for="inputState">Entrada</label>
                            <select id="inputState" className="form-control">
                                <option selected>Entrada...</option>
                                <option>...</option>
                            </select>
                        </div>
                        <div className="form-group col-md-2">
                            <label for="inputZip">Tipo</label>
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