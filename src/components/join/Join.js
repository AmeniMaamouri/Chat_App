import React from 'react';
import JoinForm from './JoinForm'

const Join = () => {
    return (

        <div class="join-container">
            <header class="join-header">
                <h1><i class="fas fa-smile"></i> ChatCord</h1>
            </header>
            <main class="join-main">

                <JoinForm />

            </main>
        </div>

    );
}

export default Join;