import{dom,load}from'/lib/core.static.js'
export default async()=>{
    let module=await load.module()
    dom.head(await module.styleByPath(
        'plugins/anlitings-style/style.css'
    ))
}
