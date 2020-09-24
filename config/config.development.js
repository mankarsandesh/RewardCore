const config = {  
    baseUrl: process.env.BASE_URL,  
    isMaintenance: process.env.MAINTENANCE_MODE,   
    rewardEvent: {
        url: `${process.env.BASE_URL}/event`
    },
    rewardCustomer: {
        url: `${process.env.BASE_URL}/customer`
    },
    rewardMedia: {
        url: `${process.env.BASE_URL}/media`
    }   
  };
  
  export default config;
  