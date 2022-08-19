import '../scss/style.scss';

import { ua } from './lib/uaParser';

document.addEventListener('DOMContentLoaded', () => {
	// ブラウザ判定してbodyにクラス付与
	ua.init();
});
