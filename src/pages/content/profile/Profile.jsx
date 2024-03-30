import ProfileContainer from "./container/ProfileContainer";
import "./Profile.css";
import ItemBox from "./container/ItemBox";
import FandomStoryContainer from "./container/FandomStoryContainer";

export default function Profile() {
  return (
    <div id="profile">
      <ProfileContainer />
      <ItemBox />
      <FandomStoryContainer />
    </div>
  );
}
