// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    modules: ['nuxt-vuefire'],
   	vuefire: {
        // ensures the auth module is enabled
        auth: {
      	
            enabled: true,
			sessionCookie: true
        
        },
        // For Firebase JS SDK v7.20.0 and later, measurementId is optional
		config : {
			apiKey: "AIzaSyAxvPNNbc_ykgO2q_-Pg21eq3FOfbqRCCI",
  
			authDomain: "web3-shop-f55ec.firebaseapp.com",
  
			projectId: "web3-shop-f55ec",
  
			storageBucket: "web3-shop-f55ec.appspot.com",
  
			messagingSenderId: "265807226453",
  
			appId: "1:265807226453:web:6e045513314821294396dc",
  
			measurementId: "G-MKWT7MFTV7"

		}
  	},

    app:{
    
        head:{

            script:[

                {
                    src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js",

                    integrity: "sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz",

                    crossorigin: "anonymous",

                },

            ],

            link:[

                {

                    href:"https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css",

                    rel:"stylesheet",

                    integrity:"sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH",

                    crossorigin:"anonymous"

                },

            ]

        }
    },

    devtools: { enabled: true },

});
