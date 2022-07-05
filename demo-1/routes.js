const path = require('path');

export function getRoutes(themeDir = __dirname) {
  return [
    {
      name: 'home',
      path: '/',
      component: path.resolve(themeDir, 'pages/Home.vue'),
    },
    {
      name: 'product',
      path: '/p/:id/:slug/',
      component: path.resolve(themeDir, 'pages/Product.vue'),
    },
    {
      name: 'category',
      path: '/c/:slug_1/:slug_2?/:slug_3?/:slug_4?/:slug_5?',
      component: path.resolve(themeDir, 'pages/Category.vue'),
    },
    {
      name: 'cart',
      path: '/cart',
      component: path.resolve(themeDir, 'pages/Cart.vue'),
    },
    {
      name: 'checkout',
      path: '/checkout',
      component: path.resolve(themeDir, 'pages/Checkout.vue'),
      children: [
        {
          path: 'shipping',
          name: 'shipping',
          component: path.resolve(themeDir, 'pages/Checkout/Shipping.vue'),
        },
        {
          path: 'billing',
          name: 'billing',
          component: path.resolve(themeDir, 'pages/Checkout/Billing.vue'),
        },
        {
          path: 'payment',
          name: 'payment',
          component: path.resolve(themeDir, 'pages/Checkout/Payment.vue'),
        },
        {
          path: 'thank-you',
          name: 'thank-you',
          component: path.resolve(themeDir, 'pages/Checkout/ThankYou.vue'),
        },
      ],
    },
    {
      name: 'my-profile',
      path: '/my-account',
      component: path.resolve(themeDir, 'pages/MyAccount/MyProfile.vue'),
    },
    {
      name: 'order-history',
      path: '/order-history',
      component: path.resolve(themeDir, 'pages/MyAccount/OrderHistory.vue'),
    }
  ];
}
