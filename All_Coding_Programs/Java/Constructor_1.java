class Constructor_1{
    int age;
    String name;


Constructor_1(){
    age=22;
    name="Suraj";
    System.out.println("Age = "+age);
    System.out.println("Name = "+name);
    System.out.println("=================");

}
public void show(){
    System.out.println("Age = "+age);
    System.out.println("Name = "+name);
    System.out.println("=================");

}
public static void main(String[] args) {
    Constructor_1 c1=new Constructor_1();
    Constructor_1 c2=new Constructor_1();
    c1.show();
    c2.show();

}
}