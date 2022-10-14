import React, { Component } from "react";

export default class ExempleCycle extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
        counter:0,
        loading: true,
        loadingcounter: false,
    }

    console.log('Lancement de Constructeur ...')
  }

  render() {
    console.log('Lancement de render ...')

    if(this.state.loading){
        return <h1>chargement ..........</h1>
    }

    return <div>
        <h1>{this.state.counter}</h1>
        <button onClick={() => this.setState({counter:this.state.counter+1, loadingcounter:true})} disabled={this.state.loadingcounter}>Cliquer ici ...</button>
    </div>;
  }

  componentDidMount(){
    setTimeout(() => this.setState({loading:false}), 5000)
  }

  componentDidUpdate(prevprops, prevstate){
    console.log('Lancement de ComponentDidUpdate...');
    if(prevstate.counter != this.state.counter)
        setTimeout(() => this.setState({loadingcounter: false}),4000);
  }

  componentWillUnmount(){
    console.log('Lancement de ComponentWillUnmount...');

  }

}
