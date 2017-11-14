import React, { Component } from 'react'

import ContentHeader from '../../theme/contentHeader'
import Content from '../../theme/content'

export default class Index extends Component {

    render() {
        return (
            <div>
                <ContentHeader title="Teste" small="Versão 1.0" />
                <Content>
                    Teste
                </Content>
            </div>
        )
    }
}