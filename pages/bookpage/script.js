const container = document.getElementById('container')

const page = document.createElement('div')
page.id = 'page'

// metadata header
const meta = document.createElement('div')
meta.id = 'meta'

const goBack = document.createElement('p')
goBack.className = 'meta--txt'
goBack.innerHTML = 'go Back'

const info = document.createElement('div')
info.id = 'meta--info'

const today = new Date()
const date = document.createElement('p')
date.className = 'meta--txt'
date.innerHTML = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`

const category = document.createElement('p')
category.className = 'meta--txt'
category.innerHTML = 'category'

info.appendChild(date)
info.appendChild(category)
meta.appendChild(goBack)
meta.appendChild(info)

// content
const content = document.createElement('div')
content.id = 'content'

const imageBox = document.createElement('div')
imageBox.id = 'content--image-box'

//post
const post = document.createElement('div')
post.id = 'content--post'

const title = document.createElement('h1')
title.id = 'content--post--title'
title.innerHTML = 'This is a title'

const subTitle = document.createElement('p')
subTitle.id = 'content--post--subtitle'
subTitle.role = 'doc-subtitle'
subTitle.innerHTML = 'This is a subtitle'

const article = document.createElement('article')
article.id = 'content--post--article'
article.innerHTML = 'Mauris interdum laoreet justo et varius. Vivamus in luctus dui. Nullam sit amet ornare arcu. Morbi mattis massa vitae eleifend egestas. Proin ornare dapibus purus nec scelerisque. Vestibulum sodales luctus pretium. Fusce fringilla purus a nulla hendrerit imperdiet. Pellentesque fringilla a diam ut auctor. Sed pharetra, nisi sit amet finibus aliquet, tellus dui congue leo, at ullamcorper ipsum ante quis lacus. Donec eu sagittis libero, in viverra nulla. Integer consequat justo ut est sollicitudin, et mattis felis volutpat. Duis id fringilla libero. Phasellus vitae porttitor mauris. Phasellus sodales et tortor accumsan blandit. Quisque nec mi consectetur, convallis felis vitae, sollicitudin ligula. Phasellus elementum nunc purus, eu iaculis diam euismod sit amet. Vestibulum sed venenatis enim, et auctor lacus. Cras ac nibh placerat, egestas odio vitae, efficitur orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed lorem elementum leo luctus posuere. Pellentesque vitae egestas risus. Ut porttitor, sem finibus fermentum porttitor, metus tellus ultricies libero, nec viverra risus eros ac felis. Morbi vitae eros quis neque ullamcorper interdum. Pellentesque non commodo eros. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris interdum laoreet justo et varius. Vivamus in luctus dui. Nullam sit amet ornare arcu. Morbi mattis massa vitae eleifend egestas. Proin ornare dapibus purus nec scelerisque. Vestibulum sodales luctus pretium. Fusce fringilla purus a nulla hendrerit imperdiet. Pellentesque fringilla a diam ut auctor. Sed pharetra, nisi sit amet finibus aliquet, tellus dui congue leo, at ullamcorper ipsum ante quis lacus. Donec eu sagittis libero, in viverra nulla. Integer consequat justo ut est sollicitudin, et mattis felis volutpat. Duis id fringilla libero. Phasellus vitae porttitor mauris. Phasellus sodales et tortor accumsan blandit. Quisque nec mi consectetur, convallis felis vitae, sollicitudin ligula. Phasellus elementum nunc purus, eu iaculis diam euismod sit amet. Vestibulum sed venenatis enim, et auctor lacus. Cras ac nibh placerat, egestas odio vitae, efficitur orci. Praesent pulvinar est et cursus ullamcorper. Integer viverra sagittis erat sed condimentum. Nulla sem massa, porttitor ut orci ut, gravida pulvinar lacus. Cras elementum justo augue, sed dapibus libero auctor at. Donec interdum, odio vitae dapibus tempor, lacus nisi ultrices lacus, quis feugiat justo justo ut justo. Nam id ipsum vitae nisl eleifend commodo. In venenatis, diam ac ornare dictum, quam lorem tempor mi, eu venenatis nulla justo non lacus. Nulla nec justo non nibh maximus rhoncus. Donec venenatis molestie diam, sed scelerisque odio dignissim sit amet. Fusce pretium tincidunt erat, nec mattis lorem. Pellentesque vitae lacus pharetra, venenatis nisi dignissim, congue mi. Integer eget risus mauris. Integer tortor risus, sodales nec feugiat sit amet, pellentesque eget tortor. Donec at dolor risus. Ut vel dolor sed elit porta sodales. Etiam non dui at neque sollicitudin blandit. Donec nunc tortor, commodo vel lacus a, suscipit maximus neque. Cras vehicula ipsum vel lectus tempus, at pharetra turpis semper. Vestibulum vitae tellus non nibh pharetra ullamcorper nec venenatis ante. Vestibulum posuere magna magna, ut facilisis elit imperdiet sed.'

post.appendChild(title)
post.appendChild(subTitle)
post.appendChild(article)

content.appendChild(imageBox)
content.appendChild(post)

page.appendChild(meta)
page.appendChild(content)

container.appendChild(page)