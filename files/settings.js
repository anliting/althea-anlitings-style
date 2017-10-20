let root='plugins/althea-anlitings-style'
import{dom,moduleLoader}from'/lib/core.static.js'
export default async()=>{
    let
        module=await moduleLoader(),
        [
            main,
            settings,
        ]=await Promise.all([
            module.styleByPath(`${root}/style.css`),
            module.styleByPath(`${root}/settings.css`),
        ])
    dom.head(main,settings)
}
