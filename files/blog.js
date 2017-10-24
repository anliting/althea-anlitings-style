let root='plugins/althea-anlitings-style'
import{dom,moduleLoader}from'/lib/core.static.js'
export default async blog=>{
    let
        module=await moduleLoader()
    module.getByPath(`${root}/style.css`).then(s=>
        blog._style(dom.tn(s))
    )
}
