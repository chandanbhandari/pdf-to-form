import React,{Component} from 'react'
import PDF from "react-pdfjs";
class PreviewComponent extends Component{
    constructor(props) {
        super(props);
        this.state={
            reportData:this.props.reportData,
            page:1,
            scale:1.0
        }
        this.onDocumentCompleted=this._onDocumentCompleted.bind(this);
        this.onPageCompleted=this._onPageCompleted.bind(this);
    }

    render() {
        return <PDF content={this.state.reportData} page={this.state.page} scale={this.state.scale} onDocumentComplete={this._onDocumentCompleted()} onPageComplete={this._onPageCompleted()} loading={(<span>Your own loading message ...</span>)} />
    }
    _onDocumentCompleted(pages){
        this.setState({pages: pages});
    }
    _onPageCompleted(page){
        this.setState({currentPage: page});
    }
}
export default PreviewComponent;