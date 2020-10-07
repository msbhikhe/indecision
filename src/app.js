class IndecisionApp extends React.Component {
  render() {

  const title = 'Indecision App';
  const subtitle = 'Put your life in the hands of a computer!';
  let options = ['One', 'Two', 'Three'];

  return (
      <div>
          <Header title={title} subtitle={subtitle}/>
          <Action/>
          <Options options={options}/>
          <AddOption/>
      </div>);
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  handlePick() {
    alert('Pick option');
  }

  render() {
    return (
      <div>
        <button onClick={this.handlePick}>What should I do?</button>
      </div>
    );
  }
}

// Add remove all button
// Setup handleRemoveAll -> alert some message
// setup onclick to fire the method
class Options extends React.Component {
  handleRemoveAll() {
    alert('All options removed');
  }

  render() {
    return (
      <div>
        <button onClick={this.handleRemoveAll}>Remove All</button>
        {
          this.props.options.map((option, index) => <Option key={index} optionText={option}/>)
        }
      </div>
    );
  }
}

class Option extends React.Component {
    render() {
        return (
          <div>
            <p>{this.props.optionText}</p>
          </div>
        );
      }
}

class AddOption extends React.Component {
  render() {
    return (
      <div>
        <form>
          <input type="text" name="option" />
          <button>Add option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));
