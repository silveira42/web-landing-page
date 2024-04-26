import { Card } from 'components/card/card';

const portuguesePrivateCardList: Card[] = [
	{
		title: 'Tailscale',
		imageAlt: 'Logo do Tailscale',
		imageSourceDark: 'Tailscale-Logo-White-Cropped.png',
		imageSourceLight: 'Tailscale-Logo-White-Cropped.png',
		description: 'VPN para uso pessoal',
		targetUrl: 'https://login.tailscale.com/admin/machines?refreshed=true',
	},
	{
		title: 'Portainer',
		imageAlt: 'Logo do Portainer',
		imageSourceDark: 'portainer-ce-logo.svg',
		imageSourceLight: 'portainer-ce-logo.svg',
		description: 'Visualizador de containers do Docker',
		targetUrl: 'https://silver-main:9443/#!/home',
	},
	{
		title: 'Grafana',
		imageAlt: 'Logo do Grafana',
		imageSourceDark: 'grafana_logo_icon_171048.png',
		imageSourceLight: 'grafana_logo_icon_171048.png',
		description: 'Ferramenta de monitoramento de servidores',
		targetUrl:
			'http://silver-server-00:3000/d/rYdddlPWk/node-exporter-full?orgId=1&refresh=5s',
	},
	{
		title: 'Jefin',
		imageAlt: 'Logo do Jellyfin',
		imageSourceDark: 'cropped-Jellyfin-Icone-512x512-2.webp',
		imageSourceLight: 'cropped-Jellyfin-Icone-512x512-2.webp',
		description: 'Jefin, meu servidor pessoal do Jellyfin',
		targetUrl: 'https://jefin.thesilver.com.br/web/index.html#!/home.html',
	},
	{
		title: 'QBitTorrent',
		imageAlt: 'Logo do QBitTorrent',
		imageSourceDark: 'qbittorrent-icon-2048x2048.png',
		imageSourceLight: 'qbittorrent-icon-2048x2048.png',
		description: 'Para popular o Jefin',
		targetUrl: 'http://silver-docker-00:8080/',
	},
];

export default portuguesePrivateCardList;
