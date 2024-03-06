let murga=(m,callback)=>{
    console.log("Murga kat rha h....");
    setTimeout(()=>{
      console.log("Murga kat gya!");
      callback();
    },3000);
    return m;
  }
  let murga_dhona=(m_d,callback)=>{
    console.log("Murga dhul rha h....");
    setTimeout(()=>{
      console.log("Murga dhul gya!");
      callback();
    },3000);
    return m_d;
  }
  let pyaz=(p,callback)=>{
    console.log("pyaz kat rha h....");
    setTimeout(()=>{
      console.log("pyaz kat gya!");
      callback();
    },3000);
    return p;
  }
  let masala=(ma,callback)=>{
    console.log("masala bhuna ja rha h....");
    setTimeout(()=>{
      console.log("masala bhun gya!");
      callback();
    },3000);
    return ma;
  }
  let murga_bhuna=(m_b,callback)=>{
    console.log("Murga bhunja ja rha h....");
    setTimeout(()=>{
      console.log("Murga bhunja gya!");
      callback();
    },3000);
    return m_b;
  }
let murga_ready=(m_r,callback)=>{
  console.log("Murga ready ho rha h....")
        setTimeout(()=>{
        console.log("Murga ready ho gya hai....!")
        callback();
       },3000);
      return m_r;
  }
  let parosna=(callback)=>
  {
      callback();
  }

  parosna(()=>{
    let m=murga("🐔",()=>{
      let m_d=murga_dhona("🫧",()=>{
        let p=pyaz("🧅",()=>{
          let ma=masala("🫚",()=>{
            let m_b=murga_bhuna("🍳",()=>{
              let m_r=murga_ready("🍴",()=>{
                console.log("Now You Can Eat ",m,m_d,p,ma,m_b,m_r);
              })
            })
          })
        })
      })
    })
  })