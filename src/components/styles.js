import styled from "styled-components";
import { Link } from 'react-router-dom';

// NavBar
const StyledNavBar = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  padding: 10px;
  padding-left: 30px;
  border-bottom: solid #dad9d4 1px;
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  color: black;
  font-size: 15px;
  text-decoration: none;
`;

const StyledLogo = styled(Link)`
  display: flex;
  align-items: center;
  color: #484848;
  font-size: 20px;
  text-decoration: none;
  font-weight: 600;
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  height: 60px;
  width: 150px;
  margin-left: 40px;
  margin-right: 60px;
`;

const ProfileButton = styled.button`
  width: 77px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-self: center;
  padding: 0px 9px;
  margin-left: 50px;
  border: solid #dad9d4 1px;
  border-radius: 21px;
  background-color: white;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  &:hover {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`;

const ProfileButtonIcon = styled.div`
  background-image: url(${props => props.image});
  width: 30px;
  height: 30px;
  background-size: cover;
  background-position: center;
  border-radius: 50%;
`;

// Home
const Splash = styled.div`
  display: flex;
  background-image: url("https://www.ghibli.jp/gallery/kazetachinu042.jpg");
  background-size: cover;
  width: 100%;
  height: 1000px;
  z-index: 0;
`;

const ShadowOverlay = styled.div`
  position: fixed;
  display: block;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.5);
  z-index: 2;
  cursor: pointer;
`;

// SearchBox
const StyledSearchBox = styled.div`
  width: 440px;
  height: 480px;
  display: flex;
  position: absolute;
  left: 75px;
  top: 170px;
  box-sizing: border-box;
  padding: 35px;
  background-color: white;
  flex-direction: column;
  justify-content: center;
  box-shadow: 2px 2px 5px grey;
  border-radius: 4px;
  opacity: 0.9;
`;

const StyledHeader = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: #484848;
  margin-left: 5px;
`;

const StyledLabel = styled.label`
  font-size: 12px;
  color: #484848;
  font-weight: 600;
`;

const StyledInput = styled.input`
  border: 1px solid lightgray;
  height: 50px;
  color: #484848;
  margin-bottom: 13px;
  margin-top: 8px;
  padding-left: 10px;
  padding-right: 10px;
  font-size: 15px;
  border-radius: 4px;
`;

const CheckInOut = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const SearchButton = styled.input`
  background-color: #FF5A5F;
  height: 50px;
  width: 100px;
  margin-top: 9px;
  align-self: flex-end;
  color: white;
  font-size: 15px;
  font-weight: 600;
  text-align: center;
  cursor: pointer;
  border: 1px solid white;
  border-radius: 5px;
`;

// Footer
const StyledFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  width:100%;
  height: 50px;
  padding: 0px 30px;
  border-top: solid #dad9d4 1px;
`;

const FooterLinkContainer = styled(LinkContainer)`
  height: 30px;
`;

const FooterStyledLink = styled(StyledLink)`
  align-items: flex-end;
  font-size: 15px;
`;

const StyledSpan = styled.span`
  display: flex;
  align-items: flex-end;
  height: 30px;
  color: black;
  font-size: 15px;
  margin-right: 60px;
`;

export {
// NavBar
  StyledNavBar,
  StyledLink,
  StyledLogo,
  LinkContainer,
  ProfileButton,
  ProfileButtonIcon,
// Home
  Splash,
  ShadowOverlay,
// SearchBox
  StyledSearchBox,
  StyledHeader,
  StyledLabel,
  StyledInput,
  CheckInOut,
  InputContainer,
  SearchButton,
// Footer
  StyledFooter,
  FooterLinkContainer,
  FooterStyledLink,
  StyledSpan
};
