// store.js - Shared Frontend State for NEUPay Demo
const DEFAULT_STATE = {
    student: {
        name: "John Doe",
        id: "2026-10492",
        cardUid: "CARD_88A12B",
        balance: 1450.00,
        isLocked: false
    },
    transactions: [
        { merchant: "Main Canteen Stall 04", terminal: "POS-CANTEEN-04", amount: -85.00, time: "Today, 12:35 PM", type: "Debit" },
        { merchant: "Cashier Window 2 Top-up", terminal: "ADM-WINDOW-02", amount: 1000.00, time: "Today, 9:10 AM", type: "Credit" },
        { merchant: "University Book Store", terminal: "POS-BKSTR-01", amount: -220.00, time: "Yesterday, 3:42 PM", type: "Debit" }
    ]
};

function getDB() {
    const raw = localStorage.getItem('neupay_db');
    if (!raw) {
        localStorage.setItem('neupay_db', JSON.stringify(DEFAULT_STATE));
        return JSON.parse(JSON.stringify(DEFAULT_STATE));
    }
    return JSON.parse(raw);
}

function saveDB(db) {
    localStorage.setItem('neupay_db', JSON.stringify(db));
}

function resetDB() {
    localStorage.setItem('neupay_db', JSON.stringify(DEFAULT_STATE));
    location.reload();
}

function formatPHP(amount) {
    return '₱' + Math.abs(amount).toLocaleString('en-PH', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}