/* eslint-disable */
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import ImageSelector from './src/components/ImagePicker';

export default App = () => {

	useEffect(() => {
		SplashScreen.hide();
	}, []);
	
	return (
		<ImageSelector />
	)
}
