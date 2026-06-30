import { analyzeDeadStock } from "../src/engines/inventory/deadStockEngine";

const items = [

  {

    productName:"Coffee Beans",

    quantity:15,

    averageDailySales:6,

    sellingPrice:200,

    costPrice:120,

    reorderLevel:20,

    leadTimeDays:4,

    category:"Beverages",

    isTopSeller:true,

    lastSoldDaysAgo:2

  },

  {

    productName:"Vanilla Syrup",

    quantity:40,

    averageDailySales:0,

    sellingPrice:350,

    costPrice:250,

    reorderLevel:10,

    leadTimeDays:7,

    category:"Beverages",

    isTopSeller:false,

    lastSoldDaysAgo:68

  },

  {

    productName:"Pumpkin Spice",

    quantity:120,

    averageDailySales:0,

    sellingPrice:450,

    costPrice:300,

    reorderLevel:20,

    leadTimeDays:10,

    category:"Seasonal",

    isTopSeller:false,

    lastSoldDaysAgo:120

  }

];

items.forEach(item=>{

    console.log(item.productName);

    console.log(analyzeDeadStock(item));

    console.log("-------------------");

});