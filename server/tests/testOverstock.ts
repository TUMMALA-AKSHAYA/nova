import { analyzeOverstock } from "../src/engines/inventory/overstockEngine";

const items = [

  {

    productName:"Coffee Beans",

    quantity:180,

    averageDailySales:6,

    sellingPrice:200,

    costPrice:120,

    reorderLevel:20,

    leadTimeDays:4,

    category:"Beverages",

    isTopSeller:true

  },

  {

    productName:"Rice",

    quantity:600,

    averageDailySales:5,

    sellingPrice:80,

    costPrice:55,

    reorderLevel:30,

    leadTimeDays:6,

    category:"Grocery",

    isTopSeller:false

  },

  {

    productName:"Milk",

    quantity:40,

    averageDailySales:4,

    sellingPrice:50,

    costPrice:35,

    reorderLevel:15,

    leadTimeDays:2,

    category:"Dairy",

    isTopSeller:true

  }

];

items.forEach(item=>{

    console.log(item.productName);

    console.log(analyzeOverstock(item));

    console.log("--------------------------");

});