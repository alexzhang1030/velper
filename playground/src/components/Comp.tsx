import { defineComponent } from 'vue'

const Comp = defineComponent({
  props: {
    foo: String,
  },
})

type CompProps = InstanceType<typeof Comp>['$props']
