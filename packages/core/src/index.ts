import type { PickReadonly } from 'uttype'

export type ComponentProps<
  T extends (new (...args: any[]) => any),
> = PickReadonly<InstanceType<T>['$props']>
