# quasar-esm

[![Greenkeeper badge](https://badges.greenkeeper.io/chiaweilee/quasar-esm.svg)](https://greenkeeper.io/)

Quasar ESM

### Install
> npm install quasar-esm

### Usage
```javascript
/** Quasar-framework **/
// theme
// quasar-esm/mat
// quasar-esm/ios
import quasar from 'quasar-esm/mat'
Vue.use(quasar, {
  components: [
    'QLayout',
    'QBtn'
  ]
})
```

Set components to install components to Vue.
In 0.0.1 test version, all components will be load into vendor, no matter what you write in components set.
