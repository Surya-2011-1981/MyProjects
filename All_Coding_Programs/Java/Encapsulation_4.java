class Laptop
{
    private String brand;
    private int ram;//get/set
    private int storage;//get/set
    private String os;//get
    Laptop(String brand,int ram,int storage,String os)
    {
        this.brand=brand;
        this.ram=ram;
        this.storage=storage;
        this.os=os;
    }
    public int getRam()
    {
        return ram;
    }
    public int getStorage()
    {
        return storage;
    }
    public String getOs()
    {
        return os;
    }
    public void setRam(int ram)
    {
        this.ram=ram;
    }
    public void setStorage(int storage)
    {
        this.storage=storage;
    }
    void display()
    {
        System.out.println("Brand : "+brand);
    }
}
public class Encapsulation_4 {
    public static void main(String[] args)
    {
    Laptop obj=new Laptop("Asus",8,256,"Windows");
    obj.display();
    System.out.println("Ram : "+obj.getRam());
    obj.setRam(16);//Setiing new value in Ram
    System.out.println("Modified Ram : "+obj.getRam());
    System.out.println("Storage : "+obj.getStorage());
    obj.setStorage(512);//Setiing new value in Storage
    System.out.println("Modified Storage : "+obj.getStorage());
    System.out.println("Operating System : "+obj.getOs());
    }
}
