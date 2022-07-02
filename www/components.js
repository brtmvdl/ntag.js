
class nCenter extends nTag {
  constructor() {
    super({
      component: { name: 'center' },
    })

    this.setStyle('width', '60rem')
    this.setStyle('margin', '0 auto')
  }
}

class nFakeLink extends nTag {
  constructor() {
    super({
      component: { name: 'fake-link' },
    })

    this.on('mouseover', () => {
      this.setStyle('text-decoration', 'underline')
    })

    this.on('mouseleave', () => {
      this.setStyle('text-decoration', 'none')
    })

    this.setStyle('cursor', 'pointer')
  }
}

class nFlex extends nTag {
  constructor() {
    super({
      component: { name: 'flex' },
    })

    this.setStyle('display', 'flex')
    this.setStyle('justify-content', 'space-between')
  }

  append(ntag = new nTag) {
    ntag.addClassInContainer('ct-in-flex')
    ntag.addClass('el-in-flex')
    super.append(ntag)
  }
}

class nIcon extends nTag {
  constructor() {
    super({
      component: { name: 'icon' },
    })
  }

  image(value) {
    this.setAttribute('background-image', value)
    return this
  }

  size(value) {
    this.setAttribute('background-size', value)
    return this
  }
}
