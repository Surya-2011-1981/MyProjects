class SIM
{
    private long sim_no;//read
    private String service_Provider;//read and modify
    private double balance;//read and modify
    SIM(long sim_no,String service_Provider,double balance)
    {
        this.sim_no = sim_no;
        this.service_Provider=service_Provider;
        this.balance=balance;
    }
    public long getSim_No()
    {
        return sim_no;
    }
    public String getServiceProvider()
    {
        return service_Provider;
    }
    public double getBalance()
    {
        return balance;
    }
    public void setServiceProvider(String service_Provider)
    {
        this.service_Provider=service_Provider;
    }
    public void setBalance(double balance)
    {
        this.balance=balance;
    }
    void display()
    {
        System.out.println("*************These are default values*****************");
        System.out.println("Sim Number : "+sim_no);
        System.out.println("Service Provider : "+service_Provider);
        System.out.println("Balance : "+balance);
        System.out.println("*********************************************************");
    }
}
public class Encapsulation_3 {
    public static void main(String[] args) {        
        SIM obj=new SIM(1045,"Airtel Corporations",239.0);
        obj.display();
        // System.out.println("Sim Number is : "+obj.getSim_No());
        obj.setBalance(450.00);
        System.out.println("Balance and Service Provider are changed........!\n");
        System.out.println("Remaining Balance is : "+obj.getBalance());
        obj.setServiceProvider("Jio Pvt. Ltd");
        System.out.println("Service Provider is : "+obj.getServiceProvider());


    }
}
