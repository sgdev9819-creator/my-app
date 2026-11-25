import { NextResponse } from "next/server";
const product = [ 

     /* macbook section*/
    {
        id:"macbook-neo",
        category:"Mac",
        subcategory:"laptop",
        name:"MacBook Neo",
        info:"The magic of Mac at a suprising price.",
        price:"From $699 or $58.25/mofor 12 mo.**",
        image:"pk1.jpg",
        keywords:[
            "laptop","mac","computer","comp","pro","m3","thin"
        ],
        colors:[
            {name:"",hex:""},
            {name:"",hex:""},
            {name:"",hex:""},
            {name:"",hex:""},
        ],
    },
   {
        id:"macbook-air",
        category:"Mac",
        subcategory:"laptop",
        name:"MacBook Air 13 and 15",
        info:"Thin. Fast. Powerful and portable.",
        price:"From $1299 or $108.25/mo. for 12 mo. "
        ,price1:"Lease from $24.99/mo. for 36 mo. with",
        price2:"Apple Upgrade◊Learn more",
        image:"pk2.jpg",
        keywords:[
            "laptop","mac","computer","comp","m3","air"
        ],
        colors:[
            {name:"",hex:""},
            {name:"",hex:""},
            {name:"",hex:""},
            {name:"",hex:""},
        ],
    },
    
    {
        id:"macb0ok-air-14-and-16",
        category:"Mac",
         subcategory:"laptop",
        name:"MacBook Air 14 and 16",
        info:"The most advanced MacBook Pro with",
        info2:" the world’s best laptop display. ",
        price:"From $1999 or $166.58/mo. for 12 mo. ",
        price1:"Lease from $38.99/mo. for 36 mo. with",
        price2:"Apple Upgrade◊",
        image:"pk3.jpg",
        keywords:[
            "laptop","mac","computer","comp","pro","m3","thin"
        ],
        colors:[
            {name:"",hex:""},
            {name:"",hex:""},
            {name:"",hex:""},
            {name:"",hex:""},
        ],
    },
   {
        id:"imac",
        category:"Mac",
        name:"iMac",
         subcategory:"desktop",
       info:"An all-in-one desktop for creativity ",color:"mac4.png",
      info2:"and productivity.",
      price:"From $1499 or $124.91/mo. for 12 mo."
    ,price1:"Lease from $28.99/mo. for 36 mo. with",
    price2:"Apple Upgrade◊",
        image:"pk4.jpg",
        keywords:[
            "laptop","mac","computer","comp","m3","air"
        ],
        colors:[
            {name:"",hex:""},
            {name:"",hex:""},
            {name:"",hex:""},
            {name:"",hex:""},
        ],
    },
    
    {
        id:"mac-mini",
        category:"Mac",
          subcategory:"desktop",
        name:"Mac mini",
          info:"The mini-est, most affordable ",
      info2:"Mac desktop.", hight:"New",
      price:"From $799 or $66.58/mo. for 12 mo.**",
        image:"pk5.jpg",
        keywords:[
            "laptop","mac","computer","comp","pro","m3","thin"
        ],
        colors:[
            {name:"",hex:""},
            {name:"",hex:""},
            {name:"",hex:""},
            {name:"",hex:""},
        ],
    },
   {
        id:"mac-studio",
        category:"Mac",
          subcategory:"desktop",
        name:"Mac Studio",
        info:"Powerful performance and connectivity ",
      info2:"for pros.",  
       hight:"New",
         price:"From $2499 or $208.25/mo. for 12 mo.*"
      ,price1:"Lease from $48.99/mo. for 36 mo. with",
      price2:"Apple Upgrade◊",
        image:"pk6.jpg",
        keywords:[
            "laptop","mac","computer","comp","m3","air"
        ],
        colors:[
            {name:"",hex:""},
            {name:"",hex:""},
            {name:"",hex:""},
            {name:"",hex:""},
        ],
    },
    
    {
        id:"studio-display",
        category:"Mac",
          subcategory:"display",
        name:"Studio Display",
       info:"A 5K Retina display that’s perfect",
      info2:" for Mac.",
    price:"From $1599 or $133.25/mo. for 12 mo.**",
        image:"pk7.jpg",
        keywords:[
            "laptop","mac","computer","comp","pro","m3","thin"
        ],
        colors:[
            {name:"",hex:""},
            {name:"",hex:""},
            {name:"",hex:""},
            {name:"",hex:""},
        ],
    },
   {
        id:"studio-display-xdr",
        category:"Mac",
         subcategory:"display",
        name:"Studio Display XDR",
         info:"The ultimate 5K Retina XDR display for",
        info2:" creative and pro workflows.",
        price:"From $3299 or $274.91/mo. for 12 mo.**",
        image:"pk8.jpg",
        keywords:[
            "laptop","mac","computer","comp","m3","air"
        ],
        colors:[
            {name:"",hex:""},
            {name:"",hex:""},
            {name:"",hex:""},
            {name:"",hex:""},
        ],
    },
    

     /* iPad section*/
    {
        id:"ipad-pro",
        category:"iPad",
        name:"iPad Pro",
       info:"The ultimate iPad experience with the",
       info1:" most advanced technology.",
       price:"From $1199 or $99.91/mo. for 12 mo.*",
        price1:"Lease from $24.99/mo. for 36 mo. ",
        price2:"with Apple Upgrade◊◊",
        image:"ie1.png",
        keywords:[
            "tablet","iPad","pro","ios","thin",
        ],
        colors:[
            {name:"",hex:""},
            {name:"",hex:""},
            {name:"",hex:""},
            {name:"",hex:""},
        ],
    },{
        id:"iPad Air",
        category:"iPad",
        name:"iPad Air",
        info:"Serious performance in a thin and ",      
        info1:"light design.",
        price:"From $749 or $62.41/mo. for 12 mo.*",
        price1 :"Lease from $15.99/mo. for 36 mo. ",
        price2:"with Apple Upgrade◊◊",
        image:"/ie2.png",
        keywords:[
            "tablet","iPad","ios","thin","air","m2"
        ],
        colors:[
            {name:"",hex:""},
            {name:"",hex:""},
            {name:"",hex:""},
            {name:"",hex:""},
        ],
    },
     {
        id:"ipad",
        category:"iPad",
        name:"iPad",
        info:"The colorful, all‑screen iPad for the",
        info1:" things you do every day.",
        price:"From $449 or $37.41/mo. for 12 mo.*",
        image:"/ie3.png",
        keywords:[
            "tablet","iPad","pro","ios","thin",
        ],
        colors:[
            {name:"",hex:""},
            {name:"",hex:""},
            {name:"",hex:""},
            {name:"",hex:""},
        ],
    },{
        id:"ipad-mini",
        category:"iPad",
        name:"iPad mini",
        info:"The colorful, all‑screen iPad for the",
        info1:" things you do every day.",
        price:"From $449 or $37.41/mo. for 12 mo.*",
        image:"/ie4.png",
        keywords:[
            "tablet","iPad","ios","thin","air","m2"
        ],
        colors:[
            {name:"",hex:""},
            {name:"",hex:""},
            {name:"",hex:""},
            {name:"",hex:""},
        ],
    },
     
    
     /* iPhone section*/
    {
        id:"iphone-duo",
        category:"iPhone",
        name:"iPhone Duo",
        info:"The ultimate iPad experience with the",
        info1:" most advanced technology.",
        price:"From $1199 or $99.91/mo. for 12 mo.*",
        price1:"Lease from $24.99/mo. for 36 mo. ",
        price2:"with Apple Upgrade◊◊",
        image:"iphone1.jpg",
        keywords:[
            "phone","iphone","17","iphone 17","camera","ios","titanium"
        ],
        colors:[
            {name:"",hex:""},
            {name:"",hex:""},
            {name:"",hex:""},
            {name:"",hex:""},
        ],
    },{
        id:"iphone-18-pro",
        category:"iPhone",
        name:"iPhone 18 Pro",
       info:"Serious performance in a thin and ",      
        info1:"light design.",
        price:"From $749 or $62.41/mo. for 12 mo.*",         
        price1 :"Lease from $15.99/mo. for 36 mo. ",
        price2:"with Apple Upgrade◊◊",
        image:"/iphone2.jpg",
        keywords:[
            "phone","iphone","17","iphone 17","camera","ios","titanium","pro"
        ],
        colors:[
            {name:"",hex:""},
            {name:"",hex:""},
            {name:"",hex:""},
            {name:"",hex:""},
        ],
    },



     {
        id:"iphone-air",
        category:"iPhone",
        name:"iPhone Air",
        info:"The colorful, all‑screen iPad for the",
        info1:" things you do every day.",
        price:"From $449 or $37.41/mo. for 12 mo.*",
        image:"/iphone3.jpg",
        keywords:[
            "phone","iphone","17","iphone 17","camera","ios","titanium"
        ],
        colors:[
            {name:"",hex:""},
            {name:"",hex:""},
            {name:"",hex:""},
            {name:"",hex:""},
        ],
    },{
        id:"iphone-17",
        category:"iPhone",
        name:"iPhone 17",
        info:"The full iPad experience in an",
        info1:"ultraportable design.",
        price:"From $599 or $49.91/mo. for 12 mo.*",
        price1:"Lease from $11.99/mo. for 36 mo. ",
        price2:"with Apple Upgrade◊◊",
        image:"/iphone4.jpg",
        keywords:[
            "phone","iphone","17","iphone 17","camera","ios","titanium","pro"
        ],
        colors:[
            {name:"",hex:""},
            {name:"",hex:""},
            {name:"",hex:""},
            {name:"",hex:""},
        ],
    },


 {
        id:"iphone-17e",
        category:"iPhone",
        name:"iPhone 17e",
       info:"The colorful, all‑screen iPad for the",
        info1:" things you do every day.",
        price:"From $449 or $37.41/mo. for 12 mo.*",
        image:"/iphone5.jpg",
        keywords:[
            "phone","iphone","17","iphone 17","camera","ios","titanium"
        ],
        colors:[
            {name:"",hex:""},
            {name:"",hex:""},
            {name:"",hex:""},
            {name:"",hex:""},
        ],
    },{
        id:"iphone-17e",
        category:"iPhone",
        info:"The colorful, all‑screen iPad for the",
        info1:" things you do every day.",
        price:"From $449 or $37.41/mo. for 12 mo.*",
        image:"/iphone5.jpg",
        keywords:[
            "phone","iphone","17","iphone 17","camera","ios","titanium"
        ],
        colors:[
            {name:"",hex:""},
            {name:"",hex:""},
            {name:"",hex:""},
            {name:"",hex:""},
        ],
    },





     /* Watch section*/
    {
        id:"apple-watch-series-12",
        category:"Watch",
        name:"Apple Watch Series 12",
         info:"The ultimate way to ",
        info1:"watch your health.",
        price:"From $399 or $33.25/mo. for 12 mo.*",
        price2:"Lease from $11.99/mo. for 24 mo. with",
        price3:" Apple Upgrade◊◊",
        golden:"New",
        image:"watch-i1.png",
        keywords:[
            "watch","touch","apple","fitnnes","smartwatch","series 10",
        ],
        colors:[
            {name:"",hex:""},
            {name:"",hex:""},
            {name:"",hex:""},
            {name:"",hex:""},
        ],
    },{
        id:"apple-watch-ultra",
        category:"Watch",
        name:"Apple Watch Ultra",
         info:"The ultimate sports",
        info1:"and adventure watch.",
        price:"From $799 or $66.58/mo. for 12 mo.*",
         price2:"Lease from $24.99/mo. for 24 mo. with",
        price3:" Apple Upgrade◊◊",
         golden:"New",
        image:"/watch-i2.png",
        keywords:[
              "watch","touch","apple","fitnnes","smartwatch","ultra","sports","rugged"
        ],
        colors:[
            {name:"",hex:""},
            {name:"",hex:""},
            {name:"",hex:""},
            {name:"",hex:""},
        ],
    },
   
    {
        id:"apple-watch-se-3",
        category:"Watch",
        name:"Apple Watch SE 3",
         info:"Essential health features",
        info1:"at a great value.",
        price:"From $249 or $20.75/mo. for 12 mo.*",
           golden:"New",
        image:"/watch-i3.png",
        keywords:[
            "watch","touch","apple","fitnnes","smartwatch","series 10",
        ],
        colors:[
            {name:"",hex:""},
            {name:"",hex:""},
            {name:"",hex:""},
            {name:"",hex:""},
        ],
    
    },
   
   
   
   
]
export async function GET() {
    return NextResponse.json(product)
}