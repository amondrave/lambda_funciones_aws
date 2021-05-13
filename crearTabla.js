const AWS = require ('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({region: 'us-east-1'});
exports.handler = (event, context, callback) =>{
    var params = {
        Item: {
            id: "2",
            Valor: "valor3"
        },
        TableName: 'tablaUno'
    };
    docClient.put(params, function(err,data){
        if(err){
            callback(err,null);
        }else{
            callback(null, "Guardado Satisfactoriamente")
        }
    });
};