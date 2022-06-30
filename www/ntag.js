
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

  setText(text) {
    this.element.innerText = text
    return this
  }

  attr(name, value) {
    this.element.setAttribute(name, value)
    return this
  }

  append(ntag = new nTag) {
    this.element.append(ntag.render())
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
    this.attr('href', href)
    return this
  }
}

class nH1 extends nTag {
  constructor() {
    super({
      element: { tagName: 'h1' },
      component: { name: 'h1' },
    })
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
    this.attr('src', src)
    return this
  }

  alt(alt) {
    this.attr('alt', alt)
    return this
  }
}

/// components ///

class nCenter extends nTag {
  constructor() {
    super({
      component: { name: 'center' },
    })

    this.setStyle('width', '')
    this.setStyle('margin', '0 auto')
  }
}

