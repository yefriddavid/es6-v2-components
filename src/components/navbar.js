import Component from '../component-helper/Component.js';

const setup_navbar = () => {
  'use strict';
  // Create the stopwatch
	class Navbar extends Component {
    constructor(props) {
      super(props);
      this.state = {...props};
    }

    template(props) {
      const { heading } = props;
			let template = `
        <div class="nav">
          ${heading}
        </div>
      `;
  		return template;
  	}

  	componentDidMount() {
  	  console.log('navbar mounted', this);
  	}
  }

  const INITIAL_STATE = {
    elem: '#navbar',
    data: {
      heading: 'Traze Software Item Control Component'
		}
  };

  // Define the new element
  let navbar = new Navbar(INITIAL_STATE);
  navbar.render();
};

export default setup_navbar;
