import Card from 'components/card';
import { CarouselProps } from './carouselProps';
import './styles.css';

export default function Carousel(props: CarouselProps) {
	return (
		<div className='carousel-wrapper'>
			<div className='carousel-title-container'>
				<h1 className='carousel-title'>{props.title}</h1>
			</div>
			<div className='carousel-container'>
				{props.cardList.map((card, index) => (
					<Card
						key={index}
						title={card.title}
						imageSource={card.imageSource}
						imageAlt={card.imageAlt}
						description={card.description}
						targetUrl={card.targetUrl}
					/>
				))}
			</div>
		</div>
	);
}
