import React from 'react';
import JoinForm from './JoinForm'


const Join = () => {


    return (

        <div className="join-container">
            <header className="join-header">
                <h1><i className="fas fa-smile"></i> Chat</h1>
            </header>
            <main className="join-main">

                <JoinForm />

            </main>
        </div>

    );
}

export default Join;