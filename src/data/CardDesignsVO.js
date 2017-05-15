/*
**** Hard Coded Data for business card designs****
****Note****
****************************
Implement logic to get data from backend, construct designs object as below.
This object is used across pages. Should be constructed once only and stored
****************************
*/

export function getDesigns() {
  return designs;
}
 const designs = [
	{
		"_id": "12340a9096d0df3cc1a3a123",
    "theme": "Popular",
		"name": "GOLD GIFT SPARKLE",
    "totalQty": "6400",
    "denomRange":"$25-$3,000",
    "image": "https://web.aexp-static.com/Internet/US/Personal/Cardmember/AdditionalProductsAndServices/GiftCardsAndTravelersCheques/Images/bol/shopping/bc-gold-sparkle-small.png",
    "shippingFee":
    {
      "Expedited": "$8.95",
      "Rush": "$15.95"
    },
    "denomQtyFee": [
      {
        "denom":"$25",
        "qty": "1000",
        "purchaseFee": "$3.95"
      },
      {
        "denom":"$50",
        "qty": "1000",
        "purchaseFee": "$3.95"
      },
      {
        "denom":"$100",
        "qty": "1000",
        "purchaseFee": "$3.95"
      },
      {
        "denom":"$200",
        "qty": "1000",
        "purchaseFee": "$3.95"
      },
      {
        "denom":"$500",
        "qty": "1000",
        "purchaseFee": "$3.95"
      },
      {
        "denom":"$1000",
        "qty": "600",
        "purchaseFee": "$3.95"
      },
      {
        "denom":"$2000",
        "qty": "400",
        "purchaseFee": "$3.95"
      },
      {
        "denom":"$3000",
        "qty": "400",
        "purchaseFee": "$3.95"
      }
    ]
	},

	{
		"_id": "12340a90c179cad39d155108",
  	"theme": "Popular",
    "name": "ORIGINAL GOLD",
    "totalQty": "6400",
    "denomRange":"$25-$3,000",
    "image": "https://web.aexp-static.com/Internet/US/Personal/Cardmember/AdditionalProductsAndServices/GiftCardsAndTravelersCheques/Images/bol/shopping/bc-gold-gift-box-small.png",
    "shippingFee":
    {
      "Expedited": "$8.95",
      "Rush": "$15.95"
    },
    "denomQtyFee": [
      {
        "denom":"$25",
        "qty": "1000",
        "purchaseFee": "$3.95"
      },
      {
        "denom":"$50",
        "qty": "1000",
        "purchaseFee": "$3.95"
      },
      {
        "denom":"$100",
        "qty": "1000",
        "purchaseFee": "$3.95"
      },
      {
        "denom":"$200",
        "qty": "1000",
        "purchaseFee": "$3.95"
      },
      {
        "denom":"$500",
        "qty": "1000",
        "purchaseFee": "$3.95"
      },
      {
        "denom":"$1000",
        "qty": "600",
        "purchaseFee": "$3.95"
      },
      {
        "denom":"$2000",
        "qty": "400",
        "purchaseFee": "$3.95"
      },
      {
        "denom":"$3000",
        "qty": "400",
        "purchaseFee": "$3.95"
      }
    ]
	},

	{
		"_id": "12340a90bc13f2e6c097438b",
    "theme": "Birthday",
    "name": "GOLD RIBBON BIRTHDAY",
    "totalQty": "4600",
    "denomRange":"$25-$1,000",
    "image": "https://web.aexp-static.com/Internet/US/Personal/Cardmember/AdditionalProductsAndServices/GiftCardsAndTravelersCheques/Images/bol/shopping/bc-gold-ribbon-small.png",
    "shippingFee":
    {
      "Expedited": "$8.95",
      "Rush": "$15.95"
    },
    "denomQtyFee": [
      {
        "denom":"$25",
        "qty": "1000",
        "purchaseFee": "$3.95"
      },
      {
        "denom":"$100",
        "qty": "1000",
        "purchaseFee": "$3.95"
      },
      {
        "denom":"$200",
        "qty": "1000",
        "purchaseFee": "$3.95"
      },
      {
        "denom":"$500",
        "qty": "1000",
        "purchaseFee": "$3.95"
      },
      {
        "denom":"$1000",
        "qty": "600",
        "purchaseFee": "$3.95"
      }
    ]
	},

	{
		"_id": "12340a9026b9ddcb24c1736e",
    "theme": "Holiday",
    "name": "LIMITED EDITION FESTIVE",
    "totalQty": "4000",
    "denomRange":"$25-$200",
    "image": "https://web.aexp-static.com/Internet/US/Personal/Cardmember/AdditionalProductsAndServices/GiftCardsAndTravelersCheques/Images/bol/shopping/bc-red-small.png",
    "shippingFee":
    {
      "Expedited": "$8.95",
      "Rush": "$15.95"
    },
    "denomQtyFee": [
      {
        "denom":"$25",
        "qty": "1000",
        "purchaseFee": "$3.95"
      },
      {
        "denom":"$50",
        "qty": "1000",
        "purchaseFee": "$3.95"
      },
      {
        "denom":"$100",
        "qty": "1000",
        "purchaseFee": "$3.95"
      },
      {
        "denom":"$200",
        "qty": "1000",
        "purchaseFee": "$3.95"
      }
    ]
	},

	{
		"_id": "12340a90d419cf3afa39caae",
    "theme": "Congratulations",
    "name": "CONGRATULATIONS",
    "totalQty": "3300",
    "denomRange":"$25-$500",
    "image": "https://web.aexp-static.com/Internet/US/Personal/Cardmember/AdditionalProductsAndServices/GiftCardsAndTravelersCheques/Images/bol/shopping/bc-congratulations-small.png",
    "shippingFee":
    {
      "Expedited": "$8.95",
      "Rush": "$15.95"
    },
    "denomQtyFee": [
      {
        "denom":"$25",
        "qty": "1000",
        "purchaseFee": "$3.95"
      },
      {
        "denom":"$50",
        "qty": "1000",
        "purchaseFee": "$3.95"
      },
      {
        "denom":"$100",
        "qty": "1000",
        "purchaseFee": "$3.95"
      },
      {
        "denom":"$500",
        "qty": "300",
        "purchaseFee": "$3.95"
      }
    ]
	},

	{
		"_id": "12340a907068e8e3a08a9276",
    "theme": "Thank You",
    "name": "THANK YOU (CONFETTI)",
    "totalQty": "3000",
    "denomRange":"$25-$100",
    "image": "https://web.aexp-static.com/Internet/US/Personal/Cardmember/AdditionalProductsAndServices/GiftCardsAndTravelersCheques/Images/bol/shopping/bc-thank-you-small.png",
    "shippingFee":
    {
      "Expedited": "$8.95",
      "Rush": "$15.95"
    },
    "denomQtyFee": [
      {
        "denom":"$25",
        "qty": "1000",
        "purchaseFee": "$3.95"
      },
      {
        "denom":"$50",
        "qty": "1000",
        "purchaseFee": "$3.95"
      },
      {
        "denom":"$100",
        "qty": "1000",
        "purchaseFee": "$3.95"
      }
    ]
	}
];
