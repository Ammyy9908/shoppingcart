import React from "react";
import { Component } from "react";


class Card extends Component
{
      
      constructor(props)
      {
            super(props);
            this.state ={
                  message1:"Add to Cart",
                  message2:"Remove",
                  count:0,
                  newCount:1,
                  visibility1:"inline",
                  visibility2:"none"
            }
      }
      
      Increment(){
            this.setState({
                  message:"Added",
                  visibility1:"none",
                  visibility2:"inline"
            })

      }

      Decrement(){
            this.setState({
                  message:"Add to cart",
                  visibility1:"inline",
                  visibility2:"none"
            })

      }

      onchangeCount()
      {
            this.props.changeCount(this.state.newCount);
            this.Increment();
      }
      onchangeCountDec()
      {
            this.props.changeCount(-1);  
            this.Decrement(); 
      }



      
      render(props)
      {
            const {image,name}=this.props;
            return(<div class="card card1">
		<div class="cover">
			<img src={image}/>
		</div>
		<h4 class="productTitle">{name}</h4>
      
		<p class="desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
             Lorem Ipsum has been the industry's standard dummy t
             ext ever since the 1500s</p>

             <button className="button add is-warning" onClick={this.onchangeCount.bind(this)} style={{"display":this.state.visibility1}}>{this.state.message1}</button>
             <button className="button add is-warning" onClick={this.onchangeCountDec.bind(this)} style={{"display":this.state.visibility2}}>{this.state.message2}</button>
		
		
	</div>);
      }
}

export default Card;