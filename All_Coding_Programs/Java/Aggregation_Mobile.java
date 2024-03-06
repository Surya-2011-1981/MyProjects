class Earphone
{
    String brand;
    Earphone(String brand)
    {
        this.brand=brand;
    }
}

 class Mobile {

    String brand,ram;
    Earphone e;
    public Mobile(String brand,String ram)
    {
        this.brand=brand;
        this.ram=ram;
    }
    public void insertEarPhone(Earphone e)
    {
        this.e=e;
    }
    public void removeEarPhone(Earphone e)
    {
        this.e=null;
    }
}

class Aggregation_Mobile
{
    public static void main(String[] args) {
        Mobile m1=new Mobile("Vivo","2Gb");
        Mobile m2=new Mobile("Samsung","2Gb");
        m1.insertEarPhone(new Earphone("Boat"));
        m2.insertEarPhone(new Earphone("Oppo"));
        System.out.println(m1.brand);
        System.out.println(m1.ram);
        System.out.println(m1.e.brand);
        System.out.println(m1.e);//print address

    }
}
