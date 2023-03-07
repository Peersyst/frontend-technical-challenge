/* eslint-disable import/extensions */
import React, {
  Suspense, lazy, useCallback, useEffect, useState,
} from 'react';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import Tabs from '../../components/Tab';
import { TabsType } from '../../types';
import Spinner from '../../components/Spinner';
import useFetchAccountInfo from '../../hooks/fetchAccount';
import { DEFAULT_ACCOUNT } from '../../utils/constant';
import PageNotFound from '../NotFound';

const Header = lazy(() => import('./components/index')
  .then(({ Header }: any) => ({ default: Header })));

const tabs: TabsType = [
  {
    label: 'Transactions',
    index: 1,
  },
  {
    label: 'Assets',
    index: 2,
  },
];

function Account() {
  const { accountId } = useParams();
  const navigate = useNavigate();

  const [accountInfo, isFetching] = useFetchAccountInfo(accountId ?? DEFAULT_ACCOUNT);
  const [selectedTab, setSelectedTab] = useState<number>(tabs[0].index);

  const handleClick = useCallback((ind: number) => {
    const url = ind === 1 ? `/accounts/${accountId}/transactions`
      : `/accounts/${accountId}/assets/issued`;

    setSelectedTab(ind);
    navigate(url);
  }, [navigate, accountId]);

  useEffect(() => {
    document.title = `XRPL Explorer | ${accountId}`;
    navigate(`/accounts/${accountId}/transactions`);
  }, [accountId]);

  return (
    <>
      {!isFetching ? (
        <>
          {accountInfo ? (
            <>
              <Suspense fallback={<Spinner />}>
                <Header accountId={accountId} />
              </Suspense>
              <>
                <Tabs selectedTab={selectedTab} onClick={handleClick} tabs={tabs} />
                <Outlet />
              </>
            </>
          ) : (
            <PageNotFound />
          )}
        </>
      ) : (
        <Spinner />
      )}
    </>
  );
}

export default Account;
