/*
Auther : Dani Vijay
Auther Website : http://danivijay.com/
Website : https://danivijay.github.io/fontpicker/
*/

javascript: var d = document,
    b = d.body,
    s = d.createElement('style'),
    m;
s.innerHTML = '*{cursor:help !important;}';
b.appendChild(s);
b.addEventListener('click', l, 0);

function l(e) {
    m = /"([^"]+)"|'([^']+)'|([^,]+)/.exec(window.getComputedStyle(e.target).fontFamily);
    console.log(m[1] || m[2] || m[3]);
    b.removeChild(s);
    b.removeEventListener('click', l);
    e.preventDefault()
}
