import React from 'react';
import Header from './components/Header';
import Products from './components/Section';


class App extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      count:0
    }

  }

 changeCount(counter)
 {
this.setState({count:this.state.count+counter})
 }
  render()
  {
    return(<div>
      <Header cartcount={this.state.count}/>
      <Products changeCounter={this.changeCount.bind(this)}/>
    </div>)
  }
}

export default App;


   

