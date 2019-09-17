import {LitElement, html} from 'lit-element'

class AppFooter extends LitElement{
  render(){
    return html`
      <footer>
        <h1>This is footer</h1>
      </footer>
    `
  }
}

customElements.define('app-footer',AppFooter)