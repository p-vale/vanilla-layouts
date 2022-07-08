const data = [
  {
      title : 'about',
      popup : ''
  },
  {
      title : 'services',
      popup : ''
  },
  {
      title : 'projects',
      popup : ''
  },
  {
      title : 'external',
      popup : ''
  },
  {
      title : 'contacts',
      popup : ''
  },
  {
      title : 'news',
      popup : ''
  }
]

const main = document.createElement('div')
main.id = 'main'

let box = document.createElement('div')
box.className = 'box-home background-a'
let logo = document.createElement('p')
logo.className = 'title-home'
logo.innerHTML = 'LOGO'
box.appendChild(logo)
main.appendChild(box)

for (let i = 0; i < data.length; i++) {
  let box = document.createElement('div')
  box.id = data[i].title
  if (i % 2 === 0) {
      box.className = 'box-home background-a'
  } else {
      box.className = 'box-home background-b'
  }

  let title = document.createElement('p')
  title.className = 'title-home'
  title.innerHTML = data[i].title

  box.appendChild(title)
  main.appendChild(box)
}

document.body.appendChild(main)
