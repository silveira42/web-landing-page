import Header from 'components/header';
import './styles.css';
import Carousel from 'components/carousel';
import publicCardList from '../../config/publicCardList';
import privateCardList from '../../config/privateCardList';
import { HomeProps } from './homeProps';
import slogan from 'config/slogan';

export default function Home(props: HomeProps) {
	return (
		<div className='home-wrapper'>
			<Header
				title='TheSilverHub'
				slogan={
					props.language === 'English' ? slogan.english : slogan.portuguese
				}
				onChangeTheme={props.onChangeTheme}
				theme={props.theme}
				languages={props.languages}
				onChangeLanguage={props.onChangeLanguage}
			/>
			<Carousel
				theme={props.theme}
				title='Public Links'
				cardList={publicCardList}
			/>
			<Carousel
				theme={props.theme}
				title='Personal Apps'
				cardList={privateCardList}
			/>
		</div>
	);
}
