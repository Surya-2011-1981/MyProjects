class Student {
    String name;
    private int id;
    Student(String name, int id) {
        this.name = name;
        this.id = id;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
}
public class Encapsulation_1 {
    public static void main(String[] args) {
        Student ob = new Student("Suraj", 20);
        System.out.println("Name : " + ob.name);
        // System.out.println("Name : "+ob.name); Cpmpile time Error
        System.out.println(ob.getId());
        ob.setId(21);
        System.out.println(ob.getId());
    }
}
