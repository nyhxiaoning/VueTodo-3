<script>
  export default {
    name: 'Tab',
    props: {
      index: {
        type: [Number, String],
        required: true
      },
      label: {
        type: String,
        default: 'tab'
      }
    },
    mounted() {
      this.$parent.panes.push(this)
    },
    computed: {
      active() {
        return this.$parent.value === this.index;
      }
    },
    methods: {
      handleClick() {
        this.$parent.onChange(this.index);
      }
    },
    render () {
      let tab = this.$slots.label || <span>{ this.label }</span>
      const classNames = {
        tab: true,
        active: this.active
      }
      return (
        <li class={classNames} on-click={this.handleClick}>
          { tab }
        </li>
      )
    }
  }
</script>

<style lang="stylus" scoped>
.tab
  display: inline-block
  list-style none
  line-height 40px
  margin-right 30px
  position relative
  bottom -2px
  cursor pointer
  &.active
    border-bottom 2px solid #dc3023
    color:#dc3023
  &:last-child
    margin-right 0
</style>
