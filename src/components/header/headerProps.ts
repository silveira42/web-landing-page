import { Language } from 'components/languageSelector/language';

export type HeaderProps = {
	title: string;
	slogan: string;
	theme: string;
	onChangeTheme: () => void;
	languages: Language[];
	onChangeLanguage: (language: Language) => void;
};
