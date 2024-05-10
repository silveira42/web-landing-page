import React from 'react';
import Header from 'components/header';
import './styles.css';
import Carousel from 'components/carousel';
import { HomeProps } from './homeProps';
import english from 'config/dictionaries/english';
import portuguese from 'config/dictionaries/portuguese';
import { Config } from 'config/configType';

async function loadConfig() {
	return await fetch('/data/config.json').then(res => res.json());
}

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

	const [config, setConfig] = React.useState<Config>({
		cardListsLanguages: [],
	});

	React.useEffect(() => {
		// loadConfig().then(setConfig) // just set config on load

		// wrap set config on function to reuse it
		const updateConfig = () => loadConfig().then(setConfig);

		// set config on load
		updateConfig();

		// reload config on return to page
		window.addEventListener('focus', updateConfig);

		// cleanup on unmount component
		return () => {
			// remove focus event listener on unmount component
			window.removeEventListener('focus', updateConfig);
		};
	}, []);

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
