"use client";
import GenericIcon from "@/components/GenericIcon";
import { IconDiv, IconList, ListItems } from "@/styles/CommonStyles";
import {
  GITHUB_LABEL,
  GITHUB_LINK,
  LAPTOP_ICON_SIZE,
  LINKEDIN_LABEL,
  LINKEDIN_LINK,
  githubID,
  linkedInID,
} from "@/utils/constants";

const Social = () => {
  return (
    <IconDiv style={{ left: "25px" }} id="social-icons" orientation="left">
      <IconList>
        <ListItems>
          <GenericIcon
            iconId={linkedInID}
            iconLink={LINKEDIN_LINK}
            iconSize={LAPTOP_ICON_SIZE}
            ariaLabel={LINKEDIN_LABEL}
          />
        </ListItems>
        <ListItems>
          <GenericIcon
            iconId={githubID}
            iconLink={GITHUB_LINK}
            iconSize={LAPTOP_ICON_SIZE}
            ariaLabel={GITHUB_LABEL}
          />
        </ListItems>
      </IconList>
    </IconDiv>
  );
};

export default Social;
