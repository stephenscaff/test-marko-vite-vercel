/**
 * Prepare `.vercel/output` directory according to Build Output API v3.
 * Docs: https://vercel.com/docs/build-output-api/v3
 * 
 * NOTE: this is just a Node script that gets run after the Vite build,
 * but it would probably be more "proper" to move this code into a Vite
 * plugin or `@marko/vercel` package or something like that.
 */

import fs from 'fs';
import { dirname, join } from 'path';
import { nodeFileTrace } from '@vercel/nft';

// At this point the static files are already in-place from the Vite build.
const outputDir = '.vercel/output';
const staticDir = join(outputDir, 'static');

// Let's set up the SSR Serverless Function.
const funcDir = join(outputDir, 'functions/render.func');

// Copy files traces from `@vercel/nft`
fs.renameSync(join(staticDir, 'index.js'), 'ssr.js');
const nft = await nodeFileTrace(['index.js']);
for (const file of nft.fileList) {
    const destPath = join(funcDir, file);
    fs.mkdirSync(dirname(destPath), { recursive: true });
    fs.copyFileSync(file, destPath);
}

// This has been copied into the func dir at this point, so clean up
fs.unlinkSync('ssr.js');

// Create serverless function config file
const funcConfig = {
    runtime: 'nodejs14.x',
    handler: 'index.js',
    launcherType: 'Nodejs'
}
fs.writeFileSync(
  join(funcDir, ".vc-config.json"),
  JSON.stringify(funcConfig, null, 2)
);

// Create Build Output API v3 config file with routes
const outputConfig = {
    version: 3,
    routes: [
        { handle: 'filesystem' },
        { src: "/.*", dest: "/render" }
    ]
};
fs.writeFileSync(
  join(outputDir, "config.json"),
  JSON.stringify(outputConfig, null, 2)
);
