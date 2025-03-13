import React from 'react'
import ReactDOM from 'react-dom/client'

const App = () => {
    return <div>Meu primeiro componente ReactJS</div>
}

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />);