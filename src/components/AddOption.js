import React from "react";

export default class AddOption extends React.Component {
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
          {this.state.error && <p className="add-option-error">{this.state.error}</p>}
          <form className="add-option" onSubmit={this.handleFormSubmit}>
            <input className="add-option__input" type="text" name="option" />
            <button className="button">Add option</button>
          </form>
        </div>
      );
    }
  }