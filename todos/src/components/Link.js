import React from 'react'

class Link extends React.Component  {
    // MARK : private
    onClick(event){
        event.preventDefault()
        this.props.onClick();
    }
    // MARK : React.Component override
    constructor(props){
        super(props);
        this.onClick = this.onClick.bind(this);
    }
    render(){
        const { active, children, onClick } = this.props
        if (active) {
            return <span>{children}</span>
        }
        return (<a href="#" onClick={this.onClick}> {children}  </a>)
    }
}

export default Link
