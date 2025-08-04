package problem1;

import java.util.Arrays;
import java.util.List;

public class Main {

    public static void main(String[] args) {
        List<Product> products = Arrays.asList(
                new Product(1, "Laptop", 1200.0, "Electronics"),
                new Product(2, "Smartphone", 800.0, "Electronics"),
                new Product(3, "Chair", 150.0, "Furniture"),
                new Product(4, "Table", 250.0, "Furniture"),
                new Product(5, "Monitor", 300.0, "Electronics")
        );

        // TODO 1: 각 카테고리별 상품이 몇 개씩 있는지 출력하세요. (예: Electronics: 3, Furniture: 2)
        System.out.println("--- 카테고리별 상품 개수 ---");
        // 여기에 코드를 작성하세요.


        // TODO 2: 각 카테고리별 총 가격을 계산하여 출력하세요. (예: Electronics: 2300.0, Furniture: 400.0)
        System.out.println("\n--- 카테고리별 총 가격 ---");
        // 여기에 코드를 작성하세요.


        // TODO 3: 전체 상품 목록을 가격이 높은 순서대로 정렬하여 출력하세요.
        System.out.println("\n--- 가격 내림차순 정렬 ---");
        // 여기에 코드를 작성하세요.


        // TODO 4 (보너스): 가장 비싼 상품을 찾아 출력하세요. (Optional<Product> 사용)
        System.out.println("\n--- 가장 비싼 상품 ---");
        // 여기에 코드를 작성하세요.
    }
}
