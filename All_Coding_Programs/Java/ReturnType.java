class ReturnType{
    public static void main(String[] args)
    {
        System.out.println(addition(4,6));
        System.out.println(difference(9,4));
        System.out.println(product(3,4));
        System.out.println(division(23,5));
        System.out.println(modulas(56,9));

    }
    static int  addition(int a, int b){

        return a+b;
    }
    static int  difference(int a, int b){

        return a-b;
    }
    static int  product(int a, int b){

        return a*b;
    }
    static float  division(int a, int b){

        return (float)a/(float)b;
    }
    static int  modulas(int a, int b){

        return a%b;
    }
}