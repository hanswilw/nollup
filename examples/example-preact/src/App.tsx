import Counter from './Counter';
import { Internal } from './Internal';
import Switch from './Switch';
import './App.css';
//import { h } from 'preact';

let App = () => (
    <div class="App">
        <h1>Hello World</h1>
        <Internal />
        <Counter />
        <Switch />
    </div>
);

export default App;