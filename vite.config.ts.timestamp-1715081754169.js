// vite.config.ts
import { defineConfig } from "vite";
import typescript from "@rollup/plugin-typescript";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import * as path from "path";
var vite_config_default = defineConfig(({ mode }) => {
  const name = "yea-canvas-editor";
  if (mode === "lib") {
    return {
      plugins: [
        cssInjectedByJsPlugin({
          styleId: `${name}-style`,
          topExecutionPriority: true
        }),
        {
          ...typescript({
            tsconfig: "./tsconfig.json",
            include: ["./src/editor/**"]
          }),
          apply: "build",
          declaration: true,
          declarationDir: "types/",
          rootDir: "/"
        }
      ],
      build: {
        lib: {
          name,
          fileName: name,
          entry: path.resolve("E:\\my\\my_test\\canvas-editor", "src/editor/index.ts")
        },
        rollupOptions: {
          output: {
            sourcemap: false
          }
        }
      }
    };
  }
  return {
    base: `/${name}/`,
    server: {
      host: "0.0.0.0"
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXHJcbmltcG9ydCB0eXBlc2NyaXB0IGZyb20gJ0Byb2xsdXAvcGx1Z2luLXR5cGVzY3JpcHQnXHJcbmltcG9ydCBjc3NJbmplY3RlZEJ5SnNQbHVnaW4gZnJvbSAndml0ZS1wbHVnaW4tY3NzLWluamVjdGVkLWJ5LWpzJ1xyXG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gJ3BhdGgnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoKHsgbW9kZSB9KSA9PiB7XHJcbiAgY29uc3QgbmFtZSA9ICd5ZWEtY2FudmFzLWVkaXRvcidcclxuICBpZiAobW9kZSA9PT0gJ2xpYicpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHBsdWdpbnM6IFtcclxuICAgICAgICBjc3NJbmplY3RlZEJ5SnNQbHVnaW4oe1xyXG4gICAgICAgICAgc3R5bGVJZDogYCR7bmFtZX0tc3R5bGVgLFxyXG4gICAgICAgICAgdG9wRXhlY3V0aW9uUHJpb3JpdHk6IHRydWVcclxuICAgICAgICB9KSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAuLi50eXBlc2NyaXB0KHtcclxuICAgICAgICAgICAgdHNjb25maWc6ICcuL3RzY29uZmlnLmpzb24nLFxyXG4gICAgICAgICAgICBpbmNsdWRlOiBbJy4vc3JjL2VkaXRvci8qKiddXHJcbiAgICAgICAgICB9KSxcclxuICAgICAgICAgIGFwcGx5OiAnYnVpbGQnLFxyXG4gICAgICAgICAgZGVjbGFyYXRpb246IHRydWUsXHJcbiAgICAgICAgICBkZWNsYXJhdGlvbkRpcjogJ3R5cGVzLycsXHJcbiAgICAgICAgICByb290RGlyOiAnLydcclxuICAgICAgICB9XHJcbiAgICAgIF0sXHJcbiAgICAgIGJ1aWxkOiB7XHJcbiAgICAgICAgbGliOiB7XHJcbiAgICAgICAgICBuYW1lLFxyXG4gICAgICAgICAgZmlsZU5hbWU6IG5hbWUsXHJcbiAgICAgICAgICBlbnRyeTogcGF0aC5yZXNvbHZlKFwiRTpcXFxcbXlcXFxcbXlfdGVzdFxcXFxjYW52YXMtZWRpdG9yXCIsICdzcmMvZWRpdG9yL2luZGV4LnRzJylcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJvbGx1cE9wdGlvbnM6IHtcclxuICAgICAgICAgIG91dHB1dDoge1xyXG4gICAgICAgICAgICBzb3VyY2VtYXA6IGZhbHNlXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiB7XHJcbiAgICBiYXNlOiBgLyR7bmFtZX0vYCxcclxuICAgIHNlcnZlcjoge1xyXG4gICAgICBob3N0OiAnMC4wLjAuMCdcclxuICAgIH1cclxuICB9XHJcbn0pXHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBQSxTQUFTLG9CQUFvQjtBQUM3QixPQUFPLGdCQUFnQjtBQUN2QixPQUFPLDJCQUEyQjtBQUNsQyxZQUFZLFVBQVU7QUFFdEIsSUFBTyxzQkFBUSxhQUFhLENBQUMsRUFBRSxLQUFLLE1BQU07QUFDeEMsUUFBTSxPQUFPO0FBQ2IsTUFBSSxTQUFTLE9BQU87QUFDbEIsV0FBTztBQUFBLE1BQ0wsU0FBUztBQUFBLFFBQ1Asc0JBQXNCO0FBQUEsVUFDcEIsU0FBUyxHQUFHO0FBQUEsVUFDWixzQkFBc0I7QUFBQSxRQUN4QixDQUFDO0FBQUEsUUFDRDtBQUFBLFVBQ0UsR0FBRyxXQUFXO0FBQUEsWUFDWixVQUFVO0FBQUEsWUFDVixTQUFTLENBQUMsaUJBQWlCO0FBQUEsVUFDN0IsQ0FBQztBQUFBLFVBQ0QsT0FBTztBQUFBLFVBQ1AsYUFBYTtBQUFBLFVBQ2IsZ0JBQWdCO0FBQUEsVUFDaEIsU0FBUztBQUFBLFFBQ1g7QUFBQSxNQUNGO0FBQUEsTUFDQSxPQUFPO0FBQUEsUUFDTCxLQUFLO0FBQUEsVUFDSDtBQUFBLFVBQ0EsVUFBVTtBQUFBLFVBQ1YsT0FBWSxhQUFRLGtDQUFrQyxxQkFBcUI7QUFBQSxRQUM3RTtBQUFBLFFBQ0EsZUFBZTtBQUFBLFVBQ2IsUUFBUTtBQUFBLFlBQ04sV0FBVztBQUFBLFVBQ2I7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0EsU0FBTztBQUFBLElBQ0wsTUFBTSxJQUFJO0FBQUEsSUFDVixRQUFRO0FBQUEsTUFDTixNQUFNO0FBQUEsSUFDUjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
