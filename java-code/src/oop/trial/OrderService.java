package oop.trial;

import java.util.List;

// 이 클래스들이 TDA와 SOLID 원칙을 위반하고 있습니다.
public class OrderService {

    public Order createOrder(List<OrderItem> orderItems) {
        // 재고 확인 및 감소 로직
        for (OrderItem item : orderItems) {
            item.checkStock();
            item.calculateStock();
        }

        return Order.createOrder(orderItems);
    }

    public void calculateShippingFee(Order order) {
        Integer totalAmount = order.getShippingFee();
        if (totalAmount < 50000) {
            System.out.println("배송비: 3,000원");
        } else {
            System.out.println("배송비: 무료");
        }
    }

    public void cancelOrder(Order order) {
        order.cancelOrder();
    }
}
