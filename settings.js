;(async()=>{
    let[
        main,
        settings,
        {dom},
    ]=await Promise.all([
        module.styleByPath('plugins/althea-anlitings-style/style.css'),
        module.styleByPath('plugins/althea-anlitings-style/settings.css'),
        module.moduleByPath('/lib/core.static.js'),
    ])
    dom(document.head,main,settings)
})()
