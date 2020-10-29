const mongoose = require("mongoose")

const payloadQueueSchema = new mongoose.Schema({ 
    campaign:{
        user: { type: mongoose.Schema.Types.ObjectId, required: false },
        filters:{
            title:{ type: String, required: false },
            message:{ type: String, required: false },
            pathBatch:{ type: String, required: false }
        }   
    },
    interaction:{ 
            campaign: { type: mongoose.Schema.Types.ObjectId, required: false }
    },
    exportcsv:{
        user: { type: mongoose.Schema.Types.ObjectId, required: false },
        fields:[
            { type: String, required: false }
        ],
        filters:{
            name:{ type: String, required: false },
            lastname:{ type: String, required: false },
            DNI:{ type: String, required: false }
        },
    },
    importcsv:{      
            user: { type: mongoose.Schema.Types.ObjectId, required: false },
            path:{ type: String, required: false }          
    },
    
    type:{ type: String, required: true },

    
        // type:String,
        // customFields:[{
        //     name:'path',
        //     value:'/media/csv/people.csv'
        // },
        // {
        //     name:'user',
        //     value:'32434536452fdgfdfgh'}
        // ]
    
        
    
    
});
const PayloadQueue = mongoose.model('PayloadQueue', payloadQueueSchema);

module.exports = PayloadQueue