import LanguageSelector from 'components/languageSelector';
import { HeaderProps } from './headerProps';
import './styles.css';

export default function Header(props: HeaderProps) {
	return (
		<div className='header-wrapper' data-theme={props.theme}>
			<div className='header-bar'>
				<h1 className='header-title'>{props.title}</h1>
				<button
					onClick={props.onChangeTheme}
					className='header-color-theme-button'
				>
					{props.theme === 'light' ? 'Dark' : 'Light'} mode
				</button>
				<LanguageSelector
					onChangeLanguage={props.onChangeLanguage}
					languages={props.languages}
				/>
			</div>
			<div className='header-slogan-container'>
				<p className='header-slogan'>{props.slogan}</p>
			</div>
		</div>
	);
}
