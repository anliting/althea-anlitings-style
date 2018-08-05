import { doe } from '/lib/core.static.js';

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
    doe.head(doe.style(aStyle,mainStyle));
}

export default user;
