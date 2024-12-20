import React from 'react'
import './Topnavbar.css'
import { Link } from 'react-router-dom';
function Topnavbar() {
  return (
    <>
     <div class="topbar-one">
            <div class="container-fluid">
                <div class="topbar-one__inner">
                    <div class="col-lg-2 topbar-one__social">
                      <span>  
                      <Link to="https://www.linkedin.com/company/electronic-crop/">
                            <i class="fab fa-linkedin-in" aria-hidden="true"></i>
                            <span class="sr-only">linkedin</span>
                        </Link>
                      </span>
                       <span>
                       <Link to="https://twitter.com/i/flow/login?redirect_after_login=%2Fprecision_grow">
                            <i class="fab fa-facebook-f" aria-hidden="true"></i>
                            <span class="sr-only">twitter</span>
                        </Link>
                       </span>
                       <span>
                       <Link to="https://www.facebook.com/electroniccrop/">
                            <i class="fab fa-twitter" aria-hidden="true"></i>
                            <span class="sr-only">Facebook</span>
                        </Link>
                       </span>
                     <span>
                     <Link to="https://youtube.com/live/rEZCjzPjfRU?feature=share">
                            <i class="fab fa-instagram" aria-hidden="true"></i>
                            <span class="sr-only">Instagram</span>
                        </Link>
                     </span>
                     <span>
                       <Link to="https://youtube.com/live/rEZCjzPjfRU?feature=share" target="_blank">
                       <i class="fa-brands fa-youtube"></i>
                       <span class="sr-only">Youtube</span>
                        </Link>
                       </span>
                       </div>
                    <ul class="list-unstyled topbar-one__info">
                        <li class="topbar-one__info__item ">
                        <i class="fa-solid fa-location-dot"></i>
                            <Link href="https://www.google.com/maps/place/Citi+Tower+-+office+for+Lease/@18.9951622,72.8379555,18z/data=!4m10!1m2!2m1!1s61,+City+Tower,+Unit+No+2,+Dr.+S.S.+Rao+Road,+Parel,+Mumbai,+400012!3m6!1s0x3be7cefa72b00931:0xc71afeb9a1cb58e4!8m2!3d18.9968128!4d72.8404203!15sCkM2MSwgQ2l0eSBUb3dlciwgVW5pdCBObyAyLCBEci4gUy5TLiBSYW8gUm9hZCwgUGFyZWwsIE11bWJhaSwgNDAwMDEykgEWcmVhbF9lc3RhdGVfY29uc3VsdGFudOABAA!16s%2Fg%2F11c1p2ff78?entry=ttu" target="_blank">Unit No 22, Building No.2(A3), sector 1,Millennium Business Park, Mahape, Navi Mumbai, 400710</Link>
                        </li>
                        <li class="topbar-one__info__item text-nowrap">
                        <i class="fa-solid fa-envelope"></i>
                            <Link href="mailto:Support@gmail.com">mail@precisiongrow.co.in</Link>
                        </li>
                        <li class="topbar-one__info__item text-nowrap">
                        <i class="fa-solid fa-phone-volume"></i>
                            <Link href="tel:+8805002451">+91 - 8097283444</Link>
                        </li>
                     
                    </ul>

                    <div class="topbar-one__right">
                        <p class="topbar-one__right-text">an IoT device for Smart Farming</p>
                        <Link class="topbar-one__btn">
                            <span>About Us</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div> 
    </>
  )
}

export default Topnavbar;