import { Language } from 'components/languageSelector/language';
import { Dictionary } from 'config/dictionaries/type';

export type HeaderProps = {
	title: string;
	slogan: string;
	theme: string;
	onChangeTheme: () => void;
	languages: Language[];
	onChangeLanguage: (language: Language) => void;
	dictionary: Dictionary;
};
