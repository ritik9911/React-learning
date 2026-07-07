import React from "react";
import ReactDOM from "react-dom/client";

/* 
Header
- Logo
- Nav Items
Body
- Search
- ResturantContainer
    - ResturantCard contains info
        - Image, Name, Rating, Cusines, Delivery Time
Footer
- Copyright
- Links
- Address
- Contact
 */



const Header = () => {
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?size=large" alt="Logo" />
            </div>
            <div className="nav-items">
                <ul className="nav-menu">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
}

const styleCard = {
    backgroundColor: "#f0f0f0",
};



    const cardsArrObj = [
        {
          "card": {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                "id": "1322066",
                "name": "Big Fat Bowl",
                "city": "10",
                "slugs": {
                  "restaurant": "big-fat-bowl-chandkheda-chandkheda",
                  "city": "ahmedabad"
                },
                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/5/5/b31443a4-b31f-4c9f-977c-239899e5511e_1322066.JPG",
                "address": "Shop No- 10, The CBD, S P Ring Road, Zundal ,Zundal ,Gandhinagar Municipal Corporation,Gandhinagar,Gujarat-384001",
                "locality": "S P Ring Road",
                "areaName": "Chandkheda",
                "costForTwo": "25000",
                "costForTwoMessage": "₹250 FOR TWO",
                "cuisines": [
                  "Chinese",
                  "Desserts",
                  "Beverages"
                ],
                "avgRating": 3.1,
                "feeDetails": {
                  
                },
                "parentId": "678192",
                "avgRatingString": "3.1",
                "totalRatingsString": "7",
                "promoted": true,
                "adTrackingId": "cid=6e42b3ee-b207-4cc0-bdef-191d9f4eab68~p=0~adgrpid=6e42b3ee-b207-4cc0-bdef-191d9f4eab68#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=1322066~plpr=SEARCH#RESTAURANT~st=chinese~eid=17fcfe91-7c67-4489-b80c-086122296730~srvts=1782739820358",
                "sla": {
                  "deliveryTime": 45,
                  "minDeliveryTime": 45,
                  "maxDeliveryTime": 50,
                  "lastMileTravel": 9.5,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "RAIN_MODE_NONE",
                  "slaString": "45-50 MINS",
                  "lastMileTravelString": "9.5 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "opened": true,
                  "restaurantClosedMeta": {
                    
                  }
                },
                "badges": {
                  
                },
                "aggregatedDiscountInfoV3": {
                  "header": "70% OFF",
                  "subHeader": "UPTO ₹140",
                  "logoCtx": {
                    "text": "BENEFITS"
                  }
                },
                "ratingSlab": "RATING_SLAB_4",
                "orderabilityCommunication": {
                  "title": {
                    
                  },
                  "subTitle": {
                    
                  },
                  "message": {
                    
                  },
                  "customIcon": {
                    
                  },
                  "commsStyling": {
                    
                  }
                },
                "cartOrderabilityNudgeBanner": {
                  "parameters": {
                    
                  },
                  "presentation": {
                    
                  }
                },
                "externalRatings": {
                  "aggregatedRating": {
                    "rating": "--"
                  }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                "featuredSectionInfo": {
                  "sectionTitle": "More"
                },
                "campaignId": "6e42b3ee-b207-4cc0-bdef-191d9f4eab68",
                "showEoOffer": true,
                "priceComparisonComms": {
                  
                }
              },
              "analytics": {
                "screenName": "explore",
                "context": "{\"tid\":\"667033fd-f6c3-a6c2-4c3c-2e24a0547493\",\"grid\":\"fb89fd69-3f92-43ab-83db-d6fc590d2787\",\"queryUniqueId\":\"dddaf861-9ba0-e0ca-7184-fadc826cfe3c\",\"query\":\"Chinese\",\"adTrackingId\":\"cid=6e42b3ee-b207-4cc0-bdef-191d9f4eab68~p=0~adgrpid=6e42b3ee-b207-4cc0-bdef-191d9f4eab68#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=1322066~plpr=SEARCH#RESTAURANT~st=chinese~eid=17fcfe91-7c67-4489-b80c-086122296730~srvts=1782739820358\"}",
                "objectValue": "1322066",
                "impressionObjectName": "impression-restaurant-ad",
                "clickObjectName": "click-restaurant-ad"
              },
              "ctaWithParams": {
                "link": "swiggy://menu",
                "type": "DEEPLINK",
                "params": {
                  "sourceSessionId": "s760c95c9a8-bbd2-493c-ba94-f978be8cd",
                  "source": "SEARCH",
                  "isSld": "false",
                  "sourceRequestId": "00000000000000000000000000000000",
                  "qrEnabled": "false",
                  "restaurant_id": "1322066",
                  "query": "Chinese"
                }
              }
            }
          }
        },
        {
          "card": {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                "id": "920694",
                "name": "Wow! China",
                "city": "10",
                "slugs": {
                  "restaurant": "wow-china-swarnim-the-business-hub-chandkheda",
                  "city": "ahmedabad"
                },
                "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2026/4/14/88485ebe-2e0b-4572-8bb3-3805b70a7f22_dceebfc9-c7ed-4cfe-9b89-d0cd5095dd35.png",
                "address": "SHOP NO 4, GROUND FLOOR, NEXT TO KFC OPP. STADIUM METRO STATION, MOTERA, CHANDKHEDA, AHMEDABAD 382424, Ahmedabad Municipal Corporation, Ahmedabad, Gujarat, 382424",
                "locality": "Swarnim The Business Hub",
                "areaName": "Motera",
                "costForTwo": "40000",
                "costForTwoMessage": "₹400 FOR TWO",
                "cuisines": [
                  "Chinese",
                  "Asian",
                  "fastfood",
                  "Beverages",
                  "Snacks"
                ],
                "avgRating": 3.7,
                "feeDetails": {
                  
                },
                "parentId": "226836",
                "avgRatingString": "3.7",
                "totalRatingsString": "1.5K+",
                "sla": {
                  "deliveryTime": 31,
                  "minDeliveryTime": 30,
                  "maxDeliveryTime": 35,
                  "lastMileTravel": 4.1,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "RAIN_MODE_NONE",
                  "slaString": "30-35 MINS",
                  "lastMileTravelString": "4.1 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "opened": true,
                  "restaurantClosedMeta": {
                    
                  }
                },
                "badges": {
                  "imageBadges": [
                    {
                      "imageId": "brand_cards/Badges%202026/46_Best%20in%20Chinese2026.png",
                      "description": "Top-rated for Chinese, based on user votes."
                    }
                  ]
                },
                "aggregatedDiscountInfoV3": {
                  "header": "70% OFF",
                  "subHeader": "UPTO ₹130",
                  "logoCtx": {
                    "text": "BENEFITS"
                  }
                },
                "ratingSlab": "RATING_SLAB_4",
                "orderabilityCommunication": {
                  "title": {
                    
                  },
                  "subTitle": {
                    
                  },
                  "message": {
                    
                  },
                  "customIcon": {
                    
                  },
                  "commsStyling": {
                    
                  }
                },
                "cartOrderabilityNudgeBanner": {
                  "parameters": {
                    
                  },
                  "presentation": {
                    
                  }
                },
                "externalRatings": {
                  "aggregatedRating": {
                    "rating": "--"
                  }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                "featuredSectionInfo": {
                  "sectionTitle": "More"
                },
                "showEoOffer": true,
                "priceComparisonComms": {
                  
                }
              },
              "analytics": {
                "screenName": "explore",
                "context": "{\"tid\":\"667033fd-f6c3-a6c2-4c3c-2e24a0547493\",\"grid\":\"fb89fd69-3f92-43ab-83db-d6fc590d2787\",\"queryUniqueId\":\"dddaf861-9ba0-e0ca-7184-fadc826cfe3c\",\"query\":\"Chinese\"}",
                "objectValue": "920694",
                "impressionObjectName": "impression-restaurant",
                "clickObjectName": "click-restaurant"
              },
              "ctaWithParams": {
                "link": "swiggy://menu",
                "type": "DEEPLINK",
                "params": {
                  "query": "Chinese",
                  "sourceSessionId": "s760c95c9a8-bbd2-493c-ba94-f978be8cd",
                  "source": "SEARCH",
                  "isSld": "false",
                  "sourceRequestId": "00000000000000000000000000000000",
                  "qrEnabled": "false",
                  "restaurant_id": "920694"
                }
              }
            }
          }
        },
        {
          "card": {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                "id": "58637",
                "name": "Eat Punjab",
                "city": "10",
                "slugs": {
                  "restaurant": "eat-punjab-chandkheda-ahmedabad-chandkheda",
                  "city": "ahmedabad"
                },
                "cloudinaryImageId": "swnfjd19jikkvywghnws",
                "address": "Swagat Status 1, Near Engineering College,Aa New Cg Road Ahmedbad, Chandkheda, Ahmedabad",
                "locality": "Chankheda",
                "areaName": "Chandkheda",
                "costForTwo": "50000",
                "costForTwoMessage": "₹500 FOR TWO",
                "cuisines": [
                  "North Indian",
                  "Punjabi",
                  "Chinese",
                  "Tandoor",
                  "Beverages",
                  "Indian"
                ],
                "avgRating": 4.3,
                "feeDetails": {
                  
                },
                "parentId": "76067",
                "avgRatingString": "4.3",
                "totalRatingsString": "16K+",
                "promoted": true,
                "adTrackingId": "cid=13ea425f-2802-422e-9f72-600bfd04f16a~p=1~adgrpid=13ea425f-2802-422e-9f72-600bfd04f16a#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=58637~plpr=SEARCH#RESTAURANT~st=chinese~eid=5881ddc7-92db-44fc-8247-30e7f9f51584~srvts=1782739820358",
                "sla": {
                  "deliveryTime": 46,
                  "minDeliveryTime": 45,
                  "maxDeliveryTime": 55,
                  "lastMileTravel": 7,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "RAIN_MODE_NONE",
                  "slaString": "45-55 MINS",
                  "lastMileTravelString": "7.0 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "opened": true,
                  "restaurantClosedMeta": {
                    
                  }
                },
                "badges": {
                  "imageBadges": [
                    {
                      "imageId": "brand_cards/Badges%202026/26_Best%20in%20North%20Indian2026.png",
                      "description": "Top-rated for North Indian, based on user votes."
                    },
                    {
                      "imageId": "brand_cards/Badges%202026/39_Best%20in%20Biryani2026.png",
                      "description": "Top-rated for Biryani, based on user votes."
                    }
                  ]
                },
                "aggregatedDiscountInfoV3": {
                  "header": "₹75 OFF",
                  "discountTag": "FLAT DEAL",
                  "logoCtx": {
                    "text": "BENEFITS"
                  }
                },
                "ratingSlab": "RATING_SLAB_5",
                "orderabilityCommunication": {
                  "title": {
                    
                  },
                  "subTitle": {
                    
                  },
                  "message": {
                    
                  },
                  "customIcon": {
                    
                  },
                  "commsStyling": {
                    
                  }
                },
                "cartOrderabilityNudgeBanner": {
                  "parameters": {
                    
                  },
                  "presentation": {
                    
                  }
                },
                "externalRatings": {
                  "aggregatedRating": {
                    "rating": "3.9",
                    "ratingCount": "4.5K+"
                  },
                  "source": "GOOGLE",
                  "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                "featuredSectionInfo": {
                  "sectionTitle": "More"
                },
                "campaignId": "13ea425f-2802-422e-9f72-600bfd04f16a",
                "showEoOffer": true,
                "priceComparisonComms": {
                  
                }
              },
              "analytics": {
                "screenName": "explore",
                "context": "{\"tid\":\"667033fd-f6c3-a6c2-4c3c-2e24a0547493\",\"grid\":\"fb89fd69-3f92-43ab-83db-d6fc590d2787\",\"queryUniqueId\":\"dddaf861-9ba0-e0ca-7184-fadc826cfe3c\",\"query\":\"Chinese\",\"adTrackingId\":\"cid=13ea425f-2802-422e-9f72-600bfd04f16a~p=1~adgrpid=13ea425f-2802-422e-9f72-600bfd04f16a#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=58637~plpr=SEARCH#RESTAURANT~st=chinese~eid=5881ddc7-92db-44fc-8247-30e7f9f51584~srvts=1782739820358\"}",
                "objectValue": "58637",
                "impressionObjectName": "impression-restaurant-ad",
                "clickObjectName": "click-restaurant-ad"
              },
              "ctaWithParams": {
                "link": "swiggy://menu",
                "type": "DEEPLINK",
                "params": {
                  "isSld": "false",
                  "sourceRequestId": "00000000000000000000000000000000",
                  "qrEnabled": "false",
                  "restaurant_id": "58637",
                  "query": "Chinese",
                  "sourceSessionId": "s760c95c9a8-bbd2-493c-ba94-f978be8cd",
                  "source": "SEARCH"
                }
              }
            }
          }
        },
        {
          "card": {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                "id": "63715",
                "name": "Aryan Fast Food",
                "city": "10",
                "slugs": {
                  "restaurant": "aryan-fast-food-chandkheda-chandkheda",
                  "city": "ahmedabad"
                },
                "cloudinaryImageId": "yeyafqzor1df3rzwcx6p",
                "address": "Opposite ONGC, Saraswati Nagar, Chandkheda, Ahmedabad",
                "locality": "Chandkheda",
                "areaName": "Chandkheda",
                "costForTwo": "30000",
                "costForTwoMessage": "₹300 FOR TWO",
                "cuisines": [
                  "Chinese"
                ],
                "avgRating": 4.2,
                "veg": true,
                "feeDetails": {
                  
                },
                "parentId": "36586",
                "avgRatingString": "4.2",
                "totalRatingsString": "12K+",
                "sla": {
                  "deliveryTime": 28,
                  "minDeliveryTime": 25,
                  "maxDeliveryTime": 30,
                  "lastMileTravel": 5,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "RAIN_MODE_NONE",
                  "slaString": "25-30 MINS",
                  "lastMileTravelString": "5.0 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "opened": true,
                  "restaurantClosedMeta": {
                    
                  }
                },
                "badges": {
                  "imageBadges": [
                    {
                      "imageId": "v1695133679/badges/Pure_Veg111.png",
                      "description": "Serves only 100% vegetarian food, with no non-veg items."
                    }
                  ]
                },
                "aggregatedDiscountInfoV3": {
                  "header": "70% OFF",
                  "subHeader": "UPTO ₹140",
                  "logoCtx": {
                    "text": "BENEFITS"
                  }
                },
                "ratingSlab": "RATING_SLAB_5",
                "orderabilityCommunication": {
                  "title": {
                    
                  },
                  "subTitle": {
                    
                  },
                  "message": {
                    
                  },
                  "customIcon": {
                    
                  },
                  "commsStyling": {
                    
                  }
                },
                "cartOrderabilityNudgeBanner": {
                  "parameters": {
                    
                  },
                  "presentation": {
                    
                  }
                },
                "externalRatings": {
                  "aggregatedRating": {
                    "rating": "4.1",
                    "ratingCount": "1.0K+"
                  },
                  "source": "GOOGLE",
                  "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                "featuredSectionInfo": {
                  "sectionTitle": "More"
                },
                "showEoOffer": true,
                "priceComparisonComms": {
                  
                }
              },
              "analytics": {
                "screenName": "explore",
                "context": "{\"tid\":\"667033fd-f6c3-a6c2-4c3c-2e24a0547493\",\"grid\":\"fb89fd69-3f92-43ab-83db-d6fc590d2787\",\"queryUniqueId\":\"dddaf861-9ba0-e0ca-7184-fadc826cfe3c\",\"query\":\"Chinese\"}",
                "objectValue": "63715",
                "impressionObjectName": "impression-restaurant",
                "clickObjectName": "click-restaurant"
              },
              "ctaWithParams": {
                "link": "swiggy://menu",
                "type": "DEEPLINK",
                "params": {
                  "query": "Chinese",
                  "sourceSessionId": "s760c95c9a8-bbd2-493c-ba94-f978be8cd",
                  "source": "SEARCH",
                  "isSld": "false",
                  "sourceRequestId": "00000000000000000000000000000000",
                  "qrEnabled": "false",
                  "restaurant_id": "63715"
                }
              }
            }
          }
        },
        {
          "card": {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                "id": "1233653",
                "name": "Bowllit",
                "city": "10",
                "slugs": {
                  "restaurant": "bowllit-chandkheda-chandkheda",
                  "city": "ahmedabad"
                },
                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/6/18/e8839683-c529-46d6-9973-21df8ab07217_1233653.JPG",
                "address": "Shop No- 10, The CBD, S P Ring Road, Zundal, Zundal , Gandhinagar Municipal Corporation, Gandhinagar, Gujarat - 384001",
                "locality": "SP Ring Road",
                "areaName": "Chandkheda",
                "costForTwo": "25000",
                "costForTwoMessage": "₹250 FOR TWO",
                "cuisines": [
                  "Chinese",
                  "Thai",
                  "Asian",
                  "Momos",
                  "Desserts",
                  "Beverages"
                ],
                "avgRating": 3.5,
                "feeDetails": {
                  
                },
                "parentId": "645141",
                "avgRatingString": "3.5",
                "totalRatingsString": "87",
                "promoted": true,
                "adTrackingId": "cid=beba6f34-3033-4fca-8a04-6c0863a1b825~p=2~adgrpid=beba6f34-3033-4fca-8a04-6c0863a1b825#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=1233653~plpr=SEARCH#RESTAURANT~st=chinese~eid=b01177fe-8561-42fc-8099-45a26b7bfa86~srvts=1782739820358",
                "sla": {
                  "deliveryTime": 44,
                  "minDeliveryTime": 40,
                  "maxDeliveryTime": 45,
                  "lastMileTravel": 8.1,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "RAIN_MODE_NONE",
                  "slaString": "40-45 MINS",
                  "lastMileTravelString": "8.1 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "opened": true,
                  "restaurantClosedMeta": {
                    
                  }
                },
                "badges": {
                  
                },
                "aggregatedDiscountInfoV3": {
                  "header": "75% OFF",
                  "subHeader": "UPTO ₹160",
                  "discountTag": "SAVE BIG",
                  "logoCtx": {
                    "text": "BENEFITS"
                  }
                },
                "ratingSlab": "RATING_SLAB_4",
                "orderabilityCommunication": {
                  "title": {
                    
                  },
                  "subTitle": {
                    
                  },
                  "message": {
                    
                  },
                  "customIcon": {
                    
                  },
                  "commsStyling": {
                    
                  }
                },
                "cartOrderabilityNudgeBanner": {
                  "parameters": {
                    
                  },
                  "presentation": {
                    
                  }
                },
                "externalRatings": {
                  "aggregatedRating": {
                    "rating": "--"
                  }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                "featuredSectionInfo": {
                  "sectionTitle": "More"
                },
                "campaignId": "beba6f34-3033-4fca-8a04-6c0863a1b825",
                "showEoOffer": true,
                "priceComparisonComms": {
                  
                }
              },
              "analytics": {
                "screenName": "explore",
                "context": "{\"tid\":\"667033fd-f6c3-a6c2-4c3c-2e24a0547493\",\"grid\":\"fb89fd69-3f92-43ab-83db-d6fc590d2787\",\"queryUniqueId\":\"dddaf861-9ba0-e0ca-7184-fadc826cfe3c\",\"query\":\"Chinese\",\"adTrackingId\":\"cid=beba6f34-3033-4fca-8a04-6c0863a1b825~p=2~adgrpid=beba6f34-3033-4fca-8a04-6c0863a1b825#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=1233653~plpr=SEARCH#RESTAURANT~st=chinese~eid=b01177fe-8561-42fc-8099-45a26b7bfa86~srvts=1782739820358\"}",
                "objectValue": "1233653",
                "impressionObjectName": "impression-restaurant-ad",
                "clickObjectName": "click-restaurant-ad"
              },
              "ctaWithParams": {
                "link": "swiggy://menu",
                "type": "DEEPLINK",
                "params": {
                  "query": "Chinese",
                  "sourceSessionId": "s760c95c9a8-bbd2-493c-ba94-f978be8cd",
                  "source": "SEARCH",
                  "isSld": "false",
                  "sourceRequestId": "00000000000000000000000000000000",
                  "qrEnabled": "false",
                  "restaurant_id": "1233653"
                }
              }
            }
          }
        },
        {
          "card": {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                "id": "1146592",
                "name": "Hello China",
                "city": "10",
                "slugs": {
                  "restaurant": "1944-the-hocco-kitchen-chandkheda-chandkheda-2",
                  "city": "ahmedabad"
                },
                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/19/93f60306-8695-4e9a-8856-0b302fb7cadd_1146592.jpg",
                "address": "SHOP NO.38, GF-RADHE FORTUNE, BHAT CIRCLE, S.P.RING ROAD, BHAT, GANDHINAGAR ,Gandhinagar Municipal Corporation,Gandhinagar,Gujarat-382428",
                "locality": "Bhat Circle",
                "areaName": "Bhat",
                "costForTwo": "40000",
                "costForTwoMessage": "₹400 FOR TWO",
                "cuisines": [
                  "Chinese"
                ],
                "avgRating": 4.3,
                "veg": true,
                "feeDetails": {
                  
                },
                "parentId": "95331",
                "avgRatingString": "4.3",
                "totalRatingsString": "53",
                "sla": {
                  "deliveryTime": 25,
                  "minDeliveryTime": 25,
                  "maxDeliveryTime": 30,
                  "lastMileTravel": 1.4,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "RAIN_MODE_NONE",
                  "slaString": "25-30 MINS",
                  "lastMileTravelString": "1.4 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "opened": true,
                  "restaurantClosedMeta": {
                    
                  }
                },
                "badges": {
                  
                },
                "aggregatedDiscountInfoV3": {
                  "header": "50% OFF",
                  "discountTag": "FLAT DEAL",
                  "logoCtx": {
                    "text": "BENEFITS"
                  }
                },
                "ratingSlab": "RATING_SLAB_5",
                "orderabilityCommunication": {
                  "title": {
                    
                  },
                  "subTitle": {
                    
                  },
                  "message": {
                    
                  },
                  "customIcon": {
                    
                  },
                  "commsStyling": {
                    
                  }
                },
                "cartOrderabilityNudgeBanner": {
                  "parameters": {
                    
                  },
                  "presentation": {
                    
                  }
                },
                "externalRatings": {
                  "aggregatedRating": {
                    "rating": "--"
                  }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                "featuredSectionInfo": {
                  "sectionTitle": "More"
                },
                "showEoOffer": true,
                "priceComparisonComms": {
                  
                }
              },
              "analytics": {
                "screenName": "explore",
                "context": "{\"tid\":\"667033fd-f6c3-a6c2-4c3c-2e24a0547493\",\"grid\":\"fb89fd69-3f92-43ab-83db-d6fc590d2787\",\"queryUniqueId\":\"dddaf861-9ba0-e0ca-7184-fadc826cfe3c\",\"query\":\"Chinese\"}",
                "objectValue": "1146592",
                "impressionObjectName": "impression-restaurant",
                "clickObjectName": "click-restaurant"
              },
              "ctaWithParams": {
                "link": "swiggy://menu",
                "type": "DEEPLINK",
                "params": {
                  "qrEnabled": "false",
                  "restaurant_id": "1146592",
                  "query": "Chinese",
                  "sourceSessionId": "s760c95c9a8-bbd2-493c-ba94-f978be8cd",
                  "source": "SEARCH",
                  "isSld": "false",
                  "sourceRequestId": "00000000000000000000000000000000"
                }
              }
            }
          }
        },
        {
          "card": {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                "id": "58430",
                "name": "Marky Momos",
                "city": "10",
                "slugs": {
                  "restaurant": "marky-momos-motera-chandkheda",
                  "city": "ahmedabad"
                },
                "cloudinaryImageId": "r3mj0tnneqe18ouskx3d",
                "address": "Shop No - 4 , Sparsh Arcade , Chandkheda- Zundal Road, Opposite Indian Oil Petrol Pump , Chandkheda Ahemedabad 382424",
                "locality": "Chandkheda",
                "areaName": "Chandkheda",
                "costForTwo": "50000",
                "costForTwoMessage": "₹500 FOR TWO",
                "cuisines": [
                  "Momos",
                  "Chinese",
                  "Fast Food",
                  "Snacks",
                  "rolls & wraps"
                ],
                "avgRating": 4.3,
                "feeDetails": {
                  
                },
                "parentId": "4659",
                "avgRatingString": "4.3",
                "totalRatingsString": "11K+",
                "promoted": true,
                "adTrackingId": "cid=081b053f-8e32-46ef-9b5d-ee5cf23f6af0~p=4~adgrpid=081b053f-8e32-46ef-9b5d-ee5cf23f6af0#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=58430~plpr=SEARCH#RESTAURANT~st=chinese~eid=41b7c9a4-6d1e-433a-814b-ec420d8c277f~srvts=1782739820358",
                "sla": {
                  "deliveryTime": 38,
                  "minDeliveryTime": 35,
                  "maxDeliveryTime": 40,
                  "lastMileTravel": 7.8,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "RAIN_MODE_NONE",
                  "slaString": "35-40 MINS",
                  "lastMileTravelString": "7.8 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "opened": true,
                  "restaurantClosedMeta": {
                    
                  }
                },
                "badges": {
                  
                },
                "aggregatedDiscountInfoV3": {
                  "header": "50% OFF",
                  "discountTag": "FLAT DEAL",
                  "logoCtx": {
                    "text": "BENEFITS"
                  }
                },
                "ratingSlab": "RATING_SLAB_5",
                "orderabilityCommunication": {
                  "title": {
                    
                  },
                  "subTitle": {
                    
                  },
                  "message": {
                    
                  },
                  "customIcon": {
                    
                  },
                  "commsStyling": {
                    
                  }
                },
                "cartOrderabilityNudgeBanner": {
                  "parameters": {
                    
                  },
                  "presentation": {
                    
                  }
                },
                "externalRatings": {
                  "aggregatedRating": {
                    "rating": "3.9",
                    "ratingCount": "426"
                  },
                  "source": "GOOGLE",
                  "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                "featuredSectionInfo": {
                  "sectionTitle": "More"
                },
                "campaignId": "081b053f-8e32-46ef-9b5d-ee5cf23f6af0",
                "showEoOffer": true,
                "priceComparisonComms": {
                  
                }
              },
              "analytics": {
                "screenName": "explore",
                "context": "{\"tid\":\"667033fd-f6c3-a6c2-4c3c-2e24a0547493\",\"grid\":\"fb89fd69-3f92-43ab-83db-d6fc590d2787\",\"queryUniqueId\":\"dddaf861-9ba0-e0ca-7184-fadc826cfe3c\",\"query\":\"Chinese\",\"adTrackingId\":\"cid=081b053f-8e32-46ef-9b5d-ee5cf23f6af0~p=4~adgrpid=081b053f-8e32-46ef-9b5d-ee5cf23f6af0#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=58430~plpr=SEARCH#RESTAURANT~st=chinese~eid=41b7c9a4-6d1e-433a-814b-ec420d8c277f~srvts=1782739820358\"}",
                "objectValue": "58430",
                "impressionObjectName": "impression-restaurant-ad",
                "clickObjectName": "click-restaurant-ad"
              },
              "ctaWithParams": {
                "link": "swiggy://menu",
                "type": "DEEPLINK",
                "params": {
                  "isSld": "false",
                  "sourceRequestId": "00000000000000000000000000000000",
                  "qrEnabled": "false",
                  "restaurant_id": "58430",
                  "query": "Chinese",
                  "sourceSessionId": "s760c95c9a8-bbd2-493c-ba94-f978be8cd",
                  "source": "SEARCH"
                }
              }
            }
          }
        },
        {
          "card": {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                "id": "782785",
                "name": "Prince Bhajipav",
                "city": "10",
                "slugs": {
                  "restaurant": "prince-bhajipav-gota-gota",
                  "city": "ahmedabad"
                },
                "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2025/8/25/cd992dc7-02b5-4291-8bac-2488319e6342_659581b5-9330-496c-b0b6-29956e6f4442.JPG",
                "address": "SHOP NO-25,WESTERN PRIME GOTA AHMEDABAD, Gota(New West Zone), Ahmedabad Municipal Corporation, Ahmedabad, Gujarat - 382481",
                "locality": "Western Heights",
                "areaName": "GOTA",
                "costForTwo": "30000",
                "costForTwoMessage": "₹300 FOR TWO",
                "cuisines": [
                  "pav bhaji",
                  "Fast Food",
                  "Snacks",
                  "street food"
                ],
                "avgRating": 4.2,
                "veg": true,
                "feeDetails": {
                  
                },
                "parentId": "161163",
                "avgRatingString": "4.2",
                "totalRatingsString": "2.1K+",
                "sla": {
                  "deliveryTime": 39,
                  "minDeliveryTime": 35,
                  "maxDeliveryTime": 40,
                  "lastMileTravel": 11.4,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "RAIN_MODE_NONE",
                  "slaString": "35-40 MINS",
                  "lastMileTravelString": "11.4 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "opened": true,
                  "restaurantClosedMeta": {
                    
                  }
                },
                "badges": {
                  "imageBadges": [
                    {
                      "imageId": "v1695133679/badges/Pure_Veg111.png",
                      "description": "Serves only 100% vegetarian food, with no non-veg items."
                    }
                  ]
                },
                "aggregatedDiscountInfoV3": {
                  "header": "50% OFF",
                  "discountTag": "FLAT DEAL",
                  "logoCtx": {
                    "text": "BENEFITS"
                  }
                },
                "ratingSlab": "RATING_SLAB_5",
                "orderabilityCommunication": {
                  "title": {
                    
                  },
                  "subTitle": {
                    
                  },
                  "message": {
                    
                  },
                  "customIcon": {
                    
                  },
                  "commsStyling": {
                    
                  }
                },
                "cartOrderabilityNudgeBanner": {
                  "parameters": {
                    
                  },
                  "presentation": {
                    
                  }
                },
                "externalRatings": {
                  "aggregatedRating": {
                    "rating": "--"
                  }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                "featuredSectionInfo": {
                  "sectionTitle": "More"
                },
                "showEoOffer": true,
                "priceComparisonComms": {
                  
                }
              },
              "analytics": {
                "screenName": "explore",
                "context": "{\"tid\":\"667033fd-f6c3-a6c2-4c3c-2e24a0547493\",\"grid\":\"fb89fd69-3f92-43ab-83db-d6fc590d2787\",\"queryUniqueId\":\"dddaf861-9ba0-e0ca-7184-fadc826cfe3c\",\"query\":\"Chinese\"}",
                "objectValue": "782785",
                "impressionObjectName": "impression-restaurant",
                "clickObjectName": "click-restaurant"
              },
              "ctaWithParams": {
                "link": "swiggy://menu",
                "type": "DEEPLINK",
                "params": {
                  "qrEnabled": "false",
                  "restaurant_id": "782785",
                  "query": "Chinese",
                  "sourceSessionId": "s760c95c9a8-bbd2-493c-ba94-f978be8cd",
                  "source": "SEARCH",
                  "isSld": "false",
                  "sourceRequestId": "00000000000000000000000000000000"
                }
              }
            }
          }
        },
        {
          "card": {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                "id": "603033",
                "name": "Spicy Indian eatery",
                "city": "10",
                "slugs": {
                  "restaurant": "spicy-indian-eatery-gota-gota",
                  "city": "ahmedabad"
                },
                "cloudinaryImageId": "wlrzy9dqdjy8t3wa1eqm",
                "address": "Opp.Savya Sky,Nr.CBD Mall,Zundal To Vaishnodevi Road,Zundal ,Zundal ,Gandhinagar Municipal Corporation,Gandhinagar,Gujarat-382421",
                "locality": "Gandhinagar",
                "areaName": "Chandkheda",
                "costForTwo": "20000",
                "costForTwoMessage": "₹200 FOR TWO",
                "cuisines": [
                  "North Indian",
                  "Chinese",
                  "Gujarati",
                  "Rajasthani",
                  "Beverages"
                ],
                "avgRating": 3.5,
                "veg": true,
                "feeDetails": {
                  
                },
                "parentId": "255904",
                "avgRatingString": "3.5",
                "totalRatingsString": "72",
                "promoted": true,
                "adTrackingId": "cid=774c59b5-44e6-4819-99c0-a0f9afdfb278~p=5~adgrpid=774c59b5-44e6-4819-99c0-a0f9afdfb278#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=603033~plpr=SEARCH#RESTAURANT~st=chinese~eid=a30021b8-7d08-4c6b-b455-9d7b01bf0baa~srvts=1782739820358",
                "sla": {
                  "deliveryTime": 48,
                  "minDeliveryTime": 45,
                  "maxDeliveryTime": 50,
                  "lastMileTravel": 7.6,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "RAIN_MODE_NONE",
                  "slaString": "45-50 MINS",
                  "lastMileTravelString": "7.6 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "opened": true,
                  "restaurantClosedMeta": {
                    
                  }
                },
                "badges": {
                  
                },
                "aggregatedDiscountInfoV3": {
                  "header": "ITEMS",
                  "subHeader": "AT ₹149",
                  "logoCtx": {
                    "text": "BENEFITS"
                  }
                },
                "ratingSlab": "RATING_SLAB_4",
                "orderabilityCommunication": {
                  "title": {
                    
                  },
                  "subTitle": {
                    
                  },
                  "message": {
                    
                  },
                  "customIcon": {
                    
                  },
                  "commsStyling": {
                    
                  }
                },
                "cartOrderabilityNudgeBanner": {
                  "parameters": {
                    
                  },
                  "presentation": {
                    
                  }
                },
                "externalRatings": {
                  "aggregatedRating": {
                    "rating": "--"
                  }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                "featuredSectionInfo": {
                  "sectionTitle": "More"
                },
                "campaignId": "774c59b5-44e6-4819-99c0-a0f9afdfb278",
                "showEoOffer": true,
                "priceComparisonComms": {
                  
                }
              },
              "analytics": {
                "screenName": "explore",
                "context": "{\"tid\":\"667033fd-f6c3-a6c2-4c3c-2e24a0547493\",\"grid\":\"fb89fd69-3f92-43ab-83db-d6fc590d2787\",\"queryUniqueId\":\"dddaf861-9ba0-e0ca-7184-fadc826cfe3c\",\"query\":\"Chinese\",\"adTrackingId\":\"cid=774c59b5-44e6-4819-99c0-a0f9afdfb278~p=5~adgrpid=774c59b5-44e6-4819-99c0-a0f9afdfb278#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=603033~plpr=SEARCH#RESTAURANT~st=chinese~eid=a30021b8-7d08-4c6b-b455-9d7b01bf0baa~srvts=1782739820358\"}",
                "objectValue": "603033",
                "impressionObjectName": "impression-restaurant-ad",
                "clickObjectName": "click-restaurant-ad"
              },
              "ctaWithParams": {
                "link": "swiggy://menu",
                "type": "DEEPLINK",
                "params": {
                  "source": "SEARCH",
                  "isSld": "false",
                  "sourceRequestId": "00000000000000000000000000000000",
                  "qrEnabled": "false",
                  "restaurant_id": "603033",
                  "query": "Chinese",
                  "sourceSessionId": "s760c95c9a8-bbd2-493c-ba94-f978be8cd"
                }
              }
            }
          }
        },
        {
          "card": {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                "id": "975076",
                "name": "Chinese Nonsense",
                "city": "10",
                "slugs": {
                  "restaurant": "chinese-nonsense-chandkheda-chandkheda",
                  "city": "ahmedabad"
                },
                "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/11/6/14029060-3aed-46c0-852e-e68fa0606705_5953cd4c-6b67-4d42-9a83-9aeda7435a1a.png",
                "address": "Shop No : SHOP NO.GF/6 , Floor :  , KUNJ EMPORIO OPP.4D  SQUARE MALL , ",
                "locality": "Chandkheda",
                "areaName": "Chandkheda",
                "costForTwo": "40000",
                "costForTwoMessage": "₹400 FOR TWO",
                "cuisines": [
                  "Chinese",
                  "Sweets",
                  "Fast Food"
                ],
                "avgRating": 4.4,
                "veg": true,
                "feeDetails": {
                  
                },
                "parentId": "570977",
                "avgRatingString": "4.4",
                "totalRatingsString": "58",
                "sla": {
                  "deliveryTime": 35,
                  "minDeliveryTime": 30,
                  "maxDeliveryTime": 35,
                  "lastMileTravel": 4.3,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "RAIN_MODE_NONE",
                  "slaString": "30-35 MINS",
                  "lastMileTravelString": "4.3 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "opened": true,
                  "restaurantClosedMeta": {
                    
                  }
                },
                "badges": {
                  
                },
                "aggregatedDiscountInfoV3": {
                  "header": "₹75 OFF",
                  "discountTag": "FLAT DEAL",
                  "logoCtx": {
                    "text": "BENEFITS"
                  }
                },
                "ratingSlab": "RATING_SLAB_5",
                "orderabilityCommunication": {
                  "title": {
                    
                  },
                  "subTitle": {
                    
                  },
                  "message": {
                    
                  },
                  "customIcon": {
                    
                  },
                  "commsStyling": {
                    
                  }
                },
                "cartOrderabilityNudgeBanner": {
                  "parameters": {
                    
                  },
                  "presentation": {
                    
                  }
                },
                "externalRatings": {
                  "aggregatedRating": {
                    "rating": "--"
                  }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                "featuredSectionInfo": {
                  "sectionTitle": "More"
                },
                "showEoOffer": true,
                "priceComparisonComms": {
                  
                }
              },
              "analytics": {
                "screenName": "explore",
                "context": "{\"tid\":\"667033fd-f6c3-a6c2-4c3c-2e24a0547493\",\"grid\":\"fb89fd69-3f92-43ab-83db-d6fc590d2787\",\"queryUniqueId\":\"dddaf861-9ba0-e0ca-7184-fadc826cfe3c\",\"query\":\"Chinese\"}",
                "objectValue": "975076",
                "impressionObjectName": "impression-restaurant",
                "clickObjectName": "click-restaurant"
              },
              "ctaWithParams": {
                "link": "swiggy://menu",
                "type": "DEEPLINK",
                "params": {
                  "query": "Chinese",
                  "sourceSessionId": "s760c95c9a8-bbd2-493c-ba94-f978be8cd",
                  "source": "SEARCH",
                  "isSld": "false",
                  "sourceRequestId": "00000000000000000000000000000000",
                  "qrEnabled": "false",
                  "restaurant_id": "975076"
                }
              }
            }
          }
        },
        {
          "card": {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                "id": "172682",
                "name": "Capital Point Restaurant",
                "city": "10",
                "slugs": {
                  "restaurant": "central-point-restaurant-radhe-fortune-gandhinagar",
                  "city": "ahmedabad"
                },
                "cloudinaryImageId": "ezuctxpckqtdeyysroer",
                "address": "Radhe Fortune, Near Apollo Circle, Airport Gandhinagar Highway",
                "locality": "Gandhinagar",
                "areaName": "Bhat",
                "costForTwo": "20000",
                "costForTwoMessage": "₹200 FOR TWO",
                "cuisines": [
                  "Punjabi",
                  "Chinese",
                  "Mexican",
                  "Thalis",
                  "Snacks",
                  "Pizzas"
                ],
                "avgRating": 4.3,
                "veg": true,
                "feeDetails": {
                  
                },
                "parentId": "55789",
                "avgRatingString": "4.3",
                "totalRatingsString": "511",
                "promoted": true,
                "adTrackingId": "cid=5ede612c-a21b-4a50-93fd-6ed55f8d1b2c~p=8~adgrpid=5ede612c-a21b-4a50-93fd-6ed55f8d1b2c#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=172682~plpr=SEARCH#RESTAURANT~st=chinese~eid=d9eadd0d-4055-413c-94f4-c74db8d24241~srvts=1782739820358",
                "sla": {
                  "deliveryTime": 22,
                  "minDeliveryTime": 20,
                  "maxDeliveryTime": 25,
                  "lastMileTravel": 1.3,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "RAIN_MODE_NONE",
                  "slaString": "20-25 MINS",
                  "lastMileTravelString": "1.3 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "opened": true,
                  "restaurantClosedMeta": {
                    
                  }
                },
                "badges": {
                  
                },
                "aggregatedDiscountInfoV3": {
                  "header": "75% OFF",
                  "subHeader": "UPTO ₹160",
                  "discountTag": "SAVE BIG",
                  "logoCtx": {
                    "text": "BENEFITS"
                  }
                },
                "ratingSlab": "RATING_SLAB_5",
                "orderabilityCommunication": {
                  "title": {
                    
                  },
                  "subTitle": {
                    
                  },
                  "message": {
                    
                  },
                  "customIcon": {
                    
                  },
                  "commsStyling": {
                    
                  }
                },
                "cartOrderabilityNudgeBanner": {
                  "parameters": {
                    
                  },
                  "presentation": {
                    
                  }
                },
                "externalRatings": {
                  "aggregatedRating": {
                    "rating": "3.9",
                    "ratingCount": "570"
                  },
                  "source": "GOOGLE",
                  "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                "featuredSectionInfo": {
                  "sectionTitle": "More"
                },
                "campaignId": "5ede612c-a21b-4a50-93fd-6ed55f8d1b2c",
                "showEoOffer": true,
                "priceComparisonComms": {
                  
                }
              },
              "analytics": {
                "screenName": "explore",
                "context": "{\"tid\":\"667033fd-f6c3-a6c2-4c3c-2e24a0547493\",\"grid\":\"fb89fd69-3f92-43ab-83db-d6fc590d2787\",\"queryUniqueId\":\"dddaf861-9ba0-e0ca-7184-fadc826cfe3c\",\"query\":\"Chinese\",\"adTrackingId\":\"cid=5ede612c-a21b-4a50-93fd-6ed55f8d1b2c~p=8~adgrpid=5ede612c-a21b-4a50-93fd-6ed55f8d1b2c#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=172682~plpr=SEARCH#RESTAURANT~st=chinese~eid=d9eadd0d-4055-413c-94f4-c74db8d24241~srvts=1782739820358\"}",
                "objectValue": "172682",
                "impressionObjectName": "impression-restaurant-ad",
                "clickObjectName": "click-restaurant-ad"
              },
              "ctaWithParams": {
                "link": "swiggy://menu",
                "type": "DEEPLINK",
                "params": {
                  "isSld": "false",
                  "sourceRequestId": "00000000000000000000000000000000",
                  "qrEnabled": "false",
                  "restaurant_id": "172682",
                  "query": "Chinese",
                  "sourceSessionId": "s760c95c9a8-bbd2-493c-ba94-f978be8cd",
                  "source": "SEARCH"
                }
              }
            }
          }
        },
        {
          "card": {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                "id": "594160",
                "name": "Momoman",
                "city": "10",
                "slugs": {
                  "restaurant": "momoman-chandkheda-chandkheda-2",
                  "city": "ahmedabad"
                },
                "cloudinaryImageId": "ddcea9051eb100fb49216a7ec3187287",
                "address": "SHOP NO A4-45,SWAGAT STATUS-1,NEW C G ROAD,NEAR VISHWAKARMA ENGINEERING COLLEGE,NIGAM NAGAR,CHANDKHEDA,AHMEDABAD, Ahmedabad Municipal Corporation, Ahmedabad, Gujarat-382424",
                "locality": "Chandkheda",
                "areaName": "Chandkheda",
                "costForTwo": "25000",
                "costForTwoMessage": "₹250 FOR TWO",
                "cuisines": [
                  "Chinese",
                  "Continental",
                  "Snacks",
                  "Street Food"
                ],
                "avgRating": 4.1,
                "feeDetails": {
                  
                },
                "parentId": "4416",
                "avgRatingString": "4.1",
                "totalRatingsString": "380",
                "sla": {
                  "deliveryTime": 30,
                  "minDeliveryTime": 30,
                  "maxDeliveryTime": 35,
                  "lastMileTravel": 3.8,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "RAIN_MODE_NONE",
                  "slaString": "30-35 MINS",
                  "lastMileTravelString": "3.8 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "opened": true,
                  "restaurantClosedMeta": {
                    
                  }
                },
                "badges": {
                  "imageBadges": [
                    {
                      "imageId": "Rxawards/_CATEGORY-Chinese.png",
                      "description": "Top-rated for Chinese, based on user votes."
                    }
                  ]
                },
                "aggregatedDiscountInfoV3": {
                  "header": "ITEMS",
                  "subHeader": "AT ₹139",
                  "logoCtx": {
                    "text": "BENEFITS"
                  }
                },
                "ratingSlab": "RATING_SLAB_5",
                "orderabilityCommunication": {
                  "title": {
                    
                  },
                  "subTitle": {
                    
                  },
                  "message": {
                    
                  },
                  "customIcon": {
                    
                  },
                  "commsStyling": {
                    
                  }
                },
                "cartOrderabilityNudgeBanner": {
                  "parameters": {
                    
                  },
                  "presentation": {
                    
                  }
                },
                "externalRatings": {
                  "aggregatedRating": {
                    "rating": "4.4",
                    "ratingCount": "20"
                  },
                  "source": "GOOGLE",
                  "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                "featuredSectionInfo": {
                  "sectionTitle": "More"
                },
                "showEoOffer": true,
                "priceComparisonComms": {
                  
                }
              },
              "analytics": {
                "screenName": "explore",
                "context": "{\"tid\":\"667033fd-f6c3-a6c2-4c3c-2e24a0547493\",\"grid\":\"fb89fd69-3f92-43ab-83db-d6fc590d2787\",\"queryUniqueId\":\"dddaf861-9ba0-e0ca-7184-fadc826cfe3c\",\"query\":\"Chinese\"}",
                "objectValue": "594160",
                "impressionObjectName": "impression-restaurant",
                "clickObjectName": "click-restaurant"
              },
              "ctaWithParams": {
                "link": "swiggy://menu",
                "type": "DEEPLINK",
                "params": {
                  "sourceRequestId": "00000000000000000000000000000000",
                  "qrEnabled": "false",
                  "restaurant_id": "594160",
                  "query": "Chinese",
                  "sourceSessionId": "s760c95c9a8-bbd2-493c-ba94-f978be8cd",
                  "source": "SEARCH",
                  "isSld": "false"
                }
              }
            }
          }
        },
        {
          "card": {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                "id": "1136424",
                "name": "Big Fat Monk",
                "city": "10",
                "slugs": {
                  "restaurant": "big-fat-monk-chandkheda-chandkheda",
                  "city": "ahmedabad"
                },
                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/6/4/3c95e590-b26c-4469-a8bd-42ee546584dd_1136424.JPG",
                "address": "Shop No- 10, The CBD, S P Ring Road, Zundal, Zundal , Gandhinagar Municipal Corporation, Gandhinagar, Gujarat - 384001",
                "locality": "Chandkheda",
                "areaName": "Chandkheda",
                "costForTwo": "25000",
                "costForTwoMessage": "₹250 FOR TWO",
                "cuisines": [
                  "Biryani"
                ],
                "avgRating": 3.7,
                "feeDetails": {
                  
                },
                "parentId": "477124",
                "avgRatingString": "3.7",
                "totalRatingsString": "118",
                "sla": {
                  "deliveryTime": 49,
                  "minDeliveryTime": 45,
                  "maxDeliveryTime": 50,
                  "lastMileTravel": 8.1,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "RAIN_MODE_NONE",
                  "slaString": "45-50 MINS",
                  "lastMileTravelString": "8.1 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "opened": true,
                  "restaurantClosedMeta": {
                    
                  }
                },
                "badges": {
                  
                },
                "aggregatedDiscountInfoV3": {
                  "header": "50% OFF",
                  "discountTag": "FLAT DEAL",
                  "logoCtx": {
                    "text": "BENEFITS"
                  }
                },
                "ratingSlab": "RATING_SLAB_4",
                "orderabilityCommunication": {
                  "title": {
                    
                  },
                  "subTitle": {
                    
                  },
                  "message": {
                    
                  },
                  "customIcon": {
                    
                  },
                  "commsStyling": {
                    
                  }
                },
                "cartOrderabilityNudgeBanner": {
                  "parameters": {
                    
                  },
                  "presentation": {
                    
                  }
                },
                "externalRatings": {
                  "aggregatedRating": {
                    "rating": "--"
                  }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                "featuredSectionInfo": {
                  "sectionTitle": "More"
                },
                "showEoOffer": true,
                "priceComparisonComms": {
                  
                }
              },
              "analytics": {
                "screenName": "explore",
                "context": "{\"tid\":\"667033fd-f6c3-a6c2-4c3c-2e24a0547493\",\"grid\":\"fb89fd69-3f92-43ab-83db-d6fc590d2787\",\"queryUniqueId\":\"dddaf861-9ba0-e0ca-7184-fadc826cfe3c\",\"query\":\"Chinese\"}",
                "objectValue": "1136424",
                "impressionObjectName": "impression-restaurant",
                "clickObjectName": "click-restaurant"
              },
              "ctaWithParams": {
                "link": "swiggy://menu",
                "type": "DEEPLINK",
                "params": {
                  "sourceRequestId": "00000000000000000000000000000000",
                  "qrEnabled": "false",
                  "restaurant_id": "1136424",
                  "query": "Chinese",
                  "sourceSessionId": "s760c95c9a8-bbd2-493c-ba94-f978be8cd",
                  "source": "SEARCH",
                  "isSld": "false"
                }
              }
            }
          }
        },
        {
          "card": {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                "id": "920693",
                "name": "Wow! Momo",
                "city": "10",
                "slugs": {
                  "restaurant": "wow-momo-swarnim-the-business-hub-chandkheda",
                  "city": "ahmedabad"
                },
                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/6/25/528d48fb-f34c-4640-80cc-7a5da3991f70_920693.JPG",
                "address": "SHOP NO 4, GROUND FLOOR, NEXT TO KFC OPP. STADIUM METRO STATION, MOTERA, CHANDKHEDA, AHMEDABAD 382424, Ahmedabad Municipal Corporation, Ahmedabad, Gujarat, 382424",
                "locality": "Swarnim The Business Hub",
                "areaName": "Motera",
                "costForTwo": "30000",
                "costForTwoMessage": "₹300 FOR TWO",
                "cuisines": [
                  "Momos",
                  "Chinese",
                  "fastfood",
                  "Asian",
                  "Beverages"
                ],
                "avgRating": 4.2,
                "feeDetails": {
                  
                },
                "parentId": "1776",
                "avgRatingString": "4.2",
                "totalRatingsString": "824",
                "sla": {
                  "deliveryTime": 37,
                  "minDeliveryTime": 35,
                  "maxDeliveryTime": 40,
                  "lastMileTravel": 4.1,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "RAIN_MODE_NONE",
                  "slaString": "35-40 MINS",
                  "lastMileTravelString": "4.1 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "opened": true,
                  "restaurantClosedMeta": {
                    
                  }
                },
                "badges": {
                  
                },
                "aggregatedDiscountInfoV3": {
                  "header": "70% OFF",
                  "subHeader": "UPTO ₹130",
                  "logoCtx": {
                    "text": "BENEFITS"
                  }
                },
                "ratingSlab": "RATING_SLAB_5",
                "orderabilityCommunication": {
                  "title": {
                    
                  },
                  "subTitle": {
                    
                  },
                  "message": {
                    
                  },
                  "customIcon": {
                    
                  },
                  "commsStyling": {
                    
                  }
                },
                "cartOrderabilityNudgeBanner": {
                  "parameters": {
                    
                  },
                  "presentation": {
                    
                  }
                },
                "externalRatings": {
                  "aggregatedRating": {
                    "rating": "--"
                  }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                "featuredSectionInfo": {
                  "sectionTitle": "More"
                },
                "showEoOffer": true,
                "priceComparisonComms": {
                  
                }
              },
              "analytics": {
                "screenName": "explore",
                "context": "{\"tid\":\"667033fd-f6c3-a6c2-4c3c-2e24a0547493\",\"grid\":\"fb89fd69-3f92-43ab-83db-d6fc590d2787\",\"queryUniqueId\":\"dddaf861-9ba0-e0ca-7184-fadc826cfe3c\",\"query\":\"Chinese\"}",
                "objectValue": "920693",
                "impressionObjectName": "impression-restaurant",
                "clickObjectName": "click-restaurant"
              },
              "ctaWithParams": {
                "link": "swiggy://menu",
                "type": "DEEPLINK",
                "params": {
                  "sourceRequestId": "00000000000000000000000000000000",
                  "qrEnabled": "false",
                  "restaurant_id": "920693",
                  "query": "Chinese",
                  "sourceSessionId": "s760c95c9a8-bbd2-493c-ba94-f978be8cd",
                  "source": "SEARCH",
                  "isSld": "false"
                }
              }
            }
          }
        },
        {
          "card": {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                "id": "648750",
                "name": "Mr Wok",
                "city": "10",
                "slugs": {
                  "restaurant": "mr-wok-gota-gota",
                  "city": "ahmedabad"
                },
                "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2025/8/25/6a916be3-cb54-4922-91ff-8c57e7e90783_05685be9-8a6b-413b-81aa-cd64c309adbc.JPG",
                "address": "INSIDE PATEL CAFE,NR KRISHNA HEIGHT,BEHIND GANESH GENESIS,GOTA-JAGATPUR ROAD,CHANDLODIYA,AHMEDABAD-382481",
                "locality": "Gota",
                "areaName": "GOTA",
                "costForTwo": "40000",
                "costForTwoMessage": "₹400 FOR TWO",
                "cuisines": [
                  "Chinese",
                  "Beverages",
                  "Fast Food"
                ],
                "avgRating": 4.3,
                "veg": true,
                "feeDetails": {
                  
                },
                "parentId": "140088",
                "avgRatingString": "4.3",
                "totalRatingsString": "812",
                "sla": {
                  "deliveryTime": 44,
                  "minDeliveryTime": 40,
                  "maxDeliveryTime": 45,
                  "lastMileTravel": 11.6,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "RAIN_MODE_NONE",
                  "slaString": "40-45 MINS",
                  "lastMileTravelString": "11.6 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "opened": true,
                  "restaurantClosedMeta": {
                    
                  }
                },
                "badges": {
                  "imageBadges": [
                    {
                      "imageId": "v1695133679/badges/Pure_Veg111.png",
                      "description": "Serves only 100% vegetarian food, with no non-veg items."
                    }
                  ]
                },
                "aggregatedDiscountInfoV3": {
                  "header": "ITEMS",
                  "subHeader": "AT ₹139",
                  "logoCtx": {
                    "text": "BENEFITS"
                  }
                },
                "ratingSlab": "RATING_SLAB_5",
                "orderabilityCommunication": {
                  "title": {
                    
                  },
                  "subTitle": {
                    
                  },
                  "message": {
                    
                  },
                  "customIcon": {
                    
                  },
                  "commsStyling": {
                    
                  }
                },
                "cartOrderabilityNudgeBanner": {
                  "parameters": {
                    
                  },
                  "presentation": {
                    
                  }
                },
                "externalRatings": {
                  "aggregatedRating": {
                    "rating": "3.6",
                    "ratingCount": "55"
                  },
                  "source": "GOOGLE",
                  "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                "featuredSectionInfo": {
                  "sectionTitle": "More"
                },
                "showEoOffer": true,
                "priceComparisonComms": {
                  
                }
              },
              "analytics": {
                "screenName": "explore",
                "context": "{\"tid\":\"667033fd-f6c3-a6c2-4c3c-2e24a0547493\",\"grid\":\"fb89fd69-3f92-43ab-83db-d6fc590d2787\",\"queryUniqueId\":\"dddaf861-9ba0-e0ca-7184-fadc826cfe3c\",\"query\":\"Chinese\"}",
                "objectValue": "648750",
                "impressionObjectName": "impression-restaurant",
                "clickObjectName": "click-restaurant"
              },
              "ctaWithParams": {
                "link": "swiggy://menu",
                "type": "DEEPLINK",
                "params": {
                  "sourceRequestId": "00000000000000000000000000000000",
                  "qrEnabled": "false",
                  "restaurant_id": "648750",
                  "query": "Chinese",
                  "sourceSessionId": "s760c95c9a8-bbd2-493c-ba94-f978be8cd",
                  "source": "SEARCH",
                  "isSld": "false"
                }
              }
            }
          }
        },
        {
          "card": {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                "id": "1218127",
                "name": "Radhe Dhokla-(Punjabi, Chinese, Thali & Biryani)",
                "city": "10",
                "slugs": {
                  "restaurant": "radhe-dhokla-chandkheda-chandkheda",
                  "city": "ahmedabad"
                },
                "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2025/9/17/c4baed4f-34d3-4f02-a7db-bb14a96c56f6_221f05b4-2109-4c0b-8588-32bc9e8dc58d.jpg_compressed",
                "address": "GF-5,THE LANDMARK,OPP.KB ROYAL PHOENIX,PANCHSHLOK CROSS ROAD,TRAGAD ROAD,CHANDKHEDA,AHMEDABAD ,Chandkheramotera(West Zone),Ahmedabad Municipal Corporation,Ahmedabad,Gujarat-382424\t",
                "locality": "Chandkheda",
                "areaName": "Chandkheda",
                "costForTwo": "30000",
                "costForTwoMessage": "₹300 FOR TWO",
                "cuisines": [
                  "Thalis",
                  "Gujarati",
                  "North Indian",
                  "snack"
                ],
                "avgRating": 4.4,
                "veg": true,
                "feeDetails": {
                  
                },
                "parentId": "521471",
                "avgRatingString": "4.4",
                "totalRatingsString": "642",
                "sla": {
                  "deliveryTime": 34,
                  "minDeliveryTime": 30,
                  "maxDeliveryTime": 35,
                  "lastMileTravel": 7.7,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "RAIN_MODE_NONE",
                  "slaString": "30-35 MINS",
                  "lastMileTravelString": "7.7 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "opened": true,
                  "restaurantClosedMeta": {
                    
                  }
                },
                "badges": {
                  "imageBadges": [
                    {
                      "imageId": "brand_cards/Badges%202026/123_Best%20in%20Newcomer2026.png",
                      "description": "Top-rated for Newcomer, based on user votes."
                    },
                    {
                      "imageId": "brand_cards/Badges%202026/50_Best%20in%20Dhokla2026.png",
                      "description": "Top-rated for Dhokla, based on user votes."
                    }
                  ]
                },
                "aggregatedDiscountInfoV3": {
                  "header": "₹125 OFF",
                  "subHeader": "ABOVE ₹299",
                  "discountTag": "FLAT DEAL",
                  "logoCtx": {
                    "text": "BENEFITS"
                  }
                },
                "ratingSlab": "RATING_SLAB_5",
                "orderabilityCommunication": {
                  "title": {
                    
                  },
                  "subTitle": {
                    
                  },
                  "message": {
                    
                  },
                  "customIcon": {
                    
                  },
                  "commsStyling": {
                    
                  }
                },
                "cartOrderabilityNudgeBanner": {
                  "parameters": {
                    
                  },
                  "presentation": {
                    
                  }
                },
                "externalRatings": {
                  "aggregatedRating": {
                    "rating": "--"
                  }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                "featuredSectionInfo": {
                  "sectionTitle": "More"
                },
                "showEoOffer": true,
                "priceComparisonComms": {
                  
                }
              },
              "analytics": {
                "screenName": "explore",
                "context": "{\"tid\":\"667033fd-f6c3-a6c2-4c3c-2e24a0547493\",\"grid\":\"fb89fd69-3f92-43ab-83db-d6fc590d2787\",\"queryUniqueId\":\"dddaf861-9ba0-e0ca-7184-fadc826cfe3c\",\"query\":\"Chinese\"}",
                "objectValue": "1218127",
                "impressionObjectName": "impression-restaurant",
                "clickObjectName": "click-restaurant"
              },
              "ctaWithParams": {
                "link": "swiggy://menu",
                "type": "DEEPLINK",
                "params": {
                  "restaurant_id": "1218127",
                  "query": "Chinese",
                  "sourceSessionId": "s760c95c9a8-bbd2-493c-ba94-f978be8cd",
                  "source": "SEARCH",
                  "isSld": "false",
                  "sourceRequestId": "00000000000000000000000000000000",
                  "qrEnabled": "false"
                }
              }
            }
          }
        },
        {
          "card": {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                "id": "1191646",
                "name": "Chinese And More",
                "city": "10",
                "slugs": {
                  "restaurant": "chinese-and-more-chandkheda-chandkheda",
                  "city": "ahmedabad"
                },
                "cloudinaryImageId": "b0132e9916d6addcd2770a97b4acbec2",
                "address": "15-16 URBANCHOWK NEAR MAPLE 99 RESTURANT , SP RING ROAD, NEAR TAPOVAN CIRCLE ,Chandkheramotera(West Zone),Ahmedabad Municipal Corporation,Ahmedabad,Gujarat-382424\t",
                "locality": "Chandkheda",
                "areaName": "Chandkheda",
                "costForTwo": "20000",
                "costForTwoMessage": "₹200 FOR TWO",
                "cuisines": [
                  "Chinese",
                  "Street Food",
                  "Fast Food"
                ],
                "avgRating": 4.1,
                "veg": true,
                "feeDetails": {
                  
                },
                "parentId": "239501",
                "avgRatingString": "4.1",
                "totalRatingsString": "15",
                "sla": {
                  "deliveryTime": 34,
                  "minDeliveryTime": 30,
                  "maxDeliveryTime": 35,
                  "lastMileTravel": 3.9,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "RAIN_MODE_NONE",
                  "slaString": "30-35 MINS",
                  "lastMileTravelString": "3.9 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "opened": true,
                  "restaurantClosedMeta": {
                    
                  }
                },
                "badges": {
                  
                },
                "aggregatedDiscountInfoV3": {
                  "header": "70% OFF",
                  "subHeader": "UPTO ₹140",
                  "logoCtx": {
                    "text": "BENEFITS"
                  }
                },
                "ratingSlab": "RATING_SLAB_5",
                "orderabilityCommunication": {
                  "title": {
                    
                  },
                  "subTitle": {
                    
                  },
                  "message": {
                    
                  },
                  "customIcon": {
                    
                  },
                  "commsStyling": {
                    
                  }
                },
                "cartOrderabilityNudgeBanner": {
                  "parameters": {
                    
                  },
                  "presentation": {
                    
                  }
                },
                "externalRatings": {
                  "aggregatedRating": {
                    "rating": "--"
                  }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                "featuredSectionInfo": {
                  "sectionTitle": "More"
                },
                "showEoOffer": true,
                "priceComparisonComms": {
                  
                }
              },
              "analytics": {
                "screenName": "explore",
                "context": "{\"tid\":\"667033fd-f6c3-a6c2-4c3c-2e24a0547493\",\"grid\":\"fb89fd69-3f92-43ab-83db-d6fc590d2787\",\"queryUniqueId\":\"dddaf861-9ba0-e0ca-7184-fadc826cfe3c\",\"query\":\"Chinese\"}",
                "objectValue": "1191646",
                "impressionObjectName": "impression-restaurant",
                "clickObjectName": "click-restaurant"
              },
              "ctaWithParams": {
                "link": "swiggy://menu",
                "type": "DEEPLINK",
                "params": {
                  "restaurant_id": "1191646",
                  "query": "Chinese",
                  "sourceSessionId": "s760c95c9a8-bbd2-493c-ba94-f978be8cd",
                  "source": "SEARCH",
                  "isSld": "false",
                  "sourceRequestId": "00000000000000000000000000000000",
                  "qrEnabled": "false"
                }
              }
            }
          }
        },
        {
          "card": {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                "id": "58634",
                "name": "Gwalia Sweets & Fast Food",
                "city": "10",
                "slugs": {
                  "restaurant": "gwalia-sweets-chandkheda-ahmedabad-chandkheda",
                  "city": "ahmedabad"
                },
                "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2025/5/5/37115fa1-a24d-4f19-bee3-62552e17652d_cb68e052-5651-4444-9d14-b684aabff5d5.png_compressed",
                "address": "4D Square Mall, Ground Floor, Opposite Iit Engineering College, Motera, Chandkheda, Ahmedabad Gujarat.",
                "locality": "Motera",
                "areaName": "Motera",
                "costForTwo": "30000",
                "costForTwoMessage": "₹300 FOR TWO",
                "cuisines": [
                  "Sweets",
                  "Thalis",
                  "North Indian",
                  "Chaat",
                  "Desserts",
                  "Snacks",
                  "Beverages"
                ],
                "avgRating": 4.5,
                "veg": true,
                "feeDetails": {
                  
                },
                "parentId": "92340",
                "avgRatingString": "4.5",
                "totalRatingsString": "36K+",
                "sla": {
                  "deliveryTime": 25,
                  "minDeliveryTime": 20,
                  "maxDeliveryTime": 25,
                  "lastMileTravel": 4.2,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "RAIN_MODE_NONE",
                  "slaString": "20-25 MINS",
                  "lastMileTravelString": "4.2 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "opened": true,
                  "restaurantClosedMeta": {
                    
                  }
                },
                "badges": {
                  "imageBadges": [
                    {
                      "imageId": "brand_cards/Badges%202026/57_Best%20in%20Indian%20Sweets2026.png",
                      "description": "Top-rated for Indian Sweets, based on user votes."
                    },
                    {
                      "imageId": "brand_cards/Badges%202026/80_Best%20in%20Thali2026.png",
                      "description": "Top-rated for Thali, based on user votes."
                    }
                  ]
                },
                "aggregatedDiscountInfoV3": {
                  "header": "₹75 OFF",
                  "discountTag": "FLAT DEAL",
                  "logoCtx": {
                    "text": "BENEFITS"
                  }
                },
                "ratingSlab": "RATING_SLAB_5",
                "orderabilityCommunication": {
                  "title": {
                    
                  },
                  "subTitle": {
                    
                  },
                  "message": {
                    
                  },
                  "customIcon": {
                    
                  },
                  "commsStyling": {
                    
                  }
                },
                "cartOrderabilityNudgeBanner": {
                  "parameters": {
                    
                  },
                  "presentation": {
                    
                  }
                },
                "externalRatings": {
                  "aggregatedRating": {
                    "rating": "4.1",
                    "ratingCount": "3.4K+"
                  },
                  "source": "GOOGLE",
                  "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                "featuredSectionInfo": {
                  "sectionTitle": "More"
                },
                "showEoOffer": true,
                "priceComparisonComms": {
                  
                }
              },
              "analytics": {
                "screenName": "explore",
                "context": "{\"tid\":\"667033fd-f6c3-a6c2-4c3c-2e24a0547493\",\"grid\":\"fb89fd69-3f92-43ab-83db-d6fc590d2787\",\"queryUniqueId\":\"dddaf861-9ba0-e0ca-7184-fadc826cfe3c\",\"query\":\"Chinese\"}",
                "objectValue": "58634",
                "impressionObjectName": "impression-restaurant",
                "clickObjectName": "click-restaurant"
              },
              "ctaWithParams": {
                "link": "swiggy://menu",
                "type": "DEEPLINK",
                "params": {
                  "restaurant_id": "58634",
                  "query": "Chinese",
                  "sourceSessionId": "s760c95c9a8-bbd2-493c-ba94-f978be8cd",
                  "source": "SEARCH",
                  "isSld": "false",
                  "sourceRequestId": "00000000000000000000000000000000",
                  "qrEnabled": "false"
                }
              }
            }
          }
        },
        {
          "card": {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                "id": "410780",
                "name": "Chinese Adda",
                "city": "10",
                "slugs": {
                  "restaurant": "chinese-adda-chandkheda-chandkheda",
                  "city": "ahmedabad"
                },
                "cloudinaryImageId": "a1a720a68ca722e52bc0597b43258a58",
                "address": "GF-9, sukun residency, near sona cross road, new CG road chandkheda, 382424",
                "locality": "Sukun Residency",
                "areaName": "Chandkheda",
                "costForTwo": "50000",
                "costForTwoMessage": "₹500 FOR TWO",
                "cuisines": [
                  "Chinese",
                  "Street Food"
                ],
                "avgRating": 4,
                "veg": true,
                "feeDetails": {
                  
                },
                "parentId": "16605",
                "avgRatingString": "4.0",
                "totalRatingsString": "391",
                "sla": {
                  "deliveryTime": 35,
                  "minDeliveryTime": 30,
                  "maxDeliveryTime": 35,
                  "lastMileTravel": 5,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "RAIN_MODE_NONE",
                  "slaString": "30-35 MINS",
                  "lastMileTravelString": "5.0 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "opened": true,
                  "restaurantClosedMeta": {
                    
                  }
                },
                "badges": {
                  
                },
                "aggregatedDiscountInfoV3": {
                  "header": "25% OFF",
                  "subHeader": "UPTO ₹125",
                  "logoCtx": {
                    "text": "BENEFITS"
                  }
                },
                "ratingSlab": "RATING_SLAB_4",
                "orderabilityCommunication": {
                  "title": {
                    
                  },
                  "subTitle": {
                    
                  },
                  "message": {
                    
                  },
                  "customIcon": {
                    
                  },
                  "commsStyling": {
                    
                  }
                },
                "cartOrderabilityNudgeBanner": {
                  "parameters": {
                    
                  },
                  "presentation": {
                    
                  }
                },
                "externalRatings": {
                  "aggregatedRating": {
                    "rating": "--"
                  }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                "featuredSectionInfo": {
                  "sectionTitle": "More"
                },
                "showEoOffer": true,
                "priceComparisonComms": {
                  
                }
              },
              "analytics": {
                "screenName": "explore",
                "context": "{\"tid\":\"667033fd-f6c3-a6c2-4c3c-2e24a0547493\",\"grid\":\"fb89fd69-3f92-43ab-83db-d6fc590d2787\",\"queryUniqueId\":\"dddaf861-9ba0-e0ca-7184-fadc826cfe3c\",\"query\":\"Chinese\"}",
                "objectValue": "410780",
                "impressionObjectName": "impression-restaurant",
                "clickObjectName": "click-restaurant"
              },
              "ctaWithParams": {
                "link": "swiggy://menu",
                "type": "DEEPLINK",
                "params": {
                  "restaurant_id": "410780",
                  "query": "Chinese",
                  "sourceSessionId": "s760c95c9a8-bbd2-493c-ba94-f978be8cd",
                  "source": "SEARCH",
                  "isSld": "false",
                  "sourceRequestId": "00000000000000000000000000000000",
                  "qrEnabled": "false"
                }
              }
            }
          }
        },
        {
          "card": {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                "id": "49562",
                "name": "Season 9",
                "city": "10",
                "slugs": {
                  "restaurant": "season-9-naranpura-navrangpura",
                  "city": "ahmedabad"
                },
                "cloudinaryImageId": "6fd403c34003512bbc534b5e99de0947",
                "address": "Shivalik Yash, 132 ring road BRTS bus stop, 103, NH228, Opposite Shastri Nagar, Naranpura, Ahmedabad, Gujarat 380013",
                "locality": "Naranpura",
                "areaName": "Naranpura",
                "costForTwo": "30000",
                "costForTwoMessage": "₹300 FOR TWO",
                "cuisines": [
                  "North Indian",
                  "Thalis",
                  "Indian",
                  "Chinese",
                  "Biryani"
                ],
                "avgRating": 4.3,
                "veg": true,
                "feeDetails": {
                  
                },
                "parentId": "179676",
                "avgRatingString": "4.3",
                "totalRatingsString": "33K+",
                "sla": {
                  "deliveryTime": 66,
                  "minDeliveryTime": 65,
                  "maxDeliveryTime": 75,
                  "lastMileTravel": 11.4,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "RAIN_MODE_NONE",
                  "slaString": "65-75 MINS",
                  "lastMileTravelString": "11.4 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "opened": true,
                  "restaurantClosedMeta": {
                    
                  }
                },
                "badges": {
                  "imageBadges": [
                    {
                      "imageId": "v1695133679/badges/Pure_Veg111.png",
                      "description": "Serves only 100% vegetarian food, with no non-veg items."
                    }
                  ]
                },
                "sld": true,
                "aggregatedDiscountInfoV3": {
                  "header": "70% OFF",
                  "subHeader": "UPTO ₹140",
                  "logoCtx": {
                    "text": "BENEFITS"
                  }
                },
                "ratingSlab": "RATING_SLAB_5",
                "orderabilityCommunication": {
                  "title": {
                    
                  },
                  "subTitle": {
                    
                  },
                  "message": {
                    
                  },
                  "customIcon": {
                    
                  },
                  "commsStyling": {
                    
                  }
                },
                "cartOrderabilityNudgeBanner": {
                  "parameters": {
                    
                  },
                  "presentation": {
                    
                  }
                },
                "externalRatings": {
                  "aggregatedRating": {
                    "rating": "3.7",
                    "ratingCount": "1.5K+"
                  },
                  "source": "GOOGLE",
                  "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                "featuredSectionInfo": {
                  "sectionTitle": "More"
                },
                "showEoOffer": true,
                "priceComparisonComms": {
                  
                }
              },
              "analytics": {
                "screenName": "explore",
                "context": "{\"tid\":\"667033fd-f6c3-a6c2-4c3c-2e24a0547493\",\"grid\":\"fb89fd69-3f92-43ab-83db-d6fc590d2787\",\"queryUniqueId\":\"dddaf861-9ba0-e0ca-7184-fadc826cfe3c\",\"query\":\"Chinese\"}",
                "objectValue": "49562",
                "impressionObjectName": "impression-restaurant-sld",
                "clickObjectName": "click-restaurant-sld"
              },
              "ctaWithParams": {
                "link": "swiggy://menu",
                "type": "DEEPLINK",
                "params": {
                  "query": "Chinese",
                  "sourceSessionId": "s760c95c9a8-bbd2-493c-ba94-f978be8cd",
                  "source": "SEARCH",
                  "isSld": "true",
                  "sourceRequestId": "00000000000000000000000000000000",
                  "qrEnabled": "false",
                  "restaurant_id": "49562"
                }
              }
            }
          }
        },
        {
          "card": {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                "id": "1382127",
                "name": "HL Frankie",
                "city": "10",
                "slugs": {
                  "restaurant": "hl-frankie-chandkheda-chandkheda",
                  "city": "ahmedabad"
                },
                "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2025/5/30/dac58b38-eeb0-4365-bce2-150b9c4ee1cb_da9bc7c1-5e52-4265-8351-76a8ea112bbd.JPG_compressed",
                "address": "38 , Shree Sarju Arena , NA,ZUNDAL , Gandhinagar , 382421 ,Zundal ,Gandhinagar Municipal Corporation,Gandhinagar,Gujarat-382421",
                "locality": "Chandkheda",
                "areaName": "ZUNDAL",
                "costForTwo": "50000",
                "costForTwoMessage": "₹500 FOR TWO",
                "cuisines": [
                  "Fast Food",
                  "Burgers",
                  "Cafe",
                  "Indian",
                  "North Indian",
                  "Asian"
                ],
                "avgRating": 4.4,
                "veg": true,
                "feeDetails": {
                  
                },
                "parentId": "96246",
                "avgRatingString": "4.4",
                "totalRatingsString": "10",
                "sla": {
                  "deliveryTime": 42,
                  "minDeliveryTime": 40,
                  "maxDeliveryTime": 45,
                  "lastMileTravel": 8.5,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "RAIN_MODE_NONE",
                  "slaString": "40-45 MINS",
                  "lastMileTravelString": "8.5 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "opened": true,
                  "restaurantClosedMeta": {
                    
                  }
                },
                "badges": {
                  
                },
                "aggregatedDiscountInfoV3": {
                  "header": "₹150 OFF",
                  "subHeader": "ABOVE ₹299",
                  "discountTag": "FLAT DEAL",
                  "logoCtx": {
                    "text": "BENEFITS"
                  }
                },
                "ratingSlab": "RATING_SLAB_5",
                "orderabilityCommunication": {
                  "title": {
                    
                  },
                  "subTitle": {
                    
                  },
                  "message": {
                    
                  },
                  "customIcon": {
                    
                  },
                  "commsStyling": {
                    
                  }
                },
                "cartOrderabilityNudgeBanner": {
                  "parameters": {
                    
                  },
                  "presentation": {
                    
                  }
                },
                "externalRatings": {
                  "aggregatedRating": {
                    "rating": "4.3",
                    "ratingCount": "28"
                  },
                  "source": "GOOGLE",
                  "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                "featuredSectionInfo": {
                  "sectionTitle": "More"
                },
                "showEoOffer": true,
                "priceComparisonComms": {
                  
                }
              },
              "analytics": {
                "screenName": "explore",
                "context": "{\"tid\":\"667033fd-f6c3-a6c2-4c3c-2e24a0547493\",\"grid\":\"fb89fd69-3f92-43ab-83db-d6fc590d2787\",\"queryUniqueId\":\"dddaf861-9ba0-e0ca-7184-fadc826cfe3c\",\"query\":\"Chinese\"}",
                "objectValue": "1382127",
                "impressionObjectName": "impression-restaurant",
                "clickObjectName": "click-restaurant"
              },
              "ctaWithParams": {
                "link": "swiggy://menu",
                "type": "DEEPLINK",
                "params": {
                  "query": "Chinese",
                  "sourceSessionId": "s760c95c9a8-bbd2-493c-ba94-f978be8cd",
                  "source": "SEARCH",
                  "isSld": "false",
                  "sourceRequestId": "00000000000000000000000000000000",
                  "qrEnabled": "false",
                  "restaurant_id": "1382127"
                }
              }
            }
          }
        },
        {
          "card": {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                "id": "366929",
                "name": "Jay Bhavani Vadapav",
                "city": "10",
                "slugs": {
                  "restaurant": "jay-bhavani-vadapav-chandkheda-chandkheda-4",
                  "city": "ahmedabad"
                },
                "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2026/5/24/6cf2932a-a52e-48ea-bb5a-386161ac0ff5_cffa1f14-1b8e-4891-a15c-e513c5d895ff.jpg",
                "address": "SHOP NO- A/G/06, AADITYA AVENUE, NR. SAMRUDDHI FLATS, MOETRA GANDHINAGAR ROAD, Ahmedabad Municipal Corporation, Ahmedabad, Gujarat-380005",
                "locality": "Chandkheda",
                "areaName": "Chandkheda",
                "costForTwo": "20000",
                "costForTwoMessage": "₹200 FOR TWO",
                "cuisines": [
                  "Chinese",
                  "Snacks",
                  "Beverages"
                ],
                "avgRating": 4.1,
                "feeDetails": {
                  
                },
                "parentId": "4428",
                "avgRatingString": "4.1",
                "totalRatingsString": "1.2K+",
                "sla": {
                  "deliveryTime": 29,
                  "minDeliveryTime": 25,
                  "maxDeliveryTime": 30,
                  "lastMileTravel": 3.7,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "RAIN_MODE_NONE",
                  "slaString": "25-30 MINS",
                  "lastMileTravelString": "3.7 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "opened": true,
                  "restaurantClosedMeta": {
                    
                  }
                },
                "badges": {
                  "imageBadges": [
                    {
                      "imageId": "brand_cards/Badges%202026/82_Best%20in%20Vada%20Pav2026.png",
                      "description": "Top-rated for Vada Pav, based on user votes."
                    },
                    {
                      "imageId": "v1695133679/badges/Pure_Veg111.png",
                      "description": "Serves only 100% vegetarian food, with no non-veg items."
                    }
                  ]
                },
                "aggregatedDiscountInfoV3": {
                  "header": "ITEMS",
                  "subHeader": "AT ₹49",
                  "logoCtx": {
                    "text": "BENEFITS"
                  }
                },
                "ratingSlab": "RATING_SLAB_5",
                "orderabilityCommunication": {
                  "title": {
                    
                  },
                  "subTitle": {
                    
                  },
                  "message": {
                    
                  },
                  "customIcon": {
                    
                  },
                  "commsStyling": {
                    
                  }
                },
                "cartOrderabilityNudgeBanner": {
                  "parameters": {
                    
                  },
                  "presentation": {
                    
                  }
                },
                "externalRatings": {
                  "aggregatedRating": {
                    "rating": "3.0",
                    "ratingCount": "49"
                  },
                  "source": "GOOGLE",
                  "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                "featuredSectionInfo": {
                  "sectionTitle": "More"
                },
                "showEoOffer": true,
                "priceComparisonComms": {
                  
                }
              },
              "analytics": {
                "screenName": "explore",
                "context": "{\"tid\":\"667033fd-f6c3-a6c2-4c3c-2e24a0547493\",\"grid\":\"fb89fd69-3f92-43ab-83db-d6fc590d2787\",\"queryUniqueId\":\"dddaf861-9ba0-e0ca-7184-fadc826cfe3c\",\"query\":\"Chinese\"}",
                "objectValue": "366929",
                "impressionObjectName": "impression-restaurant",
                "clickObjectName": "click-restaurant"
              },
              "ctaWithParams": {
                "link": "swiggy://menu",
                "type": "DEEPLINK",
                "params": {
                  "sourceRequestId": "00000000000000000000000000000000",
                  "qrEnabled": "false",
                  "restaurant_id": "366929",
                  "query": "Chinese",
                  "sourceSessionId": "s760c95c9a8-bbd2-493c-ba94-f978be8cd",
                  "source": "SEARCH",
                  "isSld": "false"
                }
              }
            }
          }
        },
        {
          "card": {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                "id": "1136423",
                "name": "Wakka Makka Chinese",
                "city": "10",
                "slugs": {
                  "restaurant": "wakka-makka-chinese-chandkheda-chandkheda-2",
                  "city": "ahmedabad"
                },
                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/2/14/dd19bb3f-e0f0-49ee-8d56-d956aa530864_1136423.JPG",
                "address": "Shop No- 10, The CBD, S P Ring Road, Zundal, Zundal , Gandhinagar Municipal Corporation, Gandhinagar, Gujarat - 384001",
                "locality": "Chandkheda",
                "areaName": "Chandkheda",
                "costForTwo": "25000",
                "costForTwoMessage": "₹250 FOR TWO",
                "cuisines": [
                  "Biryani",
                  "Desserts",
                  "Mughlai",
                  "Beverages",
                  "Tandoor",
                  "Healthy Food",
                  "North Indian"
                ],
                "avgRating": 3.6,
                "feeDetails": {
                  
                },
                "parentId": "288250",
                "avgRatingString": "3.6",
                "totalRatingsString": "34",
                "sla": {
                  "deliveryTime": 50,
                  "minDeliveryTime": 45,
                  "maxDeliveryTime": 50,
                  "lastMileTravel": 8.1,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "RAIN_MODE_NONE",
                  "slaString": "45-50 MINS",
                  "lastMileTravelString": "8.1 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "opened": true,
                  "restaurantClosedMeta": {
                    
                  }
                },
                "badges": {
                  
                },
                "aggregatedDiscountInfoV3": {
                  "header": "50% OFF",
                  "discountTag": "FLAT DEAL",
                  "logoCtx": {
                    "text": "BENEFITS"
                  }
                },
                "ratingSlab": "RATING_SLAB_4",
                "orderabilityCommunication": {
                  "title": {
                    
                  },
                  "subTitle": {
                    
                  },
                  "message": {
                    
                  },
                  "customIcon": {
                    
                  },
                  "commsStyling": {
                    
                  }
                },
                "cartOrderabilityNudgeBanner": {
                  "parameters": {
                    
                  },
                  "presentation": {
                    
                  }
                },
                "externalRatings": {
                  "aggregatedRating": {
                    "rating": "--"
                  }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                "featuredSectionInfo": {
                  "sectionTitle": "More"
                },
                "showEoOffer": true,
                "priceComparisonComms": {
                  
                }
              },
              "analytics": {
                "screenName": "explore",
                "context": "{\"tid\":\"667033fd-f6c3-a6c2-4c3c-2e24a0547493\",\"grid\":\"fb89fd69-3f92-43ab-83db-d6fc590d2787\",\"queryUniqueId\":\"dddaf861-9ba0-e0ca-7184-fadc826cfe3c\",\"query\":\"Chinese\"}",
                "objectValue": "1136423",
                "impressionObjectName": "impression-restaurant",
                "clickObjectName": "click-restaurant"
              },
              "ctaWithParams": {
                "link": "swiggy://menu",
                "type": "DEEPLINK",
                "params": {
                  "source": "SEARCH",
                  "isSld": "false",
                  "sourceRequestId": "00000000000000000000000000000000",
                  "qrEnabled": "false",
                  "restaurant_id": "1136423",
                  "query": "Chinese",
                  "sourceSessionId": "s760c95c9a8-bbd2-493c-ba94-f978be8cd"
                }
              }
            }
          }
        },
        {
          "card": {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                "id": "63478",
                "name": "Shivam Snacks",
                "city": "10",
                "slugs": {
                  "restaurant": "shivam-snacks-gota-vastrapur",
                  "city": "ahmedabad"
                },
                "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2025/5/16/c7422317-c914-4f31-a2d7-222799d9b876_1777d7ac-59e3-4ff1-91bd-e18f7e353f7c.jpeg_compressed",
                "address": "18-19-20, Vandemataram Cross Wind, Opposite Vandemataram Icon, Gota",
                "locality": "Gota",
                "areaName": "Gota",
                "costForTwo": "40000",
                "costForTwoMessage": "₹400 FOR TWO",
                "cuisines": [
                  "Snacks",
                  "Indian",
                  "South Indian"
                ],
                "avgRating": 4.4,
                "veg": true,
                "feeDetails": {
                  
                },
                "parentId": "7630",
                "avgRatingString": "4.4",
                "totalRatingsString": "11K+",
                "sla": {
                  "deliveryTime": 42,
                  "minDeliveryTime": 40,
                  "maxDeliveryTime": 45,
                  "lastMileTravel": 10.4,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "RAIN_MODE_NONE",
                  "slaString": "40-45 MINS",
                  "lastMileTravelString": "10.4 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "opened": true,
                  "restaurantClosedMeta": {
                    
                  }
                },
                "badges": {
                  "imageBadges": [
                    {
                      "imageId": "v1695133679/badges/Pure_Veg111.png",
                      "description": "Serves only 100% vegetarian food, with no non-veg items."
                    }
                  ]
                },
                "aggregatedDiscountInfoV3": {
                  "header": "ITEMS",
                  "subHeader": "AT ₹119",
                  "logoCtx": {
                    "text": "BENEFITS"
                  }
                },
                "ratingSlab": "RATING_SLAB_5",
                "orderabilityCommunication": {
                  "title": {
                    
                  },
                  "subTitle": {
                    
                  },
                  "message": {
                    
                  },
                  "customIcon": {
                    
                  },
                  "commsStyling": {
                    
                  }
                },
                "cartOrderabilityNudgeBanner": {
                  "parameters": {
                    
                  },
                  "presentation": {
                    
                  }
                },
                "externalRatings": {
                  "aggregatedRating": {
                    "rating": "3.9",
                    "ratingCount": "1.3K+"
                  },
                  "source": "GOOGLE",
                  "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                "featuredSectionInfo": {
                  "sectionTitle": "More"
                },
                "showEoOffer": true,
                "priceComparisonComms": {
                  
                }
              },
              "analytics": {
                "screenName": "explore",
                "context": "{\"tid\":\"667033fd-f6c3-a6c2-4c3c-2e24a0547493\",\"grid\":\"fb89fd69-3f92-43ab-83db-d6fc590d2787\",\"queryUniqueId\":\"dddaf861-9ba0-e0ca-7184-fadc826cfe3c\",\"query\":\"Chinese\"}",
                "objectValue": "63478",
                "impressionObjectName": "impression-restaurant",
                "clickObjectName": "click-restaurant"
              },
              "ctaWithParams": {
                "link": "swiggy://menu",
                "type": "DEEPLINK",
                "params": {
                  "qrEnabled": "false",
                  "restaurant_id": "63478",
                  "query": "Chinese",
                  "sourceSessionId": "s760c95c9a8-bbd2-493c-ba94-f978be8cd",
                  "source": "SEARCH",
                  "isSld": "false",
                  "sourceRequestId": "00000000000000000000000000000000"
                }
              }
            }
          }
        },
        {
          "card": {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                "id": "1083428",
                "name": "Hakka Junction",
                "city": "10",
                "slugs": {
                  "restaurant": "hakka-junction-gota-gota",
                  "city": "ahmedabad"
                },
                "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/9/19/2f113377-fc3c-4fb3-b9cf-13da4b45079d_869e22f2-461d-4ce8-9449-8709b57768fa.jpeg",
                "address": "Spice Hub Restro Cafe Near Shambhu Cafe Khoraj Gandhinagar ,Gandhinagar,Gandhinagar,Gujarat-382421\t",
                "locality": "Gandhinagar",
                "areaName": "GOTA",
                "costForTwo": "30000",
                "costForTwoMessage": "₹300 FOR TWO",
                "cuisines": [
                  "Chinese",
                  "Beverages"
                ],
                "avgRating": 4,
                "veg": true,
                "feeDetails": {
                  
                },
                "parentId": "581701",
                "avgRatingString": "4.0",
                "totalRatingsString": "132",
                "sla": {
                  "deliveryTime": 40,
                  "minDeliveryTime": 35,
                  "maxDeliveryTime": 40,
                  "lastMileTravel": 11.2,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "RAIN_MODE_NONE",
                  "slaString": "35-40 MINS",
                  "lastMileTravelString": "11.2 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "opened": true,
                  "restaurantClosedMeta": {
                    
                  }
                },
                "badges": {
                  
                },
                "aggregatedDiscountInfoV3": {
                  "header": "ITEMS",
                  "subHeader": "AT ₹29",
                  "logoCtx": {
                    "text": "BENEFITS"
                  }
                },
                "ratingSlab": "RATING_SLAB_4",
                "orderabilityCommunication": {
                  "title": {
                    
                  },
                  "subTitle": {
                    
                  },
                  "message": {
                    
                  },
                  "customIcon": {
                    
                  },
                  "commsStyling": {
                    
                  }
                },
                "cartOrderabilityNudgeBanner": {
                  "parameters": {
                    
                  },
                  "presentation": {
                    
                  }
                },
                "externalRatings": {
                  "aggregatedRating": {
                    "rating": "--"
                  }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                "featuredSectionInfo": {
                  "sectionTitle": "More"
                },
                "showEoOffer": true,
                "priceComparisonComms": {
                  
                }
              },
              "analytics": {
                "screenName": "explore",
                "context": "{\"tid\":\"667033fd-f6c3-a6c2-4c3c-2e24a0547493\",\"grid\":\"fb89fd69-3f92-43ab-83db-d6fc590d2787\",\"queryUniqueId\":\"dddaf861-9ba0-e0ca-7184-fadc826cfe3c\",\"query\":\"Chinese\"}",
                "objectValue": "1083428",
                "impressionObjectName": "impression-restaurant",
                "clickObjectName": "click-restaurant"
              },
              "ctaWithParams": {
                "link": "swiggy://menu",
                "type": "DEEPLINK",
                "params": {
                  "sourceRequestId": "00000000000000000000000000000000",
                  "qrEnabled": "false",
                  "restaurant_id": "1083428",
                  "query": "Chinese",
                  "sourceSessionId": "s760c95c9a8-bbd2-493c-ba94-f978be8cd",
                  "source": "SEARCH",
                  "isSld": "false"
                }
              }
            }
          }
        },
        {
          "card": {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                "id": "234472",
                "name": "Hungry Birds",
                "city": "10",
                "slugs": {
                  "restaurant": "hungry-birds-gandhinagar-gandhinagar",
                  "city": "ahmedabad"
                },
                "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2025/1/1/4dc3fe47-5fdd-46a5-9bd1-de0165d9ff33_be465f61-1c41-44b1-a58a-7c1fd98822f2.jpg",
                "address": "9, Sukun Residency, Near Sona Cross Road, New Cg Road Chandkheda, 382424",
                "locality": "Chandkheda",
                "areaName": "Chandkheda",
                "costForTwo": "30000",
                "costForTwoMessage": "₹300 FOR TWO",
                "cuisines": [
                  "North Indian",
                  "Chinese",
                  "Biryani",
                  "Thalis"
                ],
                "avgRating": 4.3,
                "veg": true,
                "feeDetails": {
                  
                },
                "parentId": "3154",
                "avgRatingString": "4.3",
                "totalRatingsString": "1.8K+",
                "sla": {
                  "deliveryTime": 35,
                  "minDeliveryTime": 30,
                  "maxDeliveryTime": 35,
                  "lastMileTravel": 5,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "RAIN_MODE_NONE",
                  "slaString": "30-35 MINS",
                  "lastMileTravelString": "5.0 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "opened": true,
                  "restaurantClosedMeta": {
                    
                  }
                },
                "badges": {
                  
                },
                "aggregatedDiscountInfoV3": {
                  "header": "25% OFF",
                  "subHeader": "UPTO ₹125",
                  "logoCtx": {
                    "text": "BENEFITS"
                  }
                },
                "ratingSlab": "RATING_SLAB_5",
                "orderabilityCommunication": {
                  "title": {
                    
                  },
                  "subTitle": {
                    
                  },
                  "message": {
                    
                  },
                  "customIcon": {
                    
                  },
                  "commsStyling": {
                    
                  }
                },
                "cartOrderabilityNudgeBanner": {
                  "parameters": {
                    
                  },
                  "presentation": {
                    
                  }
                },
                "externalRatings": {
                  "aggregatedRating": {
                    "rating": "3.5",
                    "ratingCount": "73"
                  },
                  "source": "GOOGLE",
                  "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                "featuredSectionInfo": {
                  "sectionTitle": "More"
                },
                "showEoOffer": true,
                "priceComparisonComms": {
                  
                }
              },
              "analytics": {
                "screenName": "explore",
                "context": "{\"tid\":\"667033fd-f6c3-a6c2-4c3c-2e24a0547493\",\"grid\":\"fb89fd69-3f92-43ab-83db-d6fc590d2787\",\"queryUniqueId\":\"dddaf861-9ba0-e0ca-7184-fadc826cfe3c\",\"query\":\"Chinese\"}",
                "objectValue": "234472",
                "impressionObjectName": "impression-restaurant",
                "clickObjectName": "click-restaurant"
              },
              "ctaWithParams": {
                "link": "swiggy://menu",
                "type": "DEEPLINK",
                "params": {
                  "restaurant_id": "234472",
                  "query": "Chinese",
                  "sourceSessionId": "s760c95c9a8-bbd2-493c-ba94-f978be8cd",
                  "source": "SEARCH",
                  "isSld": "false",
                  "sourceRequestId": "00000000000000000000000000000000",
                  "qrEnabled": "false"
                }
              }
            }
          }
        },
        {
          "card": {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                "id": "1222557",
                "name": "Yummy Junction",
                "city": "10",
                "slugs": {
                  "restaurant": "yummy-junction-chandkheda-chandkheda",
                  "city": "ahmedabad"
                },
                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/1/d14a513e-c85e-4d79-8f4d-dfd51ebbcb4a_1222557.jpg",
                "address": "Shop No : 28 , Floor :  , Prabhunagar Tenement , Rangjyot Society, Parvati Nagar, Acher, Ahmedabad, Gujarat 380005, India 380005",
                "locality": "Chandkheda",
                "areaName": "Chandkheda",
                "costForTwo": "10000",
                "costForTwoMessage": "₹100 FOR TWO",
                "cuisines": [
                  "Chinese"
                ],
                "feeDetails": {
                  
                },
                "parentId": "228678",
                "avgRatingString": "--",
                "sla": {
                  "deliveryTime": 35,
                  "minDeliveryTime": 35,
                  "maxDeliveryTime": 40,
                  "lastMileTravel": 4.7,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "RAIN_MODE_NONE",
                  "slaString": "35-40 MINS",
                  "lastMileTravelString": "4.7 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "opened": true,
                  "restaurantClosedMeta": {
                    
                  }
                },
                "badges": {
                  
                },
                "aggregatedDiscountInfoV3": {
                  "header": "60% OFF",
                  "subHeader": "UPTO ₹120",
                  "logoCtx": {
                    "text": "BENEFITS"
                  }
                },
                "orderabilityCommunication": {
                  "title": {
                    
                  },
                  "subTitle": {
                    
                  },
                  "message": {
                    
                  },
                  "customIcon": {
                    
                  },
                  "commsStyling": {
                    
                  }
                },
                "cartOrderabilityNudgeBanner": {
                  "parameters": {
                    
                  },
                  "presentation": {
                    
                  }
                },
                "externalRatings": {
                  "aggregatedRating": {
                    "rating": "--"
                  }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                "featuredSectionInfo": {
                  "sectionTitle": "More"
                },
                "showEoOffer": true,
                "priceComparisonComms": {
                  
                }
              },
              "analytics": {
                "screenName": "explore",
                "context": "{\"tid\":\"667033fd-f6c3-a6c2-4c3c-2e24a0547493\",\"grid\":\"fb89fd69-3f92-43ab-83db-d6fc590d2787\",\"queryUniqueId\":\"dddaf861-9ba0-e0ca-7184-fadc826cfe3c\",\"query\":\"Chinese\"}",
                "objectValue": "1222557",
                "impressionObjectName": "impression-restaurant",
                "clickObjectName": "click-restaurant"
              },
              "ctaWithParams": {
                "link": "swiggy://menu",
                "type": "DEEPLINK",
                "params": {
                  "isSld": "false",
                  "sourceRequestId": "00000000000000000000000000000000",
                  "qrEnabled": "false",
                  "restaurant_id": "1222557",
                  "query": "Chinese",
                  "sourceSessionId": "s760c95c9a8-bbd2-493c-ba94-f978be8cd",
                  "source": "SEARCH"
                }
              }
            }
          }
        },
        {
          "card": {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                "id": "1375709",
                "name": "Meu Meu",
                "city": "10",
                "slugs": {
                  "restaurant": "meu-meu-chandkheda-chandkheda",
                  "city": "ahmedabad"
                },
                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/5/11/05c0ad47-0c76-425e-b22e-5e50cc435e1a_1375709.jpg",
                "address": "Shop No : 12 , Floor : GROUND , ROYAL ORCHID , Tragad Gam Road Ahmedabad, Gujarat 382424, India 382424",
                "locality": "Chandkheda",
                "areaName": "Chandkheda",
                "costForTwo": "25000",
                "costForTwoMessage": "₹250 FOR TWO",
                "cuisines": [
                  "Chinese",
                  "Tibetan",
                  "Asian",
                  "Snacks",
                  "Oriental",
                  "Fast Food",
                  "Meat"
                ],
                "avgRating": 4.6,
                "feeDetails": {
                  
                },
                "parentId": "783711",
                "avgRatingString": "4.6",
                "totalRatingsString": "48",
                "sla": {
                  "deliveryTime": 41,
                  "minDeliveryTime": 40,
                  "maxDeliveryTime": 45,
                  "lastMileTravel": 8.5,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "RAIN_MODE_NONE",
                  "slaString": "40-45 MINS",
                  "lastMileTravelString": "8.5 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "opened": true,
                  "restaurantClosedMeta": {
                    
                  }
                },
                "badges": {
                  
                },
                "aggregatedDiscountInfoV3": {
                  "header": "ITEMS",
                  "subHeader": "AT ₹119",
                  "logoCtx": {
                    "text": "BENEFITS"
                  }
                },
                "ratingSlab": "RATING_SLAB_5",
                "orderabilityCommunication": {
                  "title": {
                    
                  },
                  "subTitle": {
                    
                  },
                  "message": {
                    
                  },
                  "customIcon": {
                    
                  },
                  "commsStyling": {
                    
                  }
                },
                "cartOrderabilityNudgeBanner": {
                  "parameters": {
                    
                  },
                  "presentation": {
                    
                  }
                },
                "externalRatings": {
                  "aggregatedRating": {
                    "rating": "--"
                  }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                "featuredSectionInfo": {
                  "sectionTitle": "More"
                },
                "showEoOffer": true,
                "priceComparisonComms": {
                  
                }
              },
              "analytics": {
                "screenName": "explore",
                "context": "{\"tid\":\"667033fd-f6c3-a6c2-4c3c-2e24a0547493\",\"grid\":\"fb89fd69-3f92-43ab-83db-d6fc590d2787\",\"queryUniqueId\":\"dddaf861-9ba0-e0ca-7184-fadc826cfe3c\",\"query\":\"Chinese\"}",
                "objectValue": "1375709",
                "impressionObjectName": "impression-restaurant",
                "clickObjectName": "click-restaurant"
              },
              "ctaWithParams": {
                "link": "swiggy://menu",
                "type": "DEEPLINK",
                "params": {
                  "sourceSessionId": "s760c95c9a8-bbd2-493c-ba94-f978be8cd",
                  "source": "SEARCH",
                  "isSld": "false",
                  "sourceRequestId": "00000000000000000000000000000000",
                  "qrEnabled": "false",
                  "restaurant_id": "1375709",
                  "query": "Chinese"
                }
              }
            }
          }
        },
        {
          "card": {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                "id": "983393",
                "name": "Anjoy late night meals",
                "city": "10",
                "slugs": {
                  "restaurant": "anjoy-late-night-meals-gota-gota",
                  "city": "ahmedabad"
                },
                "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2025/2/7/ba308679-287a-408b-adff-ea6bb114b80f_93280e9b-5000-45a5-a3b7-e2ad92b45228.jpg",
                "address": "Shop No : 13 , Floor : 0 , AMEEGOSH FOOD CART,G M  BUSSINESS HUB,GOTA , ",
                "locality": "GOTA",
                "areaName": "GOTA",
                "costForTwo": "50000",
                "costForTwoMessage": "₹500 FOR TWO",
                "cuisines": [
                  "Fast Food",
                  "Burgers"
                ],
                "avgRating": 3.9,
                "veg": true,
                "feeDetails": {
                  
                },
                "parentId": "33631",
                "avgRatingString": "3.9",
                "totalRatingsString": "130",
                "sla": {
                  "deliveryTime": 40,
                  "minDeliveryTime": 40,
                  "maxDeliveryTime": 45,
                  "lastMileTravel": 12.1,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "RAIN_MODE_NONE",
                  "slaString": "40-45 MINS",
                  "lastMileTravelString": "12.1 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "opened": true,
                  "restaurantClosedMeta": {
                    
                  }
                },
                "badges": {
                  
                },
                "aggregatedDiscountInfoV3": {
                  "header": "70% OFF",
                  "subHeader": "UPTO ₹140",
                  "logoCtx": {
                    "text": "BENEFITS"
                  }
                },
                "ratingSlab": "RATING_SLAB_4",
                "orderabilityCommunication": {
                  "title": {
                    
                  },
                  "subTitle": {
                    
                  },
                  "message": {
                    
                  },
                  "customIcon": {
                    
                  },
                  "commsStyling": {
                    
                  }
                },
                "cartOrderabilityNudgeBanner": {
                  "parameters": {
                    
                  },
                  "presentation": {
                    
                  }
                },
                "externalRatings": {
                  "aggregatedRating": {
                    "rating": "--"
                  }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                "featuredSectionInfo": {
                  "sectionTitle": "More"
                },
                "showEoOffer": true,
                "priceComparisonComms": {
                  
                }
              },
              "analytics": {
                "screenName": "explore",
                "context": "{\"tid\":\"667033fd-f6c3-a6c2-4c3c-2e24a0547493\",\"grid\":\"fb89fd69-3f92-43ab-83db-d6fc590d2787\",\"queryUniqueId\":\"dddaf861-9ba0-e0ca-7184-fadc826cfe3c\",\"query\":\"Chinese\"}",
                "objectValue": "983393",
                "impressionObjectName": "impression-restaurant",
                "clickObjectName": "click-restaurant"
              },
              "ctaWithParams": {
                "link": "swiggy://menu",
                "type": "DEEPLINK",
                "params": {
                  "sourceRequestId": "00000000000000000000000000000000",
                  "qrEnabled": "false",
                  "restaurant_id": "983393",
                  "query": "Chinese",
                  "sourceSessionId": "s760c95c9a8-bbd2-493c-ba94-f978be8cd",
                  "source": "SEARCH",
                  "isSld": "false"
                }
              }
            }
          }
        },
        {
          "card": {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                "id": "738688",
                "name": "City Corner",
                "city": "10",
                "slugs": {
                  "restaurant": "city-corner-naroda-naroda",
                  "city": "ahmedabad"
                },
                "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2026/2/12/854789e3-145b-47f4-b93c-8bf69ce6e56b_96100511-6c3a-42a0-8767-b9307117180d.jpeg",
                "address": "Nr Arjun Complex, Naroda, Talawadi, Naroda Degam Road, Naroda, Ahmedabad - 382330, Ahmedabad Municipal Corporation, Ahmedabad Municipal Corporation, Gujrat-382330\t",
                "locality": "Naroda",
                "areaName": "Naroda",
                "costForTwo": "50000",
                "costForTwoMessage": "₹500 FOR TWO",
                "cuisines": [
                  "South Indian",
                  "Snacks",
                  "Chinese"
                ],
                "avgRating": 4.3,
                "veg": true,
                "feeDetails": {
                  
                },
                "parentId": "7598",
                "avgRatingString": "4.3",
                "totalRatingsString": "1.8K+",
                "sla": {
                  "deliveryTime": 42,
                  "minDeliveryTime": 40,
                  "maxDeliveryTime": 45,
                  "lastMileTravel": 7.2,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "RAIN_MODE_NONE",
                  "slaString": "40-45 MINS",
                  "lastMileTravelString": "7.2 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "opened": true,
                  "restaurantClosedMeta": {
                    
                  }
                },
                "aggregatedDiscountInfo": {
                  "visible": true
                },
                "badges": {
                  
                },
                "aggregatedDiscountInfoV2": {
                  "visible": true
                },
                "ratingSlab": "RATING_SLAB_5",
                "orderabilityCommunication": {
                  "title": {
                    
                  },
                  "subTitle": {
                    
                  },
                  "message": {
                    
                  },
                  "customIcon": {
                    
                  },
                  "commsStyling": {
                    
                  }
                },
                "cartOrderabilityNudgeBanner": {
                  "parameters": {
                    
                  },
                  "presentation": {
                    
                  }
                },
                "externalRatings": {
                  "aggregatedRating": {
                    "rating": "4.1",
                    "ratingCount": "2.5K+"
                  },
                  "source": "GOOGLE",
                  "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                "featuredSectionInfo": {
                  "sectionTitle": "More"
                },
                "showEoOffer": true,
                "priceComparisonComms": {
                  
                }
              },
              "analytics": {
                "screenName": "explore",
                "context": "{\"tid\":\"667033fd-f6c3-a6c2-4c3c-2e24a0547493\",\"grid\":\"fb89fd69-3f92-43ab-83db-d6fc590d2787\",\"queryUniqueId\":\"dddaf861-9ba0-e0ca-7184-fadc826cfe3c\",\"query\":\"Chinese\"}",
                "objectValue": "738688",
                "impressionObjectName": "impression-restaurant",
                "clickObjectName": "click-restaurant"
              },
              "ctaWithParams": {
                "link": "swiggy://menu",
                "type": "DEEPLINK",
                "params": {
                  "restaurant_id": "738688",
                  "query": "Chinese",
                  "sourceSessionId": "s760c95c9a8-bbd2-493c-ba94-f978be8cd",
                  "source": "SEARCH",
                  "isSld": "false",
                  "sourceRequestId": "00000000000000000000000000000000",
                  "qrEnabled": "false"
                }
              }
            }
          }
        },
        {
          "card": {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                "id": "353613",
                "name": "Myriad Restaurant",
                "city": "10",
                "slugs": {
                  "restaurant": "myriad-restaurant-naranpura-naranpura",
                  "city": "ahmedabad"
                },
                "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2026/2/18/7a29563e-e956-4863-adf5-f52b9f98a248_3dd1adba-ff65-499b-935f-a9a698f605a9.JPG",
                "address": "Shop 14-19, 1st Floor, Nishan Pride, Block 1, Opposite Suvarna Bunglows, Ranip, Ahmedabad 382480",
                "locality": "Ranip",
                "areaName": "Ranip",
                "costForTwo": "40000",
                "costForTwoMessage": "₹400 FOR TWO",
                "cuisines": [
                  "Chinese",
                  "North Indian"
                ],
                "avgRating": 4.4,
                "veg": true,
                "feeDetails": {
                  
                },
                "parentId": "142733",
                "avgRatingString": "4.4",
                "totalRatingsString": "2.5K+",
                "sla": {
                  "deliveryTime": 47,
                  "minDeliveryTime": 45,
                  "maxDeliveryTime": 50,
                  "lastMileTravel": 8.6,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "RAIN_MODE_NONE",
                  "slaString": "45-50 MINS",
                  "lastMileTravelString": "8.6 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "opened": true,
                  "restaurantClosedMeta": {
                    
                  }
                },
                "badges": {
                  "imageBadges": [
                    {
                      "imageId": "v1695133679/badges/Pure_Veg111.png",
                      "description": "Serves only 100% vegetarian food, with no non-veg items."
                    }
                  ]
                },
                "aggregatedDiscountInfoV3": {
                  "header": "70% OFF",
                  "subHeader": "UPTO ₹140",
                  "logoCtx": {
                    "text": "BENEFITS"
                  }
                },
                "ratingSlab": "RATING_SLAB_5",
                "orderabilityCommunication": {
                  "title": {
                    
                  },
                  "subTitle": {
                    
                  },
                  "message": {
                    
                  },
                  "customIcon": {
                    
                  },
                  "commsStyling": {
                    
                  }
                },
                "cartOrderabilityNudgeBanner": {
                  "parameters": {
                    
                  },
                  "presentation": {
                    
                  }
                },
                "externalRatings": {
                  "aggregatedRating": {
                    "rating": "4.0",
                    "ratingCount": "1.2K+"
                  },
                  "source": "GOOGLE",
                  "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                "featuredSectionInfo": {
                  "sectionTitle": "More"
                },
                "showEoOffer": true,
                "priceComparisonComms": {
                  
                }
              },
              "analytics": {
                "screenName": "explore",
                "context": "{\"tid\":\"667033fd-f6c3-a6c2-4c3c-2e24a0547493\",\"grid\":\"fb89fd69-3f92-43ab-83db-d6fc590d2787\",\"queryUniqueId\":\"dddaf861-9ba0-e0ca-7184-fadc826cfe3c\",\"query\":\"Chinese\"}",
                "objectValue": "353613",
                "impressionObjectName": "impression-restaurant",
                "clickObjectName": "click-restaurant"
              },
              "ctaWithParams": {
                "link": "swiggy://menu",
                "type": "DEEPLINK",
                "params": {
                  "restaurant_id": "353613",
                  "query": "Chinese",
                  "sourceSessionId": "s760c95c9a8-bbd2-493c-ba94-f978be8cd",
                  "source": "SEARCH",
                  "isSld": "false",
                  "sourceRequestId": "00000000000000000000000000000000",
                  "qrEnabled": "false"
                }
              }
            }
          }
        },
        {
          "card": {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                "id": "110039",
                "name": "Hungry Puppet",
                "city": "10",
                "slugs": {
                  "restaurant": "hungry-puppet-na-awign",
                  "city": "ahmedabad"
                },
                "cloudinaryImageId": "bmpmjizgtz3pskgadpfx",
                "address": "Radhe Fortune,1st Floor,Near Balaji Agora Mall,Opposite To Apollo Hospital,Circle Bhat,Gandhinagar",
                "locality": "Gandhinagar",
                "areaName": "Bhat",
                "costForTwo": "50000",
                "costForTwoMessage": "₹500 FOR TWO",
                "cuisines": [
                  "North Indian",
                  "Beverages",
                  "Juices",
                  "Pizzas",
                  "Chinese"
                ],
                "avgRating": 4.3,
                "veg": true,
                "feeDetails": {
                  
                },
                "parentId": "104828",
                "avgRatingString": "4.3",
                "totalRatingsString": "227",
                "sla": {
                  "deliveryTime": 24,
                  "minDeliveryTime": 20,
                  "maxDeliveryTime": 25,
                  "lastMileTravel": 1.4,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "RAIN_MODE_NONE",
                  "slaString": "20-25 MINS",
                  "lastMileTravelString": "1.4 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "opened": true,
                  "restaurantClosedMeta": {
                    
                  }
                },
                "aggregatedDiscountInfo": {
                  "visible": true
                },
                "badges": {
                  "imageBadges": [
                    {
                      "imageId": "v1695133679/badges/Pure_Veg111.png",
                      "description": "Serves only 100% vegetarian food, with no non-veg items."
                    }
                  ]
                },
                "aggregatedDiscountInfoV2": {
                  "visible": true
                },
                "ratingSlab": "RATING_SLAB_5",
                "orderabilityCommunication": {
                  "title": {
                    
                  },
                  "subTitle": {
                    
                  },
                  "message": {
                    
                  },
                  "customIcon": {
                    
                  },
                  "commsStyling": {
                    
                  }
                },
                "cartOrderabilityNudgeBanner": {
                  "parameters": {
                    
                  },
                  "presentation": {
                    
                  }
                },
                "externalRatings": {
                  "aggregatedRating": {
                    "rating": "4.3",
                    "ratingCount": "993"
                  },
                  "source": "GOOGLE",
                  "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                "featuredSectionInfo": {
                  "sectionTitle": "More"
                },
                "showEoOffer": true,
                "priceComparisonComms": {
                  
                }
              },
              "analytics": {
                "screenName": "explore",
                "context": "{\"tid\":\"667033fd-f6c3-a6c2-4c3c-2e24a0547493\",\"grid\":\"fb89fd69-3f92-43ab-83db-d6fc590d2787\",\"queryUniqueId\":\"dddaf861-9ba0-e0ca-7184-fadc826cfe3c\",\"query\":\"Chinese\"}",
                "objectValue": "110039",
                "impressionObjectName": "impression-restaurant",
                "clickObjectName": "click-restaurant"
              },
              "ctaWithParams": {
                "link": "swiggy://menu",
                "type": "DEEPLINK",
                "params": {
                  "restaurant_id": "110039",
                  "query": "Chinese",
                  "sourceSessionId": "s760c95c9a8-bbd2-493c-ba94-f978be8cd",
                  "source": "SEARCH",
                  "isSld": "false",
                  "sourceRequestId": "00000000000000000000000000000000",
                  "qrEnabled": "false"
                }
              }
            }
          }
        },
        {
          "card": {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                "id": "408714",
                "name": "Naan N Noodles",
                "city": "10",
                "slugs": {
                  "restaurant": "dosaji-chandkheda-chandkheda",
                  "city": "ahmedabad"
                },
                "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2025/1/1/ed4e366d-b81e-47ab-9541-bbdb25d3943f_d1dbb4ba-2f4c-40ba-a33f-c8269a3c8c19.jpeg",
                "address": "GF-9, sukun residency, near sona cross road, new CG road chandkheda, 382424",
                "locality": "Sukun Residency",
                "areaName": "Chandkheda",
                "costForTwo": "20000",
                "costForTwoMessage": "₹200 FOR TWO",
                "cuisines": [
                  "Chinese",
                  "Indian"
                ],
                "avgRating": 4.1,
                "veg": true,
                "feeDetails": {
                  
                },
                "parentId": "561190",
                "avgRatingString": "4.1",
                "totalRatingsString": "259",
                "sla": {
                  "deliveryTime": 35,
                  "minDeliveryTime": 30,
                  "maxDeliveryTime": 35,
                  "lastMileTravel": 5,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "RAIN_MODE_NONE",
                  "slaString": "30-35 MINS",
                  "lastMileTravelString": "5.0 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "opened": true,
                  "restaurantClosedMeta": {
                    
                  }
                },
                "badges": {
                  
                },
                "aggregatedDiscountInfoV3": {
                  "header": "25% OFF",
                  "subHeader": "UPTO ₹125",
                  "logoCtx": {
                    "text": "BENEFITS"
                  }
                },
                "ratingSlab": "RATING_SLAB_5",
                "orderabilityCommunication": {
                  "title": {
                    
                  },
                  "subTitle": {
                    
                  },
                  "message": {
                    
                  },
                  "customIcon": {
                    
                  },
                  "commsStyling": {
                    
                  }
                },
                "cartOrderabilityNudgeBanner": {
                  "parameters": {
                    
                  },
                  "presentation": {
                    
                  }
                },
                "externalRatings": {
                  "aggregatedRating": {
                    "rating": "--"
                  }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                "featuredSectionInfo": {
                  "sectionTitle": "More"
                },
                "showEoOffer": true,
                "priceComparisonComms": {
                  
                }
              },
              "analytics": {
                "screenName": "explore",
                "context": "{\"tid\":\"667033fd-f6c3-a6c2-4c3c-2e24a0547493\",\"grid\":\"fb89fd69-3f92-43ab-83db-d6fc590d2787\",\"queryUniqueId\":\"dddaf861-9ba0-e0ca-7184-fadc826cfe3c\",\"query\":\"Chinese\"}",
                "objectValue": "408714",
                "impressionObjectName": "impression-restaurant",
                "clickObjectName": "click-restaurant"
              },
              "ctaWithParams": {
                "link": "swiggy://menu",
                "type": "DEEPLINK",
                "params": {
                  "restaurant_id": "408714",
                  "query": "Chinese",
                  "sourceSessionId": "s760c95c9a8-bbd2-493c-ba94-f978be8cd",
                  "source": "SEARCH",
                  "isSld": "false",
                  "sourceRequestId": "00000000000000000000000000000000",
                  "qrEnabled": "false"
                }
              }
            }
          }
        },
        {
          "card": {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                "id": "1175453",
                "name": "Kamal Sweets",
                "city": "10",
                "slugs": {
                  "restaurant": "kamal-sweets-chandkheda-chandkheda",
                  "city": "ahmedabad"
                },
                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/18/3997b334-56fd-4c55-82dd-606b72abd063_1175453.JPG",
                "address": "SHOP NO 5,VENUS AVAN,RADHE FORTUNE CIRCLE NR.ICICI BANK BHAT,GANDHINAGAR,AHMEDABAD ,Bhat ,Gandhinagar Municipal Corporation,Gandhinagar,Gujarat-382428\t",
                "locality": "Chandkheda",
                "areaName": "Chandkheda",
                "costForTwo": "40000",
                "costForTwoMessage": "₹400 FOR TWO",
                "cuisines": [
                  "Sweets"
                ],
                "avgRating": 4.7,
                "veg": true,
                "feeDetails": {
                  
                },
                "parentId": "114286",
                "avgRatingString": "4.7",
                "totalRatingsString": "9",
                "sla": {
                  "deliveryTime": 19,
                  "minDeliveryTime": 15,
                  "maxDeliveryTime": 20,
                  "lastMileTravel": 1.4,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "RAIN_MODE_NONE",
                  "slaString": "15-20 MINS",
                  "lastMileTravelString": "1.4 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "opened": true,
                  "restaurantClosedMeta": {
                    
                  }
                },
                "badges": {
                  "imageBadges": [
                    {
                      "imageId": "android/static-assets/icons/big_rx.png",
                      "description": "bolt!"
                    }
                  ]
                },
                "aggregatedDiscountInfoV3": {
                  "header": "10% OFF",
                  "subHeader": "UPTO ₹40",
                  "logoCtx": {
                    "text": "BENEFITS"
                  }
                },
                "ratingSlab": "RATING_SLAB_5",
                "orderabilityCommunication": {
                  "title": {
                    
                  },
                  "subTitle": {
                    
                  },
                  "message": {
                    
                  },
                  "customIcon": {
                    
                  },
                  "commsStyling": {
                    
                  }
                },
                "cartOrderabilityNudgeBanner": {
                  "parameters": {
                    
                  },
                  "presentation": {
                    
                  }
                },
                "externalRatings": {
                  "aggregatedRating": {
                    "rating": "--"
                  }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                "featuredSectionInfo": {
                  "sectionTitle": "More"
                },
                "showEoOffer": true,
                "priceComparisonComms": {
                  
                }
              },
              "analytics": {
                "screenName": "explore",
                "context": "{\"tid\":\"667033fd-f6c3-a6c2-4c3c-2e24a0547493\",\"grid\":\"fb89fd69-3f92-43ab-83db-d6fc590d2787\",\"queryUniqueId\":\"dddaf861-9ba0-e0ca-7184-fadc826cfe3c\",\"query\":\"Chinese\"}",
                "objectValue": "1175453",
                "impressionObjectName": "impression-restaurant",
                "clickObjectName": "click-restaurant"
              },
              "ctaWithParams": {
                "link": "swiggy://menu",
                "type": "DEEPLINK",
                "params": {
                  "restaurant_id": "1175453",
                  "query": "Chinese",
                  "sourceSessionId": "s760c95c9a8-bbd2-493c-ba94-f978be8cd",
                  "source": "SEARCH",
                  "isSld": "false",
                  "sourceRequestId": "00000000000000000000000000000000",
                  "qrEnabled": "false"
                }
              }
            }
          }
        },
        {
          "card": {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                "id": "1191651",
                "name": "CHinese And More Gift City",
                "city": "10",
                "slugs": {
                  "restaurant": "chinese-and-more-gift-city-gandhinagar-gandhinagar",
                  "city": "ahmedabad"
                },
                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/ef00dda2-e28d-4d92-99e5-6e86a19c4f3a_1191651.JPG",
                "address": "STALL NB 9 Maple 99 food county Near gift tower 1 Gift city Gandhinagar ,RAISAN,Gandhinagar Municipal Corporation,Gandhinagar,Gujarat-382355\t",
                "locality": "Gandhinagar",
                "areaName": "Gandhinagar",
                "costForTwo": "30000",
                "costForTwoMessage": "₹300 FOR TWO",
                "cuisines": [
                  "Chinese"
                ],
                "avgRating": 4,
                "veg": true,
                "feeDetails": {
                  
                },
                "parentId": "682456",
                "avgRatingString": "4.0",
                "totalRatingsString": "10",
                "sla": {
                  "deliveryTime": 63,
                  "minDeliveryTime": 60,
                  "maxDeliveryTime": 70,
                  "lastMileTravel": 14.6,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "RAIN_MODE_NONE",
                  "slaString": "60-70 MINS",
                  "lastMileTravelString": "14.6 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "opened": true,
                  "restaurantClosedMeta": {
                    
                  }
                },
                "badges": {
                  
                },
                "aggregatedDiscountInfoV3": {
                  "header": "70% OFF",
                  "subHeader": "UPTO ₹140",
                  "logoCtx": {
                    "text": "BENEFITS"
                  }
                },
                "ratingSlab": "RATING_SLAB_4",
                "orderabilityCommunication": {
                  "title": {
                    
                  },
                  "subTitle": {
                    
                  },
                  "message": {
                    
                  },
                  "customIcon": {
                    
                  },
                  "commsStyling": {
                    
                  }
                },
                "cartOrderabilityNudgeBanner": {
                  "parameters": {
                    
                  },
                  "presentation": {
                    
                  }
                },
                "externalRatings": {
                  "aggregatedRating": {
                    "rating": "--"
                  }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                "featuredSectionInfo": {
                  "sectionTitle": "More"
                },
                "showEoOffer": true,
                "priceComparisonComms": {
                  
                }
              },
              "analytics": {
                "screenName": "explore",
                "context": "{\"tid\":\"667033fd-f6c3-a6c2-4c3c-2e24a0547493\",\"grid\":\"fb89fd69-3f92-43ab-83db-d6fc590d2787\",\"queryUniqueId\":\"dddaf861-9ba0-e0ca-7184-fadc826cfe3c\",\"query\":\"Chinese\"}",
                "objectValue": "1191651",
                "impressionObjectName": "impression-restaurant",
                "clickObjectName": "click-restaurant"
              },
              "ctaWithParams": {
                "link": "swiggy://menu",
                "type": "DEEPLINK",
                "params": {
                  "query": "Chinese",
                  "sourceSessionId": "s760c95c9a8-bbd2-493c-ba94-f978be8cd",
                  "source": "SEARCH",
                  "isSld": "false",
                  "sourceRequestId": "00000000000000000000000000000000",
                  "qrEnabled": "false",
                  "restaurant_id": "1191651"
                }
              }
            }
          }
        },
        {
          "card": {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                "id": "138464",
                "name": "Emerald",
                "city": "10",
                "slugs": {
                  "restaurant": "emerald-naroda-naroda",
                  "city": "ahmedabad"
                },
                "cloudinaryImageId": "a7zcuciyzjuzcdsztttn",
                "address": "Sai Avenue, Near Galaxy, NH 8, Naroda, Ahmedabad",
                "locality": "Near Galaxy",
                "areaName": "Gidc Naroda",
                "costForTwo": "40000",
                "costForTwoMessage": "₹400 FOR TWO",
                "cuisines": [
                  "North Indian",
                  "Chinese",
                  "Punjabi",
                  "Biryani"
                ],
                "avgRating": 4.3,
                "veg": true,
                "feeDetails": {
                  
                },
                "parentId": "77160",
                "avgRatingString": "4.3",
                "totalRatingsString": "3.7K+",
                "sla": {
                  "deliveryTime": 47,
                  "minDeliveryTime": 45,
                  "maxDeliveryTime": 50,
                  "lastMileTravel": 7.7,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "RAIN_MODE_NONE",
                  "slaString": "45-50 MINS",
                  "lastMileTravelString": "7.7 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "opened": true,
                  "restaurantClosedMeta": {
                    
                  }
                },
                "badges": {
                  "imageBadges": [
                    {
                      "imageId": "v1695133679/badges/Pure_Veg111.png",
                      "description": "Serves only 100% vegetarian food, with no non-veg items."
                    }
                  ]
                },
                "aggregatedDiscountInfoV3": {
                  "header": "ITEMS",
                  "subHeader": "AT ₹29",
                  "logoCtx": {
                    "text": "BENEFITS"
                  }
                },
                "ratingSlab": "RATING_SLAB_5",
                "orderabilityCommunication": {
                  "title": {
                    
                  },
                  "subTitle": {
                    
                  },
                  "message": {
                    
                  },
                  "customIcon": {
                    
                  },
                  "commsStyling": {
                    
                  }
                },
                "cartOrderabilityNudgeBanner": {
                  "parameters": {
                    
                  },
                  "presentation": {
                    
                  }
                },
                "externalRatings": {
                  "aggregatedRating": {
                    "rating": "--"
                  }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                "featuredSectionInfo": {
                  "sectionTitle": "More"
                },
                "showEoOffer": true,
                "priceComparisonComms": {
                  
                }
              },
              "analytics": {
                "screenName": "explore",
                "context": "{\"tid\":\"667033fd-f6c3-a6c2-4c3c-2e24a0547493\",\"grid\":\"fb89fd69-3f92-43ab-83db-d6fc590d2787\",\"queryUniqueId\":\"dddaf861-9ba0-e0ca-7184-fadc826cfe3c\",\"query\":\"Chinese\"}",
                "objectValue": "138464",
                "impressionObjectName": "impression-restaurant",
                "clickObjectName": "click-restaurant"
              },
              "ctaWithParams": {
                "link": "swiggy://menu",
                "type": "DEEPLINK",
                "params": {
                  "qrEnabled": "false",
                  "restaurant_id": "138464",
                  "query": "Chinese",
                  "sourceSessionId": "s760c95c9a8-bbd2-493c-ba94-f978be8cd",
                  "source": "SEARCH",
                  "isSld": "false",
                  "sourceRequestId": "00000000000000000000000000000000"
                }
              }
            }
          }
        },
        {
          "card": {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                "id": "504124",
                "name": "Radhe Dining",
                "city": "10",
                "slugs": {
                  "restaurant": "schezwan-express-naroda-naroda",
                  "city": "ahmedabad"
                },
                "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/7/18/e10fbb30-eabc-47c2-a9e8-403d770aaf4a_21bc3d72-6170-4649-885c-8e80b1063989.png",
                "address": "11, Nr. Ring Road, Naroda Business Hub, Dehgam Rd, Hanspura, Naroda, Ahmedabad, Gujarat",
                "locality": "Naroda",
                "areaName": "Naroda",
                "costForTwo": "20000",
                "costForTwoMessage": "₹200 FOR TWO",
                "cuisines": [
                  "Chinese",
                  "Thali",
                  "Punjabi",
                  "North Indian",
                  "Gujarati"
                ],
                "avgRating": 3.7,
                "veg": true,
                "feeDetails": {
                  
                },
                "parentId": "639833",
                "avgRatingString": "3.7",
                "totalRatingsString": "1.1K+",
                "sla": {
                  "deliveryTime": 50,
                  "minDeliveryTime": 45,
                  "maxDeliveryTime": 55,
                  "lastMileTravel": 9.1,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "RAIN_MODE_NONE",
                  "slaString": "45-55 MINS",
                  "lastMileTravelString": "9.1 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "opened": true,
                  "restaurantClosedMeta": {
                    
                  }
                },
                "badges": {
                  "imageBadges": [
                    {
                      "imageId": "v1695133679/badges/Pure_Veg111.png",
                      "description": "Serves only 100% vegetarian food, with no non-veg items."
                    }
                  ]
                },
                "aggregatedDiscountInfoV3": {
                  "header": "60% OFF",
                  "subHeader": "UPTO ₹120",
                  "logoCtx": {
                    "text": "BENEFITS"
                  }
                },
                "ratingSlab": "RATING_SLAB_4",
                "orderabilityCommunication": {
                  "title": {
                    
                  },
                  "subTitle": {
                    
                  },
                  "message": {
                    
                  },
                  "customIcon": {
                    
                  },
                  "commsStyling": {
                    
                  }
                },
                "cartOrderabilityNudgeBanner": {
                  "parameters": {
                    
                  },
                  "presentation": {
                    
                  }
                },
                "externalRatings": {
                  "aggregatedRating": {
                    "rating": "4.0",
                    "ratingCount": "106"
                  },
                  "source": "GOOGLE",
                  "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                "featuredSectionInfo": {
                  "sectionTitle": "More"
                },
                "showEoOffer": true,
                "priceComparisonComms": {
                  
                }
              },
              "analytics": {
                "screenName": "explore",
                "context": "{\"tid\":\"667033fd-f6c3-a6c2-4c3c-2e24a0547493\",\"grid\":\"fb89fd69-3f92-43ab-83db-d6fc590d2787\",\"queryUniqueId\":\"dddaf861-9ba0-e0ca-7184-fadc826cfe3c\",\"query\":\"Chinese\"}",
                "objectValue": "504124",
                "impressionObjectName": "impression-restaurant",
                "clickObjectName": "click-restaurant"
              },
              "ctaWithParams": {
                "link": "swiggy://menu",
                "type": "DEEPLINK",
                "params": {
                  "sourceRequestId": "00000000000000000000000000000000",
                  "qrEnabled": "false",
                  "restaurant_id": "504124",
                  "query": "Chinese",
                  "sourceSessionId": "s760c95c9a8-bbd2-493c-ba94-f978be8cd",
                  "source": "SEARCH",
                  "isSld": "false"
                }
              }
            }
          }
        },
        {
          "card": {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                "id": "528154",
                "name": "Biryani Hub",
                "city": "10",
                "slugs": {
                  "restaurant": "biryani-hub-navrangpura-navrangpura",
                  "city": "ahmedabad"
                },
                "cloudinaryImageId": "vvn1ebwjrotckljlxvnm",
                "address": "Pro. Mohabatwala And Sons, New Bombay Biryani, Nr. Potalia Char Rasta, Opp. Om Madicine, SUBHASH BRIDGE (Central Zone), Ahmedabad Municipal Corporation, Ahmedabad, Gujarat - 380018",
                "locality": "SUBHASH BRIDGE",
                "areaName": "Bapunagar",
                "costForTwo": "10000",
                "costForTwoMessage": "₹100 FOR TWO",
                "cuisines": [
                  "Biryani",
                  "Beverages"
                ],
                "avgRating": 3.3,
                "feeDetails": {
                  
                },
                "parentId": "10970",
                "avgRatingString": "3.3",
                "totalRatingsString": "169",
                "sla": {
                  "deliveryTime": 59,
                  "minDeliveryTime": 55,
                  "maxDeliveryTime": 65,
                  "lastMileTravel": 11.2,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "RAIN_MODE_NONE",
                  "slaString": "55-65 MINS",
                  "lastMileTravelString": "11.2 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "opened": true,
                  "restaurantClosedMeta": {
                    
                  }
                },
                "badges": {
                  
                },
                "sld": true,
                "aggregatedDiscountInfoV3": {
                  "header": "ITEMS",
                  "subHeader": "AT ₹109",
                  "logoCtx": {
                    "text": "BENEFITS"
                  }
                },
                "ratingSlab": "RATING_SLAB_4",
                "orderabilityCommunication": {
                  "title": {
                    
                  },
                  "subTitle": {
                    
                  },
                  "message": {
                    
                  },
                  "customIcon": {
                    
                  },
                  "commsStyling": {
                    
                  }
                },
                "cartOrderabilityNudgeBanner": {
                  "parameters": {
                    
                  },
                  "presentation": {
                    
                  }
                },
                "externalRatings": {
                  "aggregatedRating": {
                    "rating": "--"
                  }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                "featuredSectionInfo": {
                  "sectionTitle": "More"
                },
                "showEoOffer": true,
                "priceComparisonComms": {
                  
                }
              },
              "analytics": {
                "screenName": "explore",
                "context": "{\"tid\":\"667033fd-f6c3-a6c2-4c3c-2e24a0547493\",\"grid\":\"fb89fd69-3f92-43ab-83db-d6fc590d2787\",\"queryUniqueId\":\"dddaf861-9ba0-e0ca-7184-fadc826cfe3c\",\"query\":\"Chinese\"}",
                "objectValue": "528154",
                "impressionObjectName": "impression-restaurant-sld",
                "clickObjectName": "click-restaurant-sld"
              },
              "ctaWithParams": {
                "link": "swiggy://menu",
                "type": "DEEPLINK",
                "params": {
                  "sourceSessionId": "s760c95c9a8-bbd2-493c-ba94-f978be8cd",
                  "source": "SEARCH",
                  "isSld": "true",
                  "sourceRequestId": "00000000000000000000000000000000",
                  "qrEnabled": "false",
                  "restaurant_id": "528154",
                  "query": "Chinese"
                }
              }
            }
          }
        },
        {
          "card": {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                "id": "126725",
                "name": "Jalaram Khaman House",
                "city": "10",
                "slugs": {
                  "restaurant": "jalaram-khaman-house-sabarmati-naroda",
                  "city": "ahmedabad"
                },
                "cloudinaryImageId": "haiuykmpedavjgolrcya",
                "address": "Sarthi Complex, Rishabh Circle, Gandhinagar Road, Sabarmati, Ahmedabad",
                "locality": "Sabarmati",
                "areaName": "Acher",
                "costForTwo": "20000",
                "costForTwoMessage": "₹200 FOR TWO",
                "cuisines": [
                  "Street Food",
                  "Fast Food",
                  "Chinese",
                  "Snacks"
                ],
                "avgRating": 4.6,
                "veg": true,
                "feeDetails": {
                  
                },
                "parentId": "7625",
                "avgRatingString": "4.6",
                "totalRatingsString": "4.8K+",
                "sla": {
                  "deliveryTime": 30,
                  "minDeliveryTime": 30,
                  "maxDeliveryTime": 35,
                  "lastMileTravel": 5,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "RAIN_MODE_NONE",
                  "slaString": "30-35 MINS",
                  "lastMileTravelString": "5.0 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "opened": true,
                  "restaurantClosedMeta": {
                    
                  }
                },
                "badges": {
                  "imageBadges": [
                    {
                      "imageId": "brand_cards/Badges%202026/50_Best%20in%20Dhokla2026.png",
                      "description": "Top-rated for Dhokla, based on user votes."
                    }
                  ]
                },
                "aggregatedDiscountInfoV3": {
                  "header": "70% OFF",
                  "subHeader": "UPTO ₹140",
                  "logoCtx": {
                    "text": "BENEFITS"
                  }
                },
                "ratingSlab": "RATING_SLAB_5",
                "orderabilityCommunication": {
                  "title": {
                    
                  },
                  "subTitle": {
                    
                  },
                  "message": {
                    
                  },
                  "customIcon": {
                    
                  },
                  "commsStyling": {
                    
                  }
                },
                "cartOrderabilityNudgeBanner": {
                  "parameters": {
                    
                  },
                  "presentation": {
                    
                  }
                },
                "externalRatings": {
                  "aggregatedRating": {
                    "rating": "--"
                  }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                "featuredSectionInfo": {
                  "sectionTitle": "More"
                },
                "showEoOffer": true,
                "priceComparisonComms": {
                  
                }
              },
              "analytics": {
                "screenName": "explore",
                "context": "{\"tid\":\"667033fd-f6c3-a6c2-4c3c-2e24a0547493\",\"grid\":\"fb89fd69-3f92-43ab-83db-d6fc590d2787\",\"queryUniqueId\":\"dddaf861-9ba0-e0ca-7184-fadc826cfe3c\",\"query\":\"Chinese\"}",
                "objectValue": "126725",
                "impressionObjectName": "impression-restaurant",
                "clickObjectName": "click-restaurant"
              },
              "ctaWithParams": {
                "link": "swiggy://menu",
                "type": "DEEPLINK",
                "params": {
                  "isSld": "false",
                  "sourceRequestId": "00000000000000000000000000000000",
                  "qrEnabled": "false",
                  "restaurant_id": "126725",
                  "query": "Chinese",
                  "sourceSessionId": "s760c95c9a8-bbd2-493c-ba94-f978be8cd",
                  "source": "SEARCH"
                }
              }
            }
          }
        },
        {
          "card": {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                "id": "68428",
                "name": "GMB Fast Food",
                "city": "10",
                "slugs": {
                  "restaurant": "gmb-fast-food-shahibaug-shahibag",
                  "city": "ahmedabad"
                },
                "cloudinaryImageId": "qd5rxcbs9cc7yl4oeidm",
                "address": "Gf-1, Shubh Complex, Near Rajasthan Hospital,Shahibaug",
                "locality": "Shahibaug",
                "areaName": "Shahibaug",
                "costForTwo": "40000",
                "costForTwoMessage": "₹400 FOR TWO",
                "cuisines": [
                  "Indian",
                  "Punjabi",
                  "Chinese",
                  "Biryani"
                ],
                "avgRating": 4.5,
                "veg": true,
                "feeDetails": {
                  
                },
                "parentId": "87779",
                "avgRatingString": "4.5",
                "totalRatingsString": "7.2K+",
                "sla": {
                  "deliveryTime": 47,
                  "minDeliveryTime": 45,
                  "maxDeliveryTime": 50,
                  "lastMileTravel": 7.8,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "RAIN_MODE_NONE",
                  "slaString": "45-50 MINS",
                  "lastMileTravelString": "7.8 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "opened": true,
                  "restaurantClosedMeta": {
                    
                  }
                },
                "badges": {
                  "imageBadges": [
                    {
                      "imageId": "v1695133679/badges/Pure_Veg111.png",
                      "description": "Serves only 100% vegetarian food, with no non-veg items."
                    }
                  ]
                },
                "aggregatedDiscountInfoV3": {
                  "header": "70% OFF",
                  "subHeader": "UPTO ₹140",
                  "logoCtx": {
                    "text": "BENEFITS"
                  }
                },
                "ratingSlab": "RATING_SLAB_5",
                "orderabilityCommunication": {
                  "title": {
                    
                  },
                  "subTitle": {
                    
                  },
                  "message": {
                    
                  },
                  "customIcon": {
                    
                  },
                  "commsStyling": {
                    
                  }
                },
                "cartOrderabilityNudgeBanner": {
                  "parameters": {
                    
                  },
                  "presentation": {
                    
                  }
                },
                "externalRatings": {
                  "aggregatedRating": {
                    "rating": "3.9",
                    "ratingCount": "138"
                  },
                  "source": "GOOGLE",
                  "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                "featuredSectionInfo": {
                  "sectionTitle": "More"
                },
                "showEoOffer": true,
                "priceComparisonComms": {
                  
                }
              },
              "analytics": {
                "screenName": "explore",
                "context": "{\"tid\":\"667033fd-f6c3-a6c2-4c3c-2e24a0547493\",\"grid\":\"fb89fd69-3f92-43ab-83db-d6fc590d2787\",\"queryUniqueId\":\"dddaf861-9ba0-e0ca-7184-fadc826cfe3c\",\"query\":\"Chinese\"}",
                "objectValue": "68428",
                "impressionObjectName": "impression-restaurant",
                "clickObjectName": "click-restaurant"
              },
              "ctaWithParams": {
                "link": "swiggy://menu",
                "type": "DEEPLINK",
                "params": {
                  "restaurant_id": "68428",
                  "query": "Chinese",
                  "sourceSessionId": "s760c95c9a8-bbd2-493c-ba94-f978be8cd",
                  "source": "SEARCH",
                  "isSld": "false",
                  "sourceRequestId": "00000000000000000000000000000000",
                  "qrEnabled": "false"
                }
              }
            }
          }
        },
        {
          "card": {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                "id": "758984",
                "name": "Choice Snack Bar",
                "city": "10",
                "slugs": {
                  "restaurant": "choice-snack-bar-gota-gota",
                  "city": "ahmedabad"
                },
                "cloudinaryImageId": "cbpvzhvucwommsh9ishe",
                "address": "GF Shop No. 6, Samsara Opp Vushundhara Garden, S.G. Highway, Gota, Ahmedabad, Gujarat - 382481",
                "locality": "Vushundhara Garden",
                "areaName": "GOTA",
                "costForTwo": "30000",
                "costForTwoMessage": "₹300 FOR TWO",
                "cuisines": [
                  "Pizzas",
                  "Chinese",
                  "Snacks",
                  "South Indian",
                  "Fast Food"
                ],
                "avgRating": 4.5,
                "veg": true,
                "feeDetails": {
                  
                },
                "parentId": "4866",
                "avgRatingString": "4.5",
                "totalRatingsString": "347",
                "sla": {
                  "deliveryTime": 45,
                  "minDeliveryTime": 40,
                  "maxDeliveryTime": 45,
                  "lastMileTravel": 12.3,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "RAIN_MODE_NONE",
                  "slaString": "40-45 MINS",
                  "lastMileTravelString": "12.3 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "opened": true,
                  "restaurantClosedMeta": {
                    
                  }
                },
                "badges": {
                  "imageBadges": [
                    {
                      "imageId": "v1695133679/badges/Pure_Veg111.png",
                      "description": "Serves only 100% vegetarian food, with no non-veg items."
                    }
                  ]
                },
                "aggregatedDiscountInfoV3": {
                  "header": "ITEMS",
                  "subHeader": "AT ₹55",
                  "logoCtx": {
                    "text": "BENEFITS"
                  }
                },
                "ratingSlab": "RATING_SLAB_5",
                "orderabilityCommunication": {
                  "title": {
                    
                  },
                  "subTitle": {
                    
                  },
                  "message": {
                    
                  },
                  "customIcon": {
                    
                  },
                  "commsStyling": {
                    
                  }
                },
                "cartOrderabilityNudgeBanner": {
                  "parameters": {
                    
                  },
                  "presentation": {
                    
                  }
                },
                "externalRatings": {
                  "aggregatedRating": {
                    "rating": "--"
                  }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                "featuredSectionInfo": {
                  "sectionTitle": "More"
                },
                "showEoOffer": true,
                "priceComparisonComms": {
                  
                }
              },
              "analytics": {
                "screenName": "explore",
                "context": "{\"tid\":\"667033fd-f6c3-a6c2-4c3c-2e24a0547493\",\"grid\":\"fb89fd69-3f92-43ab-83db-d6fc590d2787\",\"queryUniqueId\":\"dddaf861-9ba0-e0ca-7184-fadc826cfe3c\",\"query\":\"Chinese\"}",
                "objectValue": "758984",
                "impressionObjectName": "impression-restaurant",
                "clickObjectName": "click-restaurant"
              },
              "ctaWithParams": {
                "link": "swiggy://menu",
                "type": "DEEPLINK",
                "params": {
                  "sourceSessionId": "s760c95c9a8-bbd2-493c-ba94-f978be8cd",
                  "source": "SEARCH",
                  "isSld": "false",
                  "sourceRequestId": "00000000000000000000000000000000",
                  "qrEnabled": "false",
                  "restaurant_id": "758984",
                  "query": "Chinese"
                }
              }
            }
          }
        },
        {
          "card": {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                "id": "545109",
                "name": "Tea Post",
                "city": "10",
                "slugs": {
                  "restaurant": "teapost-chandkheda-chandkheda",
                  "city": "ahmedabad"
                },
                "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/5/29/c33986ba-4a62-42f4-aead-eeedffaab187_7fce6363-61a3-4cd9-bdcb-00f8e9894061.jpg",
                "address": "Shop No. 8, Ground Floor, Ahmedabad Gandhinagar Road, Bhat, Ahmedabad, Gujarat",
                "locality": "Bhat",
                "areaName": "Bhat",
                "costForTwo": "20000",
                "costForTwoMessage": "₹200 FOR TWO",
                "cuisines": [
                  "Tea",
                  "Coffee",
                  "Snacks",
                  "Gujarati"
                ],
                "avgRating": 4.3,
                "feeDetails": {
                  
                },
                "parentId": "4509",
                "avgRatingString": "4.3",
                "totalRatingsString": "227",
                "sla": {
                  "deliveryTime": 27,
                  "minDeliveryTime": 25,
                  "maxDeliveryTime": 30,
                  "lastMileTravel": 1.5,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "RAIN_MODE_NONE",
                  "slaString": "25-30 MINS",
                  "lastMileTravelString": "1.5 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "opened": true,
                  "restaurantClosedMeta": {
                    
                  }
                },
                "badges": {
                  "imageBadges": [
                    {
                      "imageId": "brand_cards/Badges%202026/110_Best%20in%20Coffee%20&%20Tea2026.png",
                      "description": "Top-rated for Coffee & Tea, based on user votes."
                    }
                  ]
                },
                "aggregatedDiscountInfoV3": {
                  "header": "70% OFF",
                  "subHeader": "UPTO ₹140",
                  "logoCtx": {
                    "text": "BENEFITS"
                  }
                },
                "ratingSlab": "RATING_SLAB_5",
                "orderabilityCommunication": {
                  "title": {
                    
                  },
                  "subTitle": {
                    
                  },
                  "message": {
                    
                  },
                  "customIcon": {
                    
                  },
                  "commsStyling": {
                    
                  }
                },
                "cartOrderabilityNudgeBanner": {
                  "parameters": {
                    
                  },
                  "presentation": {
                    
                  }
                },
                "externalRatings": {
                  "aggregatedRating": {
                    "rating": "4.2",
                    "ratingCount": "238"
                  },
                  "source": "GOOGLE",
                  "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                "featuredSectionInfo": {
                  "sectionTitle": "More"
                },
                "showEoOffer": true,
                "priceComparisonComms": {
                  
                }
              },
              "analytics": {
                "screenName": "explore",
                "context": "{\"tid\":\"667033fd-f6c3-a6c2-4c3c-2e24a0547493\",\"grid\":\"fb89fd69-3f92-43ab-83db-d6fc590d2787\",\"queryUniqueId\":\"dddaf861-9ba0-e0ca-7184-fadc826cfe3c\",\"query\":\"Chinese\"}",
                "objectValue": "545109",
                "impressionObjectName": "impression-restaurant",
                "clickObjectName": "click-restaurant"
              },
              "ctaWithParams": {
                "link": "swiggy://menu",
                "type": "DEEPLINK",
                "params": {
                  "restaurant_id": "545109",
                  "query": "Chinese",
                  "sourceSessionId": "s760c95c9a8-bbd2-493c-ba94-f978be8cd",
                  "source": "SEARCH",
                  "isSld": "false",
                  "sourceRequestId": "00000000000000000000000000000000",
                  "qrEnabled": "false"
                }
              }
            }
          }
        },
        {
          "card": {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                "id": "1126042",
                "name": "Praful Sweets And Namkeen",
                "city": "10",
                "slugs": {
                  "restaurant": "praful-sweets-and-namkeen-chandkheda-chandkheda-2",
                  "city": "ahmedabad"
                },
                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/20/8ab5cd88-1d9a-4c3a-91c5-9712b3f1bfa1_1126042.jpg",
                "address": "46, RADHE FORTUNE, BHAT CIRCLE, AT. SUGHAD, TA & DIST. GANDHINAGAR ,Gandhinagar Municipal Corporation,Gandhinagar,Gujarat-382424\t",
                "locality": "Chandkheda",
                "areaName": "Chandkheda",
                "costForTwo": "60000",
                "costForTwoMessage": "₹600 FOR TWO",
                "cuisines": [
                  "Fast Food"
                ],
                "avgRating": 4.4,
                "veg": true,
                "feeDetails": {
                  
                },
                "parentId": "160396",
                "avgRatingString": "4.4",
                "totalRatingsString": "230",
                "sla": {
                  "deliveryTime": 19,
                  "minDeliveryTime": 15,
                  "maxDeliveryTime": 20,
                  "lastMileTravel": 1.2,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "RAIN_MODE_NONE",
                  "slaString": "15-20 MINS",
                  "lastMileTravelString": "1.2 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "opened": true,
                  "restaurantClosedMeta": {
                    
                  }
                },
                "aggregatedDiscountInfo": {
                  "visible": true
                },
                "badges": {
                  "imageBadges": [
                    {
                      "imageId": "android/static-assets/icons/big_rx.png",
                      "description": "bolt!"
                    }
                  ]
                },
                "aggregatedDiscountInfoV2": {
                  "visible": true
                },
                "ratingSlab": "RATING_SLAB_5",
                "orderabilityCommunication": {
                  "title": {
                    
                  },
                  "subTitle": {
                    
                  },
                  "message": {
                    
                  },
                  "customIcon": {
                    
                  },
                  "commsStyling": {
                    
                  }
                },
                "cartOrderabilityNudgeBanner": {
                  "parameters": {
                    
                  },
                  "presentation": {
                    
                  }
                },
                "externalRatings": {
                  "aggregatedRating": {
                    "rating": "--"
                  }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                "featuredSectionInfo": {
                  "sectionTitle": "More"
                },
                "showEoOffer": true,
                "priceComparisonComms": {
                  
                }
              },
              "analytics": {
                "screenName": "explore",
                "context": "{\"tid\":\"667033fd-f6c3-a6c2-4c3c-2e24a0547493\",\"grid\":\"fb89fd69-3f92-43ab-83db-d6fc590d2787\",\"queryUniqueId\":\"dddaf861-9ba0-e0ca-7184-fadc826cfe3c\",\"query\":\"Chinese\"}",
                "objectValue": "1126042",
                "impressionObjectName": "impression-restaurant",
                "clickObjectName": "click-restaurant"
              },
              "ctaWithParams": {
                "link": "swiggy://menu",
                "type": "DEEPLINK",
                "params": {
                  "isSld": "false",
                  "sourceRequestId": "00000000000000000000000000000000",
                  "qrEnabled": "false",
                  "restaurant_id": "1126042",
                  "query": "Chinese",
                  "sourceSessionId": "s760c95c9a8-bbd2-493c-ba94-f978be8cd",
                  "source": "SEARCH"
                }
              }
            }
          }
        },
        {
          "card": {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                "id": "446575",
                "name": "Spice Hub Restro Cafe",
                "city": "10",
                "slugs": {
                  "restaurant": "spice-hub-restro-cafe-gota-gota",
                  "city": "ahmedabad"
                },
                "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/9/19/2f113377-fc3c-4fb3-b9cf-13da4b45079d_869e22f2-461d-4ce8-9449-8709b57768fa.jpeg",
                "address": "Plot No. 537/A, Opp. Nirma University, Beside SGVP Temple, Vaishnodevi Circle, Ahmedabad - 382421",
                "locality": "Opp. Nirma University",
                "areaName": "GOTA",
                "costForTwo": "40000",
                "costForTwoMessage": "₹400 FOR TWO",
                "cuisines": [
                  "Beverages",
                  "Street Food",
                  "Chinese",
                  "Italian-American",
                  "Fast Food",
                  "Snacks"
                ],
                "avgRating": 4.2,
                "veg": true,
                "feeDetails": {
                  
                },
                "parentId": "192098",
                "avgRatingString": "4.2",
                "totalRatingsString": "662",
                "sla": {
                  "deliveryTime": 40,
                  "minDeliveryTime": 35,
                  "maxDeliveryTime": 40,
                  "lastMileTravel": 11.2,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "RAIN_MODE_NONE",
                  "slaString": "35-40 MINS",
                  "lastMileTravelString": "11.2 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "opened": true,
                  "restaurantClosedMeta": {
                    
                  }
                },
                "badges": {
                  "imageBadges": [
                    {
                      "imageId": "v1695133679/badges/Pure_Veg111.png",
                      "description": "Serves only 100% vegetarian food, with no non-veg items."
                    }
                  ]
                },
                "aggregatedDiscountInfoV3": {
                  "header": "ITEMS",
                  "subHeader": "AT ₹89",
                  "logoCtx": {
                    "text": "BENEFITS"
                  }
                },
                "ratingSlab": "RATING_SLAB_5",
                "orderabilityCommunication": {
                  "title": {
                    
                  },
                  "subTitle": {
                    
                  },
                  "message": {
                    
                  },
                  "customIcon": {
                    
                  },
                  "commsStyling": {
                    
                  }
                },
                "cartOrderabilityNudgeBanner": {
                  "parameters": {
                    
                  },
                  "presentation": {
                    
                  }
                },
                "externalRatings": {
                  "aggregatedRating": {
                    "rating": "--"
                  }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                "featuredSectionInfo": {
                  "sectionTitle": "More"
                },
                "showEoOffer": true,
                "priceComparisonComms": {
                  
                }
              },
              "analytics": {
                "screenName": "explore",
                "context": "{\"tid\":\"667033fd-f6c3-a6c2-4c3c-2e24a0547493\",\"grid\":\"fb89fd69-3f92-43ab-83db-d6fc590d2787\",\"queryUniqueId\":\"dddaf861-9ba0-e0ca-7184-fadc826cfe3c\",\"query\":\"Chinese\"}",
                "objectValue": "446575",
                "impressionObjectName": "impression-restaurant",
                "clickObjectName": "click-restaurant"
              },
              "ctaWithParams": {
                "link": "swiggy://menu",
                "type": "DEEPLINK",
                "params": {
                  "query": "Chinese",
                  "sourceSessionId": "s760c95c9a8-bbd2-493c-ba94-f978be8cd",
                  "source": "SEARCH",
                  "isSld": "false",
                  "sourceRequestId": "00000000000000000000000000000000",
                  "qrEnabled": "false",
                  "restaurant_id": "446575"
                }
              }
            }
          }
        },
        {
          "card": {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                "id": "63622",
                "name": "Shiva's Coffee Bar & Snacks",
                "city": "10",
                "slugs": {
                  "restaurant": "shivas-coffee-bar-snacks-gota-gota",
                  "city": "ahmedabad"
                },
                "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2025/12/31/bc81c1fb-a6cb-4ade-bc7b-72dbd1ce207a_ef12a908-f329-40ea-bf23-9b69fc45b4a5.jpg",
                "address": "Block no 194 Sg Highway PO Jagatpur Dascroi Ahmedabad -382470",
                "locality": "Gota",
                "areaName": "Jagatpur",
                "costForTwo": "30000",
                "costForTwoMessage": "₹300 FOR TWO",
                "cuisines": [
                  "Fast Food",
                  "Snacks",
                  "Beverages",
                  "sandwich",
                  "Pizza"
                ],
                "avgRating": 4.1,
                "veg": true,
                "feeDetails": {
                  
                },
                "parentId": "4923",
                "avgRatingString": "4.1",
                "totalRatingsString": "5.7K+",
                "sla": {
                  "deliveryTime": 46,
                  "minDeliveryTime": 45,
                  "maxDeliveryTime": 50,
                  "lastMileTravel": 13.8,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "RAIN_MODE_NONE",
                  "slaString": "45-50 MINS",
                  "lastMileTravelString": "13.8 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "opened": true,
                  "restaurantClosedMeta": {
                    
                  }
                },
                "aggregatedDiscountInfo": {
                  "visible": true
                },
                "badges": {
                  "imageBadges": [
                    {
                      "imageId": "v1695133679/badges/Pure_Veg111.png",
                      "description": "Serves only 100% vegetarian food, with no non-veg items."
                    }
                  ]
                },
                "aggregatedDiscountInfoV2": {
                  "visible": true
                },
                "ratingSlab": "RATING_SLAB_5",
                "orderabilityCommunication": {
                  "title": {
                    
                  },
                  "subTitle": {
                    
                  },
                  "message": {
                    
                  },
                  "customIcon": {
                    
                  },
                  "commsStyling": {
                    
                  }
                },
                "cartOrderabilityNudgeBanner": {
                  "parameters": {
                    
                  },
                  "presentation": {
                    
                  }
                },
                "externalRatings": {
                  "aggregatedRating": {
                    "rating": "--"
                  }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                "featuredSectionInfo": {
                  "sectionTitle": "More"
                },
                "showEoOffer": true,
                "priceComparisonComms": {
                  
                }
              },
              "analytics": {
                "screenName": "explore",
                "context": "{\"tid\":\"667033fd-f6c3-a6c2-4c3c-2e24a0547493\",\"grid\":\"fb89fd69-3f92-43ab-83db-d6fc590d2787\",\"queryUniqueId\":\"dddaf861-9ba0-e0ca-7184-fadc826cfe3c\",\"query\":\"Chinese\"}",
                "objectValue": "63622",
                "impressionObjectName": "impression-restaurant",
                "clickObjectName": "click-restaurant"
              },
              "ctaWithParams": {
                "link": "swiggy://menu",
                "type": "DEEPLINK",
                "params": {
                  "sourceSessionId": "s760c95c9a8-bbd2-493c-ba94-f978be8cd",
                  "source": "SEARCH",
                  "isSld": "false",
                  "sourceRequestId": "00000000000000000000000000000000",
                  "qrEnabled": "false",
                  "restaurant_id": "63622",
                  "query": "Chinese"
                }
              }
            }
          }
        },
        {
          "card": {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                "id": "188589",
                "name": "Mayur Restaurant",
                "city": "10",
                "slugs": {
                  "restaurant": "mayur-restaurant-naroda-naroda",
                  "city": "ahmedabad"
                },
                "cloudinaryImageId": "degsmwl6oapgahad6igt",
                "address": "Mayur Restaurant, Galaxy Road, Naroda Bazar, Makarpura, Naroda, Ahmedabad, Gujarat, India",
                "locality": "Naroda",
                "areaName": "Naroda",
                "costForTwo": "25000",
                "costForTwoMessage": "₹250 FOR TWO",
                "cuisines": [
                  "Beverages",
                  "Chinese",
                  "Pizzas",
                  "Punjabi"
                ],
                "avgRating": 4.4,
                "veg": true,
                "feeDetails": {
                  
                },
                "parentId": "759209",
                "avgRatingString": "4.4",
                "totalRatingsString": "1.8K+",
                "sla": {
                  "deliveryTime": 46,
                  "minDeliveryTime": 45,
                  "maxDeliveryTime": 50,
                  "lastMileTravel": 7.4,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "RAIN_MODE_NONE",
                  "slaString": "45-50 MINS",
                  "lastMileTravelString": "7.4 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "opened": true,
                  "restaurantClosedMeta": {
                    
                  }
                },
                "badges": {
                  "imageBadges": [
                    {
                      "imageId": "v1695133679/badges/Pure_Veg111.png",
                      "description": "Serves only 100% vegetarian food, with no non-veg items."
                    }
                  ]
                },
                "aggregatedDiscountInfoV3": {
                  "header": "70% OFF",
                  "subHeader": "UPTO ₹140",
                  "logoCtx": {
                    "text": "BENEFITS"
                  }
                },
                "ratingSlab": "RATING_SLAB_5",
                "orderabilityCommunication": {
                  "title": {
                    
                  },
                  "subTitle": {
                    
                  },
                  "message": {
                    
                  },
                  "customIcon": {
                    
                  },
                  "commsStyling": {
                    
                  }
                },
                "cartOrderabilityNudgeBanner": {
                  "parameters": {
                    
                  },
                  "presentation": {
                    
                  }
                },
                "externalRatings": {
                  "aggregatedRating": {
                    "rating": "4.0",
                    "ratingCount": "1.4K+"
                  },
                  "source": "GOOGLE",
                  "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                "featuredSectionInfo": {
                  "sectionTitle": "More"
                },
                "showEoOffer": true,
                "priceComparisonComms": {
                  
                }
              },
              "analytics": {
                "screenName": "explore",
                "context": "{\"tid\":\"667033fd-f6c3-a6c2-4c3c-2e24a0547493\",\"grid\":\"fb89fd69-3f92-43ab-83db-d6fc590d2787\",\"queryUniqueId\":\"dddaf861-9ba0-e0ca-7184-fadc826cfe3c\",\"query\":\"Chinese\"}",
                "objectValue": "188589",
                "impressionObjectName": "impression-restaurant",
                "clickObjectName": "click-restaurant"
              },
              "ctaWithParams": {
                "link": "swiggy://menu",
                "type": "DEEPLINK",
                "params": {
                  "sourceSessionId": "s760c95c9a8-bbd2-493c-ba94-f978be8cd",
                  "source": "SEARCH",
                  "isSld": "false",
                  "sourceRequestId": "00000000000000000000000000000000",
                  "qrEnabled": "false",
                  "restaurant_id": "188589",
                  "query": "Chinese"
                }
              }
            }
          }
        },
        {
          "card": {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                "id": "575384",
                "name": "Sher-E-Punjab",
                "city": "10",
                "slugs": {
                  "restaurant": "shere-punjab-chandkheda-chandkheda",
                  "city": "ahmedabad"
                },
                "cloudinaryImageId": "oilbmawrn5zatrp3zxam",
                "address": "Opp Hotel Shere Punjab nr Swastik Bungalows Chandkedha Ahmedabad",
                "locality": "Swastik Bungalows Chandkedha",
                "areaName": "Chandkheda",
                "costForTwo": "30000",
                "costForTwoMessage": "₹300 FOR TWO",
                "cuisines": [
                  "Punjabi",
                  "Indian",
                  "Chinese"
                ],
                "avgRating": 4,
                "veg": true,
                "feeDetails": {
                  
                },
                "parentId": "840",
                "avgRatingString": "4.0",
                "totalRatingsString": "1.8K+",
                "sla": {
                  "deliveryTime": 42,
                  "minDeliveryTime": 40,
                  "maxDeliveryTime": 45,
                  "lastMileTravel": 7.5,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "RAIN_MODE_NONE",
                  "slaString": "40-45 MINS",
                  "lastMileTravelString": "7.5 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "opened": true,
                  "restaurantClosedMeta": {
                    
                  }
                },
                "badges": {
                  "imageBadges": [
                    {
                      "imageId": "v1695133679/badges/Pure_Veg111.png",
                      "description": "Serves only 100% vegetarian food, with no non-veg items."
                    }
                  ]
                },
                "aggregatedDiscountInfoV3": {
                  "header": "ITEMS",
                  "subHeader": "AT ₹19",
                  "logoCtx": {
                    "text": "BENEFITS"
                  }
                },
                "ratingSlab": "RATING_SLAB_4",
                "orderabilityCommunication": {
                  "title": {
                    
                  },
                  "subTitle": {
                    
                  },
                  "message": {
                    
                  },
                  "customIcon": {
                    
                  },
                  "commsStyling": {
                    
                  }
                },
                "cartOrderabilityNudgeBanner": {
                  "parameters": {
                    
                  },
                  "presentation": {
                    
                  }
                },
                "externalRatings": {
                  "aggregatedRating": {
                    "rating": "--"
                  }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                "featuredSectionInfo": {
                  "sectionTitle": "More"
                },
                "showEoOffer": true,
                "priceComparisonComms": {
                  
                }
              },
              "analytics": {
                "screenName": "explore",
                "context": "{\"tid\":\"667033fd-f6c3-a6c2-4c3c-2e24a0547493\",\"grid\":\"fb89fd69-3f92-43ab-83db-d6fc590d2787\",\"queryUniqueId\":\"dddaf861-9ba0-e0ca-7184-fadc826cfe3c\",\"query\":\"Chinese\"}",
                "objectValue": "575384",
                "impressionObjectName": "impression-restaurant",
                "clickObjectName": "click-restaurant"
              },
              "ctaWithParams": {
                "link": "swiggy://menu",
                "type": "DEEPLINK",
                "params": {
                  "source": "SEARCH",
                  "isSld": "false",
                  "sourceRequestId": "00000000000000000000000000000000",
                  "qrEnabled": "false",
                  "restaurant_id": "575384",
                  "query": "Chinese",
                  "sourceSessionId": "s760c95c9a8-bbd2-493c-ba94-f978be8cd"
                }
              }
            }
          }
        },
        {
          "card": {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                "id": "133046",
                "name": "Lakhiya Fast Food",
                "city": "10",
                "slugs": {
                  "restaurant": "lakhiya-fast-food-sabarmati-vam",
                  "city": "ahmedabad"
                },
                "cloudinaryImageId": "o9nbamzm2eryypfqyk6u",
                "address": "G/6/7/8, DEVPRIYA COMPLEX, opp SAHJANAND PARK, MOTERA STADIUM ROAD, MOTERA, SABARMATI, AHMEDABAD",
                "locality": "Sabarmati",
                "areaName": "Chandkheda",
                "costForTwo": "20000",
                "costForTwoMessage": "₹200 FOR TWO",
                "cuisines": [
                  "South Indian"
                ],
                "avgRating": 4.4,
                "veg": true,
                "feeDetails": {
                  
                },
                "parentId": "123046",
                "avgRatingString": "4.4",
                "totalRatingsString": "299",
                "sla": {
                  "deliveryTime": 31,
                  "minDeliveryTime": 30,
                  "maxDeliveryTime": 35,
                  "lastMileTravel": 3,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "RAIN_MODE_NONE",
                  "slaString": "30-35 MINS",
                  "lastMileTravelString": "3.0 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "opened": true,
                  "restaurantClosedMeta": {
                    
                  }
                },
                "badges": {
                  "imageBadges": [
                    {
                      "imageId": "v1695133679/badges/Pure_Veg111.png",
                      "description": "Serves only 100% vegetarian food, with no non-veg items."
                    }
                  ]
                },
                "aggregatedDiscountInfoV3": {
                  "header": "ITEMS",
                  "subHeader": "AT ₹149",
                  "logoCtx": {
                    "text": "BENEFITS"
                  }
                },
                "ratingSlab": "RATING_SLAB_5",
                "orderabilityCommunication": {
                  "title": {
                    
                  },
                  "subTitle": {
                    
                  },
                  "message": {
                    
                  },
                  "customIcon": {
                    
                  },
                  "commsStyling": {
                    
                  }
                },
                "cartOrderabilityNudgeBanner": {
                  "parameters": {
                    
                  },
                  "presentation": {
                    
                  }
                },
                "externalRatings": {
                  "aggregatedRating": {
                    "rating": "3.8",
                    "ratingCount": "174"
                  },
                  "source": "GOOGLE",
                  "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                "featuredSectionInfo": {
                  "sectionTitle": "More"
                },
                "showEoOffer": true,
                "priceComparisonComms": {
                  
                }
              },
              "analytics": {
                "screenName": "explore",
                "context": "{\"tid\":\"667033fd-f6c3-a6c2-4c3c-2e24a0547493\",\"grid\":\"fb89fd69-3f92-43ab-83db-d6fc590d2787\",\"queryUniqueId\":\"dddaf861-9ba0-e0ca-7184-fadc826cfe3c\",\"query\":\"Chinese\"}",
                "objectValue": "133046",
                "impressionObjectName": "impression-restaurant",
                "clickObjectName": "click-restaurant"
              },
              "ctaWithParams": {
                "link": "swiggy://menu",
                "type": "DEEPLINK",
                "params": {
                  "isSld": "false",
                  "sourceRequestId": "00000000000000000000000000000000",
                  "qrEnabled": "false",
                  "restaurant_id": "133046",
                  "query": "Chinese",
                  "sourceSessionId": "s760c95c9a8-bbd2-493c-ba94-f978be8cd",
                  "source": "SEARCH"
                }
              }
            }
          }
        },
        {
          "card": {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                "id": "1370357",
                "name": "Anand Bhajipav and Pulav Ankurwala",
                "city": "10",
                "slugs": {
                  "restaurant": "anand-bhajipav-&-pulav-ankurwala-chandkheda-chandkheda",
                  "city": "ahmedabad"
                },
                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/4/27/2b12ea40-2c00-4b67-bc6c-8a9e6a5883c9_1370357.jpg",
                "address": "SHOP NO-GF.-5, TRISHALA APPARTMENTS, OPP. SAKAR ENGLISH SCHOOL, NEW C.G.ROAD, CHANDKHEDA ,Chandkheramotera(West Zone),Ahmedabad Municipal Corporation,Ahmedabad,Gujarat-382424",
                "locality": "Chandkheda",
                "areaName": "Chandkheda",
                "costForTwo": "35000",
                "costForTwoMessage": "₹350 FOR TWO",
                "cuisines": [
                  "Fast Food",
                  "South Indian",
                  "Chinese",
                  "Batter"
                ],
                "avgRating": 3.8,
                "veg": true,
                "feeDetails": {
                  
                },
                "parentId": "780679",
                "avgRatingString": "3.8",
                "totalRatingsString": "13",
                "sla": {
                  "deliveryTime": 30,
                  "minDeliveryTime": 25,
                  "maxDeliveryTime": 30,
                  "lastMileTravel": 4.5,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "RAIN_MODE_NONE",
                  "slaString": "25-30 MINS",
                  "lastMileTravelString": "4.5 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "opened": true,
                  "restaurantClosedMeta": {
                    
                  }
                },
                "aggregatedDiscountInfo": {
                  "visible": true
                },
                "badges": {
                  
                },
                "aggregatedDiscountInfoV2": {
                  "visible": true
                },
                "ratingSlab": "RATING_SLAB_4",
                "orderabilityCommunication": {
                  "title": {
                    
                  },
                  "subTitle": {
                    
                  },
                  "message": {
                    
                  },
                  "customIcon": {
                    
                  },
                  "commsStyling": {
                    
                  }
                },
                "cartOrderabilityNudgeBanner": {
                  "parameters": {
                    
                  },
                  "presentation": {
                    
                  }
                },
                "externalRatings": {
                  "aggregatedRating": {
                    "rating": "--"
                  }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                "featuredSectionInfo": {
                  "sectionTitle": "More"
                },
                "showEoOffer": true,
                "priceComparisonComms": {
                  
                }
              },
              "analytics": {
                "screenName": "explore",
                "context": "{\"tid\":\"667033fd-f6c3-a6c2-4c3c-2e24a0547493\",\"grid\":\"fb89fd69-3f92-43ab-83db-d6fc590d2787\",\"queryUniqueId\":\"dddaf861-9ba0-e0ca-7184-fadc826cfe3c\",\"query\":\"Chinese\"}",
                "objectValue": "1370357",
                "impressionObjectName": "impression-restaurant",
                "clickObjectName": "click-restaurant"
              },
              "ctaWithParams": {
                "link": "swiggy://menu",
                "type": "DEEPLINK",
                "params": {
                  "sourceSessionId": "s760c95c9a8-bbd2-493c-ba94-f978be8cd",
                  "source": "SEARCH",
                  "isSld": "false",
                  "sourceRequestId": "00000000000000000000000000000000",
                  "qrEnabled": "false",
                  "restaurant_id": "1370357",
                  "query": "Chinese"
                }
              }
            }
          }
        },
        {
          "card": {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                "id": "967881",
                "name": "K.P. Chinese & Fast Food",
                "city": "10",
                "slugs": {
                  "restaurant": "k.p.-chinese-&-fast-food-naroda-naroda",
                  "city": "ahmedabad"
                },
                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/3/c9d8e9bf-9b9a-4601-9577-3090de954da1_967881.JPG",
                "address": "Shop No : 1 , Floor : 0 , PARAGON TAILORS NEAR TALAVDI CIRCLE , ",
                "locality": "Naroda",
                "areaName": "Naroda",
                "costForTwo": "40000",
                "costForTwoMessage": "₹400 FOR TWO",
                "cuisines": [
                  "Chinese",
                  "Punjabi"
                ],
                "veg": true,
                "feeDetails": {
                  
                },
                "parentId": "566761",
                "avgRatingString": "--",
                "sla": {
                  "deliveryTime": 36,
                  "minDeliveryTime": 35,
                  "maxDeliveryTime": 40,
                  "lastMileTravel": 3.5,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "RAIN_MODE_NONE",
                  "slaString": "35-40 MINS",
                  "lastMileTravelString": "3.5 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "opened": true,
                  "restaurantClosedMeta": {
                    
                  }
                },
                "badges": {
                  
                },
                "aggregatedDiscountInfoV3": {
                  "header": "₹100 OFF",
                  "subHeader": "ABOVE ₹899",
                  "discountTag": "FLAT DEAL",
                  "logoCtx": {
                    "text": "BENEFITS"
                  }
                },
                "orderabilityCommunication": {
                  "title": {
                    
                  },
                  "subTitle": {
                    
                  },
                  "message": {
                    
                  },
                  "customIcon": {
                    
                  },
                  "commsStyling": {
                    
                  }
                },
                "cartOrderabilityNudgeBanner": {
                  "parameters": {
                    
                  },
                  "presentation": {
                    
                  }
                },
                "externalRatings": {
                  "aggregatedRating": {
                    "rating": "--"
                  }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                "featuredSectionInfo": {
                  "sectionTitle": "More"
                },
                "showEoOffer": true,
                "priceComparisonComms": {
                  
                }
              },
              "analytics": {
                "screenName": "explore",
                "context": "{\"tid\":\"667033fd-f6c3-a6c2-4c3c-2e24a0547493\",\"grid\":\"fb89fd69-3f92-43ab-83db-d6fc590d2787\",\"queryUniqueId\":\"dddaf861-9ba0-e0ca-7184-fadc826cfe3c\",\"query\":\"Chinese\"}",
                "objectValue": "967881",
                "impressionObjectName": "impression-restaurant",
                "clickObjectName": "click-restaurant"
              },
              "ctaWithParams": {
                "link": "swiggy://menu",
                "type": "DEEPLINK",
                "params": {
                  "sourceSessionId": "s760c95c9a8-bbd2-493c-ba94-f978be8cd",
                  "source": "SEARCH",
                  "isSld": "false",
                  "sourceRequestId": "00000000000000000000000000000000",
                  "qrEnabled": "false",
                  "restaurant_id": "967881",
                  "query": "Chinese"
                }
              }
            }
          }
        },
        {
          "card": {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                "id": "383714",
                "name": "Temptt Restaurant",
                "city": "10",
                "slugs": {
                  "restaurant": "temptt-restaurant-chandkheda-chandkheda",
                  "city": "ahmedabad"
                },
                "cloudinaryImageId": "5cd58e7d6ab7d4cead74f375376051f8",
                "address": "Krishna Hospitality, Sixth Floor, Office No1 And 2, Atishay Prism, Tapovan Circle, Chandkheda",
                "locality": "Chandkheda",
                "areaName": "Chandkheda",
                "costForTwo": "60000",
                "costForTwoMessage": "₹600 FOR TWO",
                "cuisines": [
                  "Combo",
                  "Salads",
                  "Indian",
                  "Beverages"
                ],
                "avgRating": 4.6,
                "feeDetails": {
                  
                },
                "parentId": "256984",
                "avgRatingString": "4.6",
                "totalRatingsString": "520",
                "sla": {
                  "deliveryTime": 36,
                  "minDeliveryTime": 35,
                  "maxDeliveryTime": 40,
                  "lastMileTravel": 4.2,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "RAIN_MODE_NONE",
                  "slaString": "35-40 MINS",
                  "lastMileTravelString": "4.2 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "opened": true,
                  "restaurantClosedMeta": {
                    
                  }
                },
                "badges": {
                  "imageBadges": [
                    {
                      "imageId": "newg.png",
                      "description": "Premium gourmet restaurant offering an elevated, high-quality food experience."
                    },
                    {
                      "imageId": "v1695133679/badges/Pure_Veg111.png",
                      "description": "Serves only 100% vegetarian food, with no non-veg items."
                    }
                  ]
                },
                "aggregatedDiscountInfoV3": {
                  "header": "ITEMS",
                  "subHeader": "AT ₹89",
                  "logoCtx": {
                    "text": "BENEFITS"
                  }
                },
                "ratingSlab": "RATING_SLAB_5",
                "orderabilityCommunication": {
                  "title": {
                    
                  },
                  "subTitle": {
                    
                  },
                  "message": {
                    
                  },
                  "customIcon": {
                    
                  },
                  "commsStyling": {
                    
                  }
                },
                "cartOrderabilityNudgeBanner": {
                  "parameters": {
                    
                  },
                  "presentation": {
                    
                  }
                },
                "externalRatings": {
                  "aggregatedRating": {
                    "rating": "4.3",
                    "ratingCount": "3.0K+"
                  },
                  "source": "GOOGLE",
                  "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                "featuredSectionInfo": {
                  "sectionTitle": "More"
                },
                "showEoOffer": true,
                "priceComparisonComms": {
                  
                }
              },
              "analytics": {
                "screenName": "explore",
                "context": "{\"tid\":\"667033fd-f6c3-a6c2-4c3c-2e24a0547493\",\"grid\":\"fb89fd69-3f92-43ab-83db-d6fc590d2787\",\"queryUniqueId\":\"dddaf861-9ba0-e0ca-7184-fadc826cfe3c\",\"query\":\"Chinese\"}",
                "objectValue": "383714",
                "impressionObjectName": "impression-restaurant",
                "clickObjectName": "click-restaurant"
              },
              "ctaWithParams": {
                "link": "swiggy://menu",
                "type": "DEEPLINK",
                "params": {
                  "sourceSessionId": "s760c95c9a8-bbd2-493c-ba94-f978be8cd",
                  "source": "SEARCH",
                  "isSld": "false",
                  "sourceRequestId": "00000000000000000000000000000000",
                  "qrEnabled": "false",
                  "restaurant_id": "383714",
                  "query": "Chinese"
                }
              }
            }
          }
        },
        {
          "card": {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                "id": "298361",
                "name": "Legends of Punjab By Pepperazi",
                "city": "10",
                "slugs": {
                  "restaurant": "legends-of-punjab-gandhinagar-gandhinagar",
                  "city": "ahmedabad"
                },
                "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2026/1/13/9e045b86-b677-46b2-9fdc-c322d8e70226_06bd0459-fc13-4739-8963-f61432a586ff.JPG",
                "address": "SHOP NO-148,149,150,PRAMUKH MASTANA COMMERCIAL COMPLEX,Nr.RELIANCE CHAR RASTA,KUDASAN,GANDHINAGAR., District - Gandhinagar, STATE - Gujarat",
                "locality": "Gandhinagar",
                "areaName": "Kudasan",
                "costForTwo": "25000",
                "costForTwoMessage": "₹250 FOR TWO",
                "cuisines": [
                  "Punjabi"
                ],
                "avgRating": 4.1,
                "veg": true,
                "feeDetails": {
                  
                },
                "parentId": "124736",
                "avgRatingString": "4.1",
                "totalRatingsString": "1.3K+",
                "sla": {
                  "deliveryTime": 37,
                  "minDeliveryTime": 35,
                  "maxDeliveryTime": 40,
                  "lastMileTravel": 9.9,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "RAIN_MODE_NONE",
                  "slaString": "35-40 MINS",
                  "lastMileTravelString": "9.9 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "opened": true,
                  "restaurantClosedMeta": {
                    
                  }
                },
                "badges": {
                  "imageBadges": [
                    {
                      "imageId": "v1695133679/badges/Pure_Veg111.png",
                      "description": "Serves only 100% vegetarian food, with no non-veg items."
                    }
                  ]
                },
                "aggregatedDiscountInfoV3": {
                  "header": "75% OFF",
                  "subHeader": "UPTO ₹160",
                  "discountTag": "SAVE BIG",
                  "logoCtx": {
                    "text": "BENEFITS"
                  }
                },
                "ratingSlab": "RATING_SLAB_5",
                "orderabilityCommunication": {
                  "title": {
                    
                  },
                  "subTitle": {
                    
                  },
                  "message": {
                    
                  },
                  "customIcon": {
                    
                  },
                  "commsStyling": {
                    
                  }
                },
                "cartOrderabilityNudgeBanner": {
                  "parameters": {
                    
                  },
                  "presentation": {
                    
                  }
                },
                "externalRatings": {
                  "aggregatedRating": {
                    "rating": "--"
                  }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                "featuredSectionInfo": {
                  "sectionTitle": "More"
                },
                "showEoOffer": true,
                "priceComparisonComms": {
                  
                }
              },
              "analytics": {
                "screenName": "explore",
                "context": "{\"tid\":\"667033fd-f6c3-a6c2-4c3c-2e24a0547493\",\"grid\":\"fb89fd69-3f92-43ab-83db-d6fc590d2787\",\"queryUniqueId\":\"dddaf861-9ba0-e0ca-7184-fadc826cfe3c\",\"query\":\"Chinese\"}",
                "objectValue": "298361",
                "impressionObjectName": "impression-restaurant",
                "clickObjectName": "click-restaurant"
              },
              "ctaWithParams": {
                "link": "swiggy://menu",
                "type": "DEEPLINK",
                "params": {
                  "qrEnabled": "false",
                  "restaurant_id": "298361",
                  "query": "Chinese",
                  "sourceSessionId": "s760c95c9a8-bbd2-493c-ba94-f978be8cd",
                  "source": "SEARCH",
                  "isSld": "false",
                  "sourceRequestId": "00000000000000000000000000000000"
                }
              }
            }
          }
        },
        {
          "card": {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                "id": "1371939",
                "name": "Anand Ankurwala PDPU",
                "city": "10",
                "slugs": {
                  "restaurant": "anand-ankurwala-pdpu-gandhinagar-gandhinagar",
                  "city": "ahmedabad"
                },
                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/5/1/62850fc2-38e3-4109-afb0-88f7e43ac104_1371939.jpg",
                "address": "G.F SHOP NO-03,RADHE TIME SQURE,KUDASAN,GANDHINAGAR ,Gandhinagar Municipal Corporation,Gandhinagar,Gujarat-382421",
                "locality": "Gandhinagar",
                "areaName": "Gandhinagar",
                "costForTwo": "20000",
                "costForTwoMessage": "₹200 FOR TWO",
                "cuisines": [
                  "Street Food",
                  "Snacks",
                  "Pizzas",
                  "Fast Food",
                  "Burgers"
                ],
                "avgRating": 4.4,
                "veg": true,
                "feeDetails": {
                  
                },
                "parentId": "781516",
                "avgRatingString": "4.4",
                "totalRatingsString": "18",
                "sla": {
                  "deliveryTime": 29,
                  "minDeliveryTime": 25,
                  "maxDeliveryTime": 30,
                  "lastMileTravel": 5.7,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "RAIN_MODE_NONE",
                  "slaString": "25-30 MINS",
                  "lastMileTravelString": "5.7 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "opened": true,
                  "restaurantClosedMeta": {
                    
                  }
                },
                "aggregatedDiscountInfo": {
                  "visible": true
                },
                "badges": {
                  
                },
                "aggregatedDiscountInfoV2": {
                  "visible": true
                },
                "ratingSlab": "RATING_SLAB_5",
                "orderabilityCommunication": {
                  "title": {
                    
                  },
                  "subTitle": {
                    
                  },
                  "message": {
                    
                  },
                  "customIcon": {
                    
                  },
                  "commsStyling": {
                    
                  }
                },
                "cartOrderabilityNudgeBanner": {
                  "parameters": {
                    
                  },
                  "presentation": {
                    
                  }
                },
                "externalRatings": {
                  "aggregatedRating": {
                    "rating": "--"
                  }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                "featuredSectionInfo": {
                  "sectionTitle": "More"
                },
                "showEoOffer": true,
                "priceComparisonComms": {
                  
                }
              },
              "analytics": {
                "screenName": "explore",
                "context": "{\"tid\":\"667033fd-f6c3-a6c2-4c3c-2e24a0547493\",\"grid\":\"fb89fd69-3f92-43ab-83db-d6fc590d2787\",\"queryUniqueId\":\"dddaf861-9ba0-e0ca-7184-fadc826cfe3c\",\"query\":\"Chinese\"}",
                "objectValue": "1371939",
                "impressionObjectName": "impression-restaurant",
                "clickObjectName": "click-restaurant"
              },
              "ctaWithParams": {
                "link": "swiggy://menu",
                "type": "DEEPLINK",
                "params": {
                  "qrEnabled": "false",
                  "restaurant_id": "1371939",
                  "query": "Chinese",
                  "sourceSessionId": "s760c95c9a8-bbd2-493c-ba94-f978be8cd",
                  "source": "SEARCH",
                  "isSld": "false",
                  "sourceRequestId": "00000000000000000000000000000000"
                }
              }
            }
          }
        },
        {
          "card": {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                "id": "1121587",
                "name": "Veda Gathiya Rath",
                "city": "10",
                "slugs": {
                  "restaurant": "veda-gathiya-rath-gota-gota",
                  "city": "ahmedabad"
                },
                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/10/e794900e-a8e8-4aad-ad17-30e7229303f0_1121587.jpg",
                "address": "SERVEY NO.561,C/O. GORBANDH RESTAURANT,AT.KHORAJ ,Adalaj ,Gandhinagar,Gandhinagar,Gujarat-382421\t",
                "locality": "GOTA",
                "areaName": "GOTA",
                "costForTwo": "30000",
                "costForTwoMessage": "₹300 FOR TWO",
                "cuisines": [
                  "Street Food",
                  "Snacks",
                  "Pizzas",
                  "Fast Food",
                  "Cafe"
                ],
                "avgRating": 4,
                "veg": true,
                "feeDetails": {
                  
                },
                "parentId": "646448",
                "avgRatingString": "4.0",
                "totalRatingsString": "111",
                "sla": {
                  "deliveryTime": 46,
                  "minDeliveryTime": 45,
                  "maxDeliveryTime": 50,
                  "lastMileTravel": 12,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "RAIN_MODE_NONE",
                  "slaString": "45-50 MINS",
                  "lastMileTravelString": "12.0 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "opened": true,
                  "restaurantClosedMeta": {
                    
                  }
                },
                "badges": {
                  
                },
                "aggregatedDiscountInfoV3": {
                  "header": "₹150 OFF",
                  "subHeader": "ABOVE ₹999",
                  "discountTag": "FLAT DEAL",
                  "logoCtx": {
                    "text": "BENEFITS"
                  }
                },
                "ratingSlab": "RATING_SLAB_4",
                "orderabilityCommunication": {
                  "title": {
                    
                  },
                  "subTitle": {
                    
                  },
                  "message": {
                    
                  },
                  "customIcon": {
                    
                  },
                  "commsStyling": {
                    
                  }
                },
                "cartOrderabilityNudgeBanner": {
                  "parameters": {
                    
                  },
                  "presentation": {
                    
                  }
                },
                "externalRatings": {
                  "aggregatedRating": {
                    "rating": "--"
                  }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                "featuredSectionInfo": {
                  "sectionTitle": "More"
                },
                "showEoOffer": true,
                "priceComparisonComms": {
                  
                }
              },
              "analytics": {
                "screenName": "explore",
                "context": "{\"tid\":\"667033fd-f6c3-a6c2-4c3c-2e24a0547493\",\"grid\":\"fb89fd69-3f92-43ab-83db-d6fc590d2787\",\"queryUniqueId\":\"dddaf861-9ba0-e0ca-7184-fadc826cfe3c\",\"query\":\"Chinese\"}",
                "objectValue": "1121587",
                "impressionObjectName": "impression-restaurant",
                "clickObjectName": "click-restaurant"
              },
              "ctaWithParams": {
                "link": "swiggy://menu",
                "type": "DEEPLINK",
                "params": {
                  "query": "Chinese",
                  "sourceSessionId": "s760c95c9a8-bbd2-493c-ba94-f978be8cd",
                  "source": "SEARCH",
                  "isSld": "false",
                  "sourceRequestId": "00000000000000000000000000000000",
                  "qrEnabled": "false",
                  "restaurant_id": "1121587"
                }
              }
            }
          }
        },
        {
          "card": {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                "id": "1211521",
                "name": "Mumbai Express",
                "city": "10",
                "slugs": {
                  "restaurant": "mumbai-express-gota-gota",
                  "city": "ahmedabad"
                },
                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/20/ecfeac5f-539b-4ecb-ba7a-61c59b059ee0_1211521.jpg",
                "address": "Shop No : Shop number 10 , Floor : Ground , Saral parivesh , Saral Parivesh, IOC Road, Shubh Sonal Society, D-Cabin, Chandkheda, Ahmedabad, Gujarat, India",
                "locality": "GOTA",
                "areaName": "GOTA",
                "costForTwo": "25000",
                "costForTwoMessage": "₹250 FOR TWO",
                "cuisines": [
                  "South Indian",
                  "Fast Food"
                ],
                "avgRating": 3.5,
                "veg": true,
                "feeDetails": {
                  
                },
                "parentId": "141425",
                "avgRatingString": "3.5",
                "totalRatingsString": "47",
                "sla": {
                  "deliveryTime": 38,
                  "minDeliveryTime": 35,
                  "maxDeliveryTime": 40,
                  "lastMileTravel": 7.8,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "RAIN_MODE_NONE",
                  "slaString": "35-40 MINS",
                  "lastMileTravelString": "7.8 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "opened": true,
                  "restaurantClosedMeta": {
                    
                  }
                },
                "aggregatedDiscountInfo": {
                  "visible": true
                },
                "badges": {
                  
                },
                "aggregatedDiscountInfoV2": {
                  "visible": true
                },
                "ratingSlab": "RATING_SLAB_4",
                "orderabilityCommunication": {
                  "title": {
                    
                  },
                  "subTitle": {
                    
                  },
                  "message": {
                    
                  },
                  "customIcon": {
                    
                  },
                  "commsStyling": {
                    
                  }
                },
                "cartOrderabilityNudgeBanner": {
                  "parameters": {
                    
                  },
                  "presentation": {
                    
                  }
                },
                "externalRatings": {
                  "aggregatedRating": {
                    "rating": "--"
                  }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                "featuredSectionInfo": {
                  "sectionTitle": "More"
                },
                "showEoOffer": true,
                "priceComparisonComms": {
                  
                }
              },
              "analytics": {
                "screenName": "explore",
                "context": "{\"tid\":\"667033fd-f6c3-a6c2-4c3c-2e24a0547493\",\"grid\":\"fb89fd69-3f92-43ab-83db-d6fc590d2787\",\"queryUniqueId\":\"dddaf861-9ba0-e0ca-7184-fadc826cfe3c\",\"query\":\"Chinese\"}",
                "objectValue": "1211521",
                "impressionObjectName": "impression-restaurant",
                "clickObjectName": "click-restaurant"
              },
              "ctaWithParams": {
                "link": "swiggy://menu",
                "type": "DEEPLINK",
                "params": {
                  "query": "Chinese",
                  "sourceSessionId": "s760c95c9a8-bbd2-493c-ba94-f978be8cd",
                  "source": "SEARCH",
                  "isSld": "false",
                  "sourceRequestId": "00000000000000000000000000000000",
                  "qrEnabled": "false",
                  "restaurant_id": "1211521"
                }
              }
            }
          }
        },
        {
          "card": {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                "id": "1012661",
                "name": "Anand Sandwich Ankurwala",
                "city": "10",
                "slugs": {
                  "restaurant": "anand-sandwich-ankurwala-gota-gota",
                  "city": "ahmedabad"
                },
                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/21/5aa2e10a-b299-4936-8ea0-a880a2e8256d_1012661.jpg",
                "address": "SHOP NO. 1, KALASH SQUARE, NR. AAMRAKUNJ, ZUNDAL, AGANDHINAGAR ,Chandkheramotera(West Zone),Ahmedabad Municipal Corporation,Ahmedabad,Gujarat-382421\t",
                "locality": "GOTA",
                "areaName": "CHANDKHEDA",
                "costForTwo": "40000",
                "costForTwoMessage": "₹400 FOR TWO",
                "cuisines": [
                  "Fast Food"
                ],
                "avgRating": 4.2,
                "veg": true,
                "feeDetails": {
                  
                },
                "parentId": "590428",
                "avgRatingString": "4.2",
                "totalRatingsString": "74",
                "sla": {
                  "deliveryTime": 34,
                  "minDeliveryTime": 30,
                  "maxDeliveryTime": 35,
                  "lastMileTravel": 8.2,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "RAIN_MODE_NONE",
                  "slaString": "30-35 MINS",
                  "lastMileTravelString": "8.2 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "opened": true,
                  "restaurantClosedMeta": {
                    
                  }
                },
                "badges": {
                  
                },
                "aggregatedDiscountInfoV3": {
                  "header": "ITEMS",
                  "subHeader": "AT ₹39",
                  "logoCtx": {
                    "text": "BENEFITS"
                  }
                },
                "ratingSlab": "RATING_SLAB_5",
                "orderabilityCommunication": {
                  "title": {
                    
                  },
                  "subTitle": {
                    
                  },
                  "message": {
                    
                  },
                  "customIcon": {
                    
                  },
                  "commsStyling": {
                    
                  }
                },
                "cartOrderabilityNudgeBanner": {
                  "parameters": {
                    
                  },
                  "presentation": {
                    
                  }
                },
                "externalRatings": {
                  "aggregatedRating": {
                    "rating": "--"
                  }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                "featuredSectionInfo": {
                  "sectionTitle": "More"
                },
                "showEoOffer": true,
                "priceComparisonComms": {
                  
                }
              },
              "analytics": {
                "screenName": "explore",
                "context": "{\"tid\":\"667033fd-f6c3-a6c2-4c3c-2e24a0547493\",\"grid\":\"fb89fd69-3f92-43ab-83db-d6fc590d2787\",\"queryUniqueId\":\"dddaf861-9ba0-e0ca-7184-fadc826cfe3c\",\"query\":\"Chinese\"}",
                "objectValue": "1012661",
                "impressionObjectName": "impression-restaurant",
                "clickObjectName": "click-restaurant"
              },
              "ctaWithParams": {
                "link": "swiggy://menu",
                "type": "DEEPLINK",
                "params": {
                  "query": "Chinese",
                  "sourceSessionId": "s760c95c9a8-bbd2-493c-ba94-f978be8cd",
                  "source": "SEARCH",
                  "isSld": "false",
                  "sourceRequestId": "00000000000000000000000000000000",
                  "qrEnabled": "false",
                  "restaurant_id": "1012661"
                }
              }
            }
          }
        },
        {
          "card": {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                "id": "554814",
                "name": "Maharaj Sandwich & Pizza",
                "city": "10",
                "slugs": {
                  "restaurant": "maharaj-sandwich-&-pizza-naranpura-naranpura",
                  "city": "ahmedabad"
                },
                "cloudinaryImageId": "ec4c7c6e312d7720c6e3cdefb762008c",
                "address": "Survey No-1021/1, Kapadia Mension, Opp-Ramji Mandir, Ramnagar, Sabarmati, Ahmedabad, Gujarat - 380005",
                "locality": "Sabarmati",
                "areaName": "Sabarmati",
                "costForTwo": "20000",
                "costForTwoMessage": "₹200 FOR TWO",
                "cuisines": [
                  "Pizzas",
                  "Street Food",
                  "Fast Food"
                ],
                "avgRating": 4.4,
                "veg": true,
                "feeDetails": {
                  
                },
                "parentId": "333630",
                "avgRatingString": "4.4",
                "totalRatingsString": "879",
                "sla": {
                  "deliveryTime": 39,
                  "minDeliveryTime": 35,
                  "maxDeliveryTime": 40,
                  "lastMileTravel": 5.7,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "RAIN_MODE_NONE",
                  "slaString": "35-40 MINS",
                  "lastMileTravelString": "5.7 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "opened": true,
                  "restaurantClosedMeta": {
                    
                  }
                },
                "badges": {
                  "imageBadges": [
                    {
                      "imageId": "v1695133679/badges/Pure_Veg111.png",
                      "description": "Serves only 100% vegetarian food, with no non-veg items."
                    }
                  ]
                },
                "aggregatedDiscountInfoV3": {
                  "header": "ITEMS",
                  "subHeader": "AT ₹19",
                  "logoCtx": {
                    "text": "BENEFITS"
                  }
                },
                "ratingSlab": "RATING_SLAB_5",
                "orderabilityCommunication": {
                  "title": {
                    
                  },
                  "subTitle": {
                    
                  },
                  "message": {
                    
                  },
                  "customIcon": {
                    
                  },
                  "commsStyling": {
                    
                  }
                },
                "cartOrderabilityNudgeBanner": {
                  "parameters": {
                    
                  },
                  "presentation": {
                    
                  }
                },
                "externalRatings": {
                  "aggregatedRating": {
                    "rating": "4.1",
                    "ratingCount": "1.6K+"
                  },
                  "source": "GOOGLE",
                  "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                "featuredSectionInfo": {
                  "sectionTitle": "More"
                },
                "showEoOffer": true,
                "priceComparisonComms": {
                  
                }
              },
              "analytics": {
                "screenName": "explore",
                "context": "{\"tid\":\"667033fd-f6c3-a6c2-4c3c-2e24a0547493\",\"grid\":\"fb89fd69-3f92-43ab-83db-d6fc590d2787\",\"queryUniqueId\":\"dddaf861-9ba0-e0ca-7184-fadc826cfe3c\",\"query\":\"Chinese\"}",
                "objectValue": "554814",
                "impressionObjectName": "impression-restaurant",
                "clickObjectName": "click-restaurant"
              },
              "ctaWithParams": {
                "link": "swiggy://menu",
                "type": "DEEPLINK",
                "params": {
                  "source": "SEARCH",
                  "isSld": "false",
                  "sourceRequestId": "00000000000000000000000000000000",
                  "qrEnabled": "false",
                  "restaurant_id": "554814",
                  "query": "Chinese",
                  "sourceSessionId": "s760c95c9a8-bbd2-493c-ba94-f978be8cd"
                }
              }
            }
          }
        },
        {
          "card": {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                "id": "91487",
                "name": "Surbhi Restaurant",
                "city": "10",
                "slugs": {
                  "restaurant": "surbhi-restaurant-galaxy-complex-naroda-mahanagar",
                  "city": "ahmedabad"
                },
                "cloudinaryImageId": "vptsldyphwypjehn8g4b",
                "address": "1st Floor, Galaxy Complex, Opposite Galaxy Cinema, Naroda, Ahmedabad",
                "locality": "Maninagar",
                "areaName": "Naroda",
                "costForTwo": "40000",
                "costForTwoMessage": "₹400 FOR TWO",
                "cuisines": [
                  "North Indian",
                  "Chinese"
                ],
                "avgRating": 4.6,
                "veg": true,
                "feeDetails": {
                  
                },
                "parentId": "7605",
                "avgRatingString": "4.6",
                "totalRatingsString": "9.3K+",
                "sla": {
                  "deliveryTime": 44,
                  "minDeliveryTime": 40,
                  "maxDeliveryTime": 45,
                  "lastMileTravel": 9.8,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "RAIN_MODE_NONE",
                  "slaString": "40-45 MINS",
                  "lastMileTravelString": "9.8 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "opened": true,
                  "restaurantClosedMeta": {
                    
                  }
                },
                "badges": {
                  "imageBadges": [
                    {
                      "imageId": "v1695133679/badges/Pure_Veg111.png",
                      "description": "Serves only 100% vegetarian food, with no non-veg items."
                    }
                  ]
                },
                "aggregatedDiscountInfoV3": {
                  "header": "ITEMS",
                  "subHeader": "AT ₹45",
                  "logoCtx": {
                    "text": "BENEFITS"
                  }
                },
                "ratingSlab": "RATING_SLAB_5",
                "orderabilityCommunication": {
                  "title": {
                    
                  },
                  "subTitle": {
                    
                  },
                  "message": {
                    
                  },
                  "customIcon": {
                    
                  },
                  "commsStyling": {
                    
                  }
                },
                "cartOrderabilityNudgeBanner": {
                  "parameters": {
                    
                  },
                  "presentation": {
                    
                  }
                },
                "externalRatings": {
                  "aggregatedRating": {
                    "rating": "4.3",
                    "ratingCount": "1.8K+"
                  },
                  "source": "GOOGLE",
                  "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                "featuredSectionInfo": {
                  "sectionTitle": "More"
                },
                "showEoOffer": true,
                "priceComparisonComms": {
                  
                }
              },
              "analytics": {
                "screenName": "explore",
                "context": "{\"tid\":\"667033fd-f6c3-a6c2-4c3c-2e24a0547493\",\"grid\":\"fb89fd69-3f92-43ab-83db-d6fc590d2787\",\"queryUniqueId\":\"dddaf861-9ba0-e0ca-7184-fadc826cfe3c\",\"query\":\"Chinese\"}",
                "objectValue": "91487",
                "impressionObjectName": "impression-restaurant",
                "clickObjectName": "click-restaurant"
              },
              "ctaWithParams": {
                "link": "swiggy://menu",
                "type": "DEEPLINK",
                "params": {
                  "qrEnabled": "false",
                  "restaurant_id": "91487",
                  "query": "Chinese",
                  "sourceSessionId": "s760c95c9a8-bbd2-493c-ba94-f978be8cd",
                  "source": "SEARCH",
                  "isSld": "false",
                  "sourceRequestId": "00000000000000000000000000000000"
                }
              }
            }
          }
        },
        {
          "card": {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                "id": "462494",
                "name": "Hotel Priya Palace",
                "city": "10",
                "slugs": {
                  "restaurant": "hotel-priya-palace-naroda-naroda",
                  "city": "ahmedabad"
                },
                "cloudinaryImageId": "e1nbxbyfutbmsolpbrtm",
                "address": "4th Floor,, Shikhar Avenue 2, Someshwar Mahadev Rd, Nana Chiloda, Ahmedabad, Gujarat 382330, India",
                "locality": "Nana Chiloda",
                "areaName": "Naroda",
                "costForTwo": "50000",
                "costForTwoMessage": "₹500 FOR TWO",
                "cuisines": [
                  "Chinese",
                  "Oriental",
                  "Tandoor",
                  "Indian",
                  "Biryani"
                ],
                "avgRating": 4.1,
                "feeDetails": {
                  
                },
                "parentId": "277423",
                "avgRatingString": "4.1",
                "totalRatingsString": "417",
                "sla": {
                  "deliveryTime": 49,
                  "minDeliveryTime": 45,
                  "maxDeliveryTime": 55,
                  "lastMileTravel": 6.3,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "RAIN_MODE_NONE",
                  "slaString": "45-55 MINS",
                  "lastMileTravelString": "6.3 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "opened": true,
                  "restaurantClosedMeta": {
                    
                  }
                },
                "badges": {
                  
                },
                "aggregatedDiscountInfoV3": {
                  "header": "70% OFF",
                  "subHeader": "UPTO ₹140",
                  "logoCtx": {
                    "text": "BENEFITS"
                  }
                },
                "ratingSlab": "RATING_SLAB_5",
                "orderabilityCommunication": {
                  "title": {
                    
                  },
                  "subTitle": {
                    
                  },
                  "message": {
                    
                  },
                  "customIcon": {
                    
                  },
                  "commsStyling": {
                    
                  }
                },
                "cartOrderabilityNudgeBanner": {
                  "parameters": {
                    
                  },
                  "presentation": {
                    
                  }
                },
                "externalRatings": {
                  "aggregatedRating": {
                    "rating": "--"
                  }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                "featuredSectionInfo": {
                  "sectionTitle": "More"
                },
                "showEoOffer": true,
                "priceComparisonComms": {
                  
                }
              },
              "analytics": {
                "screenName": "explore",
                "context": "{\"tid\":\"667033fd-f6c3-a6c2-4c3c-2e24a0547493\",\"grid\":\"fb89fd69-3f92-43ab-83db-d6fc590d2787\",\"queryUniqueId\":\"dddaf861-9ba0-e0ca-7184-fadc826cfe3c\",\"query\":\"Chinese\"}",
                "objectValue": "462494",
                "impressionObjectName": "impression-restaurant",
                "clickObjectName": "click-restaurant"
              },
              "ctaWithParams": {
                "link": "swiggy://menu",
                "type": "DEEPLINK",
                "params": {
                  "query": "Chinese",
                  "sourceSessionId": "s760c95c9a8-bbd2-493c-ba94-f978be8cd",
                  "source": "SEARCH",
                  "isSld": "false",
                  "sourceRequestId": "00000000000000000000000000000000",
                  "qrEnabled": "false",
                  "restaurant_id": "462494"
                }
              }
            }
          }
        },
        {
          "card": {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                "id": "752166",
                "name": "Ranaji Garden Restaurant",
                "city": "10",
                "slugs": {
                  "restaurant": "ranaji-garden-restaurant-chandkheda-chandkheda",
                  "city": "ahmedabad"
                },
                "cloudinaryImageId": "525dc349dc803b60e8571f0cd093d1af",
                "address": "Survey No 94, Near Radhe fortune, Near village german greenfield business park, Bhat sughad ring road. Village: Bhat taluka: Daskol, District GAndhinagar, Bhat Gandhinagar, Municipal corporation, Guja",
                "locality": "Bhat sughad ring road",
                "areaName": "Chandkheda",
                "costForTwo": "30000",
                "costForTwoMessage": "₹300 FOR TWO",
                "cuisines": [
                  "North Indian",
                  "Indian",
                  "Chinese"
                ],
                "avgRating": 4.2,
                "feeDetails": {
                  
                },
                "parentId": "445046",
                "avgRatingString": "4.2",
                "totalRatingsString": "271",
                "sla": {
                  "deliveryTime": 21,
                  "minDeliveryTime": 20,
                  "maxDeliveryTime": 25,
                  "lastMileTravel": 1.5,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "RAIN_MODE_NONE",
                  "slaString": "20-25 MINS",
                  "lastMileTravelString": "1.5 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "opened": true,
                  "restaurantClosedMeta": {
                    
                  }
                },
                "aggregatedDiscountInfo": {
                  "visible": true
                },
                "badges": {
                  "imageBadges": [
                    {
                      "imageId": "v1695133679/badges/Pure_Veg111.png",
                      "description": "Serves only 100% vegetarian food, with no non-veg items."
                    }
                  ]
                },
                "aggregatedDiscountInfoV2": {
                  "visible": true
                },
                "ratingSlab": "RATING_SLAB_5",
                "orderabilityCommunication": {
                  "title": {
                    
                  },
                  "subTitle": {
                    
                  },
                  "message": {
                    
                  },
                  "customIcon": {
                    
                  },
                  "commsStyling": {
                    
                  }
                },
                "cartOrderabilityNudgeBanner": {
                  "parameters": {
                    
                  },
                  "presentation": {
                    
                  }
                },
                "externalRatings": {
                  "aggregatedRating": {
                    "rating": "--"
                  }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                "featuredSectionInfo": {
                  "sectionTitle": "More"
                },
                "showEoOffer": true,
                "priceComparisonComms": {
                  
                }
              },
              "analytics": {
                "screenName": "explore",
                "context": "{\"tid\":\"667033fd-f6c3-a6c2-4c3c-2e24a0547493\",\"grid\":\"fb89fd69-3f92-43ab-83db-d6fc590d2787\",\"queryUniqueId\":\"dddaf861-9ba0-e0ca-7184-fadc826cfe3c\",\"query\":\"Chinese\"}",
                "objectValue": "752166",
                "impressionObjectName": "impression-restaurant",
                "clickObjectName": "click-restaurant"
              },
              "ctaWithParams": {
                "link": "swiggy://menu",
                "type": "DEEPLINK",
                "params": {
                  "isSld": "false",
                  "sourceRequestId": "00000000000000000000000000000000",
                  "qrEnabled": "false",
                  "restaurant_id": "752166",
                  "query": "Chinese",
                  "sourceSessionId": "s760c95c9a8-bbd2-493c-ba94-f978be8cd",
                  "source": "SEARCH"
                }
              }
            }
          }
        },
        {
          "card": {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                "id": "58428",
                "name": "Kaffee - Mast Hai",
                "city": "10",
                "slugs": {
                  "restaurant": "kaffee-mast-hai-chandkheda-ahmedabad-chandkheda",
                  "city": "ahmedabad"
                },
                "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2025/2/19/a89ad652-b35f-4208-b075-27862c1bc05b_5a3731c7-8aa5-42af-b831-9b6647e8a627.jpeg",
                "address": "Ground Floor, Shree Balaji Agora Mall, Chandkheda, Ahmedabad",
                "locality": "Chandkheda",
                "areaName": "Chandkheda",
                "costForTwo": "30000",
                "costForTwoMessage": "₹300 FOR TWO",
                "cuisines": [
                  "Beverages",
                  "Desserts",
                  "Pizzas",
                  "Snacks"
                ],
                "avgRating": 4,
                "feeDetails": {
                  
                },
                "parentId": "113463",
                "avgRatingString": "4.0",
                "totalRatingsString": "1.0K+",
                "sla": {
                  "deliveryTime": 30,
                  "minDeliveryTime": 30,
                  "maxDeliveryTime": 35,
                  "lastMileTravel": 2,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "RAIN_MODE_NONE",
                  "slaString": "30-35 MINS",
                  "lastMileTravelString": "2.0 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "opened": true,
                  "restaurantClosedMeta": {
                    
                  }
                },
                "badges": {
                  "imageBadges": [
                    {
                      "imageId": "v1695133679/badges/Pure_Veg111.png",
                      "description": "Serves only 100% vegetarian food, with no non-veg items."
                    }
                  ]
                },
                "aggregatedDiscountInfoV3": {
                  "header": "30% OFF",
                  "subHeader": "UPTO ₹75",
                  "logoCtx": {
                    "text": "BENEFITS"
                  }
                },
                "ratingSlab": "RATING_SLAB_4",
                "orderabilityCommunication": {
                  "title": {
                    
                  },
                  "subTitle": {
                    
                  },
                  "message": {
                    
                  },
                  "customIcon": {
                    
                  },
                  "commsStyling": {
                    
                  }
                },
                "cartOrderabilityNudgeBanner": {
                  "parameters": {
                    
                  },
                  "presentation": {
                    
                  }
                },
                "externalRatings": {
                  "aggregatedRating": {
                    "rating": "4.1",
                    "ratingCount": "2.1K+"
                  },
                  "source": "GOOGLE",
                  "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                "featuredSectionInfo": {
                  "sectionTitle": "More"
                },
                "showEoOffer": true,
                "priceComparisonComms": {
                  
                }
              },
              "analytics": {
                "screenName": "explore",
                "context": "{\"tid\":\"667033fd-f6c3-a6c2-4c3c-2e24a0547493\",\"grid\":\"fb89fd69-3f92-43ab-83db-d6fc590d2787\",\"queryUniqueId\":\"dddaf861-9ba0-e0ca-7184-fadc826cfe3c\",\"query\":\"Chinese\"}",
                "objectValue": "58428",
                "impressionObjectName": "impression-restaurant",
                "clickObjectName": "click-restaurant"
              },
              "ctaWithParams": {
                "link": "swiggy://menu",
                "type": "DEEPLINK",
                "params": {
                  "restaurant_id": "58428",
                  "query": "Chinese",
                  "sourceSessionId": "s760c95c9a8-bbd2-493c-ba94-f978be8cd",
                  "source": "SEARCH",
                  "isSld": "false",
                  "sourceRequestId": "00000000000000000000000000000000",
                  "qrEnabled": "false"
                }
              }
            }
          }
        },
        {
          "card": {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                "id": "1354787",
                "name": "Kahani Progressive Indian Restaurant",
                "city": "10",
                "slugs": {
                  "restaurant": "kahani-progressive-indian-restaurant-chandkheda-chandkheda",
                  "city": "ahmedabad"
                },
                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/3/25/d72ed3e3-a112-4cdb-aab4-06fda80484f1_1354787.jpg",
                "address": "201 to 209, THE LANDMARK By Aastha projects, Sneh Plaza Road, Harahan City, Chandkheda, Ahmedabad-382424 ,Ahmedabad Municipal Corporation,Ahmedabad,Gujarat-382424",
                "locality": "Chandkheda",
                "areaName": "Chandkheda",
                "costForTwo": "100000",
                "costForTwoMessage": "₹1000 FOR TWO",
                "cuisines": [
                  "Punjabi",
                  "Beverages",
                  "North Indian",
                  "Chinese"
                ],
                "veg": true,
                "feeDetails": {
                  
                },
                "parentId": "771347",
                "avgRatingString": "NEW",
                "sla": {
                  "deliveryTime": 36,
                  "minDeliveryTime": 35,
                  "maxDeliveryTime": 40,
                  "lastMileTravel": 7.6,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "RAIN_MODE_NONE",
                  "slaString": "35-40 MINS",
                  "lastMileTravelString": "7.6 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "opened": true,
                  "restaurantClosedMeta": {
                    
                  }
                },
                "badges": {
                  
                },
                "aggregatedDiscountInfoV3": {
                  "header": "20% OFF",
                  "subHeader": "ABOVE ₹700",
                  "discountTag": "FLAT DEAL",
                  "logoCtx": {
                    "text": "BENEFITS"
                  }
                },
                "orderabilityCommunication": {
                  "title": {
                    
                  },
                  "subTitle": {
                    
                  },
                  "message": {
                    
                  },
                  "customIcon": {
                    
                  },
                  "commsStyling": {
                    
                  }
                },
                "cartOrderabilityNudgeBanner": {
                  "parameters": {
                    
                  },
                  "presentation": {
                    
                  }
                },
                "externalRatings": {
                  "aggregatedRating": {
                    "rating": "--"
                  }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                "featuredSectionInfo": {
                  "sectionTitle": "More"
                },
                "showEoOffer": true,
                "priceComparisonComms": {
                  
                }
              },
              "analytics": {
                "screenName": "explore",
                "context": "{\"tid\":\"667033fd-f6c3-a6c2-4c3c-2e24a0547493\",\"grid\":\"fb89fd69-3f92-43ab-83db-d6fc590d2787\",\"queryUniqueId\":\"dddaf861-9ba0-e0ca-7184-fadc826cfe3c\",\"query\":\"Chinese\"}",
                "objectValue": "1354787",
                "impressionObjectName": "impression-restaurant",
                "clickObjectName": "click-restaurant"
              },
              "ctaWithParams": {
                "link": "swiggy://menu",
                "type": "DEEPLINK",
                "params": {
                  "query": "Chinese",
                  "sourceSessionId": "s760c95c9a8-bbd2-493c-ba94-f978be8cd",
                  "source": "SEARCH",
                  "isSld": "false",
                  "sourceRequestId": "00000000000000000000000000000000",
                  "qrEnabled": "false",
                  "restaurant_id": "1354787"
                }
              }
            }
          }
        },
        {
          "card": {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                "id": "816467",
                "name": "Bombay Gulalwadi Manekchok Wala",
                "city": "10",
                "slugs": {
                  "restaurant": "bombay-gulalwadi-manekchok-wala-bapunagar-bapunagar",
                  "city": "ahmedabad"
                },
                "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2025/9/26/08c23312-6dea-4775-8a86-26745c539c42_f84e925d-bec2-4fc6-83fc-4e8e154b57a1.jpeg",
                "address": "SAI HEVAN COMPLEX. SHOP NO. 14. HARI DARSHAN ROAD NEAR. D- MART. OPP. KHODAL FARM. AHMEDABAD 382350 ,Nikol(East Zone),Ahmedabad Municipal Corporation,Ahmedabad,Gujarat-382350",
                "locality": "OPP. KHODAL FARM",
                "areaName": "New India Colony",
                "costForTwo": "40000",
                "costForTwoMessage": "₹400 FOR TWO",
                "cuisines": [
                  "Chinese",
                  "South Indian",
                  "Snacks",
                  "Pizzas",
                  "Fast Food"
                ],
                "avgRating": 4.4,
                "veg": true,
                "feeDetails": {
                  
                },
                "parentId": "486456",
                "avgRatingString": "4.4",
                "totalRatingsString": "218",
                "sla": {
                  "deliveryTime": 53,
                  "minDeliveryTime": 50,
                  "maxDeliveryTime": 60,
                  "lastMileTravel": 10.1,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "RAIN_MODE_NONE",
                  "slaString": "50-60 MINS",
                  "lastMileTravelString": "10.1 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "opened": true,
                  "restaurantClosedMeta": {
                    
                  }
                },
                "badges": {
                  "imageBadges": [
                    {
                      "imageId": "v1695133679/badges/Pure_Veg111.png",
                      "description": "Serves only 100% vegetarian food, with no non-veg items."
                    }
                  ]
                },
                "sld": true,
                "aggregatedDiscountInfoV3": {
                  "header": "ITEMS",
                  "subHeader": "AT ₹40",
                  "logoCtx": {
                    "text": "BENEFITS"
                  }
                },
                "ratingSlab": "RATING_SLAB_5",
                "orderabilityCommunication": {
                  "title": {
                    
                  },
                  "subTitle": {
                    
                  },
                  "message": {
                    
                  },
                  "customIcon": {
                    
                  },
                  "commsStyling": {
                    
                  }
                },
                "cartOrderabilityNudgeBanner": {
                  "parameters": {
                    
                  },
                  "presentation": {
                    
                  }
                },
                "externalRatings": {
                  "aggregatedRating": {
                    "rating": "--"
                  }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                "featuredSectionInfo": {
                  "sectionTitle": "More"
                },
                "showEoOffer": true,
                "priceComparisonComms": {
                  
                }
              },
              "analytics": {
                "screenName": "explore",
                "context": "{\"tid\":\"667033fd-f6c3-a6c2-4c3c-2e24a0547493\",\"grid\":\"fb89fd69-3f92-43ab-83db-d6fc590d2787\",\"queryUniqueId\":\"dddaf861-9ba0-e0ca-7184-fadc826cfe3c\",\"query\":\"Chinese\"}",
                "objectValue": "816467",
                "impressionObjectName": "impression-restaurant-sld",
                "clickObjectName": "click-restaurant-sld"
              },
              "ctaWithParams": {
                "link": "swiggy://menu",
                "type": "DEEPLINK",
                "params": {
                  "query": "Chinese",
                  "sourceSessionId": "s760c95c9a8-bbd2-493c-ba94-f978be8cd",
                  "source": "SEARCH",
                  "isSld": "true",
                  "sourceRequestId": "00000000000000000000000000000000",
                  "qrEnabled": "false",
                  "restaurant_id": "816467"
                }
              }
            }
          }
        },
        {
          "card": {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                "id": "1247027",
                "name": "AND 51 Nadiad famous live puff",
                "city": "10",
                "slugs": {
                  "restaurant": "and-51-nadiad-famous-live-puff-gota-gota",
                  "city": "ahmedabad"
                },
                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/11/8/45fcbcbe-6d03-4d09-98df-0239e22c4ea6_1247027.jpg",
                "address": "Shop No : GF 04 , Floor : G , Vandematram fabula , Malabar County Rd Malabar County Rd, Chharodi Village, Ahmedabad, Gujarat 382481, India 382481",
                "locality": "Jagatpur",
                "areaName": "GOTA",
                "costForTwo": "15000",
                "costForTwoMessage": "₹150 FOR TWO",
                "cuisines": [
                  "Chinese",
                  "Bakery",
                  "Indian",
                  "Jain",
                  "Snacks",
                  "Fast Food"
                ],
                "avgRating": 4.4,
                "veg": true,
                "feeDetails": {
                  
                },
                "parentId": "710653",
                "avgRatingString": "4.4",
                "totalRatingsString": "9",
                "sla": {
                  "deliveryTime": 43,
                  "minDeliveryTime": 40,
                  "maxDeliveryTime": 45,
                  "lastMileTravel": 13.2,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "RAIN_MODE_NONE",
                  "slaString": "40-45 MINS",
                  "lastMileTravelString": "13.2 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "opened": true,
                  "restaurantClosedMeta": {
                    
                  }
                },
                "badges": {
                  
                },
                "aggregatedDiscountInfoV3": {
                  "header": "ITEMS",
                  "subHeader": "AT ₹109",
                  "logoCtx": {
                    "text": "BENEFITS"
                  }
                },
                "ratingSlab": "RATING_SLAB_5",
                "orderabilityCommunication": {
                  "title": {
                    
                  },
                  "subTitle": {
                    
                  },
                  "message": {
                    
                  },
                  "customIcon": {
                    
                  },
                  "commsStyling": {
                    
                  }
                },
                "cartOrderabilityNudgeBanner": {
                  "parameters": {
                    
                  },
                  "presentation": {
                    
                  }
                },
                "externalRatings": {
                  "aggregatedRating": {
                    "rating": "--"
                  }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                "featuredSectionInfo": {
                  "sectionTitle": "More"
                },
                "showEoOffer": true,
                "priceComparisonComms": {
                  
                }
              },
              "analytics": {
                "screenName": "explore",
                "context": "{\"tid\":\"667033fd-f6c3-a6c2-4c3c-2e24a0547493\",\"grid\":\"fb89fd69-3f92-43ab-83db-d6fc590d2787\",\"queryUniqueId\":\"dddaf861-9ba0-e0ca-7184-fadc826cfe3c\",\"query\":\"Chinese\"}",
                "objectValue": "1247027",
                "impressionObjectName": "impression-restaurant",
                "clickObjectName": "click-restaurant"
              },
              "ctaWithParams": {
                "link": "swiggy://menu",
                "type": "DEEPLINK",
                "params": {
                  "sourceSessionId": "s760c95c9a8-bbd2-493c-ba94-f978be8cd",
                  "source": "SEARCH",
                  "isSld": "false",
                  "sourceRequestId": "00000000000000000000000000000000",
                  "qrEnabled": "false",
                  "restaurant_id": "1247027",
                  "query": "Chinese"
                }
              }
            }
          }
        },
        {
          "card": {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                "id": "64140",
                "name": "One Ten Restaurant",
                "city": "10",
                "slugs": {
                  "restaurant": "one-ten-restaurant-chandkheda-chandkheda",
                  "city": "ahmedabad"
                },
                "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2025/3/13/bac99829-e6c5-4b03-b0d4-967a9a10e0e3_817f3087-4a99-4f22-a0a0-7dfe2afe5577.JPG",
                "address": "Highway Mall, Near Satyamave Hospital, Mehsana Highway, Chandkheda, Ahmedabad",
                "locality": "Odhav",
                "areaName": "Chandkheda",
                "costForTwo": "40000",
                "costForTwoMessage": "₹400 FOR TWO",
                "cuisines": [
                  "North Indian"
                ],
                "avgRating": 4.3,
                "veg": true,
                "feeDetails": {
                  
                },
                "parentId": "152280",
                "avgRatingString": "4.3",
                "totalRatingsString": "4.2K+",
                "sla": {
                  "deliveryTime": 34,
                  "minDeliveryTime": 30,
                  "maxDeliveryTime": 35,
                  "lastMileTravel": 6.6,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "RAIN_MODE_NONE",
                  "slaString": "30-35 MINS",
                  "lastMileTravelString": "6.6 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "opened": true,
                  "restaurantClosedMeta": {
                    
                  }
                },
                "badges": {
                  "imageBadges": [
                    {
                      "imageId": "v1695133679/badges/Pure_Veg111.png",
                      "description": "Serves only 100% vegetarian food, with no non-veg items."
                    }
                  ]
                },
                "aggregatedDiscountInfoV3": {
                  "header": "70% OFF",
                  "subHeader": "UPTO ₹140",
                  "logoCtx": {
                    "text": "BENEFITS"
                  }
                },
                "ratingSlab": "RATING_SLAB_5",
                "orderabilityCommunication": {
                  "title": {
                    
                  },
                  "subTitle": {
                    
                  },
                  "message": {
                    
                  },
                  "customIcon": {
                    
                  },
                  "commsStyling": {
                    
                  }
                },
                "cartOrderabilityNudgeBanner": {
                  "parameters": {
                    
                  },
                  "presentation": {
                    
                  }
                },
                "externalRatings": {
                  "aggregatedRating": {
                    "rating": "4.2",
                    "ratingCount": "1.9K+"
                  },
                  "source": "GOOGLE",
                  "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                "featuredSectionInfo": {
                  "sectionTitle": "More"
                },
                "showEoOffer": true,
                "priceComparisonComms": {
                  
                }
              },
              "analytics": {
                "screenName": "explore",
                "context": "{\"tid\":\"667033fd-f6c3-a6c2-4c3c-2e24a0547493\",\"grid\":\"fb89fd69-3f92-43ab-83db-d6fc590d2787\",\"queryUniqueId\":\"dddaf861-9ba0-e0ca-7184-fadc826cfe3c\",\"query\":\"Chinese\"}",
                "objectValue": "64140",
                "impressionObjectName": "impression-restaurant",
                "clickObjectName": "click-restaurant"
              },
              "ctaWithParams": {
                "link": "swiggy://menu",
                "type": "DEEPLINK",
                "params": {
                  "sourceSessionId": "s760c95c9a8-bbd2-493c-ba94-f978be8cd",
                  "source": "SEARCH",
                  "isSld": "false",
                  "sourceRequestId": "00000000000000000000000000000000",
                  "qrEnabled": "false",
                  "restaurant_id": "64140",
                  "query": "Chinese"
                }
              }
            }
          }
        },
        {
          "card": {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                "id": "472496",
                "name": "Bajarang Food Corner",
                "city": "10",
                "slugs": {
                  "restaurant": "bajarang-food-corner-ghatlodia-ghatlodia",
                  "city": "ahmedabad"
                },
                "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2026/2/18/7a29563e-e956-4863-adf5-f52b9f98a248_3dd1adba-ff65-499b-935f-a9a698f605a9.JPG",
                "address": "A-7/8, Pramukhnagar Complex, Opp Shayona City Complex, R.C. Technical Road, Chankyapuri, Ghatlodia, Ahmedabad -380061",
                "locality": "Opp Shayona City Complex",
                "areaName": "Ghatlodia",
                "costForTwo": "30000",
                "costForTwoMessage": "₹300 FOR TWO",
                "cuisines": [
                  "Chinese",
                  "Snacks"
                ],
                "avgRating": 4.6,
                "veg": true,
                "feeDetails": {
                  
                },
                "parentId": "284124",
                "avgRatingString": "4.6",
                "totalRatingsString": "46",
                "sla": {
                  "deliveryTime": 52,
                  "minDeliveryTime": 50,
                  "maxDeliveryTime": 60,
                  "lastMileTravel": 13.9,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "RAIN_MODE_NONE",
                  "slaString": "50-60 MINS",
                  "lastMileTravelString": "13.9 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "opened": true,
                  "restaurantClosedMeta": {
                    
                  }
                },
                "aggregatedDiscountInfo": {
                  "visible": true
                },
                "badges": {
                  "imageBadges": [
                    {
                      "imageId": "v1695133679/badges/Pure_Veg111.png",
                      "description": "Serves only 100% vegetarian food, with no non-veg items."
                    }
                  ]
                },
                "aggregatedDiscountInfoV2": {
                  "visible": true
                },
                "ratingSlab": "RATING_SLAB_5",
                "orderabilityCommunication": {
                  "title": {
                    
                  },
                  "subTitle": {
                    
                  },
                  "message": {
                    
                  },
                  "customIcon": {
                    
                  },
                  "commsStyling": {
                    
                  }
                },
                "cartOrderabilityNudgeBanner": {
                  "parameters": {
                    
                  },
                  "presentation": {
                    
                  }
                },
                "externalRatings": {
                  "aggregatedRating": {
                    "rating": "--"
                  }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                "featuredSectionInfo": {
                  "sectionTitle": "More"
                },
                "showEoOffer": true,
                "priceComparisonComms": {
                  
                }
              },
              "analytics": {
                "screenName": "explore",
                "context": "{\"tid\":\"667033fd-f6c3-a6c2-4c3c-2e24a0547493\",\"grid\":\"fb89fd69-3f92-43ab-83db-d6fc590d2787\",\"queryUniqueId\":\"dddaf861-9ba0-e0ca-7184-fadc826cfe3c\",\"query\":\"Chinese\"}",
                "objectValue": "472496",
                "impressionObjectName": "impression-restaurant",
                "clickObjectName": "click-restaurant"
              },
              "ctaWithParams": {
                "link": "swiggy://menu",
                "type": "DEEPLINK",
                "params": {
                  "restaurant_id": "472496",
                  "query": "Chinese",
                  "sourceSessionId": "s760c95c9a8-bbd2-493c-ba94-f978be8cd",
                  "source": "SEARCH",
                  "isSld": "false",
                  "sourceRequestId": "00000000000000000000000000000000",
                  "qrEnabled": "false"
                }
              }
            }
          }
        },
        {
          "card": {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                "id": "1324790",
                "name": "Cakes 'N' Bakes",
                "city": "10",
                "slugs": {
                  "restaurant": "cakes-'n'-bakes-chandkheda-chandkheda",
                  "city": "ahmedabad"
                },
                "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2025/12/9/42233386-c650-4087-8f14-94afc5003620_a2a2d3a8-bf4e-4638-b02d-c44e7ca2d03d.jpg",
                "address": "AASTHA THE LANDMARK, SHOP -7, SNEH PLAZA ROAD, HIRADHAN CITY, CHANDKHEDA, Chandkheramotera(West Zone), Ahmedabad Municipal Corporation, Ahmedabad, Gujarat",
                "locality": "Chandkheda",
                "areaName": "Chandkheda",
                "costForTwo": "10000",
                "costForTwoMessage": "₹100 FOR TWO",
                "cuisines": [
                  "Desserts",
                  "Snacks",
                  "Ice Cream Cakes",
                  "Bakery",
                  "Sweets"
                ],
                "avgRating": 2.3,
                "veg": true,
                "feeDetails": {
                  
                },
                "parentId": "493468",
                "avgRatingString": "2.3",
                "totalRatingsString": "12",
                "sla": {
                  "deliveryTime": 33,
                  "minDeliveryTime": 30,
                  "maxDeliveryTime": 35,
                  "lastMileTravel": 7.7,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "RAIN_MODE_NONE",
                  "slaString": "30-35 MINS",
                  "lastMileTravelString": "7.7 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "opened": true,
                  "restaurantClosedMeta": {
                    
                  }
                },
                "badges": {
                  
                },
                "aggregatedDiscountInfoV3": {
                  "header": "ITEMS",
                  "subHeader": "AT ₹299",
                  "logoCtx": {
                    "text": "BENEFITS"
                  }
                },
                "ratingSlab": "RATING_SLAB_3",
                "orderabilityCommunication": {
                  "title": {
                    
                  },
                  "subTitle": {
                    
                  },
                  "message": {
                    
                  },
                  "customIcon": {
                    
                  },
                  "commsStyling": {
                    
                  }
                },
                "cartOrderabilityNudgeBanner": {
                  "parameters": {
                    
                  },
                  "presentation": {
                    
                  }
                },
                "externalRatings": {
                  "aggregatedRating": {
                    "rating": "1.0",
                    "ratingCount": "4"
                  },
                  "source": "GOOGLE",
                  "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                "featuredSectionInfo": {
                  "sectionTitle": "More"
                },
                "showEoOffer": true,
                "priceComparisonComms": {
                  
                }
              },
              "analytics": {
                "screenName": "explore",
                "context": "{\"tid\":\"667033fd-f6c3-a6c2-4c3c-2e24a0547493\",\"grid\":\"fb89fd69-3f92-43ab-83db-d6fc590d2787\",\"queryUniqueId\":\"dddaf861-9ba0-e0ca-7184-fadc826cfe3c\",\"query\":\"Chinese\"}",
                "objectValue": "1324790",
                "impressionObjectName": "impression-restaurant",
                "clickObjectName": "click-restaurant"
              },
              "ctaWithParams": {
                "link": "swiggy://menu",
                "type": "DEEPLINK",
                "params": {
                  "restaurant_id": "1324790",
                  "query": "Chinese",
                  "sourceSessionId": "s760c95c9a8-bbd2-493c-ba94-f978be8cd",
                  "source": "SEARCH",
                  "isSld": "false",
                  "sourceRequestId": "00000000000000000000000000000000",
                  "qrEnabled": "false"
                }
              }
            }
          }
        },
        {
          "card": {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                "id": "485089",
                "name": "Chingaaree",
                "city": "10",
                "slugs": {
                  "restaurant": "chingaaree-chandkheda-chandkheda-3",
                  "city": "ahmedabad"
                },
                "cloudinaryImageId": "2616ead1c7dbdafe1143eef98ad5d9e7",
                "address": "33 KARNAWATI ROW HOUSE, GUJARAT HOUSING BOARD, CHANDKHEDA AHMADABAD-382424",
                "locality": "Gujarat Housing Board",
                "areaName": "Chandkheda",
                "costForTwo": "30000",
                "costForTwoMessage": "₹300 FOR TWO",
                "cuisines": [
                  "Indian",
                  "Chinese",
                  "Thalis",
                  "Barbecue"
                ],
                "avgRating": 4.3,
                "feeDetails": {
                  
                },
                "parentId": "62005",
                "avgRatingString": "4.3",
                "totalRatingsString": "864",
                "sla": {
                  "deliveryTime": 32,
                  "minDeliveryTime": 30,
                  "maxDeliveryTime": 35,
                  "lastMileTravel": 5.7,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "RAIN_MODE_NONE",
                  "slaString": "30-35 MINS",
                  "lastMileTravelString": "5.7 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "opened": true,
                  "restaurantClosedMeta": {
                    
                  }
                },
                "badges": {
                  
                },
                "aggregatedDiscountInfoV3": {
                  "header": "ITEMS",
                  "subHeader": "AT ₹19",
                  "logoCtx": {
                    "text": "BENEFITS"
                  }
                },
                "ratingSlab": "RATING_SLAB_5",
                "orderabilityCommunication": {
                  "title": {
                    
                  },
                  "subTitle": {
                    
                  },
                  "message": {
                    
                  },
                  "customIcon": {
                    
                  },
                  "commsStyling": {
                    
                  }
                },
                "cartOrderabilityNudgeBanner": {
                  "parameters": {
                    
                  },
                  "presentation": {
                    
                  }
                },
                "externalRatings": {
                  "aggregatedRating": {
                    "rating": "--"
                  }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                "featuredSectionInfo": {
                  "sectionTitle": "More"
                },
                "showEoOffer": true,
                "priceComparisonComms": {
                  
                }
              },
              "analytics": {
                "screenName": "explore",
                "context": "{\"tid\":\"667033fd-f6c3-a6c2-4c3c-2e24a0547493\",\"grid\":\"fb89fd69-3f92-43ab-83db-d6fc590d2787\",\"queryUniqueId\":\"dddaf861-9ba0-e0ca-7184-fadc826cfe3c\",\"query\":\"Chinese\"}",
                "objectValue": "485089",
                "impressionObjectName": "impression-restaurant",
                "clickObjectName": "click-restaurant"
              },
              "ctaWithParams": {
                "link": "swiggy://menu",
                "type": "DEEPLINK",
                "params": {
                  "restaurant_id": "485089",
                  "query": "Chinese",
                  "sourceSessionId": "s760c95c9a8-bbd2-493c-ba94-f978be8cd",
                  "source": "SEARCH",
                  "isSld": "false",
                  "sourceRequestId": "00000000000000000000000000000000",
                  "qrEnabled": "false"
                }
              }
            }
          }
        },
        {
          "card": {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                "id": "460232",
                "name": "Ad Momos And Chinese Foods",
                "city": "10",
                "slugs": {
                  "restaurant": "ad-momos-and-chinese-foods-gota-gota",
                  "city": "ahmedabad"
                },
                "cloudinaryImageId": "gapglfw8bp628wvd5ryu",
                "address": "RAIN FOREST RESTAURANT, Sarkhej - Gandhinagar Hwy, opp. MANAN AUTOLINK, Gota, Ahmedabad, Gujarat 382481, India",
                "locality": "Opp. Manan Autolink",
                "areaName": "GOTA",
                "costForTwo": "15000",
                "costForTwoMessage": "₹150 FOR TWO",
                "cuisines": [
                  "Chinese",
                  "Pizzas"
                ],
                "avgRating": 5,
                "veg": true,
                "feeDetails": {
                  
                },
                "parentId": "276441",
                "avgRatingString": "5.0",
                "totalRatingsString": "<3",
                "sla": {
                  "deliveryTime": 49,
                  "minDeliveryTime": 45,
                  "maxDeliveryTime": 50,
                  "lastMileTravel": 12.4,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "RAIN_MODE_NONE",
                  "slaString": "45-50 MINS",
                  "lastMileTravelString": "12.4 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "opened": true,
                  "restaurantClosedMeta": {
                    
                  }
                },
                "badges": {
                  "imageBadges": [
                    {
                      "imageId": "v1695133679/badges/Pure_Veg111.png",
                      "description": "Serves only 100% vegetarian food, with no non-veg items."
                    }
                  ]
                },
                "aggregatedDiscountInfoV3": {
                  "header": "ITEMS",
                  "subHeader": "AT ₹89",
                  "logoCtx": {
                    "text": "BENEFITS"
                  }
                },
                "ratingSlab": "RATING_SLAB_5",
                "orderabilityCommunication": {
                  "title": {
                    
                  },
                  "subTitle": {
                    
                  },
                  "message": {
                    
                  },
                  "customIcon": {
                    
                  },
                  "commsStyling": {
                    
                  }
                },
                "cartOrderabilityNudgeBanner": {
                  "parameters": {
                    
                  },
                  "presentation": {
                    
                  }
                },
                "externalRatings": {
                  "aggregatedRating": {
                    "rating": "--"
                  }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                "featuredSectionInfo": {
                  "sectionTitle": "More"
                },
                "showEoOffer": true,
                "priceComparisonComms": {
                  
                }
              },
              "analytics": {
                "screenName": "explore",
                "context": "{\"tid\":\"667033fd-f6c3-a6c2-4c3c-2e24a0547493\",\"grid\":\"fb89fd69-3f92-43ab-83db-d6fc590d2787\",\"queryUniqueId\":\"dddaf861-9ba0-e0ca-7184-fadc826cfe3c\",\"query\":\"Chinese\"}",
                "objectValue": "460232",
                "impressionObjectName": "impression-restaurant",
                "clickObjectName": "click-restaurant"
              },
              "ctaWithParams": {
                "link": "swiggy://menu",
                "type": "DEEPLINK",
                "params": {
                  "restaurant_id": "460232",
                  "query": "Chinese",
                  "sourceSessionId": "s760c95c9a8-bbd2-493c-ba94-f978be8cd",
                  "source": "SEARCH",
                  "isSld": "false",
                  "sourceRequestId": "00000000000000000000000000000000",
                  "qrEnabled": "false"
                }
              }
            }
          }
        },
        {
          "card": {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                "id": "940618",
                "name": "Dine And Spoon",
                "city": "10",
                "slugs": {
                  "restaurant": "dine-and-spoon-chandkheda-chandkheda",
                  "city": "ahmedabad"
                },
                "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2025/10/6/4fcb23e1-24bf-421b-9885-befb21c36664_cea04957-bace-408e-9c95-9d21428ff576.jpeg",
                "address": "Shop No : PLOT , Floor : GF , BETWEEN TAPOVAN TO BHAT , ",
                "locality": "Chandkheda",
                "areaName": "Chandkheda",
                "costForTwo": "70000",
                "costForTwoMessage": "₹700 FOR TWO",
                "cuisines": [
                  "Chinese",
                  "Continental",
                  "Punjabi",
                  "Italian",
                  "Mexican",
                  "Thai",
                  "Beverages",
                  "Gujarati"
                ],
                "avgRating": 4,
                "veg": true,
                "feeDetails": {
                  
                },
                "parentId": "553433",
                "avgRatingString": "4.0",
                "totalRatingsString": "88",
                "sla": {
                  "deliveryTime": 30,
                  "minDeliveryTime": 25,
                  "maxDeliveryTime": 30,
                  "lastMileTravel": 2.6,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "RAIN_MODE_NONE",
                  "slaString": "25-30 MINS",
                  "lastMileTravelString": "2.6 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "opened": true,
                  "restaurantClosedMeta": {
                    
                  }
                },
                "badges": {
                  
                },
                "aggregatedDiscountInfoV3": {
                  "header": "₹200 OFF",
                  "subHeader": "ABOVE ₹749",
                  "discountTag": "FLAT DEAL",
                  "logoCtx": {
                    "text": "BENEFITS"
                  }
                },
                "ratingSlab": "RATING_SLAB_4",
                "orderabilityCommunication": {
                  "title": {
                    
                  },
                  "subTitle": {
                    
                  },
                  "message": {
                    
                  },
                  "customIcon": {
                    
                  },
                  "commsStyling": {
                    
                  }
                },
                "cartOrderabilityNudgeBanner": {
                  "parameters": {
                    
                  },
                  "presentation": {
                    
                  }
                },
                "externalRatings": {
                  "aggregatedRating": {
                    "rating": "--"
                  }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                "featuredSectionInfo": {
                  "sectionTitle": "More"
                },
                "showEoOffer": true,
                "priceComparisonComms": {
                  
                }
              },
              "analytics": {
                "screenName": "explore",
                "context": "{\"tid\":\"667033fd-f6c3-a6c2-4c3c-2e24a0547493\",\"grid\":\"fb89fd69-3f92-43ab-83db-d6fc590d2787\",\"queryUniqueId\":\"dddaf861-9ba0-e0ca-7184-fadc826cfe3c\",\"query\":\"Chinese\"}",
                "objectValue": "940618",
                "impressionObjectName": "impression-restaurant",
                "clickObjectName": "click-restaurant"
              },
              "ctaWithParams": {
                "link": "swiggy://menu",
                "type": "DEEPLINK",
                "params": {
                  "source": "SEARCH",
                  "isSld": "false",
                  "sourceRequestId": "00000000000000000000000000000000",
                  "qrEnabled": "false",
                  "restaurant_id": "940618",
                  "query": "Chinese",
                  "sourceSessionId": "s760c95c9a8-bbd2-493c-ba94-f978be8cd"
                }
              }
            }
          }
        },
        {
          "card": {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                "id": "109476",
                "name": "Shree Saurashtra Sweets & Namkeen",
                "city": "10",
                "slugs": {
                  "restaurant": "saurashtra-chawana-sweets-gota-gota",
                  "city": "ahmedabad"
                },
                "cloudinaryImageId": "htfjesceamniu1hrxfjb",
                "address": "1/2, Dev Residency, Opposite Shukan Gold, Near Vandemataram City, Gota, Ahmedabad",
                "locality": "Opposite Shukan Gold, Near Vandemataram City",
                "areaName": "GOTA",
                "costForTwo": "25000",
                "costForTwoMessage": "₹250 FOR TWO",
                "cuisines": [
                  "Street Food"
                ],
                "avgRating": 4.5,
                "feeDetails": {
                  
                },
                "parentId": "449381",
                "avgRatingString": "4.5",
                "totalRatingsString": "3.7K+",
                "sla": {
                  "deliveryTime": 35,
                  "minDeliveryTime": 35,
                  "maxDeliveryTime": 45,
                  "lastMileTravel": 10.4,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "RAIN_MODE_NONE",
                  "slaString": "35-45 MINS",
                  "lastMileTravelString": "10.4 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "opened": true,
                  "restaurantClosedMeta": {
                    
                  }
                },
                "badges": {
                  "imageBadges": [
                    {
                      "imageId": "v1695133679/badges/Pure_Veg111.png",
                      "description": "Serves only 100% vegetarian food, with no non-veg items."
                    }
                  ]
                },
                "aggregatedDiscountInfoV3": {
                  "header": "₹500 OFF",
                  "subHeader": "ABOVE ₹999",
                  "discountTag": "FLAT DEAL",
                  "logoCtx": {
                    "text": "BENEFITS"
                  }
                },
                "ratingSlab": "RATING_SLAB_5",
                "orderabilityCommunication": {
                  "title": {
                    
                  },
                  "subTitle": {
                    
                  },
                  "message": {
                    
                  },
                  "customIcon": {
                    
                  },
                  "commsStyling": {
                    
                  }
                },
                "cartOrderabilityNudgeBanner": {
                  "parameters": {
                    
                  },
                  "presentation": {
                    
                  }
                },
                "externalRatings": {
                  "aggregatedRating": {
                    "rating": "--"
                  }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                "featuredSectionInfo": {
                  "sectionTitle": "More"
                },
                "showEoOffer": true,
                "priceComparisonComms": {
                  
                }
              },
              "analytics": {
                "screenName": "explore",
                "context": "{\"tid\":\"667033fd-f6c3-a6c2-4c3c-2e24a0547493\",\"grid\":\"fb89fd69-3f92-43ab-83db-d6fc590d2787\",\"queryUniqueId\":\"dddaf861-9ba0-e0ca-7184-fadc826cfe3c\",\"query\":\"Chinese\"}",
                "objectValue": "109476",
                "impressionObjectName": "impression-restaurant",
                "clickObjectName": "click-restaurant"
              },
              "ctaWithParams": {
                "link": "swiggy://menu",
                "type": "DEEPLINK",
                "params": {
                  "sourceSessionId": "s760c95c9a8-bbd2-493c-ba94-f978be8cd",
                  "source": "SEARCH",
                  "isSld": "false",
                  "sourceRequestId": "00000000000000000000000000000000",
                  "qrEnabled": "false",
                  "restaurant_id": "109476",
                  "query": "Chinese"
                }
              }
            }
          }
        },
        {
          "card": {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                "id": "1310312",
                "name": "Wokk N Soul",
                "city": "10",
                "slugs": {
                  "restaurant": "wokk-n-soul-gandhinagar-gandhinagar",
                  "city": "ahmedabad"
                },
                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/1/15/8f691255-926f-4b75-9b31-e13bb8e1e552_1310312.jpg",
                "address": "Shop No : shop no 10 , Floor : ground , suyash solitaire , Suyash Solitaire, Kudasan-Por Road, nr. Poddar International School, Kudasan, Gandhinagar, Gujarat, India",
                "locality": "Gandhinagar",
                "areaName": "Gandhinagar",
                "costForTwo": "30000",
                "costForTwoMessage": "₹300 FOR TWO",
                "cuisines": [
                  "Chinese",
                  "Italian"
                ],
                "avgRating": 4.1,
                "veg": true,
                "feeDetails": {
                  
                },
                "parentId": "746190",
                "avgRatingString": "4.1",
                "totalRatingsString": "11",
                "sla": {
                  "deliveryTime": 38,
                  "minDeliveryTime": 35,
                  "maxDeliveryTime": 40,
                  "lastMileTravel": 8.4,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "RAIN_MODE_NONE",
                  "slaString": "35-40 MINS",
                  "lastMileTravelString": "8.4 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "opened": true,
                  "restaurantClosedMeta": {
                    
                  }
                },
                "aggregatedDiscountInfo": {
                  "visible": true
                },
                "badges": {
                  
                },
                "aggregatedDiscountInfoV2": {
                  "visible": true
                },
                "ratingSlab": "RATING_SLAB_5",
                "orderabilityCommunication": {
                  "title": {
                    
                  },
                  "subTitle": {
                    
                  },
                  "message": {
                    
                  },
                  "customIcon": {
                    
                  },
                  "commsStyling": {
                    
                  }
                },
                "cartOrderabilityNudgeBanner": {
                  "parameters": {
                    
                  },
                  "presentation": {
                    
                  }
                },
                "externalRatings": {
                  "aggregatedRating": {
                    "rating": "--"
                  }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                "featuredSectionInfo": {
                  "sectionTitle": "More"
                },
                "showEoOffer": true,
                "priceComparisonComms": {
                  
                }
              },
              "analytics": {
                "screenName": "explore",
                "context": "{\"tid\":\"667033fd-f6c3-a6c2-4c3c-2e24a0547493\",\"grid\":\"fb89fd69-3f92-43ab-83db-d6fc590d2787\",\"queryUniqueId\":\"dddaf861-9ba0-e0ca-7184-fadc826cfe3c\",\"query\":\"Chinese\"}",
                "objectValue": "1310312",
                "impressionObjectName": "impression-restaurant",
                "clickObjectName": "click-restaurant"
              },
              "ctaWithParams": {
                "link": "swiggy://menu",
                "type": "DEEPLINK",
                "params": {
                  "qrEnabled": "false",
                  "restaurant_id": "1310312",
                  "query": "Chinese",
                  "sourceSessionId": "s760c95c9a8-bbd2-493c-ba94-f978be8cd",
                  "source": "SEARCH",
                  "isSld": "false",
                  "sourceRequestId": "00000000000000000000000000000000"
                }
              }
            }
          }
        },
        {
          "card": {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                "id": "902292",
                "name": "Zingy zest biryani and sizzler",
                "city": "10",
                "slugs": {
                  "restaurant": "zingy-zest-biryani-and-sizzler-chandkheda-chandkheda",
                  "city": "ahmedabad"
                },
                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/31/c7f72d28-cf17-41e3-b46c-7d134dd216f9_902292.jpg",
                "address": "Shop No : Zingy zest , Floor : Ground , Zingy zest,urban chowk , Tapovan Circle, GIDC Bhat, Bhat, Ahmedabad, Gujarat, India",
                "locality": "Tapovan Circle",
                "areaName": "Chandkheda",
                "costForTwo": "25000",
                "costForTwoMessage": "₹250 FOR TWO",
                "cuisines": [
                  "Chinese",
                  "Biryani",
                  "Pastas",
                  "Barbecue"
                ],
                "veg": true,
                "feeDetails": {
                  
                },
                "parentId": "524483",
                "avgRatingString": "--",
                "sla": {
                  "deliveryTime": 30,
                  "minDeliveryTime": 30,
                  "maxDeliveryTime": 35,
                  "lastMileTravel": 3,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "RAIN_MODE_NONE",
                  "slaString": "30-35 MINS",
                  "lastMileTravelString": "3.0 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "opened": true,
                  "restaurantClosedMeta": {
                    
                  }
                },
                "badges": {
                  
                },
                "aggregatedDiscountInfoV3": {
                  "header": "60% OFF",
                  "subHeader": "UPTO ₹120",
                  "logoCtx": {
                    "text": "BENEFITS"
                  }
                },
                "orderabilityCommunication": {
                  "title": {
                    
                  },
                  "subTitle": {
                    
                  },
                  "message": {
                    
                  },
                  "customIcon": {
                    
                  },
                  "commsStyling": {
                    
                  }
                },
                "cartOrderabilityNudgeBanner": {
                  "parameters": {
                    
                  },
                  "presentation": {
                    
                  }
                },
                "externalRatings": {
                  "aggregatedRating": {
                    "rating": "--"
                  }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                "featuredSectionInfo": {
                  "sectionTitle": "More"
                },
                "showEoOffer": true,
                "priceComparisonComms": {
                  
                }
              },
              "analytics": {
                "screenName": "explore",
                "context": "{\"tid\":\"667033fd-f6c3-a6c2-4c3c-2e24a0547493\",\"grid\":\"fb89fd69-3f92-43ab-83db-d6fc590d2787\",\"queryUniqueId\":\"dddaf861-9ba0-e0ca-7184-fadc826cfe3c\",\"query\":\"Chinese\"}",
                "objectValue": "902292",
                "impressionObjectName": "impression-restaurant",
                "clickObjectName": "click-restaurant"
              },
              "ctaWithParams": {
                "link": "swiggy://menu",
                "type": "DEEPLINK",
                "params": {
                  "query": "Chinese",
                  "sourceSessionId": "s760c95c9a8-bbd2-493c-ba94-f978be8cd",
                  "source": "SEARCH",
                  "isSld": "false",
                  "sourceRequestId": "00000000000000000000000000000000",
                  "qrEnabled": "false",
                  "restaurant_id": "902292"
                }
              }
            }
          }
        },
        {
          "card": {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                "id": "1342007",
                "name": "Jay Sawariya Chinese And Pavbhaji",
                "city": "10",
                "slugs": {
                  "restaurant": "jay-sawariya-chinese-&-pavbhaji-naroda-naroda",
                  "city": "ahmedabad"
                },
                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/3/2/de698cb3-1b40-4897-8401-ddd301bd3a30_1342007.jpg",
                "address": "2, Amarnath Estate, Part 3, Dahegam Road, Nava Naroda ,Naroda-Road(North Zone),Ahmedabad Municipal Corporation,Ahmedabad,Gujarat-382330",
                "locality": "Naroda",
                "areaName": "Naroda",
                "costForTwo": "10000",
                "costForTwoMessage": "₹100 FOR TWO",
                "cuisines": [
                  "Chinese",
                  "Snacks",
                  "Fast Food",
                  "Indian"
                ],
                "veg": true,
                "feeDetails": {
                  
                },
                "parentId": "763641",
                "avgRatingString": "NEW",
                "sla": {
                  "deliveryTime": 46,
                  "minDeliveryTime": 45,
                  "maxDeliveryTime": 50,
                  "lastMileTravel": 8.5,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "RAIN_MODE_NONE",
                  "slaString": "45-50 MINS",
                  "lastMileTravelString": "8.5 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "opened": true,
                  "restaurantClosedMeta": {
                    
                  }
                },
                "badges": {
                  
                },
                "aggregatedDiscountInfoV3": {
                  "header": "ITEMS",
                  "subHeader": "AT ₹99",
                  "logoCtx": {
                    "text": "BENEFITS"
                  }
                },
                "orderabilityCommunication": {
                  "title": {
                    
                  },
                  "subTitle": {
                    
                  },
                  "message": {
                    
                  },
                  "customIcon": {
                    
                  },
                  "commsStyling": {
                    
                  }
                },
                "cartOrderabilityNudgeBanner": {
                  "parameters": {
                    
                  },
                  "presentation": {
                    
                  }
                },
                "externalRatings": {
                  "aggregatedRating": {
                    "rating": "--"
                  }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                "featuredSectionInfo": {
                  "sectionTitle": "More"
                },
                "showEoOffer": true,
                "priceComparisonComms": {
                  
                }
              },
              "analytics": {
                "screenName": "explore",
                "context": "{\"tid\":\"667033fd-f6c3-a6c2-4c3c-2e24a0547493\",\"grid\":\"fb89fd69-3f92-43ab-83db-d6fc590d2787\",\"queryUniqueId\":\"dddaf861-9ba0-e0ca-7184-fadc826cfe3c\",\"query\":\"Chinese\"}",
                "objectValue": "1342007",
                "impressionObjectName": "impression-restaurant",
                "clickObjectName": "click-restaurant"
              },
              "ctaWithParams": {
                "link": "swiggy://menu",
                "type": "DEEPLINK",
                "params": {
                  "sourceRequestId": "00000000000000000000000000000000",
                  "qrEnabled": "false",
                  "restaurant_id": "1342007",
                  "query": "Chinese",
                  "sourceSessionId": "s760c95c9a8-bbd2-493c-ba94-f978be8cd",
                  "source": "SEARCH",
                  "isSld": "false"
                }
              }
            }
          }
        },
        {
          "card": {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                "id": "243441",
                "name": "Nini's Kitchen",
                "city": "10",
                "slugs": {
                  "restaurant": "nini's-kitchen-chandkheda-chandkheda",
                  "city": "ahmedabad"
                },
                "cloudinaryImageId": "12c934e1ea0ce105f51e96552451e03a",
                "address": "3, Amrakunj Avis, Near Tapovan Circle Visat - Gandhinagar Highway, Chandkheda, Ahmedabad, Gujarat 382424",
                "locality": "Chandkheda",
                "areaName": "Chandkheda",
                "costForTwo": "70000",
                "costForTwoMessage": "₹700 FOR TWO",
                "cuisines": [
                  "North Indian",
                  "Lebanese",
                  "Continental",
                  "Pizzas",
                  "Pastas",
                  "Biryani",
                  "Mexican",
                  "Desserts",
                  "Beverages",
                  "American"
                ],
                "avgRating": 4.6,
                "feeDetails": {
                  
                },
                "parentId": "11105",
                "avgRatingString": "4.6",
                "totalRatingsString": "2.4K+",
                "sla": {
                  "deliveryTime": 32,
                  "minDeliveryTime": 30,
                  "maxDeliveryTime": 35,
                  "lastMileTravel": 3.5,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "RAIN_MODE_NONE",
                  "slaString": "30-35 MINS",
                  "lastMileTravelString": "3.5 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "opened": true,
                  "restaurantClosedMeta": {
                    
                  }
                },
                "badges": {
                  "imageBadges": [
                    {
                      "imageId": "brand_cards/Badges%202026/53_Best%20in%20Gourmet2026.png",
                      "description": "Top-rated for Gourmet, based on user votes."
                    },
                    {
                      "imageId": "newg.png",
                      "description": "Premium gourmet restaurant offering an elevated, high-quality food experience."
                    },
                    {
                      "imageId": "v1695133679/badges/Pure_Veg111.png",
                      "description": "Serves only 100% vegetarian food, with no non-veg items."
                    }
                  ]
                },
                "aggregatedDiscountInfoV3": {
                  "header": "ITEMS",
                  "subHeader": "AT ₹120",
                  "logoCtx": {
                    "text": "BENEFITS"
                  }
                },
                "ratingSlab": "RATING_SLAB_5",
                "orderabilityCommunication": {
                  "title": {
                    
                  },
                  "subTitle": {
                    
                  },
                  "message": {
                    
                  },
                  "customIcon": {
                    
                  },
                  "commsStyling": {
                    
                  }
                },
                "cartOrderabilityNudgeBanner": {
                  "parameters": {
                    
                  },
                  "presentation": {
                    
                  }
                },
                "externalRatings": {
                  "aggregatedRating": {
                    "rating": "4.3",
                    "ratingCount": "2.4K+"
                  },
                  "source": "GOOGLE",
                  "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                "featuredSectionInfo": {
                  "sectionTitle": "More"
                },
                "showEoOffer": true,
                "priceComparisonComms": {
                  
                }
              },
              "analytics": {
                "screenName": "explore",
                "context": "{\"tid\":\"667033fd-f6c3-a6c2-4c3c-2e24a0547493\",\"grid\":\"fb89fd69-3f92-43ab-83db-d6fc590d2787\",\"queryUniqueId\":\"dddaf861-9ba0-e0ca-7184-fadc826cfe3c\",\"query\":\"Chinese\"}",
                "objectValue": "243441",
                "impressionObjectName": "impression-restaurant",
                "clickObjectName": "click-restaurant"
              },
              "ctaWithParams": {
                "link": "swiggy://menu",
                "type": "DEEPLINK",
                "params": {
                  "query": "Chinese",
                  "sourceSessionId": "s760c95c9a8-bbd2-493c-ba94-f978be8cd",
                  "source": "SEARCH",
                  "isSld": "false",
                  "sourceRequestId": "00000000000000000000000000000000",
                  "qrEnabled": "false",
                  "restaurant_id": "243441"
                }
              }
            }
          }
        },
        {
          "card": {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                "id": "1051288",
                "name": "Raje Shahi Chinese",
                "city": "10",
                "slugs": {
                  "restaurant": "raje-shahi-chinese-naroda-naroda",
                  "city": "ahmedabad"
                },
                "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2025/1/3/6b3373ad-0078-4db3-93a3-270f7f462d99_c6165f2b-1aac-49d3-8272-321a9e3b902f.jpg_compressed",
                "address": "KK SOCIETY BUNGLOW ARIA KUBERNAGAR ,Kubernagar(North Zone),Ahmedabad Municipal Corporation,Ahmedabad,Gujarat-382340\t",
                "locality": "KUBERNAGAR ",
                "areaName": "Naroda",
                "costForTwo": "30000",
                "costForTwoMessage": "₹300 FOR TWO",
                "cuisines": [
                  "Chinese"
                ],
                "avgRating": 4.4,
                "veg": true,
                "feeDetails": {
                  
                },
                "parentId": "611233",
                "avgRatingString": "4.4",
                "totalRatingsString": "28",
                "sla": {
                  "deliveryTime": 43,
                  "minDeliveryTime": 40,
                  "maxDeliveryTime": 45,
                  "lastMileTravel": 7.9,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "RAIN_MODE_NONE",
                  "slaString": "40-45 MINS",
                  "lastMileTravelString": "7.9 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "opened": true,
                  "restaurantClosedMeta": {
                    
                  }
                },
                "aggregatedDiscountInfo": {
                  "visible": true
                },
                "badges": {
                  
                },
                "aggregatedDiscountInfoV2": {
                  "visible": true
                },
                "ratingSlab": "RATING_SLAB_5",
                "orderabilityCommunication": {
                  "title": {
                    
                  },
                  "subTitle": {
                    
                  },
                  "message": {
                    
                  },
                  "customIcon": {
                    
                  },
                  "commsStyling": {
                    
                  }
                },
                "cartOrderabilityNudgeBanner": {
                  "parameters": {
                    
                  },
                  "presentation": {
                    
                  }
                },
                "externalRatings": {
                  "aggregatedRating": {
                    "rating": "--"
                  }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                "featuredSectionInfo": {
                  "sectionTitle": "More"
                },
                "showEoOffer": true,
                "priceComparisonComms": {
                  
                }
              },
              "analytics": {
                "screenName": "explore",
                "context": "{\"tid\":\"667033fd-f6c3-a6c2-4c3c-2e24a0547493\",\"grid\":\"fb89fd69-3f92-43ab-83db-d6fc590d2787\",\"queryUniqueId\":\"dddaf861-9ba0-e0ca-7184-fadc826cfe3c\",\"query\":\"Chinese\"}",
                "objectValue": "1051288",
                "impressionObjectName": "impression-restaurant",
                "clickObjectName": "click-restaurant"
              },
              "ctaWithParams": {
                "link": "swiggy://menu",
                "type": "DEEPLINK",
                "params": {
                  "restaurant_id": "1051288",
                  "query": "Chinese",
                  "sourceSessionId": "s760c95c9a8-bbd2-493c-ba94-f978be8cd",
                  "source": "SEARCH",
                  "isSld": "false",
                  "sourceRequestId": "00000000000000000000000000000000",
                  "qrEnabled": "false"
                }
              }
            }
          }
        },
        {
          "card": {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                "id": "225541",
                "name": "Rajasthan Bhavna-The Restaurant",
                "city": "10",
                "slugs": {
                  "restaurant": "rajasthan-bhavna-the-restaurant-gota-gota",
                  "city": "ahmedabad"
                },
                "cloudinaryImageId": "wlrzy9dqdjy8t3wa1eqm",
                "address": "Opp.Savya Sky,Nr.CBD Mall,Zundal To Vaishnodevi Road,Zundal ,Zundal ,Gandhinagar Municipal Corporation,Gandhinagar,Gujarat-382421",
                "locality": "Gandhinagar",
                "areaName": "Chandkheda",
                "costForTwo": "30000",
                "costForTwoMessage": "₹300 FOR TWO",
                "cuisines": [
                  "Chinese"
                ],
                "avgRating": 3.9,
                "veg": true,
                "feeDetails": {
                  
                },
                "parentId": "165309",
                "avgRatingString": "3.9",
                "totalRatingsString": "2.8K+",
                "sla": {
                  "deliveryTime": 46,
                  "minDeliveryTime": 45,
                  "maxDeliveryTime": 55,
                  "lastMileTravel": 7.6,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "RAIN_MODE_NONE",
                  "slaString": "45-55 MINS",
                  "lastMileTravelString": "7.6 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "opened": true,
                  "restaurantClosedMeta": {
                    
                  }
                },
                "badges": {
                  "imageBadges": [
                    {
                      "imageId": "v1695133679/badges/Pure_Veg111.png",
                      "description": "Serves only 100% vegetarian food, with no non-veg items."
                    }
                  ]
                },
                "aggregatedDiscountInfoV3": {
                  "header": "70% OFF",
                  "subHeader": "UPTO ₹140",
                  "logoCtx": {
                    "text": "BENEFITS"
                  }
                },
                "ratingSlab": "RATING_SLAB_4",
                "orderabilityCommunication": {
                  "title": {
                    
                  },
                  "subTitle": {
                    
                  },
                  "message": {
                    
                  },
                  "customIcon": {
                    
                  },
                  "commsStyling": {
                    
                  }
                },
                "cartOrderabilityNudgeBanner": {
                  "parameters": {
                    
                  },
                  "presentation": {
                    
                  }
                },
                "externalRatings": {
                  "aggregatedRating": {
                    "rating": "4.0",
                    "ratingCount": "485"
                  },
                  "source": "GOOGLE",
                  "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                "featuredSectionInfo": {
                  "sectionTitle": "More"
                },
                "showEoOffer": true,
                "priceComparisonComms": {
                  
                }
              },
              "analytics": {
                "screenName": "explore",
                "context": "{\"tid\":\"667033fd-f6c3-a6c2-4c3c-2e24a0547493\",\"grid\":\"fb89fd69-3f92-43ab-83db-d6fc590d2787\",\"queryUniqueId\":\"dddaf861-9ba0-e0ca-7184-fadc826cfe3c\",\"query\":\"Chinese\"}",
                "objectValue": "225541",
                "impressionObjectName": "impression-restaurant",
                "clickObjectName": "click-restaurant"
              },
              "ctaWithParams": {
                "link": "swiggy://menu",
                "type": "DEEPLINK",
                "params": {
                  "sourceSessionId": "s760c95c9a8-bbd2-493c-ba94-f978be8cd",
                  "source": "SEARCH",
                  "isSld": "false",
                  "sourceRequestId": "00000000000000000000000000000000",
                  "qrEnabled": "false",
                  "restaurant_id": "225541",
                  "query": "Chinese"
                }
              }
            }
          }
        },
        {
          "card": {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                "id": "1268415",
                "name": "Banke Bihari Bhojanalya",
                "city": "10",
                "slugs": {
                  "restaurant": "banke-bihari-bhojanalya-gota-gota",
                  "city": "ahmedabad"
                },
                "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2026/1/23/dffe851e-f48b-4cbf-8c6b-5a20ae102c08_bf3b3e42-538e-4417-b377-b9ae667e7633.JPG",
                "address": "SHOP NO.GF-5, SATYAA HEIGHT, NR. APPLO SCHOOL, TRAGAD ROAD, NR H3 SCHOOL, NEW CHANDKHEDA ,Chandkheramotera(West Zone),Ahmedabad Municipal Corporation,Ahmedabad,Gujarat-382424\t",
                "locality": "GOTA",
                "areaName": "GOTA",
                "costForTwo": "50000",
                "costForTwoMessage": "₹500 FOR TWO",
                "cuisines": [
                  "Punjabi",
                  "Gujarati",
                  "Street Food"
                ],
                "avgRating": 3.9,
                "veg": true,
                "feeDetails": {
                  
                },
                "parentId": "722081",
                "avgRatingString": "3.9",
                "totalRatingsString": "27",
                "sla": {
                  "deliveryTime": 36,
                  "minDeliveryTime": 35,
                  "maxDeliveryTime": 40,
                  "lastMileTravel": 8.6,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "RAIN_MODE_NONE",
                  "slaString": "35-40 MINS",
                  "lastMileTravelString": "8.6 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "opened": true,
                  "restaurantClosedMeta": {
                    
                  }
                },
                "badges": {
                  
                },
                "aggregatedDiscountInfoV3": {
                  "header": "ITEMS",
                  "subHeader": "AT ₹99",
                  "logoCtx": {
                    "text": "BENEFITS"
                  }
                },
                "ratingSlab": "RATING_SLAB_4",
                "orderabilityCommunication": {
                  "title": {
                    
                  },
                  "subTitle": {
                    
                  },
                  "message": {
                    
                  },
                  "customIcon": {
                    
                  },
                  "commsStyling": {
                    
                  }
                },
                "cartOrderabilityNudgeBanner": {
                  "parameters": {
                    
                  },
                  "presentation": {
                    
                  }
                },
                "externalRatings": {
                  "aggregatedRating": {
                    "rating": "--"
                  }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                "featuredSectionInfo": {
                  "sectionTitle": "More"
                },
                "showEoOffer": true,
                "priceComparisonComms": {
                  
                }
              },
              "analytics": {
                "screenName": "explore",
                "context": "{\"tid\":\"667033fd-f6c3-a6c2-4c3c-2e24a0547493\",\"grid\":\"fb89fd69-3f92-43ab-83db-d6fc590d2787\",\"queryUniqueId\":\"dddaf861-9ba0-e0ca-7184-fadc826cfe3c\",\"query\":\"Chinese\"}",
                "objectValue": "1268415",
                "impressionObjectName": "impression-restaurant",
                "clickObjectName": "click-restaurant"
              },
              "ctaWithParams": {
                "link": "swiggy://menu",
                "type": "DEEPLINK",
                "params": {
                  "sourceSessionId": "s760c95c9a8-bbd2-493c-ba94-f978be8cd",
                  "source": "SEARCH",
                  "isSld": "false",
                  "sourceRequestId": "00000000000000000000000000000000",
                  "qrEnabled": "false",
                  "restaurant_id": "1268415",
                  "query": "Chinese"
                }
              }
            }
          }
        },
        {
          "card": {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                "id": "1265661",
                "name": "Bombay Chinese Food",
                "city": "10",
                "slugs": {
                  "restaurant": "bombay-chinese-food-chandkheda-chandkheda-2",
                  "city": "ahmedabad"
                },
                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/11/18/b39a18d1-2fe0-4b4a-b07e-0ddcb42f47f8_1265661.jpg",
                "address": "Shop no.9,Chandkheda Gam road, Near Ashok Vihar Circle,Ambedkar Nagar, Chandkheda ,Chandkheramotera(West Zone),Ahmedabad Municipal Corporation,Ahmedabad,Gujarat-382424\t",
                "locality": "Chandkheda",
                "areaName": "Chandkheda",
                "costForTwo": "40000",
                "costForTwoMessage": "₹400 FOR TWO",
                "cuisines": [
                  "Chinese"
                ],
                "veg": true,
                "feeDetails": {
                  
                },
                "parentId": "297700",
                "avgRatingString": "--",
                "sla": {
                  "deliveryTime": 33,
                  "minDeliveryTime": 30,
                  "maxDeliveryTime": 35,
                  "lastMileTravel": 4.5,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "RAIN_MODE_NONE",
                  "slaString": "30-35 MINS",
                  "lastMileTravelString": "4.5 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "opened": true,
                  "restaurantClosedMeta": {
                    
                  }
                },
                "badges": {
                  
                },
                "aggregatedDiscountInfoV3": {
                  "header": "₹150 OFF",
                  "subHeader": "ABOVE ₹799",
                  "discountTag": "FLAT DEAL",
                  "logoCtx": {
                    "text": "BENEFITS"
                  }
                },
                "orderabilityCommunication": {
                  "title": {
                    
                  },
                  "subTitle": {
                    
                  },
                  "message": {
                    
                  },
                  "customIcon": {
                    
                  },
                  "commsStyling": {
                    
                  }
                },
                "cartOrderabilityNudgeBanner": {
                  "parameters": {
                    
                  },
                  "presentation": {
                    
                  }
                },
                "externalRatings": {
                  "aggregatedRating": {
                    "rating": "--"
                  }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                "featuredSectionInfo": {
                  "sectionTitle": "More"
                },
                "showEoOffer": true,
                "priceComparisonComms": {
                  
                }
              },
              "analytics": {
                "screenName": "explore",
                "context": "{\"tid\":\"667033fd-f6c3-a6c2-4c3c-2e24a0547493\",\"grid\":\"fb89fd69-3f92-43ab-83db-d6fc590d2787\",\"queryUniqueId\":\"dddaf861-9ba0-e0ca-7184-fadc826cfe3c\",\"query\":\"Chinese\"}",
                "objectValue": "1265661",
                "impressionObjectName": "impression-restaurant",
                "clickObjectName": "click-restaurant"
              },
              "ctaWithParams": {
                "link": "swiggy://menu",
                "type": "DEEPLINK",
                "params": {
                  "restaurant_id": "1265661",
                  "query": "Chinese",
                  "sourceSessionId": "s760c95c9a8-bbd2-493c-ba94-f978be8cd",
                  "source": "SEARCH",
                  "isSld": "false",
                  "sourceRequestId": "00000000000000000000000000000000",
                  "qrEnabled": "false"
                }
              }
            }
          }
        },
        {
          "card": {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                "id": "1335862",
                "name": "Dilip Chinese Food",
                "city": "10",
                "slugs": {
                  "restaurant": "dilip-chinese-food-gandhinagar-gandhinagar",
                  "city": "ahmedabad"
                },
                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/2/20/e6407d32-8738-4004-9b23-14dfa6033b01_1335862.jpg",
                "address": "Dilip Chinese food , Pramukh Tangent , Sargasan cross road , Gandhinagar , Gujarat , 382419 ,Sargasan ,Gandhinagar Municipal Corporation,Gandhinagar,Gujarat-382419",
                "locality": "Gandhinagar",
                "areaName": "Gandhinagar",
                "costForTwo": "30000",
                "costForTwoMessage": "₹300 FOR TWO",
                "cuisines": [
                  "Chinese",
                  "Pan-Asian",
                  "Rolls & Wraps"
                ],
                "avgRating": 3.1,
                "veg": true,
                "feeDetails": {
                  
                },
                "parentId": "760022",
                "avgRatingString": "3.1",
                "totalRatingsString": "3",
                "sla": {
                  "deliveryTime": 47,
                  "minDeliveryTime": 45,
                  "maxDeliveryTime": 50,
                  "lastMileTravel": 12.1,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "RAIN_MODE_NONE",
                  "slaString": "45-50 MINS",
                  "lastMileTravelString": "12.1 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "nextCloseMessage": "Closes soon",
                  "opened": true,
                  "restaurantClosedMeta": {
                    
                  }
                },
                "aggregatedDiscountInfo": {
                  "visible": true
                },
                "badges": {
                  
                },
                "aggregatedDiscountInfoV2": {
                  "visible": true
                },
                "ratingSlab": "RATING_SLAB_4",
                "orderabilityCommunication": {
                  "title": {
                    
                  },
                  "subTitle": {
                    
                  },
                  "message": {
                    
                  },
                  "customIcon": {
                    
                  },
                  "commsStyling": {
                    
                  }
                },
                "cartOrderabilityNudgeBanner": {
                  "parameters": {
                    
                  },
                  "presentation": {
                    
                  }
                },
                "externalRatings": {
                  "aggregatedRating": {
                    "rating": "--"
                  }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                "featuredSectionInfo": {
                  "sectionTitle": "More"
                },
                "showEoOffer": true,
                "priceComparisonComms": {
                  
                }
              },
              "analytics": {
                "screenName": "explore",
                "context": "{\"tid\":\"667033fd-f6c3-a6c2-4c3c-2e24a0547493\",\"grid\":\"fb89fd69-3f92-43ab-83db-d6fc590d2787\",\"queryUniqueId\":\"dddaf861-9ba0-e0ca-7184-fadc826cfe3c\",\"query\":\"Chinese\"}",
                "objectValue": "1335862",
                "impressionObjectName": "impression-restaurant",
                "clickObjectName": "click-restaurant"
              },
              "ctaWithParams": {
                "link": "swiggy://menu",
                "type": "DEEPLINK",
                "params": {
                  "source": "SEARCH",
                  "isSld": "false",
                  "sourceRequestId": "00000000000000000000000000000000",
                  "qrEnabled": "false",
                  "restaurant_id": "1335862",
                  "query": "Chinese",
                  "sourceSessionId": "s760c95c9a8-bbd2-493c-ba94-f978be8cd"
                }
              }
            }
          }
        },
        {
          "card": {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                "id": "1326758",
                "name": "Sato Ramen",
                "city": "10",
                "slugs": {
                  "restaurant": "sato-ramen-naroda-naroda",
                  "city": "ahmedabad"
                },
                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/2/9/d2cb6585-7a89-4cbf-96ae-a975dd78ea7e_1326758.jpg",
                "address": "18, SHIVAM Arcade, Hanspura, New Narooda ,Naroda(North Zone),Ahmedabad Municipal Corporation,Ahmedabad,Gujarat-382330",
                "locality": "Naroda",
                "areaName": "Naroda",
                "costForTwo": "40000",
                "costForTwoMessage": "₹400 FOR TWO",
                "cuisines": [
                  "Japanese",
                  "Korean",
                  "Chinese"
                ],
                "avgRating": 4,
                "veg": true,
                "feeDetails": {
                  
                },
                "parentId": "755137",
                "avgRatingString": "4.0",
                "totalRatingsString": "12",
                "sla": {
                  "deliveryTime": 52,
                  "minDeliveryTime": 50,
                  "maxDeliveryTime": 60,
                  "lastMileTravel": 9.3,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "RAIN_MODE_NONE",
                  "slaString": "50-60 MINS",
                  "lastMileTravelString": "9.3 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "opened": true,
                  "restaurantClosedMeta": {
                    
                  }
                },
                "aggregatedDiscountInfo": {
                  "visible": true
                },
                "badges": {
                  
                },
                "aggregatedDiscountInfoV2": {
                  "visible": true
                },
                "ratingSlab": "RATING_SLAB_4",
                "orderabilityCommunication": {
                  "title": {
                    
                  },
                  "subTitle": {
                    
                  },
                  "message": {
                    
                  },
                  "customIcon": {
                    
                  },
                  "commsStyling": {
                    
                  }
                },
                "cartOrderabilityNudgeBanner": {
                  "parameters": {
                    
                  },
                  "presentation": {
                    
                  }
                },
                "externalRatings": {
                  "aggregatedRating": {
                    "rating": "--"
                  }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                "featuredSectionInfo": {
                  "sectionTitle": "More"
                },
                "showEoOffer": true,
                "priceComparisonComms": {
                  
                }
              },
              "analytics": {
                "screenName": "explore",
                "context": "{\"tid\":\"667033fd-f6c3-a6c2-4c3c-2e24a0547493\",\"grid\":\"fb89fd69-3f92-43ab-83db-d6fc590d2787\",\"queryUniqueId\":\"dddaf861-9ba0-e0ca-7184-fadc826cfe3c\",\"query\":\"Chinese\"}",
                "objectValue": "1326758",
                "impressionObjectName": "impression-restaurant",
                "clickObjectName": "click-restaurant"
              },
              "ctaWithParams": {
                "link": "swiggy://menu",
                "type": "DEEPLINK",
                "params": {
                  "isSld": "false",
                  "sourceRequestId": "00000000000000000000000000000000",
                  "qrEnabled": "false",
                  "restaurant_id": "1326758",
                  "query": "Chinese",
                  "sourceSessionId": "s760c95c9a8-bbd2-493c-ba94-f978be8cd",
                  "source": "SEARCH"
                }
              }
            }
          }
        },
        {
          "card": {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                "id": "1037014",
                "name": "Taste Of the Town chinese",
                "city": "10",
                "slugs": {
                  "restaurant": "taste-of-the-town-chinese-gota-gota",
                  "city": "ahmedabad"
                },
                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/30/b9ca969d-45c0-4432-b747-9b2753b01e32_1037014.JPG",
                "address": "SHUKAN GLORY ROAD, NR. UNIQUE ASHIYANA GOTA ,Gota(New West Zone),Ahmedabad Municipal Corporation,Ahmedabad,Gujarat-382481\t",
                "locality": "GOTA",
                "areaName": "GOTA",
                "costForTwo": "40000",
                "costForTwoMessage": "₹400 FOR TWO",
                "cuisines": [
                  "Chinese"
                ],
                "avgRating": 4.2,
                "veg": true,
                "feeDetails": {
                  
                },
                "parentId": "603579",
                "avgRatingString": "4.2",
                "totalRatingsString": "61",
                "sla": {
                  "deliveryTime": 58,
                  "minDeliveryTime": 55,
                  "maxDeliveryTime": 65,
                  "lastMileTravel": 11.7,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "RAIN_MODE_NONE",
                  "slaString": "55-65 MINS",
                  "lastMileTravelString": "11.7 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "opened": true,
                  "restaurantClosedMeta": {
                    
                  }
                },
                "aggregatedDiscountInfo": {
                  "visible": true
                },
                "badges": {
                  
                },
                "aggregatedDiscountInfoV2": {
                  "visible": true
                },
                "ratingSlab": "RATING_SLAB_5",
                "orderabilityCommunication": {
                  "title": {
                    
                  },
                  "subTitle": {
                    
                  },
                  "message": {
                    
                  },
                  "customIcon": {
                    
                  },
                  "commsStyling": {
                    
                  }
                },
                "cartOrderabilityNudgeBanner": {
                  "parameters": {
                    
                  },
                  "presentation": {
                    
                  }
                },
                "externalRatings": {
                  "aggregatedRating": {
                    "rating": "--"
                  }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                "featuredSectionInfo": {
                  "sectionTitle": "More"
                },
                "showEoOffer": true,
                "priceComparisonComms": {
                  
                }
              },
              "analytics": {
                "screenName": "explore",
                "context": "{\"tid\":\"667033fd-f6c3-a6c2-4c3c-2e24a0547493\",\"grid\":\"fb89fd69-3f92-43ab-83db-d6fc590d2787\",\"queryUniqueId\":\"dddaf861-9ba0-e0ca-7184-fadc826cfe3c\",\"query\":\"Chinese\"}",
                "objectValue": "1037014",
                "impressionObjectName": "impression-restaurant",
                "clickObjectName": "click-restaurant"
              },
              "ctaWithParams": {
                "link": "swiggy://menu",
                "type": "DEEPLINK",
                "params": {
                  "qrEnabled": "false",
                  "restaurant_id": "1037014",
                  "query": "Chinese",
                  "sourceSessionId": "s760c95c9a8-bbd2-493c-ba94-f978be8cd",
                  "source": "SEARCH",
                  "isSld": "false",
                  "sourceRequestId": "00000000000000000000000000000000"
                }
              }
            }
          }
        },
        {
          "card": {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                "id": "1097329",
                "name": "Kolkata Dum Biryani",
                "city": "10",
                "slugs": {
                  "restaurant": "kolkata-dum-biryani-chandkheda-chandkheda-2",
                  "city": "ahmedabad"
                },
                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/5/16/4141292b-9b1d-4d34-a1aa-4a7c5010a6cb_1097329.jpg",
                "address": "F.3 SANKALP ARCADE OPP OSIA HIPER MART NR. HP PETROL PUMP MOTERA . AHMEDABAD ,Chandkheramotera(West Zone),Ahmedabad Municipal Corporation,Ahmedabad,Gujarat-380005\t",
                "locality": "Chandkheda",
                "areaName": "Chandkheda",
                "costForTwo": "30000",
                "costForTwoMessage": "₹300 FOR TWO",
                "cuisines": [
                  "Biryani"
                ],
                "avgRating": 4.1,
                "feeDetails": {
                  
                },
                "parentId": "248977",
                "avgRatingString": "4.1",
                "totalRatingsString": "50",
                "sla": {
                  "deliveryTime": 27,
                  "minDeliveryTime": 25,
                  "maxDeliveryTime": 30,
                  "lastMileTravel": 3,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "RAIN_MODE_NONE",
                  "slaString": "25-30 MINS",
                  "lastMileTravelString": "3.0 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "opened": true,
                  "restaurantClosedMeta": {
                    
                  }
                },
                "badges": {
                  
                },
                "aggregatedDiscountInfoV3": {
                  "header": "70% OFF",
                  "subHeader": "UPTO ₹140",
                  "logoCtx": {
                    "text": "BENEFITS"
                  }
                },
                "ratingSlab": "RATING_SLAB_5",
                "orderabilityCommunication": {
                  "title": {
                    
                  },
                  "subTitle": {
                    
                  },
                  "message": {
                    
                  },
                  "customIcon": {
                    
                  },
                  "commsStyling": {
                    
                  }
                },
                "cartOrderabilityNudgeBanner": {
                  "parameters": {
                    
                  },
                  "presentation": {
                    
                  }
                },
                "externalRatings": {
                  "aggregatedRating": {
                    "rating": "--"
                  }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                "featuredSectionInfo": {
                  "sectionTitle": "More"
                },
                "showEoOffer": true,
                "priceComparisonComms": {
                  
                }
              },
              "analytics": {
                "screenName": "explore",
                "context": "{\"tid\":\"667033fd-f6c3-a6c2-4c3c-2e24a0547493\",\"grid\":\"fb89fd69-3f92-43ab-83db-d6fc590d2787\",\"queryUniqueId\":\"dddaf861-9ba0-e0ca-7184-fadc826cfe3c\",\"query\":\"Chinese\"}",
                "objectValue": "1097329",
                "impressionObjectName": "impression-restaurant",
                "clickObjectName": "click-restaurant"
              },
              "ctaWithParams": {
                "link": "swiggy://menu",
                "type": "DEEPLINK",
                "params": {
                  "isSld": "false",
                  "sourceRequestId": "00000000000000000000000000000000",
                  "qrEnabled": "false",
                  "restaurant_id": "1097329",
                  "query": "Chinese",
                  "sourceSessionId": "s760c95c9a8-bbd2-493c-ba94-f978be8cd",
                  "source": "SEARCH"
                }
              }
            }
          }
        },
        {
          "card": {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                "id": "805604",
                "name": "Classic Shahi Biryani",
                "city": "10",
                "slugs": {
                  "restaurant": "classic-shahi-biryani-bapunagar-bapunagar",
                  "city": "ahmedabad"
                },
                "cloudinaryImageId": "e71b1767692a052a5ab12c930c2d37f3",
                "address": "BLOCK NO.22 SHOP NO.2 GOVERMENT A COLONY,NR DARIYAKHAB GHUMMAT,SHAHIBAUG,DUDHESHWAR,AHMEDABADD-380004",
                "locality": "Bedia Link Road",
                "areaName": "Bapunagar",
                "costForTwo": "20000",
                "costForTwoMessage": "₹200 FOR TWO",
                "cuisines": [
                  "Biryani",
                  "Chinese",
                  "Pizzas"
                ],
                "avgRating": 3.8,
                "feeDetails": {
                  
                },
                "parentId": "480722",
                "avgRatingString": "3.8",
                "totalRatingsString": "178",
                "sla": {
                  "deliveryTime": 57,
                  "minDeliveryTime": 55,
                  "maxDeliveryTime": 65,
                  "lastMileTravel": 8.9,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "RAIN_MODE_NONE",
                  "slaString": "55-65 MINS",
                  "lastMileTravelString": "8.9 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "opened": true,
                  "restaurantClosedMeta": {
                    
                  }
                },
                "badges": {
                  
                },
                "aggregatedDiscountInfoV3": {
                  "header": "70% OFF",
                  "subHeader": "UPTO ₹140",
                  "logoCtx": {
                    "text": "BENEFITS"
                  }
                },
                "ratingSlab": "RATING_SLAB_4",
                "orderabilityCommunication": {
                  "title": {
                    
                  },
                  "subTitle": {
                    
                  },
                  "message": {
                    
                  },
                  "customIcon": {
                    
                  },
                  "commsStyling": {
                    
                  }
                },
                "cartOrderabilityNudgeBanner": {
                  "parameters": {
                    
                  },
                  "presentation": {
                    
                  }
                },
                "externalRatings": {
                  "aggregatedRating": {
                    "rating": "--"
                  }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                "featuredSectionInfo": {
                  "sectionTitle": "More"
                },
                "showEoOffer": true,
                "priceComparisonComms": {
                  
                }
              },
              "analytics": {
                "screenName": "explore",
                "context": "{\"tid\":\"667033fd-f6c3-a6c2-4c3c-2e24a0547493\",\"grid\":\"fb89fd69-3f92-43ab-83db-d6fc590d2787\",\"queryUniqueId\":\"dddaf861-9ba0-e0ca-7184-fadc826cfe3c\",\"query\":\"Chinese\"}",
                "objectValue": "805604",
                "impressionObjectName": "impression-restaurant",
                "clickObjectName": "click-restaurant"
              },
              "ctaWithParams": {
                "link": "swiggy://menu",
                "type": "DEEPLINK",
                "params": {
                  "query": "Chinese",
                  "sourceSessionId": "s760c95c9a8-bbd2-493c-ba94-f978be8cd",
                  "source": "SEARCH",
                  "isSld": "false",
                  "sourceRequestId": "00000000000000000000000000000000",
                  "qrEnabled": "false",
                  "restaurant_id": "805604"
                }
              }
            }
          }
        },
        {
          "card": {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                "id": "1237167",
                "name": "Gwalia Sweets And Restaurant Kudasan",
                "city": "10",
                "slugs": {
                  "restaurant": "gwalia-sweets-&-fast-food-gandhinagar-gandhinagar-2",
                  "city": "ahmedabad"
                },
                "cloudinaryImageId": "8b6919d0ee7a1e15fce332e8192b7faa",
                "address": "Shop No : UNIT NO-04, , Floor : GF, , PRAMUKH ANAND MALL, KUDASAN, GANDHINAGAR, , ",
                "locality": "Gandhinagar",
                "areaName": "Gandhinagar",
                "costForTwo": "30000",
                "costForTwoMessage": "₹300 FOR TWO",
                "cuisines": [
                  "Desserts",
                  "Pan-Asian",
                  "Chaat",
                  "Thalis",
                  "Indian",
                  "Sweets",
                  "North Indian"
                ],
                "avgRating": 4.2,
                "veg": true,
                "feeDetails": {
                  
                },
                "parentId": "92339",
                "avgRatingString": "4.2",
                "totalRatingsString": "105",
                "sla": {
                  "deliveryTime": 38,
                  "minDeliveryTime": 35,
                  "maxDeliveryTime": 40,
                  "lastMileTravel": 10.1,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "RAIN_MODE_NONE",
                  "slaString": "35-40 MINS",
                  "lastMileTravelString": "10.1 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "opened": true,
                  "restaurantClosedMeta": {
                    
                  }
                },
                "badges": {
                  
                },
                "aggregatedDiscountInfoV3": {
                  "header": "₹75 OFF",
                  "discountTag": "FLAT DEAL",
                  "logoCtx": {
                    "text": "BENEFITS"
                  }
                },
                "ratingSlab": "RATING_SLAB_5",
                "orderabilityCommunication": {
                  "title": {
                    
                  },
                  "subTitle": {
                    
                  },
                  "message": {
                    
                  },
                  "customIcon": {
                    
                  },
                  "commsStyling": {
                    
                  }
                },
                "cartOrderabilityNudgeBanner": {
                  "parameters": {
                    
                  },
                  "presentation": {
                    
                  }
                },
                "externalRatings": {
                  "aggregatedRating": {
                    "rating": "4.0",
                    "ratingCount": "53"
                  },
                  "source": "GOOGLE",
                  "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                "featuredSectionInfo": {
                  "sectionTitle": "More"
                },
                "showEoOffer": true,
                "priceComparisonComms": {
                  
                }
              },
              "analytics": {
                "screenName": "explore",
                "context": "{\"tid\":\"667033fd-f6c3-a6c2-4c3c-2e24a0547493\",\"grid\":\"fb89fd69-3f92-43ab-83db-d6fc590d2787\",\"queryUniqueId\":\"dddaf861-9ba0-e0ca-7184-fadc826cfe3c\",\"query\":\"Chinese\"}",
                "objectValue": "1237167",
                "impressionObjectName": "impression-restaurant",
                "clickObjectName": "click-restaurant"
              },
              "ctaWithParams": {
                "link": "swiggy://menu",
                "type": "DEEPLINK",
                "params": {
                  "query": "Chinese",
                  "sourceSessionId": "s760c95c9a8-bbd2-493c-ba94-f978be8cd",
                  "source": "SEARCH",
                  "isSld": "false",
                  "sourceRequestId": "00000000000000000000000000000000",
                  "qrEnabled": "false",
                  "restaurant_id": "1237167"
                }
              }
            }
          }
        },
        {
          "card": {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                "id": "580911",
                "name": "Joy Restaurant",
                "city": "10",
                "slugs": {
                  "restaurant": "joy-restaurant-bapunagar-bapunagar",
                  "city": "ahmedabad"
                },
                "cloudinaryImageId": "5e94013bd39d9ec62a1bbdfeda7bb3c4",
                "address": "GF/ 8 to 10, Shayona Arcade opp Dinesh Champers Bapunagar, Ahmedabad,Gujarat-380024",
                "locality": "Shayona Arcade",
                "areaName": "Bapunagar",
                "costForTwo": "50000",
                "costForTwoMessage": "₹500 FOR TWO",
                "cuisines": [
                  "North Indian",
                  "Chinese",
                  "Fast Food",
                  "Indian",
                  "Pizzas"
                ],
                "avgRating": 4.4,
                "veg": true,
                "feeDetails": {
                  
                },
                "parentId": "111601",
                "avgRatingString": "4.4",
                "totalRatingsString": "1.2K+",
                "sla": {
                  "deliveryTime": 53,
                  "minDeliveryTime": 50,
                  "maxDeliveryTime": 60,
                  "lastMileTravel": 11.6,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "RAIN_MODE_NONE",
                  "slaString": "50-60 MINS",
                  "lastMileTravelString": "11.6 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "opened": true,
                  "restaurantClosedMeta": {
                    
                  }
                },
                "badges": {
                  "imageBadges": [
                    {
                      "imageId": "v1695133679/badges/Pure_Veg111.png",
                      "description": "Serves only 100% vegetarian food, with no non-veg items."
                    }
                  ]
                },
                "sld": true,
                "aggregatedDiscountInfoV3": {
                  "header": "75% OFF",
                  "subHeader": "UPTO ₹160",
                  "discountTag": "SAVE BIG",
                  "logoCtx": {
                    "text": "BENEFITS"
                  }
                },
                "ratingSlab": "RATING_SLAB_5",
                "orderabilityCommunication": {
                  "title": {
                    
                  },
                  "subTitle": {
                    
                  },
                  "message": {
                    
                  },
                  "customIcon": {
                    
                  },
                  "commsStyling": {
                    
                  }
                },
                "cartOrderabilityNudgeBanner": {
                  "parameters": {
                    
                  },
                  "presentation": {
                    
                  }
                },
                "externalRatings": {
                  "aggregatedRating": {
                    "rating": "--"
                  }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                "featuredSectionInfo": {
                  "sectionTitle": "More"
                },
                "showEoOffer": true,
                "priceComparisonComms": {
                  
                }
              },
              "analytics": {
                "screenName": "explore",
                "context": "{\"tid\":\"667033fd-f6c3-a6c2-4c3c-2e24a0547493\",\"grid\":\"fb89fd69-3f92-43ab-83db-d6fc590d2787\",\"queryUniqueId\":\"dddaf861-9ba0-e0ca-7184-fadc826cfe3c\",\"query\":\"Chinese\"}",
                "objectValue": "580911",
                "impressionObjectName": "impression-restaurant-sld",
                "clickObjectName": "click-restaurant-sld"
              },
              "ctaWithParams": {
                "link": "swiggy://menu",
                "type": "DEEPLINK",
                "params": {
                  "isSld": "true",
                  "sourceRequestId": "00000000000000000000000000000000",
                  "qrEnabled": "false",
                  "restaurant_id": "580911",
                  "query": "Chinese",
                  "sourceSessionId": "s760c95c9a8-bbd2-493c-ba94-f978be8cd",
                  "source": "SEARCH"
                }
              }
            }
          }
        },
        {
          "card": {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                "id": "1371294",
                "name": "Instant Bites",
                "city": "10",
                "slugs": {
                  "restaurant": "instant-bites-chandkheda-chandkheda-2",
                  "city": "ahmedabad"
                },
                "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2026/6/8/84b3e068-956d-4314-9d48-76ed9e8a7361_5cdbb7dd-824c-466e-ab28-29fc10a6ea5a.jpg",
                "address": "Shop No : F/15 , Floor : 1st Floor , Shyamal Complex , New CG Road Nigam Nagar, Chandkheda, Ahmedabad, Gujarat 382424, India 382424",
                "locality": "Chandkheda",
                "areaName": "Chandkheda",
                "costForTwo": "12000",
                "costForTwoMessage": "₹120 FOR TWO",
                "cuisines": [
                  "Street Food",
                  "Fast Food",
                  "Rolls & Wraps",
                  "Asian",
                  "Indian",
                  "Chinese"
                ],
                "avgRating": 3.7,
                "veg": true,
                "feeDetails": {
                  
                },
                "parentId": "429169",
                "avgRatingString": "3.7",
                "totalRatingsString": "3",
                "sla": {
                  "deliveryTime": 27,
                  "minDeliveryTime": 25,
                  "maxDeliveryTime": 30,
                  "lastMileTravel": 5,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "RAIN_MODE_NONE",
                  "slaString": "25-30 MINS",
                  "lastMileTravelString": "5.0 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "opened": true,
                  "restaurantClosedMeta": {
                    
                  }
                },
                "badges": {
                  
                },
                "aggregatedDiscountInfoV3": {
                  "header": "ITEMS",
                  "subHeader": "AT ₹79",
                  "logoCtx": {
                    "text": "BENEFITS"
                  }
                },
                "ratingSlab": "RATING_SLAB_4",
                "orderabilityCommunication": {
                  "title": {
                    
                  },
                  "subTitle": {
                    
                  },
                  "message": {
                    
                  },
                  "customIcon": {
                    
                  },
                  "commsStyling": {
                    
                  }
                },
                "cartOrderabilityNudgeBanner": {
                  "parameters": {
                    
                  },
                  "presentation": {
                    
                  }
                },
                "externalRatings": {
                  "aggregatedRating": {
                    "rating": "--"
                  }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                "featuredSectionInfo": {
                  "sectionTitle": "More"
                },
                "showEoOffer": true,
                "priceComparisonComms": {
                  
                }
              },
              "analytics": {
                "screenName": "explore",
                "context": "{\"tid\":\"667033fd-f6c3-a6c2-4c3c-2e24a0547493\",\"grid\":\"fb89fd69-3f92-43ab-83db-d6fc590d2787\",\"queryUniqueId\":\"dddaf861-9ba0-e0ca-7184-fadc826cfe3c\",\"query\":\"Chinese\"}",
                "objectValue": "1371294",
                "impressionObjectName": "impression-restaurant",
                "clickObjectName": "click-restaurant"
              },
              "ctaWithParams": {
                "link": "swiggy://menu",
                "type": "DEEPLINK",
                "params": {
                  "isSld": "false",
                  "sourceRequestId": "00000000000000000000000000000000",
                  "qrEnabled": "false",
                  "restaurant_id": "1371294",
                  "query": "Chinese",
                  "sourceSessionId": "s760c95c9a8-bbd2-493c-ba94-f978be8cd",
                  "source": "SEARCH"
                }
              }
            }
          }
        },
        {
          "card": {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                "id": "877188",
                "name": "Radhe Prem Ni Mithaas",
                "city": "10",
                "slugs": {
                  "restaurant": "radhe-prem-ni-mithaas-gandhinagar-gandhinagar-3",
                  "city": "ahmedabad"
                },
                "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/11/18/ff83b8cd-53c6-46f7-b1b8-7cf060728739_afec14cd-4d7b-4fbe-a696-7ce43fb64148.jpg",
                "address": "Shop No : 1,2 , Floor : 0 , SHREE RANG  HEIGHTS , ",
                "locality": "Bhaijipura",
                "areaName": "Gandhinagar",
                "costForTwo": "35000",
                "costForTwoMessage": "₹350 FOR TWO",
                "cuisines": [
                  "Sweets",
                  "Snacks",
                  "Fast Food"
                ],
                "avgRating": 4.6,
                "veg": true,
                "feeDetails": {
                  
                },
                "parentId": "512702",
                "avgRatingString": "4.6",
                "totalRatingsString": "350",
                "sla": {
                  "deliveryTime": 29,
                  "minDeliveryTime": 25,
                  "maxDeliveryTime": 30,
                  "lastMileTravel": 6.5,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "RAIN_MODE_NONE",
                  "slaString": "25-30 MINS",
                  "lastMileTravelString": "6.5 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "opened": true,
                  "restaurantClosedMeta": {
                    
                  }
                },
                "badges": {
                  "imageBadges": [
                    {
                      "imageId": "v1695133679/badges/Pure_Veg111.png",
                      "description": "Serves only 100% vegetarian food, with no non-veg items."
                    }
                  ]
                },
                "aggregatedDiscountInfoV3": {
                  "header": "ITEMS",
                  "subHeader": "AT ₹29",
                  "logoCtx": {
                    "text": "BENEFITS"
                  }
                },
                "ratingSlab": "RATING_SLAB_5",
                "orderabilityCommunication": {
                  "title": {
                    
                  },
                  "subTitle": {
                    
                  },
                  "message": {
                    
                  },
                  "customIcon": {
                    
                  },
                  "commsStyling": {
                    
                  }
                },
                "cartOrderabilityNudgeBanner": {
                  "parameters": {
                    
                  },
                  "presentation": {
                    
                  }
                },
                "externalRatings": {
                  "aggregatedRating": {
                    "rating": "--"
                  }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                "featuredSectionInfo": {
                  "sectionTitle": "More"
                },
                "showEoOffer": true,
                "priceComparisonComms": {
                  
                }
              },
              "analytics": {
                "screenName": "explore",
                "context": "{\"tid\":\"667033fd-f6c3-a6c2-4c3c-2e24a0547493\",\"grid\":\"fb89fd69-3f92-43ab-83db-d6fc590d2787\",\"queryUniqueId\":\"dddaf861-9ba0-e0ca-7184-fadc826cfe3c\",\"query\":\"Chinese\"}",
                "objectValue": "877188",
                "impressionObjectName": "impression-restaurant",
                "clickObjectName": "click-restaurant"
              },
              "ctaWithParams": {
                "link": "swiggy://menu",
                "type": "DEEPLINK",
                "params": {
                  "query": "Chinese",
                  "sourceSessionId": "s760c95c9a8-bbd2-493c-ba94-f978be8cd",
                  "source": "SEARCH",
                  "isSld": "false",
                  "sourceRequestId": "00000000000000000000000000000000",
                  "qrEnabled": "false",
                  "restaurant_id": "877188"
                }
              }
            }
          }
        },
        {
          "card": {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                "id": "1325820",
                "name": "Murgh Bites",
                "city": "10",
                "slugs": {
                  "restaurant": "murgh-bites-naroda-naroda",
                  "city": "ahmedabad"
                },
                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/2/7/d7bb24c5-5302-492f-a838-a5957b6d448f_1325820.jpg",
                "address": "Shop no 7, suzuki complex, opp Shivam orthopedic hospital, naroda-patiya road, saijpur bogha, Ahmedabad - 382345 ,Saijpur-Bogha(North Zone),Ahmedabad Municipal Corporation,Ahmedabad,Gujarat-382345",
                "locality": "Naroda",
                "areaName": "Naroda",
                "costForTwo": "24900",
                "costForTwoMessage": "₹249 FOR TWO",
                "cuisines": [
                  "Chinese",
                  "Biryani",
                  "North Indian",
                  "Hyderabadi",
                  "Lucknowi"
                ],
                "avgRating": 2.3,
                "feeDetails": {
                  
                },
                "parentId": "754514",
                "avgRatingString": "2.3",
                "totalRatingsString": "3",
                "sla": {
                  "deliveryTime": 71,
                  "minDeliveryTime": 70,
                  "maxDeliveryTime": 80,
                  "lastMileTravel": 8.7,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "RAIN_MODE_NONE",
                  "slaString": "70-80 MINS",
                  "lastMileTravelString": "8.7 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "opened": true,
                  "restaurantClosedMeta": {
                    
                  }
                },
                "aggregatedDiscountInfo": {
                  "visible": true
                },
                "badges": {
                  
                },
                "aggregatedDiscountInfoV2": {
                  "visible": true
                },
                "ratingSlab": "RATING_SLAB_3",
                "orderabilityCommunication": {
                  "title": {
                    
                  },
                  "subTitle": {
                    
                  },
                  "message": {
                    
                  },
                  "customIcon": {
                    
                  },
                  "commsStyling": {
                    
                  }
                },
                "cartOrderabilityNudgeBanner": {
                  "parameters": {
                    
                  },
                  "presentation": {
                    
                  }
                },
                "externalRatings": {
                  "aggregatedRating": {
                    "rating": "--"
                  }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                "featuredSectionInfo": {
                  "sectionTitle": "More"
                },
                "showEoOffer": true,
                "priceComparisonComms": {
                  
                }
              },
              "analytics": {
                "screenName": "explore",
                "context": "{\"tid\":\"667033fd-f6c3-a6c2-4c3c-2e24a0547493\",\"grid\":\"fb89fd69-3f92-43ab-83db-d6fc590d2787\",\"queryUniqueId\":\"dddaf861-9ba0-e0ca-7184-fadc826cfe3c\",\"query\":\"Chinese\"}",
                "objectValue": "1325820",
                "impressionObjectName": "impression-restaurant",
                "clickObjectName": "click-restaurant"
              },
              "ctaWithParams": {
                "link": "swiggy://menu",
                "type": "DEEPLINK",
                "params": {
                  "qrEnabled": "false",
                  "restaurant_id": "1325820",
                  "query": "Chinese",
                  "sourceSessionId": "s760c95c9a8-bbd2-493c-ba94-f978be8cd",
                  "source": "SEARCH",
                  "isSld": "false",
                  "sourceRequestId": "00000000000000000000000000000000"
                }
              }
            }
          }
        },
        {
          "card": {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                "id": "889561",
                "name": "Royal Biryani Hub",
                "city": "10",
                "slugs": {
                  "restaurant": "royal-biryani-hub-bapunagar-bapunagar",
                  "city": "ahmedabad"
                },
                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/18/e428c016-7b4a-41c1-a822-d3e0961b9470_889561.jpg",
                "address": "Shop No : 2 , Floor : 0 , dariyakhan ghummat , ",
                "locality": "Government A Colony",
                "areaName": "Bapunagar",
                "costForTwo": "40000",
                "costForTwoMessage": "₹400 FOR TWO",
                "cuisines": [
                  "Biryani",
                  "Burgers"
                ],
                "avgRating": 4.2,
                "feeDetails": {
                  
                },
                "parentId": "260877",
                "avgRatingString": "4.2",
                "totalRatingsString": "161",
                "sla": {
                  "deliveryTime": 53,
                  "minDeliveryTime": 50,
                  "maxDeliveryTime": 60,
                  "lastMileTravel": 8.9,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "RAIN_MODE_NONE",
                  "slaString": "50-60 MINS",
                  "lastMileTravelString": "8.9 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "opened": true,
                  "restaurantClosedMeta": {
                    
                  }
                },
                "badges": {
                  
                },
                "aggregatedDiscountInfoV3": {
                  "header": "30% OFF",
                  "subHeader": "UPTO ₹75",
                  "logoCtx": {
                    "text": "BENEFITS"
                  }
                },
                "ratingSlab": "RATING_SLAB_5",
                "orderabilityCommunication": {
                  "title": {
                    
                  },
                  "subTitle": {
                    
                  },
                  "message": {
                    
                  },
                  "customIcon": {
                    
                  },
                  "commsStyling": {
                    
                  }
                },
                "cartOrderabilityNudgeBanner": {
                  "parameters": {
                    
                  },
                  "presentation": {
                    
                  }
                },
                "externalRatings": {
                  "aggregatedRating": {
                    "rating": "--"
                  }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                "featuredSectionInfo": {
                  "sectionTitle": "More"
                },
                "showEoOffer": true,
                "priceComparisonComms": {
                  
                }
              },
              "analytics": {
                "screenName": "explore",
                "context": "{\"tid\":\"667033fd-f6c3-a6c2-4c3c-2e24a0547493\",\"grid\":\"fb89fd69-3f92-43ab-83db-d6fc590d2787\",\"queryUniqueId\":\"dddaf861-9ba0-e0ca-7184-fadc826cfe3c\",\"query\":\"Chinese\"}",
                "objectValue": "889561",
                "impressionObjectName": "impression-restaurant",
                "clickObjectName": "click-restaurant"
              },
              "ctaWithParams": {
                "link": "swiggy://menu",
                "type": "DEEPLINK",
                "params": {
                  "qrEnabled": "false",
                  "restaurant_id": "889561",
                  "query": "Chinese",
                  "sourceSessionId": "s760c95c9a8-bbd2-493c-ba94-f978be8cd",
                  "source": "SEARCH",
                  "isSld": "false",
                  "sourceRequestId": "00000000000000000000000000000000"
                }
              }
            }
          }
        },
        {
          "card": {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                "id": "425975",
                "name": "Delhi Kitchen",
                "city": "10",
                "slugs": {
                  "restaurant": "delhi-kitchen-gandhinagar-gandhinagar",
                  "city": "ahmedabad"
                },
                "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2026/5/27/5e4bce2b-f75b-434f-8ddc-b754fc2084e0_50938398-4c80-4027-8f9c-6173d1e4ba8b.",
                "address": "SHOP NO -14 ,GROUND FLOOR,AKSHAT HEAVEN BUILDING,KUDASAN, Gandhinagar, Gandhinagar, Gujarat, 382421",
                "locality": "Akshat Heaven Building",
                "areaName": "Gandhinagar",
                "costForTwo": "20000",
                "costForTwoMessage": "₹200 FOR TWO",
                "cuisines": [
                  "North Indian"
                ],
                "avgRating": 4.1,
                "veg": true,
                "feeDetails": {
                  
                },
                "parentId": "311",
                "avgRatingString": "4.1",
                "totalRatingsString": "854",
                "sla": {
                  "deliveryTime": 34,
                  "minDeliveryTime": 30,
                  "maxDeliveryTime": 35,
                  "lastMileTravel": 9.2,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "RAIN_MODE_NONE",
                  "slaString": "30-35 MINS",
                  "lastMileTravelString": "9.2 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "opened": true,
                  "restaurantClosedMeta": {
                    
                  }
                },
                "badges": {
                  
                },
                "aggregatedDiscountInfoV3": {
                  "header": "ITEMS",
                  "subHeader": "AT ₹79",
                  "logoCtx": {
                    "text": "BENEFITS"
                  }
                },
                "ratingSlab": "RATING_SLAB_5",
                "orderabilityCommunication": {
                  "title": {
                    
                  },
                  "subTitle": {
                    
                  },
                  "message": {
                    
                  },
                  "customIcon": {
                    
                  },
                  "commsStyling": {
                    
                  }
                },
                "cartOrderabilityNudgeBanner": {
                  "parameters": {
                    
                  },
                  "presentation": {
                    
                  }
                },
                "externalRatings": {
                  "aggregatedRating": {
                    "rating": "--"
                  }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                "featuredSectionInfo": {
                  "sectionTitle": "More"
                },
                "showEoOffer": true,
                "priceComparisonComms": {
                  
                }
              },
              "analytics": {
                "screenName": "explore",
                "context": "{\"tid\":\"667033fd-f6c3-a6c2-4c3c-2e24a0547493\",\"grid\":\"fb89fd69-3f92-43ab-83db-d6fc590d2787\",\"queryUniqueId\":\"dddaf861-9ba0-e0ca-7184-fadc826cfe3c\",\"query\":\"Chinese\"}",
                "objectValue": "425975",
                "impressionObjectName": "impression-restaurant",
                "clickObjectName": "click-restaurant"
              },
              "ctaWithParams": {
                "link": "swiggy://menu",
                "type": "DEEPLINK",
                "params": {
                  "qrEnabled": "false",
                  "restaurant_id": "425975",
                  "query": "Chinese",
                  "sourceSessionId": "s760c95c9a8-bbd2-493c-ba94-f978be8cd",
                  "source": "SEARCH",
                  "isSld": "false",
                  "sourceRequestId": "00000000000000000000000000000000"
                }
              }
            }
          }
        },
        {
          "card": {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                "id": "781921",
                "name": "A One Momos",
                "city": "10",
                "slugs": {
                  "restaurant": "a-one-momos-chandkheda-chandkheda",
                  "city": "ahmedabad"
                },
                "cloudinaryImageId": "578d0ab17d249663db3d714764db9faa",
                "address": "Opp Dev Residency Near Panchslok Home  Tragad Chandkheda,Ahmedabad, Gujarat - 382470",
                "locality": "Panchslok Home Tragad",
                "areaName": "Chandkheda",
                "costForTwo": "20000",
                "costForTwoMessage": "₹200 FOR TWO",
                "cuisines": [
                  "Chinese"
                ],
                "veg": true,
                "feeDetails": {
                  
                },
                "parentId": "24765",
                "avgRatingString": "--",
                "sla": {
                  "deliveryTime": 39,
                  "minDeliveryTime": 35,
                  "maxDeliveryTime": 40,
                  "lastMileTravel": 8.3,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "RAIN_MODE_NONE",
                  "slaString": "35-40 MINS",
                  "lastMileTravelString": "8.3 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "opened": true,
                  "restaurantClosedMeta": {
                    
                  }
                },
                "aggregatedDiscountInfo": {
                  "visible": true
                },
                "badges": {
                  
                },
                "aggregatedDiscountInfoV2": {
                  "visible": true
                },
                "orderabilityCommunication": {
                  "title": {
                    
                  },
                  "subTitle": {
                    
                  },
                  "message": {
                    
                  },
                  "customIcon": {
                    
                  },
                  "commsStyling": {
                    
                  }
                },
                "cartOrderabilityNudgeBanner": {
                  "parameters": {
                    
                  },
                  "presentation": {
                    
                  }
                },
                "externalRatings": {
                  "aggregatedRating": {
                    "rating": "--"
                  }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                "featuredSectionInfo": {
                  "sectionTitle": "More"
                },
                "showEoOffer": true,
                "priceComparisonComms": {
                  
                }
              },
              "analytics": {
                "screenName": "explore",
                "context": "{\"tid\":\"667033fd-f6c3-a6c2-4c3c-2e24a0547493\",\"grid\":\"fb89fd69-3f92-43ab-83db-d6fc590d2787\",\"queryUniqueId\":\"dddaf861-9ba0-e0ca-7184-fadc826cfe3c\",\"query\":\"Chinese\"}",
                "objectValue": "781921",
                "impressionObjectName": "impression-restaurant",
                "clickObjectName": "click-restaurant"
              },
              "ctaWithParams": {
                "link": "swiggy://menu",
                "type": "DEEPLINK",
                "params": {
                  "sourceRequestId": "00000000000000000000000000000000",
                  "qrEnabled": "false",
                  "restaurant_id": "781921",
                  "query": "Chinese",
                  "sourceSessionId": "s760c95c9a8-bbd2-493c-ba94-f978be8cd",
                  "source": "SEARCH",
                  "isSld": "false"
                }
              }
            }
          }
        },
        {
          "card": {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                "id": "970514",
                "name": "Kansar Garden Restaurant",
                "city": "10",
                "slugs": {
                  "restaurant": "kansar-garden-restaurant-gandhinagar-gandhinagar",
                  "city": "ahmedabad"
                },
                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/14/7c71f566-d245-4896-acb9-f4818696af0f_970514.jpg",
                "address": "Shop No : 0 , Floor : 0 , Nr,PETROL PUMP,POR-KUDASAN , ",
                "locality": "Gandhinagar",
                "areaName": "Gandhinagar",
                "costForTwo": "40000",
                "costForTwoMessage": "₹400 FOR TWO",
                "cuisines": [
                  "Chinese",
                  "Punjabi",
                  "Italian"
                ],
                "avgRating": 4.4,
                "veg": true,
                "feeDetails": {
                  
                },
                "parentId": "568208",
                "avgRatingString": "4.4",
                "totalRatingsString": "260",
                "sla": {
                  "deliveryTime": 39,
                  "minDeliveryTime": 35,
                  "maxDeliveryTime": 40,
                  "lastMileTravel": 11.2,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "RAIN_MODE_NONE",
                  "slaString": "35-40 MINS",
                  "lastMileTravelString": "11.2 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "opened": true,
                  "restaurantClosedMeta": {
                    
                  }
                },
                "badges": {
                  
                },
                "aggregatedDiscountInfoV3": {
                  "header": "70% OFF",
                  "subHeader": "UPTO ₹140",
                  "logoCtx": {
                    "text": "BENEFITS"
                  }
                },
                "ratingSlab": "RATING_SLAB_5",
                "orderabilityCommunication": {
                  "title": {
                    
                  },
                  "subTitle": {
                    
                  },
                  "message": {
                    
                  },
                  "customIcon": {
                    
                  },
                  "commsStyling": {
                    
                  }
                },
                "cartOrderabilityNudgeBanner": {
                  "parameters": {
                    
                  },
                  "presentation": {
                    
                  }
                },
                "externalRatings": {
                  "aggregatedRating": {
                    "rating": "--"
                  }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                "featuredSectionInfo": {
                  "sectionTitle": "More"
                },
                "showEoOffer": true,
                "priceComparisonComms": {
                  
                }
              },
              "analytics": {
                "screenName": "explore",
                "context": "{\"tid\":\"667033fd-f6c3-a6c2-4c3c-2e24a0547493\",\"grid\":\"fb89fd69-3f92-43ab-83db-d6fc590d2787\",\"queryUniqueId\":\"dddaf861-9ba0-e0ca-7184-fadc826cfe3c\",\"query\":\"Chinese\"}",
                "objectValue": "970514",
                "impressionObjectName": "impression-restaurant",
                "clickObjectName": "click-restaurant"
              },
              "ctaWithParams": {
                "link": "swiggy://menu",
                "type": "DEEPLINK",
                "params": {
                  "isSld": "false",
                  "sourceRequestId": "00000000000000000000000000000000",
                  "qrEnabled": "false",
                  "restaurant_id": "970514",
                  "query": "Chinese",
                  "sourceSessionId": "s760c95c9a8-bbd2-493c-ba94-f978be8cd",
                  "source": "SEARCH"
                }
              }
            }
          }
        },
        {
          "card": {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                "id": "188360",
                "name": "Ambika Fast Food & Restaurant",
                "city": "10",
                "slugs": {
                  "restaurant": "ambika-fast-food-&-restaurant-ranip-ranip",
                  "city": "ahmedabad"
                },
                "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2026/1/17/b364d821-d7ed-49bf-b8da-ab9d92f884c2_799eb778-ea4c-45bd-9381-2c8ccfd88887.JPG",
                "address": "Devpriya developers, opposite dhanlaxmi flats, balolnagar cross road, ranip, ahmedabad",
                "locality": "Balolnagar cross road",
                "areaName": "Ranip",
                "costForTwo": "20000",
                "costForTwoMessage": "₹200 FOR TWO",
                "cuisines": [
                  "Punjabi"
                ],
                "avgRating": 3.9,
                "veg": true,
                "feeDetails": {
                  
                },
                "parentId": "31303",
                "avgRatingString": "3.9",
                "totalRatingsString": "106",
                "sla": {
                  "deliveryTime": 57,
                  "minDeliveryTime": 55,
                  "maxDeliveryTime": 65,
                  "lastMileTravel": 10.5,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "RAIN_MODE_NONE",
                  "slaString": "55-65 MINS",
                  "lastMileTravelString": "10.5 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "opened": true,
                  "restaurantClosedMeta": {
                    
                  }
                },
                "badges": {
                  "imageBadges": [
                    {
                      "imageId": "v1695133679/badges/Pure_Veg111.png",
                      "description": "Serves only 100% vegetarian food, with no non-veg items."
                    }
                  ]
                },
                "sld": true,
                "aggregatedDiscountInfoV3": {
                  "header": "20% OFF",
                  "subHeader": "ABOVE ₹700",
                  "discountTag": "FLAT DEAL",
                  "logoCtx": {
                    "text": "BENEFITS"
                  }
                },
                "ratingSlab": "RATING_SLAB_4",
                "orderabilityCommunication": {
                  "title": {
                    
                  },
                  "subTitle": {
                    
                  },
                  "message": {
                    
                  },
                  "customIcon": {
                    
                  },
                  "commsStyling": {
                    
                  }
                },
                "cartOrderabilityNudgeBanner": {
                  "parameters": {
                    
                  },
                  "presentation": {
                    
                  }
                },
                "externalRatings": {
                  "aggregatedRating": {
                    "rating": "--"
                  }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                "featuredSectionInfo": {
                  "sectionTitle": "More"
                },
                "showEoOffer": true,
                "priceComparisonComms": {
                  
                }
              },
              "analytics": {
                "screenName": "explore",
                "context": "{\"tid\":\"667033fd-f6c3-a6c2-4c3c-2e24a0547493\",\"grid\":\"fb89fd69-3f92-43ab-83db-d6fc590d2787\",\"queryUniqueId\":\"dddaf861-9ba0-e0ca-7184-fadc826cfe3c\",\"query\":\"Chinese\"}",
                "objectValue": "188360",
                "impressionObjectName": "impression-restaurant-sld",
                "clickObjectName": "click-restaurant-sld"
              },
              "ctaWithParams": {
                "link": "swiggy://menu",
                "type": "DEEPLINK",
                "params": {
                  "source": "SEARCH",
                  "isSld": "true",
                  "sourceRequestId": "00000000000000000000000000000000",
                  "qrEnabled": "false",
                  "restaurant_id": "188360",
                  "query": "Chinese",
                  "sourceSessionId": "s760c95c9a8-bbd2-493c-ba94-f978be8cd"
                }
              }
            }
          }
        },
        {
          "card": {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                "id": "578508",
                "name": "Prince point",
                "city": "10",
                "slugs": {
                  "restaurant": "prince-point-naroda-naroda",
                  "city": "ahmedabad"
                },
                "cloudinaryImageId": "7888ade4b2a80c18760f9cc708610945",
                "address": "shop no 17 naroda business hub satv green party plot hanspura naroda ahmedabad",
                "locality": "Satv Green Party",
                "areaName": "Naroda",
                "costForTwo": "30000",
                "costForTwoMessage": "₹300 FOR TWO",
                "cuisines": [
                  "South Indian",
                  "Street Food",
                  "Chinese",
                  "Snacks"
                ],
                "avgRating": 4.4,
                "veg": true,
                "feeDetails": {
                  
                },
                "parentId": "161229",
                "avgRatingString": "4.4",
                "totalRatingsString": "129",
                "sla": {
                  "deliveryTime": 44,
                  "minDeliveryTime": 40,
                  "maxDeliveryTime": 45,
                  "lastMileTravel": 9.1,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "RAIN_MODE_NONE",
                  "slaString": "40-45 MINS",
                  "lastMileTravelString": "9.1 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "opened": true,
                  "restaurantClosedMeta": {
                    
                  }
                },
                "badges": {
                  "imageBadges": [
                    {
                      "imageId": "v1695133679/badges/Pure_Veg111.png",
                      "description": "Serves only 100% vegetarian food, with no non-veg items."
                    }
                  ]
                },
                "aggregatedDiscountInfoV3": {
                  "header": "ITEMS",
                  "subHeader": "AT ₹19",
                  "logoCtx": {
                    "text": "BENEFITS"
                  }
                },
                "ratingSlab": "RATING_SLAB_5",
                "orderabilityCommunication": {
                  "title": {
                    
                  },
                  "subTitle": {
                    
                  },
                  "message": {
                    
                  },
                  "customIcon": {
                    
                  },
                  "commsStyling": {
                    
                  }
                },
                "cartOrderabilityNudgeBanner": {
                  "parameters": {
                    
                  },
                  "presentation": {
                    
                  }
                },
                "externalRatings": {
                  "aggregatedRating": {
                    "rating": "4.2",
                    "ratingCount": "61"
                  },
                  "source": "GOOGLE",
                  "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                "featuredSectionInfo": {
                  "sectionTitle": "More"
                },
                "showEoOffer": true,
                "priceComparisonComms": {
                  
                }
              },
              "analytics": {
                "screenName": "explore",
                "context": "{\"tid\":\"667033fd-f6c3-a6c2-4c3c-2e24a0547493\",\"grid\":\"fb89fd69-3f92-43ab-83db-d6fc590d2787\",\"queryUniqueId\":\"dddaf861-9ba0-e0ca-7184-fadc826cfe3c\",\"query\":\"Chinese\"}",
                "objectValue": "578508",
                "impressionObjectName": "impression-restaurant",
                "clickObjectName": "click-restaurant"
              },
              "ctaWithParams": {
                "link": "swiggy://menu",
                "type": "DEEPLINK",
                "params": {
                  "qrEnabled": "false",
                  "restaurant_id": "578508",
                  "query": "Chinese",
                  "sourceSessionId": "s760c95c9a8-bbd2-493c-ba94-f978be8cd",
                  "source": "SEARCH",
                  "isSld": "false",
                  "sourceRequestId": "00000000000000000000000000000000"
                }
              }
            }
          }
        },
        {
          "card": {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                "id": "1191648",
                "name": "MOMO MAFIA- Tapovan",
                "city": "10",
                "slugs": {
                  "restaurant": "momo-mafia--tapovan-chandkheda-chandkheda",
                  "city": "ahmedabad"
                },
                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/2f84ec1c-2484-4a90-a280-84386872927e_1191648.jpg",
                "address": "15-16 URBANCHOWK NEAR MAPLE 99 RESTURANT , SP RING ROAD, NEAR TAPOVAN CIRCLE ,Chandkheramotera(West Zone),Ahmedabad Municipal Corporation,Ahmedabad,Gujarat-382424\t",
                "locality": "Chandkheda",
                "areaName": "Chandkheda",
                "costForTwo": "20000",
                "costForTwoMessage": "₹200 FOR TWO",
                "cuisines": [
                  "Chinese"
                ],
                "veg": true,
                "feeDetails": {
                  
                },
                "parentId": "682453",
                "avgRatingString": "--",
                "sla": {
                  "deliveryTime": 33,
                  "minDeliveryTime": 30,
                  "maxDeliveryTime": 35,
                  "lastMileTravel": 3.9,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "RAIN_MODE_NONE",
                  "slaString": "30-35 MINS",
                  "lastMileTravelString": "3.9 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "opened": true,
                  "restaurantClosedMeta": {
                    
                  }
                },
                "badges": {
                  
                },
                "aggregatedDiscountInfoV3": {
                  "header": "60% OFF",
                  "subHeader": "UPTO ₹120",
                  "logoCtx": {
                    "text": "BENEFITS"
                  }
                },
                "orderabilityCommunication": {
                  "title": {
                    
                  },
                  "subTitle": {
                    
                  },
                  "message": {
                    
                  },
                  "customIcon": {
                    
                  },
                  "commsStyling": {
                    
                  }
                },
                "cartOrderabilityNudgeBanner": {
                  "parameters": {
                    
                  },
                  "presentation": {
                    
                  }
                },
                "externalRatings": {
                  "aggregatedRating": {
                    "rating": "--"
                  }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                "featuredSectionInfo": {
                  "sectionTitle": "More"
                },
                "showEoOffer": true,
                "priceComparisonComms": {
                  
                }
              },
              "analytics": {
                "screenName": "explore",
                "context": "{\"tid\":\"667033fd-f6c3-a6c2-4c3c-2e24a0547493\",\"grid\":\"fb89fd69-3f92-43ab-83db-d6fc590d2787\",\"queryUniqueId\":\"dddaf861-9ba0-e0ca-7184-fadc826cfe3c\",\"query\":\"Chinese\"}",
                "objectValue": "1191648",
                "impressionObjectName": "impression-restaurant",
                "clickObjectName": "click-restaurant"
              },
              "ctaWithParams": {
                "link": "swiggy://menu",
                "type": "DEEPLINK",
                "params": {
                  "sourceSessionId": "s760c95c9a8-bbd2-493c-ba94-f978be8cd",
                  "source": "SEARCH",
                  "isSld": "false",
                  "sourceRequestId": "00000000000000000000000000000000",
                  "qrEnabled": "false",
                  "restaurant_id": "1191648",
                  "query": "Chinese"
                }
              }
            }
          }
        },
        {
          "card": {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                "id": "1287410",
                "name": "Dragon Express",
                "city": "10",
                "slugs": {
                  "restaurant": "dragon-express-gandhinagar-gandhinagar",
                  "city": "ahmedabad"
                },
                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/12/15/b7e32317-2f32-418b-96e5-244ad4772a48_1287410.jpg",
                "address": "SHOP NO. 6/7 TOWER 2, INFOCOTY, GANDHINAGAR ,Gandhinagar (Gujarat) H.O,Gandhinagar,Gandhinagar,Gujarat-382010",
                "locality": "INFOCOTY,Gandhinagar",
                "areaName": "INFOCOTY,Gandhinagar",
                "costForTwo": "25000",
                "costForTwoMessage": "₹250 FOR TWO",
                "cuisines": [
                  "Chinese",
                  "Snacks",
                  "Fast Food"
                ],
                "avgRating": 4.3,
                "veg": true,
                "feeDetails": {
                  
                },
                "parentId": "74650",
                "avgRatingString": "4.3",
                "totalRatingsString": "16",
                "sla": {
                  "deliveryTime": 41,
                  "minDeliveryTime": 40,
                  "maxDeliveryTime": 45,
                  "lastMileTravel": 10.3,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "RAIN_MODE_NONE",
                  "slaString": "40-45 MINS",
                  "lastMileTravelString": "10.3 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "opened": true,
                  "restaurantClosedMeta": {
                    
                  }
                },
                "badges": {
                  
                },
                "aggregatedDiscountInfoV3": {
                  "header": "60% OFF",
                  "subHeader": "UPTO ₹120",
                  "logoCtx": {
                    "text": "BENEFITS"
                  }
                },
                "ratingSlab": "RATING_SLAB_5",
                "orderabilityCommunication": {
                  "title": {
                    
                  },
                  "subTitle": {
                    
                  },
                  "message": {
                    
                  },
                  "customIcon": {
                    
                  },
                  "commsStyling": {
                    
                  }
                },
                "cartOrderabilityNudgeBanner": {
                  "parameters": {
                    
                  },
                  "presentation": {
                    
                  }
                },
                "externalRatings": {
                  "aggregatedRating": {
                    "rating": "--"
                  }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                "featuredSectionInfo": {
                  "sectionTitle": "More"
                },
                "showEoOffer": true,
                "priceComparisonComms": {
                  
                }
              },
              "analytics": {
                "screenName": "explore",
                "context": "{\"tid\":\"667033fd-f6c3-a6c2-4c3c-2e24a0547493\",\"grid\":\"fb89fd69-3f92-43ab-83db-d6fc590d2787\",\"queryUniqueId\":\"dddaf861-9ba0-e0ca-7184-fadc826cfe3c\",\"query\":\"Chinese\"}",
                "objectValue": "1287410",
                "impressionObjectName": "impression-restaurant",
                "clickObjectName": "click-restaurant"
              },
              "ctaWithParams": {
                "link": "swiggy://menu",
                "type": "DEEPLINK",
                "params": {
                  "sourceRequestId": "00000000000000000000000000000000",
                  "qrEnabled": "false",
                  "restaurant_id": "1287410",
                  "query": "Chinese",
                  "sourceSessionId": "s760c95c9a8-bbd2-493c-ba94-f978be8cd",
                  "source": "SEARCH",
                  "isSld": "false"
                }
              }
            }
          }
        },
        {
          "card": {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                "id": "775729",
                "name": "Anand Bhajipav & Pulav (Ankurwala)",
                "city": "10",
                "slugs": {
                  "restaurant": "anand-fast-food-gota-gota",
                  "city": "ahmedabad"
                },
                "cloudinaryImageId": "7d5017fb64808767193fd9b564970920",
                "address": "GF-17, FF-13, Vrundavan Heights, Opp Center Point, Vandematram Road, Gota, Ahmedabad, Gujarat - 382481",
                "locality": "Vandematram Road",
                "areaName": "GOTA",
                "costForTwo": "25000",
                "costForTwoMessage": "₹250 FOR TWO",
                "cuisines": [
                  "pav bhaji",
                  "Fast Food",
                  "Snacks",
                  "street food",
                  "North Indian"
                ],
                "avgRating": 4.1,
                "veg": true,
                "feeDetails": {
                  
                },
                "parentId": "32704",
                "avgRatingString": "4.1",
                "totalRatingsString": "2.0K+",
                "sla": {
                  "deliveryTime": 41,
                  "minDeliveryTime": 40,
                  "maxDeliveryTime": 45,
                  "lastMileTravel": 11,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "RAIN_MODE_NONE",
                  "slaString": "40-45 MINS",
                  "lastMileTravelString": "11.0 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "opened": true,
                  "restaurantClosedMeta": {
                    
                  }
                },
                "badges": {
                  "imageBadges": [
                    {
                      "imageId": "v1695133679/badges/Pure_Veg111.png",
                      "description": "Serves only 100% vegetarian food, with no non-veg items."
                    }
                  ]
                },
                "aggregatedDiscountInfoV3": {
                  "header": "30% OFF",
                  "subHeader": "UPTO ₹150",
                  "discountTag": "SAVE BIG",
                  "logoCtx": {
                    "text": "BENEFITS"
                  }
                },
                "ratingSlab": "RATING_SLAB_5",
                "orderabilityCommunication": {
                  "title": {
                    
                  },
                  "subTitle": {
                    
                  },
                  "message": {
                    
                  },
                  "customIcon": {
                    
                  },
                  "commsStyling": {
                    
                  }
                },
                "cartOrderabilityNudgeBanner": {
                  "parameters": {
                    
                  },
                  "presentation": {
                    
                  }
                },
                "externalRatings": {
                  "aggregatedRating": {
                    "rating": "--"
                  }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                "featuredSectionInfo": {
                  "sectionTitle": "More"
                },
                "showEoOffer": true,
                "priceComparisonComms": {
                  
                }
              },
              "analytics": {
                "screenName": "explore",
                "context": "{\"tid\":\"667033fd-f6c3-a6c2-4c3c-2e24a0547493\",\"grid\":\"fb89fd69-3f92-43ab-83db-d6fc590d2787\",\"queryUniqueId\":\"dddaf861-9ba0-e0ca-7184-fadc826cfe3c\",\"query\":\"Chinese\"}",
                "objectValue": "775729",
                "impressionObjectName": "impression-restaurant",
                "clickObjectName": "click-restaurant"
              },
              "ctaWithParams": {
                "link": "swiggy://menu",
                "type": "DEEPLINK",
                "params": {
                  "source": "SEARCH",
                  "isSld": "false",
                  "sourceRequestId": "00000000000000000000000000000000",
                  "qrEnabled": "false",
                  "restaurant_id": "775729",
                  "query": "Chinese",
                  "sourceSessionId": "s760c95c9a8-bbd2-493c-ba94-f978be8cd"
                }
              }
            }
          }
        },
        {
          "card": {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                "id": "1263198",
                "name": "Indo chinese Food",
                "city": "10",
                "slugs": {
                  "restaurant": "indo-chinese-food-chandkheda-chandkheda",
                  "city": "ahmedabad"
                },
                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/11/15/762e1c84-5b27-4b3a-8049-d00d55612165_1263198.jpg",
                "address": "Shop No : Shop no 1 , Floor :  , Devpujan Apartment , Motera, Ahmedabad, Gujarat 380005, India 380005",
                "locality": "Chandkheda",
                "areaName": "Chandkheda",
                "costForTwo": "40000",
                "costForTwoMessage": "₹400 FOR TWO",
                "cuisines": [
                  "Chinese",
                  "South Indian"
                ],
                "veg": true,
                "feeDetails": {
                  
                },
                "parentId": "719455",
                "avgRatingString": "--",
                "sla": {
                  "deliveryTime": 32,
                  "minDeliveryTime": 30,
                  "maxDeliveryTime": 35,
                  "lastMileTravel": 3.9,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "RAIN_MODE_NONE",
                  "slaString": "30-35 MINS",
                  "lastMileTravelString": "3.9 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "opened": true,
                  "restaurantClosedMeta": {
                    
                  }
                },
                "aggregatedDiscountInfo": {
                  "visible": true
                },
                "badges": {
                  
                },
                "aggregatedDiscountInfoV2": {
                  "visible": true
                },
                "orderabilityCommunication": {
                  "title": {
                    
                  },
                  "subTitle": {
                    
                  },
                  "message": {
                    
                  },
                  "customIcon": {
                    
                  },
                  "commsStyling": {
                    
                  }
                },
                "cartOrderabilityNudgeBanner": {
                  "parameters": {
                    
                  },
                  "presentation": {
                    
                  }
                },
                "externalRatings": {
                  "aggregatedRating": {
                    "rating": "--"
                  }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                "featuredSectionInfo": {
                  "sectionTitle": "More"
                },
                "showEoOffer": true,
                "priceComparisonComms": {
                  
                }
              },
              "analytics": {
                "screenName": "explore",
                "context": "{\"tid\":\"667033fd-f6c3-a6c2-4c3c-2e24a0547493\",\"grid\":\"fb89fd69-3f92-43ab-83db-d6fc590d2787\",\"queryUniqueId\":\"dddaf861-9ba0-e0ca-7184-fadc826cfe3c\",\"query\":\"Chinese\"}",
                "objectValue": "1263198",
                "impressionObjectName": "impression-restaurant",
                "clickObjectName": "click-restaurant"
              },
              "ctaWithParams": {
                "link": "swiggy://menu",
                "type": "DEEPLINK",
                "params": {
                  "isSld": "false",
                  "sourceRequestId": "00000000000000000000000000000000",
                  "qrEnabled": "false",
                  "restaurant_id": "1263198",
                  "query": "Chinese",
                  "sourceSessionId": "s760c95c9a8-bbd2-493c-ba94-f978be8cd",
                  "source": "SEARCH"
                }
              }
            }
          }
        },
        {
          "card": {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                "id": "949040",
                "name": "Hashmukh khaman",
                "city": "10",
                "slugs": {
                  "restaurant": "kinjal-sweet-and-namkeen-gandhinagar-gandhinagar",
                  "city": "ahmedabad"
                },
                "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2025/10/24/0298b0be-0b2f-4822-8bdb-b6149d2c2bdf_a726b131-17b1-4fcb-a44d-76c3b74ec557.jpg",
                "address": "Shop No : 5 , Floor : GF , RAJ ICONZA VINTAGE VILLA , ",
                "locality": "Gandhinagar",
                "areaName": "Gandhinagar",
                "costForTwo": "65000",
                "costForTwoMessage": "₹650 FOR TWO",
                "cuisines": [
                  "Sweets",
                  "Desserts",
                  "Snacks",
                  "Street Food"
                ],
                "avgRating": 4.4,
                "veg": true,
                "feeDetails": {
                  
                },
                "parentId": "566656",
                "avgRatingString": "4.4",
                "totalRatingsString": "60",
                "sla": {
                  "deliveryTime": 34,
                  "minDeliveryTime": 30,
                  "maxDeliveryTime": 35,
                  "lastMileTravel": 8.6,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "RAIN_MODE_NONE",
                  "slaString": "30-35 MINS",
                  "lastMileTravelString": "8.6 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "opened": true,
                  "restaurantClosedMeta": {
                    
                  }
                },
                "aggregatedDiscountInfo": {
                  "visible": true
                },
                "badges": {
                  "imageBadges": [
                    {
                      "imageId": "v1695133679/badges/Pure_Veg111.png",
                      "description": "Serves only 100% vegetarian food, with no non-veg items."
                    }
                  ]
                },
                "aggregatedDiscountInfoV2": {
                  "visible": true
                },
                "ratingSlab": "RATING_SLAB_5",
                "orderabilityCommunication": {
                  "title": {
                    
                  },
                  "subTitle": {
                    
                  },
                  "message": {
                    
                  },
                  "customIcon": {
                    
                  },
                  "commsStyling": {
                    
                  }
                },
                "cartOrderabilityNudgeBanner": {
                  "parameters": {
                    
                  },
                  "presentation": {
                    
                  }
                },
                "externalRatings": {
                  "aggregatedRating": {
                    "rating": "--"
                  }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                "featuredSectionInfo": {
                  "sectionTitle": "More"
                },
                "showEoOffer": true,
                "priceComparisonComms": {
                  
                }
              },
              "analytics": {
                "screenName": "explore",
                "context": "{\"tid\":\"667033fd-f6c3-a6c2-4c3c-2e24a0547493\",\"grid\":\"fb89fd69-3f92-43ab-83db-d6fc590d2787\",\"queryUniqueId\":\"dddaf861-9ba0-e0ca-7184-fadc826cfe3c\",\"query\":\"Chinese\"}",
                "objectValue": "949040",
                "impressionObjectName": "impression-restaurant",
                "clickObjectName": "click-restaurant"
              },
              "ctaWithParams": {
                "link": "swiggy://menu",
                "type": "DEEPLINK",
                "params": {
                  "source": "SEARCH",
                  "isSld": "false",
                  "sourceRequestId": "00000000000000000000000000000000",
                  "qrEnabled": "false",
                  "restaurant_id": "949040",
                  "query": "Chinese",
                  "sourceSessionId": "s760c95c9a8-bbd2-493c-ba94-f978be8cd"
                }
              }
            }
          }
        },
        {
          "card": {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                "id": "1256036",
                "name": "The Kilogram",
                "city": "10",
                "slugs": {
                  "restaurant": "the-kilogram-gota-gota-2",
                  "city": "ahmedabad"
                },
                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/11/8/26c744b8-b2b7-4951-9796-f699ddc5a3ad_1256036.jpg",
                "address": "Shop No : G-5 , , Floor : Ground , shop num 5 , Savvy Studios complex, , Savvy Studioz, Gota - Jagatpur Road, Gota, Ahmedabad, Gujarat, India",
                "locality": "GOTA",
                "areaName": "GOTA",
                "costForTwo": "20000",
                "costForTwoMessage": "₹200 FOR TWO",
                "cuisines": [
                  "Chinese",
                  "Indian",
                  "Beverages",
                  "Gujarati",
                  "Street Food"
                ],
                "avgRating": 4,
                "veg": true,
                "feeDetails": {
                  
                },
                "parentId": "369735",
                "avgRatingString": "4.0",
                "totalRatingsString": "42",
                "sla": {
                  "deliveryTime": 41,
                  "minDeliveryTime": 40,
                  "maxDeliveryTime": 45,
                  "lastMileTravel": 10,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "RAIN_MODE_NONE",
                  "slaString": "40-45 MINS",
                  "lastMileTravelString": "10.0 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "opened": true,
                  "restaurantClosedMeta": {
                    
                  }
                },
                "badges": {
                  
                },
                "aggregatedDiscountInfoV3": {
                  "header": "ITEMS",
                  "subHeader": "AT ₹89",
                  "logoCtx": {
                    "text": "BENEFITS"
                  }
                },
                "ratingSlab": "RATING_SLAB_4",
                "orderabilityCommunication": {
                  "title": {
                    
                  },
                  "subTitle": {
                    
                  },
                  "message": {
                    
                  },
                  "customIcon": {
                    
                  },
                  "commsStyling": {
                    
                  }
                },
                "cartOrderabilityNudgeBanner": {
                  "parameters": {
                    
                  },
                  "presentation": {
                    
                  }
                },
                "externalRatings": {
                  "aggregatedRating": {
                    "rating": "--"
                  }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                "featuredSectionInfo": {
                  "sectionTitle": "More"
                },
                "showEoOffer": true,
                "priceComparisonComms": {
                  
                }
              },
              "analytics": {
                "screenName": "explore",
                "context": "{\"tid\":\"667033fd-f6c3-a6c2-4c3c-2e24a0547493\",\"grid\":\"fb89fd69-3f92-43ab-83db-d6fc590d2787\",\"queryUniqueId\":\"dddaf861-9ba0-e0ca-7184-fadc826cfe3c\",\"query\":\"Chinese\"}",
                "objectValue": "1256036",
                "impressionObjectName": "impression-restaurant",
                "clickObjectName": "click-restaurant"
              },
              "ctaWithParams": {
                "link": "swiggy://menu",
                "type": "DEEPLINK",
                "params": {
                  "source": "SEARCH",
                  "isSld": "false",
                  "sourceRequestId": "00000000000000000000000000000000",
                  "qrEnabled": "false",
                  "restaurant_id": "1256036",
                  "query": "Chinese",
                  "sourceSessionId": "s760c95c9a8-bbd2-493c-ba94-f978be8cd"
                }
              }
            }
          }
        },
        {
          "card": {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                "id": "628530",
                "name": "Sree Sai Hyderabadi Biryani",
                "city": "10",
                "slugs": {
                  "restaurant": "sree-sai-hyderabadi-biryani-gandhinagar-gandhinagar",
                  "city": "ahmedabad"
                },
                "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/9/14/e25dd672-3d4e-4dac-9e66-c520874f79e2_1a701a77-99a0-497a-b60b-79b574a37d64.jpg",
                "address": "Shop no 133,Block-B, Pramukh Masthana,beside Sorath kathiyawadi restaurant,near Pizza hut, Reliance cross road,opp to NID,Gandhinagar, Gujarat",
                "locality": "Gandhinagar",
                "areaName": "Gandhinagar",
                "costForTwo": "70000",
                "costForTwoMessage": "₹700 FOR TWO",
                "cuisines": [
                  "Indian",
                  "North Indian",
                  "Biryani"
                ],
                "avgRating": 4.3,
                "feeDetails": {
                  
                },
                "parentId": "375477",
                "avgRatingString": "4.3",
                "totalRatingsString": "1.0K+",
                "sla": {
                  "deliveryTime": 41,
                  "minDeliveryTime": 40,
                  "maxDeliveryTime": 45,
                  "lastMileTravel": 9.9,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "RAIN_MODE_NONE",
                  "slaString": "40-45 MINS",
                  "lastMileTravelString": "9.9 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "opened": true,
                  "restaurantClosedMeta": {
                    
                  }
                },
                "badges": {
                  
                },
                "aggregatedDiscountInfoV3": {
                  "header": "70% OFF",
                  "subHeader": "UPTO ₹140",
                  "logoCtx": {
                    "text": "BENEFITS"
                  }
                },
                "ratingSlab": "RATING_SLAB_5",
                "orderabilityCommunication": {
                  "title": {
                    
                  },
                  "subTitle": {
                    
                  },
                  "message": {
                    
                  },
                  "customIcon": {
                    
                  },
                  "commsStyling": {
                    
                  }
                },
                "cartOrderabilityNudgeBanner": {
                  "parameters": {
                    
                  },
                  "presentation": {
                    
                  }
                },
                "externalRatings": {
                  "aggregatedRating": {
                    "rating": "4.0",
                    "ratingCount": "204"
                  },
                  "source": "GOOGLE",
                  "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                "featuredSectionInfo": {
                  "sectionTitle": "More"
                },
                "showEoOffer": true,
                "priceComparisonComms": {
                  
                }
              },
              "analytics": {
                "screenName": "explore",
                "context": "{\"tid\":\"667033fd-f6c3-a6c2-4c3c-2e24a0547493\",\"grid\":\"fb89fd69-3f92-43ab-83db-d6fc590d2787\",\"queryUniqueId\":\"dddaf861-9ba0-e0ca-7184-fadc826cfe3c\",\"query\":\"Chinese\"}",
                "objectValue": "628530",
                "impressionObjectName": "impression-restaurant",
                "clickObjectName": "click-restaurant"
              },
              "ctaWithParams": {
                "link": "swiggy://menu",
                "type": "DEEPLINK",
                "params": {
                  "sourceRequestId": "00000000000000000000000000000000",
                  "qrEnabled": "false",
                  "restaurant_id": "628530",
                  "query": "Chinese",
                  "sourceSessionId": "s760c95c9a8-bbd2-493c-ba94-f978be8cd",
                  "source": "SEARCH",
                  "isSld": "false"
                }
              }
            }
          }
        }
      ]


const ResturantCard = (props) => {
    console.log(props);
    const {resData} = props;
    const {name, avgRating, cuisines, cloudinaryImageId, costForTwo, sla} = resData.card.card.info;
    return(
        <div className = "restro-card" style={styleCard}>
            <img className="restro-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/" + cloudinaryImageId} alt="Restro Logo" />
            <h3>{name}</h3>
            <h2>{avgRating} ⭐</h2>
            <h4>{cuisines.join(", ")}</h4>
            <h4> ₹ {costForTwo / 100} FOR TWO</h4>
            <h4>{sla.deliveryTime} minutes</h4>
        </div>
    );
}

const Body = () => {
    return(
        <div className="body">
            <div className="search"> Search </div>
            <div className="restro-container">
              {
                cardsArrObj.map((restro) => (
                   <ResturantCard key={restro.card.card.info.id} resData = {restro} />
                ))
              }
                {/* <ResturantCard resData = {cardsArrObj[0]} /> */}
                {/* <ResturantCard resName="KFC" cuisine="Fast Food"/> */}
            </div>
        </div>
    );
}

// Component composition - component inside component is known as composition of component. we can use component inside component like html tag.
const AppLayout = () => {
    return(
        <div className="app">
            <Header/>
            <Body/>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);