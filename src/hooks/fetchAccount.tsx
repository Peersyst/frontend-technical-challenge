import { useEffect, useState } from "react";
import { readAccountInfo } from "../services/api/xrpl";
import { AccountRoot } from "xrpl/dist/npm/models/ledger";

function useFetchAccountInfo(accountId: string): [AccountRoot | undefined, boolean] {
	const [accountInfo, setAccountInfo] = useState<AccountRoot | undefined>();
  const [isFetching, setIsFetching] = useState<boolean>(true);

  useEffect(() => {
    readAccountInfo(accountId)
    .then((res) => {
      setIsFetching(false);
      setAccountInfo(res.result.account_data);
    })
    .catch((err) => {
      setIsFetching(false);
      console.log(err);
    });
  }, [accountId]);

	return [accountInfo, isFetching];
};

export default useFetchAccountInfo;
