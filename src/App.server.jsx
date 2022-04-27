import renderHydrogen from '@shopify/hydrogen/entry-server';
import { Router, FileRoutes, ShopifyProvider } from '@shopify/hydrogen';
import { Suspense } from 'react';
import shopifyConfig from '../shopify.config';
import Header from './components/header';
import Footer from './components/footer';

function App({ routes }) {
  return (
    <Suspense fallback={null}>
      <ShopifyProvider shopifyConfig={shopifyConfig}>
        <Header />
        <main>
          <div className="container">
            <Router>
              <FileRoutes routes={routes} />
            </Router>
          </div>
        </main>
        <Footer />
      </ShopifyProvider>
    </Suspense>
  );
}

const routes = import.meta.globEager('./routes/**/*.server.[jt](s|sx)');

export default renderHydrogen(App, {
  routes,
  shopifyConfig,
});
