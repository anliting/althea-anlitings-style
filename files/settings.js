let root='plugins/anlitings-style'
import{dom,load}from'/lib/core.static.js'
export default async()=>{
    let
        module=await load.module(),
        [
            main,
            settings,
        ]=await Promise.all([
            module.styleByPath(`${root}/style.css`),
            module.styleByPath(`${root}/settings.css`),
        ])
    dom.head(main,settings)
}
