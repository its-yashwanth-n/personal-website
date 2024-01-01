"use client";
// import SoundIcon from "@/components/SoundIcon";
import ThemeIcon from "@/components/ThemeIcon";
import { IconDiv, IconList, ListItems } from "@/styles/CommonStyles";
import { LAPTOP_ICON_SIZE } from "@/utils/constants";

const Effect = () => {
  return (
    <IconDiv style={{ right: "25px" }} id="effect-section" orientation="right">
      <IconList>
        <ListItems>
          <ThemeIcon iconSize={LAPTOP_ICON_SIZE} />
        </ListItems>
        {/* <ListItems>
          <SoundIcon iconSize={LAPTOP_ICON_SIZE} />
        </ListItems> */}
      </IconList>
    </IconDiv>
  );
};

export default Effect;
