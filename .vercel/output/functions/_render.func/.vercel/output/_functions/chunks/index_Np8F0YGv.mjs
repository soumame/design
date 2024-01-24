export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('./pages/index_V1uy-iOY.mjs').then(n => n.i);

export { page };
