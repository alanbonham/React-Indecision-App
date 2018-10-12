'use strict';

console.log('APP.js is running');

var app = {
    title: 'Indecision App',
    subtitle: 'Suck mah balls'

    //JSX - Javascript XML
};var template = React.createElement(
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
    Age: '36',
    Location: 'Sheffield'
};
var userName = 'Bob';
var userAge = '99';
var userLocation = 'Manchester';
var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name + '!'
    ),
    React.createElement(
        'p',
        null,
        'Age: ',
        user.Age
    ),
    React.createElement(
        'p',
        null,
        'Location: ',
        user.Location
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
