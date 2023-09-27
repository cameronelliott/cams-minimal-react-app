import React from 'react';
import ReactDOM from 'react-dom';

new EventSource('/esbuild').addEventListener('change', () => location.reload())

function App() {
    return <div>Hello, your cool World!</div>;
}

ReactDOM.render(<App />, document.getElementById('root'));
