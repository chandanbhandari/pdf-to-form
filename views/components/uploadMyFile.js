import React, { Component } from 'react';

class UploadMyFile extends React.Component {
    
    render() {
        return(
        <div>
            <input type="file" onChange={(event) => this.props.uploadFile(event.target.files[0],"file")} />
        </div>
        )
    }
}
export default UploadMyFile;
