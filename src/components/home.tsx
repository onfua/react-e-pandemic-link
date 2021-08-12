import React ,{Component} from 'react';
import sary1 from '../img/ANTSOY.png';
import sary2 from '../img/fit.jpeg';
import sary3 from '../img/WearMask.png';


class Home extends Component{
    render(){
        return (
            <div>
                <div className="flex-containerHome">
                    <div><img src={sary1} alt="" style={{width:'400px'}}/></div>
                    <div><img src={sary2} alt="" style={{width:'400px'}}/></div>
                    <div><img src={sary3} alt="" style={{width:'400px'}}/></div>  
                </div>
            </div>
        )
    }
}

export default Home;