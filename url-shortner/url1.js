function getrandom() {
    var text = "";
    var possible = "https://dev.to/bauripalash/building-a-simple-url-shortener-with-just-html-and-javascript-16o4";

    for (var i = 0; i < 5; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}

console.log(getrandom());
