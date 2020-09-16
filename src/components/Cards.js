import React from 'react'
import CardItem from "./CardItem"
import "./Cards.css"


function Cards() {
    return (
        <div className="cards">
            <h1>Check out my epic portfolio</h1>
            <div className="card__container">
                <div className="card__wrapper">
                    <ul className="cards__items">
                        <CardItem
                        
                        src="images/img-9.jpg"
                        text="Explore the hand writing art and go even further"
                        label="Hand Writing"
                        path="/services "

                        />
                                     <CardItem
                        
                        src="images/img-2.jpg"
                        text="Always be thankful and grateful"
                        label="Luxury"
                        path="/services "

                        />
                    </ul>
                                     <ul className="cards__items">
                        <CardItem
                        
                        src="images/img-3.jpg"
                        text="Feel, breathe and compose your own style"
                        label="Adventure"
                        path="/services "

                        />
                                     <CardItem
                        
                        src="images/img-4.jpg"
                        text="Feel, breathe and compose your own style"
                        label="Luxury"
                        path="/services "

                        />
                                      <CardItem
                        
                        src="images/img-5.jpg"
                        text="Feel, breathe and compose your own style"
                        label="Luxury"
                        path="/services "

                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
