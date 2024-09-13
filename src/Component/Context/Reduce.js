import  capsicum from '../image/10000067_26-fresho-capsicum-green.jpg'
import  carrot from '../image/10000070_16-fresho-carrot-orange.jpg'
import  cauliflower from '../image/10000074_20-fresho-cauliflower.jpg'
import ladfin from '../image/10000142_18-fresho-ladies-finger.webp'
import coriander from '../image/10000326_16-fresho-coriander-leaves.jpg'
import cucumber from '../image/40077518_1-fresho-cucumber.webp'
import onion from '../image/1201414_1-fresho-onion.webp'
import ashirvat from '../image/126906_9-aashirvaad-atta-whole-wheat.webp'

export let initialState={

    product:[
     {id:"",
        img:capsicum,
        name:"Capsicum - Green",
        price:64,
        mrp:87.67,
        offer:27,
        count:1,
        iscart:false,
        isFav:false,
        isBucket:false,
        
    },{ id:"",
        img:carrot,
        name:"Carrot - Orange",
        price:86,
        mrp:109,
        offer:27,
        count:1,
        iscart:false,
        isFav:false,
        isBucket:false,
    },{id:"",
       img:ladfin,
        name:"Ladies' Fingers",
        price:26,
        mrp:54.79,
        offer:27,
        count:1,
        iscart:false,
        isFav:false,
        isBucket:false,
        
    },{id:"",
       img:cauliflower,
        name:"Cauliflower",
        price:33,
        mrp:60,
        offer:27,
        count:1,
        iscart:false,
        isFav:false,
        isBucket:false,
        
    },{id:"",
       img:coriander,
        name:"Coriander Leaves",
        price:214,
        mrp:250,
        offer:30,
        count:1,
        iscart:false,
        isFav:false,
        isBucket:false,
        
    },{id:"",
       img:cucumber,
        name:"Cucumber",
        price:490,
        mrp:517,
        offer:27,
        count:1,
        iscart:false,
        isFav:false,
        isBucket:false,
        
    },{id:"",
       img:onion,
        name:"Onion",
        price:285,
        mrp:321,
        offer:30,
        count:1,
        iscart:false,
        isFav:false,
        isBucket:false,
        
    },{id:"",
       img:ashirvat,
        name:"Atta/Godihittu ",
        price:434,
        mrp:450,
        offer:25,
        count:1,
        iscart:false,
        isFav:false,
        isBucket:false,
        
    }]

}
export let reduce=(state,action)=>{
   
    if(action.type=="iscartUpdate"){
        return{...state,product:action.payload}
    }

}