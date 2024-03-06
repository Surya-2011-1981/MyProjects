class App1 {
  int size;
  String type;

  App1(int size, String type) {
    this.size = size;
    this.type = type;
  }
}

class zomato extends App1 {
  int no_Of_Hotel;

  zomato(int no_Of_Hotel, int size, String type) {
    super(size, type);
    this.no_Of_Hotel = no_Of_Hotel;

  }
}
 
public class Hotel {
  public static void main(String[] args) {
    zomato z1 = new zomato(5000, 56, "OYO");
    System.out.println(z1.no_Of_Hotel);
    System.out.println(z1.size);
    System.out.println(z1.type);
  }
}
