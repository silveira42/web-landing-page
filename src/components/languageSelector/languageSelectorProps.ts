import { Language } from './language';

export type languageSelectorProps = {
	languages: Language[];
	onChangeLanguage: (language: Language) => void;
};
