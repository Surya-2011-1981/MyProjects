class Facebook {
  long no_Of_User;
  String id;
  long C_no;
}

class insta extends Facebook {
  String stories;

  insta(String stories, long no_Of_User, String id, long C_no) {
    this.stories = stories;
    this.no_Of_User = no_Of_User;
    this.id = id;
    this.C_no = C_no;
  }

}

public class DownCasting {
  public static void main(String[] args) {
    insta i = new insta("Quote", 67000, "0a12", 872);
    // insta i = (insta) f;
    System.out.println(i.stories);
    System.out.println(i.no_Of_User);
    System.out.println(i.id);
    System.out.println(i.C_no);
  }
}
