import React, {Component} from 'react';


class CheckBox extends Component {

        state = {
            checked: false,
        }

        componentWillReceiveProps(nextProps) {
  
            if(nextProps.filterOff) {
                this.setState({
                    checked: false,
                })
                this.props.handleFilterOff();
            }
        }   
    
        handleCheck = (event) => {
        
            if(!this.state.checked) {
                this.setState({
                    checked: true
                })
            } else {
                this.setState({
                    checked: false
                })
            }
            this.props.handleChange(event);
        }

    render() {

        const { value, fac, handleChange } = this.props;
        const { checked } = this.state;
        return (
            <div className="labelCheckBox">
                <input type="checkbox" value={value} name="subtype" onChange={this.handleCheck} checked={this.state.checked} />
                <span>{fac[0].toUpperCase() + fac.slice(1)}</span>
            </div>
        )
    }
}

export default CheckBox;