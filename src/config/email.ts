// EmailJS Configuration
// You need to set up EmailJS account and replace these values
// Visit: https://www.emailjs.com/

export const EMAIL_CONFIG = {
  // Replace with your EmailJS service ID
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_v4mplzd',
  
  // Replace with your EmailJS template ID
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_wdcz8zc',
  
  // Replace with your EmailJS public key
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'uYHXiKVJTxah-TlWu',
  
  // Email recipient
  RECIPIENT_EMAIL: 'phastorgroup@gmail.com',
  RECIPIENT_NAME: 'Phastor Group',
};

// EmailJS Template Variables (for reference)
// When creating your EmailJS template, use these variable names:
export const EMAIL_TEMPLATE_VARS = {
  to_email: '{{to_email}}',
  to_name: '{{to_name}}',
  order_id: '{{order_id}}',
  order_date: '{{order_date}}',
  customer_name: '{{customer_name}}',
  customer_email: '{{customer_email}}',
  customer_phone: '{{customer_phone}}',
  customer_address: '{{customer_address}}',
  order_items: '{{order_items}}',
  subtotal: '{{subtotal}}',
  delivery_fee: '{{delivery_fee}}',
  total_amount: '{{total_amount}}',
  item_count: '{{item_count}}',
};

/*
EmailJS Template Example:
------------------------
Subject: New Order #{{order_id}} - Phastor Build Ghana

Hello {{to_name}},

You have received a new order from your Phastor Build Ghana website!

Order Details:
- Order ID: {{order_id}}
- Date: {{order_date}}
- Total Items: {{item_count}}

Customer Information:
- Name: {{customer_name}}
- Email: {{customer_email}}
- Phone: {{customer_phone}}
- Address: {{customer_address}}

Order Items:
{{order_items}}

Payment Summary:
- Subtotal: {{subtotal}}
- Delivery Fee: {{delivery_fee}}
- Total Amount: {{total_amount}}

Next Steps:
1. Contact the customer within 24 hours
2. Confirm order details and delivery schedule
3. Prepare items for shipment
4. Payment will be collected on delivery

Best regards,
Phastor Build Ghana System
*/
