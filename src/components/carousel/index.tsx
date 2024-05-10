import Card from 'components/card';
import { CarouselProps } from './carouselProps';
import './styles.css';

export default function Carousel(props: CarouselProps) {
	return (
		<div className='carousel-wrapper' data-theme={props.theme}>
			<div className='carousel-title-container'>
				<h1 className='carousel-title'>{props.title}</h1>
			</div>
			<div className='carousel-container'>
				{props.cardList.map((card, index) => (
					<Card key={index} theme={props.theme} card={card} />
				))}
			</div>
		</div>
	);
}
