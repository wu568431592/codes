<template>
  1
</template>
<script>
import { defineComponent } from 'vue'
export default defineComponent({
  setup () {
    const myNew = function (...args) {
      const obj = {}
      const constructorFunction = [].shift.call(args)
      // eslint-disable-next-line no-proto
      obj.__proto__ = constructorFunction.prototype
      const params = args
      const res = constructorFunction.apply(obj, params)
      return obj instanceof Object ? obj : res
    }
    function A (name) {
      this.name = name
    }
    const a = new A('aaa')
    // eslint-disable-next-line no-proto
    console.log(a.__proto__ === A.prototype)
    // eslint-disable-next-line no-proto
    console.log(a.__proto__.constructor === A)
    console.log(a instanceof A)
  }
})
</script>
