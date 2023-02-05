import { configureStore } from "@reduxjs/toolkit";
import { phoneBookInitState } from "./phonebook/phonebook.init-state";
import { contactsInitState } from "./contacts/contacts.init-state";

const initState = {
    phoneBook: phoneBookInitState,
    contacts: contactsInitState,
}

export const store = configureStore({
    preloadedState: initState,
})