import { setData } from "@/utils/helpers";

//  export function payWithPaystack({ email, amount, ticket ,ticketCount,event,name,router}) {
//     const config = useRuntimeConfig();
// const publicKey = config.public.PAYSTACK_PUBLIC_KEY;
//   const handler = window.PaystackPop.setup({
//     key: publicKey, // Replace with your Paystack public key
//     email,
//     amount: amount * 100, // in kobo (multiply Naira by 100)
//     currency: 'NGN',
//     callback: function (response) {
//       console.log('Payment successful:');
//      setData(ticket,email,amount,ticketCount,event,name,response,router)
//     },
//     onClose: function () {
//       console.log('Payment popup closed');
//     },
//   });

//   handler.openIframe();
// }
