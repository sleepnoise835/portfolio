function renderGallery(containerId, categories) {
  fetch('/gallery.json')
    .then(res => res.json())
    .then(data => {
      const container = document.getElementById(containerId)

      data.images
        .filter(item => categories.includes(item.category))
        .forEach(item => {
          const card = document.createElement('div')
          card.className = 'card'

          const img = document.createElement('img')
          img.src = item.image
          img.alt = item.title

          const meta = document.createElement('div')
          meta.className = 'card-meta'
          meta.textContent = item.title

          card.appendChild(img)
          card.appendChild(meta)
          container.appendChild(card)
        })
    })
}
