import React, { Component } from 'react'
import { toastr } from 'react-redux-toastr'

import ContentHeader from '../../theme/contentHeader'
import Content from '../../theme/content'

export default class Index extends Component {

    componentDidMount() {
        toastr.success('Dashboard', 'Seja bem vindo.')
    }

    render() {
        return (
            <div>
                <ContentHeader title="Dashboard" small="Versão 1.0" />
                <Content>
                    Dashboard
                </Content>
            </div>
        )
    }
}