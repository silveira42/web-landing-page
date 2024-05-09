import Header from 'components/header';
import './styles.css';
import Carousel from 'components/carousel';
import * as configJson from '../../data/config.json';
import { HomeProps } from './homeProps';
import english from 'config/dictionaries/english';
import portuguese from 'config/dictionaries/portuguese';
import { Config } from 'config/configType';

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

	const config = configJson as Config;

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
				{config.cardListsLanguages.map(cardListLanguage =>
					cardListLanguage.language === props.language
						? cardListLanguage.cardLists.map((cardList, index) => (
								<Carousel
									key={index}
									theme={props.theme}
									title={cardList.title}
									cardList={cardList.cards}
								/>
						  ))
						: null
				)}
			</div>
		</div>
	);
}
