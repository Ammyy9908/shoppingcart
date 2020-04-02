import React, { Component } from 'react';





class Page extends Component  {
      constructor(props)
      {
            super(props);
            this.state={
                  message:"Add to Cart",
                  count:0
            }

      }
      Increment()
      {
            this.setState({
                  message:"Added",
                  count:this.state.count+1
            })
      }
      render() {
            return (
                  <div>
                  <div className="hero is-warning is-large">
                  <div className="hero-body" id="hero">
                  <div className="container">
                  <h1 className="title is-size-1">Your Cart {this.state.count}</h1>
                  
                  <p className="subtitle">Lorem ipsum dolor sit 
                  amet consectetur adipisicing elit. Sed, nobis corrupti dolorum esse, ipsam repellendus delectus recusandae corporis hic assumenda illo, 
                  laudantium quas ut reiciendis! Odit quaerat voluptatem nam numquam!</p>
                  </div>
                  </div>
                  </div>
                  

                  <div className="hero is-light">
                        <div className="hero-body">
                              <div className="container">
                                    <h1 className="title is-size-1">Shoes</h1>
                                    <div className="columns">
                                          <div className="column">
                                          <div class="card card1">
		<div class="cover">
			<img src="https://source.unsplash.com/random?shoes?nike" alt="nike"/>
		</div>
		<h4 class="productTitle">Nike Shoes</h4>
		<p class="desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
             Lorem Ipsum has been the industry's standard dummy t
             ext ever since the 1500s</p>

             <button className="button is-danger add">+</button>
             
             <button className="button is-danger add">-</button>
             <button className="button is-danger add"></button>
             <p className="subitile">{this.state.count}</p>
		
		
	</div>
                                          </div>
                                         
                                          </div>
                                          
                                    </div>
                                   
                              </div>
                        </div>
                 </div>
            );
      }
}

export default Page;
