import api from './api'

const Plugins = {
    api
}

const install = (vue: Vue) => {
    vue.plugins = vue.prototype.plugins = Plugins
}

export default {
    install: (vue: any) => {
        vue.plugins = vue.prototype.plugins = Plugins
    }
}
