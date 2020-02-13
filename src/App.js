import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import Auth from './components/Auth/Auth'
import TestIndex from './components/TestCase/TestIndex'

function App() {
  const [sessionToken, setSessionToken] = useState('')

  useEffect(() => {
    if(localStorage.getItem('token')){
      setSessionToken(localStorage.getItem('token'))
    }
  },[])

  const clearToken = () => {
    localStorage.clear()
    setSessionToken('')
  }

  const updateToken = (newToken) => {
    localStorage.setItem('token', newToken)
    setSessionToken(newToken)
  }

  const protectedViews = () => {
    return(localStorage.getItem('token')=== sessionToken ? <TestIndex token={sessionToken} clickLogout={clearToken}/> : <Auth updateToken={updateToken} />)
  }
  return (
    <div className="App">
      {protectedViews()}
    </div>
  );
}

export default App;
