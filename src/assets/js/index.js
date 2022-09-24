import '../scss/style.scss';

import { ua } from './lib/uaParser';

document.addEventListener('DOMContentLoaded', () => {
	console.log('テスト');
	// ブラウザ判定してbodyにクラス付与
	ua.init();
});
