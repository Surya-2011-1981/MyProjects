class Constructor_Overloading_4{
    String name;
    int roll,age;
    double phone;
    Constructor_Overloading_4(String name)
    {
        this.name=name;
        System.out.println("Name : "+name);
    }
    Constructor_Overloading_4(String name,int roll)
    {
        this.name=name;
        this.roll=roll;
        System.out.println("Name : "+name);
        System.out.println("Roll  : "+roll);
    }
    Constructor_Overloading_4(String name,int roll,int age)
    {
        this.name=name;
        this.roll=roll;
        this.age=age;
        System.out.println("Name : "+name);
        System.out.println("Roll  : "+roll);
        System.out.println("Age  : "+age);

    }
    Constructor_Overloading_4(String name,int roll,int age,double phone)
    {
        this.name=name;
        this.roll=roll;
        this.age=age;
        this.phone=phone;
        System.out.println("Name : "+name);
        System.out.println("Roll  : "+roll);
        System.out.println("Age  : "+age);
        System.out.println("Phone  : "+phone);
    }
    public static void main(String[] args)
    {
        Constructor_Overloading_4 ob1=new Constructor_Overloading_4("Suraj");   
        Constructor_Overloading_4 ob2=new Constructor_Overloading_4("Suraj",20);   
        Constructor_Overloading_4 ob3=new Constructor_Overloading_4("Suraj",20,21);   
        Constructor_Overloading_4 ob4=new Constructor_Overloading_4("Suraj",20,21,9284);   
    }
    
}