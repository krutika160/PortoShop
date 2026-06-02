import {
  LuShirt,
  LuMonitor,
  LuGift,
  LuFlower2,
  LuMic,
  LuTrophy,
} from "react-icons/lu";

function HeroBanner() {
  return (
    <div className="category-sidebar">
      <h3>TOP CATEGORIES</h3>

      <ul>
        <li>
          <LuShirt />
          <span>Fashion</span>
        </li>

        <li>
          <LuMonitor />
          <span>Electronics</span>
        </li>

        <li>
          <LuGift />
          <span>Gifts</span>
        </li>

        <li>
          <LuFlower2 />
          <span>Home & Garden</span>
        </li>

        <li>
          <LuMic />
          <span>Music</span>
        </li>

        <li>
          <LuTrophy />
          <span>Sports</span>
        </li>
      </ul>

      <button>HUGE SALE - 70% OFF</button>
    </div>
  );
}

export default HeroBanner;