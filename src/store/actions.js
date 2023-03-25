import axios from 'axios';

export default {
   loadData: async({commit})=>{
                
            try {
               
                const response = await axios.get('https://stock-trader-5fff6-default-rtdb.firebaseio.com/data.json');
                const data = response.data;
                if(data){
                    commit('setStocks',data.stocks);
                    commit('setPortfolio',{
                        funds: data.funds,
                        stockPortfolio: data.stockPortfolio
                    });
    
                }
            } catch (error) {
                console.error(error);
            }
           
       
    },

    saveData: async({commit, getters})=>{
        const { funds, stockPortfolio, stocks } = getters;
                
        try {
           
            const response = await axios.put('https://stock-trader-5fff6-default-rtdb.firebaseio.com/data.json', {funds, stockPortfolio, stocks });
            const data = response.data;
            if(data){
                commit('setStocks',data.stocks);
                commit('setPortfolio',{
                    funds: data.funds,
                    stockPortfolio: data.stockPortfolio
                });

            }
        } catch (error) {
            console.error(error);
        }
       
   
},

}