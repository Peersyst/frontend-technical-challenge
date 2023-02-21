/** @format */
import NotFoundIcon from "../../assets/notFound.svg";
import {
    AccountNotFoundContainer,
    ExclamationError,
    TitleNotFound,
    HintError,
    Warning,
} from "./Page404.styles";

export function Page404() {
    return (
        <AccountNotFoundContainer>
            <ExclamationError>UH-OH!</ExclamationError>
            <TitleNotFound>Page not found</TitleNotFound>
            <HintError>Please double check your URL</HintError>
            <Warning>
                <img src={NotFoundIcon} alt="not-found-icon" />
                <span>Not found</span>
            </Warning>
        </AccountNotFoundContainer>
    );
}
