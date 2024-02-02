import { FiGithub, FiLinkedin, FiPhoneCall } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai/";
import { emailID, githubID, linkedInID, phoneID } from "@/utils/constants";
import styled from "@emotion/styled";
import { PulsateForward } from "@/styles/CommonAnimations";

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
  &:hover {
    -webkit-animation: ${PulsateForward} 0.8s ease-in-out infinite both;
    animation: ${PulsateForward} 0.8s ease-in-out infinite both;
  }
`;

export default GenericIcon;
