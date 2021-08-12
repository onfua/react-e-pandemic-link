import React, {Component} from 'react';
import './App.css';
import './style/style.css';
import Home from './components/home';
import Toro from './components/toro';
class App extends Component{
  state:any;
  i :number;
  txt :string; /* The text */
  speed :number; /* The speed/duration of the effect in milliseconds */
  text:any;
  constructor(props:any){
    super(props);
    this.state={
      menu:'home'
    }
    this.txt='E-Pandemic Link';
    this.speed=100;
    this.i=0;
  }
  componentDidMount(){
    this.typeWriter();
  }
  render(){
    return (
      <div className="App">
        <div className="header">
          <a className="logo" href='#e_pandemic_link' id='e_pandemic_link' ref={(e)=>{this.text=e;}} > </a>
          <div className="header-right">
            <a className={this.status('home')} onClick={()=>{this.setState({menu:'home'})}} href='#e_pandemic_link'>Fandraisana</a>
            <a className={this.status('toro')} onClick={()=>{this.setState({menu:'toro'})}} href='#e_pandemic_link'>Toro-hevitra samihafa</a>
          </div>
        </div>
        {this.affichage()}
      </div>
    );
  }
  status(e:string){
    if (e===this.state.menu){
      return 'active';
    }else{
      return '';
    }
  }
  affichage(){
    if (this.state.menu==='home'){
      return <Home/>
    }else if (this.state.menu==='toro'){
      return <Toro/>
    }
  }

  typeWriter() {
    if (this.i < this.txt.length) {
      this.text.childNodes[0].nodeValue += this.txt.charAt(this.i);
      this.i++;
      setTimeout(()=>{this.typeWriter()}, this.speed);
    }
  }
}

export default App;
