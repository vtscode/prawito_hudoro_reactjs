
const e = React.createElement;

// Display a "Like" <button>
function LikeButton () {
	// body... 
	return e(
	  'button',
	  // { onClick: () => this.setState({ liked: true }) },
	  { onClick: () => alert('button works') },
	  'Like'
	);
}

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);
