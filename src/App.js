import React from 'react';
import Join from './components/join/Join';
import ChatRoom from './components/chatRoom/ChatRoom';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import ChatContextProvider from './contexts/ChatContext';


function App() {
  return (
    <BrowserRouter>
        <Switch>
          <ChatContextProvider>
          <Route exact path='/' component={Join}/>
          <Route exact path='/chat' component={ChatRoom}/>
          </ChatContextProvider>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
