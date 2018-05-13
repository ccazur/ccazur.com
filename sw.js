importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "ccazur.com",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.13e753d11d1f491b4bff.js",
    "revision": "6ffe0e91260a1dc9514450b69335e284"
  },
  {
    "url": "/_nuxt/layouts/default.7add1b28b074385726d4.js",
    "revision": "450b15436ee1579056b2d609228df419"
  },
  {
    "url": "/_nuxt/manifest.f98e8775a8d0f5b1f1e2.js",
    "revision": "ec32d385842ccb6bb3c6c819c80d9fa6"
  },
  {
    "url": "/_nuxt/pages/contact.56a2fa2b902eafe6e5b9.js",
    "revision": "6d8f7af8dd2b3ec2981cc9c322f2d2ab"
  },
  {
    "url": "/_nuxt/pages/index.7af73b082d395b2db65c.js",
    "revision": "ab1dbc5fb230ec07deec09c8dbc3988b"
  },
  {
    "url": "/_nuxt/pages/legalnotice.292eb15cd7749dda3bb5.js",
    "revision": "77d4b4c16b1831da5838a8714e391ff3"
  },
  {
    "url": "/_nuxt/pages/services.8718b4b9a2c2841b0743.js",
    "revision": "9f001e1b139351d16efb7f2899c76db5"
  },
  {
    "url": "/_nuxt/vendor.9267420958a4017028a8.js",
    "revision": "21996d329c0482faa4fb320e7143b296"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

