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
    payStack: null,
    currentUserTicket: "",
  }),

  actions: {
    calculateTotal() {
      const price = this.ticket.price || 0;
      const quantity = Number(this.ticketAmount);

      const feeDetails = this.calculateFees(price, quantity);

      this.subTotal = feeDetails.subtotal;
      this.oneTixFee = feeDetails.platformFee;
      this.gatewayFee = feeDetails.gatewayFee;
      this.Total = feeDetails.totalPaid;
      this.currency = feeDetails.currency;
    },

    setTicket(ticket) {
      this.ticket = ticket;
      this.calculateTotal();
    },
    setPaystack(value) {
      this.payStack = value;
    },

    setTicketAmount(amount) {
      this.ticketAmount = amount;
      this.calculateTotal();
    },

    calculateFees(unitPrice, quantity) {
      // Fee configuration
      const PLATFORM_PERCENT = 0.08;
      const PLATFORM_FLAT = 100;

      const GATEWAY_PERCENT = 0.015;
      const GATEWAY_FLAT = 100;
      const GATEWAY_THRESHOLD = 2500;
      const GATEWAY_MAX = 2000;

      const subtotal = unitPrice * quantity;

      const platformFee =
        Math.round(subtotal * PLATFORM_PERCENT) + PLATFORM_FLAT;

      const paystackPercent = Math.round(subtotal * GATEWAY_PERCENT);
      const paystackFlat = subtotal < GATEWAY_THRESHOLD ? 0 : GATEWAY_FLAT;
      const gatewayFee = Math.min(paystackPercent + paystackFlat, GATEWAY_MAX);

      const totalPaid = subtotal + platformFee;
      const yourProfit = platformFee - gatewayFee;

      return {
        subtotal,
        platformFee,
        gatewayFee,
        totalPaid,
        yourProfit,
        currency: "NGN",
      };
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
      this.payStack = "";
      this.currentUserTicket = "";
    },
    setUserDetails(name, email, firstName, lastName) {
      this.name = name;
      this.email = email;
      ((this.firstName = firstName), (this.lastName = lastName));
    },
    setTicketId(ticket) {
      this.currentUserTicket = ticket;
    },
  },
  persist: true,
});
