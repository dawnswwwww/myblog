import Vue from 'vue'

declare module 'vue/types/vue' {
    interface Vue {
        plugins: any,
        prototype: any
    }
}