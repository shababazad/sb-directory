import { createProxyMiddleware } from 'http-proxy-middleware';
const proxy = createProxyMiddleware({
  target: 'https://cdn.pixabay.com', // replace with the domain of the image URL
  changeOrigin: true,
  pathRewrite: { '^/api': '' },
});
export default proxy;

//why is this errror coming?