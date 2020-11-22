class MiFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `Copyright &copy; Rivera Zavala Daniel`;
  }
}
customElements.define("mi-footer", MiFooter);
