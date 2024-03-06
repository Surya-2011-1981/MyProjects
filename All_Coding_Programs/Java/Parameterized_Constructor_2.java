class demo {
    int id;
    String name,address;
    demo(int id,String name,String address)
    {
        this.id=id;
        this.name=name;
        this.address=address;
    }
    void show()
    {
    System.out.println("Your id is :"+id);
    System.out.println("Your Name is :"+name);
    System.out.println("Your Address is :"+address);
    }
}

public class Parameterized_Constructor_2{
    public static void main(String[] args) 
    {
        demo p=new demo(106,"Suraj","Hazaribagh");
        p.show(); 
    }
}

