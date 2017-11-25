import{dom}from'/lib/core.static.js'
import settingsStyle from'./settings/style.js'
import style from'./style.js'
export default()=>{
    dom.head(dom.style(style,settingsStyle))
}
