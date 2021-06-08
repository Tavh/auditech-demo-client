import React from 'react';
import './commit.styles.css'
type CommitProps = {
    message: string;
}

export const CommitComp = ({ message }: CommitProps) => {
    return (
        <div className='commit'>
            <h2>Commit message: {message}</h2>
        </div>
    )
}