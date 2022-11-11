import React, {useEffect, useState} from 'react'
import { loadWeb3 } from "../../Api/Api";
import "./Twt.css";
import { contractadress, contractabi } from "../../Contracts/contract";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastHeader } from 'react-bootstrap';









function Twt() {

  let [btnTxt, setBtTxt] = useState("");
  let [isconnected, setisconnected] = useState("Connected");
  const [value,setvalue] = useState()
  const [bnbValue,setbnbvalue] = useState(0)



    const Connect = async () => {
        let acc = await loadWeb3();
        // console.log("ACC=",acc)
        if (acc == "No Wallet") {
          setBtTxt("No Wallet");
        } else if (acc == "Wrong Network") {
          setBtTxt("Wrong Network");
        } else {
          let myAcc =
            // acc?.substring(0, 4) + "..." + acc?.substring(acc?.length - 4);
            setBtTxt(acc);
          const web3 = window.web3;
          let wire_contract_instance = new web3.eth.Contract(
            contractabi,
            contractadress
          );
        //   let getToken = await wire_contract_instance.methods.getToken().call();
        //   console.log(getToken,"token here");
        }
      }



      const myMint = async () => {
        let acc = await loadWeb3();
        // console.log("ACC=",acc)
        if (acc == "No Wallet") {
          setBtTxt("No Wallet");
        } else if (acc == "Wrong Network") {
          setBtTxt("Wrong Network");
        } else {
            try{
          const web3 = window.web3;
          let BNBbalance= await web3.eth.getBalance(acc);
          console.log(BNBbalance,"BNBbalance");
          let contractOf = new web3.eth.Contract(
            contractabi,
            contractadress
          );
          let vAL=web3.utils.toWei(bnbValue)
          let getToken = await contractOf.methods.getToken(vAL).call();
          let presale_Status = await contractOf.methods.presaleStatus().call();

          console.log(getToken,"token_here");
          setvalue(web3.utils.fromWei(getToken))
          console.log((vAL>0),"check");
          console.log(vAL,"valhere");

          if(BNBbalance>vAL){
          if(presale_Status==true){
            if(vAL>0){
                await contractOf.methods.deposit().send({
                    from: acc,
                    value: vAL
                  })
                  toast.success("Congratulations! You Now Have The Ownership  You’ve successfully purchased TWTZ tokens and you can see them in your wallet. You’re also the shareholder of the same value of tokens in the Twtzer DeSo App and eligible to receive a monthly dividend on App revenue. Please reach out to our partner deck for any help at hello@twtzer.com . !Thanks")

            }
            else
            {
            toast.error("Enter Some BNB")
            }
          }
          else{
            toast.error("Presale is off")
          }
        }
          else{
            toast.error("Insufficient Balance!")
          }
        
        } catch(e)
        {
            toast.error("Transaction Could not be Completed!")
        }
    }
      }

      useEffect(() => {
        Connect();
      }, []);


  return (

    <>
    {/* <a href="#popup2">Click Me (Style 2)</a>
    <div id="popup2" class="popup-container popup-style-2">
  <div class="popup-content">
    <a href="#" class="close">&times;</a>
    <h3>Popup 2</h3>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
  </div>
</div> */}

    <div className='twt_mainn_index'>
        <header class="style-15 main_ico_header">
        <div class="navs-container">
           

            {/* <!-- ====== start navbar ====== --> */}
            <nav class="navbar navbar-expand-lg twtw_nav style-15 p-0">
                <div class="container content">
                    <a class="navbar-brand" href="index.html">
                        <img src="assets/img/logo_15.png" alt=""/>
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav m-auto mb-2 mb-lg-0 ps-4">
                           
                            <li class="nav-item"> <a class="nav-link" href="index.html"> DeSo App </a> </li>
                            <li class="nav-item"> <a class="nav-link" href="index.html#about" id="about" data-scroll-index="2" > TWTZ </a> </li>
                            <li class="nav-item"> <a class="nav-link" href="Whitepaper.pdf"> White Paper </a> </li>
                            <li class="nav-item"> <a class="nav-link" href="index.html#blog" id="blog" data-scroll-index="4"> Blog </a> </li>
                            <li class="nav-item"> <a class="nav-link" href="https://docs.google.com/forms/d/e/1FAIpQLSe3MMtPZnRvC_niaqja1UUpHdUzl4pPKKgnj23CQW0KeKgbHg/viewform"> Airdrop </a> </li>


                           
                        </ul>
                        <div class="nav-side">
                            <a href="https://discord.gg/ehhprcESQw" class="btn rounded-pill bg-red2 fw-bold text-white" target="_blank">
                                <span> Join Server </span>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
            {/* <!-- ====== end navbar ====== --> */}
        </div>
        <div class="container">
            <div class="content">
                <div class="row align-items-center">
                    <div class="col-lg-5">
                        <div class="info" style={{textAlign:" left"}}>

                            <h6> <img src="assets/img/icons/home_15_icon.png" alt="" class="icon-30 me-2"/> TWTZ token IPO & ICO </h6>
                            <h1> Initial Buyers of 49% TWTZ sale will earn a lifetime dividend </h1>


                            <div class="col-auto col-lg-8  ">
                                <label class="sr-only" for="inlineFormInputGroup">Enter BNB</label>
                                <div class="input-group mb-2">
                                  <div class="input-group-prepend">
                                    <div class="input-group-text"> BNB</div>
                                  </div>
                                  <input type="number" class="form-control" id="inlineFormInputGroup" placeholder="ex: 0.5" onChange={(e) => setbnbvalue(e.target.value)}/>
                                </div>
                              </div>



                           
                             
                              <h3 style={{fontSize: "12px "}}>Min : 0.1 BNB</h3><br/>
                        
                            <h2 style={{fontSize:"16px "}}>You receive :   <span style={{fontSize:" 20px "}}>{value}</span>  TWTZ</h2>
                            <br/>

                            {/* <a href="#" class="butn bg-yellowGreen text-dark fw-bold rounded-pill">

            {
                isconnected == "connected" ? 
                <>
                                <span onClick={() => myMint()}> <i class="fas fa-wallet me-2"></i> Buy  </span>
                </> :
                <>
                                <span onClick={() => Connect()}> <i class="fas fa-wallet me-2"></i> {btnTxt}  </span>
                </>
            }
            </a> */}

                            
                            <div onClick={() => myMint()} class="butn bg-yellowGreen text-dark fw-bold rounded-pill">
                                <span > <i class="fas fa-wallet me-2"></i> Buy  </span>
                            </div>

                            <a href="#how-to-buy " >
                                <span class="icon me-2">
                                    <i class="fas fa-play ms-1"></i>
                                </span>
                                {/* <strong class="small">How to Buy?</strong> */}
                            </a>

                             
                        </div>
                    </div>
                    <div class="col-lg-7  " >
                        <div class="img mt-50">
                            <img src="assets/img/header/head_15_img.svg" class='rsponsive' alt=""/>
                        </div>
                    </div>
                </div>
            </div>

            

            <div class="countdown-content respon_sive wow " >
                <div class="countdown-card"  data-aos="fade-up"   data-aos-duration="2000">
                    <div class="row align-items-center">
                        <div class="col-lg-3">
                            <div class="inf">
                                <h3> TWTZ Token Sale Is Live - Ends in  </h3>
                                <a href="#" class="color-red2 text-uppercase mt-15"> Connect & Buy Now <i class="fal fa-long-arrow-right ms-2"></i> </a>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="countdown px-3">
                                <div class="item">
                                    <h2 id="days"></h2>
                                    <small> days </small>
                                </div>
                                <div class="item">
                                    <h2 id="hours"></h2>
                                    <small> Hours </small>
                                </div>
                                <div class="item">
                                    <h2 id="minutes"></h2>
                                    <small> Minute </small>
                                </div>
                                <div class="item">
                                    <h2 id="seconds"></h2>
                                    <small> Seconds </small>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-5 ">
                            <div class="progs-content ps-4">
                                <p class="text-end mb-15"> Hard Cap </p>
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" style={{width:" 25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <div class="color-yellowGreen d-flex justify-content-between mt-20"> 
                                    <div class="l-side"> <span class="text-white-50"> Raisen: </span> <span class="counter"> <small> $ </small>     $20,455 </span> </div>
                                    <div class="r-side">    <span class="counter">  <small> $ </small>  1,56,800 </span> </div>
                                 </div>
                            </div>
                        </div>
                    </div>
                </div>
              
            </div>
        </div>
    </header>
    {/* <!-- ====== end header ====== --> */}

    {/* <!--Contents--> */}
    <main>

        {/* <!-- ====== start features ====== --> */}
        <section class="features style-15 star_main">
            <div class="container">
                <div class="section-head text-center mb-50 wow fadeInUp" data-aos="fade-up"   data-aos-duration="1000">
                    <h6 class="text-uppercase fw-bold lh-8"> <img src="assets/img/icons/home_15_icon.png" alt="" class="icon-30 me-2"/>  <span> Why buy TWTZ </span>  <img src="assets/img/icons/home_15_icon.png" alt="" class="icon-30 ms-2"/> </h6>
                    <h2 class="fs-1">Ownership, Dividends & 300X </h2>
                </div>
                <div class="content">
                    <div class="row">
                        <div class="col-lg-4" data-aos="fade-up"   data-aos-duration="1500">
                            <a href="#" class="features-card wow fadeInUp">
                                <div class="icon">
                                    <img src="assets/img/icons/features/28.png" alt=""/>
                                </div>
                                <h6> Project Ownership </h6>
                                <p>The amount of tokens you buy, the same ratio of ownership you hold for future benefits. </p>
                            </a>
                        </div>
                        <div class="col-lg-4" data-aos="fade-up"   data-aos-duration="2000">
                            <a href="#" class="features-card wow fadeInUp">
                                <div class="icon">
                                    <img src="assets/img/icons/features/29.png" alt=""/>
                                </div>
                                <h6> Earn Dividends </h6>
                                <p>  If you’re a IPO round participant, you will received lifetime dividend from the project business from ads & services  </p>
                            </a>
                        </div>
                        <div class="col-lg-4" data-aos="fade-up"   data-aos-duration="2500">
                            <a href="#" class="features-card wow fadeInUp">
                                <div class="icon">
                                    <img src="assets/img/icons/features/30.png" alt=""/>
                                </div>
                                <h6> Aim to moon </h6>
                                <p>With the total distribution, listing and project development we aim for a 300X by Dec 10th.  </p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- ====== end features ====== --> */}

        <div >
 
         <section class="timeline style-15  buy_features" id="how-to-buy">
            <div class="container">
                <div class="section-head mb-70 wow fadeInUp" data-aos="fade-up"   data-aos-duration="2000" >
                    <h6 class="text-uppercase fw-bold lh-8"> <img src="assets/img/icons/home_15_icon.png" alt="" class="icon-30 me-2"/>  <span> Guide </span> </h6>
                    <h2 class="fs-1"> How To Buy TWTZ in 4 Steps </h2>
                </div>
                <div class="content">
                    <div class="timeline-cards">
                        <div class="row">
                            <div class="col-lg-3">
                                <div class="timeline-card wow fadeInUp" data-aos="fade-up"   data-aos-duration="1000" >
                                    <div class="icon">
                                        <img src="assets/img/icons/tl1.png" alt=""/>
                                    </div>
                                    <div class="info">
                                        <h6> Open  Metmask/ Trust wallet  </h6>
                                    </div>
                                    <span class="year"> STEP1 </span>
                                </div>
                            </div>
                            <div class="col-lg-3">
                                <div class="timeline-card wow fadeInUp"  data-aos="fade-up"   data-aos-duration="1500">
                                    <div class="icon">
                                        <img src="assets/img/icons/tl2.png" alt=""/>
                                    </div>
                                    <div class="info">
                                        <h6> Enter www.twtzer.com   </h6>
                                    </div>
                                    <span class="year"> STEP2 </span>
                                </div>
                            </div>
                            <div class="col-lg-3">
                                <div class="timeline-card wow " data-aos="fade-up"   data-aos-duration="2000" >
                                    <div class="icon">
                                        <img src="assets/img/icons/tl3.png" alt=""/>
                                    </div>
                                    <div class="info">
                                        <h6> Go to Presale page, enter BNB </h6>
                                    </div>
                                    <span class="year"> STEP3 </span>
                                </div>
                            </div>
                            <div class="col-lg-3">
                                <div class="timeline-card wow fadeInUp" data-aos="fade-up"   data-aos-duration="2500" >
                                    <div class="icon">
                                        <img src="assets/img/icons/tl4.png" alt=""/>
                                    </div>
                                    <div class="info">
                                        <h6>Connect wallet and Buy</h6>
                                    </div>
                                    <span class="year"> STEP4 </span>
                                </div>
                            </div>
                        </div>
                        <div class="progress">
                            <div class="progress-bar wow animated" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" ></div>
                        </div>
                    </div>
                </div>
            </div>
        </section> 
            
        </div>

  
 


 

 

    </main>
    {/* <!--End-Contents--> */}

    {/* <!-- ====== start footer ====== --> */}
    <footer class="style-15">
        <div class="container">
           
            <div class="foot">
                <p> © 2022 Copyrights by twtzer All Rights Reserved. Designed with Twtzer Blockchain Future. </p>
            </div>
        </div>
    </footer>
    {/* <!-- ====== end footer ====== --> */}

    {/* <!-- ====== start to top button ====== --> */}
    {/* <a href="#" class="to_top bg-gray rounded-circle icon-40 d-inline-flex align-items-center justify-content-center">
        <i class="bi bi-chevron-up fs-6 text-dark"></i>
    </a> */}
    </div>
    </>
  )
}

export default Twt
