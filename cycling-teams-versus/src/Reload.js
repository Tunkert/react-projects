import React from 'react'
import reload from './helpers'

class Reload extends React.Component {
	render () {
		return (
			<div>
				<button onClick={reload} className="Reload">Reload</button>
			</div>
		)
	}
}

export default Reload;