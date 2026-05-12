# newbet

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Connect to Laravel during development
Start the Laravel API separately, then run the Vue app against it:
```bash
npm run dev
```

By default the Vue dev server proxies `/api` and `/uploads` to `http://localhost:8000`. If you deploy the frontend separately, set `VUE_APP_API_URL` to your Laravel base URL before building.

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
