import Component from '../component-helper/Component.js';

const items_control = () => {
  'use strict';
	//let timer;

	class ItemsControl extends Component {
    constructor(props) {
      super(props);
      this.state = { ...props };
      this.increment = this.increment.bind(this);
      this.decrement = this.decrement.bind(this);
      this.clickHandler = this.clickHandler.bind(this);

      let app = document.getElementById('app');
      app.addEventListener('click', this.clickHandler, false);
    }

    componentDidMount() {
  	  console.log('stopwatch mounted', this);
  	}

    decrement() {
      let { data: { value } } = this.state;
			this.setState({ value: --value })
    }

    increment() {
      let { data: { value } } = this.state;
			this.setState({ value: ++value })
    }

    reset() {
      this.setState({ value: 0, running: false });
      clearInterval(timer);
    }

    clickHandler(event) {
      event.preventDefault();
      let action = event.target.getAttribute('data-stopwatch');
      console.warn(`click action: ${action}`);

      switch(action) {
        case 'increment':
          this.increment();
          break;
        case 'decrement':
          this.decrement();
          break;
        default:
          return;
      }
    }

    template(props) {
      const { value, running } = props;
      console.warn(props);
			let template = `
        <div class="timer">
          <div id="stopwatch">
						${value}
          </div>
          <div class="stopwatch_content">
            <button
              data-stopwatch="increment"
            >
              increment
            </button>
            <button data-stopwatch="decrement">
              Decrement
            </button>
          </div>
        </div>
      `;
			return template;
		}

  }

  const INITIAL_STATE = {
    elem: '#app',
    data: {
			value: 0,
			running: false
		}
  };

  let itemsControl = new ItemsControl(INITIAL_STATE);
  itemsControl.render();

};

export default items_control;
