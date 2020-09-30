'use strict';

console.log('App.js is running');

var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer!'
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item one'
        ),
        React.createElement(
            'li',
            null,
            'Item two'
        )
    )
);

// Conditional Rendering
// if statements (using functions)
// ternary operator
// logical operator

var user = {
    name: 'Manpreet',
    age: 27,
    location: 'India'
};

function getLocation(user) {
    if (user.location) {
        return React.createElement(
            'p',
            null,
            'Location: ',
            user.location
        );
    } else {
        return 'Unknown';
    }
};

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name ? user.name : 'Anonymous'
    ),
    user.age >= 18 && React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    getLocation(user),
    React.createElement(
        'p',
        null,
        'This is also possible'
    )
);
ReactDOM.render(templateTwo, document.getElementById('app'));
