import React,{ Component } from 'react'
import { ChromePicker } from 'react-color'
import { Input } from 'antd'
export default class ColorPicker extends Component {
    state = {
        displayColorPicker: false
    }

    handleClick = () => {
        this.setState({ 
            displayColorPicker: !this.state.displayColorPicker 
        })
    }

    handleClose = () => {
        this.setState({ 
            displayColorPicker: false 
        })
    }

    colorPickerChange = (color,event)=>{
        this.props.onChange(color)
    }

    render() {
        const popover = {
            position: 'absolute',
            zIndex: '2',
        }
        const cover = {
            position: 'fixed',
            top: '0px',
            right: '0px',
            bottom: '0px',
            left: '0px'
        }
        return (
            <div style={{...this.props.style}}>
                <div className="color-picker-input">
                    <i 
                        onClick={ this.handleClick }
                        style={{background:this.props.value}}
                    ></i>
                    <Input 
                        type="text" 
                        value={this.props.value}
                        disabled={true}
                    />
                </div>
                { 
                    this.state.displayColorPicker?
                    <div style={ popover }>
                        <div style={ cover } onClick={ this.handleClose }></div>
                        <ChromePicker
                            color={ this.props.value }
                            onChangeComplete={ this.colorPickerChange }
                        />
                    </div> 
                    : null 
                }
            </div>
        )
    }
}

