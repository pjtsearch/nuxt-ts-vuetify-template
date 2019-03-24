import Vue from 'vue'
import VueMq from 'vue-mq'

export default async function () {
  let plugin = VueMq;
  if (process.server) {
    plugin = {
      install(Vue, options) {
        Vue.prototype.$mq = options.defaultBreakpoint
      }
    }
  }

  const moduleOptions = {"defaultBreakpoint":"mobile","breakpoints":{"mobile":950,"tablet":960,"laptop":1250,"desktop":null}}
  Vue.use(plugin, moduleOptions)
}
