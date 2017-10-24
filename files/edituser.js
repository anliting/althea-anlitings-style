import{dom,moduleLoader}from'/lib/core.static.js'
export default async()=>{
    let
        module=await moduleLoader()
    module.styleByPath('plugins/althea-anlitings-style/style.css').then(main=>
        document.head.appendChild(main)
    )
}
