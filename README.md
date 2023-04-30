# Velper

Yet another Vue helper library.

## Installation

```bash
pnpm i -D velper
```

## Types 

### ComponentProps

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