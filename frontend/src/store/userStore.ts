import { Derived, Store } from '@tanstack/store'

export const userStore = new Store({
  user: ''
})

export const userDerive = new Derived({
  fn: () => userStore.state,
  deps: [userStore]
})

userDerive.mount()
