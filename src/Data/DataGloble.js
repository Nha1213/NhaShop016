import show1 from '../../public/show1.jpg';
import show2 from '../../public/show2.webp';
import show3 from '../../public/show3.jpg';
import Brompton1 from '../../public/Brompton/Brompton1.jpg';
import Brompton2 from '../../public/Brompton/Brompton2.jpg';
import Brompton3 from '../../public/Brompton/Brompton3.jpg';
import Brompton4 from '../../public/Brompton/Brompton4.jpg';
import Brompton5 from '../../public/Brompton/Brompton5.jpg';
import Brompton6 from '../../public/Brompton/Brompton6.webp';
import Brompton7 from '../../public/Brompton/Brompton7.webp';
import Brompton8 from '../../public/Brompton/Brompton8.jpg';
import Brompton9 from '../../public/Brompton/Brompton9.jpg';
import Brompton10 from '../../public/Brompton/Brompton10.jpg';
import Brompton11 from '../../public/Brompton/Brompton11.jpg';
import Brompton12 from '../../public/Brompton/Brompton12.jpg';
import Brompton13 from '../../public/Brompton/Brompton13.jpg';
import Brompton14 from '../../public/Brompton/Brompton14.jpg';
import Brompton15 from '../../public/Brompton/Brompton15.jpg';
import Brompton16 from '../../public/Brompton/Brompton16.jpg';
import Brompton17 from '../../public/Brompton/Brompton17.webp';
import Brompton18 from '../../public/Brompton/Brompton18.jpg';
import Brompton19 from '../../public/Brompton/Brompton19.jpg';
import Brompton20 from '../../public/Brompton/Brompton20.jpg';
import Brompton21 from '../../public/Brompton/Brompton21.jpg';
import Brompton22 from '../../public/Brompton/Brompton22.jpg';
import Brompton23 from '../../public/Brompton/Brompton23.jpg';
import Brompton24 from '../../public/Brompton/Brompton24.jpg';

import ebiikes1 from '../../public/ebikes/ebikes1.jpg';
import ebikes2 from '../../public/ebikes/ebikes2.webp';
import ebikes3 from '../../public/ebikes/ebikes3.jpg';
import ebikes4 from '../../public/ebikes/ebikes4.webp';

import montague1 from '../../public/montague/montague1.webp';

import Moultion1 from '../../public/Moulton/Moultion1.webp';
import Moultion2 from '../../public/Moulton/Moultion2.jpg';
import Moultion3 from '../../public/Moulton/Moultion3.jpg';
import Moultion4 from '../../public/Moulton/Moultion4.webp';
import Moultion5 from '../../public/Moulton/Moultion5.webp';

import tern1 from '../../public/Tern/tern1.webp';
import tern2 from '../../public/Tern/tern2.jpg';

import uniquebiles1 from '../../public/uniquebikes/uniquebiles1.jpg';
import uniquebiles2 from '../../public/uniquebikes/uniquebiles2.webp';
import uniquebiles3 from '../../public/uniquebikes/uniquebiles3.webp';
import uniquebiles4 from '../../public/uniquebikes/uniquebiles4.webp';
import uniquebiles5 from '../../public/uniquebikes/uniquebiles5.webp';
import uniquebiles6 from '../../public/uniquebikes/uniquebiles6.webp';
import { create } from 'zustand'


const useStore = create((set) => ({
    DataGloble: [
        // Brompton bikes
        {
            id: 1,
            image: show1,
            title: "Brompton",
            stock: "in stock",
            price: 2300.00,
            description: "Brompton x Tour de France C Line IN STOCK NOW!!"
        },
        {
            id: 2,
            image: show2,
            title: "Brompton",
            stock: "in stock",
            price: 104.50,
            description: "Brompton Schwalbe Marathon 16 Almotion Folding Tire Q102602"
        },
        {
            id: 3,
            image: show3,
            title: "Brompton",
            stock: "in stock",
            price: 3250.00,
            description: "Brompton P Line 12-Speed Mid-HB POP Lilac"
        },
        {
            id: 4,
            image: Brompton1,
            title: "Brompton",
            stock: "in stock",
            price: 2300.00,
            description: "Brompton x Tour de France C Line IN STOCK NOW!!"
        },
        {
            id: 5,
            image: Brompton2,
            title: "Brompton",
            stock: "in stock",
            price: 104.50,
            description: "Brompton Schwalbe Marathon 16 Almotion Folding Tire Q102602"
        },
        {
            id: 6,
            image: Brompton3,
            title: "Brompton",
            stock: "in stock",
            price: 3250.00,
            description: "Brompton P Line 12-Speed Mid-HB POP Lilac"
        },
        {
            id: 7,
            image: Brompton4,
            title: "Brompton",
            stock: "in stock",
            price: 2300.00,
            description: "Brompton x Tour de France C Line IN STOCK NOW!!"
        },
        {
            id: 8,
            image: Brompton5,
            title: "Brompton",
            stock: "in stock",
            price: 104.50,
            description: "Brompton Schwalbe Marathon 16 Almotion Folding Tire Q102602"
        },
        {
            id: 9,
            image: Brompton6,
            title: "Brompton",
            stock: "in stock",
            price: 3250.00,
            description: "Brompton P Line 12-Speed Mid-HB POP Lilac"
        },
        {
            id: 10,
            image: Brompton7,
            title: "Brompton",
            stock: "in stock",
            price: 2300.00,
            description: "Brompton x Tour de France C Line IN STOCK NOW!!"
        },
        {
            id: 11,
            image: Brompton8,
            title: "Brompton",
            stock: "in stock",
            price: 104.50,
            description: "Brompton Schwalbe Marathon 16 Almotion Folding Tire Q102602"
        },
        {
            id: 12,
            image: Brompton9,
            title: "Brompton",
            stock: "in stock",
            price: 3250.00,
            description: "Brompton P Line 12-Speed Mid-HB POP Lilac"
        },
        {
            id: 13,
            image: Brompton10,
            title: "Brompton",
            stock: "in stock",
            price: 2300.00,
            description: "Brompton x Tour de France C Line IN STOCK NOW!!"
        },
        {
            id: 14,
            image: Brompton11,
            title: "Brompton",
            stock: "in stock",
            price: 104.50,
            description: "Brompton Schwalbe Marathon 16 Almotion Folding Tire Q102602"
        },
        {
            id: 15,
            image: Brompton12,
            title: "Brompton",
            stock: "in stock",
            price: 3250.00,
            description: "Brompton P Line 12-Speed Mid-HB POP Lilac"
        },
        {
            id: 16,
            image: Brompton13,
            title: "Brompton",
            stock: "in stock",
            price: 2300.00,
            description: "Brompton x Tour de France C Line IN STOCK NOW!!"
        },
        {
            id: 17,
            image: Brompton14,
            title: "Brompton",
            stock: "in stock",
            price: 104.50,
            description: "Brompton Schwalbe Marathon 16 Almotion Folding Tire Q102602"
        },
        {
            id: 18,
            image: Brompton15,
            title: "Brompton",
            stock: "in stock",
            price: 3250.00,
            description: "Brompton P Line 12-Speed Mid-HB POP Lilac"
        },
        {
            id: 19,
            image: Brompton16,
            title: "Brompton",
            stock: "in stock",
            price: 2300.00,
            description: "Brompton x Tour de France C Line IN STOCK NOW!!"
        },
        {
            id: 20,
            image: Brompton17,
            title: "Brompton",
            stock: "in stock",
            price: 104.50,
            description: "Brompton Schwalbe Marathon 16 Almotion Folding Tire Q102602"
        },
        {
            id: 21,
            image: Brompton18,
            title: "Brompton",
            stock: "in stock",
            price: 3250.00,
            description: "Brompton P Line 12-Speed Mid-HB POP Lilac"
        },
        {
            id: 22,
            image: Brompton19,
            title: "Brompton",
            stock: "in stock",
            price: 2300.00,
            description: "Brompton x Tour de France C Line IN STOCK NOW!!"
        },
        {
            id: 23,
            image: Brompton20,
            title: "Brompton",
            stock: "in stock",
            price: 104.50,
            description: "Brompton Schwalbe Marathon 16 Almotion Folding Tire Q102602"
        },
        {
            id: 24,
            image: Brompton21,
            title: "Brompton",
            stock: "in stock",
            price: 3250.00,
            description: "Brompton P Line 12-Speed Mid-HB POP Lilac"
        },
        {
            id: 25,
            image: Brompton22,
            title: "Brompton",
            stock: "in stock",
            price: 2300.00,
            description: "Brompton x Tour de France C Line IN STOCK NOW!!"
        },
        {
            id: 26,
            image: Brompton23,
            title: "Brompton",
            stock: "in stock",
            price: 104.50,
            description: "Brompton Schwalbe Marathon 16 Almotion Folding Tire Q102602"
        },
        {
            id: 27,
            image: Brompton24,
            title: "Brompton",
            stock: "in stock",
            price: 3250.00,
            description: "Brompton P Line 12-Speed Mid-HB POP Lilac"
        },

        // ebikes 
        {
            id: 28,
            image: ebiikes1,
            title: "Ebike",
            stock: "in stock",
            price: 1500.00,
            description: "Ebike Model 1 - High Performance Electric Bike"
        },
        {
            id: 29,
            image: ebikes2,
            title: "Ebike",
            stock: "in stock",
            price: 1800.00,
            description: "Ebike Model 2 - Long Range Electric Bike"
        },
        {
            id: 30,
            image: ebikes3,
            title: "Ebike",
            stock: "in stock",
            price: 2000.00,
            description: "Ebike Model 3 - City Commuter Electric Bike"
        },
        {
            id: 31,
            image: ebikes4,
            title: "Ebike",
            stock: "in stock",
            price: 2200.00,
            description: "Ebike Model 4 - Off-Road Electric Bike"
        }

        // montague
        , {
            id: 32,
            image: montague1,
            title: "Montague",
            stock: "in stock",
            price: 1200.00,
            description: "Montague Paratrooper Pro Folding Bike"
        },

        // Moultion
        {
            id: 33,
            image: Moultion1,
            title: "Moulton",
            stock: "in stock",
            price: 2500.00,
            description: "Moulton TSR 9 Speed Folding Bike"
        },
        {
            id: 34,
            image: Moultion2,
            title: "Moulton",
            stock: "in stock",
            price: 2700.00,
            description: "Moulton AM Series Folding Bike"
        },
        {
            id: 35,
            image: Moultion3,
            title: "Moulton",
            stock: "in stock",
            price: 2900.00,
            description: "Moulton APB Series Folding Bike"
        },
        {
            id: 36,
            image: Moultion4,
            title: "Moulton",
            stock: "in stock",
            price: 3100.00,
            description: "Moulton New Series Folding Bike"
        },
        {
            id: 37,
            image: Moultion5,
            title: "Moulton",
            stock: "in stock",
            price: 3300.00,
            description: "Moulton Deluxe Series Folding Bike"
        },

        // tern 
        {
            id: 38,
            image: tern1,
            title: "Tern",
            stock: "in stock",
            price: 1400.00,
            description: "Tern Link D8 Folding Bike"
        },
        {
            id: 39,
            image: tern2,
            title: "Tern",
            stock: "in stock",
            price: 1600.00,
            description: "Tern Verge X11 Folding Bike"
        },

        // uniquebikes
        {
            id: 40,
            image: uniquebiles1,
            title: "Unique Bikes",
            stock: "in stock",
            price: 1100.00,
            description: "Unique Bikes Model 1 - Stylish Folding Bike"
        },
        {
            id: 41,
            image: uniquebiles2,
            title: "Unique Bikes",
            stock: "in stock",
            price: 1300.00,
            description: "Unique Bikes Model 2 - Compact Folding Bike"
        },
        {
            id: 42,
            image: uniquebiles3,
            title: "Unique Bikes",
            stock: "in stock",
            price: 1500.00,
            description: "Unique Bikes Model 3 - Lightweight Folding Bike"
        },
        {
            id: 43,
            image: uniquebiles4,
            title: "Unique Bikes",
            stock: "in stock",
            price: 1700.00,
            description: "Unique Bikes Model 4 - High-End Folding Bike"
        },
        {
            id: 44,
            image: uniquebiles5,
            title: "Unique Bikes",
            stock: "in stock",
            price: 1900.00,
            description: "Unique Bikes Model 5 - Performance Folding Bike"
        },
        {
            id: 45,
            image: uniquebiles6,
            title: "Unique Bikes",
            stock: "in stock",
            price: 2100.00,
            description: "Unique Bikes Model 6 - Premium Folding Bike"
        }
    ],

    SelectionCartItems: [],

    SetSelectionCartItems: (items) => set({ SelectionCartItems: items }),

    AddSelectionCartItem: (item) =>
        set((state) => ({
            SelectionCartItems: [...state.SelectionCartItems, item]
        })),
}));

export default useStore;    