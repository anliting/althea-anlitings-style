import{dom,load}from'/lib/core.static.js'
export default async()=>{
    let
        module=await load.module()
    module.styleByPath('plugins/anlitings-style/a.css').then(main=>
        document.head.appendChild(main)
    )
    module.styleByPath('plugins/anlitings-style/main.css').then(main=>
        document.head.appendChild(main)
    )
}

