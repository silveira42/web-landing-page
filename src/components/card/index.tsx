import { CardProps } from './cardProps';
import './styles.css';

export default function Card(props: CardProps) {
	function handleClick() {
		window.open(props.targetUrl, '_blank');
	}

	return (
		<div className='card-wrapper' onClick={handleClick}>
			<img
				className='card-image'
				src={process.env.PUBLIC_URL + props.imageSource}
				alt={props.imageAlt}
			/>
			<h2 className='card-title'>{props.title}</h2>
			<p className='card-description'>{props.description}</p>
		</div>
	);
}
