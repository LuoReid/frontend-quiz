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
}