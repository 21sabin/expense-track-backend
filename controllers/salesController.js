const router = require('express').Router();
const httpResponse = require("../httpResponse/response");
const SalesService = require('../services/salesService');
const salesService = new SalesService();

let  limit =10 ;
router.post('/', async ( request , response )=>{
    try{
        const sales = await salesService.addSales( request.body );
        httpResponse.success(response, { data:sales});
    }catch(error){
        httpResponse.error(response, error);
    }
});

router.get('/pageSize',async ( request , response )=>{
    try{
        const sales = await salesService.fetchAllSales();
        console.log(sales)
        httpResponse.success(response, { pages: Math.ceil(sales.length/limit )});
    }catch(error){
        httpResponse.error(response, error);
    }
});

router.get('/',async ( request , response )=>{
    try{
        const sales = await salesService.fetchAllSales();
        httpResponse.success(response, {data:sales});
    }catch(error){
        httpResponse.error(response, error);
    }
});

router.get('/:page', async ( request , response )=>{
    const page = request.params.page;
    let offset = 0;
    try{
        const salesDetail = await salesService.fetchAllSales();
        let pageSize = Math.ceil( salesDetail.length )/limit;
        offset = ( page -1 )*limit;
        const userResult = await salesService.fetchUserSalesWithLimit( limit , offset );
        httpResponse.success(response, { data:userResult});
    }catch(error){
        httpResponse.error(response, error);
    }
});

router.delete('/:salesId' ,async ( request , response ) =>{
    const salesId = request.params.salesId;
    try{
         const salesDelete = await salesService.deleteSalesById( salesId );
         httpResponse.success(response, { success: true});
    }catch(error){
        httpResponse.error(response, error);
    }
});

router.put('/',async ( request , response )=>{
    try{
        const updatesales = await salesService.updateSales( request.body );
        httpResponse.success(response, { data: request.body });
    }catch(error){
        httpResponse.error(response, error);
    }
});



module.exports = router;