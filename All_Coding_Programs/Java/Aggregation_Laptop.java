class wifi
{
    String speed;
    wifi(String speed)
    {
        this.speed=speed;
    }
}

 class Laptop_1 {

    String brand,processor;
    int ram;
    wifi w;
    public Laptop_1(String brand,String processor,int ram)
    {
        this.brand=brand;
        this.ram=ram;
        this.processor=processor;
    }
    public void connectWifi(wifi w)
    {
        this.w=w;
    }
    public void disConnectWifi()
    {
        this.w=null;
    }
}

public class Aggregation_Laptop {
    public static void main(String[] args)
    {
        Laptop_1 l1=new Laptop_1("Asus","Intel_i3",4);
        Laptop_1 l2=new Laptop_1("Dell","Intel_i5",8);
        // l1.connectWifi("2mb"); Can't accept avlue withput new keyword
        // System.out.println(l1.w.speed);

        l1.connectWifi(new wifi("2mbps"));
        l2.connectWifi(new wifi("6mbps"));
        System.out.println(l1.brand);
        System.out.println(l1.ram);
        System.out.println(l1.processor);
        System.out.println(l1.w.speed);
        System.out.println(l2.w.speed);
        l2.disConnectWifi();
        try {
            System.out.println(l2.w.speed);
        } catch (Exception e) {
            System.out.print("Earphone Removed");
        }
        
    }
}
