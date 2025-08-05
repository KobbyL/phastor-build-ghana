import emailjs from '@emailjs/browser';
import { CartItem } from '@/components/CartContext';
import { EMAIL_CONFIG } from '@/config/email';

// Initialize EmailJS
emailjs.init(EMAIL_CONFIG.PUBLIC_KEY);

export interface OrderEmailData {
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  customerAddress: string;
  orderItems: CartItem[];
  totalAmount: number;
  orderId: string;
  orderDate: string;
}

export const sendOrderNotification = async (orderData: OrderEmailData): Promise<boolean> => {
  try {
    // Format order items for email
    const itemsList = orderData.orderItems
      .map(item => 
        `• ${item.product.name} - Qty: ${item.quantity} - GH₵${(item.product.price * item.quantity).toFixed(2)}`
      )
      .join('\n');

    // Calculate delivery fee
    const deliveryFee = orderData.totalAmount >= 500 ? 0 : 50;
    const subtotal = orderData.totalAmount - deliveryFee;

    // Prepare email template parameters
    const templateParams = {
      order_id: orderData.orderId,
      order_date: orderData.orderDate,
      customer_name: orderData.customerName,
      customer_email: orderData.customerEmail,
      customer_phone: orderData.customerPhone,
      customer_address: orderData.customerAddress,
      order_items: itemsList,
      subtotal: `GH₵${subtotal.toFixed(2)}`,
      delivery_fee: deliveryFee === 0 ? 'FREE' : `GH₵${deliveryFee.toFixed(2)}`,
      total_amount: `GH₵${orderData.totalAmount.toFixed(2)}`,
      item_count: orderData.orderItems.reduce((sum, item) => sum + item.quantity, 0),
    };

    // Send email
    const response = await emailjs.send(
      EMAIL_CONFIG.SERVICE_ID,
      EMAIL_CONFIG.TEMPLATE_ID,
      templateParams
    );

    console.log('Order notification email sent successfully:', response.status, response.text);
    return true;
  } catch (error) {
    console.error('Failed to send order notification email:', error);
    return false;
  }
};

// Alternative email template for simple HTML formatting
export const getOrderEmailHTML = (orderData: OrderEmailData): string => {
  const deliveryFee = orderData.totalAmount >= 500 ? 0 : 50;
  const subtotal = orderData.totalAmount - deliveryFee;
  const itemCount = orderData.orderItems.reduce((sum, item) => sum + item.quantity, 0);

  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
      <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
        🛍️ New Order Received - #${orderData.orderId}
      </h2>
      
      <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin: 20px 0;">
        <h3 style="color: #333; margin-top: 0;">📅 Order Details</h3>
        <p><strong>Order Date:</strong> ${orderData.orderDate}</p>
        <p><strong>Order ID:</strong> ${orderData.orderId}</p>
        <p><strong>Total Items:</strong> ${itemCount}</p>
      </div>

      <div style="background-color: #fff; padding: 15px; border: 1px solid #e9ecef; border-radius: 5px; margin: 20px 0;">
        <h3 style="color: #333; margin-top: 0;">👤 Customer Information</h3>
        <p><strong>Name:</strong> ${orderData.customerName}</p>
        <p><strong>Email:</strong> ${orderData.customerEmail}</p>
        <p><strong>Phone:</strong> ${orderData.customerPhone}</p>
        <p><strong>Address:</strong> ${orderData.customerAddress}</p>
      </div>

      <div style="background-color: #fff; padding: 15px; border: 1px solid #e9ecef; border-radius: 5px; margin: 20px 0;">
        <h3 style="color: #333; margin-top: 0;">📦 Order Items</h3>
        ${orderData.orderItems.map(item => `
          <div style="border-bottom: 1px solid #eee; padding: 10px 0; display: flex; justify-content: space-between;">
            <div>
              <strong>${item.product.name}</strong><br>
              <small style="color: #666;">Quantity: ${item.quantity}</small>
            </div>
            <div style="text-align: right;">
              <strong>GH₵${(item.product.price * item.quantity).toFixed(2)}</strong>
            </div>
          </div>
        `).join('')}
      </div>

      <div style="background-color: #e8f4f8; padding: 15px; border-radius: 5px; margin: 20px 0;">
        <h3 style="color: #333; margin-top: 0;">💰 Payment Summary</h3>
        <div style="display: flex; justify-content: space-between; margin: 5px 0;">
          <span>Subtotal (${itemCount} items):</span>
          <span>GH₵${subtotal.toFixed(2)}</span>
        </div>
        <div style="display: flex; justify-content: space-between; margin: 5px 0;">
          <span>Delivery Fee:</span>
          <span style="color: ${deliveryFee === 0 ? '#28a745' : '#333'};">
            ${deliveryFee === 0 ? 'FREE' : `GH₵${deliveryFee.toFixed(2)}`}
          </span>
        </div>
        <hr style="margin: 10px 0;">
        <div style="display: flex; justify-content: space-between; font-size: 18px; font-weight: bold; color: #007bff;">
          <span>Total:</span>
          <span>GH₵${orderData.totalAmount.toFixed(2)}</span>
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
        <p>Generated on ${new Date().toLocaleString()}</p>
      </div>
    </div>
  `;
};
