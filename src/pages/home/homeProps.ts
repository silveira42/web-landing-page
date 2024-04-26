import { Language } from 'components/languageSelector/language';

export type HomeProps = {
	theme: string;
	onChangeTheme: () => void;
	language: string;
	onChangeLanguage: (language: Language) => void;
	languages: Language[];
};
