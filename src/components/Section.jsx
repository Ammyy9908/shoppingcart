import React, { Component } from "react";
import Card from "./Card";



class Products extends Component
{
      constructor(props)
      {
            super(props);
            this.state = {
                  newCount:0
            }
            
      }

      
      render()
      {
            return(
            <div>
               <div className="hero is-light">
                        <div className="hero-body">
                              <div className="container">
                                    <h1 className="title is-size-1">Our Products</h1>
                                    <div className="columns">
                                          <div className="column">
                                                <Card image="https://source.unsplash.com/random?shoes?nike" name="Nike Shoes" changeCount={this.props.changeCounter.bind(this)}/>
                    
                                          </div>
                                          <div className="column">
                                                <Card image="https://source.unsplash.com/random?shirts" name="Shirts" changeCount={this.props.changeCounter.bind(this)}/>
                                          </div>
                                          <div className="column">
                                                <Card image="https://source.unsplash.com/random?t-shirt" name="T-Shirts" changeCount={this.props.changeCounter.bind(this)}/>
                                          </div>
                                    </div>
                                    <div className="columns">
                                          <div className="column">
                                                <Card image="https://source.unsplash.com/random?teddy bear" name="Teddy Bear" changeCount={this.props.changeCounter.bind(this)}/>
                                          </div>
                                          <div className="column">
                                                <Card image="https://source.unsplash.com/random?Camera" name="Nikon Camera" changeCount={this.props.changeCounter.bind(this)}/>
                                          </div>
                                          <div className="column">
                                                <Card image="https://source.unsplash.com/random?macbook" name="Mackbook" changeCount={this.props.changeCounter.bind(this)}/>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>   
            </div>
      )
            }
}

export default Products;