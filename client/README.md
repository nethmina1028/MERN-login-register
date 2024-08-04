# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



npm i react-router-dom axios 
npm i react-hot-toast








 jwt.sign({email: user.email, id: user._id, name: user.name },process.env.JWT_SECRET ,{},(err,token) =>{
                    if(err) throw err;
                    res.cookie('token',token).json(user)
                })