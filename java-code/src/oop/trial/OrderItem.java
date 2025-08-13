package oop.trial;

public class OrderItem {
    private Product product;
    private int quantity;

    public OrderItem(Product product, int quantity) {
        this.product = product;
        this.quantity = quantity;
    }

    public Product getProduct() {
        return product;
    }

    public int getQuantity() {
        return quantity;
    }

    public void checkStock() {
        product.checkStock(quantity);
    }

    public void calculateStock() {

        product.calculateStock(quantity);
    }

    public Integer calculateFee() {
        return quantity * product.getPrice();
    }

    public void cancelOrder() {

        product.cancelOrder(quantity);

    }
}
