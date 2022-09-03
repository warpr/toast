class toast_container extends HTMLElement {
    connectedCallback() {
        window.toast = this.toast.bind(this);
    }

    toast(level, message = '') {
        const el = document.createElement('toast-message');
        el.addEventListener('animationend', () => el.remove());
        el.classList.add(level);
        el.innerText = message;
        this.prepend(el);
        return el;
    }
}

customElements.define('toast-container', toast_container);
