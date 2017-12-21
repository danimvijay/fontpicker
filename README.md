# fontpicker
Picks the font names of text in web.

## Installation
1. Create a bookmark
2. Copy-paste code below to 'Target' and name it 'fontpicker'
```javascript
function l(e){m=/"([^"]+)"|'([^']+)'|([^,]+)/.exec(window.getComputedStyle(e.target).fontFamily),console.log(m[1]||m[2]||m[3]),b.removeChild(s),b.removeEventListener("click",l),e.preventDefault()}var d=document,b=d.body,s=d.createElement("style"),m;s.innerHTML="*{cursor:help !important;}",b.appendChild(s),b.addEventListener("click",l,0);
```
3. Save

## Usage
1. Open Console (F12 in Chrome)
2. Click on bookmarklet on bookmarks bar- a questionmark icon will appear on cursor
3. Click on the text in browser to display font name on console
