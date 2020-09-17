 /* eslint-disable */
import React, { Component } from 'react';
import ImagePicker from 'react-native-image-picker';
import Modal from 'react-native-modal';
import { PESDK } from 'react-native-photoeditorsdk';
import {
	SafeAreaView,
	StyleSheet,
	View,
	Image,
	Dimensions,
	TouchableOpacity,
	ImageBackground,
	ActivityIndicator,
	Text,
	Button
} from 'react-native';
import Config from './PhotoEditor';

const options = {
	title: 'Select Avatar',
	storageOptions: {
		skipBackup: true,
		path: 'images',
	},
};
export default class ImageSelector extends Component {
	constructor(props) {
		super(props)
		this.state = {
			filepath: {
				uri: ''
			},
			fileUri: '',
			isLoading: false,
			errorMessage: '',
			toggleError: false
		}
	}

	launchCamera = () => {
		this.setState({isLoading: true});
		ImagePicker.launchCamera(options, (response) => {
			if (response.didCancel) {
				this.setState({isLoading: false})
			} else if (response.error) {
				this.setState({
					toggleError: !this.state.toggleError,
					errorMessage: response.error
				});
			} else {
				this.setState({
					filePath: response,
					fileUri: response.uri,
					isLoading: false
				});
				PESDK.unlockWithLicense(require('../../assets/pesdk_license'));
				PESDK.openEditor({uri: this.state.fileUri}, Config());
			}
		});
	};

	launchImageLibrary = () => {
		this.setState({isLoading: true});
		ImagePicker.launchImageLibrary(options, (response) => {
			if (response.didCancel) {
				this.setState({isLoading: false})
			} else if (response.error) {
				this.setState({
					toggleError: !this.state.toggleError,
					errorMessage: response.error
				});
			} else {
				this.setState({
					filePath: response,
					fileUri: response.uri,
					isLoading: false	
				});
				PESDK.unlockWithLicense(require('../../assets/pesdk_license'));
				PESDK.openEditor({uri: this.state.fileUri}, Config());
			}
		});
	};

	onError = () => {
		this.setState({toggleError: !this.state.toggleError})
	}

	render() {
		return (
				<SafeAreaView>
					<ImageBackground 
						style={styles.body} 
						source={require('../../assets/splash1.jpg')} 
						resizeMode='stretch' >
						{ this.state.isLoading ? 
						<ActivityIndicator style={styles.loader} size="large" color="#EE82EE"/> 
						: <View style={styles.btnParentSection}>
							<TouchableOpacity onPress={this.launchCamera} style={styles.btnSection}  >
								<Image style={styles.btnIcon} source={require('../../assets/start_btn_shoot2_off.png')}/>
							</TouchableOpacity>

							<TouchableOpacity onPress={this.launchImageLibrary} style={styles.btnSection}  >
								<Image style={styles.btnIcon} source={require('../../assets/start_btn_gallery2_off.png')}/>
							</TouchableOpacity>
						</View> }
						<Modal isVisible={this.state.toggleError}>
							<View>
								<Text style={styles.modalText}>{this.state.errorMessage}, please reload app!</Text>
								<Button onPress={this.onError} title='Okay!'/>
							</View>
						</Modal>
					</ImageBackground>
				</SafeAreaView>
		)
	}
};

const styles = StyleSheet.create({
	body: {
		height: Dimensions.get('screen').height - 80,
		width: Dimensions.get('screen').width,
	},

	btnParentSection: {
 		position: "absolute",
		bottom: 0,
		flexDirection: 'row',
		backgroundColor: '#fff',
	},
	btnSection: {
		flex: 1,
		alignItems: 'center',
		paddingTop: 5,
		paddingBottom: 5
	},
	btnIcon: {
		width: 100,
		height: 100
	},
	loader: {
		flex: 1,
	},
	modalText: {
		textAlign: 'center',
		marginBottom: 'auto',
		marginTop: 'auto',
		color: '#800000',
		marginBottom: 30,
		paddingVertical: 10,
	},
});
