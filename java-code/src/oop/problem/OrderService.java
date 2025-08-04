package oop.problem;

import java.util.List;

// 이 클래스들이 TDA와 SOLID 원칙을 위반하고 있습니다.
public class OrderService {

    public Order createOrder(List<OrderItem> orderItems) {
        // 재고 확인 및 감소 로직
        for (OrderItem item : orderItems) {
            Product product = item.getProduct();
            if (product.getStock() < item.getQuantity()) {
                throw new IllegalArgumentException(product.getName() + " 재고가 부족합니다.");
            }
        }

        for (OrderItem item : orderItems) {
            Product product = item.getProduct();
            product.setStock(product.getStock() - item.getQuantity());
        }

        Order newOrder = new Order(orderItems);
        System.out.println("주문이 생성되었습니다. 주문 상태: " + newOrder.getStatus());
        return newOrder;
    }

    public void calculateShippingFee(Order order) {
        int totalAmount = 0;
        for (OrderItem item : order.getItems()) {
            totalAmount += item.getProduct().getPrice() * item.getQuantity();
        }

        if (totalAmount < 50000) {
            System.out.println("배송비: 3,000원");
        } else {
            System.out.println("배송비: 무료");
        }
    }

    public void cancelOrder(Order order) {
        // 주문 취소 로직
        if (order.getStatus() == OrderStatus.CREATED) {
            order.setStatus(OrderStatus.CANCELLED);
            for (OrderItem item : order.getItems()) {
                Product product = item.getProduct();
                product.setStock(product.getStock() + item.getQuantity());
            }
            System.out.println("주문이 취소되었습니다.");
        } else {
            System.out.println("주문 취소에 실패했습니다. 현재 상태: " + order.getStatus());
        }
    }
}
