class cat {
  constructor(name = '', url = '', clicks = 0) {
    this.name = name;
    this.url = url;
    this.clicks = clicks;
  }

  toString() {
    return `(${this.name},${this.url},${this.clicks})`;
  }

  click() {
    this.clicks++;
  }

  show(e) {
    e.innerHTML = '';
    const figcaption = document.createElement('figcaption');
    figcaption.textContent = `${this.name} : ${this.clicks}`;
    const img = document.createElement('img');
    img.src = this.url;
    img.alt = this.name;
    const figure = document.createElement('figure');
    figure.appendChild(figcaption);
    figure.appendChild(img);
    e.appendChild(figure);
  }
}