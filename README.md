
## Demo

Look for my code in the live demo.

https://moviedn.netlify.app/
## API Reference

#### Get all items
##### Popular On DB Page API
```http
  GET  https://imdb-top-100-movies.p.rapidapi.com/
```

##### Top rated Page API
```http
  GET  https://api.themoviedb.org/3/movie/top_rated?page=`pageIndex`
```

##### Top rated single page trailer
```http
  GET https://api.themoviedb.org/3/movie/{movie_id}/videos
```



## Deployment

To deploy this project run

```bash
  npm run dev
```



# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
