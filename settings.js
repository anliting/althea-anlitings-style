;(async()=>{
    let[
        main,
        settings,
        dom,
    ]=await Promise.all([
        module.styleByPath('plugins/althea-anlitings-style/style.css'),
        module.styleByPath('plugins/althea-anlitings-style/settings.css'),
        module.repository.althea.dom,
    ])
    dom(document.head,main,settings)
})()
