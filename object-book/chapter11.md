# 합성과 유연한 설계

* 상속과 합성은 가장 널리 사용되는 재사용 기법
* 합성(Composite) : 전체를 포함하는 객체가 부분을 포함하는 객체를 포함해서 재사용
* 상속 is-a , 합성은 has-a
  * is-a 부모와 같은 정체성을 갖는 객체인가로 판단해보자
  * has-a 부분 객체를 갖고 있을 수 있는 전체 객체인가로 판단해보자

### 합성과 상속의 차이점
* 합성은 상속과 달리 구현에 의존하지 않는다.
* 합성은 내부 객체의 구현에 의존하지 않고, 퍼블릭 인터페이스만을 사용(의존)
  * 내부 구현을 알지 못한다. 
* 합성 관계는 런타임 시점에서 동적으로 변경이 가능

=> **상속보다 합성이 변경에 용이하고 유연하다.**

```
💡 화이트 박스 재사용과 블랙박스 재사용

상속을 이용한 재사용은 화이트박스 재사용이라고 한다.
부모 클래스의 내부를 자식 클래스도 알고 있기 때문이다.

그와 반대로 합성을 이용한 재사용은 부분 객체를 사용하는 전체 객체는
부분 객체의 퍼블릭 인터페이스만 알고 내부 구현은 모르기 때문에 이를 블랙박스 재사용이라 한다.
``` 

### 10장에서 나왔던 상속 문제를 합성으로 해결하기

#### 불필요한 인터페이스 상속 문제
```java
public class Stack<E> {
    private Vector<E> elements = new Vector();

    public E push(E item) {
        elements.addElement(item);
        return item;
    }
    
    public E pop() {
        if (elements.isEmpty()) {
            throw new EmptyStackException();
        }

        return elements.remove(elements.size() - 1);
    }
}
```
* Vector를 상속했을 때 Stack의 기능과 어울리지 않은 Vector의 인터페이스를 갖고왔지만 합성을 통해 불필요한 인터페이스는 사용하지 않도록 Stack를 구현했다.
