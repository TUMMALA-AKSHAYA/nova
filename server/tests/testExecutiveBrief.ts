import { buildInventoryInsight } from "../src/builders/inventoryInsightBuilder";
import { calculateBusinessHealth } from "../src/engines/business/businessHealthEngine";
import { generateExecutiveBrief } from "../src/engines/business/executiveBriefEngine";

const items = [

  {

    productName: "Coffee Beans",

    quantity: 12,

    averageDailySales: 6,

    sellingPrice: 200,

    costPrice: 120,

    reorderLevel: 20,

    leadTimeDays: 4,

    category: "Beverages",

    isTopSeller: true,

  },

  {

    productName: "Rice",

    quantity: 600,

    averageDailySales: 5,

    sellingPrice: 80,

    costPrice: 55,

    reorderLevel: 30,

    leadTimeDays: 6,

    category: "Grocery",

    isTopSeller: false,

  },

  {

    productName: "Vanilla Syrup",

    quantity: 40,

    averageDailySales: 0.5,

    sellingPrice: 350,

    costPrice: 250,

    reorderLevel: 10,

    leadTimeDays: 7,

    category: "Beverages",

    isTopSeller: false,

  }

];

const insights = items.map(buildInventoryInsight);

const scores = insights.map(calculateBusinessHealth);

const averageBusinessHealth = Math.round(

  scores.reduce((sum, item) => sum + item.score, 0) /
  scores.length

);

const executiveBrief = generateExecutiveBrief(

  insights,

  averageBusinessHealth

);

console.log(

  JSON.stringify(executiveBrief, null, 2)

);