import { vi } from 'vitest';

// DOM 환경 설정
window.alert = vi.fn();
document.body.innerHTML = '<div id="root"></div>';

// 전역 객체 설정
global.window = window;
global.document = document;
global.navigator = navigator; 