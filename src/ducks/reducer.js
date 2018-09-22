//string constraints
//switch statements
//export action creators

const initialState = {
    propertyname: '',
    address: '',
    city: '',
    homestate: '',
    zip: '',
    mortgage: '',
    rent: '',
    propertyimage: ''
}

const UPDATE_PROPERTYNAME = "UPDATE_PROPERTYNAME";
const UPDATE_ADDRESS = "UPDATE_ADDRESS";
const UPDATE_CITY = "UPDATE_CITY";
const UPDATE_HOMESTATE = "UPDATE_HOMESTATE";
const UPDATE_ZIP = "UPDATE_ZIP";
const UPDATE_IMAGE = "UPDATE_IMAGE";
const UPDATE_MORTGAGE = "UPDATE_MORTGAGE";
const UPDATE_RENT = "UPDATE_RENT";
const CANCEL_WIZARD = "CANCEL_WIZARD"


export default function reducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_PROPERTYNAME:
            return Object.assign({}, state, { propertyname: action.payload });
        case UPDATE_ADDRESS:
            return Object.assign({}, state, { address: action.payload });
        case UPDATE_CITY:
            return Object.assign({}, state, { city: action.payload });
        case UPDATE_HOMESTATE:
            return Object.assign({}, state, { homestate: action.payload });
        case UPDATE_ZIP:
            return Object.assign({}, state, { zip: action.payload });
        case UPDATE_IMAGE:
            return Object.assign({}, state, { propertyimage: action.payload });
        case UPDATE_MORTGAGE:
            return Object.assign({}, state, { mortgage: action.payload });
        case UPDATE_RENT:
            return Object.assign({}, state, { rent: action.payload });
        case CANCEL_WIZARD:
            return Object.assign({}, {
                propertyname: action.payload,
                address: action.payload,
                city: action.payload,
                homestate: action.payload,
                zip: action.payload,
                mortgage: action.payload,
                rent: action.payload,
                propertyimage: action.payload
            });
        default: return state;
    }
}

export function updatePropertyName(propertyname) {
    return {
        type: UPDATE_PROPERTYNAME,
        payload: propertyname
    }
}

export function updateAddress(address) {
    return {
        type: UPDATE_ADDRESS,
        payload: address
    }
}

export function updateCity(city) {
    return {
        type: UPDATE_CITY,
        payload: city
    }
}

export function updateHomeState(homestate) {
    return {
        type: UPDATE_HOMESTATE,
        payload: homestate
    }
}

export function updateZip(zip) {
    return {
        type: UPDATE_ZIP,
        payload: zip
    }
}

export function updateImage(propertyimage) {
    return {
        type: UPDATE_IMAGE,
        payload: propertyimage
    }
}

export function updateMortgage(mortgage) {
    return {
        type: UPDATE_MORTGAGE,
        payload: mortgage
    }
}

export function updateRent(rent) {
    return {
        type: UPDATE_RENT,
        payload: rent
    }
}

export function cancelWizard(initialState) {
    return {
        type: CANCEL_WIZARD,
        payload: initialState
    }
}