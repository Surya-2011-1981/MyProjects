interface I1 {
  void m1();
}

class C1 {
  public void m1() {
    System.out.println("M1 from c1");
  }
}

class C2 extends C1 implements I1 {
  public void m1() {
    System.out.println("M1 from C2");
  }
}

public class Diamond_Problem1 {
  public static void main(String[] args) {
    I1 i = new C2();
    i.m1();
    C1 c1 = new C2();
    c1.m1();
    C2 c2 = new C2();
    c2.m1();
  }
}