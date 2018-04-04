import { dom } from '/lib/core.static.js';

var aStyle = `
a:active,a:link,a:hover,a:visited{
    color:blue;
}
`

var mainStyle = `
.althea.main{
    width:600px;
    margin:0 auto;
}
`

var user = ()=>{
    dom.head(dom.style(aStyle,mainStyle));
}

export default user;
