import React from 'react';



class Tooltip extends React.Component{
    class=()=>{
        
        return `${this.props.position}`;
    }

    render(){
        return (
            <div className={`${this.class()}`}>
                Thanks for hovering! I'm a tooltip
            </div>
        )
    }
}


export default Tooltip;