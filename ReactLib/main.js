import r2wc from "@r2wc/react-to-web-component"
import Hello from './Hello'
import Counter from './Counter'

customElements.define("wc-hello", r2wc(Hello))
customElements.define("wc-counter", r2wc(Counter, {
  props: { "value": "string" },
  events: { "onchange": { } }
}))