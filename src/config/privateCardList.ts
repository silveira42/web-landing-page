import { Card } from 'components/card/card';

const privateCardList: Card[] = [
	{
		title: 'Tailscale',
		imageAlt: 'Logo do Tailscale',
		imageSourceDark: 'Tailscale-Logo-White-Cropped.png',
		imageSourceLight: 'Tailscale-Logo-White-Cropped.png',
		description: 'Personal VPN',
		targetUrl: 'https://login.tailscale.com/admin/machines?refreshed=true',
	},
	{
		title: 'Portainer',
		imageAlt: 'Logo do Portainer',
		imageSourceDark: 'portainer-ce-logo.svg',
		imageSourceLight: 'portainer-ce-logo.svg',
		description: 'View docker containers',
		targetUrl: 'https://192.168.15.189:9443/#!/home',
	},
	{
		title: 'Grafana',
		imageAlt: 'Logo do Grafana',
		imageSourceDark: 'grafana_logo_icon_171048.png',
		imageSourceLight: 'grafana_logo_icon_171048.png',
		description: 'Monitoring tool',
		targetUrl:
			'http://silver-server-00:3000/d/rYdddlPWk/node-exporter-full?orgId=1&refresh=1m',
	},
	{
		title: 'Jefin',
		imageAlt: 'Logo do Jellyfin',
		imageSourceDark: 'cropped-Jellyfin-Icone-512x512-2.webp',
		imageSourceLight: 'cropped-Jellyfin-Icone-512x512-2.webp',
		description: 'Jefin, my personal Jellyfin server',
		targetUrl: 'https://jefin.thesilver.com.br/web/index.html#!/home.html',
	},
	{
		title: 'QBitTorrent',
		imageAlt: 'Logo do QBitTorrent',
		imageSourceDark: 'qbittorrent-icon-2048x2048.png',
		imageSourceLight: 'qbittorrent-icon-2048x2048.png',
		description: 'To populate Jefin',
		targetUrl: 'http://silver-docker-00:8080/',
	},
];

export default privateCardList;
