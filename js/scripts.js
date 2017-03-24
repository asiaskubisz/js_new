$(function() {

    var url = 'http://api.icndb.com/jokes/random';

    var button = document.getElementById('get-joke');
    button.addEventListener('click', function() {
        getJoke();
    });

    var paragraph = document.getElementById('joke');

    function getJoke() {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.addEventListener('load', function() {
            var response = JSON.parse(xhr.response);
            paragraph.innerHTML = response.value.joke;
        });
        xhr.send();
    }
}); // This is just a sample script. Paste your real code (javascript or HTML) here.

if ('this_is' == /an_example/) {
    of_beautifier();
} else {
    var a = b ? (c % d) : e[f];
}