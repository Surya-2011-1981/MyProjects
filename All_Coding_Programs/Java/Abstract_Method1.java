abstract class vehicle {
  abstract public int getNoOfWheels();
}

class Bike extends vehicle {
  public int getNoOfWheels() {
    return 10;
  }
}

class Abstract_Method1 {
  public static void main(String[] args) {
    // vehicle v = new Bike();
    Bike v = new Bike();
    System.out.println(v.getNoOfWheels());
  }
}