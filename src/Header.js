import React from "react";

class Header extends React.Component{
    constructor(props){
    super(props);
    }
    render(){
        return(
            <div>
                 {this.props.textContent}
            </div>
        )
    }
}

export default Header