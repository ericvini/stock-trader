import axios from 'axios';


const axiosPlugin = {
  install(app) {
    console.log('Plugin axiosPlugin instalado');
    app.config.globalProperties.$http = axios.create({
      baseURL: 'https://stock-trader-5fff6-default-rtdb.firebaseio.com/'
    });
  }
};



export default axiosPlugin;