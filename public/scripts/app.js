'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
  _inherits(IndecisionApp, _React$Component);

  function IndecisionApp(props) {
    _classCallCheck(this, IndecisionApp);

    var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

    _this.pickOption = _this.pickOption.bind(_this);
    _this.removeAllOptions = _this.removeAllOptions.bind(_this);
    _this.removeOption = _this.removeOption.bind(_this);
    _this.addOption = _this.addOption.bind(_this);
    _this.state = {
      options: props.options
    };
    return _this;
  }

  _createClass(IndecisionApp, [{
    key: 'pickOption',
    value: function pickOption() {
      var index = Math.floor(Math.random() * this.state.options.length);
      alert(this.state.options[index]);
    }
  }, {
    key: 'removeAllOptions',
    value: function removeAllOptions() {
      this.setState(function () {
        return { options: [] };
      });
    }
  }, {
    key: 'removeOption',
    value: function removeOption(optionToRemove) {
      this.setState(function (prevState) {
        return {
          options: prevState.options.filter(function (option) {
            return optionToRemove !== option;
          })
        };
      });
    }
  }, {
    key: 'addOption',
    value: function addOption(option) {
      if (!option) {
        return 'Enter valid value to add item';
      } else if (this.state.options.indexOf(option) > -1) {
        return 'This option already exists';
      }

      this.setState(function (prevState) {
        return { options: prevState.options.concat(option) };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var title = "Indecision App";
      var subtitle = "Put your life in the hands of a computer!";

      return React.createElement(
        'div',
        null,
        React.createElement(Header, { title: title, subtitle: subtitle }),
        React.createElement(Action, {
          hasOptions: this.state.options.length > 0,
          pickOption: this.pickOption
        }),
        React.createElement(Options, {
          options: this.state.options,
          removeAllOptions: this.removeAllOptions,
          removeOption: this.removeOption
        }),
        React.createElement(AddOption, { addOption: this.addOption })
      );
    }
  }]);

  return IndecisionApp;
}(React.Component);

IndecisionApp.defaultProps = {
  options: []
};

var Header = function Header(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      props.title
    ),
    React.createElement(
      'h2',
      null,
      props.subtitle
    )
  );
};

// Default props (works with both functional and class components)
Header.defaultProps = {
  title: 'default title'
};

var Action = function Action(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'button',
      {
        disabled: !props.hasOptions,
        onClick: props.pickOption
      },
      'What should I do?'
    )
  );
};

var Options = function Options(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'button',
      { onClick: props.removeAllOptions },
      'Remove All'
    ),
    props.options.map(function (option, index) {
      return React.createElement(Option, { key: index, optionText: option, removeOption: props.removeOption });
    })
  );
};

var Option = function Option(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'p',
      null,
      props.optionText,
      React.createElement(
        'button',
        { onClick: function onClick() {
            props.removeOption(props.optionText);
          } },
        'Remove'
      )
    )
  );
};

var AddOption = function (_React$Component2) {
  _inherits(AddOption, _React$Component2);

  function AddOption(props) {
    _classCallCheck(this, AddOption);

    var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

    _this2.handleFormSubmit = _this2.handleFormSubmit.bind(_this2);
    _this2.state = {
      error: undefined
    };
    return _this2;
  }

  // Handling the form is responsibility of this component not it's parent


  _createClass(AddOption, [{
    key: 'handleFormSubmit',
    value: function handleFormSubmit(e) {
      e.preventDefault();

      var option = e.target.elements.option.value.trim();
      var error = this.props.addOption(option);

      // Shorthand syntax when property/value-var name is same
      this.setState(function () {
        return { error: error };
      });

      e.target.elements.option.value = "";
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        this.state.error && React.createElement(
          'p',
          null,
          this.state.error
        ),
        React.createElement(
          'form',
          { onSubmit: this.handleFormSubmit },
          React.createElement('input', { type: 'text', name: 'option' }),
          React.createElement(
            'button',
            null,
            'Add option'
          )
        )
      );
    }
  }]);

  return AddOption;
}(React.Component);

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById("app"));
