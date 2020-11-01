import api from './api'

const Plugins = {
    api
}

const install = (vue: Vue) => {
    vue.plugins = vue.prototype.plugins = Plugins
}

export default {
    install: (vue: Vue) => {
        vue.plugins = vue.prototype.plugins = Plugins
    }
}
