# Vue-vCard
vue-vcard is a simple package that helps to generate QRcode vCards also known as digital business cards.

## Installation
```bash
npm i vue-vcard
```

## Importing Globally
You can import this package as usual, here as an example the package is imported globally.

```vue
import Vue-vcard from 'vue-vcard; 
Vue.component('vue-vcard', Vue-vcard);
```

## Usage
```vue
  <vue-vcard 
    orgPost="00000" 
    orgStreet="Some Street" 
    orgRegion="Some Region" 
    orgCity="Some City" 
    orgCountry="LRK" 
    orgName="OrganizationName" 
    firstName="John" 
    lastName="Doe" 
    workPhone="5555555555"  
    homePhone="5555555555" 
    />
```

## Props
| Prop Name   | Type    | Description 
|------------|------------|-----------|
| firstName | String | (Required) First Name |
| lastName | String | (Required) Last Name |
| showQR | Boolean | Enable/Disable the QR Code display|
| size | Integer | Size of the Generate QR Code |
| birthday | String | Date of birth |
| gender | String | Gender |
| workPhone | String | Work Phone number |
| homePhone | String | Home phone number |
| workEmail | String | Work email |
| homeEmail | String | Home email |
| orgName | String | Organization name |
| orgTitle | String | Organization title |
| homeStreet | String | Home street |
| homeCity | String | Home city |
| homeRegion | String | Home region |
| homePost | String | Home postal Code |
| homeCountry | String | Home country |
| orgStreet | String | Organization street |
| orgCity | String | Organization city |
| orgRegion | String | Organization region |
| orgPost | String | Organization postal Code |
| orgCountry | String | Organization country |




* Make sure all required props are set.


## Events
| Event     | Description                                       |
| --------- | ------------------------------------------------- |
| QRString | Returns the QR code string |


\
\
Feel free to contribute to this project, thanks
