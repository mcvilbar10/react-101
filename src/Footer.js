import React from 'react';

class Footer extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>Footer here
                <div>{this.props.textContent}</div>
            </div>
        );
    }
}

export default Footer;