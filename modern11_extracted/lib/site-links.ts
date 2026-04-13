export const WHATSAPP_NUMBER = '9647507798265'
export const SHOP_MAP_LINK = 'https://www.google.com/maps/search/?api=1&query=Modern+Perde+Duhok+Iraq'

export function buildWhatsAppLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export function buildProductWhatsAppLink(details: {
  name: string
  material: string
  price: string
  category?: string
  image?: string
  pagePath?: string
}) {
  const lines = [
    'Hello Modern Perde,',
    'I want more details about this item.',
    `Product: ${details.name}`,
    `Fabric: ${details.material}`,
    `Price: ${details.price}`,
  ]

  if (details.category) lines.push(`Category: ${details.category}`)
  if (details.pagePath) lines.push(`Page: ${details.pagePath}`)
  if (details.image) {
    lines.push('')
    lines.push(details.image)
  }

  return buildWhatsAppLink(lines.join('\n'))
}

export const socialLinks = {
  whatsapp: buildWhatsAppLink('Hello Modern Perde, I want more information about your curtains.'),
  map: SHOP_MAP_LINK,
  instagram: '#',
  facebook: '#',
  tiktok: '#',
}
