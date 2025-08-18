package grammar

class Grammar1 {


    // val : 변경 불가능한 (immutable) 변수 선언, 자바의 final
    val name = "Kotlin"

    // var : 변경 가능한(mutable) 변수 선언 자바의 일반 변수
    var age = 20

    // 타입 추론 기능 덕분에 대부분의 경우 타입을 명시하지 않아도 됨

    /*
        Null 안전성 (Null Safety)
        코틀린은 NPE 발생을 원천적으로 막는 강력한 기능 제공
     */

    // Non-nullable Type : 기본적으로 모든 타입은 null을 가질 수 없다.

    val name2: String = "John" // null 불가능

    val name3: String? = null // 가능

    // Nullable 변수를 안전하게 다루기 위한 연산자

    // 안전호출 연산자 (?.) : 객체가 null이 아니면 호출하고, null이면 null 반환
    val length = name?.length

    // 엘비스 연산자 (?:) : null 일때 가장 기본값 지정
    val length2 = name2.length ?: 0 // name null이면 0 반환

    /*
        함수 선언은 fun 키워드로 시작, 반호나 타입은 파라미터 리스트 뒤에 : 로 명시
     */

    // 기본 함수
    fun sum(a:Int, b: Int): Int {
        return a + b
    }

    // 단일 표현식 : 함수 본문이 한줄 일 경우, {}, return 생략, = 를 사용해 간결하게 표현
    fun sum2(a: Int, b: Int) = a + b


    /*
        클래스와 객체
        클래스는 class 키워드로 선언, 기본적으로 public이면서 final, 상속을 허용하려면 open 키워드를 붙여야함
     */

    // 주 생성자 : 클래스 헤더에 직접 선언
    class User(val name: String, var age: Int) {

    }

    // 데이터 클래스 : equal(), hashCode(), toString(), copy() 같은 메서드를 자동으로 생성해주는 유용한 클래스
    data class Person(val name: String, val age: Int) {

    }
}

fun main() {

    val grammar = Grammar1()
    val person = Grammar1.Person("test", 5)

    // 데이터 클래스 copy 사용하여 비교
    val copy = person.copy(age = person.age + 1)
    val copy2 = copy.copy()

    println(person)
    println(copy == copy2)
    println(copy2)

    // 1. 변수 선언 및 사용
    println("name: ${grammar.name}, age: ${grammar.age}")
    println("name2: ${grammar.name2}, name3: ${grammar.name3}")

    /*
        조건문과 반복문
     */
    // 코틀린의 if는 표현식으로 사용할 수 있어 값을 반환함
    val score = 95
    val result = if (score > 90) "A" else "B"

    println("result: $result")

    // when은 자바의 switch와 비슷하지만 더 강력함, enum 뿐만 아니라 어떤 타입도 사용할 수 있고, 표현식으로도 활용
    val x = 5
    when(x) {
        1 -> println("x is 1")
        in 1..10 -> println("x is between 1 and 10")
        else -> println("x is something else")
    }

    for (i in 1..5) {
        println(i)
    }
}