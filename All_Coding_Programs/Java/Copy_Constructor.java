class student{
    String name;
    int roll,age;
    student(String name,int roll,int age)
    {
        this.name=name;
        this.roll=roll;
        this.age=age;
    }
    student(student st)
    {
        System.out.println("I am inside copy Constructor");
        System.out.println(st.name+" "+st.roll+" "+st.age);
    }
}
class Copy_Constructor{
    public static void main(String[] args) {
        student s1=new student("Suraj",20,22);
        student s2=new student(s1);
    }
}