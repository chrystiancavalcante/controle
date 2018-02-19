import React, { Component } from 'react'

export default class vendas extends Component {

    render() {
        return (
            <div className="container" style={{paddingTop:'30px'}} >
                <form>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label for="inputNome4">Nome</label>
                            <input type="name" className="form-control" id="inputNome4" placeholder="Nome" />
                        </div>
                        <div className="form-group col-md-6">
                            <label for="inputTelefone4">Telefone</label>
                            <input type="Telefone" className="form-control" id="inputTelefone4" placeholder="Telefone" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label for="inputAddress">Endereço</label>
                        <input type="text" className="form-control" id="inputAddress" placeholder="Av. 56" />
                    </div>
                    <div className="form-group">
                        <label for="inputAddress2">Endereço 2</label>
                        <input type="text" className="form-control" id="inputAddress2" placeholder="Apartamento, studio, etc." />
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label for="inputCity">Cidade</label>
                            <input type="text" className="form-control" id="inputCity" />
                        </div>
                        <div className="form-group col-md-4">
                            <label for="inputState">Estado</label>
                            <select id="inputState" className="form-control">
                                <option selected>Estado...</option>
                                <option>...</option>
                            </select>
                        </div>
                        <div className="form-group col-md-2">
                            <label for="inputZip">Cep</label>
                            <input type="text" className="form-control" id="inputZip" />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="gridCheck" />
                            <label className="form-check-label" for="gridCheck">
                                Gravar-me
                            </label>
                        </div>
                    </div>
                    <button type="submit" className="form-control btn btn-primary">Salvar</button>
                </form>
            </div>
        )
    }
}