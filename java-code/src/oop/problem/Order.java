package oop.problem;

import java.util.List;

public class Order {

    private List<OrderItem> items;
    private OrderStatus status;

    public Order(List<OrderItem> items) {
        this.items = items;
        this.status = OrderStatus.CREATED;
    }

    public List<OrderItem> getItems() {
        return items;
    }

    public OrderStatus getStatus() {
        return status;
    }

    public void setStatus(OrderStatus status) {
        this.status = status;
    }
}
