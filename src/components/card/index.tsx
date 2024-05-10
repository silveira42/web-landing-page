import { CardProps } from './cardProps';
import './styles.css';

export default function Card(props: CardProps) {
	return (
		<a
			className='card-link'
			href={props.card.targetUrl}
			rel='noopener noreferrer'
			target='_blank'
		>
			<div className='card-wrapper' data-theme={props.theme}>
				<img
					className='card-image'
					src={
						props.theme === 'dark'
							? process.env.PUBLIC_URL + props.card.imageSourceDark
							: process.env.PUBLIC_URL + props.card.imageSourceLight
					}
					alt={props.card.imageAlt}
				/>
				<h1 className='card-title'>{props.card.title}</h1>
				<p className='card-description'>{props.card.description}</p>
			</div>
		</a>
	);
}
