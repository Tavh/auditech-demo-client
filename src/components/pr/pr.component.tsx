import React from 'react';
import Commit from '../../models/commit.model';
import { CommitComp } from '../commit/commit.component';
import './pr.styles.css'

type PRProps = {
    title: string;
    githubId: string;
    url: string;
    number: string;
    action: string;
    commits: Commit[];
}

export const PR = ({ title, githubId, url, number, action, commits }: PRProps) => {
    return (
        <div className='pr'>
            <h2>{title}</h2>
            <h2>{githubId}</h2>
            <h2>{url}</h2>
            <h2>{number}</h2>
            <h2>{action}</h2>
            {commits.map(({ id, message }) => <CommitComp key={id}  message={message}/>)}
        </div>
    )
}