class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.pickOption = this.pickOption.bind(this);
    this.removeAllOptions = this.removeAllOptions.bind(this);
    this.removeOption = this.removeOption.bind(this);
    this.addOption = this.addOption.bind(this);
    this.state = {
      options: props.options,
    };
  }

  pickOption() {
    const index = Math.floor(Math.random() * this.state.options.length);
    alert(this.state.options[index]);
  }

  removeAllOptions() {
    this.setState(() => ({options: []}));
  }

  removeOption(optionToRemove) {
    this.setState((prevState) => ({
      options: prevState.options.filter( option => optionToRemove !== option)
    }));
  }

  addOption(option) {
    if(!option) {
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    }

    // Don't use push to add element as we should not manipulate prevState object
    this.setState((prevState) => ({options: prevState.options.concat(option)}) );
  }

  componentDidMount() {
    try {
      const options = JSON.parse(localStorage.getItem('options'));
    
      if(options){
        this.setState(() => ({options}));
      }
    } catch (e) {

    }
  }
  componentDidUpdate(prevProps, prevState) {
    if(prevState.options.length !== this.state.options.length){
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);  
    }
  }

  render() {
    const title = "Indecision App";
    const subtitle = "Put your life in the hands of a computer!";

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          pickOption={this.pickOption}
        />
        <Options
          options={this.state.options}
          removeAllOptions={this.removeAllOptions}
          removeOption={this.removeOption}
        />
        <AddOption addOption={this.addOption} />
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  options: []  
};

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
    </div>
  );
};

// Default props (works with both functional and class components)
Header.defaultProps = {
  title: 'default title'
};

const Action = (props) => {
  return (
    <div>
      <button
        disabled={!props.hasOptions}
        onClick={props.pickOption}
      >
        What should I do?
      </button>
    </div>
  );
};

const Options = (props) => {
  return (
    <div>
      <button onClick={props.removeAllOptions}>Remove All</button>
      {props.options.length === 0 && <p>Please add an option to get started</p>}
      {props.options.map((option, index) => (
        <Option key={index} optionText={option} removeOption={props.removeOption}/>
      ))}
    </div>
  );
};

const Option = (props) => {
  return (
    <div>
      <p>{props.optionText}<button onClick={() => {
        props.removeOption(props.optionText);  
      }}>Remove</button></p>
    </div>
  );
};

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.state = {
      error: undefined
    };
  }

  // Handling the form is responsibility of this component not it's parent
  handleFormSubmit(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    const error = this.props.addOption(option);

    // Shorthand syntax when property/value-var name is same
    this.setState(() => ({ error }));

    if(!error) {
      e.target.elements.option.value = "";
    }
    
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <input type="text" name="option" />
          <button>Add option</button>
        </form>
        {this.state.error && <p>{this.state.error}</p>}
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
