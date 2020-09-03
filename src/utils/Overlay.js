class Overlay {
  constructor(id, canClose = true, callback = null) {
    const element = document.getElementById(id);

    if (canClose) {
      element.addEventListener('click', () => {
        if (callback)
          callback();
        else
          element.classList.remove('open');
      });
    }

    this.element = element;
  }

  open(content = null) {
    if (content) {
      const contentElement = this.element.querySelector('.content');
      contentElement.innerHTML = `<p>${content}</p>`;
    }
    
    this.element.classList.add('open');
  }

  close() {
    this.element.classList.remove('open');
  }
}

export default Overlay;
