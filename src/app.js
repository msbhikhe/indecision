class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Indecision App</h1>
        <h2>Put your life in the hands of a computer!</h2>
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

// React component challenge 1
// Options -> Options component here
// Add Option -> Add option component here

class Option extends React.Component {
    render() {
        return (
          <div>
            <p>This is option component</p>
          </div>
        );
      }
}
class Options extends React.Component {
  render() {
    return (
      <div>
        <p>This is options component</p>
        <Option/>
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

class IndecisionApp extends React.Component {
    render() {
        return (
        <div>
            <Header/>
            <Action/>
            <Options/>
            <AddOption/>
        </div>);
    }
}

ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));
