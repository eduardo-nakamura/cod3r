import React, { Component } from 'react'
import Main from '../template/Main'

import axios from 'axios'

const headerProps = {
    icon: 'users',
    title: 'Usuários',
    desc: 'Cadastro de usuários: Incluir, Listar, Alterar e Excluir'
}

const baseUrl = 'http://localhost:3001/users'
const initialState = {
    user: { name: '', email: '' },
    list: []
}
export default class UserCrud extends Component {
    state = { ...initialState }

    componentWillMount() {
        axios(baseUrl).then(resp => {
            this.setState({ list: resp.data })
        })
    }

    clear() {
        this.setState({ user: initialState.user })
    }

    save() {
        const user = this.state.user
        const method = user.id ? 'put' : 'post'
        const url = user.id ? `${baseUrl}/${user.id}` : baseUrl
        axios[method](url, user)
            .then(resp => {
                const list = this.getUpdatedList(resp.data)
                this.setState({ user: initialState.user, list })
            })
    }

    getUpdatedList(user) {
        const list = this.state.list.filter(u => u.id !== user.id);
        list.unshift(user)
        return list
    }

    updateField(event) {
        const user = { ...this.state.user }
        user[event.target.name] = event.target.value
        this.setState({ user })
    }

    renderForm() {
        return (
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label htmlFor="">Nome</label>
                            <input
                                type="text"
                                className='form-control'
                                name='name'
                                value={this.state.user.name}
                                onChange={e => this.updateField(e)}
                                placeholder='Digite o Nome' />
                        </div>
                    </div>
                    <div className='col-12 col-md-6'>
                        <div className="form-group">
                            <label htmlFor="">E-Mail</label>
                            <input
                                type="text"
                                className='form-control'
                                name='email'
                                value={this.state.user.email}
                                onChange={e => this.updateField(e)}
                                placeholder='Digite o e-mail' />
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-12 d-flex justify-content-end">
                        <button className="btn btn-primary " onClick={e => this.save(e)}>Salvar</button>
                        <button className="btn btn-secondary ms-2" onClick={e => this.clear(e)}>Cancelar</button>
                    </div>

                </div>
            </div>
        )
    }

    renderTable() {
        return (
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        )
    }

    renderRows() {
        return this.state.list.map(user => {
            return (
                <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                        <button onClick={() => this.load(user)} className="btn btn-warning">
                            <i className="fa fa-pencil"></i>
                        </button>
                        <button onClick={() => this.remove(user)} className="btn btn-danger ms-2">
                            <i className="fa fa-trash"></i>
                        </button>
                    </td>
                </tr>
            )
        })
    }

    load(user) {
        this.setState({ user })
    }

    remove(user) {
        axios.delete(`${baseUrl}/${user.id}`).then(resp => {
            const list = this.state.list.filter(u => u !== user)
            this.setState({ list })
        })
    }

    render() {

        return (
            <Main {...headerProps}>
                {this.renderForm()}
                {this.renderTable()}
            </Main>
        )
    }
}
