const hfjLang = new Vue({
	el: '#hfj-site',
	data: {
		lang: window.localStorage.lang || "ta"
	},
	methods: {
		setLang: function(lang) {
			window.localStorage.lang = lang;
			this.lang = lang;
		}
	}
})
