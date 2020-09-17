import { Configuration, Tool, ExistingTheme } from 'react-native-photoeditorsdk';

import data from '../../assets/db/stickers';
import font from '../../assets/db/fonts';

const stickerPack = data.map(item => {
	return ({
		identifier: `example_sticker_category_${item.category}`,
		name: item.category,
		items: 
			item.sticker.map( it => {
				return {
					identifier: `example_sticker_${it.stickernum}${Math.floor(Math.random() * 3000)}`,
					name: it.stickernum,
					thumbnailURI: it.stickerLink,
					stickerURI: it.stickerLink,
				}
			})
	})
});
const fontsPack = font.map( item => {
	return ({
		identifier: item.fontnum,
		fontFamily: item.fontnum,
		fontWeight: '400',
		fontURI: item.fontLink, 
		format: 'ttf',
		provider: 'file'
	})
});

const Config  = () => {
    let configuration: Configuration = {
		tools: [Tool.FILTER, Tool.STICKER, Tool.TRIM, Tool.TRANSFORM, Tool.ADJUSTMENT, Tool.FOCUS, Tool.TEXT,],
		filter: {
			flattenCategories: true,
		},
    	sticker: {
        	personalStickers: true,
        	categories: stickerPack        
		  },
      	text: {
        	fonts: fontsPack
		},
		theme: ExistingTheme.LIGHT
    };
	return configuration
};

export default Config;