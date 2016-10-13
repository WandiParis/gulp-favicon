const config = {
	masterPicture: 'web/img/favicon.png',
	dest: 'web/favicon',
	iconsPath: '/',
	design: {
		ios: {
			pictureAspect: 'noChange'
		},
		desktopBrowser: {},
		windows: {
			pictureAspect: 'noChange',
			backgroundColor: '#da532c',
			onConflict: 'override'
		},
		androidChrome: {
			pictureAspect: 'noChange',
			themeColor: '#ffffff',
			manifest: {
				name: '',
				display: 'browser',
				orientation: 'notSet',
				onConflict: 'override'
			}
		},
		safariPinnedTab: {
			pictureAspect: 'silhouette',
			themeColor: '#5bbad5'
		}
	},
	settings: {
		scalingAlgorithm: 'Mitchell',
		errorOnImageTooSmall: false
	},
	markupFile: 'favicon.json',
    templateFiles: 'app/Resources/views/base.html.twig',
    templateDest: 'app/Resources/views'
}

export default config
