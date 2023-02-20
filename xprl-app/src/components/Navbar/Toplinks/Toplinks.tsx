/** @format */

import { TopLinksContainer, MenuItem, LinkItem } from "./Toplinks.styles";

export function Toplinks() {
    return (
        <>
            <TopLinksContainer>
                <MenuItem>
                    <LinkItem to="/">Explorer</LinkItem>
                </MenuItem>
                <MenuItem>
                    <LinkItem to="/">Network</LinkItem>
                </MenuItem>
                <LinkItem to={`https://xrpl.org/`} target="_blank">
                    XRPL.org
                </LinkItem>
                <LinkItem
                    to={`https://github.com/ripple/explorer`}
                    target="_blank"
                >
                    GitHub
                </LinkItem>
            </TopLinksContainer>
        </>
    );
}
