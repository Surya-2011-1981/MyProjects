class Logical {
    public static void main(String[] args) {
        int num1=34;
        int num2=56;
        System.out.println(!(num1==num2 || num1!=num2));    
        System.out.println(!(num1==num2 && num2!=num2));    
    }
}
