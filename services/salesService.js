const SalesModel = require('../models/Sales');
const User = require('../models/User')

class SalesService {

    addSales( sales ){
        return SalesModel.create({
            particular:sales.particular,
            rate:sales.rate,
            remarks: sales.remarks ? sales.remarks : '',
            UserId:sales.userId
        })
    }

    fetchUserSalesWithLimit( limit , offset ){
        return SalesModel.findAll({ include : [ {model : User} ] , limit:limit , offset :offset })
    }


    fetchAllSales(){
        return SalesModel.findAll( { include:[
            { model :User }
        ] } )
    }

    deleteSalesById( id ){
        return SalesModel.destroy({
            where:{ salesId : id  }
        })
    }

    updateSales( sales ){
        return SalesModel.update({
           particular : sales.particular,
           rate : sales.rate,
           remarks : sales.remarks ? sales.remarks :''
        },{ where : { salesId : sales.salesId }})
    }

    fetchUserSalesWithLimit( limit , offset ){
        return SalesModel.findAll({ include : [ {model : User} ] , limit:limit , offset :offset })
    }
}

module.exports = SalesService;