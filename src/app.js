class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.pickOption = this.pickOption.bind(this);
    this.removeAllOptions = this.removeAllOptions.bind(this);
    this.addOption = this.addOption.bind(this);
    this.state = {
      options: [],
    };
  }

  pickOption() {
    const index = Math.floor(Math.random() * this.state.options.length);
    alert(this.state.options[index]);
  }

  removeAllOptions() {
    this.setState(() => {
      return {
        options: [],
      };
    });
  }

  addOption(option) {
    if(!option) {
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    }

    this.setState((prevState) => {
      // Never manipulate prevState
      // prevState.options.push(option);
      // return {
      //   options: prevState.options
      // };

      // Not the cleanest way
      // let options = prevState.options;
      // options.push(option);
      // return {
      //   options: options,
      // };

      return {
        options: prevState.options.concat(option)
      };
    });
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
        />
        <AddOption addOption={this.addOption} />
      </div>
    );
  }
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
    </div>
  );
};

// Default props
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
      {props.options.map((option, index) => (
        <Option key={index} optionText={option} />
      ))}
    </div>
  );
};

const Option = (props) => {
  return (
    <div>
      <p>{props.optionText}</p>
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
    this.setState(() => {return {error}});

    e.target.elements.option.value = "";
  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleFormSubmit}>
          <input type="text" name="option" />
          <button>Add option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
