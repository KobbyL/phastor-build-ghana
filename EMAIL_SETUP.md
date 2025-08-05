# Email Notification Setup Guide

This guide will help you set up email notifications for new orders using EmailJS.

## 1. Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Set Up Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID** (e.g., `service_abc123`)

## 3. Create Email Template

1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. **IMPORTANT**: In the template settings, set the recipient email to `phastorgroup@gmail.com`
4. Use this template content:

### Template Settings:
- **Template Name**: `New Order Notification`
- **Subject**: `New Order #{{order_id}} - Phastor Build Ghana`

### Template Content:
```html
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
  <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
    🛍️ New Order Received - #{{order_id}}
  </h2>
  
  <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin: 20px 0;">
    <h3 style="color: #333; margin-top: 0;">📅 Order Details</h3>
    <p><strong>Order Date:</strong> {{order_date}}</p>
    <p><strong>Order ID:</strong> {{order_id}}</p>
    <p><strong>Total Items:</strong> {{item_count}}</p>
  </div>

  <div style="background-color: #fff; padding: 15px; border: 1px solid #e9ecef; border-radius: 5px; margin: 20px 0;">
    <h3 style="color: #333; margin-top: 0;">👤 Customer Information</h3>
    <p><strong>Name:</strong> {{customer_name}}</p>
    <p><strong>Email:</strong> {{customer_email}}</p>
    <p><strong>Phone:</strong> {{customer_phone}}</p>
    <p><strong>Address:</strong> {{customer_address}}</p>
  </div>

  <div style="background-color: #fff; padding: 15px; border: 1px solid #e9ecef; border-radius: 5px; margin: 20px 0;">
    <h3 style="color: #333; margin-top: 0;">📦 Order Items</h3>
    <pre style="white-space: pre-wrap; font-family: Arial, sans-serif;">{{order_items}}</pre>
  </div>

  <div style="background-color: #e8f4f8; padding: 15px; border-radius: 5px; margin: 20px 0;">
    <h3 style="color: #333; margin-top: 0;">💰 Payment Summary</h3>
    <div style="display: flex; justify-content: space-between; margin: 5px 0;">
      <span>Subtotal ({{item_count}} items):</span>
      <span>{{subtotal}}</span>
    </div>
    <div style="display: flex; justify-content: space-between; margin: 5px 0;">
      <span>Delivery Fee:</span>
      <span>{{delivery_fee}}</span>
    </div>
    <hr style="margin: 10px 0;">
    <div style="display: flex; justify-content: space-between; font-size: 18px; font-weight: bold; color: #007bff;">
      <span>Total:</span>
      <span>{{total_amount}}</span>
    </div>
  </div>

  <div style="background-color: #fff3cd; border: 1px solid #ffeaa7; padding: 15px; border-radius: 5px; margin: 20px 0;">
    <h4 style="color: #856404; margin-top: 0;">⚠️ Next Steps</h4>
    <ul style="color: #856404; margin: 0; padding-left: 20px;">
      <li>Contact customer within 24 hours to confirm order details</li>
      <li>Arrange delivery schedule</li>
      <li>Prepare items for shipment</li>
      <li>Payment will be collected on delivery (cash or mobile money)</li>
    </ul>
  </div>

  <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
    <p>This is an automated notification from your Phastor Build Ghana e-commerce system.</p>
  </div>
</div>
```

4. Save the template and note down your **Template ID** (e.g., `template_xyz789`)

## 4. Get Your Public Key

1. Go to **Account** → **General**
2. Find your **Public Key** (e.g., `user_abc123xyz`)

## 5. Configure Environment Variables

Create a `.env.local` file in your project root and add:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

Replace the placeholder values with your actual EmailJS credentials.

## 6. Update Configuration

The email configuration is in `src/config/email.ts`. If you're not using environment variables, you can directly update the values there:

```typescript
export const EMAIL_CONFIG = {
  SERVICE_ID: 'your_service_id_here',
  TEMPLATE_ID: 'your_template_id_here',
  PUBLIC_KEY: 'your_public_key_here',
  RECIPIENT_EMAIL: 'phastorgroup@gmail.com',
  RECIPIENT_NAME: 'Phastor Group',
};
```

## 7. Test the Setup

1. Start your development server
2. Place a test order through your website
3. Check if the email notification is sent to `phastorgroup@gmail.com`
4. Monitor the browser console for any error messages

## Troubleshooting

### Common Issues:

1. **Email not sending**: Check browser console for errors
2. **Invalid credentials**: Verify your Service ID, Template ID, and Public Key
3. **Template not found**: Ensure your Template ID is correct
4. **Service blocked**: Check if your email service is properly configured

### EmailJS Free Tier Limits:
- 200 emails per month
- Rate limit: 50 emails per hour

### Security Notes:
- EmailJS Public Key is safe to expose in frontend code
- Never expose your Private Key in frontend code
- Consider upgrading to a paid plan for production use

## Support

- EmailJS Documentation: https://www.emailjs.com/docs/
- EmailJS Support: https://www.emailjs.com/support/

---

Once configured, every new order will automatically send a detailed notification email to `phastorgroup@gmail.com` with all order information, customer details, and next steps.
