import React from 'react';

class Card extends React.Component {
	render () {
		const { name, image, cycling, skiing, coding, math } = this.props;
		return (
			<div className="Card">
				<p>{name}</p>
				<img src={image} alt={name} />
				<h2>Talents</h2>
				<ul>
					<li>Cycling Talent: {cycling}</li>
					<li>Skiing Talent: {skiing}</li>
					<li>Coding Talent: {coding}</li>
					<li>Math Talent: {math}</li>
					<li>Total: {cycling + skiing + coding + math}</li>
				</ul>
			</div>
		)
	}
}

export default Card;