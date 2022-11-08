import React  from "react";
import Square from "./Square.js";

class Board extends React.Component{
    constructor(props){
        super(props);
        this.state={
            onOff:"ON",
        }
    }

    toggleOff=()=>{
        this.state({onOff:this.state.onOff == 'OFF' ? 'ON' : 'OFF',})
    }
    createSquare(index){
        return(<Square data-index={index}/>)
    }

    setNewValue=(value)=>{
        this.state({enabled: value,
        textState: value ? 'Hello Kodego' : 'Goodnight Kodego'})
    }

    render(){
        return(
            <div>
                <div>
                    {this.createSquare(1)}
                    {this.createSquare(2)}
                    {this.createSquare(3)}
                </div>
                <div>
                    {this.createSquare(4)}
                    {this.createSquare(5)}
                    {this.createSquare(6)}
                </div>
                <div>
                    {this.createSquare(7)}
                    {this.createSquare(8)}
                    {this.createSquare(9)}
                </div>
                <button onClick={this.toggleOnOff} className='btn btn-primary'>Toggle{this.state.onOff}</button>
                <button onClick={(value)=>this.setNewValue(!this.state.enabled)} className='btn btn-primary'>Set New Value</button>
                <div>{this.state.onOff} {this.state.textState}</div>
            </div>
        );
    }
   
}

export default Board;
