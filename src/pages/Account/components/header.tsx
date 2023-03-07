import React, { useMemo } from "react";
import Spinner from "../../../components/Spinner";
import {
	AccountAddress, AccountHeaderContainer, AccountInfoContainer, FirstInfoColumn, ListElement, ListLabel, ListValue, SecondInfoColumn, SecondaryBalance, Title, Value,
} from "./header.style";
import { List } from "antd";
import Logo from "../../../components/Logo";
import { DEFAULT_ACCOUNT } from "../../../utils/constant";
import { IProps } from "../../../types";
import useFetchAccountInfo from "../../../hooks/fetchAccount";

const AccountHeader = ({ accountId }: IProps) => {
	const [accountInfo] = useFetchAccountInfo(accountId ?? DEFAULT_ACCOUNT);

	const parsedBalance = useMemo(() => accountInfo?.Balance ? parseFloat(accountInfo.Balance).toLocaleString("en-US", {
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
	}) : 0, [accountInfo?.Balance]);

	return (
		<AccountHeaderContainer>
			<AccountAddress>{accountId}</AccountAddress>
			{accountInfo ? (
				<AccountInfoContainer>
					<FirstInfoColumn>
						<SecondaryBalance>
							<Title>XRP Balance</Title>
							<Value>
								<Logo width="28px" />
								{parsedBalance}
							</Value>
						</SecondaryBalance>
					</FirstInfoColumn>
					<SecondInfoColumn>
						<Title>ACCOUNT INFO</Title>
						<List>
							<ListElement>
								<ListLabel>RESERVE:</ListLabel>
								<ListValue>
									<Logo width="12px" />
									{accountInfo.OwnerCount}
								</ListValue>
							</ListElement>
							<ListElement>
								<ListLabel>CURRENT SEQUENCE:</ListLabel>
								<ListValue>{accountInfo?.Sequence.toLocaleString()}</ListValue>
							</ListElement>
						</List>
					</SecondInfoColumn>
				</AccountInfoContainer>
			) : (
				<Spinner />
			)}
		</AccountHeaderContainer>
	);
};

export default AccountHeader;
