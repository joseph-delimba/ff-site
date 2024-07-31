export default function Header() {

    return (
        <nav class="navbar">
          <div class="navdiv"> 
            <div class="logo"><a href="/">FFTools</a></div>
            <ul>
              <li><a href="/">DRAFT BOARD</a></li>
              <li><a href="/trade-calc">TRADE CALC.</a></li>
              <button><a href="/sign-in">SIGN IN</a></button>
              <button><a href="/sign-up">SIGN UP</a></button>
            </ul>
          </div>
        </nav>
    )
}