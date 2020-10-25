import request from './request'

const Plugins = {
    request
}

const install = (vue: Vue) => {
    vue.Plugins = vue.prototype.Plugins = Plugins
}

export default {
    install: (vue: Vue) => {
        vue.Plugins = vue.prototype.Plugins = Plugins
    }
}
