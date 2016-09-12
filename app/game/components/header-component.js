'use strict';

var Header = function(props) {
    return (
    	<div className="game-header">
    		<ul>
    			<li>
    				<a>WHAT?</a>
    			</li>
    			<li>
    				<a onClick={this.props.newGame} >+ NEW GAME</a>
    			</li>
    		</ul>
    	</div>
    );
}

module.exports = Header;