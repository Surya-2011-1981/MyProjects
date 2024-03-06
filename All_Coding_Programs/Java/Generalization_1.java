class vehicle
{
    int cc;
}
class car extends vehicle{
    int no_Of_Wheels;
    car(int cc,int no_Of_Wheels)
    {
        this.cc=cc;
        this.no_Of_Wheels=no_Of_Wheels;
    }
}
public class Generalization_1 
{

        public static void main(String[] args) {
            vehicle v=new car(1800, 4);
            System.out.println(v.cc);
            // System.out.println(v.no_Of_Wheels); can't access the member of child 
            

        }
}


