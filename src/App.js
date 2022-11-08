import './App.css';
import Footer from './Footer.js';
import Header from './Header.js';
import Square from './Square.js';
import Board from './Board.js'

function App() {
  return (
    <div className="">
        <Header textContent="Logo Here" />
        <Square className="blue" index="1"/>
        <Square className="red" index="2"/>
        <Square className="gray" index="3"/>
        <hr/>
        <Board />
        <Footer textContent="Maricar Vilbar"/>
    </div>
  );
}

export default App;