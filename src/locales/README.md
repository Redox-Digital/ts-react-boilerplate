# i18n Management
This app handles language switch using the i18next framework (React version) :

 - The user can switch between the offered languages
 - The language selection is stored for future use
 - The default user's browser language is used if available. If not, the default language fallback will be `fr` 

## Add new languages

> We assume in this example that you want to add german translations to the project

 1. Add a new folder named with the [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) format of the language you want to add
 2. Copy the translation.json file from another language
 ````markdown
├── src
│   ├── locales
│   │   ├── de.json
````
 3. In `src/i18n.tsx`, import the new language translation file:
```javascript
import  translationFR  from  './locales/fr.json';
import  translationEN  from  './locales/en.json';
import  translationDE  from  './locales/de.json'; // NEW LINE
```

 5. In src/input/LanguageSelector.tsx, add the new language to the following array:
 ```javascript
 const lngs = {
	fr: { nativeName:  'Français' },
	en: { nativeName:  'English' },
	de: { nativeName:  'Deutsch' }, // NEW LINE
};
```
 7. Finally, just translate de different elements of translation.json in the new language and you're all set ! (see next chapter to understand the structure)
 
## Understanding the translation file
As you previously saw, all the translations are stored by language in the file `src/locales/*ISO639-1*.json`

> The JSON object structure is organised by components and nested components (from the "page component" to the data)

Exemple:
Imagine the following components structure:
```html
<PageComponent>
	<ChildComponent>
		<h1></h1> <!-- should display a title -->
		<ContactForm>
			<p></p> <!-- should display a form title -->
			<p></p> <!-- should display an error -->
		</ContactForm>
	</ChildComponent>
</PageComponent>
```
The `fr/translation.json` will then be like:
```json
{
	"PageComponent": {
		"ChildComponent": {
			"title": "Un titre à afficher"
			"ContactForm": {
				"formTitle": "Titre du formulaire",
				"emailErrorMessage": "L'email n'est pas valable"
			}
		}
	},
	// ... Other page components
}
```

> Note: The data structure and keys should be the same in all language, or it won't work

## Use translations in components
First you have to note that the translated values should be in a [function component](https://reactjs.org/docs/components-and-props.html#function-and-class-components) as  i18next is using [hooks](https://reactjs.org/docs/hooks-overview.html) to extract the translations.

 1. Import `useTranslation()` hooks in the component file
 ```javascript
 import { useTranslation } from 'react-i18next';
 ```
 
 2. Extract the `t` function from `useTranslation()`:
 ```javascript
 export default function ChildComponent() {
	const { t } = useTranslation();
	
	return (
		<h1></h1>
	);
}
```
 3. Use it in the render function to extract the value for the current language:
 ```javascript
 export default function ChildComponent() {
	const { t } = useTranslation();
	
	return (
		<h1>{t('PageComponent.ChildComponent.title')}</h1>
	);
}
```
  
If we refer to the previous example, the displayed title will be "Un titre à afficher" (If the user's language is french).