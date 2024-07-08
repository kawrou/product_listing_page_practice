import {http, HttpResponse} from 'msw'; 

export const handlers = [
    http.get("https://jsainsburyplc.github.io/front-end-test/products.json", () => {
        return HttpResponse.json(apiData)
    })
]

const apiData = [
    {
      productId: "5493179",
      sku: "549/3179",
      title: "Russell Hobbs Pennine Illuminating S Steel Kettle 20444",
      price: 24.99,
      image: "https://media.4rgos.it/s/Argos/9805244_R_SET?w=110&h=130",
    },
    {
      productId: "4251824",
      sku: "425/1824",
      title: "Challenge White Desk Fan - 12 Inch",
      price: 14.99,
      image: "https://media.4rgos.it/s/Argos/4251824_R_SET?w=110&h=130",
    },
  ];
  