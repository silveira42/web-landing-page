import { languageSelectorProps } from './languageSelectorProps';
import './styles.css';

export default function LanguageSelector(props: languageSelectorProps) {
	return (
		<div className='language-selector-wrapper'>
			{props.languages.map((language, index) => (
				<img
					className='language-selector-image'
					key={index}
					src={language.icon}
					alt={language.englishName}
					onClick={() => props.onChangeLanguage(language)}
				/>
			))}
		</div>
	);
}
