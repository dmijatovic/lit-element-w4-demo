import {LitElement, html} from 'lit-element'

import './AppHeader'
import './AppFooter'

class MyApp extends LitElement{
  render(){
    return html`
      <app-header></app-header>
      <main>
        <section>
          Here comes the main part
        </section>
      </main>
      <app-footer></app-footer>
    `
  }
}

customElements.define('my-app',MyApp)