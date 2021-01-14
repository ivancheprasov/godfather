import * as types from "../const/actionTypes";

const initialState = {
    orders: [
        {
            description: "nice order",
            id: 69,
            cost: 420,
            income: 1488,
            lawyers_number: 1337,
            soldiers_number: 911
        },
        {
            description: "test order 2",
            id: 2,
            cost: 20,
            income: 30,
            lawyers_number: 7,
            soldiers_number: 1
        },
        {
            description: "test order 3",
            id: 3,
            cost: 40,
            income: 80,
            lawyers_number: 1,
            soldiers_number: 1
        },
    ],
    soldiers: [
        {
            name: "Terminator",
            id: 1,
            age: 59,
            family: "Corleone",
            is_busy: true
        },
        {
            name: "Robocop",
            id: 2,
            age: 32,
            family: "Tattalgia",
            is_busy: false
        }
    ]
};

export const data = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_ORDERS:
            return {...state, orders: action.payload};
        case types.SET_SOLDIERS:
            return {...state, soldiers: action.payload};
        default:
            return {...state};
    }
};