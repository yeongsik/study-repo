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
    public double getPrice() {
        return price;
    }
    public String getCategory() {
        return category;
    }

    public String toString() {
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

        List<String> list = products.stream()
                .filter(product -> product.getPrice() > 200.0)
                .map(Product::getName)
                .toList();

        for (String name : list) {
            System.out.println(name);
        }

        // 정답
        products.stream()
                .filter(p -> p.getPrice() >= 200.0) // 가격이 200.0 이상인 상품만 필터링
                .map(Product::getName) // 각 상품 객체에서 이름(String)만 추출
                .forEach(System.out::println); // 추출된 이름을 하나씩 출력

        // TODO 2: 'Electronics' 카테고리의 모든 상품들의 총 가격을 계산하세요.
        System.out.println("\n--- Electronics 상품 총 가격 ---");
        // 여기에 코드를 작성하세요.

        Double sum = 0.0;
        List<Double> electronics = products.stream()
                .filter(product -> product.getCategory().equals("Electronics"))
                .map(Product::getPrice)
                .toList();

        for (Double electronic : electronics) {
            sum += electronic;
        }

        System.out.println(sum);


        // 정답
        double totalElectronicsPrice = products.stream()
                .filter(p -> p.getCategory().equals("Electronics")) // Electronics 상품만 필터링
                .mapToDouble(Product::getPrice) // price를 double 타입 스트림으로 변환
                .sum(); // 합계 계산
        System.out.println("총 가격: " + totalElectronicsPrice);

        // TODO 3: 모든 상품들의 평균 가격을 계산하고 출력하세요.
        System.out.println("\n--- 전체 상품 평균 가격 ---");
        // 여기에 코드를 작성하세요.

        List<Double> list1 = products.stream()
                .map(Product::getPrice)
                .toList();

        Double sum2 = 0.0;
        for (Double v : list1) {
            sum2 += v;
        }

        System.out.println(sum2 / list1.size());


        // 정답
        double averagePrice = products.stream()
                .mapToDouble(Product::getPrice) // price를 double 타입 스트림으로 변환
                .average() // 평균 계산
                .orElse(0.0); // 만약 스트림이 비어있다면 0.0을 반환
        System.out.println("평균 가격: " + averagePrice);

    }
}
