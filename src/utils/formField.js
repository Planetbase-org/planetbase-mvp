const CARD_PAYMENT_INPUT = [
    {
        name: 'cardNumber', 
        label: 'Card Number',
        type: 'text',
        placeholder: '1234 5678 1234 5678',
        required: true,
        validation: { "required": true, "minLength": 16, "maxLength": 16 },
        errorMessage: 'Please enter a valid card number'

    },
    {
        name: 'cardHolderName',
        label: 'Card Holder Name',
        type: 'text',
        placeholder: 'John Doe',
        required: true,
        validation: { "required": true, "minLength": 3, "maxLength": 20 },
        errorMessage: 'Please enter a valid card holder name'
    },
    {
        name: 'expiryDate',
        label: 'Expiry Date',
        type: 'text',
        placeholder: 'MM/YY',
        required: true,
        validation: { "required": true, "minLength": 5, "maxLength": 5 },
        errorMessage: 'Please enter a valid expiry date'
    }, {
        name: 'cvv',
        label: 'CVV',
        type: 'text',
        placeholder: '123',
        required: true,
        validation: { "required": true, "minLength": 3, "maxLength": 3 },
        errorMessage: 'Please enter a valid CVV'
    }
]
// bidFrom (Name of the sponsor)
// bidTo (Contains the user details of who created the event - organizerId)
// email  (sponsor Email)
// bidDate
// bidAmount: number
// bidDesc(Bid Description)
const SPONSOR_BID_INPUT = [
    {
        name: 'bidFrom',
        label: 'Bid From',
        type: 'text',
        placeholder: 'John Doe',
        validation: { "required": true, "minLength": 3, "maxLength": 20 },
    },
    { 
        name: 'bidTo',
        label: 'Bid To',
        type: 'text',
        placeholder: 'John James',
        validation: { "required": true, "minLength": 3, "maxLength": 20 },

    }, {
        name: 'email',
        label: 'Email',
        type: 'email',
        placeholder: 'johnjames@planetbase.com',
        validation: { "required": true, "minLength": 3, "maxLength": 20, "email": true },
    }, {
        name: 'bidDate',
        label: 'Bid Date',
        type: 'date',
        placeholder: 'MM/DD/YYYY',
        validation: { "required": true, "minLength": 3, "maxLength": 20, "isDate": true },
    }, {
        name: 'bidAmount',
        label: 'Bid Amount',
        type: 'number',
        placeholder: '100',
        validation: { "required": true, "minLength": 3, "maxLength": 20, "isNumber": true },
    }
]

export  {CARD_PAYMENT_INPUT, SPONSOR_BID_INPUT}