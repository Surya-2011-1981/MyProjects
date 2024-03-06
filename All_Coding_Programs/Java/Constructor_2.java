class demo {
    int age;
    String name;

    demo() {
        age = 22;
        name = "Suraj";
        System.out.println("I am called without callling because I am a Constructor");
        System.out.println("=========================================================");
    }

    public void show() {
        System.out.println("Age = " + age);
        System.out.println("Name = " + name);
        System.out.println("=================");
    } 
}
class Constructor_2
{
    public static void main(String[] args) {
        demo c1 = new demo();
        c1.show();
    }
}

