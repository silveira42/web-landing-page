import { CardProps } from 'components/card/cardProps';

const privateCardList: CardProps[] = [
	{
		title: 'Tailscale',
		imageAlt: 'Logo do Tailscale',
		imageSource: 'Tailscale-Logo-Black-Cropped.png',
		description: 'Personal VPN',
		targetUrl: 'https://login.tailscale.com/admin/machines?refreshed=true',
	},
	{
		title: 'Portainer',
		imageAlt: 'Logo do Portainer',
		imageSource: 'portainer-ce-logo.svg',
		description: 'View docker containers',
		targetUrl: 'https://192.168.15.189:9443/#!/home',
	},
	{
		title: 'Grafana',
		imageAlt: 'Logo do Grafana',
		imageSource: 'grafana_logo_icon_171048.png',
		description: 'Monitoring tool',
		targetUrl:
			'http://silver-server-00:3000/d/rYdddlPWk/node-exporter-full?orgId=1&refresh=1m',
	},
	{
		title: 'Jefin',
		imageAlt: 'Logo do Jellyfin',
		imageSource: 'cropped-Jellyfin-Icone-512x512-2.webp',
		description: 'Jefin, my personal Jellyfin server',
		targetUrl: 'https://jefin.thesilver.com.br/web/index.html#!/home.html',
	},
	{
		title: 'QBitTorrent',
		imageAlt: 'Logo do QBitTorrent',
		imageSource: 'qbittorrent-icon-2048x2048.png',
		description: 'To populate Jefin',
		targetUrl: 'http://silver-docker-00:8080/',
	},
];

export default privateCardList;
