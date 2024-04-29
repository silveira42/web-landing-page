import Header from 'components/header';
import './styles.css';
import Carousel from 'components/carousel';
import englishPublicCardList from '../../config/englishData/publicCardList';
import englishPrivateCardList from '../../config/englishData/privateCardList';
import { HomeProps } from './homeProps';
import english from 'config/dictionaries/english';
import portuguese from 'config/dictionaries/portuguese';
import portuguesePrivateCardList from 'config/portugueseData/privateCardList';
import portuguesePublicCardList from 'config/portugueseData/publicCardList';

export default function Home(props: HomeProps) {
	let dictionary;

	switch (props.language) {
		case 'English':
			dictionary = english;
			break;

		case 'Portuguese':
			dictionary = portuguese;
			break;

		default:
			dictionary = english;
			break;
	}

	let privateCardList;
	let publicCardList;

	switch (props.language) {
		case 'English':
			privateCardList = englishPrivateCardList;
			publicCardList = englishPublicCardList;
			break;

		case 'Portuguese':
			privateCardList = portuguesePrivateCardList;
			publicCardList = portuguesePublicCardList;
			break;

		default:
			privateCardList = englishPrivateCardList;
			publicCardList = englishPublicCardList;
			break;
	}

	return (
		<div className='home-wrapper'>
			<div className='home-container'>
				<Header
					title={dictionary.title}
					slogan={dictionary.slogan}
					onChangeTheme={props.onChangeTheme}
					theme={props.theme}
					languages={props.languages}
					onChangeLanguage={props.onChangeLanguage}
					dictionary={dictionary}
				/>
			</div>
			<div className='home-container'>
				<Carousel
					theme={props.theme}
					title={dictionary.publicLists}
					cardList={publicCardList}
				/>
				<Carousel
					theme={props.theme}
					title={dictionary.personalApps}
					cardList={privateCardList}
				/>
			</div>
		</div>
	);
}
