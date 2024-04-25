import Header from 'components/header';
import './styles.css';
import Carousel from 'components/carousel';
import publicCardList from './publicCardList';
import privateCardList from './privateCardList';

export default function Home() {
	return (
		<div className='home-wrapper'>
			<Header />
			<Carousel title='Public' cardList={publicCardList} />
			<Carousel title='Personal Apps' cardList={privateCardList} />
		</div>
	);
}
