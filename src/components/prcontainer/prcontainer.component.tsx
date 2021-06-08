import React, { Component } from 'react'
import PullRequest from '../../models/pull-request.model'
import { PR } from '../pr/pr.component';

import './prcontainer.styles.css'

type PRContainerState = {
    pullRequests: PullRequest[];
}

export default class PRContainer extends Component<{}, PRContainerState> {
    constructor(props: any) {
        super(props, [])

        this.state = ({
            pullRequests: []
        });
    }

    componentDidMount() {
        fetch('http://localhost:5000/auditech-demo/pull-request/all')
        .then(response => response.json())
        .then(prs => this.setState({ pullRequests: prs }))
        .catch(() => console.log('An error occurred!'));
    }

    render() {
        return (
            <div className='pr-container'>
                {this.state.pullRequests.map(({ id, ...otherPrData }) => <PR key={id}  {...otherPrData}/>)}
            </div>
        );
    }
}
