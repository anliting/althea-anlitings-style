import{dom,load}from'/lib/core.static.js'
export default async()=>{
    let
        module=await load.module()
    module.styleByPath('plugins/anlitings-style/style.css').then(main=>
        document.head.appendChild(main)
    )
}
