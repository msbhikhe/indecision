import React from "react";
import ReactDOM from "react-dom";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

import Action from "./components/Action";
import AddOption from "./components/AddOption";
import Header from "./components/Header";
import Options from "./components/Options";
import OptionModal from "./components/OptionModal";

class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.pickOption = this.pickOption.bind(this);
    this.removeAllOptions = this.removeAllOptions.bind(this);
    this.removeOption = this.removeOption.bind(this);
    this.addOption = this.addOption.bind(this);
    this.clearSelectedOption = this.clearSelectedOption.bind(this);
    this.state = {
      options: props.options,
      selectedOption: undefined,
    };
  }

  pickOption() {
    const index = Math.floor(Math.random() * this.state.options.length);
    // alert(this.state.options[index]);
    this.setState((prevState) => ({
      selectedOption: prevState.options[index],
    }));
  }

  removeAllOptions() {
    this.setState(() => ({ options: [] }));
  }

  removeOption(optionToRemove) {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option),
    }));
  }

  addOption(option) {
    if (!option) {
      return "Enter valid value to add item";
    } else if (this.state.options.indexOf(option) > -1) {
      return "This option already exists";
    }

    // Don't use push to add element as we should not manipulate prevState object
    this.setState((prevState) => ({
      options: prevState.options.concat(option),
    }));
  }

  clearSelectedOption() {
    this.setState(() => ({ selectedOption: undefined }));
  }

  componentDidMount() {
    try {
      const options = JSON.parse(localStorage.getItem("options"));

      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {}
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
    }
  }

  render() {
    return (
      <div>
        <Header title={this.props.title} subtitle={this.props.subtitle} />
        <div className="container">
          <Action
            hasOptions={this.state.options.length > 0}
            pickOption={this.pickOption}
          />
          <div className="widget">
          <Options
            options={this.state.options}
            removeAllOptions={this.removeAllOptions}
            removeOption={this.removeOption}
          />
          <AddOption addOption={this.addOption} />
          </div>
        </div>
        <OptionModal
          selectedOption={this.state.selectedOption}
          clearSelectedOption={this.clearSelectedOption}
        />
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of a computer!",
  options: [],
};

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
