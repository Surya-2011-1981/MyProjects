class App {
  String name;
  int size;
}

class Zomato extends App {
  int no_Of_Hotels;

  Zomato(String name, int size, int no_Of_Hotels) {
    this.name = name;
    this.no_Of_Hotels = no_Of_Hotels;
    this.size = size;
  }
}

class Ola extends App {
  int cars, autos;

  Ola(String name, int size, int cars, int autos) {
    this.name = name;
    this.cars = cars;
    this.size = size;
    this.autos = autos;
  }
}

public class Food {
  public static void main(String[] args) {
    App a = new Zomato("OYO", 56, 5000);
    App b = new Ola("Lambhorgini", 32, 5000, 3000);
    System.out.println(a.name);
    System.out.println(a.size);
    // System.out.println(a.no_Of_Hotels); CTE :

    System.out.println(b.name);
    System.out.println(b.size);
    // System.out.println(b.cars);
    // System.out.println(b.autos); CTE:

  }
}
