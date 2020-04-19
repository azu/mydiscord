const style = document.createElement('style');
const rule = document.createTextNode(`
[class^="content-"] > *:not([class^="chat-"]):not([class^="chatContent-"]) {
    display: none;
}
[class^="base-"]{
    width: 100% !important;
    left: 0 !important;
}
`);
style.media = 'screen';
style.type = 'text/css';
style.appendChild(rule);
document.head.appendChild(style);