import * as React from 'react';
import { Spring } from 'react-spring/renderprops';

export interface ModalInputProps {
    details: {
        time: string
    }
}
 
export interface ModalInputState {
   selected: boolean; 
}
 
class ModalInput extends React.Component <ModalInputProps, ModalInputState> {
    state = {  
        selected: false
     }


     

    handleSelect = (e: React.SyntheticEvent) => {
        e.preventDefault()
        this.setState({
            selected: !this.state.selected
        })
    }
    render() {
        const {time} = this.props.details 
        const {selected} = this.state
        return (
            <> 
          {selected ? <Spring
          from={{opacity: 0}}
          to={{opacity: 1}}
          >
              {
                  props=> (
                    <div style={props} className="current-input"><input  className="selected-input" readOnly onClick={this.handleSelect}  value={time} type="text"/> <button>Confirm</button></div>  
                  )
              }
              
              </Spring> :  <div className="current-input">
          <input readOnly onClick={this.handleSelect} value={time} type="text"/>
              </div>}
          </>
         );
    }
}
 
export default ModalInput;