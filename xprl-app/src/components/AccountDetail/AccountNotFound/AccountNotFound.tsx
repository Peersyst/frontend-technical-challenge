/** @format */
import NotFoundIcon from "../../../assets/notFound.svg";
import {
    AccountNotFoundContainer,
    ExclamationError,
    TitleNotFound,
    HintError,
    Warning,
} from "./AccountNotFound.styles";

export function AccountNotFound() {
    return (
        <AccountNotFoundContainer>
            <ExclamationError>UH-OH!</ExclamationError>
            <TitleNotFound>Account not found</TitleNotFound>
            <HintError>Please check your account ID</HintError>
            <Warning>
                <img src={NotFoundIcon} alt="not-found-icon" />
                <span>Not found</span>
            </Warning>
        </AccountNotFoundContainer>
    );
}
