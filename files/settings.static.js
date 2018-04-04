import { dom } from '/lib/core.static.js';

var settingsStyle = `
body{
    overflow-y:scroll;
}
#div_menu{
    vertical-align:top;
}
`

var style = `
/*
/setting Plugins would need this.
*/
table.bordered{
    border-collapse:collapse;
}
table.bordered th{
    border:1px solid black;
}
table.bordered td{
    border:1px solid black;
}
table.padding4px th{
    padding:4px;
}
table.padding4px td{
    padding:4px;
}
a:active,a:link,a:hover,a:visited{
    color:blue;
}
`

var settings = ()=>{
    dom.head(dom.style(style,settingsStyle));
}

export default settings;
