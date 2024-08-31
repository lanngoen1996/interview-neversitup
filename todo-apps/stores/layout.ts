export const useLayoutStore = defineStore('layoutStore', {
  state: () => ({
    done: false
  }),
  actions: {
    toggleToDone() {
      this.done = !this.done
    }
  }
})
