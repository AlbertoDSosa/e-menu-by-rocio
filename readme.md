# Menu By Rocio

## Esquema de Objetos

### AppInfo (Información de la aplicación)
- title: `string`
- appType: `string`
- qrImg: `string`
- logoImg: `string`
- url: `string`
- version: `string`
- baseLanguage: `string`

### GeneralInfo (Información General)
- companyName: `string`
- logoImg: `string`
- qrImg: `string`
- url: `string`
- dataVersion: `string`
- baseLanguage: `string`
- appLanguages: `Array<string>`
- employees: `Array<string>`
- offers: `Array<string>`
- images: `string | Array<string>`

### Template (Plamtilla)
- id: `string`
- type: `string`
- icon: `string`
- images : `Array<string> | string`
- displayInfo: `Map<DisplayInfo>`

### AppType (Tipo de Aplicación)
- id: `string`
- displayInfo: `Map<DisplayInfo>`

### Offer (Oferta)
- id: `string`
- title: `string`
- img: `string`

### Employee (Empleado)
- id: `string`
- title: `string`
- img: `string`

### Image (Imagen)
- id: `string`
- title: `string`
- path: `string`

### Language (lenguaje)
- id: `string`
- title: `string`
- flagImg: `string`
- url: `string`
- qrImg: `string`

### DisplayInfo (Información para mostrar)
- title: `string`
- description: `string`
- slug: `string`

### Category (Categoría)
- id: `string`
- images: `string | Array<string>`
- displayInfo: `Map<DisplayInfo>`
- isSubcategory: `boolean`
- categoryParentId: `string`
- subCategories: `Array<string>`
- hasSubcategories: `boolean`
- isFinal: `boolean`
- isMain: `boolean`
- template: `string`
- pageCategoriesSiblings: `Array<string>`
- items: `Array<string>`
- show: `boolean`

### Item (Artículo)
- id: `string`
- type: `string`
- displayInfo: `map`
- hasVariants: `boolean`
- number: `string`
- images: `string | Array<string>`
- categoryid: `string`
- price: `string`
- show: `boolean`
- variants: `string`

### Variants
- id: `string`
- type: `string`
- displayInfo: `map`
- variants: `string | Array<string>`

### ItemVariant
- id: `string`
- title: `map`
- price: `string`
- show: `boolean`
