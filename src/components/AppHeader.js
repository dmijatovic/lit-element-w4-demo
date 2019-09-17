import {LitElement, html} from 'lit-element'

class AppHeader extends LitElement{
  render(){
    return html`
      <header>
        <h1>This is header</h1>
      </header>
    `
  }
}

customElements.define('app-header',AppHeader)