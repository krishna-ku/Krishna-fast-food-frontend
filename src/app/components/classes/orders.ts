export class Orders {
    orderId?: number;
    orderStatus?: string;
    totalPrice?: number;
    totalPriceWithGst?: number;
    applyCoupon?:string='No Coupon';
    restaurantName?: string;
    orderDate?: Date;
    
}
