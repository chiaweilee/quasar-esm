/*!
 * quasar-esm
 * +v, MIT
 */
import quasarCore, * as quasarComponents from 'quasar-framework/dist/quasar.ios.esm'
import 'quasar-framework/dist/core.variables.styl'
import 'quasar-framework/dist/quasar.ios.styl'

const quasar = {}

quasar.install = function (Vue, {components}) {
    Vue.use(quasarCore)
    Object.keys(components).forEach(function (key) {
        return Vue.component(components[key], quasarComponents[components[key]])
    })
}

export default quasar
