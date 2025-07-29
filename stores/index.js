// stores/ticket.ts
import { defineStore } from "pinia";

export const useTicketStore = defineStore("ticket", {
  state: () => ({
    ticket: {},
    ticketAmount: 0,
    oneTixFee: 2000,
    subTotal: 0,
    Total: 0,
    name: "",
    firstName: "",
    lastName: "",
    email: "",
    payStack:null
  }),

  actions: {
    // Recalculate subtotal and total
    calculateTotal() {
      const price = this.ticket.price || 0;
      this.subTotal = price * Number(this.ticketAmount) + this.oneTixFee;
      this.Total = this.subTotal;
    },

    setTicket(ticket) {
      this.ticket = ticket;
      this.calculateTotal();
    },
     setPaystack(value) {
      this.payStack = value
   
    },


    setTicketAmount(amount) {
      this.ticketAmount = amount;
      this.calculateTotal();
    },

    resetStore() {
      this.ticket = {};
      this.ticketAmount = 0;
      this.subTotal = 0;
      this.Total = 0;
      ((this.lastName = ""),
        (this.email = ""),
        (this.firstName = ""),
        (this.name = ""));
        this.payStack = ''
    },
    setUserDetails(name, email, firstName, lastName) {
      this.name = name;
      this.email = email;
      ((this.firstName = firstName), (this.lastName = lastName));
    },
  },

  persist: true,
});
