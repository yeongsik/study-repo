package oop.trial;

public class Product {

    private String name;
    private int price;
    private int stock;

    public Product(String name, int price, int stock) {
        this.name = name;
        this.price = price;
        this.stock = stock;
    }

    public String getName() {
        return name;
    }

    public int getPrice() {
        return price;
    }

    public int getStock() {
        return stock;
    }

    public void setStock(int stock) {
        this.stock = stock;
    }

    public void checkStock(int quantity) {
        if (quantity > this.stock) {
            throw new IllegalArgumentException(name + " 재고가 부족합니다.");
        }
    }

    public void calculateStock(int quantity) {
        stock -= quantity;

        if(stock < 0) {
            throw new IllegalArgumentException("재고가 부족합니다.");
        }
    }

    public void cancelOrder(int quantity) {
        stock += quantity;
    }
}
