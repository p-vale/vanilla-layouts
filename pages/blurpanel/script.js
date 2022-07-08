const container = document.getElementById('container')

const mainImg = document.createElement('div')
mainImg.id = 'main-bg'
container.appendChild(mainImg)

const main = document.createElement('div')
main.id = 'main'

const title = document.createElement('p')
title.id = 'main-title'
title.innerHTML = 'BLURPAN'

const mainTxt = document.createElement('p')
mainTxt.id = 'main-subtitle'
mainTxt.innerHTML = 'This is an elegant blurred side panel.'

const privacy = document.createElement('p')
privacy.id = 'main-privacy'
privacy.innerHTML = 'PRIVACY POLICY'


main.appendChild(title)
main.appendChild(mainTxt)
main.appendChild(privacy)
container.appendChild(main)
