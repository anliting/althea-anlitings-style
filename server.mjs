function Plugin(althea){
    this._althea=althea
    althea.setClientModules({
        edituser:   'edituser.static.js',
        settings:   'settings.static.js',
        user:       'user.static.js',
    })
}
Plugin.prototype.end=function(){
    this._althea.cutClientModules()
}
Plugin.prototype.shutdownEnd=function(){
}
export default Plugin
