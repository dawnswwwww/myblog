declare module '*.vue' {
import { Vue } from 'vue/types/vue'
export default Vue;
}

declare namespace window {
  interface Vue {
    Plugins: any
  }
}
