

module.exports = function(config) {
	config.set({

		// base path, that will be used to resolve files and exclude
		basePath: '',


		// Continuous Integration mode
		// if true, it capture browsers, run tests and exit
		singleRun: false,


		// frameworks to use
		frameworks: ['jasmine'],


		// list of files / patterns to load in the browser
		files: [
			'./assets/js/test.js',
			'./node_modules/angular-mocks/angular-mocks.js',


			'./tests/*.test.js'
		],


		// list of preprocessors
		preprocessors: {
			'./assets/js/test.js': ['webpack'],
			'./tests/**/*.js': ['babel']
		},

		babelPreprocessor: {
			options: {
				presets: ['es2015'],
				sourceMap: 'inline'
			}
		},


		webpack: {
			context: __dirname,
			entry: {
				main: "./assets/js/test.js"
			},

			resolve: {
				modulesDirectories: [
					"node_modules",
					"bower_components"
				],
				extensions: ["", ".json", ".js", ".styl", '.html', '.jade']
			},

			output: {
				path: __dirname + "/assets",
				publicPath: "/",
				//filename: is_dev? "sector.js" : "[name]-[hash].js",
				filename: 'app-[chunkhash].js',
				//chunkFilename: is_dev ? "sector.js" : "[name]-[hash].js",
				library: 'SECTOR'
			},

			module:  {
				loaders:[
					/*{
						test: /[/]fonts[/]/,
						loader: 'file?name=[path][name]-[hash].[ext]'
					},*/
					{
						test: /\.js$/,
						exclude: /(node_modules|bower_components)/,
						loader: 'babel',
						query: {
					        presets: ['es2015'],
					        plugins: ['transform-es2015-modules-commonjs']
				      	}
					},
		//			?presets[]=es2015,plugins[]=transform-es2015-modules-commonjs
					{
						test: /\.html$/,
						loader: 'raw'
					},
					{
						test: /.(png|jpg|jpeg|gif|svg)$/,
						loader: 'url?name=[name]-[hash].[ext]&limit=4000'
						//loader: 'file?name=[path][name]-[hash].[ext]'
					},
					//{ test: /\.svg$/, loader: 'url?limit=65000&mimetype=image/svg+xml&name=assets/fonts/[name]-[hash].[ext]' },
					{ test: /\.woff$/, loader: 'url?limit=65000&mimetype=application/font-woff&name=assets/fonts/[name]-[hash].[ext]' },
					{ test: /\.woff2$/, loader: 'url?limit=65000&mimetype=application/font-woff2&name=assets/fonts/[name]-[hash].[ext]' },
					{ test: /\.[ot]tf$/, loader: 'url?limit=65000&mimetype=application/octet-stream&name=assets/fonts/[name]-[hash].[ext]' },
					{ test: /\.eot$/, loader: 'url?limit=65000&mimetype=application/vnd.ms-fontobject&name=assets/fonts/[name]-[hash].[ext]' }
				],
				noParse: /\.min\.js/
			},

			watch: true,
			watchOptions: {
				aggregateTimeout: 1000
			},

			//devtool: is_dev ? "inline-source-map" : "source-map",
			devtool: "source-map"


		},

		webpackServer: {
			noInfo: true //please don't spam the console when running in karma!
		},

		webpackMiddleware: {
			stats: {
				colors: true
			}
		},


		// test results reporter to use
		// possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
		//reporters: ['spec'],
		reporters: ['progress', 'html', 'dots'],

		htmlReporter: {
			outputDir: 'tests', // where to put the reports  
			templatePath: null, // set if you moved jasmine_template.html 
			focusOnFailures: true, // reports show failures on start 
			namedFiles: false, // name files instead of creating sub-directories 
			pageTitle: null, // page title for reports; browser info by default 
			urlFriendlyName: false, // simply replaces spaces with _ for files/dirs 
			reportName: 'report-unit-tests', // report summary filename; browser info by default 


			// experimental 
			preserveDescribeNesting: false, // folded suites stay folded  
			foldAll: false, // reports start folded (only with preserveDescribeNesting) 
		},


		// web server port
		port: 9876,


		// enable / disable colors in the output (reporters and logs)
		colors: true,


		// level of logging
		// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
		logLevel: config.LOG_INFO,


		// enable / disable watching file and executing tests whenever any file changes
		autoWatch: true,


		// Start these browsers, currently available:
		// - Chrome
		// - ChromeCanary
		// - Firefox
		// - Opera (has to be installed with `npm install karma-opera-launcher`)
		// - Safari (only Mac; has to be installed with `npm install karma-safari-launcher`)
		// - PhantomJS
		// - IE (only Windows; has to be installed with `npm install karma-ie-launcher`)
		//browsers: ['Chrome', 'Chrome_without_security'],
		//customLaunchers: {
		//	Chrome_without_security: {
		//		base: 'Chrome',
		//		flags: ['--disable-web-security']
		//	}
		//},
		browsers: ['Chrome'],


		// If browser does not capture in given timeout [ms], kill it
		captureTimeout: 90000,


		// List plugins explicitly, since autoloading karma-webpack
		// won't work here
		plugins: [
			require("karma-jasmine"),
			require("karma-webpack"),
			require("karma-chrome-launcher"),
			require('karma-babel-preprocessor'),
			require('karma-html-reporter')
		]
	});
};