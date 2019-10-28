import React, {Component} from 'react'

class Avatar extends Component {
    constructor(props) {
        super(props)
    }
    checkimage() {
        return this.props.image ? true : false;
    }
    render() {
        return(
            <div>
                <img src={!this.checkimage() ? this.props.image : 'https://www.drupal.org/files/issues/default-avatar.png'
                } />
                <h1 style={{
                   color: this.props.star ? 'red' : 'blue'
                }}><span>{this.props.firstName}</span><span>{this.props.lastName}</span></h1>
            </div>
        )
    }
}

export default Avatar;
