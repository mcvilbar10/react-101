import React from 'react' ;

class Square extends React.Component{
    constructor(props)
    {
        super(props)
        this.state ={
            backgroundColor:"gray",
            enabled:true,
        }
    }
    render(){
        return(
            <div className={"square "+ this.props.className + " " + this.state.backgroundColor} data-index={this.props.index}></div>
        )
    }
}
export default Square