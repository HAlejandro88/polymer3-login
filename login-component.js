import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-toast/paper-toast.js';

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
        #toast1 {
          --paper-toast-background-color: #BBAFAD;
          --paper-toast-color: white;
        }
        #toast2 {
          --paper-toast-background-color: red;
          --paper-toast-color: white;
        }
      </style>
      <paper-input label="Usuario" required auto-validate error-message="se necesita usuario" value="{{login.username}}" ></paper-input>
      <paper-input label="Contraseña" type="password" value="{{login.password}}" required auto-validate error-message="se necesita contraseña"></paper-input>
      <paper-button raised on-tap="entrar">Entrar</paper-button>
      <paper-toast id="toast1" text="Bienvenido {{login.username}}"></paper-toast>
      <paper-toast id="toast2" text="Usuario y/o contraseña incorrecto"></paper-toast>
    `;
  }
  static get properties() {
    return {
      login: {
        type: Object,
        value(){
          return {
            username: "",
            password: ""
          }
        },
      },
    };
  }
  
  entrar() {
    if(this.login.username === 'alejandro88' && this.login.password === '1234'){
      this.$.toast1.open();
      } else {
        this.$.toast2.open();//shadowRoot.querySelector('')
      }
      this.dispatchEvent(new CustomEvent("login-user",{
        bubbles:false,
        composed:false,
        detail: this.login
      }));
  }
}

window.customElements.define('login-component', LoginComponent);
