module.exports = {
	parser:'postcss-scss',
	plugins:{
    	autoprefixer: {browsers: ["cover 99.5%", "not dead"]},
    	cssnano: {zindex: false, reduceIdents: false},
    	'postcss-assets': {}
	}
};