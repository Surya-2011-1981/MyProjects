public class TypeChecker {
    public static void main(String[] args) {
        int num=10;
       String st= ((Object)(num)).getClass().getSimpleName(); 
       System.out.println(st);
    }
}
