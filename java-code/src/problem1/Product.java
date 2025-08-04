package problem1;

import java.util.Arrays;
import java.util.List;

public class Product {

    private int id;
    private String name;
    private double price;
    private String category;

    public Product(int id, String name, double price, String category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }

    public int getId() {
        return id;
    }
    public String getName() {
        return name;
    }
    private double getPrice() {
        return price;
    }
    private String getCategory() {
        return category;
    }

    public String ToString() {
        return "Product{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", price=" + price +
                ", category='" + category + '\'' +
                '}';
    }

    public static void main(String[] args) {

        List<Product> products = Arrays.asList(
                new Product(1, "Laptop", 1200.0, "Electronics"),
                new Product(2, "Smartphone", 800.0, "Electronics"),
                new Product(3, "Chair", 150.0, "Furniture"),
                new Product(4, "Table", 250.0, "Furniture"),
                new Product(5, "Monitor", 300.0, "Electronics")
        );

        // TODO 1: 가격이 200.0 이상인 상품들의 이름을 출력하세요.
        System.out.println("--- 200.0 이상인 상품 이름 ---");
        // 여기에 코드를 작성하세요.


        // TODO 2: 'Electronics' 카테고리의 모든 상품들의 총 가격을 계산하세요.
        System.out.println("\n--- Electronics 상품 총 가격 ---");
        // 여기에 코드를 작성하세요.


        // TODO 3: 모든 상품들의 평균 가격을 계산하고 출력하세요.
        System.out.println("\n--- 전체 상품 평균 가격 ---");
        // 여기에 코드를 작성하세요.
    }
}
