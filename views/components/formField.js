import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'


class FormField extends React.Component {
    
    render() {
        return (
            <Form.Field>
                <label>{this.props.title}</label>
                <input type="text"
                       value={this.props.value}
                       onChange={(event) => this.props.handleInputChange(this.props.title,
                           event.target.value)}/>
            </Form.Field>
        )
    }
};

export default FormField