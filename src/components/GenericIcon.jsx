import { FiGithub, FiLinkedin, FiPhoneCall } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai/";
import { emailID, githubID, linkedInID, phoneID } from "@/utils/constants";
import styled from "@emotion/styled";

export const GenericIcon = ({ iconId, iconLink, ariaLabel, iconSize }) => {
  return (
    <IconLink
      id={iconId}
      href={iconLink}
      aria-label={ariaLabel}
      target="_blank"
      rel="noreferrer"
    >
      {iconId === linkedInID && <FiLinkedin size={iconSize} />}
      {iconId === githubID && <FiGithub size={iconSize} />}
      {iconId === emailID && <AiOutlineMail size={iconSize} />}
      {iconId === phoneID && <FiPhoneCall size={iconSize} />}
    </IconLink>
  );
};

const IconLink = styled.a`
  text-decoration: none;
  color: var(--primary-text-color);
`;

export default GenericIcon;
