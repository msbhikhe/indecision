class VisibilityToggle extends React.Component {
  constructor(props) {
      super(props);
      this.toggleVisibility = this.toggleVisibility.bind(this);
      this.state = {
        visibility: false
      }
  }

  toggleVisibility() {
      this.setState( prevState => {
          return {
              visibility: !prevState.visibility
          };
      });
  }

  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.toggleVisibility}>
          {this.state.visibility ? "Hide details" : "Show details"}
        </button>
        {this.state.visibility && <p>Hey. These are some details you can now see !</p>}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));
// let visibility = false;

// const toggleVisibility = () => {
//     visibility = !visibility;
//     renderApp();
// };

// const renderApp = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={toggleVisibility}>{visibility ? 'Hide details' : 'Show details'}</button>
//             {visibility && <p>Hey. These are some details you can now see !</p>}
//         </div>
//     );

//     ReactDOM.render(template, document.getElementById('app'));
// };

// renderApp();
