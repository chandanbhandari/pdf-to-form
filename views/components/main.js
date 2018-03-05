import React from 'react';
import FormField from './formField'
import {createPdf, uploadPdf} from "../service/service";
import { Button, Form } from 'semantic-ui-react'
import UploadMyFile from './uploadMyFile'
import PDF from "react-pdfjs";


class Main extends React.Component {

    constructor (props) {
        super(props)
        this.state = {
            fields : [],
            details : {},
            pdfData :""
        }
    }

    handleInputChange(key,value){
        var detail = this.state.details
        detail[key]=value
        this.setState({details:detail})
    }

    render() {
        return (
            <div>
                <UploadMyFile uploadFile = {this.uploadFile.bind(this)}/>
                
                <Form>
                    {this.state.fields.map( title =>
                        <FormField title = {title}
                                   value = {this.state.details[title]}
                               handleInputChange = {this.handleInputChange.bind(this)}/>)}
                </Form>

                <Button onClick={() => this.submitData()}>Submit</Button>

                <PDF content = {this.state.pdfData} />

            </div>
        );
    }

    submitData() {
        createPdf(this.state.details).then(response => this.openInNewTab(response))
    }

    openInNewTab(data) {

        console.log(data["data"])
        // this.setState({pdfData:data["data"]})

        // this.showFile(data["data"].blob())
``

        // var win = window.open(url, '_blank');
        // win.focus();
    }

    uploadFile(file,name){
        const data = new FormData();
        data.append('file', file);
        uploadPdf(data).then(
            resp => {
                var fields = []
                var details = {}
                resp["data"].map(field => {
                    fields.push(field)
                    details[field] = ""
                })

                this.setState({
                    fields:fields,
                    details:details
                })
                console.log(this.state.details)
            }
        )
    }
    
}

export default Main

