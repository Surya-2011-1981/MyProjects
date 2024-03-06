let murga=(m)=>{
    return new Promise((resolve,reject)=>{
      console.log("Murga kat rha h....");
      setTimeout(()=>{
      resolve(m);
      console.log("Murga kat gya");
      },2000)
    })
  }
  let murga_dhona=(m_d)=>{
   return new Promise((resolve,reject)=>{
       console.log("Murga dhul rha h....");
      setTimeout(()=>{
        resolve(m_d);
     console.log("Murga dhul Gaya!");
      },2000)
    })
  }
  let pyaz=(p)=>{
  return new Promise((resolve,reject)=>{
     console.log("pyaz kat rha h....");
     setTimeout(()=>{
      resolve(p);
     console.log("Pyaz Kat gya!");
     },2000)
    })
  }
  let masala=(ma)=>{
    return new Promise((resolve,reject)=>{
       console.log("masala bhuna ja rha h....");
      setTimeout(()=>{
        resolve(ma);
      console.log("masala bhuna gya!");
      },2000)
    })
  }
  let murga_bhuna=(m_b)=>{
   return new Promise((resolve,reject)=>{
     console.log("Murga bhuna  ja rha hai.......");
     setTimeout(()=>{
      resolve(m_b);
     console.log("Murga Bhuna gya!");
     },2000)
    })
  }
let murga_ready=(m_r)=>{
  return new Promise((resolve,reject)=>{
     console.log("Murga Ready ho rha hai......!");
     setTimeout(()=>{
      resolve(m_r);
     console.log("Murga Ready ho gya!... Lo khao");
     },2000)
    })
  }


// Using .then in Promise

  murga("🐔")
  .then((data)=>{
    m=data;
    return murga_dhona("🫧");
  })
  .then((data)=>{
    m_d=data;
    return pyaz("🧅");
  })
  .then((data)=>{
    p=data;
    return masala("🫚");
  })
  .then((data)=>{
    ma=data;
    return murga_bhuna("🍳");
  }).then((data)=>{
    m_b=data;
    return murga_ready("🍴");
  })
  .then((data)=>{
    m_r=data;
    console.log(m,m_d,p,ma,m_b,m_r);
  })
