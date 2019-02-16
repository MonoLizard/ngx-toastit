module.exports = {
	parser:'postcss-scss',
	plugins:{
    	autoprefixer: {},
    	cssnano: {zindex: false, reduceIdents: false},
    	'postcss-assets': {}
	}
};