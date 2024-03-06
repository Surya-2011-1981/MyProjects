class demo implements Runnable
{
    public void run()
    {
        System.out.println("This is thread by Runnable Interface ");
        System.err.println(Thread.currentThread().getName());

    }
}
class tutorial {
    public static void main(String[] args)
    {
        demo d=new demo();
        Thread th=new Thread(d);
        Thread.currentThread().setName("surya");
        System.out.println(Thread.currentThread().getName());
        th.start();
    }
}