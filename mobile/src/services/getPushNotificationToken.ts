import * as Notifications from 'expo-notifications';

export async function getPushNotificationToken(){
	const { granted } = await Notifications.getPermissionsAsync();

	if (!granted){
		await Notifications.requestPermissionAsync();
	}

	if (granted) {
		const pushToken = await Notifications.getPermissionsAsync();
		console.log('NOTIFICATION TOKEN =>', pushToken.data);

		return pushToken.data;
	}

}