let root='plugins/anlitings-style'
import{dom,load}from'/lib/core.static.js'
export default async blog=>{
    let
        module=await load.module()
    module.getByPath(`${root}/style.css`).then(s=>
        blog._style(dom.tn(s))
    )
}
