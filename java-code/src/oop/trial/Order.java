package oop.trial;

import java.util.List;



public class Order {

    private List<OrderItem> items;
    private OrderStatus status;

    public Order(List<OrderItem> items) {
        this.items = items;
        this.status = OrderStatus.CREATED;
    }

    public static Order createOrder(List<OrderItem> items) {
        return new Order(items);
    }

    public Integer getShippingFee() {
        return items.stream()
                .mapToInt(OrderItem::calculateFee)
                .sum();
    }

    public void cancelOrder() {
        if (status == OrderStatus.CREATED) {
            status = OrderStatus.CANCELLED;

            items.forEach(OrderItem::cancelOrder);

            System.out.println("주문이 취소되었습니다.");
        } else {
            System.out.println("주문 취소에 실패했습니다. 현재 상태: " + status);
        }
    }
}
