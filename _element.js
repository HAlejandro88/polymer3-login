import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `login-component`
 * 
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class LoginComponent extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'login-component',
      },
    };
  }
}

window.customElements.define('login-component', LoginComponent);
