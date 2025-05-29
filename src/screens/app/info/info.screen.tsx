//NATIVE
import { Linking, Pressable, View } from 'react-native';
//LAYOUTS
import { ScreenLayout } from '@shared/layouts/';
//UI
import { Paragraph } from '@shared/ui';
//STYLES
import style from './styles/style';
//ICONS
import { GitHubIcon, LinkedinIcon } from '@shared/icons';

const InfoScreen = () => {
	return (
		<ScreenLayout additionalClass={style.infoScreen}>
			<View style={style.about}>
				<Paragraph size={'large'} contentType={'primary'}>
					Created by Anton Oshurek
				</Paragraph>
				<View style={style.socialLinks}>
					<Pressable
						onPress={() => Linking.openURL('https://github.com/AntonOshurek')}
						style={style.link}
					>
						<GitHubIcon width={40} height={40} />
					</Pressable>
					<Pressable
						onPress={() => Linking.openURL('https://www.linkedin.com/in/anton-oshurek/')}
						style={style.link}
					>
						<LinkedinIcon width={40} height={40} />
					</Pressable>
				</View>
				<Pressable onPress={() => Linking.openURL('mailto:app.contact@oshurek.com')}>
					<Paragraph contentType={'primary'} size={'medium'}>
						app.contact@oshurek.com
					</Paragraph>
				</Pressable>
			</View>

			<View style={style.releaseInfo}>
				<Paragraph size={'small'} contentType={'secondary'}>
					App version - 0.9.0
				</Paragraph>
				<Paragraph size={'small'} contentType={'secondary'}>
					Release date - 22.05.2025
				</Paragraph>
			</View>
		</ScreenLayout>
	);
};

export default InfoScreen;
