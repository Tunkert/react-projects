import React from 'react';
import Card from './Card';

class CardsContainer extends React.Component {
	render() {
		const { names, images, cyclingTalents, skiingTalents, codingTalents, mathTalents } = this.props;
		return (
			<div className="CardsContainer">
				<Card 
					name={names[0]} 
					image={images[0]} 
					cycling={cyclingTalents[0]}
					skiing={skiingTalents[0]}
					coding={codingTalents[0]}
					math={mathTalents[0]}
					total={cyclingTalents[0] + skiingTalents[0] + codingTalents[0] + mathTalents[0]}
				/>
				<Card 
					name={names[1]} 
					image={images[1]} 
					cycling={cyclingTalents[1]}
					skiing={skiingTalents[1]}
					coding={codingTalents[1]}
					math={mathTalents[1]}
					total={cyclingTalents[1] + skiingTalents[1] + codingTalents[1] + mathTalents[1]}
				/>
				<Card 
					name={names[2]} 
					image={images[2]} 
					cycling={cyclingTalents[2]}
					skiing={skiingTalents[2]}
					coding={codingTalents[2]}
					math={mathTalents[2]}
					total={cyclingTalents[2] + skiingTalents[2] + codingTalents[2] + mathTalents[2]}
				/>
			</div>
		)
	}
}

export default CardsContainer;