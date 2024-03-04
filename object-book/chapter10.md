# 상속과 코드 재사용

* 상속을 부모와 자식 클래스의 결합도를 높인다.
* 그나마 줄이기 위해서는 자식 클래스의 메서드 안에서 super 참조하는 호출을 제거하자
* 강한 결합은 변경에 취약하게 만든다.(기반 클래스 문제)
* 상속 관계를 추가할 수록, 코드 재사용으로 인해 점진적인 기능 확장은 유리하나 부모 클래스의 개선은 어렵게 만든다.
* 상속은 자식 클래스가 부모 클래스의 구현 세부사항에 의존하도록 만들기 때문에 캡슐화가 약화된다. (상속이 위험한 이유)
* 객체지향의 기반은 캡슐화를 통한 변경의 통제, 상속은 재사용을 위해 이러한 캡슐화의 장점을 잃어버린다.

## 상속의 문제

### 불필요한 인터페이스 상속 문제
* Vector와 Stack
  * Vector를 상속하는 Stack은 Vector의 add(index, element)를 상속 받는다.
  * Stack은 LIFO 특징을 갖고 있는 자료구조지만 Vector의 add를 사용하면 LIFO 특징을 지키지 않게 된다.
  * 잘못된 인터페이스 설계

### 메서드 오버라이딩의 오작용 문제
* InstrumentedHashSet과 HashSet

```java
public class InstrumentedHashSet<E> extends HashSet<E> {
    private int addCount = 0;

    @Override
    public boolean add(E e) {
        addCount++;
        return super.add(e);
    }

    @Override
    public boolean addAll(Collection<? extends E> collection) {
        addCount += collection.size();
        return super.addAll(collection);
    }
}
```

```java
InstrumentedHashSet<String> languages = new InstrumentedHashSet<>();
languages.addAll(Arrays.asList("Java", "Ruby", "Scala"));
```

* addCount가 3이어야하는데 6이 나온다.
* addAll 메서드에서 3이 추가되고 super.addAll 메서드에서 내부적으로 add 메서드를 실행하기 때문에 결과가 6으로 나온다.
* 이렇듯 메서드 오버라이딩이 잘못되어서 오작용되는 문제를 상속은 갖고 있다.

### 부모 클래스와 자식 클래스의 동시 수정 문제
* 요구사항이 변경되면 부모클래스와 자식 클래스를 동시에 수정해야하는 문제가 생긴다. (복잡하고, 중복 코드의 문제가 비슷)

### 상속 대신 추상화에 의존
* 강하게 결합되는 상속되신 추상화에 의존하게 만들자.
* 중복 코드 안에 있는 차이점을 별도의 메서드로 추출 (변하는 것으로부터 변하지 않는 것을 분리)
* 중복 코드를 부모 클래스에 올려라 (추상 메서드 작업)


### 차이에 의한 프로그래밍
* 이미 존재하는 코드를 기반으로 다른 부분을 구현하는 방식 (새로운 기능을 쉽고 빠르게 추가할 수 있다.)
* 상속을 이용하여 새로운 기능을 추가할 때 코드의 양을 최소화 시킬 수 있다.
* 하지만 맹목적으로 상속을 사용하는 것은 위험하다. 코드의 재사용 측면에서는 좋지만, 잘못 사용할 경우 변경하기 더욱 더 어려운 코드가 되어버린다.
* 그러므로 정말로 필요한 경우에만 상속을 사용하자

### 상속을 위한 경고
1. 자식 클래스 메서드 안에서 부모 클래스 메서드 호출은 두 클래스를 더욱 더 강하게 결합한다. (super 호출 제거 하자)
2. 상속 받은 부모 클래스의 메서드가 자식 클래스의 규칙을 깨드릴 수 있다.(Vector와 Stack 관계)
3. 자식 클래스가 부모 클래스의 메서드를 오버라이딩할 경우 부모 클래스가 자신의 메서드를 사용하는 방법에 자식 클래스가 결합 될 수 있다.
4. 클래스를 상속하면 결합도 때문에 자식 클래스와 부모 클래스의 구현이 영원히 변하지 않거나, 동시에 변경된다.


