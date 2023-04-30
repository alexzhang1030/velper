import { defineComponent } from 'vue'
import type { ComponentProps } from 'velper'

const Comp = defineComponent({
  props: {
    foo: String,
    bar: {
      type: Boolean,
      required: true,
    },
  },
})

// @ts-expect-error ignore unused
type _CompProps = ComponentProps<typeof Comp>
