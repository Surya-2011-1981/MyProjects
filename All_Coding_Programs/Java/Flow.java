class App {
  int size;
  String type;

}

class Fb extends App {
  int id;

  Fb(int id, int size, String type) {
    this.id = id;
    this.size = size;
    this.type = type;
    // this.id=id;
  }
}

class Whatsapp extends App {
  long cno;

  Whatsapp(long cno, int size, String type) {
    this.cno = cno;
    this.size = size;
    this.type = type;
  }
}

public class Flow {
  public static void main(String[] args) {
    App a = new Fb(01, 5, "GB");
    App b = new Whatsapp(24523, 8, "GB");
    Whatsapp w = (Whatsapp) b;
    Fb f = (Fb) a;
    System.out.println("This is From Fb Class.......!");
    System.out.println("Id is : " + f.id);
    System.out.print("Memory Size is : " + f.size);
    System.out.println(f.type);
    System.out.println("\n\n");
    System.out.println("This is from whatsapp Class........!");
    System.out.println("Number of Customers : " + w.cno);
    System.out.print("Size of Memory : " + w.size);
    System.out.println(w.type);

  }
}
