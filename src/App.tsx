import './reset.css';
import './App.css';
import Home from './pages/home';
import useLocalStorage from 'util/useLocalStorage';
import { Language } from 'components/languageSelector/language';
import languages from 'config/languages';

export default function App() {
	const [theme, setTheme] = useLocalStorage('data-theme', 'dark');
	const [language, setLanguage] = useLocalStorage('data-language', 'English');

	function onChangeTheme() {
		setTheme(theme === 'light' ? 'dark' : 'light');
	}

	function onChangeLanguage(language: Language) {
		setLanguage(language.englishName);
	}

	return (
		<div className='App' data-theme={theme}>
			<Home
				language={language as string}
				languages={languages}
				onChangeLanguage={onChangeLanguage}
				theme={theme}
				onChangeTheme={onChangeTheme}
			/>
		</div>
	);
}
