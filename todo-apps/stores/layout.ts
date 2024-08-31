export const useLayoutStore = defineStore('layoutStore', {
  state: () => ({
    done: false,
    form: false
  }),
  actions: {
    toggleToDone() {
      this.done = !this.done
    },
    toggleForm() {
      this.form = !this.form
    }
  }
})
