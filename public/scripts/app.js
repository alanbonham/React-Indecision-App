'use strict';

console.log('APP.js is running');

var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: ['One', 'Two']
};

//JSX - Javascript XML
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'p',
        null,
        app.options.length > 0 ? 'Here are your options' : 'No options'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'fus'
        ),
        React.createElement(
            'li',
            null,
            'ro'
        ),
        React.createElement(
            'li',
            null,
            'dah'
        )
    )
);

var user = {
    name: 'Alan',
    age: '36',
    isLoggedIn: false,
    location: 'Sheff'
};

function getLocation(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            'Location: ',
            location
        );
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
    ' ',
    user.age && user.age >= 18 && React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    ' ',
    getLocation(user.location),
    ' '
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
