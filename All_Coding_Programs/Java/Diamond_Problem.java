interface I1 {
  // void m1();

  default void m2() {
    System.out.println("Hello World");
  }
}

interface I2 {
  // void m1();

  default void m2() {
    System.out.println("Hello World");
  }
}

class A implements I1, I2 {
  // public void m1() {
  //   System.out.println("Hello");
  // }
}

public class Diamond_Problem {
  public static void main(String[] args) {

    A a = new A();
    // a.m1();
    a.m2();
    // I1 i1 = new A();
    // i1.m1();
    // I2 i2 = new A();
    // i2.m1();
  }

}