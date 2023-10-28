// plugins/vuetify.js
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

import { fa } from "vuetify/iconsets/fa";
import { mdi } from "vuetify/iconsets/mdi";
// make sure to also import the coresponding css
import "@mdi/font/css/materialdesignicons.css"; // Ensure you are using css-loader
import "@fortawesome/fontawesome-free/css/all.css";
import { md1 } from 'vuetify/blueprints'
import { VInfiniteScroll } from 'vuetify/labs/VInfiniteScroll'
export default defineNuxtPlugin((nuxtApp) => {
	const Vuetify = createVuetify({
		blueprint: md1,
		ssr: true,
		theme: {
			defaultTheme: 'darkSpringTheme',
			themes: {
				darkSpringTheme: {
					dark: true,
					colors: {
						primary: '#43A047',
						accent: '#424242',
						secondary: '#66BB6A',
						info: '#CDDC39',
						warning: '#FFC107',
						error: '#DD2C00',
						success: '#00B8D4',
					},
				},
			},
		},
		components,
		directives,
		icons: {
			defaultSet: "mdi",
			sets: {
				mdi,
				fa,
			},
		},
	});

	nuxtApp.vueApp.use(Vuetify);
});
