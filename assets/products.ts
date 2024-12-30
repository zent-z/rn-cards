import { Product } from "./types/product";

export const PRODUCTS: Product[] = [
    {
        id: 1,
        title: "The fox",
        slug: "the-fox",
        heroImage: require("../assets/characters/the-fox.png"),
        imagesUrl: [require("../assets/characters/the-fox.png")],
        price: 899.99,
        category: {
            imageUrl: require("../assets/characters/box_img.webp"),
            name: "The Other One",
            slug: "the other one",
        },
        maxQuantity: 5,
    },
    {
        id: 2,
        title: "The monster",
        slug: "the-monster",
        heroImage: require("../assets/characters/the-monster.png"),
        imagesUrl: [require("../assets/characters/the-monster.png")],
        price: 899.99,
        category: {
            imageUrl: require("../assets/characters/box_img.webp"),
            name: "The Other One",
            slug: "the other one",
        },
        maxQuantity: 5,
    },
    {
        id: 3,
        title: "Amnesia",
        slug: "amnesia",
        heroImage: require("../assets/characters/amnesia.png"),
        imagesUrl: [require("../assets/characters/amnesia.png")],
        price: 899.99,
        category: {
            imageUrl: require("../assets/characters/box_img.webp"),
            name: "The Other One",
            slug: "the other one",
        },
        maxQuantity: 5,
    },
    {
        id: 4,
        title: "Cuckoo",
        slug: "cuckoo",
        heroImage: require("../assets/characters/cuckoo.png"),
        imagesUrl: [require("../assets/characters/cuckoo.png")],
        price: 899.99,
        category: {
            imageUrl: require("../assets/characters/box_img.webp"),
            name: "The Other One",
            slug: "the other one",
        },
        maxQuantity: 5,
    },
    {
        id: 5,
        title: "Staring",
        slug: "staring",
        heroImage: require("../assets/characters/staring.png"),
        imagesUrl: [require("../assets/characters/staring.png")],
        price: 899.99,
        category: {
            imageUrl: require("../assets/characters/box_img.webp"),
            name: "The Other One",
            slug: "the other one",
        },
        maxQuantity: 5,
    },
    {
        id: 6,
        title: "Nowhere Safe",
        slug: "nowhere-safe",
        heroImage: require("../assets/characters/nowhere-safe.png"),
        imagesUrl: [require("../assets/characters/nowhere-safe.png")],
        price: 899.99,
        category: {
            imageUrl: require("../assets/characters/box_img.webp"),
            name: "The Other One",
            slug: "the other one",
        },
        maxQuantity: 5,
    },
    {
        id: 7,
        title: "Raving",
        slug: "raving",
        heroImage: require("../assets/characters/raving.png"),
        imagesUrl: [require("../assets/characters/raving.png")],
        price: 899.99,
        category: {
            imageUrl: require("../assets/characters/box_img.webp"),
            name: "The Other One",
            slug: "the other one",
        },
        maxQuantity: 5,
    },
    {
        id: 8,
        title: "Marionette",
        slug: "marrionette",
        heroImage: require("../assets/characters/marrionette.png"),
        imagesUrl: [require("../assets/characters/marrionette.png")],
        price: 899.99,
        category: {
            imageUrl: require("../assets/characters/box_img.webp"),
            name: "The Other One",
            slug: "the other one",
        },
        maxQuantity: 5,
    },
    {
        id: 9,
        title: "Vagrancy",
        slug: "vagrancy",
        heroImage: require("../assets/characters/vagrancy.png"),
        imagesUrl: [require("../assets/characters/vagrancy.png")],
        price: 899.99,
        category: {
            imageUrl: require("../assets/characters/box_img.webp"),
            name: "The Other One",
            slug: "the other one",
        },
        maxQuantity: 5,
    },
    {
        id: 10,
        title: "Being Alive",
        slug: "being-alive",
        heroImage: require("../assets/characters/being-alive.png"),
        imagesUrl: [require("../assets/characters/being-alive.png")],
        price: 899.99,
        category: {
            imageUrl: require("../assets/characters/box_img.webp"),
            name: "The Other One",
            slug: "the other one",
        },
        maxQuantity: 5,
    },
    {
        id: 11,
        title: "The Ghost",
        slug: "the-ghost",
        heroImage: require("../assets/characters/the-ghost.png"),
        imagesUrl: [require("../assets/characters/the-ghost.png")],
        price: 899.99,
        category: {
            imageUrl: require("../assets/characters/box_img.webp"),
            name: "The Other One",
            slug: "the other one",
        },
        maxQuantity: 5,
    },
    {
        id: 12,
        title: "The Crow",
        slug: "the-crow",
        heroImage: require("../assets/characters/the-crow.png"),
        imagesUrl: [require("../assets/characters/the-crow.png")],
        price: 899.99,
        category: {
            imageUrl: require("../assets/characters/box_img.webp"),
            name: "The Other One",
            slug: "the other one",
        },
        maxQuantity: 5,
    },
    {
        id: 13,
        title: "Dreaming",
        slug: "dreaming",
        heroImage: require("../assets/characters/dreaming.png"),
        imagesUrl: [require("../assets/characters/dreaming.png")],
        price: 899.99,
        category: {
            imageUrl: require("../assets/characters/box_img.webp"),
            name: "The Other One",
            slug: "the other one",
        },
        maxQuantity: 5,
    },
    {
        id: 14,
        title: "IPhone 15",
        slug: "i-phone-15",
        heroImage: require("../assets/images/i-phone-1.jpg"),
        imagesUrl: [
            require("../assets/images/i-phone-2.jpg"),
            require("../assets/images/i-phone-3.jpg"),
        ],
        price: 999.99,
        category: {
            imageUrl: require("../assets/images/i-phone-1.jpg"),
            name: "Phones",
            slug: "phones",
        },
        maxQuantity: 10,
    },
    {
        id: 15,
        title: "Samsung Galaxy S21",
        slug: "samsung-galaxy-s21",
        heroImage: require("../assets/images/samsung-1.jpg"),
        imagesUrl: [
            require("../assets/images/samsung-1.jpg"),
            require("../assets/images/samsung-2.jpg"),
        ],
        price: 799.99,
        category: {
            imageUrl: require("../assets/images/i-phone-1.jpg"),
            name: "Phones",
            slug: "phones",
        },
        maxQuantity: 12,
    },
    {
        id: 16,
        title: "Headset",
        slug: "headset",
        heroImage: require("../assets/images/head-set-1.jpg"),
        imagesUrl: [
            require("../assets/images/head-set-1.jpg"),
            require("../assets/images/head-set-2.jpg"),
        ],
        price: 499.99,
        category: {
            imageUrl: require("../assets/images/head-set-1.jpg"),
            name: "Accessories",
            slug: "accessories",
        },
        maxQuantity: 15,
    },
    {
        id: 17,
        title: "PlayStation 5",
        slug: "playstation-5",
        heroImage: require("../assets/images/ps-5-1.jpg"),
        imagesUrl: [
            require("../assets/images/ps-5-1.jpg"),
            require("../assets/images/ps-5-2.jpg"),
            require("../assets/images/ps-5-3.jpg"),
        ],
        price: 699.99,
        category: {
            imageUrl: require("../assets/images/ps-5-1.jpg"),
            name: "Gaming",
            slug: "gaming",
        },
        maxQuantity: 3,
    },
    {
        id: 18,
        title: "Nintendo Switch",
        slug: "nintendo-switch",
        heroImage: require("../assets/images/nintendo-switch-1.jpg"),
        imagesUrl: [
            require("../assets/images/nintendo-switch-1.jpg"),
            require("../assets/images/nintendo-switch-2.jpg"),
        ],
        price: 299.99,
        category: {
            imageUrl: require("../assets/images/ps-5-1.jpg"),
            name: "Gaming",
            slug: "gaming",
        },
        maxQuantity: 8,
    },
    {
        id: 19,
        title: "Hiirono1",
        slug: "hirono1",
        heroImage: require("../assets/characters/hirono trial.png"),
        imagesUrl: [require("../assets/characters/hirono trial.png")],
        price: 899.99,
        category: {
            imageUrl: require("../assets/characters/box_img.webp"),
            name: "Pops",
            slug: "pops",
        },
        maxQuantity: 5,
    },
    {
        id: 20,
        title: "Hiirono2",
        slug: "hirono2",
        heroImage: require("../assets/characters/hirono trial.png"),
        imagesUrl: [require("../assets/characters/hirono trial.png")],
        price: 899.99,
        category: {
            imageUrl: require("../assets/characters/box_img.webp"),
            name: "Pops",
            slug: "pops",
        },
        maxQuantity: 5,
    },
    {
        id: 21,
        title: "Hiirono3",
        slug: "hirono3",
        heroImage: require("../assets/characters/hirono trial.png"),
        imagesUrl: [require("../assets/characters/hirono trial.png")],
        price: 899.99,
        category: {
            imageUrl: require("../assets/characters/box_img.webp"),
            name: "Pops",
            slug: "pops",
        },
        maxQuantity: 5,
    },
    {
        id: 22,
        title: "Hiirono4",
        slug: "hirono4",
        heroImage: require("../assets/characters/hirono trial.png"),
        imagesUrl: [require("../assets/characters/hirono trial.png")],
        price: 899.99,
        category: {
            imageUrl: require("../assets/characters/box_img.webp"),
            name: "Pops",
            slug: "pops",
        },
        maxQuantity: 5,
    },
    {
        id: 23,
        title: "png img",
        slug: "adventure-time",
        heroImage: require("../assets/characters/adventure-time.png"),
        imagesUrl: [require("../assets/characters/adventure-time.png")],
        price: 899.99,
        category: {
            imageUrl: require("../assets/characters/box_img.webp"),
            name: "Pops",
            slug: "pops",
        },
        maxQuantity: 5,
    },
];
