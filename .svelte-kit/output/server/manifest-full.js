export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "fabiosuarez-fadasgo.github.io/_app",
	assets: new Set(["FDSG_CV.pdf","email.png","favicon.png","github.png","imagen1.jpg","imagen2.jpg","linkedin.png"]),
	mimeTypes: {".pdf":"application/pdf",".png":"image/png",".jpg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.BXN3jFyc.js","app":"_app/immutable/entry/app.JVGfb72y.js","imports":["_app/immutable/entry/start.BXN3jFyc.js","_app/immutable/chunks/entry.sIhivsZK.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/paths.CuZ0-mZc.js","_app/immutable/entry/app.JVGfb72y.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.D0x9ntLW.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: __memo(() => import('./entries/endpoints/_server.ts.js'))
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
