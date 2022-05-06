# Marko + Vite + Vercel 

A reduced Marko + Vite build to figure out Vercel deployments with this setup.


## 📦 Dependencies

- [marko](https://github.com/marko-js/marko) ([Docs](https://markojs.com/docs/getting-started/))
- [@marko/vite](https://github.com/marko-js/vite) ([Docs](https://markojs.com/docs/vite/))
- [@marko/express](https://markojs.com/docs/express/) ([Docs](https://markojs.com/docs/express/))
- [vite](https://github.com/vitejs/vite) ([Docs](https://vitejs.dev/))
- [express](https://github.com/expressjs/express)

<br/>

## 🤖 Commands

- 🧪 **Dev**: `npm run dev`
- 🏗️ **Build**: `npm run build` (Compiles to `dist` and builds a production-ready node server)
  -- **Build Client**: `npm run build:client` (Builds client side only)
  -- **Build Server**: `npm run build:server` (Builds server side only)
- 🏁 **Serve**: `npm run start` (Run the production server)

<br/>

## 🧭 Info 

This is a Marko project, bundled by Vite and served up by Express.

We're [the Marko team's office Marko Vite plugin, which is running in the default "[linked mode](https://markojs.com/docs/vite/#linked-mode)", using [Vite's SSR API](https://vitejs.dev/guide/ssr.html#setting-up-the-dev-server).

While Vercel now offers a config-free Vite option, the integration with Marko and SSR makes this a unique case.

To deploy this setup on Vercel, I'd imagine we have to use:
- Vercels File System API 
- Perhaps the [vite-plugin-ssr plugin](https://vite-plugin-ssr.com/vercel)

<br/>

## 📌 Other resources
- [Using Vite on Vercel](https://legacy.t3.gg/blog/posts/vite-vercel)
- [Marko Hacknews w/ Vite + Cloudflare](https://github.com/ryansolid/marko-hackernews ): Similar idea.

Let's figure out how to get it deployed on Vercel.


## Project Organization 

```
|--public
|--src
  |--components
  |--pages
  |--styles
  |--index.js // Routes
|--index.js // Dev / Prod server with Marko middleware
|--vite.config.js // Vite configuration with Marko-vite plugin
```
