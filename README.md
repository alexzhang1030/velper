# Velper

Yet another Vue helper library.

## Installation

```bash
pnpm i -D velper
```

## Types 

### ComponentProps

If `vue >= 3.3`, we recommend you to use `ExtractPublicPropTypes` instead.

```ts
import { ComponentProps } from 'velper'

const Comp = defineComponent({
  props: {
    foo: String,
    bar: {
      type: Boolean,
      required: true,
    },
  },
})

type _CompProps = ComponentProps<typeof Comp>
/**
 * type _CompProps = {
 *  foo?: string | undefined;
 *  bar: boolean;
 * }
*/
```