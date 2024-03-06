function m1()
{
  function m2()
  {
    function m3()
    {
      return 12;
    }
    return m3();
  }
  return m2();
}
console.log(m1());
