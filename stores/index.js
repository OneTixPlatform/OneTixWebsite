// stores/ticket.ts
import { defineStore } from "pinia";

export const useTicketStore = defineStore("ticket", {
  state: () => ({
    ticket: {},
    ticketAmount: 0,
    oneTixFee: 5000,
    subTotal: 0,
    Total: 0,
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

    setTicketAmount(amount) {
      this.ticketAmount = amount;
      this.calculateTotal();
    },

    resetStore() {
      this.ticket = {};
      this.ticketAmount = 0;
      this.subTotal = 0;
      this.Total = 0;
    },
  },

  persist: true,
});
