class Test {
  public static void main(String[] args) {
    Object o = new String("Rahul");
    StringBuffer sb = (StringBuffer) o;// ClassCastException Run Time Exception
    // StringBuffer sb = (String)o;//Compile Time Exception : Incompatibale
  }
}