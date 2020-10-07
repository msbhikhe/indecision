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
  render() {
    return (
      <div>
        <button>What should I do?</button>
      </div>
    );
  }
}

// Render p tag for each option
class Options extends React.Component {
  render() {
    return (
      <div>
        {
          this.props.options.map((option, index) => <p key={index}>{option}</p>)
        }
      </div>
    );
  }
}

class Option extends React.Component {
    render() {
        return (
          <div>
            <p>This is option component</p>
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
