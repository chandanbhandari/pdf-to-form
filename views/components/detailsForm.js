import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'

class DetailForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            details : props.details
        }
    }

    render() {
        return (
            <Form>
                <Form.Field>
                    <label>First Name</label>
                    <input placeholder='first name' type="text"
                           value = {this.state.details["first_name"]}
                           onChange={(event) =>this.props.handleInputChange("first_name",event.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input placeholder='last name' type="text"
                           value = {this.state.details["last_name"]}
                           onChange={(event) =>this.props.handleInputChange("last_name",event.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Eye Colour</label>
                    <input placeholder='eye colour' type="text"
                           value = {this.state.details["eye_colour"]}
                           onChange={(event) =>this.props.handleInputChange("eye_colour",event.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Hair Colour</label>
                    <input placeholder='hair colour' type="text"
                           value = {this.state.details["hair_colour"]}
                           onChange={(event) =>this.props.handleInputChange("hair_colour",event.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Height</label>
                    <input placeholder='height' type="text"
                           value = {this.state.details["height"]}
                           onChange={(event) =>this.props.handleInputChange("height",event.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Weight</label>
                    <input placeholder='weight' type="text"
                           value = {this.state.details["weight"]}
                           onChange={(event) =>this.props.handleInputChange("weight",event.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Application Id</label>
                    <input placeholder='Application Id' type="text"
                           value = {this.state.details["application_id"]}
                           onChange={(event) =>this.props.handleInputChange("application_id",event.target.value)}/>
                </Form.Field>
            </Form>
        )
    }
    
};

export default DetailForm