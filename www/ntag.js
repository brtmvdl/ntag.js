
class nTag {
  container = document.createElement('div')
  element = document.createElement('div')

  options = {
    container: {
      tagName: null,
    },
    element: {
      tagName: null,
    },
    component: {
      name: null,
    }
  }

  constructor(options = {}) {
    this.options = {
      ...this.options,
      ...options,
    }

    this.setup()
  }

  setup() {
    if (this.options.element.tagName) {
      this.element = document.createElement(this.options.element.tagName)
    }

    if (this.options.container.tagName) {
      this.container = document.createElement(this.options.container.tagName)
    }

    if (this.options.component.name) {
      this.element.classList.add(`el-${this.options.component.name}`)
      this.container.classList.add(`ct-${this.options.component.name}`)
    }
  }

  static fromElement(element = document.createElement('')) {
    const ntag = new nTag()
    ntag.element = element
    return ntag
  }

  static fromId(id = '') {
    return nTag.fromElement(document.getElementById(id))
  }

  setStyle(name, value) {
    this.element.style[name] = value
    return this
  }

  setStyleInContainer(name, value) {
    this.container.style[name] = value
    return this
  }

  setText(text) {
    this.element.innerText = text
    return this
  }

  setTextInContainer(text) {
    this.container.innerText = text
    return this
  }

  setAttribute(name, value) {
    this.element.setAttribute(name, value)
    return this
  }

  setAttributeInContainer(name, value) {
    this.container.setAttribute(name, value)
    return this
  }

  on(name, value) {
    this.element.addEventListener(name, value)
    return this
  }

  onContainer(name, value) {
    this.container.addEventListener(name, value)
    return this
  }

  append(ntag = new nTag) {
    this.element.append(ntag.render())
    return this
  }

  appendInContainer(ntag = new nTag) {
    this.container.append(ntag.render())
    return this
  }

  addClass(name) {
    this.element.classList.add(name)
    return this
  }

  addClassInContainer(name) {
    this.container.classList.add(name)
    return this
  }

  render() {
    this.container.append(this.element)
    return this.container
  }
}

class nInput extends nTag {
  constructor() {
    super({
      element: { tagName: 'input' },
      component: { name: 'input' }
    })
  }
}

class nButton extends nTag {
  constructor() {
    super({
      element: { tagName: 'button' },
      component: { name: 'button' }
    })
  }
}

class nAnchor extends nTag {
  constructor() {
    super({
      element: { tagName: 'a' },
      component: { name: 'anchor' }
    })
  }

  href(href) {
    this.setAttribute('href', href)
    return this
  }
}

class nLink extends nAnchor {}

class nH1 extends nTag {
  constructor() {
    super({
      element: { tagName: 'h1' },
      component: { name: 'h1' },
    })

    this.setStyle('margin', '0')
    this.setStyle('font-size', '3rem')
  }
}

class nImage extends nTag {
  constructor() {
    super({
      element: { tagName: 'img' },
      component: { name: 'image' },
    })

    this.src()
    this.alt()
  }

  src(src) {
    this.setAttribute('src', src)
    return this
  }

  alt(alt) {
    this.setAttribute('alt', alt)
    return this
  }
}