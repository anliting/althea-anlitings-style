import{dom}from'/lib/core.static.js'
import aStyle from'./user/aStyle.js'
import mainStyle from'./user/mainStyle.js'
export default()=>{
    dom.head(dom.style(aStyle,mainStyle))
}
