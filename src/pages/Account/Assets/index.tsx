import React, { useCallback, useState } from 'react';
import type { RadioChangeEvent } from 'antd';
import { Radio } from 'antd';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import RadioText from './index.style';

function AssetsTab() {
  const location = useLocation();
  const navigate = useNavigate();

  const [value, setValue] = useState<number>(1);

  const onChange = useCallback((e: RadioChangeEvent) => {
    const { pathname } = location;
    const urlBase = pathname.substring(0, pathname.lastIndexOf('/'));
    navigate(`${urlBase}/${value === 2 ? 'issued' : 'nft'}`);
    setValue(e.target.value);
  }, [location, navigate]);

  return (
    <>
      <Radio.Group onChange={onChange} value={value}>
        <Radio value={1}><RadioText>Issued Tokens</RadioText></Radio>
        <Radio value={2}><RadioText>Non-Fungible Tokens</RadioText></Radio>
      </Radio.Group>
      <Outlet />
    </>
  );
}

export default AssetsTab;
