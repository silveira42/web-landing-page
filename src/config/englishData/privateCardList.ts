import { Card } from 'components/card/card';

const englishPrivateCardList: Card[] = [
	{
		title: 'Tailscale',
		imageAlt: 'Tailscale logo',
		imageSourceDark: 'Tailscale-Logo-White-Cropped.png',
		imageSourceLight: 'Tailscale-Logo-White-Cropped.png',
		description: 'Personal VPN',
		targetUrl: 'https://login.tailscale.com/admin/machines?refreshed=true',
	},
	{
		title: 'Portainer',
		imageAlt: 'Portainer logo',
		imageSourceDark: 'portainer-ce-logo.svg',
		imageSourceLight: 'portainer-ce-logo.svg',
		description: 'View docker containers',
		targetUrl: 'https://silver-main:9443/#!/home',
	},
	{
		title: 'Grafana',
		imageAlt: 'Grafana logo',
		imageSourceDark: 'grafana_logo_icon_171048.png',
		imageSourceLight: 'grafana_logo_icon_171048.png',
		description: 'Monitoring tool',
		targetUrl:
			'http://silver-server-00:3000/d/rYdddlPWk/node-exporter-full?orgId=1&refresh=5s',
	},
	{
		title: 'Jefin',
		imageAlt: 'Jellyfin logo',
		imageSourceDark: 'cropped-Jellyfin-Icone-512x512-2.webp',
		imageSourceLight: 'cropped-Jellyfin-Icone-512x512-2.webp',
		description: 'Jefin, my personal Jellyfin server',
		targetUrl: 'https://jefin.thesilver.com.br/web/index.html#!/home.html',
	},
	{
		title: 'QBitTorrent',
		imageAlt: 'QBitTorrent logo',
		imageSourceDark: 'qbittorrent-icon-2048x2048.png',
		imageSourceLight: 'qbittorrent-icon-2048x2048.png',
		description: 'To populate Jefin',
		targetUrl: 'http://silver-docker-00:8080/',
	},
];

export default englishPrivateCardList;
