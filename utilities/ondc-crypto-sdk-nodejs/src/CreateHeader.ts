import {
    createAuthorizationHeader,
    createSigningString,
    isSignatureValid,
    signMessage,
  } from "./utility/index";
  
   const  exportmessage = {
    catalog: {
      "bpp/descriptor": {
        images: [""],
        name: "Smann",
        symbol: "SmannLogoURL",
        long_desc: "Online retail service provider",
        short_desc: "Online retail service provider",
      },
      "bpp/fulfillments": [
        {
          id: "1",
          type: "Delivery",
        },
        {
          id: "2",
          type: "Self-Pickup",
        },
      ],
      "bpp/providers": [
        {
          categories: [
            {
              descriptor: {
                images: [
                  "https://d32jc9rx98ldq0.cloudfront.net/staging/mobile-app-images/categories/1678701696160size3.1-01(1).jpg",
                ],
                name: "All Combos",
                long_desc: "",
                short_desc: "",
              },
              id: "e92efefbb9cf",
              tags: [
                {
                  code: "type",
                  list: [
                    {
                      code: "type",
                      value: "variant_group",
                    },
                  ],
                },
                {
                  code: "timing",
                  list: [
                    {
                      code: "day_from",
                      value: "1",
                    },
                    {
                      code: "day_to",
                      value: "5",
                    },
                    {
                      code: "time_from",
                      value: "0830",
                    },
                    {
                      code: "time_to",
                      value: "2100",
                    },
                  ],
                },
                {
                  code: "display",
                  list: [
                    {
                      code: "rank",
                      value: "1",
                    },
                  ],
                },
              ],
            },
            {
              descriptor: {
                images: [
                  "https://d32jc9rx98ldq0.cloudfront.net/staging/mobile-app-images/categories/1680692625408beverage.jpg",
                ],
                name: "Beverage",
                long_desc: "",
                short_desc: "",
              },
              id: "e92efefbb9d2",
              tags: [
                {
                  code: "type",
                  list: [
                    {
                      code: "type",
                      value: "variant_group",
                    },
                  ],
                },
                {
                  code: "timing",
                  list: [
                    {
                      code: "day_from",
                      value: "1",
                    },
                    {
                      code: "day_to",
                      value: "5",
                    },
                    {
                      code: "time_from",
                      value: "0830",
                    },
                    {
                      code: "time_to",
                      value: "2100",
                    },
                  ],
                },
                {
                  code: "display",
                  list: [
                    {
                      code: "rank",
                      value: "2",
                    },
                  ],
                },
              ],
            },
            {
              descriptor: {
                images: [
                  "https://d32jc9rx98ldq0.cloudfront.net/staging/vendor/NjU5ZWZjNjYzZjU1NGMwMTAwMzM0ZjZh/store/images/inventory/1704918674249image_cropper_1704918662571.jpg",
                ],
                name: "Veg Thali",
                long_desc: "",
                short_desc: "",
              },
              id: "4c0100334fb9",
              tags: [
                {
                  code: "type",
                  list: [
                    {
                      code: "type",
                      value: "variant_group",
                    },
                  ],
                },
                {
                  code: "timing",
                  list: [
                    {
                      code: "day_from",
                      value: "1",
                    },
                    {
                      code: "day_to",
                      value: "5",
                    },
                    {
                      code: "time_from",
                      value: "0830",
                    },
                    {
                      code: "time_to",
                      value: "2100",
                    },
                  ],
                },
                {
                  code: "display",
                  list: [
                    {
                      code: "rank",
                      value: "3",
                    },
                  ],
                },
              ],
            },
          ],
          descriptor: {
            images: [
              "https://d32jc9rx98ldq0.cloudfront.net/staging/vendor/NjU5ZWZjNjYzZjU1NGMwMTAwMzM0ZjZh/store/images/1704918608193image_cropper_1704918600499.jpg",
              "https://d32jc9rx98ldq0.cloudfront.net/staging/vendor/NjU5ZWZjNjYzZjU1NGMwMTAwMzM0ZjZh/store/images/1704918608417image_cropper_1704918601912.jpg",
              "https://d32jc9rx98ldq0.cloudfront.net/staging/vendor/NjU5ZWZjNjYzZjU1NGMwMTAwMzM0ZjZh/store/images/1704918608643image_cropper_1704918602763.jpg",
              "https://d32jc9rx98ldq0.cloudfront.net/staging/vendor/NjU5ZWZjNjYzZjU1NGMwMTAwMzM0ZjZh/store/images/1704918608858image_cropper_1704918603684.jpg",
              "https://d32jc9rx98ldq0.cloudfront.net/staging/vendor/NjU5ZWZjNjYzZjU1NGMwMTAwMzM0ZjZh/store/images/1704918609198image_cropper_1704918604540.jpg",
            ],
            name: "Ondc cittack odisa",
            symbol:
              "https://d32jc9rx98ldq0.cloudfront.net/staging/vendor/NjU5ZWZjNjYzZjU1NGMwMTAwMzM0ZjZh/store/images/1704918607964image_cropper_1704918587115.jpg",
            long_desc: "",
            short_desc: "Ondc cittack odisa Ondc cittack odisa",
          },
          fulfillments: [
            {
              contact: {
                email: "shubham.jawkar94@gmail.com",
                phone: "9999998033",
              },
              id: "F1",
              type: "Self-Pickup",
            },
          ],
          id: "659efc663f554c0100334f6a",
          items: [
            {
              descriptor: {
                code: "",
                images: [
                  "https://d32jc9rx98ldq0.cloudfront.net/staging/mobile-app-images/categories/1680692651945water.jpg",
                ],
                name: "Water",
                symbol: "",
                long_desc: "",
                short_desc: "",
              },
              id: "642bb3c9a5e1e92efefbb9d5",
              price: {
                currency: "INR",
                value: "0.0",
                maximum_value: "0.0",
              },
              quantity: {
                unitized: {
                  measure: {
                    unit: "litre",
                    value: "1",
                  },
                },
                available: {
                  count: "99",
                },
                maximum: {
                  count: "1",
                },
              },
              tags: [
                {
                  code: "type",
                  list: [
                    {
                      code: "type",
                      value: "variant_group",
                    },
                  ],
                },
                {
                  code: "timing",
                  list: [
                    {
                      code: "day_from",
                      value: "1",
                    },
                    {
                      code: "day_to",
                      value: "5",
                    },
                    {
                      code: "time_from",
                      value: "0830",
                    },
                    {
                      code: "time_to",
                      value: "2100",
                    },
                  ],
                },
                {
                  code: "display",
                  list: [
                    {
                      code: "rank",
                      value: "1",
                    },
                  ],
                },
              ],
              time: {
                days: "1,2,3,4,5,6,7",
                label: "disable",
                range: {
                  end: "1530",
                  start: "30",
                },
                schedule: {
                  frequency: "PT4H",
                  holidays: [],
                  times: ["1100", "1900"],
                },
                timestamp: "2024-01-11T02:51:53.652Z",
              },
              category_id: "F&B",
              fulfillment_id: "1",
              location_id: "L1",
              "@ondc/org/available_on_cod": true,
              "@ondc/org/cancellable": true,
              "@ondc/org/contact_details_consumer_care":
                "Smann , contactus@smann.in, 7276725802",
              "@ondc/org/return_window": "P7D",
              "@ondc/org/returnable": true,
              "@ondc/org/seller_pickup_return": false,
              "@ondc/org/time_to_ship": "PT45M",
              parent_item_id: "e92efefbb9d3",
            },
            {
              descriptor: {
                code: "",
                images: [
                  "https://d32jc9rx98ldq0.cloudfront.net/staging/vendor/NjU5ZWZjNjYzZjU1NGMwMTAwMzM0ZjZh/store/images/inventory/1704918717527image_cropper_1704918687017.jpg",
                ],
                name: "puran poli thali",
                symbol: "",
                long_desc: "",
                short_desc: "1",
              },
              id: "659efebd3f554c0100334fbc",
              price: {
                currency: "INR",
                value: "200.0",
                maximum_value: "200.0",
              },
              quantity: {
                unitized: {
                  measure: {
                    unit: "unit",
                    value: "2.0",
                  },
                },
                available: {
                  count: "99",
                },
                maximum: {
                  count: "1",
                },
              },
              tags: [
                {
                  code: "type",
                  list: [
                    {
                      code: "type",
                      value: "variant_group",
                    },
                  ],
                },
                {
                  code: "timing",
                  list: [
                    {
                      code: "day_from",
                      value: "1",
                    },
                    {
                      code: "day_to",
                      value: "5",
                    },
                    {
                      code: "time_from",
                      value: "0830",
                    },
                    {
                      code: "time_to",
                      value: "2100",
                    },
                  ],
                },
                {
                  code: "display",
                  list: [
                    {
                      code: "rank",
                      value: "2",
                    },
                  ],
                },
              ],
              time: {
                days: "1,2,3,4,5,6,7",
                label: "disable",
                range: {
                  end: "1530",
                  start: "30",
                },
                schedule: {
                  frequency: "PT4H",
                  holidays: [],
                  times: ["1100", "1900"],
                },
                timestamp: "2024-01-11T02:51:53.652Z",
              },
              category_id: "F&B",
              fulfillment_id: "1",
              location_id: "L1",
              "@ondc/org/available_on_cod": true,
              "@ondc/org/cancellable": true,
              "@ondc/org/contact_details_consumer_care":
                "Smann , contactus@smann.in, 7276725802",
              "@ondc/org/return_window": "P7D",
              "@ondc/org/returnable": true,
              "@ondc/org/seller_pickup_return": false,
              "@ondc/org/time_to_ship": "PT45M",
              parent_item_id: "4c0100334fba",
            },
          ],
          locations: [
            {
              address: {
                city: "Cuttack",
                door: "Ondc",
                locality: "Cuttack",
                name: "Ondc cittack odisa",
                state: "OR",
                street: "Siba Bazar",
                area_code: "753001",
              },
              circle: {
                gps: "20.462521,85.882989",
                radius: {
                  unit: "km",
                  value: "16",
                },
              },
              gps: "20.462521,85.882989",
              id: "L1",
              time: {
                days: "1,2,3,4,5,6,7",
                label: "disable",
                range: {
                  end: "1530",
                  start: "30",
                },
                schedule: {
                  holidays: [],
                },
                timestamp: "2024-01-11T02:51:53.577Z",
              },
            },
          ],
          tags: [
            {
              code: "serviceability",
              list: [
                {
                  code: "location",
                  value: "L1",
                },
                {
                  code: "category",
                  value: "F&B",
                },
                {
                  code: "type",
                  value: "12",
                },
                {
                  code: "val",
                  value: "IND",
                },
                {
                  code: "unit",
                  value: "country",
                },
              ],
            },
          ],
          time: {
            days: "1,2,3,4,5,6,7",
            label: "disable",
            range: {
              end: "1530",
              start: "30",
            },
            schedule: {
              holidays: [],
            },
            timestamp: "2024-01-11T02:51:51.562Z",
          },
          ttl: "PT30S",
          "@ondc/org/fssai_license_no": "11023586536808",
        },
      ],
    },
  };
  
   const privateKey ="a5zQle58BU5/7qxERzjeGONLBgg0sWFVZgq+GQuw2VcVW5/0IDz8POZSIlOwJC1CKNgKcp03U+7at5szuHkMhw==";
  
   const publicKey ="lPetySkn0oCUkj02pq3Hk7iNtM8/+Hf+V7jJwOcKHSk="
  
   const publicKey2 ="FVuf9CA8/DzmUiJTsCQtQijYCnKdN1Pu2rebM7h5DIc="
  
   const newContextBody={
    "action": "on_search",
    "city": "std:0671",
    "country": "IND",
    "domain": "ONDC:RET11",
    "key": "MCowBQYDK2VuAyEAHDklkxxsQN2ubcPVnQYUI/VjgElW07OQecpuzHtfUTE=",
    "timestamp": "2024-01-15T09:59:31.291Z",
    "ttl": "PT30S",
    "bap_id": "ref-app-buyer-staging-v2.ondc.org",
    "bap_uri": "https://ref-app-buyer-staging-v2.ondc.org/protocol/v1",
    "bpp_id": "staging.smann.in",
    "bpp_uri": "https://staging.smann.in/ondc_vendor",
    "core_version": "1.2.0",
    "message_id": "e7c187c2-c750-4310-b453-eaf97944d4c5",
    "transaction_id": "6daec727-06b6-46d8-8f8c-0f60fe2dcd6e"
}

  
   const exportmessageheadervalid={
    "catalog": {
        "bpp/descriptor": {
            "images": [
                ""
            ],
            "name": "Smann",
            "symbol": "SmannLogoURL",
            "long_desc": "Online retail service provider",
            "short_desc": "Online retail service provider"
        },
        "bpp/fulfillments": [
            {
                "id": "1",
                "type": "Delivery"
            },
            {
                "id": "2",
                "type": "Self-Pickup"
            }
        ],
        "bpp/providers": [
            {
                "categories": [
                    {
                        "descriptor": {
                            "images": [
                                "https://d32jc9rx98ldq0.cloudfront.net/staging/mobile-app-images/categories/1678701696160size3.1-01(1).jpg"
                            ],
                            "name": "All Combos",
                            "long_desc": "",
                            "short_desc": ""
                        },
                        "id": "e92efefbb9cf",
                        "tags": [
                            {
                                "code": "type",
                                "list": [
                                    {
                                        "code": "type",
                                        "value": "variant_group"
                                    }
                                ]
                            },
                            {
                                "code": "timing",
                                "list": [
                                    {
                                        "code": "day_from",
                                        "value": "1"
                                    },
                                    {
                                        "code": "day_to",
                                        "value": "5"
                                    },
                                    {
                                        "code": "time_from",
                                        "value": "0830"
                                    },
                                    {
                                        "code": "time_to",
                                        "value": "2100"
                                    }
                                ]
                            },
                            {
                                "code": "display",
                                "list": [
                                    {
                                        "code": "rank",
                                        "value": "1"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "descriptor": {
                            "images": [
                                "https://d32jc9rx98ldq0.cloudfront.net/staging/mobile-app-images/categories/1680692625408beverage.jpg"
                            ],
                            "name": "Beverage",
                            "long_desc": "",
                            "short_desc": ""
                        },
                        "id": "e92efefbb9d2",
                        "tags": [
                            {
                                "code": "type",
                                "list": [
                                    {
                                        "code": "type",
                                        "value": "variant_group"
                                    }
                                ]
                            },
                            {
                                "code": "timing",
                                "list": [
                                    {
                                        "code": "day_from",
                                        "value": "1"
                                    },
                                    {
                                        "code": "day_to",
                                        "value": "5"
                                    },
                                    {
                                        "code": "time_from",
                                        "value": "0830"
                                    },
                                    {
                                        "code": "time_to",
                                        "value": "2100"
                                    }
                                ]
                            },
                            {
                                "code": "display",
                                "list": [
                                    {
                                        "code": "rank",
                                        "value": "2"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "descriptor": {
                            "images": [
                                "https://d32jc9rx98ldq0.cloudfront.net/staging/vendor/NjU5ZWZjNjYzZjU1NGMwMTAwMzM0ZjZh/store/images/inventory/1704918674249image_cropper_1704918662571.jpg"
                            ],
                            "name": "Veg Thali",
                            "long_desc": "",
                            "short_desc": ""
                        },
                        "id": "4c0100334fb9",
                        "tags": [
                            {
                                "code": "type",
                                "list": [
                                    {
                                        "code": "type",
                                        "value": "variant_group"
                                    }
                                ]
                            },
                            {
                                "code": "timing",
                                "list": [
                                    {
                                        "code": "day_from",
                                        "value": "1"
                                    },
                                    {
                                        "code": "day_to",
                                        "value": "5"
                                    },
                                    {
                                        "code": "time_from",
                                        "value": "0830"
                                    },
                                    {
                                        "code": "time_to",
                                        "value": "2100"
                                    }
                                ]
                            },
                            {
                                "code": "display",
                                "list": [
                                    {
                                        "code": "rank",
                                        "value": "3"
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "descriptor": {
                    "images": [
                        "https://d32jc9rx98ldq0.cloudfront.net/staging/vendor/NjU5ZWZjNjYzZjU1NGMwMTAwMzM0ZjZh/store/images/1704918608193image_cropper_1704918600499.jpg",
                        "https://d32jc9rx98ldq0.cloudfront.net/staging/vendor/NjU5ZWZjNjYzZjU1NGMwMTAwMzM0ZjZh/store/images/1704918608417image_cropper_1704918601912.jpg",
                        "https://d32jc9rx98ldq0.cloudfront.net/staging/vendor/NjU5ZWZjNjYzZjU1NGMwMTAwMzM0ZjZh/store/images/1704918608643image_cropper_1704918602763.jpg",
                        "https://d32jc9rx98ldq0.cloudfront.net/staging/vendor/NjU5ZWZjNjYzZjU1NGMwMTAwMzM0ZjZh/store/images/1704918608858image_cropper_1704918603684.jpg",
                        "https://d32jc9rx98ldq0.cloudfront.net/staging/vendor/NjU5ZWZjNjYzZjU1NGMwMTAwMzM0ZjZh/store/images/1704918609198image_cropper_1704918604540.jpg"
                    ],
                    "name": "Ondc cittack odisa",
                    "symbol": "https://d32jc9rx98ldq0.cloudfront.net/staging/vendor/NjU5ZWZjNjYzZjU1NGMwMTAwMzM0ZjZh/store/images/1704918607964image_cropper_1704918587115.jpg",
                    "long_desc": "",
                    "short_desc": "Ondc cittack odisa Ondc cittack odisa"
                },
                "fulfillments": [
                    {
                        "contact": {
                            "email": "shubham.jawkar94@gmail.com",
                            "phone": "9999998033"
                        },
                        "id": "F1",
                        "type": "Self-Pickup"
                    }
                ],
                "id": "659efc663f554c0100334f6a",
                "items": [
                    {
                        "descriptor": {
                            "code": "",
                            "images": [
                                "https://d32jc9rx98ldq0.cloudfront.net/staging/mobile-app-images/categories/1680692651945water.jpg"
                            ],
                            "name": "Water",
                            "symbol": "",
                            "long_desc": "",
                            "short_desc": ""
                        },
                        "id": "642bb3c9a5e1e92efefbb9d5",
                        "price": {
                            "currency": "INR",
                            "value": "0.0",
                            "maximum_value": "0.0"
                        },
                        "quantity": {
                            "unitized": {
                                "measure": {
                                    "unit": "litre",
                                    "value": "1"
                                }
                            },
                            "available": {
                                "count": "99"
                            },
                            "maximum": {
                                "count": "1"
                            }
                        },
                        "tags": [
                            {
                                "code": "type",
                                "list": [
                                    {
                                        "code": "type",
                                        "value": "variant_group"
                                    }
                                ]
                            },
                            {
                                "code": "timing",
                                "list": [
                                    {
                                        "code": "day_from",
                                        "value": "1"
                                    },
                                    {
                                        "code": "day_to",
                                        "value": "5"
                                    },
                                    {
                                        "code": "time_from",
                                        "value": "0830"
                                    },
                                    {
                                        "code": "time_to",
                                        "value": "2100"
                                    }
                                ]
                            },
                            {
                                "code": "display",
                                "list": [
                                    {
                                        "code": "rank",
                                        "value": "1"
                                    }
                                ]
                            }
                        ],
                        "time": {
                            "days": "1,2,3,4,5,6,7",
                            "label": "disable",
                            "range": {
                                "end": "1530",
                                "start": "30"
                            },
                            "schedule": {
                                "frequency": "PT4H",
                                "holidays": [],
                                "times": [
                                    "1100",
                                    "1900"
                                ]
                            },
                            "timestamp": "2024-01-15T09:59:33.429Z"
                        },
                        "category_id": "F&B",
                        "fulfillment_id": "1",
                        "location_id": "L1",
                        "@ondc/org/available_on_cod": true,
                        "@ondc/org/cancellable": true,
                        "@ondc/org/contact_details_consumer_care": "Smann , contactus@smann.in, 7276725802",
                        "@ondc/org/return_window": "P7D",
                        "@ondc/org/returnable": true,
                        "@ondc/org/seller_pickup_return": false,
                        "@ondc/org/time_to_ship": "PT45M",
                        "parent_item_id": "e92efefbb9d3"
                    },
                    {
                        "descriptor": {
                            "code": "",
                            "images": [
                                "https://d32jc9rx98ldq0.cloudfront.net/staging/vendor/NjU5ZWZjNjYzZjU1NGMwMTAwMzM0ZjZh/store/images/inventory/1704918717527image_cropper_1704918687017.jpg"
                            ],
                            "name": "puran poli thali",
                            "symbol": "",
                            "long_desc": "",
                            "short_desc": "1"
                        },
                        "id": "659efebd3f554c0100334fbc",
                        "price": {
                            "currency": "INR",
                            "value": "200.0",
                            "maximum_value": "200.0"
                        },
                        "quantity": {
                            "unitized": {
                                "measure": {
                                    "unit": "unit",
                                    "value": "2.0"
                                }
                            },
                            "available": {
                                "count": "99"
                            },
                            "maximum": {
                                "count": "1"
                            }
                        },
                        "tags": [
                            {
                                "code": "type",
                                "list": [
                                    {
                                        "code": "type",
                                        "value": "variant_group"
                                    }
                                ]
                            },
                            {
                                "code": "timing",
                                "list": [
                                    {
                                        "code": "day_from",
                                        "value": "1"
                                    },
                                    {
                                        "code": "day_to",
                                        "value": "5"
                                    },
                                    {
                                        "code": "time_from",
                                        "value": "0830"
                                    },
                                    {
                                        "code": "time_to",
                                        "value": "2100"
                                    }
                                ]
                            },
                            {
                                "code": "display",
                                "list": [
                                    {
                                        "code": "rank",
                                        "value": "2"
                                    }
                                ]
                            }
                        ],
                        "time": {
                            "days": "1,2,3,4,5,6,7",
                            "label": "disable",
                            "range": {
                                "end": "1530",
                                "start": "30"
                            },
                            "schedule": {
                                "frequency": "PT4H",
                                "holidays": [],
                                "times": [
                                    "1100",
                                    "1900"
                                ]
                            },
                            "timestamp": "2024-01-15T09:59:33.431Z"
                        },
                        "category_id": "F&B",
                        "fulfillment_id": "1",
                        "location_id": "L1",
                        "@ondc/org/available_on_cod": true,
                        "@ondc/org/cancellable": true,
                        "@ondc/org/contact_details_consumer_care": "Smann , contactus@smann.in, 7276725802",
                        "@ondc/org/return_window": "P7D",
                        "@ondc/org/returnable": true,
                        "@ondc/org/seller_pickup_return": false,
                        "@ondc/org/time_to_ship": "PT45M",
                        "parent_item_id": "4c0100334fba"
                    }
                ],
                "locations": [
                    {
                        "address": {
                            "city": "Cuttack",
                            "door": "Ondc",
                            "locality": "Cuttack",
                            "name": "Ondc cittack odisa",
                            "state": "OR",
                            "street": "Siba Bazar",
                            "area_code": "753001"
                        },
                        "circle": {
                            "gps": "20.462521,85.882989",
                            "radius": {
                                "unit": "km",
                                "value": "16"
                            }
                        },
                        "gps": "20.462521,85.882989",
                        "id": "L1",
                        "time": {
                            "days": "1,2,3,4,5,6,7",
                            "label": "disable",
                            "range": {
                                "end": "1530",
                                "start": "30"
                            },
                            "schedule": {
                                "holidays": []
                            },
                            "timestamp": "2024-01-15T09:59:33.348Z"
                        }
                    }
                ],
                "tags": [
                    {
                        "code": "serviceability",
                        "list": [
                            {
                                "code": "location",
                                "value": "L1"
                            },
                            {
                                "code": "category",
                                "value": "F&B"
                            },
                            {
                                "code": "type",
                                "value": "12"
                            },
                            {
                                "code": "val",
                                "value": "IND"
                            },
                            {
                                "code": "unit",
                                "value": "country"
                            }
                        ]
                    }
                ],
                "time": {
                    "days": "1,2,3,4,5,6,7",
                    "label": "disable",
                    "range": {
                        "end": "1530",
                        "start": "30"
                    },
                    "schedule": {
                        "holidays": []
                    },
                    "timestamp": "2024-01-15T09:59:31.291Z"
                },
                "ttl": "PT30S",
                "@ondc/org/fssai_license_no": "11023586536808"
            }
        ]
    }
}
  
  
  
  
  
  
  
  
 const main= () =>  {
    try {
      const header =  createAuthorizationHeader({
        body: { 
            context: newContextBody, message: exportmessageheadervalid
         },
        privateKey: privateKey,
        subscriberId: "staging.smann.in",
        subscriberUniqueKeyId: "3dfa7108-a09e-4054-84a2-77c0361a9c9d",
        // bapId:"ref-app-buyer-staging-v2.ondc.org",
        // bapUniqueKeyId:"3b7ff621-0f32-46b6-8b51-df1f36602d6b",
      })
      .then((response)=>{
        console.log("response",response)
      })
      .catch((error)=>{
        console.log(error)
      })
  
      console.log("header-->", header);
    } catch (error) {
      console.error("Error:", error);
    }
  }
  
  main();
  