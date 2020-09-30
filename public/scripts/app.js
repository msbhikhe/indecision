'use strict';

console.log('App.js is running');

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Indecision App'
    ),
    React.createElement(
        'p',
        null,
        'This is paragraph'
    )
);

var user = {
    name: 'Manpreet',
    age: 27,
    location: 'India'

    // JSX can render expressions only 
    // Eg:     <h1>{user}</h1> is invalid 

};var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name
    ),
    React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    React.createElement(
        'p',
        null,
        'Location: ',
        user.location
    )
);
ReactDOM.render(templateTwo, document.getElementById('app'));
