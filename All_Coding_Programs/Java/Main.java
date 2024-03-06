interface A {
  void m1();
}

class B implements A {
  public void m1() {
    System.out.println("M1 method");
  }
}

class Main {
  public static void main(String[] args) {
    B ob = new B();
    ob.m1();
  }
}