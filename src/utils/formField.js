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

export  {CARD_PAYMENT_INPUT}