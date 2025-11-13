# E-Commerce Product Feed – Core Schema v0.1

## 5 Required Fields

| Field | Type | Description |
|------|------|-----------|
| `@type` | `Product` | Fixed |
| `id` | `string` | Global SKU |
| `name` | `string` | Title |
| `image` | `URL` | Primary image |
| `offers` | `Offer[]` | At least one |

## Offer

| Field | Type |
|------|------|
| `@type` | `Offer` |
| `price` | `number` |
| `priceCurrency` | `USD` |
| `availability` | enum |

## Example

```json
{
  "@context": "https://w3c.org/ecom/context.jsonld",
  "@type": "Product",
  "id": "TSHIRT-BLUE-M",
  "name": "Organic Cotton T-Shirt - Blue, Medium",
  "image": "https://store.com/images/tshirt-blue-m.jpg",
  "offers": [{
    "@type": "Offer",
    "price": 24.99,
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock"
  }]
}
