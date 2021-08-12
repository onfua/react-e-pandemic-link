import React,{Component} from "react";
import '../style/afficheHomeStyle.css';

class AfficheHome extends Component{
    props:any;
    modal:any
    componentDidMount(){
       window.addEventListener('click', (event:any) => {
        if (event.target === this.modal) {
            this.props.turn('none');
          }
        });
    }
    render(){
        return (
            <div id="myModal" ref={(e)=>{this.modal=e;}} className="modal" style={this.props.toggle}>

                <div className="modal-content">
                    <span className="close" onClick={()=>{
                        this.props.turn('none');
                    }}>&times;</span>
                    {this.affichage()}
                </div>

            </div>
        );
    }
    affichage(){
        return this.props.data.map((e:any)=>{  
            return (<div>
                        <button className="collapsible" onClick={(e)=>{
                            let tmp:any;
                            tmp=e.target;
                            let content = tmp.nextSibling;
                            if (content.style.display ==='block') {
                                content.style.display = 'none';
                            } else {
                                content.style.display = 'block';
                            }
                        }}>{e.titre}</button>
                        <div className="content" >
                            <img src={e.photo} alt="" width='200px'/>
                            <p>{e.description.split('\n').map((az:string)=>{
                                return (
                                    <div style={{textAlign:'left'}}>
                                        {az}
                                    </div>
                                )
                            })}</p>
                        </div>
                    </div>
            )
        });
    }
}

export default AfficheHome;