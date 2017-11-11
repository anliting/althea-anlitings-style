import{dom,moduleLoader}from'/lib/core.static.js'
export default async()=>{
    let module=await moduleLoader()
    dom.head(await module.styleByPath(
        'plugins/anlitings-style/style.css'
    ))
}
