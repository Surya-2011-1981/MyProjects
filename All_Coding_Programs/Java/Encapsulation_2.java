class user {
    String name;
    long acc_no;
    private double balance;// Read and modify
    private int passwd;// modify

    user(String name, long acc_no, double balance, int passwd) {
        this.name = name;
        this.acc_no = acc_no;
        this.balance = balance;
        this.passwd = passwd;
        // These Values are by default provided by object
    }

    public double getBalance() {
        return balance;
    }

    public void setBalance(double balance) {
        this.balance = balance;
    }

    public void setPasswd(int passwd) {
        this.passwd = passwd;
    }

    public void display() {
        System.out.println("AccountHolder's name is : " + name);
        System.out.println("AccountHolder's account number is : " + acc_no);
        System.out.println("AccountHolder's password is : " + passwd);
        System.out.println("AccountHolder's balance is : " + balance);
    }
}

public class Encapsulation_2 {
    public static void main(String[] args) {
        user obj = new user("Suraj", 1234590, 6754.67, 78923);
        System.out.println("***************************This is by default values **********************************");
        obj.display();
        System.out.println("*************************************************************");

        System.out.println("The remaining balance  in the account is : " + obj.getBalance());
        obj.setBalance(9876.90);
        System.out.println("\nBalnce Changed.......\n");
        System.out.println("The remaining balance  in the account is : " + obj.getBalance()+"\n\n");
        obj.setPasswd(89451);
        // System.out.println("The changed password is : " + obj.passwd);//Cannot access private members
    }
}
