class demo1{

    public static void main(String[] args) {
       System.out.println("Main Block");
    }
    static{
        System.out.println("Static block");
    }
    public static void main(int[] args) {
        System.out.println("Second");
    }
}