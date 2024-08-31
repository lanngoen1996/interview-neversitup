export const useLayoutStore = defineStore('layoutStore', {
  state: () => ({
    visible: false
  }),
  actions: {
    toggle() {
      this.visible = !this.visible
    }
  }
})
